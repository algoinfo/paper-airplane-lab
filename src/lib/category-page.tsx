import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CategoryPageView } from "@/components/categories/CategoryPageView";
import { getCategoryByPath } from "@/data/categories";
import { createMetadata } from "@/lib/seo";

export function buildCategoryPage(path: string) {
  const category = getCategoryByPath(path);

  const generateMetadata = async (): Promise<Metadata> => {
    if (!category) return {};
    return createMetadata({
      title: category.metaTitle.replace(" | Paper Airplane Lab", ""),
      description: category.metaDescription,
      path: category.path,
    });
  };

  const Page = () => {
    if (!category) notFound();
    return <CategoryPageView category={category} />;
  };

  return { generateMetadata, Page };
}

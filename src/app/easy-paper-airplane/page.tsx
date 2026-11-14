import { buildCategoryPage } from "@/lib/category-page";

const { generateMetadata, Page } = buildCategoryPage("/easy-paper-airplane");

export { generateMetadata };
export default Page;

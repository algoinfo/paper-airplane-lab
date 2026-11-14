import { buildCategoryPage } from "@/lib/category-page";

const { generateMetadata, Page } = buildCategoryPage("/stunt-paper-airplane");

export { generateMetadata };
export default Page;

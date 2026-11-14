import { buildCategoryPage } from "@/lib/category-page";

const { generateMetadata, Page } = buildCategoryPage("/fast-paper-airplane");

export { generateMetadata };
export default Page;

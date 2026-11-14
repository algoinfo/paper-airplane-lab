import { buildCategoryPage } from "@/lib/category-page";

const { generateMetadata, Page } = buildCategoryPage("/paper-glider");

export { generateMetadata };
export default Page;

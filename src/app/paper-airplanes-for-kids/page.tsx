import { buildCategoryPage } from "@/lib/category-page";

const { generateMetadata, Page } = buildCategoryPage("/paper-airplanes-for-kids");

export { generateMetadata };
export default Page;

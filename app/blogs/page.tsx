import AllPostsOnBlog from "../_components/ui/pages/AllPostsOnBlog";
import { CONSTANTS } from "../_constants";
import { BlogArticleType } from "../_types/blogArticleType";

export default async function Page() {
  // データ取得
  const res = await fetch(`${CONSTANTS.API_ENDPOINT_PREFIX}/api/blogs?postsNum=10`, { cache: "no-store" });
  const articles = (await res.json()) as BlogArticleType[];
  return (
    <>
      <div className="my-16">
        <AllPostsOnBlog articles={articles} />
      </div>
    </>
  );
}

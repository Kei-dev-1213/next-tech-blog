import PostsOnBlog from "./_components/ui/pages/PostsOnBlog";
import PostOnQiita from "./_components/ui/pages/PostsOnQiita";
import { CONSTANTS } from "./_constants";
import { BlogArticleType } from "./_types/blogArticleType";
import { QiitaArticleType } from "./_types/qiitaArticleType";

export default async function Page() {
  // データ取得
  // Qiita記事一覧
  let qiitaArticles = [];
  const resFromQiita = await fetch(`${CONSTANTS.API_ENDPOINT_PREFIX}/api/qiita?postsNum=4`, { cache: "no-store" });
  if (resFromQiita.ok) {
    const json = await resFromQiita.json();
    qiitaArticles = json ? (json as QiitaArticleType[]) : [];
  }

  // ブログ記事一覧
  let blogArticles = [];
  const resFromBlog = await fetch(`${CONSTANTS.API_ENDPOINT_PREFIX}/api/blogs?postsNum=4`, { cache: "no-store" });
  if (resFromBlog.ok) {
    const json = await resFromBlog.json();
    blogArticles = json ? (json as BlogArticleType[]) : [];
  }

  return (
    <>
      <div className="mb-16">
        <PostOnQiita articles={qiitaArticles} />
        <PostsOnBlog articles={blogArticles} />
      </div>
    </>
  );
}

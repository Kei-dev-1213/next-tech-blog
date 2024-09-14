import AllPostsOnQiita from "../_components/ui/pages/AllPostsOnQiita";
import { CONSTANTS } from "../_constants";
import { QiitaArticleType } from "../_types/qiitaArticleType";

export default async function Page() {
  // データ取得
  const res = await fetch(`${CONSTANTS.API_ENDPOINT_PREFIX}/api/qiita?postsNum=10`, { cache: "no-store" });
  const articles = (await res.json()) as QiitaArticleType[];

  return (
    <>
      <div className="my-16">
        <AllPostsOnQiita articles={articles} />
      </div>
    </>
  );
}

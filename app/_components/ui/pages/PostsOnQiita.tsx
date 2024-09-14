import React from "react";
import { CONSTANTS } from "../../../_constants";
import PostTitle from "../parts/PostTitle";
import MorePostsButton from "../parts/MorePostsButton";
import VerticalCard from "../parts/VerticalCard";
import { QiitaArticleType } from "../../../_types/qiitaArticleType";
import Link from "next/link";
import WhileInView from "../parts/WhileInView";

const PostOnQiita = async () => {
  try {
    // データ取得
    const res = await fetch(`${CONSTANTS.API_ENDPOINT_PREFIX}/api/qiita?postsNum=4`, { cache: "no-store" });
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const json = await res.json();
    const articles = json ? (json as QiitaArticleType[]) : [];

    return (
      <>
        <div className="flex justify-between mt-16">
          <PostTitle title="Posts On Qiita" color="yellow" />
          <MorePostsButton path="individuals" />
        </div>

        <div className="grid grid-cols-4 gap-x-10 w-full">
          {articles.map((article, index) => (
            <Link href={article.url} target="_blank" key={`${article.title}_${index}`}>
              <WhileInView delay={index * 0.2}>
                <VerticalCard article={article} />
              </WhileInView>
            </Link>
          ))}
        </div>
      </>
    );
  } catch (e) {
    console.error(e);
    return (
      <>
        <div className="flex justify-between mt-16">
          <PostTitle title="Posts On Qiita" color="yellow" />
        </div>

        <div className="mt-4">
          <div>データの取得に失敗しました。</div>
        </div>
      </>
    );
  }
};

export default PostOnQiita;

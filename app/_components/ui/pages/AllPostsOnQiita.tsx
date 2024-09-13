import React from "react";
import { CONSTANTS } from "../../../_constants";
import PostTitle from "../parts/PostTitle";
import { QiitaArticleType } from "../../../_types/qiitaArticleType";
import BackButton from "../parts/BackButton";
import HorizontalCard from "../parts/HorizontalCard";

const AllPostsOnQiita = async () => {
  // データ取得
  const res = await fetch(`${CONSTANTS.API_ENDPOINT_PREFIX}/api/qiita?postsNum=10`, { cache: "no-store" });
  const articles = (await res.json()) as QiitaArticleType[];

  return (
    <>
      <div className="flex justify-between">
        <PostTitle title="All Posts On Qiita" />
        <BackButton />
      </div>

      <div className="grid grid-rows-1 gap-y-10 w-full">
        {articles.map((article, index) => (
          <a href={article.url} target="_blank" key={`${article.title}_${index}`}>
            <HorizontalCard article={article} />
          </a>
        ))}
      </div>
    </>
  );
};

export default AllPostsOnQiita;

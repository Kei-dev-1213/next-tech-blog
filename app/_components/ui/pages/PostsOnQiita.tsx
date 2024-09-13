import React from "react";
import { CONSTANTS } from "../../../_constants";
import PostTitle from "../parts/PostTitle";
import MorePostsButton from "../parts/MorePostsButton";
import VerticalCard from "../parts/VerticalCard";
import { QiitaArticleType } from "../../../_types/qiitaArticleType";
import Link from "next/link";

const PostOnQiita = async () => {
  // データ取得
  const res = await fetch(`${CONSTANTS.API_ENDPOINT_PREFIX}/api/qiita?postsNum=4`, { cache: "no-store" });
  const articles = (await res.json()) as QiitaArticleType[];

  return (
    <>
      <div className="flex justify-between mt-16">
        <PostTitle title="Posts On Qiita" color="yellow" />
        <MorePostsButton path="individuals" />
      </div>

      <div className="grid grid-cols-4 gap-x-10 w-full">
        {articles.map((article, index) => (
          <Link href={article.url} target="_blank" key={`${article.title}_${index}`}>
            <VerticalCard article={article} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default PostOnQiita;

import React from "react";
import { CONSTANTS } from "../../../_constants";
import PostTitle from "../parts/PostTitle";
import BackButton from "../parts/BackButton";
import HorizontalCard from "../parts/HorizontalCard";
import { BlogArticleType } from "../../../_types/blogArticleType";

const AllPostsOnBlog = async () => {
  // データ取得
  const res = await fetch(`${CONSTANTS.API_ENDPOINT_PREFIX}/api/blog?postsNum=10`, { cache: "no-store" });
  const articles = (await res.json()) as BlogArticleType[];

  return (
    <>
      <div className="flex justify-between">
        <PostTitle title="All Posts On Blog" />
        <BackButton />
      </div>

      <div className="grid grid-rows-1 gap-y-10 w-full">
        {articles.map((article, index) => (
          <a href="#" target="_blank" key={`${article.title}_${index}`}>
            <HorizontalCard article={article} />
          </a>
        ))}
      </div>
    </>
  );
};

export default AllPostsOnBlog;

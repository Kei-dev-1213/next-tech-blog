import React from "react";
import { CONSTANTS } from "../../../_constants";
import PostTitle from "../parts/PostTitle";
import BackButton from "../parts/BackButton";
import HorizontalCard from "../parts/HorizontalCard";
import { BlogArticleType } from "../../../_types/blogArticleType";
import Link from "next/link";

const AllPostsOnBlog = async () => {
  // データ取得
  const res = await fetch(`${CONSTANTS.API_ENDPOINT_PREFIX}/api/blogs?postsNum=10`, { cache: "no-store" });
  const articles = (await res.json()) as BlogArticleType[];

  return (
    <>
      <div className="flex justify-between">
        <PostTitle title="All Posts On Blog" color="red" />
        <BackButton />
      </div>

      <div className="grid grid-rows-1 gap-y-10 w-full">
        {articles.map((article, index) => (
          <Link href={`/blogs/${article.id}`} key={`${article.title}_${index}`}>
            <HorizontalCard article={article} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default AllPostsOnBlog;

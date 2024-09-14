import React, { FC } from "react";
import PostTitle from "../parts/PostTitle";
import BackButton from "../parts/BackButton";
import HorizontalCard from "../parts/HorizontalCard";
import { BlogArticleType } from "../../../_types/blogArticleType";
import Link from "next/link";
import WhileInView from "../parts/WhileInView";

const AllPostsOnBlog: FC<{ articles: BlogArticleType[] }> = ({ articles }) => {
  return (
    <>
      <div className="flex justify-between">
        <PostTitle title="All Posts On Blog" color="red" />
        <BackButton />
      </div>

      <div className="grid grid-rows-1 gap-y-10 w-full">
        {articles.map((article, index) => (
          <Link href={`/blogs/${article.id}`} key={`${article.title}_${index}`}>
            <WhileInView>
              <HorizontalCard article={article} />
            </WhileInView>
          </Link>
        ))}
      </div>
    </>
  );
};

export default AllPostsOnBlog;

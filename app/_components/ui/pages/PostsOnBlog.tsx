import React, { FC } from "react";
import PostTitle from "../parts/PostTitle";
import MorePostsButton from "../parts/MorePostsButton";
import VerticalCard from "../parts/VerticalCard";
import { BlogArticleType } from "../../../_types/blogArticleType";
import Link from "next/link";
import WhileInView from "../parts/WhileInView";

const PostsOnBlog: FC<{ articles: BlogArticleType[] }> = ({ articles }) => {
  return (
    <>
      <div className="flex justify-between mt-16">
        <PostTitle title="Posts On Blog" color="green" />
        <MorePostsButton path="blogs" />
      </div>

      {articles.length ? (
        <div className="grid grid-cols-4 gap-x-10 w-full">
          {articles.map((article, index) => (
            <Link href={`/blogs/${article.id}`} key={`${article.title}_${index}`}>
              <WhileInView delay={index * 0.2}>
                <VerticalCard article={article} />
              </WhileInView>
            </Link>
          ))}
        </div>
      ) : (
        <div className="mt-4">
          <div>表示データがありません。</div>
        </div>
      )}
    </>
  );
};

export default PostsOnBlog;

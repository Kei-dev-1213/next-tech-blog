import React from "react";
import { CONSTANTS } from "../../../_constants";
import PostTitle from "../parts/PostTitle";
import MorePostsButton from "../parts/MorePostsButton";
import VerticalCard from "../parts/VerticalCard";
import { BlogArticleType } from "../../../_types/blogArticleType";
import Link from "next/link";
import WhileInView from "../parts/WhileInView";

const PostsOnBlog = async () => {
  try {
    // データ取得
    const res = await fetch(`${CONSTANTS.API_ENDPOINT_PREFIX}/api/blogs?postsNum=4`, { cache: "no-store" });
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const json = await res.json();
    const articles = json ? (json as BlogArticleType[]) : [];

    return (
      <>
        <div className="flex justify-between mt-16">
          <PostTitle title="Posts On Blog" color="green" />
          <MorePostsButton path="blogs" />
        </div>

        <div className="grid grid-cols-4 gap-x-10 w-full">
          {articles.map((article, index) => (
            <Link href={`/blogs/${article.id}`} key={`${article.title}_${index}`}>
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
          <PostTitle title="Posts On Blog" color="green" />
        </div>

        <div className="mt-4">
          <div>データの取得に失敗しました。</div>
        </div>
      </>
    );
  }
};

export default PostsOnBlog;

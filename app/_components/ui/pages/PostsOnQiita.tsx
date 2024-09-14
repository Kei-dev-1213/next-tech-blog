import React, { FC } from "react";
import PostTitle from "../parts/PostTitle";
import MorePostsButton from "../parts/MorePostsButton";
import VerticalCard from "../parts/VerticalCard";
import { QiitaArticleType } from "../../../_types/qiitaArticleType";
import Link from "next/link";
import WhileInView from "../parts/WhileInView";

const PostOnQiita: FC<{ articles: QiitaArticleType[] }> = ({ articles }) => {
  return (
    <>
      <div className="flex justify-between mt-16">
        <PostTitle title="Posts On Qiita" color="yellow" />
        <MorePostsButton path="individuals" />
      </div>

      {articles.length ? (
        <div className="grid grid-cols-4 gap-x-10 w-full">
          {articles.map((article, index) => (
            <Link href={article.url} target="_blank" key={`${article.title}_${index}`}>
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

export default PostOnQiita;

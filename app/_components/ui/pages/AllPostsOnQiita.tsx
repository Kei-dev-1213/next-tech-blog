import React, { FC } from "react";
import PostTitle from "../parts/PostTitle";
import { QiitaArticleType } from "../../../_types/qiitaArticleType";
import BackButton from "../parts/BackButton";
import HorizontalCard from "../parts/HorizontalCard";
import Link from "next/link";
import WhileInView from "../parts/WhileInView";

const AllPostsOnQiita: FC<{ articles: QiitaArticleType[] }> = ({ articles }) => {
  return (
    <>
      <div className="flex justify-between">
        <PostTitle title="All Posts On Qiita" color="blue" />
        <BackButton />
      </div>

      <div className="grid grid-rows-1 gap-y-10 w-full">
        {articles.map((article, index) => (
          <Link href={article.url} target="_blank" key={`${article.title}_${index}`}>
            <WhileInView>
              <HorizontalCard article={article} />
            </WhileInView>
          </Link>
        ))}
      </div>
    </>
  );
};

export default AllPostsOnQiita;

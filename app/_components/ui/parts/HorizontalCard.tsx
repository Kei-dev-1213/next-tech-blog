import React, { FC } from "react";
import { QiitaArticleType } from "../../../_types/qiitaArticleType";
import { BlogArticleType } from "../../../_types/blogArticleType";

const HorizontalCard: FC<{ article: QiitaArticleType | BlogArticleType }> = ({ article }) => {
  const { title, thumbnail, created_at } = article;
  return (
    <div className="card lg:card-side bg-base-100 w-full shadow-xl cursor-pointer h-[150px]">
      <figure>
        <img
          src={thumbnail}
          alt={title}
          className="hover:opacity-80 hover:scale-110 transition-all duration-700 h-[150px]"
          data-testid="article-image"
        />
      </figure>
      <div className="card-body hover:bg-gray-50 transition-all">
        <div className="flex flex-col h-full justify-center gap-y-4">
          <h2 className="card-title" data-testid="article-title">
            {title}
          </h2>
          <span className="text-sm text-gray-500" data-testid="article-date">
            {new Date(created_at).toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default HorizontalCard;

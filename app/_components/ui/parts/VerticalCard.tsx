import React, { FC } from "react";

import { QiitaArticleType } from "../../../_types/qiitaArticleType";
import { BlogArticleType } from "../../../_types/blogArticleType";

const VerticalCard: FC<{ article: QiitaArticleType | BlogArticleType }> = ({ article }) => {
  const { title, thumbnail, created_at } = article;
  return (
    <div className="card bg-base-100 w-full shadow-xl cursor-pointer">
      <figure>
        <img
          src={thumbnail}
          alt={title}
          className="hover:opacity-80 hover:scale-110 transition-all duration-700"
          data-testid="article-image"
        />
      </figure>
      <div className="card-body py-5 h-36 hover:bg-gray-50 transition-all">
        <span className="text-sm text-gray-500" data-testid="article-date">
          {new Date(created_at).toLocaleString()}
        </span>
        <h2 className="card-title overflow-hidden text-ellipsis" data-testid="article-title">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default VerticalCard;

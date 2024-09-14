import React, { FC } from "react";
import parse from "html-react-parser";
import { BlogArticleType } from "../../../_types/blogArticleType";

const BlogDetail: FC<{ article: BlogArticleType }> = ({ article }) => {
  return (
    <div className="my-16 w-7/12 mx-auto">
      <img
        src={article && article.eyecatch.url}
        alt={article && article.id}
        className="rounded-lg object-cover "
        data-testid="article-image"
      />

      <div className="py-8">
        <h2 className="text-4xl font-bold mb-2" data-testid="article-title">
          {article && article.title}
        </h2>
        <p className="text-gray-500 text-right" data-testid="article-date">
          {article && new Date(article.createdAt).toLocaleString()}
        </p>
        <div className="mt-6" data-testid="article-content">
          {article && parse(article.content)}
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;

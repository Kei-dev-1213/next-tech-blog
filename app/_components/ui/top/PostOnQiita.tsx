import React from "react";
import { sacramento } from "../../../_utils/fonts";
import { CONSTANTS } from "../../../_constants";
import PostTitle from "../parts/PostTitle";

const PostOnQiita = async () => {
  // データ取得
  const res = await fetch(`${CONSTANTS.API_ENDPOINT_PREFIX}/api/qiita?postsNum=4`, { cache: "no-store" });
  const articles = await res.json();

  return (
    <>
      <div className="flex justify-between">
        <PostTitle title="Post On Qiita" />
        <button className="btn btn-accent">もっと見る ➔</button>
      </div>

      <div className="grid grid-cols-4 gap-x-10 w-full">
        {articles.map(({ title, created_at, url, thumbnail }, index) => (
          <a href={url} target="_blank" key={`${title}_${index}`}>
            <div className="card bg-base-100 w-full shadow-xl cursor-pointer">
              <figure>
                <img
                  src={CONSTANTS.THUMBNAIL_IMAGE_URL}
                  alt={title}
                  className="hover:opacity-80 hover:scale-110 transition-all duration-700"
                />
              </figure>
              <div className="card-body py-5 h-36 hover:bg-gray-50 transition-all">
                <span className="text-sm text-gray-500">{new Date(created_at).toLocaleString()}</span>
                <h2 className="card-title">{title}</h2>
              </div>
            </div>
          </a>
        ))}
      </div>
    </>
  );
};

export default PostOnQiita;

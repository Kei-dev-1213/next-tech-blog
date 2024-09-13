import React, { FC } from "react";
import { sacramento } from "../../../_utils/fonts";

const PostTitle: FC<{ title: string; color: string }> = ({ title, color }) => {
  return (
    <>
      <h2 className={`text-4xl ${sacramento.className} inline-block mb-4 pl-6 relative`}>
        <div
          style={{
            backgroundColor: `${color}`,
            height: "48px",
            width: "6px",
            borderRadius: "8px",
            position: "absolute",
            top: "-8px",
            left: "0px",
          }}
        ></div>
        <strong> {title}</strong>
      </h2>
    </>
  );
};

export default PostTitle;

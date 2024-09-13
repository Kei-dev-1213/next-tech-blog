"use client";

import React, { FC } from "react";
import { sacramento } from "../../../_utils/fonts";

const PostTitle: FC<{ title: string }> = ({ title }) => {
  return (
    <h2 className={`text-4xl ${sacramento.className} inline-block mb-4 border-l-8 border-yellow-200 pl-6`}>
      <strong> {title}</strong>
    </h2>
  );
};

export default PostTitle;

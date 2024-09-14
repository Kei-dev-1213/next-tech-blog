"use client";

import { useRouter } from "next/navigation";

import React, { FC, memo } from "react";

const MorePostsButton: FC<{ path: string }> = memo(({ path }) => {
  const router = useRouter();

  return (
    <button className="btn btn-accent" data-testid="more-show-button" onClick={() => router.push(path)}>
      もっと見る ➔
    </button>
  );
});

export default MorePostsButton;

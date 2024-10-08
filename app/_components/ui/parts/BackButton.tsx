"use client";

import { useRouter } from "next/navigation";

import React, { FC, memo } from "react";

const BackButton: FC = memo(() => {
  const router = useRouter();

  return (
    <button className="btn btn-primary" data-testid="more-back-button" onClick={() => router.push("/")}>
      戻る
    </button>
  );
});

export default BackButton;

"use client";

import { useRouter } from "next/navigation";

import React, { FC } from "react";

const BackButton: FC = () => {
  const router = useRouter();

  return (
    <button className="btn btn-primary" onClick={() => router.push("/")}>
      戻る
    </button>
  );
};

export default BackButton;

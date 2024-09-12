import React from "react";
import { sacramento } from "../../_utils/fonts";
import Link from "next/link";

const Header = () => {
  return (
    <div className="py-10 bg-green-200 shadow-lg">
      <Link href="/">
        <h1 className={`text-5xl pl-8 ${sacramento.className} inline-block hover:opacity-70`}>
          <strong>Next-Tech-Blog</strong>
        </h1>
      </Link>
    </div>
  );
};

export default Header;

import React from "react";
import { sacramento } from "../../_utils/fonts";
import Link from "next/link";
import { CONSTANTS } from "../../_constants";

const Header = () => {
  return (
    <div className={`h-[${CONSTANTS.HEADER_HEIGHT}] bg-green-200 shadow-lg content-center`}>
      <Link href="/">
        <h1
          className={`text-5xl pl-8 ${sacramento.className} inline-block hover:opacity-70`}
          data-testid="header-title"
        >
          <strong>Next-Tech-Blog2</strong>
        </h1>
      </Link>
    </div>
  );
};

export default Header;

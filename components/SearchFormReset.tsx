"use client";
import { X } from "lucide-react";
import Link from "next/link";
import React from "react";

const SearchFormReset = () => {
  return (
    <Link href="/" className="search-btn text-white" prefetch={false}>
      <X className="size-5" />
    </Link>
  );
};

export default SearchFormReset;

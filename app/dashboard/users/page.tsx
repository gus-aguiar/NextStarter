import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div>
      <h1>Dashboard Users</h1>
      <ul className="mt-10">
        <li>
          <Link href="/dashboard/users/1"> User1</Link>
        </li>
        <li>
          <Link href="/dashboard/users/2"> User2</Link>
        </li>
        <li>
          <Link href="/dashboard/users/1"> User3</Link>
        </li>
        <li>
          <Link href="/dashboard/users/4"> User4</Link>
        </li>
      </ul>
    </div>
  );
};

export default Page;

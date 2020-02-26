// Here's an example of what a sample page looks like.
// See more: https://nextjs.org/learn/basics/getting-started/first-page

import Link from "next/link";

export default function index() {
  return (
    <div>
      <Link href="/about">
        <a title="About Page">About Page</a>
        </Link>
        <p>Hello DSC!</p>
    </div>
  );
}

import Link from "next/link";

export default function AnotherPost() {
  return (
    <>
      <h1>Another Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <h2>
        <Link href="/posts/first-post">First Post</Link>
      </h2>
    </>
  );
}

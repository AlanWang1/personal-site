import type { ReactElement } from "react";
import Link from "next/link";

type Children = {
  children: ReactElement;
};

export default function Layout({ children }: Children) {
  return (
    <>
      <body className="px-12 bg-beige min-h-screen">
        <header className="flex flex-row pt-12 max-w-4xl m-auto">
          <nav className="flex flex-row-reverse ml-auto">
            <Link className="ml-12" href="/">
              Resume
            </Link>
            <Link className="mx-12" href="/blog/home">
              Writings
            </Link>
            <Link className="mx-12" href="/">
              Home
            </Link>
          </nav>
        </header>
        <main className="max-w-4xl m-auto mt-24 mb-12">{children}</main>
      </body>
      <footer className="flex flex-col items-center mb-6">
        <p>Made with 🫶</p>
        <p>By Alan Wang © 2023</p>
      </footer>
    </>
  );
}

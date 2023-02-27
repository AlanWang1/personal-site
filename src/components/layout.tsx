import type { ReactElement } from "react";
import Link from "next/link";
import Navbar from "./navbar";

type Children = {
  children: ReactElement;
};

export default function Layout({ children }: Children) {
  return (
    <>
      <body className="bg-beige min-h-screen mx-4">
        <header className="flex flex-row pt-12 max-w-4xl m-auto">
          <Navbar />
        </header>
        <main className="max-w-4xl m-auto mt-24 mb-12">{children}</main>
      </body>
      <footer className="flex flex-col items-center mb-6 mx-12">
        <p>Made with 🫶</p>
        <p>By Alan Wang © 2023</p>
      </footer>
    </>
  );
}

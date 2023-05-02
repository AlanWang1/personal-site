import type { ReactElement } from "react";
import Link from "next/link";
import Navbar from "./navbar";

type Children = {
  children: ReactElement;
};

export default function Layout({ children }: Children) {
  return (
    <>
      <div className="bg-beige min-h-screen mx-6">
        <header className="flex flex-row pt-12 max-w-4xl m-auto">
          <Navbar />
        </header>
        <main className="max-w-4xl m-auto md:mt-24 mt-12 mb-12">
          {children}
        </main>
      </div>
      <footer className="flex flex-col items-center mb-6 mx-12 font-sans">
        <p>Made with 🫶</p>
        <p>By Alan Wang © 2023</p>
      </footer>
    </>
  );
}

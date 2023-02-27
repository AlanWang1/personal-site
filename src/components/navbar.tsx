import React from "react";
import Link from "next/link";

export default function Navbar() {
  const mobileOnClick = () => {
    const menu = document.querySelector(".mobile-menu");
    const hamburger = document.querySelector(".hamburger");
    const close = document.querySelector(".close-menu");
    menu?.classList.toggle("hidden");
    hamburger?.classList.toggle("hidden");
    close?.classList.toggle("hidden");
  };

  return (
    <nav className="md:flex md:flex-row-reverse ml-auto">
      <div className="md:flex md:flex-row-reverse md:ml-auto hidden">
        <Link className="ml-12" href="/resume.pdf">
          Resume
        </Link>
        <Link className="mx-12" href="/blog/home">
          Writing
        </Link>
        <Link className="mx-12" href="/">
          Home
        </Link>
      </div>

      <div className="md:hidden flex flex-col">
        <div className="flex flex-col gap-3">
          <button
            className="outline-none ml-auto hamburger"
            onClick={mobileOnClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
          <button className="outline-non ml-auto" onClick={mobileOnClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="close-menu hidden"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          <div className="hidden mobile-menu flex flex-col gap-3">
            <Link href="/" className="ml-auto text-xl">
              Home
            </Link>
            <Link href="/blog/home" className="ml-auto text-xl">
              Writing
            </Link>
            <Link href="/resume.pdf" className="ml-auto text-xl">
              Resume
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

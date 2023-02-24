import type { ReactElement } from "react";

type Children = {
  children: ReactElement;
};

export default function Layout({ children }: Children) {
  return (
    <>
      <body className="px-12 bg-beige min-h-screen">
        <header className="flex flex-row pt-12 max-w-4xl m-auto">
          <nav className="flex flex-row-reverse ml-auto">
            <div className="ml-12"> Resume </div>
            <div className="mx-12"> Writings</div>
            <div className="mx-12"> Home </div>
          </nav>
        </header>
        <main className="max-w-4xl m-auto mt-24 mb-12">{children}</main>
      </body>
      <footer className="flex flex-row justify-center">
        By Alan Wang 2023
      </footer>
    </>
  );
}

import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

type blog = {
  date: Date;
  title: string;
  slug: string;
};

type blogProps = {
  blogs: Array<blog>;
};

export default function Home({ blogs }: blogProps) {
  return (
    <body className="px-12 bg-beige">
      <header className="flex flex-row pt-12 max-w-4xl m-auto">
        <nav className="flex flex-row-reverse ml-auto">
          <div className="ml-12"> Resume </div>
          <div className="mx-12"> Writings</div>
          <div className="mx-12"> Home </div>
        </nav>
      </header>
      <main className="max-w-4xl m-auto">
        <section className="flex flex-row content-center items-center pt-24 pb-12">
          <section className="flex flex-col pr-14">
            <h1 className="font-semibold pb-6 text-5xl">
              <span className="inline-block text-white text-opacity-0 bg-gradient-to-r from-blue to-green bg-clip-text">
                {" "}
                Hi, I'm Alan
              </span>{" "}
              👋
            </h1>
            <p className="pb-6">
              I’m currently a Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore
            </p>
            <p>
              Outside of work I like to Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore
            </p>
          </section>
          <div className="drop-shadow-md">
            <div className="rounded-full bg-gradient-to-r from-blue to-green p-1.5">
              <Image
                src="/assets/Alan Wang.jpg"
                width={600}
                height={600}
                alt="Picture of Alan Wang"
                className="rounded-full"
              ></Image>
            </div>
          </div>
        </section>
        <section className="flex flex-col space-y-6 pb-12">
          <h2 className="text-2xl font-semibold">Where I've been</h2>
          <a className="flex flex-col items-center bg-white rounded-lg drop-shadow-md md:flex-row md:max-w-xl min-w-full">
            <div className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg">
              {" "}
            </div>
            <div className="flex flex-col justify-between p-4 leading-normal">
              <p className="mb-2 text-xl font-medium">CIBC</p>
              <p className="mb-3">Backend Developer Intern</p>
            </div>
          </a>
          <a className="flex flex-col items-center bg-white rounded-lg drop-shadow-md md:flex-row md:max-w-xl min-w-full">
            <div className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg">
              {" "}
            </div>
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-xl font-medium tracking-tight">
                PointClickCare
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Software Engineering Intern
              </p>
            </div>
          </a>
          <a className="flex flex-col items-center bg-white rounded-lg drop-shadow-md md:flex-row md:max-w-xl min-w-full">
            <div className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg">
              {" "}
            </div>
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-xl font-medium tracking-tight">PBSC</h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Software Developer Intern
              </p>
            </div>
          </a>
        </section>
        <section>
          <h2 className="text-2xl font-semibold"> Things I've built</h2>
          {/*
          Use cool slightly 3d cards for this
          */}
        </section>
      </main>
      {/* <ul className="flex flex-row">
        {blogs.map((blog) => (
          <li key={blog.slug}>
            <Link href={`/blog/${blog.slug}`}>
              <>
                {blog.date}:{blog.title}
              </>
            </Link>
          </li>
        ))}
      </ul> */}
      <footer>By Alan Wang 2023</footer>
    </body>
  );
}

export async function getStaticProps() {
  // List of files in blgos folder
  const filesInBlogs = fs.readdirSync("./content/blogs");

  // Get the front matter and slug (the filename without .md) of all files
  const blogs = filesInBlogs.map((filename) => {
    const file = fs.readFileSync(`./content/blogs/${filename}`, "utf8");
    const matterData = matter(file);

    return {
      ...matterData.data, // matterData.data contains front matter
      slug: filename.slice(0, filename.indexOf(".")),
    };
  });

  return {
    props: {
      blogs,
    },
  };
}

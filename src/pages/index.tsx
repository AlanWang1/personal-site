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
    <body className="px-12">
      <header className="flex flex-row m-auto pt-12">
        <Image></Image>
        <nav className="flex flex-row-reverse ml-auto">
          <div className="ml-12"> Resume </div>
          <div className="mx-12"> Writings</div>
          <div className="mx-12"> Home </div>
        </nav>
      </header>
      <main>
        <section className="flex flex-row py-[30vh] m-auto max-w-7xl content-center items-center">
          <section className="flex flex-col pr-14">
            <h1 className="text-7xl">Hi, I'm Alan</h1>
            <p>
              I’m currently a Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore
            </p>
          </section>
          <Image
            src="/assets/Alan Wang.jpg"
            width={300}
            height={300}
            alt="Picture of Alan Wang"
            className="rounded-full"
          ></Image>
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
      <footer></footer>
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

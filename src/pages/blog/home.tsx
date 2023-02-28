import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import Layout from "@/components/layout";

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
    <Layout>
      <section className="flex flex-col">
        <div className="flex flex-col pb-12">
          <h1 className="font-semibold text-5xl">
            <span className="inline-block text-white text-opacity-0 bg-gradient-to-r from-blue to-green bg-clip-text pb-6">
              Alan&apos;s Archives
            </span>
          </h1>
          <h2 className="text-2xl">My digital thinking space</h2>
        </div>

        <ul className="flex flex-col gap-6">
          {blogs.map((blog) => (
            <li key={blog.slug} className="">
              <Link href={`/blog/${blog.slug}`} className="flex flex-col">
                <p className="text-xl font-semibold">{blog.title}</p>
                <p>{blog.date.toString()}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
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

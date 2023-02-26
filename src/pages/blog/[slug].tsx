import fs from "fs";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";
import Head from "next/head";
import Layout from "@/components/layout";

type BlogPost = {
  frontmatter: {
    [key: string]: any;
  };
  markdown: string;
};

type Slug = {
  params: {
    slug: string;
  };
};

export default function Blog({ frontmatter, markdown }: BlogPost) {
  return (
    <Layout>
      <div>
        <div className="flex flex-col pb-12">
          <h1 className="font-semibold text-5xl">
            <span className="inline-block text-white text-opacity-0 bg-gradient-to-r from-blue to-green bg-clip-text pb-6">
              My first Blog
            </span>
          </h1>
          <h2 className="text-xl">{frontmatter.date}</h2>
        </div>
        <article className="text-ink prose-h1:text-3xl prose-h1:font-semibold prose-h2:text-2xl prose-h2:font-semibold prose-p:my-6">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </article>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ params: { slug } }: Slug) {
  const fileContent = matter(
    fs.readFileSync(`./content/blogs/${slug}.md`, "utf8")
  );
  let frontmatter = fileContent.data;
  const markdown = fileContent.content;

  return {
    props: { frontmatter, markdown },
  };
}

export async function getStaticPaths() {
  const filesInProjects = fs.readdirSync("./content/blogs");

  // Getting the filenames excluding .md extension
  // and returning an array containing slug (the filename) as params for every route
  // It looks like this
  // paths = [
  //   { params: { slug: 'my-first-blog' }},
  //   { params: { slug: 'how-to-train-a-dragon' }},
  //   { params: { slug: 'how-to-catch-a-pokemon' }},
  // ]
  const paths = filesInProjects.map((file) => {
    const filename = file.slice(0, file.indexOf("."));
    return { params: { slug: filename } };
  });

  return {
    paths,
    fallback: false, // This shows a 404 page if the page is not found
  };
}

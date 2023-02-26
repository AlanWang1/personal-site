import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
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
      <>
        <section className="flex flex-row content-center items-center mb-12">
          <section className="flex flex-col pr-14">
            <h1 className="font-semibold pb-6 text-5xl">
              <span className="inline-block text-white text-opacity-0 bg-gradient-to-r from-blue to-green bg-clip-text">
                Hi, I&apos;m Alan
              </span>{" "}
              👋
            </h1>
            <p className="pb-6">
              I&apos;m currently a Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore
            </p>
            <p className="pb-6">
              Outside of work I like to Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore
            </p>
            <div className="flex flex-row fill-ink space-x-2">
              <a href="https://github.com/AlanWang1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ionicon"
                  viewBox="0 0 512 512"
                  width="20"
                  height="20"
                >
                  <title>Logo Github</title>
                  <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/alan-wang11/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 448 512"
                >
                  {/*Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.*/}{" "}
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                  <title>Logo Linkedin</title>
                </svg>
              </a>
              <a href="mailto:alan.wang9018@gmail.com">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="20"
                  height="20"
                >
                  {/*Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}
                  <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                  <title>Logo Email</title>
                </svg>
              </a>
            </div>
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
          <h2 className="text-2xl font-semibold">Where I&apos;ve been</h2>
          <a
            href="https://www.cibc.com/en/personal-banking.html"
            className="flex flex-col md:items-center bg-white rounded-lg hover:drop-shadow-lg drop-shadow md:flex-row md:max-w-xl min-w-full"
          >
            <Image
              src="/assets/cibc.svg"
              width={50}
              height={50}
              alt="Cibc Logo"
              className="mt-4 ml-4 rounded-lg md:m-2"
            ></Image>
            <div className="flex flex-col justify-between pt-4 px-4 leading-normal">
              <p className="mb-2 text-xl font-medium tracking-tight">CIBC</p>
              <p className="mb-2 md:mb-3 font-normal">
                Backend Developer Intern
              </p>
            </div>
            <p className="mb-4 md:ml-auto md:my-auto md:mt-5 md:mr-4 ml-4">
              Jan 2023 - Apr 2023
            </p>
          </a>
          <a
            href="https://pointclickcare.com/"
            className="flex flex-col md:items-center bg-white rounded-lg hover:drop-shadow-lg drop-shadow md:flex-row md:max-w-xl min-w-full"
          >
            <Image
              src="/assets/pointclickcare.jpeg"
              width={50}
              height={50}
              alt="PointClickCare Logo"
              className="mt-4 ml-4 rounded-lg md:m-2"
            ></Image>
            <div className="flex flex-col justify-between pt-4 px-4 leading-normal">
              <h5 className="mb-2 text-xl font-medium tracking-tight">
                PointClickCare
              </h5>
              <p className="mb-2 md:mb-3 font-normal text-gray-700 dark:text-gray-400">
                Software Engineering Intern
              </p>
            </div>
            <p className="mb-4 md:ml-auto md:my-auto md:mt-5 md:mr-4 ml-4">
              May 2022 - Aug 2022
            </p>
          </a>
          <a
            href="https://www.pbsc.com/"
            className="flex flex-col md:items-center bg-white rounded-lg hover:drop-shadow-lg drop-shadow md:flex-row md:max-w-xl min-w-full"
          >
            <Image
              src="/assets/pbsc.png"
              width={50}
              height={50}
              alt="PBSC Logo"
              className="mt-4 ml-4 rounded-lg md:m-2"
            ></Image>
            <div className="pt-4 px-4 flex flex-col justify-between leading-normal">
              <div className="flex flex-row ">
                <h5 className="mb-2 text-xl font-medium tracking-tight">
                  PBSC
                </h5>
              </div>
              <p className="mb-2 md:mb-3 font-normal text-gray-700 dark:text-gray-400">
                Software Developer Intern
              </p>
            </div>
            <p className="mb-4 md:ml-auto md:my-auto md:mt-5 md:mr-4 ml-4">
              May 2021 - Aug 2021
            </p>
          </a>
        </section>
        <section className="flex flex-col space-y-6 pb-12">
          <h2 className="text-2xl font-semibold"> Things I&apos;ve built</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <a
              href="https://devpost.com/software/no-laughing-matter"
              className="flex flex-col bg-white rounded-lg hover:drop-shadow-lg drop-shadow"
            >
              <Image
                src="/assets/nolaughingmatter.png"
                width={300}
                height={300}
                alt="No Laughing Matter Thumnnail"
                className="object-cover w-full rounded-t-lg "
              ></Image>
              <div className="pt-4 px-4 flex flex-col justify-between leading-normal">
                <div className="flex flex-row ">
                  <h5 className="mb-2 text-xl font-medium tracking-tight">
                    No Laughing Matter
                  </h5>
                </div>
                <p className="mb-2 md:mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Video chat game, powered by facial recognition and analysis
                </p>
              </div>
            </a>
            <a
              href="https://devpost.com/software/pythia-p09zyj"
              className="flex flex-col bg-white rounded-lg hover:drop-shadow-lg drop-shadow"
            >
              <Image
                src="/assets/pythia.png"
                width={300}
                height={300}
                alt="Pythia Thumbnail"
                className="object-cover w-full rounded-t-lg "
              ></Image>
              <div className="pt-4 px-4 flex flex-col justify-between leading-normal">
                <div className="flex flex-row ">
                  <h5 className="mb-2 text-xl font-medium tracking-tight">
                    Pythia
                  </h5>
                </div>
                <p className="mb-2 md:mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Google Photos and Cloud Vision AI powered fortune teller
                </p>
              </div>
            </a>
            <a
              href="https://devpost.com/software/aitomind"
              className="flex flex-col bg-white rounded-lg hover:drop-shadow-lg drop-shadow"
            >
              <Image
                src="/assets/aitomind.png"
                width={300}
                height={300}
                alt="Aitomind Thumbnail"
                className="object-cover w-full rounded-t-lg "
              ></Image>
              <div className="pt-4 px-4 flex flex-col justify-between leading-normal">
                <div className="flex flex-row ">
                  <h5 className="mb-2 text-xl font-medium tracking-tight">
                    Aitomind
                  </h5>
                </div>
                <p className="mb-2 md:mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Generated mindmaps for educational videos
                </p>
              </div>
            </a>
          </div>
        </section>
        <section className="flex flex-col space-y-6 pb-12">
          <h2 className="text-2xl font-semibold">In the works</h2>
          <a
            href="https://github.com/AlanWang1/generative-music-project-v2"
            className="text-green underline"
          >
            Ambient Soundscape Generator
          </a>
        </section>
      </>
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

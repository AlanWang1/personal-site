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
        <section className="flex md:flex-row flex-col content-center items-center mb-12">
          <section className="flex flex-col md:pr-14">
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
            <div className="flex flex-row space-x-2.5">
              <a href="https://github.com/AlanWang1" className="fill-ink">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width="20"
                  height="20"
                >
                  <title>Logo Github</title>
                  <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/alan-wang11/"
                className="fill-ink"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  width="20"
                  height="20"
                >
                  <title>Logo Linkedin</title>
                  {/* Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->*/}
                  <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                </svg>
              </a>

              <a href="mailto:alan.wang9018@gmail.com" className="fill-ink">
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
              <Link href="/resume.pdf" className="fill-ink">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2v6a2 2 0 0 0 2 2h6v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h6Z" />
                  <path d="M13.5 2.5V8a.5.5 0 0 0 .5.5h5.5l-6-6Z" />
                </svg>
              </Link>
            </div>
          </section>
          <div className="drop-shadow-md order-first md:order-last mb-12 md:w-full w-1/2">
            <div className="rounded-full bg-gradient-to-r from-blue to-green p-1.5">
              <Image
                src="/images/Alan Wang.jpg"
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
              src="/images/cibc.svg"
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
              src="/images/pointclickcare.jpeg"
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
              src="/images/pbsc.png"
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
                src="/images/nolaughingmatter.png"
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
                src="/images/pythia.png"
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
                src="/images/aitomind.png"
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

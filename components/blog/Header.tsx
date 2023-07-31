import Link from "next/link";
import React from "react";
import { ModeToggle } from "./ModeToggle";

function Logo({ ...props }) {
  return (
    <svg
      t="1690646528474"
      className="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="4391"
      width="30"
      height="30"
      {...props}
    >
      <path
        d="M512 514.17m-448.47 0a448.47 448.47 0 1 0 896.94 0 448.47 448.47 0 1 0-896.94 0Z"
        fill="#DEA614"
        p-id="4392"
      ></path>
      <path
        d="M222.71 564.66a289.24 243.85 0 1 0 578.48 0 289.24 243.85 0 1 0-578.48 0Z"
        fill="#FBF5EF"
        p-id="4393"
      ></path>
      <path
        d="M237.87 486.81s3.25-81.77 11.86-140.08 32.87-156.91 32.87-156.91l93.75 162.65-138.48 134.34z"
        fill="#465C62"
        p-id="4394"
      ></path>
      <path
        d="M258.08 467.64s1.85-46.56 6.75-79.76 18.72-89.34 18.72-89.34l53.38 92.61-78.85 76.49z"
        fill="#F8C8A4"
        p-id="4395"
      ></path>
      <path
        d="M786.52 486.81s-3.25-81.77-11.86-140.08-32.87-156.91-32.87-156.91l-93.75 162.65 138.48 134.34z"
        fill="#465C62"
        p-id="4396"
      ></path>
      <path
        d="M766.31 467.64s-1.85-46.56-6.75-79.76-18.72-89.34-18.72-89.34l-53.38 92.61 78.85 76.49z"
        fill="#F8C8A4"
        p-id="4397"
      ></path>
      <path
        d="M239.51 704.41l-0.05-0.06c-1.04 0.23-1.59 0.35-1.59 0.35l1.64-0.29zM794.76 704.41l1.64 0.29s-0.55-0.12-1.59-0.35l-0.05 0.06zM801.19 564.66c0-134.67-129.5-243.85-289.24-243.85S222.71 429.99 222.71 564.66c0 48.76 16.98 94.17 46.22 132.27 59.17-16.1 174.18-59.36 204.9-122.54 14.28-29.36 10.38-96.65 41.61-96.65 28.09 0 27.59 64.55 41.87 93.91 29.31 60.26 137.49 105.37 199.45 122.89 28.13-37.59 44.43-82.13 44.43-129.88z"
        fill="#465C62"
        p-id="4398"
      ></path>
      <path
        d="M379.82 566.11m-51.57 0a51.57 51.57 0 1 0 103.14 0 51.57 51.57 0 1 0-103.14 0Z"
        fill="#FFFFFF"
        p-id="4399"
      ></path>
      <path
        d="M379.82 566.11m-35.75 0a35.75 35.75 0 1 0 71.5 0 35.75 35.75 0 1 0-71.5 0Z"
        fill="#DEA614"
        p-id="4400"
      ></path>
      <path
        d="M392.11 552.37m-12.29 0a12.29 12.29 0 1 0 24.58 0 12.29 12.29 0 1 0-24.58 0Z"
        fill="#FFFFFF"
        p-id="4401"
      ></path>
      <path
        d="M645.64 566.11m-51.57 0a51.57 51.57 0 1 0 103.14 0 51.57 51.57 0 1 0-103.14 0Z"
        fill="#FFFFFF"
        p-id="4402"
      ></path>
      <path
        d="M645.64 566.11m-35.75 0a35.75 35.75 0 1 0 71.5 0 35.75 35.75 0 1 0-71.5 0Z"
        fill="#DEA614"
        p-id="4403"
      ></path>
      <path
        d="M660.03 552.37m-12.29 0a12.29 12.29 0 1 0 24.58 0 12.29 12.29 0 1 0-24.58 0Z"
        fill="#FFFFFF"
        p-id="4404"
      ></path>
      <path
        d="M484.21 638.56c0.01-8.26 55.69-6.98 55.86-0.01 0.32 13.04-18.55 31.5-28.31 31.54-9.71 0.05-27.56-17.25-27.55-31.53z"
        fill="#D08C7D"
        p-id="4405"
      ></path>
      <path
        d="M481.9 730.81l-3.07-2.77 30.86-34.24v-25.95h4.13v27.54z"
        fill="#D08C7D"
        p-id="4406"
      ></path>
      <path
        d="M542 730.82l-32.33-35.43 0.4-27.57 4.14 0.06-0.38 25.93 31.22 34.22z"
        fill="#D08C7D"
        p-id="4407"
      ></path>
    </svg>
  );
}

function BlogHeader() {
  return (
    <header className="fixed left-0 top-0 z-50 flex  h-[48px] w-full items-center justify-between border-b bg-white px-10 shadow-md dark:bg-black">
      <Link href="/blog">
        <div className="flex flex-row items-center ">
          <Logo />
          <div className="ml-1 font-bold hover:text-slate-800">
            丑八怪<span>blog</span>
          </div>
        </div>
      </Link>

      <div>
        <ModeToggle />
      </div>
    </header>
  );
}

export default BlogHeader;

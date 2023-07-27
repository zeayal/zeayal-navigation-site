"use client";

import Image from "next/image";
import "./index.css";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

function DemoWithCss() {
  return (
    <div className="chat-container">
      <div className="chat-left">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-8 w-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
          />
        </svg>
      </div>

      <div className="chat-right">
        <span className="title">DemoWithCss</span>
        <span className="desc">You have a new message!</span>
      </div>
    </div>
  );
}

function DemoWithTailWindCss() {
  return (
    <div className="flex items-center space-x-4 rounded-lg bg-white p-6 text-black shadow-lg">
      <div className="text-blue-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-8 w-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
          />
        </svg>
      </div>
      <div>
        <div className="text-xl font-medium">DemoWithTailWindCss</div>
        <p className="text-slate-500">You have a new message!</p>
      </div>
    </div>
  );
}

function Demo2WithTailWindCss() {
  return (
    <div className="flex items-center space-x-10 rounded-lg bg-white px-12 py-6 shadow-lg">
      <div className="h-20 w-20 overflow-hidden rounded-full">
        <Image
          src="https://tailwindcss.com/img/erin-lindford.jpg"
          alt="avatar"
          width={80}
          height={80}
        />
      </div>
      <div className="text-black">
        <div>Erin Lindford</div>
        <p>message</p>
        <button className="mt-2 border border-purple-300 px-2 text-purple-600 hover:border-transparent hover:bg-purple-700 hover:text-white focus:border-purple-800 focus:outline-none  focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
          Message
        </button>
      </div>
    </div>
  );
}

export default function Demo1() {
  return (
    <div className="main">
      <DemoWithCss />
      <div className="mt-4 ">
        <DemoWithTailWindCss />
      </div>
      <div className="mt-4 ">
        <Demo2WithTailWindCss />
      </div>

      <Button
        variant="default"
        onClick={() => {
          window.open("https://www.baidu.com", "_blank");
        }}
      >
        测试按钮
      </Button>
      <a href="https://www.baidu.com" target="_blank">
        百度A
      </a>
      <Link href="https://www.baidu.com" target="_blank">
        百度LINK
      </Link>
      <Button variant="destructive">测试按钮</Button>
      <Button variant="ghost">测试按钮</Button>
      <Button variant="link">测试按钮</Button>
      <Button variant="outline">测试按钮</Button>
      <Button variant="secondary">测试按钮</Button>
    </div>
  );
}

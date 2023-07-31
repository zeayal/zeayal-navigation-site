import BlogList from "@/components/blog/BlogList";
import BlogHeader from "@/components/blog/Header";
import React from "react";

function Blog() {
  return (
    <div className="pt-[48px]">
      <BlogHeader />
      <BlogList />
    </div>
  );
}

export default Blog;

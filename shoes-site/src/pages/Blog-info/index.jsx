import React from "react";
import BlogInfoMain from "../../components/BlogInfoMain";
import Blogslide from "../../components/BlogSlider";
import AboutCoder from "../../components/AboutCodertest";
import PostComment from "../../components/PostComment";
import BlogHead from "../../BlogHead";

function BlogInfoPage() {
  return (
    <>
      <BlogHead/>
      <BlogInfoMain />
      <Blogslide />
      <AboutCoder />
      <PostComment />
    </>
  );
}

export default BlogInfoPage;

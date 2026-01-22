import { useState } from "react";
import BlogList from "../components/BlogList";
import BlogDetail from "../components/BlogDetails";
import type { Blog } from "../api/blogs";

export default function BlogPage() {
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);

  return (
    <div className="blog-layout">
      <BlogList onSelect={setSelectedBlog} />
      <BlogDetail blog={selectedBlog} />
    </div>
  );
}

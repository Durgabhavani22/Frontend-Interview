import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BlogList from "./components/BlogList";
import BlogDetail from "./components/BlogDetails";
import type { Blog } from "./api/blogs";

export default function App() {
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1 px-6 py-8">
        <div className="max-w-7xl mx-auto space-y-8">

          <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-lg shadow-md text-center">
            <h1 className="text-3xl font-bold text-indigo-600 mb-3">
            CA MONK BLOG PAGE
            </h1>

            <p className="text-gray-700 mb-2">
              Here you can browse all the latest blogs, explore their content, and stay updated with trending topics.
            </p>



  
 <div
  style={{
    display: "inline-block",
    whiteSpace: "nowrap",
    transform: "translateX(-100%)",
    animation: "scrollRight 6s linear infinite"
  }}
>
  Stay updated with trending posts every day!
  <style>
    {`
      @keyframes scrollRight {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
      }
    `}
  </style>
</div>





          </div>

          <div className="grid grid-cols-12 gap-6">

            <aside className="col-span-12 md:col-span-4">
              <BlogList onSelect={setSelectedBlog} />
            </aside>

            <section className="col-span-12 md:col-span-8">
              <BlogDetail blog={selectedBlog} />
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

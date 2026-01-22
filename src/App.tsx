import { useState } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import BlogList from "./components/BlogList"
import BlogDetail from "./components/BlogDetails"
import type { Blog } from "./api/blogs";

export default function App() {
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null)

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1 px-6 py-8">
        <div className="grid grid-cols-12 gap-6 max-w-7xl mx-auto">
          <aside className="col-span-12 md:col-span-4">
            <BlogList onSelect={setSelectedBlog} />
          </aside>

          <section className="col-span-12 md:col-span-8">
            <BlogDetail blog={selectedBlog} />
          </section>

        </div>
      </main>

      <Footer />
    </div>
  )
}

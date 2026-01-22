import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { getBlogs } from "../api/blogs"
import type { Blog } from "../api/blogs"
import { useTimeAgo } from "../hooks/useTimeAgo"
import CreateBlogModal from "./CreateBlogModel"

export default function BlogList({
  onSelect,
}: {
  onSelect: (blog: Blog) => void
}) {
  const [open, setOpen] = useState(false)

  const { data, isLoading, isError } = useQuery({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  })

  if (isLoading) {
    return <p className="text-gray-400">Loading articles...</p>
  }

  if (isError) {
    return <p className="text-red-500">Failed to load blogs</p>
  }

  return (
    <aside className="space-y-4">
      {/* Header row */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">
          Latest Articles
        </h2>

        <button
          onClick={() => setOpen(true)}
          className="text-sm bg-black text-white px-3 py-1 rounded hover:bg-gray-800 transition"
        >
          + Add Blog
        </button>
      </div>

      {/* Blog cards */}
      {data?.map((blog) => (
        <div
          key={blog.id}
          onClick={() => onSelect(blog)}
          className="relative bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition cursor-pointer border hover:border-indigo-500"
        >
          {/* Category */}
          <p className="text-xs font-semibold text-indigo-600 uppercase">
            {blog.category.join(", ")}
          </p>

          {/* Title */}
          <h3 className="font-semibold text-gray-900 mt-1">
            {blog.title}
          </h3>

          {/* Time ago */}
          <span className="text-xs text-gray-400">
            {useTimeAgo(blog.date)}
          </span>

          {/* Description */}
          <p className="text-sm text-gray-600 mt-1 line-clamp-2">
            {blog.description}
          </p>
        </div>
      ))}

      {/* Create Blog Modal */}
      {open && <CreateBlogModal onClose={() => setOpen(false)} />}
    </aside>
  )
}

import type { Blog } from "../api/blogs"
import { useTimeAgo } from "../hooks/useTimeAgo"


export default function BlogDetail({ blog }: { blog: Blog | null }) {
  if (!blog) {
    return (
      <div className="bg-white rounded-xl p-12 text-center text-gray-400 shadow">
        Select an article to read
      </div>
    )
  }

  return (
    <article className="bg-white rounded-xl shadow overflow-hidden">
      
      <img
        src={blog.coverImage}
        alt={blog.title}
        className="w-full h-72 object-cover"
      />

   
      <div className="p-6 space-y-4">
       
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span className="uppercase font-semibold text-indigo-600">
            {blog.category.join(", ")}
          </span>
          <span>•</span>
          <span>{useTimeAgo(blog.date)}</span>
        </div>

        
        <h1 className="text-3xl font-bold text-gray-900">
          {blog.title}
        </h1>

        <button className="mt-4 inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm px-4 py-2 rounded-md">
         🔗 Share Article
        </button>

     <div className="mt-6 bg-gray-100 dark:bg-gray-800 rounded-lg py-4 px-6 grid grid-cols-3 text-center text-sm">

        <div>
          <p className="text-gray-500 uppercase text-xs">Category</p>
          <p className="font-medium">
            {Array.isArray(blog.category)
              ? blog.category.join(" & ")
              : blog.category}
          </p>
        </div>


        <div>
          <p className="text-gray-500 uppercase text-xs">Date</p>
          <p className="font-medium">{new Date(blog.date).toDateString()}</p>
        </div>
    </div>
        
       
        <p className="italic text-gray-600">
          {blog.description}
        </p>

       
        <p className="text-gray-800 leading-relaxed whitespace-pre-line">
          {blog.content}
        </p>


      {/* Author */}
      <div className="flex justify-between items-center mt-8 border-t pt-4">


        <div className="flex gap-4 text-gray-500">
          💙 Like {blog.likes}
          💬 Comment{blog.comments}
             

        </div>
      </div>
      </div>
    </article>
  )
}

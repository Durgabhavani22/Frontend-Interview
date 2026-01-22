import type { Blog } from "../types/blog"

const API_URL = "http://localhost:3001/blogs"

export const getBlogs = async (): Promise<Blog[]> => {
  const res = await fetch(API_URL)
  if (!res.ok) throw new Error("Failed to fetch blogs")
  return res.json()
}

export const getBlogById = async (id: number): Promise<Blog> => {
  const res = await fetch(`${API_URL}/${id}`)
  if (!res.ok) throw new Error("Failed to fetch blog")
  return res.json()
}



export type { Blog }

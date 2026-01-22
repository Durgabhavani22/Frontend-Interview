import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBlog } from "../api/blogs";

interface Props {
  onClose: () => void;
}

const CreateBlogModal = ({ onClose }: Props) => {
  const queryClient = useQueryClient();

  const [form, setForm] = useState({
    title: "",
    author: "",
    description: "",
    category: "",
    coverImage: "",
    content: "",
  });

  const mutation = useMutation({
    mutationFn: createBlog,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
      onClose();
    },
  });

  const handleSubmit = () => {
    if (!form.title || !form.author || !form.content) {
      alert("Title, Author and Content are required");
      return;
    }

    mutation.mutate({
      id: Date.now().toString(),
      title: form.title,
      author: form.author,
      description: form.description,
      category: form.category.split(",").map(c => c.trim().toUpperCase()),
      coverImage: form.coverImage,
      content: form.content,
      date: new Date().toISOString(),
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-xl rounded-xl p-6 space-y-4">
        <h2 className="text-xl font-semibold">Create New Blog</h2>

        <input
          className="w-full border p-2 rounded"
          placeholder="Title"
          onChange={e => setForm({ ...form, title: e.target.value })}
        />

        <input
          className="w-full border p-2 rounded"
          placeholder="Author Name"
          onChange={e => setForm({ ...form, author: e.target.value })}
        />

        <input
          className="w-full border p-2 rounded"
          placeholder="Categories (comma separated)"
          onChange={e => setForm({ ...form, category: e.target.value })}
        />

        <input
          className="w-full border p-2 rounded"
          placeholder="Cover Image URL"
          onChange={e => setForm({ ...form, coverImage: e.target.value })}
        />

        <textarea
          className="w-full border p-2 rounded h-28"
          placeholder="Short Description"
          onChange={e => setForm({ ...form, description: e.target.value })}
        />

        <textarea
          className="w-full border p-2 rounded h-40"
          placeholder="Blog Content"
          onChange={e => setForm({ ...form, content: e.target.value })}
        />

        <div className="flex justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 border rounded">
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-black text-white rounded"
          >
            Add Blog
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateBlogModal;

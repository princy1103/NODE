import { useState } from "react";

function BlogForm({ addBlog }) {
  const [form, setForm] = useState({
    title: "",
    content: "",
    category: "",
    image: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBlog(form);
    setForm({ title: "", content: "", category: "", image: "" });
  };
  return (
    <form onSubmit={handleSubmit} className="blog-form">
      <input
        type="text"
        id="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Blog Title"
        required
      />
      <textarea
        id="content"
        value={form.content}
        onChange={handleChange}
        placeholder="Write your content..."
        required
      />
      <input
        type="text"
        id="category"
        value={form.category}
        onChange={handleChange}
        placeholder="Category (e.g. Tech, Lifestyle)"
      />
      <input
        type="text"
        id="image"
        value={form.image}
        onChange={handleChange}
        placeholder="Image URL"
        required
      />
      <button type="submit">Add Blog</button>
    </form>
  );
}

export default BlogForm;

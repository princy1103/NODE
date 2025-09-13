import { useState } from "react";

function BlogList({ blogs, deleteBlog, updateBlog }) {
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({
    title: "",
    content: "",
    category: "",
    image: ""
  });

  const startEdit = (blog) => {
    setEditingId(blog._id);
    setEditForm({
      title: blog.title,
      content: blog.content,
      category: blog.category,
      image: blog.image
    });
  };

  const handleChange = (e) => {
    setEditForm({ ...editForm, [e.target.id]: e.target.value });
  };

  const handleUpdate = () => {
    updateBlog(editingId, editForm);
    setEditingId(null);
  };

  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <div className="blog-card" key={blog._id}>
          {editingId === blog._id ? (
            <div className="edit-form">
              <input
                type="text"
                id="title"
                value={editForm.title}
                onChange={handleChange}
              />
              <textarea
                id="content"
                value={editForm.content}
                onChange={handleChange}
              />
              <input
                type="text"
                id="category"
                value={editForm.category}
                onChange={handleChange}
              />
              <input
                type="text"
                id="image"
                value={editForm.image}
                onChange={handleChange}
              />
              <div className="actions">
                <button onClick={handleUpdate}>Save</button>
                <button onClick={() => setEditingId(null)}>Cancel</button>
              </div>
            </div>
          ) : (
            <>
              <img src={blog.image} alt="Blog" />
              <div className="content">
                <h3>{blog.title}</h3>
                <p>{blog.content.substring(0, 100)}...</p>
                <p className="category">Category: {blog.category || "General"}</p>
                <div className="actions">
                  <button onClick={() => startEdit(blog)}>Edit</button>
                  <button onClick={() => deleteBlog(blog._id)}>Delete</button>
                </div>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default BlogList;

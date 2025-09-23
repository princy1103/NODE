import BlogForm from "../components/BlogForm";
import BlogList from "../components/BlogList";
import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = "http://localhost:3040";

const Home = () => {
    const [blogs, setBlogs] = useState([]);

    const fetchBlogs = async () => {
        const res = await axios.get(API_URL);
        setBlogs(res.data);
    };

    useEffect(() => {
        fetchBlogs();
    }, []);

    // Add blog
    const addBlog = async (blog) => {
        await axios.post(API_URL, blog);
        fetchBlogs();
    };

    // Delete blog
    const deleteBlog = async (id) => {
        await axios.delete(`${API_URL}/${id}`);
        fetchBlogs();
    };

    const updateBlog = async (id, updatedBlog) => {
        await axios.put(`${API_URL}/${id}`, updatedBlog);
        fetchBlogs();
    };

    return (
        <>
            <div className="container">
                <h1>My Blog</h1>
                <BlogForm addBlog={addBlog} />
                <h2>All Blogs</h2>
                <BlogList blogs={blogs} deleteBlog={deleteBlog} updateBlog={updateBlog} />
            </div>
        </>
    )
}

export default Home
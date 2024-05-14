import { useEffect, useState } from "react";
import axios from "axios";

function PublicBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStoredBlogs = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/blogs/getStoredBlogs"
        );
        setBlogs(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch stored blogs:", error);
        setLoading(false);
      }
    };

    fetchStoredBlogs();
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-primary mb-6 text-center">Public Blogs</h1>
      {loading ? (
        <p className="text-center text-primary text-4xl font-bold">Loading...</p>
      ) : blogs.length > 0 ? (
        <div className="space-y-4">
          {blogs.map((blog) => (
            <div key={blog._id} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800">
                {blog.name}
              </h3>
              <p className="text-secondary">{blog.description}</p>
              <p className="text-gray-500 italic pt-3">
                Author: {blog.author || "Unknown"}
              </p>
              <a
                href={blog.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-tertiary hover:text-primary transition duration-150 ease-in-out"
              >
                Full Blog
              </a>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600 text-center">No blogs found.</p>
      )}
    </div>
  );
}

export default PublicBlogs;

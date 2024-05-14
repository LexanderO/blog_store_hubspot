import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

const MyBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notification, setNotification] = useState("");

  const { login } = useAuth();

  useEffect(() => {
    const authenticateAndfetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/blogs");
        console.log("Fetched blogs data:", response.data);
        setBlogs(response.data);
        setLoading(false);
        login();
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
        setLoading(false);
      }
    };

    authenticateAndfetchBlogs();
  }, []);

  const saveBlog = async (blog) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/blogs/saveBlog",
        {
          blogId: blog.id,
          name: blog.name,
          description: blog.meta_description,
          url: blog.absolute_url,
          author: blog.author_name || blog.author || "Unknown",
        }
      );
      console.log("Saved blog response:", response.data);
      setNotification("Blog uploaded successfully!");
      setTimeout(() => setNotification(""), 5000);
    } catch (error) {
      console.error("Error saving blog:", error);
      if (error.response && error.response.status === 409) {
        setNotification("This blog is already saved.");
      } else {
        setNotification("Failed to upload blog. ");
      }
      setTimeout(() => setNotification(""), 5000);
    }
  };

  return (
    <>
      <div className="max-w-4xl py-8">
        <h1 className="text-3xl font-bold text-center text-primary mb-6">
          My HubSpot Blogs
        </h1>
        {loading ? (
          <p className="text-center text-primary text-4xl font-bold">Loading...</p>
        ) : (
          blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg shadow-md p-6 mb-4 flex justify-between items-start"
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {blog.name}
                </h3>
                <p className="text-secondary font-medium">{blog.meta_description}</p>
                <p className="text-gray-500 italic pt-3">
                  Author: {blog.author_name || "Unknown"}
                </p>
                <a
                  href={blog.absolute_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-tertiary hover:text-primary transition duration-300 ease-in-out"
                >
                  Full Blog
                </a>
              </div>
              <button
                onClick={() => saveBlog(blog)}
                className="ml-4 bg-primary hover:bg-quaternary transition duration-300 ease-in-out text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Upload
              </button>
            </div>
          ))
        )}
      </div>
      {notification && (
        <p className="top-24 py-10 bg-secondary/85  w-full fixed text-2xl font-medium text-white z-0 text-center">
          {notification}
        </p>
      )}
    </>
  );
};

export default MyBlogs;

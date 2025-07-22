import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "..";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

function PostForm() {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("active");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !slug || !content || !file) {
      alert("Please fill in all fields and upload an image.");
      return;
    }

    try {
      // 1. Upload image to Appwrite Storage
      const uploadedFile = await appwriteService.uploadFile(file);

      if (!uploadedFile) {
        alert("File upload failed!");
        return;
      }

      const fileId = uploadedFile.$id;

      // 2. Create post in Appwrite Database
      const response = await appwriteService.createPost({
        title,
        slug,
        content,
        featuredimage: fileId,  // ✅ Fixed key here
        status,
        user : "userId", // Replace with actual user ID if needed
    });

      if (response) {
        alert("Post created successfully!");
        navigate("/all-posts"); // update path as needed
      }
    } catch (error) {
      console.error("Error creating post:", error);
      alert("Failed to create post.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 w-full"
      />
      <input
        type="text"
        placeholder="Slug"
        value={slug}
        onChange={(e) => setSlug(e.target.value)}
        className="border p-2 w-full"
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="border p-2 w-full"
      />
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        className="border p-2 w-full"
      />
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="border p-2 w-full"
      >
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
}

export default PostForm;
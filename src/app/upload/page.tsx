"use client";

import Image from "next/image";
import { useState } from "react";

export default function ImageUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      console.error("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        console.log("File uploaded successfully");
        // Handle success, clear selected file if needed
        setSelectedFile(null);
      } else {
        console.error("File upload failed");
        // Handle error
      }
    } catch (error) {
      console.error("Error occurred during file upload:", error);
      // Handle error
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      <Image
       // src="http://localhost:3000/17018815172755008.png"
        alt="a"
        width={200}
        height={200}
      />
    </div>
  );
}

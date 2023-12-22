import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ImageUpload({ id }: { id: string }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const router = useRouter();
  const handleFileChange = (event: any) => {
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
      const response = await fetch(`/api/upload/car/${id}`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        router.push("/");
        console.log("File uploaded successfully");
        setSelectedFile(null);
      } else {
        console.error("File upload failed");
      }
    } catch (error) {
      console.error("Error occurred during file upload:", error);
    }
  };

  return (
    <div className="min-w-full mx-auto col-span-3">
      <h1 className="text-2xl text-center">آپلود عکس خودرو</h1>
      <div>
        <input
          type="file"
          className="w-full py-32"
          onChange={handleFileChange}
        />
        <button
          onClick={handleUpload}
          className="bg-orange w-full py-2 rounded-lg"
        >
          Upload
        </button>
        {selectedFile && (
          <div>
            <p>Selected Image:</p>
            <Image
              src={URL.createObjectURL(selectedFile)}
              alt="Selected Image"
              width={200}
              height={200}
            />
          </div>
        )}
      </div>
    </div>
  );
}

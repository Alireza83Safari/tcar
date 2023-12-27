import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { revalidateTag } from "next/cache";
import { apiUrl } from "@/services/apiUrl";

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
      const response = await fetch(`${apiUrl}/upload/car/${id}`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        router.push("/");
        toast.success("آپلود عکس با موفقیت انجام شد");
        setSelectedFile(null);
        revalidateTag("cars");
      }
    } catch (error) {}
  };

  return (
    <div className="min-w-full mx-auto col-span-3 mt-12">
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

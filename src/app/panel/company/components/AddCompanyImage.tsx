import React, { useState } from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import { revalidateTag } from "next/cache";
import { apiUrl } from "@/services/apiUrl";

export default async function AddBrandImage({
  id,
  closeModal,
  setShowImage,
}: {
  id: string;
  closeModal: any;
  setShowImage: any;
}) {
  const [selectedFile, setSelectedFile] = useState(null);

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
      const response = await fetch(`${apiUrl}/upload/brand/${id}`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setSelectedFile(null);
        toast.success("افزودن عکس موفقیت آمیز بود");
        closeModal();
        setShowImage(false);
        revalidateTag("company");
      } else {
      }
    } catch (error) {}
  };

  return (
    <div className="mx-auto col-span-3 min-h-[50vh] min-w-[50%] relative">
      <div>
        <input type="file" onChange={handleFileChange} />
        {selectedFile && (
          <div>
            <Image
              src={URL.createObjectURL(selectedFile)}
              alt="Selected Image"
              width={200}
              height={200}
            />
          </div>
        )}
        <button
          onClick={handleUpload}
          className="block w-full bg-orange py-2 rounded-md absolute bottom-0"
        >
          Upload
        </button>
      </div>
    </div>
  );
}

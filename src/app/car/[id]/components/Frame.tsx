import Image from "next/image";

export default function Frame({ photo }: any) {
  return (
    <div className="min-h-screen min-w-full flex justify-center">
      <Image src={photo} alt="" width={700} height={700} className=" object-contain" />
    </div>
  );
}

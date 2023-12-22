import Spinner from "@/components/Spinner/Spinner";

export default function LoadingTemplate() {
  return (
    <div className="min-h-[24rem] flex justify-center items-center">
      <Spinner />
    </div>
  );
}

"use client";

export default function ErrorTemplate({ error, reset }: any) {
  return (
    <div className="flex flex-col items-center justify-center h-screen font-sans">
      <h2 className="text-2xl font-bold mb-6">اوه! مشکلی پیش آمد!</h2>
      <p className="text-red-600 text-lg mb-8">خطا: {error.message}</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={() => reset()}
      >
        دوباره امتحان کنید
      </button>
    </div>
  );
}

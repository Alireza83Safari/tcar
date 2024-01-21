"use client";
import { useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const onDimiss = useCallback(() => {
    router.back();
  }, [router]);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key) onDimiss();
    },
    [onDimiss]
  );

  useEffect(() => {
    document.addEventListener("keydown", onDimiss);

    return () => {
      document.removeEventListener("keydown", onDimiss);
    };
  }, [onKeyDown]);

  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 mx-auto"
      onClick={onDimiss}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
        {children}
      </div>
    </div>
  );
}

"use client";

import { ErrorTemplate } from "@/components";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return <ErrorTemplate error={error} reset={reset} />;
}

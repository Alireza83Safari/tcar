"use client";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { useCallback, useEffect, useMemo, useState } from "react";

export const usePagination = (
  currentPage: number | null,
  initialPageSize: number
) => {
  const [paginationLoading, setPaginationLoading] = useState<boolean>(false);
  const location = usePathname();
  const navigate = useRouter();

  const searchParams = useMemo(
    () => new URLSearchParams(location),
    [location.search]
  );
  const [pageSize, setPageSize] = useState<any>(initialPageSize);

  const fetchSearchResults = useCallback(async () => {
    try {
      setPaginationLoading(true);
      searchParams.set(
        "page",
        currentPage !== null ? currentPage.toString() : "1"
      );
      searchParams.set("limit", pageSize !== null ? pageSize.toString() : "12");
      navigate.push(`?${searchParams.toString()}`);
      setPaginationLoading(false);
    } catch (error) {
      setPaginationLoading(false);
    }
  }, [currentPage, pageSize, searchParams]);

  useEffect(() => {
    const limitParam = searchParams.get("limit");
    if (limitParam) {
      setPageSize(+limitParam);
    }
  }, [currentPage, pageSize]);

  useEffect(() => {
    fetchSearchResults();
  }, [fetchSearchResults]);

  return { paginationLoading, pageSize };
};

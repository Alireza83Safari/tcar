export async function fetcher(url: string) {
  const res = await fetch(`/api/${url}`, { cache: "no-store" });
  const data = await res?.json();
  return data;
}

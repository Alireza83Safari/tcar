import Header from "@/app/panel/components/Header";
import Menu from "@/app/panel/components/Menu";
import { Table } from "./components/Table";
import AddBlog from "./components/AddBlog";
import { getBlogs } from "@/actions/blog";
import { LoadingTemplate } from "@/components";
import { Suspense } from "react";
import { withAuthPanel } from "@/HOC/withAuthPanel";

async function page() {
  const blogs = await getBlogs();

  return (
    <div>
      <Header />
      <Menu />

      <div className="w-[84vw] bg-dGray absolute left-0 md:px-4 mt-12 -z-20">
        <Suspense fallback={<LoadingTemplate />}>
          <AddBlog />
          <Table blogs={blogs} />
        </Suspense>
      </div>
    </div>
  );
}

export default withAuthPanel(page);

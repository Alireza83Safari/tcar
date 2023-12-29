import Header from "./components/Header";
import Menu from "./components/Menu";

export default async function page() {
  return (
    <div className="w-[84vw] bg-dGray min-h-screen fixed left-0 top-0">
      <Header />
      <Menu />
    </div>
  );
}

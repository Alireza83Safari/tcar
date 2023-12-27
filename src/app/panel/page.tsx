import Header from "./components/Header";
import Menu from "./components/Menu";

export default async function page() {
  return (
    <div className="bg-[#1F2432]">
      <Header />
      <Menu />
    </div>
  );
}

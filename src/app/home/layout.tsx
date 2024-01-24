import { Footer, Header } from "@/components";

export default async function Layout(props: {
  banner: React.ReactNode;
  filter: React.ReactNode;
  expensiveCarSlider: React.ReactNode;
  platforms: React.ReactNode;
  company: React.ReactNode;
  usedCarSlider: React.ReactNode;
  trait: React.ReactNode;
  options: React.ReactNode;
  cheapCarSlider: React.ReactNode;
  application: React.ReactNode;
  blog: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {props.banner}
      {props.filter}
      {props.expensiveCarSlider}
      {props.platforms}
      {props.company}
      {props.usedCarSlider}
      {props.trait}
      {props.options}
      {props.cheapCarSlider}
      {props.application}
      {props.blog}
      <Footer />
    </>
  );
}

import Header from "./header/Header";
import Footer from "./footer/Footer";
import Content from "./content/Content";

const Page = () => {
  return (
    <>
      <div className="font-inter flex h-screen  flex-col overflow-x-hidden selection:bg-cyan-800/80 selection:text-cyan-50">
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Page;

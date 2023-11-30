import Header from "./header/Header";
import Footer from "./footer/Footer";
import Content from "./content/Content";

const PageTwo = () => {
  return (
    <>
      <div className="flex h-full flex-col bg-black">
        <Header></Header>
        <Content></Content>
        <Footer></Footer>
      </div>
    </>
  );
};

export default PageTwo;

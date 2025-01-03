import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Content from "@/components/Content";
import SearchBar from "@/components/SearchBar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <SearchBar />
      <Content />
      <Footer />
    </div>
  );
}

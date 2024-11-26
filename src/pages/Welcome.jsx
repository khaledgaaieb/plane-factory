import Footer from "../components/Footer";
import Header from "../components/Header";
import Header2 from "../components/Header2";
import Header3 from "../components/Header3";
import NavBar from "../components/NavBar";

export default function Welcome() {
  return (
    <div>
      <NavBar />
      <Header />
      <Header2 />
      <Header />
      <Header3 />
      <Footer />
    </div>
  );
}

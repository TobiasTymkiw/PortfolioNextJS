import Home from "../Components/Home/Home";
import Header from "../Components/Header/Header";
import AboutMe from "../Components/AboutMe/AboutMe";
import Skills from "../Components/Skills/Skills";
import Qualifications from "../Components/Experience/Experience";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";

export default function App() {
  return (
    <>
      <Header></Header>
      <Home></Home>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Qualifications></Qualifications>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

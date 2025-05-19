import Portfolyo from "./components/portfolyo/Portfolyo";
import "./app.scss";
//import Test from "./Test";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";
import Cursor from "./components/cursor/Cursor";






const App=()=>{
  return (
  <div>
    <Cursor/>
   <section id="Anasayfa">
      <Navbar/>
      <Hero/>
    </section>
    <section id="Servisler">
      <Parallax type="Servisler"/>
      </section>
    <section>
      <Services/>
      </section>
    <section id="Portfölyo"><Parallax type="Portfölyo"/></section>
    <Portfolyo/>
    <section id="Contact">
      <Contact/>
    </section>
    {/*<Test>
    <Test/>*/}
    
    </div>
    );

};

export default App;

import AboutSection from "./components/Index/AboutSection";
import HomeSection from "./components/Index/HomeSection";
import ServiceSection from "./components/Index/ServiceSection";
import SocialSection from "./components/Index/SocialSection";
import Navbar from "./components/Layouts/Navbar";

function App() {
  // let component;
  // switch (window.location.pathname) {
  //   case "/":
  //     component = <HomeSection />;
  //     break;
  //   case "/about":
  //     component = <About />;
  //     break;
  // }
  return (
    // <>
    //   <Navbar />
    //   <div className=''>{component}</div>
    // </>

    <div className="App">
      <Navbar />

      {/* <div className="relative"> */}
      <HomeSection />

      {/* <div className="absolute -bottom-9">
          <SocialSection />
        </div> */}
      {/* </div> */}

      <AboutSection />

      <ServiceSection />

      {/* <div className="content h-screen bg-red-100">
        <h1>App Content</h1>
      </div> */}

      {/* <div className="h-1/2 bg-blue-100">heyyy there</div> */}
    </div>

    // <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
    //   <p className="text-3xl text-gray-700 font-bold mb-5">
    //     Welcome!
    //   </p>
    //   <p className="text-gray-500 text-lg">
    //     React and Tailwind CSS in action
    //   </p>
    // </div>
  );
}

export default App;

import HomeSection from './components/Index/HomeSection';
import Navbar from './components/Layouts/Navbar';
import About from './pages/About';

function App() {
  let component;
  switch (window.location.pathname) {
    case "/":
      component = <HomeSection />;
      break;
    case "/about":
      component = <About />
      break;
  }
  return (
    <>
      <Navbar />
      <div className=' h-screen'>{component}</div>
    </>




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

import Aos from "aos";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import HeaderComp from "./components/HeaderComp/HeaderComp";
import Home from "./pages/Home";
import "aos/dist/aos.css";
import Footer from "./components/Footer/Footer";

function App() {

	return (
		<>
			<HeaderComp />
			<Home/>
			<Footer />
		</>
	);
}

export default App;

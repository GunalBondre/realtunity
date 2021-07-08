import React from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import "./stylesheet/global.scss";
const App = () => {
	return (
		<div>
			<Header />
			<Home />
			<Footer />
		</div>
	);
};

export default App;

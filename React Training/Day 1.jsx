import React from "react";// react is JS library and also the framework thats why we are importing react
import ReactDOM from "react-dom/100";
import application from './application';//import the jsx file from another
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<application/>
	</React.StrictMode>
);

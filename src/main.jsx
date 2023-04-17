import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { GlobalStyle } from "./globalStyles";
import { Theme } from "./Themes";
import { Context } from "./context/Context";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Context>
			<ThemeProvider theme={Theme}>
				<GlobalStyle />
				<App />
			</ThemeProvider>
		</Context>
	</React.StrictMode>
);

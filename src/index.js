import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { Provider } from "react-redux";
import "./index.css";
import "rsuite/dist/rsuite.min.css";
import App from "./App";
import store from "./redux";
import { client } from "./config/apollo";

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<ApolloProvider client={client}>
				<Router>
					<App />
				</Router>
			</ApolloProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);

import { Switch, Route } from "react-router-dom";
import Login from "./screens/login";
import Signup from "./screens/signup";
import Home from "./screens/home";
import ResetPassword from "./screens/reset-password";
function App() {
	return (
		<Switch>
			<Route path="/signup" children={<Signup />} />
			<Route path="/home" children={<Home />} />
			<Route path="/reset-password" children={<ResetPassword />} />
			<Route path="/" children={<Login />} />
		</Switch>
	);
}

export default App;

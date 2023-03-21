import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Detail from "./components/Detail";
import { createContext, useState } from "react";
import Create from "./components/Create";
export const UserContent = createContext(); // tạo ra một Context object, được sử dụng để chia sẻ dữ liệu giữa các thành phần con
function App() {
	const [user, setUser] = useState({});
	return (
		<UserContent.Provider value={{ setUser, user }}>
			<Router>
				<div className="App">
					<Routes>
						<Route path="/" element={<Login />} />						
						<Route path="/albums/:slug" element={<Home />} />
						<Route path="/detail/:slug/:id" element={<Detail />} />
						<Route path="/create" element={<Create />} />
					</Routes>
				</div>
			</Router>
		</UserContent.Provider>
	);
}

export default App;

import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom"; // điều hướng tới trang khác
import { UserContent } from "../App";
import "./style.css";
const Login = () => {
	const [account, setAccount] = useState([]);
	// useRef cho phép lưu/update data kh cần render lại
	const emailRef = useRef();
	const nameRef = useRef();
	// useNavigate cho phép bạn thay đổi URL và điều hướng trang trong ứng dụng React
	const navigate = useNavigate(); 

	// useEffect hàm callback chỉ thực thi một lần sau khi component được render.
	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((res) => res.json())
			.then((res) => {
				setAccount(res);
			});
	}, []); // [] tương đương useEffect chỉ được gọi một lần khi component được render lần đầu tiên,
	
	//useContext truyền các giá trị từ component cha xuống các component con một cách tiện lợi hơn.
	/**useContext như sau:
	Tạo context bằng cách sử dụng hàm createContext()
	Truyền giá trị vào context bằng cách sử dụng Provider Component
	Sử dụng useContext để lấy giá trị từ context trong các component con */
	
	const { setUser } = useContext(UserContent);
	const handleLogin = () => {
		const username = nameRef.current.value;
		const email = emailRef.current.value;
		if (!username || !email) {
			return window.alert("Please enter all input");
		}
		const some = account.find(
			(item) => item?.username === username && item?.email === email
		);
		if (!some) {
			return window.alert("Username or email is not correct");
		}
		setUser({ ...some });
		navigate("/albums/all");
	};
	return (
		<div className="login">
			<div className="login_form">
				<div className="login_title">Login System</div>
				<div className="login_input">
					<label>Username:</label>
					<input ref={nameRef} type="text" />
				</div>
				<div className="login_input">
					<label>email:</label>
					<input ref={emailRef} type="text" />
				</div>
				<div className="login_button">
					<button onClick={handleLogin}>Login</button>
				</div>
			</div>
		</div>
	);
};

export default Login;

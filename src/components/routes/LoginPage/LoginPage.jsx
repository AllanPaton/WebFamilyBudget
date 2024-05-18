import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import {Form} from "react-router-dom";
import classes from "./LoginPage.css"


const LoginPage = () => {
	const  [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const navigate =useNavigate()

	function validateForm() {
		return email.length > 0 && password.length > 0
	}

	function  handleSumbit() {
		// eslint-disable-next-line no-undef,no-restricted-globals
		event.preventDefault()

		//Сделать запрос на сервак для авторизации

		// Симуляция -з-
		if (email === "admin" && password === "password") {
			console.log("Login successful!");
			navigate("/App"); // Перенаправляем пользователя на домашнюю страницу
		} else {
			alert("Invalid credentials!")
		}
	}

	return (
		<div className="Login">
			<form onSubmit={handleSumbit}>
				<div>
					<label htmlFor="email">Login:</label>
					<input
						type="text"
						id="email"
						value={email}
						onChange={(event) => setEmail(event.target.value)}
						// placeholder="test@example.com"
						placeholder="Login"
					/>
				</div>
				<div>
					<label htmlFor="password">Password:</label>
					<input
						type="password"
						id="password"
						value={password}
						onChange={(event) => setPassword(event.target.value)}
						placeholder="password"
					/>
				</div>
				<button type="submit" disabled={!validateForm()} className="save-button">
					Login
				</button>
			</form>
		</div>
	);
}

export default LoginPage;
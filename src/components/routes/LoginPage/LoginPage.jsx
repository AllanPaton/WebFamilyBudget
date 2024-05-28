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

	async function  handleSumbit() {
		// eslint-disable-next-line no-undef,no-restricted-globals
		event.preventDefault()

		// Отправка данных серверу
		try {
			const response = await fetch('http://localhost:8081/api/auth/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					login: email,
					password: password
				})
			});

			if (!response.ok) {
				const errorData = await response.json();
				throw new Error(errorData.error || 'Authorization error');
			}

			const data = await response.json();
			const token = data.token;

			// Сохранение токена (localStorage, sessionStorage, cookies)
			localStorage.setItem('token', token);

			navigate('/App'); // Перенаправление на  App  после успешного входа

		} catch (error) {
			console.error(error);
			alert('Ошибка авторизации: ' + error.message);
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

//TO DO: REFACTOR email to login!
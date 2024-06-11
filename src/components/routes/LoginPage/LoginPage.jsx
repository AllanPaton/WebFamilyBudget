import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import {Form} from "react-router-dom";
import classes from "./LoginPage.css"
import InputModal from "../../UI/InputModal/InputModal";
import useModal from "../../Hooks/useModal";


const LoginPage = () => {
	const  [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [regLogin, setRegLogin] = useState("")
	const [regPassword, setRegPassword] = useState("")
	const navigate =useNavigate()
	const {isOpen: isRegOpen, setIsOpen: setIsRegOpen,modalRef: regMenuRef} = useModal()

	function validateForm({inputA, inputB}) {
		return inputA.length > 0 && inputB.length > 0
	}

	async function  handleLogin() {
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

	async function  handleRegister() {
		// eslint-disable-next-line no-undef,no-restricted-globals
		event.preventDefault()

		// Отправка данных серверу
		try {
			const response = await fetch('http://localhost:8081/api/auth/register', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					login: regLogin,
					password: regPassword
				})
			});
			if (!response.ok) {
				const errorData = await response.json();
				throw new Error(errorData.error || 'Registration error');
			}

			const data = await response.json();
			alert('Reg SUCCESS')

		} catch (error) {
			console.error(error);
			alert('Ошибка регистрации: ' + error.message);
		}
	}



	return (
		<div className="Login">
			<form onSubmit={handleLogin}>
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
				<button
					type="submit"
					disabled={!validateForm({inputA: email,inputB: password})}
					className="save-button">
					Login
				</button>
			</form>
			<div className="register-button-container">
				<button type="submit" className="save-button" onClick={() => setIsRegOpen(true)}>
					Register
				</button>
			</div>
			{isRegOpen && (
				<div className="overlay" onClick={() => isRegOpen}>
					<div className="overlay" onClick={() => setIsRegOpen}>
						<div className="reg-container"> {/* Добавлен контейнер для модалки */}
							<div className="modal" ref={regMenuRef}>
								<div className="reg-modal-container">
									<form onSubmit={handleRegister}>
										<div>
											<label htmlFor="regLogin">Login:</label>
											<input
												type="text"
												id="regLogin"
												value={regLogin}
												onChange={(event) => setRegLogin(event.target.value)}
												placeholder="Login"
											/>
										</div>
										<div>
											<label htmlFor="regPassword">Password:</label>
											<input
												type="password"
												id="regPassword"
												value={regPassword}
												onChange={(event) => setRegPassword(event.target.value)}
												placeholder="password"
											/>
										</div>
										<button
											type="submit"
											disabled={!validateForm({inputA: regLogin, inputB: regPassword})}
											className="save-button">
											Register
										</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default LoginPage;

//TO DO: REFACTOR email to login!
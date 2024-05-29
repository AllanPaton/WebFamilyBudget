import './App.css';
import React, {useRef, useEffect, useState} from "react";
import OperationDate from "./components/UI/OperationDate/OperationDate";
import OperationInfo from "./components/UI/OperationInfo/OperationInfo";
import Component1 from "./components/UI/MonthPanel/Component1/Component1";
import Section4 from "./components/UI/MonthPanel/Section4";
import OperationList from "./components/UI/OperationList";
import HeaderFlexbarInfo from "./components/UI/Header-flexbar/Header-flexbar-info";
import SideBar from "./components/UI/SideBar";
import useModal from "./components/Hooks/useModal";
import CircleDiogram from "./components/UI/CircleDiogram/CircleDiogram";
import AreaChartBox from "./components/UI/AreaChartBox/AreaChartBox";
import {useNavigate} from "react-router-dom";

function App() {

	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isWalletInputOpen, setIsWalletINputOpen] = useState(false);
	const menuRef = useRef(null);
	const navigate = useNavigate()

	const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1); // Информация о текущем месяце (для заапросов

	//БЛОК ДЛЯ АУНТИФИКАЦИИ
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	useEffect(() => {
		const token = localStorage.getItem('token');
		if (token) {
			//  Проверка  токена  (можно  использовать  `jwt-decode`  для  извлечения  данных)
			setIsAuthenticated(true);
		} else {
			navigate('/'); //  Перенаправление  на  страницу  логина,  если  токена  нет
		}
	}, []); //  Запускаем  useEffect  только  при  первом  рендеринге

	//КОНЕЦ БЛОКА АУНТИФИКАЦИИ

/*	const subwayMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};
	const walletInput = () => {
		setIsWalletINputOpen(!isWalletInputOpen);
	};

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (isMenuOpen && menuRef.current && !menuRef.current.contains(event.target)) { /!*При нажатие вне выдвижного меню, оно закроется!*!/
				setIsMenuOpen(false);
			}
		};


		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, [isMenuOpen]);*/

  return (
	  <div>
		  {isAuthenticated ? (
	      <div className="App">
		      <div className="application-wrap">
			      <div className="content">
					  <div className="application-wrap">
						  <SideBar/> {/* TO DO: SEARCH + CALENDAR*/}
						  <div id="menu"></div>
						  <div className="wrap-menu"></div>
						  <div className="main-app-container">
							  <div className="app-header">
								  <HeaderFlexbarInfo currentMonth={currentMonth}/>
							  </div>
							  <div className="main-app-content">
								  <div className="flexbox-container">
									  <div className="main-app-leftSlice">
										  <div className="boldWin">
											  <Section4
												  currentMonth={currentMonth}
												  setCurrentMonth={setCurrentMonth}/>
											  <div className="win">
												  <AreaChartBox currentMonth={currentMonth}/>
											  </div>
										  </div>
										  <div className="boldWin">
											  <Section4
												  currentMonth={currentMonth}
												  setCurrentMonth={setCurrentMonth}/>
											  <div className="win">
												  <CircleDiogram currentMonth={currentMonth}/>
											  </div>
										  </div>
									  </div>
								  </div>
								  <div className="main-app-rightSlice">
									  <div>
										  <OperationList currentMonth={currentMonth}/>
									  </div>
								  </div>
							  </div>
						  </div>
					  </div>
				  </div>
			  </div>
		  </div>  ) : (
			  <span>Unauthorized</span>
		  )}
	  </div>
  );
}

export default App;
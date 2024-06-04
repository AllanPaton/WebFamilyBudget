import './App.css';
import React, {useRef, useEffect, useState} from "react";
import Section4 from "./components/UI/MonthPanel/Section4";
import OperationList from "./components/UI/OperationList";
import HeaderFlexbarInfo from "./components/UI/Header-flexbar/Header-flexbar-info";
import SideBar from "./components/UI/SideBar";
import CircleDiogram from "./components/UI/CircleDiogram/CircleDiogram";
import AreaChartBox from "./components/UI/AreaChartBox/AreaChartBox";
import {useNavigate} from "react-router-dom";

function App() {

	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isWalletInputOpen, setIsWalletINputOpen] = useState(false);
	const menuRef = useRef(null);
	const navigate = useNavigate()

	const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1); // Информация о текущем месяце (для заапросов
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	//  Проверка  токена  (можно  использовать  `jwt-decode`  для  извлечения  данных)
	//  Перенаправление  на  страницу  логина,  если  токена  нет
	useEffect(() => {
		const token = localStorage.getItem('token');
		if (token) {
			setIsAuthenticated(true);
		} else {
			navigate('/');
		}
	}, []);

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
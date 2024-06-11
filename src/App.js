import './App.css';
import React, {useRef, useEffect, useState} from "react";
import Section4 from "./components/UI/MonthPanel/Section4";
import OperationList from "./components/UI/OperationList";
import HeaderFlexbarInfo from "./components/UI/Header-flexbar/Header-flexbar-info";
import SideBar from "./components/UI/SideBar";
import CircleDiogram from "./components/UI/CircleDiogram/CircleDiogram";
import AreaChartBox from "./components/UI/AreaChartBox/AreaChartBox";
import {useNavigate} from "react-router-dom";
import {fetchAllOperations} from "./store/operationSlice"
import {useDispatch} from "react-redux";

function App() {

	const dispatch = useDispatch(); // Получаем dispatch
	const navigate = useNavigate();
	const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
	const [isAuthenticated, setIsAuthenticated] = useState(false);



	useEffect(() => {
		const token = localStorage.getItem('token');
		if (token) {
			setIsAuthenticated(true);

			// Диспатчим action для загрузки всех операций
			dispatch(fetchAllOperations());
		} else {
			navigate('/');
		}
	}, [dispatch, navigate]);

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
											  <Section4/>
											  <div className="win">
												  <AreaChartBox currentMonth={currentMonth}/>
											  </div>
										  </div>
										  <div className="boldWin">
											  <Section4/>
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
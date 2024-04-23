import './App.css';
import React from "react";
import OperationDate from "./components/UI/OperationDate/OperationDate";
import OperationInfo from "./components/UI/OperationInfo/OperationInfo";
import Component1 from "./components/UI/Section4/Component1/Component1";
import Section4 from "./components/UI/Section4/Section4";

function App() {

	const sandwichMenuClick = () =>{

	}

  return (
      <div className="App">
	      <div className="application-wrap">
		      <div className="content">
			      <div className="application-wrap">
				      <div className="list-fixed"> {/*  Список с функциональными кнопками  */}
						  <div className="container">
							  <div onClick={sandwichMenuClick} className="subway--menu" />
							  <div className="fluent--wallet-48-filled" />
						  </div>
						  <hr className="list-hr"/>
						  <div className="container">
							  <div className="f7--calendar" />
							  <div className="ooui--search"/>
						  </div>
				      </div>
					  <div id="menu" />
				      <div className="wrap-menu">

				      </div>
				      <div className="main-app-container">
					      <div className="app-header">
						      <div className="flex-bar">
							      <div>Income: 9999</div>
							      <div>Outcome: 9999</div>
							      <div>Balance: 9999</div>
						      </div>
					      </div>
					      <div className="main-app-content">
								  <div className="flexbox-container">
									  <div className="main-app-leftSlice">
										  <div className="boldWin">
											  <Section4/>
											  <div className="win">

											  </div>
										  </div>
										  <div className="boldWin">
											  <Section4/>
											  <div className="win">

											  </div>
										  </div>
									  </div>
								  </div>
							  <div className="main-app-rightSlice">
								  <div>List</div>
								  <div>
									  <div className="listbox">
										  <h1>Operation list</h1>
										  <div className="operation-list">
											  <div className="day-section">
												  <OperationDate/>
												  <OperationInfo/>
											  </div>
											  <div className="day-section">
												  <OperationDate/>
												  <OperationInfo/>
											  </div>
											  <div className="day-section">
												  <OperationDate/>
												  <OperationInfo/>
												  <OperationInfo/>
											  </div>
											  <div className="day-section">
												  <OperationDate/>
												  <OperationInfo/>
											  </div>
											  <div className="day-section">
												  <OperationDate/>
												  <OperationInfo/>
											  </div>
										  </div>
									  </div>
								  </div>
							  </div>
						  </div>
					  </div>
				  </div>
			  </div>
		  </div>
	  </div>
  );
}

export default App;

import './App.css';

function App() {
  return (
      <div className="App">
	      <div className="application-wrap">
		      <div className="content">
			      <div className="application-wrap">
				      <div className="list-fixed"> {/*  Список с функциональными кнопками  */}
						  <div className="container">
							  <div className="subway--menu" />
							  <div className="fluent--wallet-48-filled" />
						  </div>
						  <hr className="list-hr"/>
						  <div className="container">
							  <div className="f7--calendar" />
							  <div className="ooui--search"/>
						  </div>
				      </div>
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
											  <button>PREV</button>
											  <button>THIS</button>
											  <button>NEXT</button>
											  <div>
												  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
											  </div>
										  </div>
										  <div className="boldWin">
											  <button>PREV</button>
											  <button>THIS</button>
											  <button>NEXT</button>
											  <div>
												  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
													  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
													  enim ad minim veniam, quis nostrud exercitation ullamco laboris
													  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
													  reprehenderit in voluptate velit esse cillum dolore eu fugiat
													  nulla pariatur. Excepteur sint occaecat cupidatat non proident,
													  sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
											  </div>
										  </div>
									  </div>
								  </div>
							  <div className="main-app-rightSlice">
								  <div>List</div>
								  <div>
									  <div className="listbox">
										  <h1>Operation list</h1>

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

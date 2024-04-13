import './App.css';

function App() {
  return (
      <div className="App">
	      <div className="application-wrap">
		      <div className="content">
			      <div className="application-wrap">
				      <div className="list-fixed"> {/*  Список с функциональными кнопками  */}
					      <div>1</div>
					      <div>2</div>
					      <div>3</div>
					      <div>Search</div>
				      </div>
				      <div className="wrap-menu">

				      </div>
				      <div className="main-app-container">
					      <div className="app-header">
						      <div className="flex-bar">
							      <div>Income</div>
							      <div>Outcome</div>
							      <div>Balance</div>
						      </div>
					      </div>
					      <div className="main-app-content">
						      <div className="flexbox-container">
							      <div className="main-app-leftSlice">

							      </div>
							      <div className="main-app-rightSlice">

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

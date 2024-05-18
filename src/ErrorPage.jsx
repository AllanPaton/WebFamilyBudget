import {useRouteError} from "react-router-dom";
import classes from './ErrorPage.css'

function ErrorPage(){
	const error = useRouteError()
	console.error(error)

	return(
		<div id="error-page" className="main">
			<h2>ERROR.</h2>
			<p>unexpected has occured.</p>
			<p>
				<i>{error.statusText || error.message}</i>
			</p>
			<svg className="subway--missing"/>
		</div>
	)
}

export default ErrorPage;
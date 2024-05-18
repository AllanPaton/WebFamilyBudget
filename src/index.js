import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    createRoutesFromElements,
    Outlet,
} from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ErrorPage from "./ErrorPage";
import LoginPage from './components/routes/LoginPage/LoginPage';
import SearchPage from "./components/routes/SearchPage/SearchPage";
import CalendarPage from "./components/routes/CalendarPage/CalendarPage"; // Импортируем компонент LoginPage

const router = createBrowserRouter([
        {
            path: "/",
            element: <LoginPage/>,
            errorElement: <ErrorPage/>,
        },
        {
            path: "/App",
            element: <App/>,
            errorElement: <ErrorPage/>,
        },
        {
            path:"/app/Calendar",
            element:<CalendarPage/>,
            errorElement:<ErrorPage/>,
        },
        {
            path:"/App/search",
            element:<SearchPage/>,
            errorElement:<ErrorPage/>,
        }
    ]
    // createRoutesFromElements(
    //     <>
    //         <Route path="/main" element={<App />}>
    //             <Route index element={<Outlet />} />
    //         </Route>
    //         <Route path="/login" element={<LoginPage />} /> {/* Добавляем маршрут для LoginPage */}
    //         <Route path="*" element={<ErrorPage />} />
    //     </>
    // ),
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);
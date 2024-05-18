import React from 'react';
import useModal from "../Hooks/useModal";
import InputModal from "./InputModal/InputModal";
import {useNavigate, generatePath} from "react-router-dom";

//СЛОМАЛСИЬ АНИМАЦИИ ПРИ ХУКЕ, СКОРЕЕ ВСЕГО ИЗ-ЗА РЕРЕНДЕРИНГА ! СРОЧНО ФИКС

const SideBar = ({subwayMenu, walletMenu}) => {
	const { isOpen: isSubwayMenuOpen, setIsOpen: setIsSubwayMenuOpen, modalRef: subwayMenuRef } = useModal();
	const { isOpen: isWalletMenuOpen, setIsOpen: setIsWalletMenuOpen, modalRef: walletMenuRef } = useModal();
	const navigate =useNavigate()

	const navigateToPage = (page) => {
		// Проверяем, что `page` не пустой и не содержит недопустимых символов.
		if (!page || page.trim() === '') {
			console.error('Invalid page name: ', page);
			return;
		}

		// Используем generatePath, если у вас есть шаблоны маршрутов
		const routePath = generatePath('/App/:page', {page}); // Пример

		navigate(routePath);
	}

	const handleCalendarClick = () => {
		navigateToPage('calendar');
	};

	const handleSearchClick = () => {
		navigateToPage('search');
	};


	return (
		<div className="list-fixed"> {/*  Список с функциональными кнопками  */}
			<div className="container">
				<div onClick={() => setIsSubwayMenuOpen(true)} className="subway--menu"/>
				<div onClick={() => setIsWalletMenuOpen(true)} className="fluent--wallet-48-filled"/>
			</div>
			{isSubwayMenuOpen && (
				<div className="overlay" onClick={() => setIsSubwayMenuOpen}>
					<div className="overlay-background" />
					<nav ref={subwayMenuRef} className={`sideBarMenu sideBarMenu-open`}>
						<div>
							<svg className="lets-icons--user-cicrle-duotone"/>
							<div>
								<p>User Name</p>
								<span>UserEmail@mail.mail</span>
							</div>
						</div>
						<hr className="list-hr"/>
						<div>
							<a>
								<div className="sideBarMenu-profileOption">
									<h1>Log out</h1>
								</div>
							</a>
							<a>
								<div className="sideBarMenu-profileOption">
									<h1>HELP</h1>
								</div>
							</a>
						</div>
					</nav>
				</div>
			)}
			{isWalletMenuOpen && (
				<div className="overlay" onClick={() => setIsWalletMenuOpen}>
					<div className="overlay-background"/>
					<nav ref={walletMenuRef}>
						<InputModal setMenuOpen={setIsWalletMenuOpen}/>
					</nav>
				</div>
			)}
			<hr className="list-hr"/>
			<div className="container">
				<div className="f7--calendar" onClick={handleCalendarClick}/>
				<div className="ooui--search" onClick={handleSearchClick}/>
			</div>
		</div>
	);
};

export default SideBar;
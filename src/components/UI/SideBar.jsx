import React from 'react';
import useModal from "../Hooks/useModal";

//СЛОМАЛСИЬ АНИМАЦИИ ПРИ ХУКЕ, СКОРЕЕ ВСЕГО ИЗ-ЗА РЕРЕНДЕРИНГА ! СРОЧНО ФИКС

const SideBar = ({subwayMenu, walletMenu}) => {
    const { isOpen: isSubwayMenuOpen, setIsOpen: setIsSubwayMenuOpen, modalRef: subwayMenuRef } = useModal();
    const { isOpen: isWalletMenuOpen, setIsOpen: setIsWalletMenuOpen, modalRef: walletMenuRef } = useModal();

    return (
        <div className="list-fixed"> {/*  Список с функциональными кнопками  */}
            <div className="container">
                <div onClick={() => setIsSubwayMenuOpen(true)} className="subway--menu"/>
                <div onClick={() => setIsWalletMenuOpen(true)} className="fluent--wallet-48-filled"/>
            </div>
            {isSubwayMenuOpen && (
                <div className="overlay" onClick={() => setIsSubwayMenuOpen()}>
                    <div className="overlay-background" />
                    <nav ref={subwayMenuRef} className={`SideBarMenu SideBarMenu-open`}>
                        {subwayMenu}
                    </nav>
                </div>
            )}
            {isWalletMenuOpen && (
                <div className="overlay" onClick={() => setIsWalletMenuOpen()}>
                    <nav ref={walletMenuRef} className={`SideBarMenu SideBarMenu-open`}>
                        {walletMenu}
                    </nav>
                </div>
            )}
            <hr className="list-hr"/>
            <div className="container">
                <div className="f7--calendar"/>
                <div className="ooui--search"/>
            </div>
        </div>
    );
};

export default SideBar;
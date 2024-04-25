import { useState, useEffect, useRef } from 'react';

// Кастомный хук для открытия и закрытия модальных окон
// у выбранного модальнного окна дожны быть 2 CSS класса + оверлей для всех использований!
// Первый для скрытого состояние. Второй для открытого.

function useModal(initialIsOpen = false) {
    const [isOpen, setIsOpen] = useState(initialIsOpen);
    const modalRef = useRef(null)


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isOpen && modalRef.current && !modalRef.current.contains(event.target)){
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    },[isOpen])


    return { isOpen, setIsOpen, modalRef};
}

export default useModal;
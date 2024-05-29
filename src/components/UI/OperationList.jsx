import React, {useState, useEffect} from 'react';
import OperationDate from "./OperationDate/OperationDate";
import OperationInfo from "./OperationInfo/OperationInfo";


const OperationList = ({ currentMonth }) => {
    const [operations, setOperations] = useState([]);
    const [groupedOperations, setGroupedOperations] = useState({}); // Добавлено состояние для сгруппированных операций


    //Запрос на получение данных
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:8081/api/protected/userdata/all?month=${currentMonth}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });
                const data = await response.json();
                setOperations(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [currentMonth]);

    // Группировка данных после получения
    useEffect(() => {
        if (operations.length > 0) {
            const grouped = groupOperationsByDate(operations);
            setGroupedOperations(grouped);
        }
    }, [operations]);

    // Функция для группировки операций по дате
    const groupOperationsByDate = (operations) => {
        const grouped = {};
        operations.forEach((operation) => {
            const dateKey = operation.date;
            if (!grouped[dateKey]) {
                grouped[dateKey] = [];
            }
            grouped[dateKey].push(operation);
        });
        return grouped;
    };

    return (
        <div className="listbox">
            <h1>Operation list</h1>
            {operations.length === 0 ? (
                <p>Загрузка данных...</p>
            ) : (
                <div className="operation-list">
                    {Object.entries(groupedOperations).map(([dateKey, operationsForDay]) => (
                        <div key={dateKey} className="day-section">
                            <OperationDate date={dateKey} />
                            {operationsForDay.map((operation) => (
                                <OperationInfo key={operation.id} operation={operation} />
                            ))}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default OperationList;


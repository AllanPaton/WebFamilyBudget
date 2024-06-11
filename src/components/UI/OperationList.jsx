import React, {useState, useEffect, useMemo} from 'react';
import OperationDate from "./OperationDate/OperationDate";
import OperationInfo from "./OperationInfo/OperationInfo";
import { useSelector, useDispatch } from 'react-redux';
import { addOperation, fetchAllOperations } from '../../store/operationSlice';


const OperationList = ({ currentMonth }) => {
    const dispatch = useDispatch();
    const operations = useSelector((state) => state.operations.operations);
    const status = useSelector((state) => state.operations.status);

    // Фильтрация операций для текущего месяца
    const currentMonthOperations = operations.filter((operation) => {
        const operationDate = new Date(operation.date);
        return operationDate.getMonth() + 1 === currentMonth;
    });

    // Группировка операций по дате
    const groupedOperations = currentMonthOperations.reduce((acc, operation) => {
        const dateKey = operation.date;
        if (!acc[dateKey]) {
            acc[dateKey] = [];
        }
        acc[dateKey].push(operation);
        return acc;
    }, {});

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchAllOperations());
        }
    }, [status, dispatch]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:8081/api/protected/userdata/all?month=${currentMonth}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });
                const data = await response.json();

                // Добавляем полученные операции в хранилище Redux
                data.forEach((operation) => dispatch(addOperation(operation)));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [currentMonth, dispatch]); // Вызываем useEffect при монтировании и изменении currentMonth

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


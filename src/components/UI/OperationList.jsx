import React, {useState, useEffect} from 'react';
import OperationDate from "./OperationDate/OperationDate";
import OperationInfo from "./OperationInfo/OperationInfo";
import RedactModalO from "./RedactModal/RedactModalO";


const OperationList = ({ currentMonth }) => {
    const [operations, setOperations] = useState([]);
    const [groupedOperations, setGroupedOperations] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingOperation, setEditingOperation] = useState(null);

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

    useEffect(() => {
        if (operations.length > 0) {
            const grouped = groupOperationsByDate(operations);
            setGroupedOperations(grouped);
        }
    }, [operations]);

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

    const handleEditOperation = (operation) => {
        console.log("Редактируем операцию:", operation);
        setEditingOperation(operation);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleSaveOperation = async (updatedOperation) => {
        try {
            // Создаем объект, содержащий только измененные поля
            const changedFields = {};
            if (editingOperation.sum !== updatedOperation.sum) {
                changedFields.sum = updatedOperation.sum;
            }
            if (editingOperation.type !== updatedOperation.type) {
                changedFields.type = updatedOperation.type;
            }
            // ... [добавьте другие поля, которые нужно обновлять] ...

            // Обрабатываем note отдельно:
            if (updatedOperation.note !== editingOperation.note) {
                // Note был изменен, добавляем его в changedFields
                changedFields.note = updatedOperation.note;
            } else if (editingOperation.note) {
                // Note не менялся, но он не пустой, отправляем старое значение
                changedFields.note = editingOperation.note;
            }
            if (Object.keys(changedFields).length > 0) {
                const response = await fetch(`http://localhost:8081/api/protected/userdata/update/${updatedOperation.id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    },
                    body: JSON.stringify(changedFields)
                });

                if (response.ok) {
                    // Обновляем операции в состоянии компонента
                    const updatedOperations = operations.map(op =>
                        op.id === updatedOperation.id ? { ...op, ...changedFields } : op
                    );
                    setOperations(updatedOperations);
                    closeModal();
                } else {
                    console.error('Ошибка при обновлении операции:', response.status);
                    // Обработка ошибок
                }
            } else {
                console.log("Изменений не обнаружено, обновление не требуется");
                closeModal();
            }
        } catch (error) {
            console.error('Ошибка при обновлении операции:', error);
            // Обработка ошибок
        }
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
                                <OperationInfo
                                    key={operation.id}
                                    operation={operation}
                                    onEdit={handleEditOperation}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            )}
            <RedactModalO
                isOpen={isModalOpen}
                onClose={closeModal}
                operation={editingOperation}
                onSave={handleSaveOperation}
            />
        </div>
    );
};

export default OperationList;
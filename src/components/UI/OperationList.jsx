import React from 'react';
import OperationDate from "./OperationDate/OperationDate";
import OperationInfo from "./OperationInfo/OperationInfo";

const OperationList = () => {
    return (
        <div className="listbox">
            <h1>Operation list</h1>
            <div className="operation-list">
                <div className="day-section">
                    <OperationDate/>
                    <OperationInfo/>
                </div>
                <div className="day-section">
                    <OperationDate/>
                    <OperationInfo/>
                </div>
                <div className="day-section">
                    <OperationDate/>
                    <OperationInfo/>
                    <OperationInfo/>
                </div>
                <div className="day-section">
                    <OperationDate/>
                    <OperationInfo/>
                </div>
                <div className="day-section">
                    <OperationDate/>
                    <OperationInfo/>
                </div>
            </div>
        </div>
    );
};

export default OperationList;
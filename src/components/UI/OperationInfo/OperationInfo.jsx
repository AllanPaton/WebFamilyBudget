import React from 'react';
import resets from '../_resets.module.css';
import classes from "./OperationInfo.module.css";
import TypeInfo from "./TypeInfo/TypeInfo";

const OperationInfo = ({ operation, onEdit }) => {
    return (
        <div
            className={`${resets.storybrainResets} ${classes.block}`}
            onClick={() => onEdit(operation)}
        >
            <div className={classes.rectangle5}> </div>
            <div className={classes.rectangle6}>
                <div>
                    <TypeInfo type={operation.type} sum={operation.sum} note={operation.note}/>
                </div>
            </div>
        </div>
    );
};
export default OperationInfo;
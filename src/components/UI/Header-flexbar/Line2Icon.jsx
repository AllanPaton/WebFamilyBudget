import React from 'react';
import {memo} from "react";

const Line2Icon = props => (
    <svg
        preserveAspectRatio="none"
        viewBox="0 0 820 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M0 0L873 1.25774e-08"
            stroke="#43596F"
            strokeWidth={4}
            strokeLinecap="round"
        />
    </svg>
)
const Memo = memo(Line2Icon)
export { Memo as Line2Icon }
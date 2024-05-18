import React from 'react';
import {Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis} from "recharts";
import classes from './AreaChartBox.css'

const data = [
	{name:"RsA", denyagi:4000, key:1},
	{name:"RsB", denyagi:3000, key:1},
	{name:"RsV", denyagi:2000, key:1},
	{name:"RsZ", denyagi:5000, key:1},
	{name:"RsG", denyagi:9600, key:1},
]

const AreaChartBox = () => {
	return (
		<div className="areaChartContainer">
			<AreaChart width={650} height={300} data={data}>
				<defs>
					<linearGradient id="4d9be6" x1="0" y1="0" x2="0" y2="1">
						<stop offset="5%" stopColor="#4d9be6" stopOpacity={0.8}/>
						<stop offset="95%" stopColor="#4d9be6" stopOpacity={0}/>
					</linearGradient>
				</defs>
				<XAxis dataKey="name" tick={{ fontSize: 14, fill: '#fff',}} />
				<YAxis tick={{ fontSize: 14, fill: '#fff' ,}}/>
				<CartesianGrid strokeDasharray="12 3" />
				<Tooltip />
				<Area
					type="monotone"
					dataKey="denyagi"
					stroke="#4d9be6"
					fillOpacity={1}
					fill="url(#4d9be6)"
					activeDot={{r:4, stroke: '#FDFFFE', fill: '#4d9be6' }}
				/>
			</AreaChart>
		</div>
	);
};

export default AreaChartBox;
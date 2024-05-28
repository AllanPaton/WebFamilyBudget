import React, {useEffect, useState} from 'react';
import {Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis} from "recharts";
import classes from './AreaChartBox.css'

const AreaChartBox = ({currentMonth}) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(`http://localhost:8081/api/protected/userdata/areachart?month=${currentMonth}`, {
					method: 'GET',
					headers: {
						'Authorization': `Bearer ${localStorage.getItem('token')}`
					}
				});

				if (!response.ok) {
					throw new Error('Error retrieving data');
				}

				const fetchedData = await response.json();
				const formattedData = fetchedData.map(item => ({
					date: new Date(item.date),
					sum: parseInt(item.sum, 10)
				}));
				setData(formattedData);

			} catch (error) {
				console.error(error);
			}
		};
		fetchData();
	}, [currentMonth]);


	return (
		<div className="areaChartContainer">
			<AreaChart width={650} height={300} data={data}>
				<defs>
					<linearGradient id="4d9be6" x1="0" y1="0" x2="0" y2="1">
						<stop offset="5%" stopColor="#4d9be6" stopOpacity={0.8}/>
						<stop offset="95%" stopColor="#4d9be6" stopOpacity={0}/>
					</linearGradient>
				</defs>
				<XAxis dataKey="date" tick={{ fontSize: 14, fill: '#fff',}}
				       tickFormatter={(date) => date.toLocaleDateString()}/>
				<YAxis tick={{ fontSize: 14, fill: '#fff' ,}}/>
				<CartesianGrid strokeDasharray="12 3" />
				<Tooltip />
				<Area
					type="monotone"
					dataKey="sum"
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
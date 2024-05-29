import React, {useEffect, useState} from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import classes from "./CircleDiogram.css"

const COLORS = ['#FF4443', '#36D7B7', '#FFC738', '#8884d8', '#82ca9d', '#4FC3F7','#a8385d', '#64d86c']; //цвета для первого пирога
const COLORS2 = ['#4FC3F7', '#FF4443'];//цвета для второго

const CircleDiogram = ({currentMonth}) => {
	const [data, setData] = useState([]);
	const [profitLossData, setProfitLossData] = useState([
		{ name: 'Raise', value: 0 },
		{ name: 'Loss', value: 0 },
	]);
	const [chartData, setChartData] = useState([]);


	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(`http://localhost:8081/api/protected/userdata/piechart?month=${currentMonth}`, {
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
					sum: parseInt(item.sum, 10),
					type: item.type
				}));

				//Групировка по типу для первого пирога
				const groupedData = {};
				fetchedData.forEach(item => {
					if (groupedData[item.type]) {
						groupedData[item.type] += parseFloat(item.sum);
					} else {
						groupedData[item.type] = parseFloat(item.sum);
					}
				});
				const formattedChartData = Object.entries(groupedData).map(([type, value]) => ({
					name: type,
					value: Math.abs(value)
				}));
				setChartData(formattedChartData);

				setData(formattedData);

				// Вычисляем прибыль и убыток
				let totalProfit = 0;
				let totalLoss = 0;
				formattedData.forEach(item => {
					if (item.sum > 0) {
						totalProfit += item.sum;
					} else {
						totalLoss += Math.abs(item.sum);
					}
				});

				setProfitLossData([
					{ name: 'Прибыль', value: totalProfit },
					{ name: 'Убыток', value: totalLoss },
				]);

			} catch (error) {
				console.error(error);
			}
		};
		fetchData();
	}, [currentMonth]);

	return (
		<div className="diagramContainer">
			<div className="charts-container">
				<ResponsiveContainer width="100%" height="100%">
					<div className="chart-container left">
						<PieChart width={250} height={225}>
							<Pie
								data={chartData}
								dataKey="value"
								cx="50%"
								cy="50%"
								outerRadius={86}
								fill="#8884d8"
								label
							>
								{chartData.map((entry, index) => (
									<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
								))}
							</Pie>
						</PieChart>
					</div>
				</ResponsiveContainer>
			</div>
			<div className="chart-info">
				<ul>
					{chartData.map((entry, index) => (
						<li key={`info-${index}`}>
              <span
	              style={{
		              display: 'inline-block',
		              width: '10px',
		              height: '10px',
		              borderRadius: '50%',
		              backgroundColor: COLORS[index % COLORS.length],
		              marginRight: '5px',
	              }}/>
							{entry.name}: {entry.value}
						</li>
					))}
				</ul>
			</div>
			<div className="chart-container right">
				<div className="chart-info-total">
					<span>Total: </span>
					<span>{profitLossData[0].value > 0 ? `${(profitLossData[0].value / (profitLossData[0].value + profitLossData[1].value) * 100).toFixed(2)}%: Profit` : '0%'}</span>
					<span>{profitLossData[1].value > 0 ? `${(profitLossData[1].value / (profitLossData[0].value + profitLossData[1].value) * 100).toFixed(2)}%: Loss` : '0%'}</span>
				</div>
				<ResponsiveContainer width="100%" height="100%">
					<PieChart width={200} height={180}>
						<Pie
							data={profitLossData}
							dataKey="value"
							cx="50%"
							cy="50%"
							outerRadius={60}
							fill="#8884d8"
							label
						>
							{profitLossData.map((entry, index) => (
								<Cell key={`cell-${index}`} fill={COLORS2[index]} />
							))}
						</Pie>
					</PieChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
};

export default CircleDiogram;
import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import classes from "./CircleDiogram.css"

const data = [
	{ name: 'Loan', value: 30 },
	{ name: 'Internet', value: 5.2 },
	{ name: 'Gas', value: 30 },
	{ name: 'Tax', value: 30 },
];

const COLORS = ['#FF4443', '#4FC3F7', '#36D7B7', '#FFC738', '#8884d8', '#82ca9d', '#a8385d', '#64d86c'];

const CircleDiogram = () => {
	return (
		<div className="diagramContainer">
			<div className="charts-container">
				<ResponsiveContainer width="100%" height="100%">
					<div className="chart-container left">
						<PieChart width={250} height={225}>
							<Pie
								data={data}
								dataKey="value"
								cx="50%"
								cy="50%"
								outerRadius={86}
								fill="#8884d8"
								label
							>
								{data.map((entry, index) => (
									<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
								))}
							</Pie>
						</PieChart>
					</div>
				</ResponsiveContainer>
			</div>
			<div className="chart-info">
				<ul>
					{data.map((entry, index) => (
						<li key={`info-${index}`}>
              <span
	              style={{
		              display: 'inline-block',
		              width: '10px',
		              height: '10px',
		              borderRadius: '50%',
		              backgroundColor: COLORS[index % COLORS.length],
		              marginRight: '5px',
	              }}
              />
							{entry.name}: {entry.value}%
						</li>
					))}
				</ul>
			</div>
			<div className="chart-container right">
				<div className="chart-info-total">
					<span>Total: </span>
					<span>53.25%: Profit</span>
					<span>46.75%: Loss</span>
				</div>
				<ResponsiveContainer width="100%" height="100%">
					<PieChart width={200} height={180}>
						<Pie
							data={[
								{name: 'Прибыль', value: 53.25},
								{name: 'Убыток', value: 46.75},
							]}
							dataKey="value"
							cx="50%"
							cy="50%"
							outerRadius={60}
							fill="#8884d8"
							label
						>
							{data.map((entry, index) => (
								<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
							))}
						</Pie>
					</PieChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
};

export default CircleDiogram;
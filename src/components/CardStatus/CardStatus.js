import "./CardStatus.css";
import React, { useEffect, useState } from "react";

function CardStatus(props) {
	return (
		<div className="card">
			<div className="suhu">
				<div className="component">
					<p className="text-suhu">
						{props.suhu}
						<span>%</span>
					</p>
					<p className="text-status">Soil Humidity</p>
				</div>

				<img src=".\icons\humICon.svg" />
			</div>
			<div className="line" />
			<div className="status">
				<div className="component">
					<p className="detail-text-status">{props.pump}</p>
					<p className="text-status">Pump Status</p>
				</div>
				<div className="component">
					<p className="detail-text-status">
						{props.air_temp}
						<span className="satuan">°C</span>
					</p>
					<p className="text-status">Air Temp</p>
				</div>
				<div className="component">
					<p className="detail-text-status">
						{props.air_humid}
						<span className="satuan">%</span>
					</p>
					<p className="text-status">Air Humid</p>
				</div>
				<div className="component">
					<p className="detail-text-status">
						{props.water_level}
						<span className="satuan">%</span>
					</p>
					<p className="text-status">Water Level</p>
				</div>
				<div className="component">
					<p className="detail-text-status">
						{props.GarageLED}
						<span className="satuan"></span>
					</p>
					<p className="text-status">Lamp Status</p>
				</div>
			</div>
		</div>
	);
}

export default CardStatus;

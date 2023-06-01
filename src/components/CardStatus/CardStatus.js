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

				<img src="./icons/humIcon.svg" />
			</div>
			<div className="line" />
			<div className="status">
				<div className="component">
					<p className="detail-text-status">ON</p>
					<p className="text-status">Pump Status</p>
				</div>
				<div className="component">
					<p className="detail-text-status">15</p>
					<p className="text-status">Air Temp</p>
				</div>
				<div className="component">
					<p className="detail-text-status">20</p>
					<p className="text-status">Air Humid</p>
				</div>
				<div className="component">
					<p className="detail-text-status">20</p>
					<p className="text-status">Water Level</p>
				</div>
			</div>
		</div>
	);
}

export default CardStatus;

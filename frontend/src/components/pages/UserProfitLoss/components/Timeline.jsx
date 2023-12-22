import React from "react";
import SnapshotCard from "./SnapshotCard";
import weeklySnapshots from "../../../util/weeklySnapshots";

const Timeline = () => {
	return (
		<>
			{weeklySnapshots.map((item, index) => (
				<div
					key={index}
					className="py-5 flex flex-col items-center md:items-start">
					{/* Date Expression */}
					<div className="">
						<h1 className="text-xl font-semibold my-2">{item.date}</h1>
					</div>
					{/* Snapshot Card */}
					<SnapshotCard
						balance={item.balance}
						assets={item.assets}
						worth={item.worth}
					/>
				</div>
			))}
		</>
	);
};

export default Timeline;

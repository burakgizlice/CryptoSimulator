import React from "react";
import mockUserAssets from "../../util/mockUserAssets";
import AssetCard from "./components/AssetCard";

const UserAssets = () => {
	return (
		<div className="flex flex-col w-[95%] mx-auto py-5">
			<h1 className="font-bold text-3xl">Welcome to your currently owned assets!</h1>
			<h3 className="text-lg my-3">You can keep track of what you own, click on them to visit their individual coin pages to buy and sell.</h3>
			<div className="grid md:grid-cols-2 justify-items-center gap-5 my-5">
				{mockUserAssets.map((item, index) => (
					<AssetCard
						key={index}
						asset={item}
					/>
				))}
			</div>
		</div>
	);
};

export default UserAssets;

import React from "react";
import Avatar from "../../../../assets/avatar.jpg";

const Profile = () => {
	return (
		<img
			className="aspect-square w-16 object-cover rounded-full ring-2 ring-white hover:scale-110 transition-all cursor-pointer"
			src={Avatar}
		/>
	);
};

export default Profile;

import React from "react";
import { GiTwoCoins } from "react-icons/gi";
import pages from "../../util/navPageList.js";
import { Link } from "react-router-dom";
import { FaCopyright, FaLinkedin, FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
	return (
		<div className="w-full bg-purple-400 flex flex-col py-8 px-5 md:px-12">
			<Link
				to={"/"}
				className="flex gap-2 items-center w-fit">
				<GiTwoCoins className="text-6xl text-white" />
				<h1 className="text-3xl text-white font-bold">Crypto Simulator</h1>
			</Link>
			<h2 className="text-white font-semibold text-xl">A place you can practice trading coins risk free!</h2>
			<div className="w-full bg-white h-[2px] my-4"></div>
			{/* 3 COLS */}
			<div className="grid grid-cols-1 md:grid-cols-3">
				<div>
					<h3 className="text-white text-2xl font-semibold">Navigation</h3>
					<ul className="flex flex-col py-3 text-white text-lg">
						{pages.map((item, index) => (
							<Link
								key={index}
								className="transition-all hover:scale-105"
								to={item.path}>
								{item.name}
							</Link>
						))}
					</ul>
				</div>
				<div>
					<h3 className="text-white text-2xl font-semibold">Contact: Back-End Dev</h3>
					<ul className="gap-2 flex flex-col py-3">
						<a className="flex items-center text-white text-lg gap-1 cursor-pointer transition-all hover:scale-110 ">
							<IoIosMail className="text-3xl" /> angelsoenyunt@gmail.com
						</a>
						<a className="flex items-center text-white text-lg gap-1 cursor-pointer transition-all hover:scale-110 ">
							<FaLinkedin className="text-3xl" /> Angel Soe Nyunt
						</a>
						<a className="flex items-center text-white text-lg gap-1 cursor-pointer transition-all hover:scale-110 ">
							<FaGithub className="text-3xl" /> jayy734 (Angel Soe Nyunt)
						</a>
					</ul>
				</div>
				<div>
					<h3 className="text-white text-2xl font-semibold">Contact: Front-End Dev</h3>
					<ul className="gap-2 flex flex-col py-3">
						<a className="flex items-center text-white text-lg gap-1 cursor-pointer transition-all hover:scale-110 ">
							<IoIosMail className="text-3xl" /> burakgizlice114@gmail.com
						</a>
						<a className="flex items-center text-white text-lg gap-1 cursor-pointer transition-all hover:scale-110 ">
							<FaLinkedin className="text-3xl" /> Burak Gizlice
						</a>
						<a className="flex items-center text-white text-lg gap-1 cursor-pointer transition-all hover:scale-110 ">
							<FaGithub className="text-3xl" /> Downshifter114 (Burak Gizlice)
						</a>
					</ul>
				</div>
			</div>
			{/* Copyright */}
		</div>
	);
};

export default Footer;

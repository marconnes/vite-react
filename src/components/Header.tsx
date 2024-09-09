import React from "react";
import { IoMenuOutline, IoLogoWechat } from "react-icons/io5";

interface HeaderProps {
	clearMessages: () => void;
	handleSendSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({
	clearMessages,
	handleSendSidebar,
}) => {
	// Função que chama clearMessages e handleSendSidebar
	const handleClick = () => {
		clearMessages();
		handleSendSidebar();
	};

	return (
		<section>
			<div className="flex flex-row justify-between items-center p-5 text-white lg:px-[200px]">
				<IoMenuOutline className="text-[40px] md:hidden" />
				<h1 className="text-[20px]">DialogAI</h1>
				<IoLogoWechat
					className="text-[35px] cursor-pointer"
					onClick={handleClick}
				/>
			</div>
		</section>
	);
};

export default Header;

import React from "react";

interface Message {
	text: string;
}

interface HomeProps {
	messages: Message[];
}

const Home: React.FC<HomeProps> = ({ messages }) => {
	return (
		<section className="relative w-full h-full">
			{messages.map((message, index) => (
				<div
					key={index}
					className={`p-2 text-white rounded-md w-auto absolute mt-[50px] lg:mx-[200px] shadow-lg ${
						index % 2 === 0
							? "right-0 mr-4 bg-[#2f2f2f]"
							: "left-0 ml-4"
					}`}
					style={{ top: `${index * 50}px` }} // Ajusta a posição vertical de cada mensagem
				>
					{message.text}
				</div>
			))}
		</section>
	);
};

export default Home;

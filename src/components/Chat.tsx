import React, { useState } from "react";

interface ChatProps {
	onSendMessage: (message: string) => void;
}

const Chat: React.FC<ChatProps> = ({ onSendMessage }) => {
	const [message, setMessage] = useState<string>("");

	const handleSend = () => {
		onSendMessage(message);
		setMessage(""); // Limpa o input após o envio
	};

	return (
		<footer className="bottom-0 w-full shadow-lg p-4 lg:px-[150px]">
			<section className="flex justify-end min-h-[50px] text-black">
				<input
					type="text"
					placeholder="O que gostaria de pesquisar?"
					className="w-full focus:outline-none focus:ring-0 rounded-l-lg px-4 py-2"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
				/>
				<button
					className="bg-blue-900 text-white rounded-r-lg px-4 py-2"
					onClick={handleSend}
				>
					Enviar
				</button>
			</section>
		</footer>
	);
};

export default Chat;

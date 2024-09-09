import React, { useState } from "react";
import Home from "./pages/Home";
import Chat from "./components/Chat";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

interface Message {
	text: string;
}

const App: React.FC = () => {
	const [messages, setMessages] = useState<Message[]>([]); // Estado para mensagens da Home
	const [sidebarMessages, setSidebarMessages] = useState<string[]>([]); // Estado para mensagens do Sidebar

	// Função para adicionar uma nova mensagem ao array de mensagens
	const handleSendMessage = (msg: string) => {
		setMessages([...messages, { text: msg }]);
	};

	// Função para limpar as mensagens da home
	const clearMessages = () => {
		setMessages([]);
	};

	// Função para enviar a primeira palavra da home para o sidebar
	const handleSendSidebar = () => {
		const firstWord = getFirstWordFromHome();
		if (firstWord) {
			setSidebarMessages((prevMessages) => [...prevMessages, firstWord]); // Adiciona a nova mensagem abaixo das anteriores
		}
	};

	// Função para obter a primeira palavra da primeira mensagem
	const getFirstWordFromHome = (): string => {
		if (messages.length > 0) {
			const firstMessage = messages[0].text;
			return firstMessage.split(" ")[0];
		}
		return "";
	};

	return (
		<article className="flex flex-row h-screen bg-[#121212]">
			<div className="hidden md:flex md:z-20 md:top-0">
				<SideBar messages={sidebarMessages} />{" "}
				{/* Passa a lista de mensagens para o SideBar */}
			</div>
			<div className="flex flex-col justify-between w-full">
				<Header
					clearMessages={clearMessages}
					handleSendSidebar={handleSendSidebar}
				/>
				<Home messages={messages} />
				<Chat onSendMessage={handleSendMessage} />
			</div>
		</article>
	);
};

export default App;

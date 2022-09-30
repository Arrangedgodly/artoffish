import React from "react";
import Header from "./Header";
import Body from "./Body";
import Modal from "./Modal";

function Main() {
    const [selectedCard, setSelectedCard] = React.useState();
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    return (
        <main>
            <Header />
            <Body />
            {isModalOpen && (
                <Modal />
            )}
        </main>
    );
}

export default Main;
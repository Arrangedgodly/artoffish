import React from "react";
import Header from "./Header";
import Body from "./Body";

function Main() {
    const [sortTracker, setSortTracker] = React.useState(false);

    const checkSortTracker = () => {
        if (sortTracker) {

        }
    }
    
    return (
        <main>
            <Header />
            <Body />
        </main>
    );
}

export default Main;
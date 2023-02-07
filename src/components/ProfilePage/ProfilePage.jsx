import React from "react";
import CurrentlyReading from "../CurrentlyReading/CurrentlyReading";
import WantToRead from "../WantToRead/WantToRead";
import FinishedReading from "../FinishedReading/FinishedReading";


function ProfilePage() {

    return (
        <>
            <CurrentlyReading />
            <WantToRead />
            <FinishedReading />
        </>
    )
}

export default ProfilePage;
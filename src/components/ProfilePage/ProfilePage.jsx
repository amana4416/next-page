import React from "react";
import CurrentlyReading from "../CurrentlyReading/CurrentlyReading";
import WantToRead from "../WantToRead/WantToRead";


function ProfilePage() {

    return (
        <>
            <CurrentlyReading />
            <WantToRead />
        </>
    )
}

export default ProfilePage;
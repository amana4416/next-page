import React from "react";
import { useSelector } from "react-redux";
import CurrentlyReading from "../CurrentlyReading/CurrentlyReading";
import WantToRead from "../WantToRead/WantToRead";
import FinishedReading from "../FinishedReading/FinishedReading";
import './ProfilePage.css';


function ProfilePage() {

    //call user from the redux store -> so we can address the user logged in
    const user = useSelector(store => store.user);

    return (
        <>
            <h2 className="welcomeUser"> Welcome: {user.username}!</h2>
            <CurrentlyReading />
            <WantToRead />
            <FinishedReading />
        </>
    )
}

export default ProfilePage;
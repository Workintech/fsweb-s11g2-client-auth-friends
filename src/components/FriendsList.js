import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import React from 'react'

function FriendsList(props) {
    const history = useHistory();
    const [friends, setFriends] = useState([]);
    let loggedInToken = localStorage.getItem("s11fff");
    useEffect(() => {
        if (!!!loggedInToken) {
            console.log("log", loggedInToken, loggedInToken === null);
            history.push("/login");
        } else {
            axios
                .get("http://localhost:9005/api/friends", {
                    headers: {
                        Authorization: loggedInToken,
                    },
                })
                .then((res) => setFriends(res.data))
                .catch((err) => console.log(err));
        }
    }, []);
    return (
        <div>
            <div>
                <div>
                    <h1>FRIENDS LIST</h1>
                    <div>
                        <ul>
                            {friends.map((item) => (
                                <li key={item.id}>
                                    {item.name} - {item.email}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default FriendsList

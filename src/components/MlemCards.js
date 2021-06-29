import React, { useState, useEffect } from 'react';
import "../CSS/MlemCard.css";

import TinderCard from "react-tinder-card";
import axios from '../axios';


function MlemCards() {
    const [profile, setProfile] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get('/mlem/cards');

            setProfile(req.data)
        }

        fetchData();
    }, []);

    const swiped = (direction, nameToDelete) => {
        console.log("removing " + nameToDelete);
        // setLastDirection(direction);
    };

    const outOfFrame = (name) => {
        console.log(name + " left the screen!");
    };

    return (
        <div className="mlem__cards">
            <div className="mlem__card__container">
                {profile.map((pet) => (
                    <TinderCard 
                        className="swipe"
                        key={pet.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swiped(dir, pet.name)}
                        onCardLeftScreen={() => outOfFrame(pet.name)}
                    >
                        <div 
                            style={{ backgroundImage: `url(${pet.imgUrl})` }}
                            className="card"
                        >
                            <h3>{pet.name}</h3>
                        </div>

                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default MlemCards

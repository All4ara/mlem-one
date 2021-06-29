import React, { useState } from 'react'
import "../CSS/MlemCard.css"

import TinderCard from "react-tinder-card"


function MlemCards() {
    const [profile, setProfile] = useState([
        {
            name: "Apollo",
            url: "https://i.pinimg.com/originals/36/b7/ea/36b7eacfb08e8f34d079ad9453e95c95.jpg",

        },
        {
            name: "Mr. Beans",
            url: "https://s3.amazonaws.com/imagesroot.rescuegroups.org/webpages/s135nzd9yxg8imd.jpg",

        },
        {
            name: "Sammy",
            url: "https://bulldogguide.com/wp-content/uploads/2018/10/1018276002-612x612.jpg",

        },
        {
            name: "Charlie",
            url: "https://www.allthingsdogs.com/wp-content/uploads/2020/09/Cockapoo-poodle-mix.jpg",

        },
        
    ]);

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
                            style={{ backgroundImage: `url(${pet.url})` }}
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

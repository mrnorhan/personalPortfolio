import React from 'react'
import { useState } from "react";
// import { animated, useSpring } from "react-spring";

import Nutrihog from '../../Assets/Images/work-santonino.png'
import Santonino from '../../Assets/Images/work-santonino.png'
import Abeona from '../../Assets/Images/work-abeona.png';
import Newhope from '../../Assets/Images/work-newhope.png';

const Task = () => {

    const professions = ["police", "chef", "doctor", "engineer"];
    const [myProfession, setMyProfession] = useState("police");


    return (
        <>
        <div className="row w-100">
            {/* Title Header */}
            <h1 className="text-center">Hide Show Toggle</h1><br />


            {/* Display Content */}
            <div className="col text-center">
                <h1>{myProfession}</h1>
                <p>
                    {myProfession === "police" &&(
                        <ProfessionImage src={Nutrihog} />
                    )}
                    {myProfession === "chef" && (
                        <ProfessionImage src={Santonino} />
                    )}
                    {myProfession === "doctor" && (
                        <ProfessionImage src={Abeona} />
                    )}
                    {myProfession === "engineer" && (
                        <ProfessionImage src={Newhope} />
                    )}
                </p>
            </div>

            <p>
                    {myProfession === "police" ? <TextContent /> : 'kkkk' }

                    {myProfession === "chef" && (
                        <ProfessionImage src={Santonino} />
                    )}
                    {myProfession === "doctor" && (
                        <ProfessionImage src={Abeona} />
                    )}
                    {myProfession === "engineer" && (
                        <ProfessionImage src={Newhope} />
                    )}
                </p>

            {/* button */}
            <div className="col mb-3 col-12 text-center">
                <div
                    className="btn-group"
                    role="group"
                    aria-label="Basic example"
                >
                    {professions.map(profession => (
                        <button
                            type="button"
                            key={profession}
                            className={"btn btn-light border-dark ml-5 "}
                            onClick={() => setMyProfession(profession)}
                        >
                            {profession.toLocaleUpperCase()}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    </>
    );
};

// condition for content display switch
const ProfessionImage = ({ src }) => {
    return (
        <img
            src={src}
            alt=""
            style={{ width: "50%", height: "50%"}}
        />
    );
};
const TextContent = () => {
    return (
        <h1>Kamim</h1>,
        // <img src={Santonino} alt="" srcset="" />
        <i className="left-distance fab fa-instagram"></i>

    );
};

export default Task

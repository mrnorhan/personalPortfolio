import React from 'react'
import { useState } from "react";

// import Nutrihog from '../../Assets/Images/work-nutrihog.png'
import Santonino from '../../Assets/Images/work-santonino.png'
import Newhope from '../../Assets/Images/work-newhope.png';
import Abeona from '../../Assets/Images/work-abeona.png';
import AboutImage from '../../Assets/Images/work-project.png';
import Task from './task';
import Worklist from './Worklist';
// import Workselection from './Workselection';


const Workselection = () => {
    const[professions, setProfessions] = useState (
        [
         {
            id: 1,
            thumbnail: Santonino,
            title: 'Santonino',
            year: '2021',
            icons: 'icons use here to build the website',
            website: 'Website url link here',
            mockup: 'Figma link here',
            
          },
          {
            id: 2,
            thumbnail: Newhope,
            title: 'Newhope',
            year: '2021',
            icons: 'icons use here to build the website',
            website: 'Website url link here',
            mockup: 'Figma link here',
          },
          {
            id: 3,
            thumbnail: Abeona,
            title: 'Abeona',
            year: '2021',
            icons: 'icons use here to build the website',
            website: 'Website url link here',
            mockup: 'Figma link here',
          },
          {
            id: 4,
            thumbnail: Abeona,
            title: 'Abeona',
            year: '2021',
            icons: 'icons use here to build the website',
            website: 'Website url link here',
            mockup: 'Figma link here',
          },
          {
            id: 5,
            thumbnail: Abeona,
            title: 'Abeona',
            year: '2021',
            icons: 'icons use here to build the website',
            website: 'Website url link here',
            mockup: 'Figma link here',
          },
          {
            id: 6,
            thumbnail: Abeona,
            title: 'Abeona',
            year: '2021',
            icons: 'icons use here to build the website',
            website: 'Website url link here',
            mockup: 'Figma link here',
          },
        ]
    )

    // const professions = ["police", "chef", "doctor", "engineer"];
    const [myProfession, setMyProfession] = useState();

  const [name, setName] = useState (
      {fname: 'Norhan', lname: 'Kanim'}
       )

    return (
        <div id="Workselection-id1">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6">
                        <img src={AboutImage} alt="" srcset="" />
                    </div>
                    <div className="col-lg-6">
                        <div>
                            <h1>Nutrihogs <span>2021</span></h1>
                            <i class="fab fa-figma"></i>
                            <i class="left-distance fab fa-react"></i>
                            <i class="left-distance fab fa-github"></i>
                            <div>
                                <button className="btn-view-website">VIEW WEBSITE</button>
                                <button className="btn-view-mockup">VIEW MOCKUP</button>
                            </div>
                        </div>
                    </div>



                    <div className="col-lg-6">
                        <h1>{name.fname}</h1>
                        <h1>{name.lname}</h1>
                        <p>
                            {myProfession === "police" &&(
                                <ProfessionImage src={Abeona} />
                            )
                            }
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
                    <div className="col-lg-6">
                        <h1>{myProfession}</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="wrapper">
                            <div className="item">
                                <div
                                    className="btn-group"
                                    role="group"
                                    aria-label="Basic example"
                                >
                                    {professions.map(profession => (
                                        <img
                                            key={profession.id}
                                            className={"image-gap"}
                                            onClick={() => setMyProfession(profession.id)}
                                            src={profession.thumbnail} alt="" srcset=""
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// condition for content display switch
const ProfessionImage = ({ src }) => {
    return (
        <img src={src} alt="" />
        
    );
};

export default Workselection

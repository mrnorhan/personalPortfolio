import React, {Component} from 'react';
import { useState } from "react";


import NutrihogProject from '../../Assets/Images/nutrihog-project.png';
import Nutrihogs from '../../Assets/Images/nutrihog-thumbnail.png';


import Santonino from '../../Assets/Images/work-santonino.png'
import Newhope from '../../Assets/Images/work-newhope.png';
import Abeona from '../../Assets/Images/work-abeona.png';
import AboutImage from '../../Assets/Images/work-project.png';

class Workoption extends Component{

    constructor (props) {
        super (props);
        this.state = {
            Data: [
                {
                    id: 1,
                    project: Nutrihogs,
                    thumbnail: Nutrihogs,                    
                    title: 'Nutrihogs',
                    year: '2021',
                    icons1: 'fab fa-figma',
                    icons2: 'left-distance fab fa-react',
                    icons3: 'left-distance fab fa-github',
                    website: 'Website url link here',
                    mockup: 'Figma link here',
                },
                {
                    id: 2,
                    project: Santonino,
                    thumbnail: Santonino,                    
                    title: 'Santonino',
                    year: '2021',
                    icons1: 'fab fa-figma',
                    icons2: 'left-distance fab fa-react',
                    website: 'https://sncfi.edu.ph/',
                    mockup: 'Figma link here',
                },
                {
                    id: 3,
                    project: Newhope,
                    thumbnail: Newhope,
                    title: 'Newhope',
                    year: '2021',
                    icons1: 'fab fa-figma',
                    icons3: 'left-distance fab fa-github',
                    website: 'Website url link here',
                    mockup: 'Figma link here',
                },
                {
                    id: 4,
                    project: Abeona,
                    thumbnail: Abeona,
                    title: 'Abeona',
                    year: '2021',
                    icons1: 'fab fa-figma',
                    website: 'Website url link here',
                    mockup: 'Figma link here',
                    btn:'button className="btn-view-website">VIEW WEBSITE</button',

                }
            ]
        }
    }
    

    clickMe(item){
        // alert (item.id);
        // console.log (item); //all data
        // console.log (item.title); //specific data
        this.setState({
            id: item.id,
            project: item.project,
            thumbnail: item.thumbnail,
            title: item.title,
            year: item.year,
            icons1: item.icons1,
            icons2: item.icons2,
            icons3: item.icons3,
            website: item.website,
            mockup: item.mockup,
            btn: item.btn,
        });
    }
    state1 = { project : NutrihogProject }
    
    render(){
             let selectChoice = {
                name:'kanim',
                age: 30
             };
             console.log (selectChoice);
        return(
            <div id="Workoption-id">
                <div className="container-fluid">
                        <div className="row">
                            {/* <h1>{selectChoice.name}</h1> */}
                           
                            <div className="col-lg-6">
                                {/* <h1>{this.state1.myName}</h1> */}
                                {/* <img src={this.state1.project} alt="" srcset="" /> */}
                                <img src={this.state.project} alt="" srcset="" className='w-100' />

                            </div>

                            <div className="col-lg-6">
                                <div>
                                {/* <h1>{selectChoice}</h1> */}
                                    {/* <h2>{this.state.id}</h2> */}
                                    <h1>{this.state.title} <span>{this.state.year}</span></h1>
                                    <i class={this.state.icons1}></i>
                                    <i class={this.state.icons2}></i>
                                    <i class={this.state.icons3}></i>
                                    <div>
                                        <a href={this.state.website} target="_blank">
                                            <button className="btn-view-website">VIEW WEBSITE</button>
                                        </a>
                                        <a href={this.state.mockup} target="_blank">
                                            <button className="btn-view-mockup">VIEW MOCKUP</button>
                                        </a>
                                    </div>
                                </div>
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
                                        {
                                            this.state.Data.map((item, index) => (
                                                <img
                                                    className={"image-gap"}
                                                    onClick={this.clickMe.bind(this,item)}
                                                    src={item.thumbnail} alt="" srcset=""
                                                />
                                                )
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Workoption
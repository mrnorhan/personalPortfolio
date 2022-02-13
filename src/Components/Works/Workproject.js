import React from 'react'
import {useState} from 'react'
import AboutImage from '../../Assets/Images/work-project.png';
import Task from './task';
import Worklist from './Worklist';
import Workselection from './Workselection';
import Workoption from './Workoption';




const Workproject = () => { 
    return (
        <div id="Workproject-id">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <Workoption />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Workproject

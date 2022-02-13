import React from 'react';
import Santonino from '../../Assets/Images/work-santonino.png'
import Abeona from '../../Assets/Images/work-abeona.png';
import Newhope from '../../Assets/Images/work-newhope.png';

const Worklist = () => {
    return (
        <div id="Worklist-id">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="wrapper">
                            <div className="item">
                                <img src={Santonino} alt="" srcset="" />
                            </div>
                            <div className="item">
                                <img src={Newhope} className="image-gap" alt="" srcset="" />
                            </div>
                            <div className="item">
                                <img src={Abeona} className="image-gap" alt="" srcset="" />
                            </div>
                            <div className="item">
                                <img src={Newhope} className="image-gap" alt="" srcset="" />
                            </div>
                            <div className="item">
                                <img src={Abeona} className="image-gap" alt="" srcset="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Worklist

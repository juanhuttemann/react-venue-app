import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'

export default class Discount extends Component {
    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">
                    <div className="discount_porcentage">
                        <span>23 %</span>
                        <span>OFF</span>
                    </div>
                    <div className="discount_description">
                        <h3>Purchase Tickets Before 20th JUNE</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Reiciendis incidunt eos, repellat nemo aut amet, 
                            dolore itaque ab quasi temporibus sed dolorum expedita tempore assumenda praesentium nisi, 
                            corporis eum nulla!
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import Slide from 'react-reveal/Slide'

import MyButton from '../utils/MyButton'

export default class Discount extends Component {

    state = {
        discountStart:0,
        discountEnd: 30,
    }

    percentage = ()=> {
        if(this.state.discountStart < this.state.discountEnd){
            this.setState({
                discountStart: this.state.discountStart + 1
            })
        }
    }

    componentDidUpdate(){
        setTimeout(()=>{
            this.percentage()
        }, 30)
    }

    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">
                    <Fade 
                        onReveal={()=>this.percentage()}
                    >
                        <div className="discount_porcentage">
                            <span>{this.state.discountStart}%</span>
                            <span>OFF</span>
                        </div>
                    </Fade>
                    <Slide right>
                        <div className="discount_description">
                            <h3>Purchase Tickets Before 20th JUNE</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Reiciendis incidunt eos, repellat nemo aut amet, 
                                dolore itaque ab quasi temporibus sed dolorum expedita tempore assumenda praesentium nisi, 
                                corporis eum nulla!
                            </p>
                            <div>
                                <MyButton
                                    text="Purchase tickets"
                                    bck="#ffa800"
                                    color="#fff"
                                    link="google.com"
                                />
                            </div>
                            <div>

                            </div>
                        </div>
                    </Slide>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'
import MyButton from '../utils/MyButton'
import Zoom from 'react-reveal/Zoom'

export default class Pricing extends Component {

    state = {
        prices: [100, 150, 250],
        positions: ['Balcony', 'Medium', 'Star'],
        description: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
            "Esciunt ducimus saepe accusamus nam laborum tempore quibusdam",
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
        ],
        linkto: ['http://sales/b', 'http://sales/c', 'http://sales/d'],
        delay: [500, 100, 500]
    }

    showBoxes = ()=>(
        this.state.prices.map((box, i)=>(
            <Zoom delay={this.state.delay[i]} key={i}>
            <div className="pricing_item">
                <div className="pricing_inner_wrapper">
                    <div className="pricing_title">
                        <span>${this.state.prices[i]}</span>
                        <span>${this.state.positions[i]}</span>
                    </div>
                    <div className="pricing_description">
                        {this.state.description[i]}
                    </div>
                    <div className="pricing_buttons">
                        <MyButton
                            text="Purchase"
                            bck="#ffa800"
                            color="#fff"
                            link={this.state.linkto[i]}
                        />
                    </div>
                </div>
            </div>
            </Zoom>
        ))
    )

    render() {
        return (
            <div className="bck_black">
                <div className="center_wrapper pricing_section">
                    <h2>Pricing</h2>
                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>
                </div>
            </div>
        )
    }
}

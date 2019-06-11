import React from '../../../node_modules/react'
import Drawer from '../../../node_modules/@material-ui/core/Drawer'
import List from '../../../node_modules/@material-ui/core/List'
import ListItem from '../../../node_modules/@material-ui/core/ListItem'

import {scroller} from 'react-scroll'

const SideDrawer = (props)=> {

    const scrollToElement = (element)=>{
        scroller.scrollTo(element, {
            duration: 1500,
            delay: 100,
            smooth: true,
            offset: -150,
        });
        props.onClose(false)
    }

    return (
        <Drawer
            anchor="right"
            open={props.open}
            onClose={() => props.onClose(false)}
        >
            <List component="nav">
                <ListItem 
                    button 
                    onClick={() => { scrollToElement('featured')}}>
                        Event Starts In
                </ListItem>
                <ListItem 
                    button 
                    onClick={() => { scrollToElement('venueInfo')}}>
                        Venue Info
                </ListItem>
                <ListItem 
                    button 
                    onClick={() => { scrollToElement('highlights')}}>
                        Highlights
                </ListItem>
                <ListItem 
                    button 
                    onClick={() => { scrollToElement('pricing')}}>
                        Pricing
                </ListItem>
                <ListItem 
                    button 
                    onClick={() => { scrollToElement('location')}}>
                        Location
                </ListItem>
            </List>
        </Drawer>
        )
}

export default SideDrawer;
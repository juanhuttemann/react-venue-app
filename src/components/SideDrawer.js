import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

const SideDrawer = (props)=> {
    return (
        <Drawer
            anchor="right"
            open={props.open}
            onClose={() => props.onClose(false)}
        >
            <List component="nav">
                <ListItem 
                    button 
                    onClick={() => { alert("Event Starts In")}}>
                        Event Starts In
                </ListItem>
                <ListItem 
                    button 
                    onClick={()=>{ alert("Venue Info")}}>
                        Venue Info
                </ListItem>
                <ListItem 
                    button 
                    onClick={() => { alert("Highlights")}}>
                        Highlights
                </ListItem>
                <ListItem 
                    button 
                    onClick={() => { alert("Pricing")}}>
                        Pricing
                </ListItem>
                <ListItem 
                    button 
                    onClick={() => { alert("Location")}}>
                        Location
                </ListItem>
            </List>
        </Drawer>
        )
}

export default SideDrawer;
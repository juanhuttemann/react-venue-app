import React from '../../../node_modules/react'
import Drawer from '../../../node_modules/@material-ui/core/Drawer'
import List from '../../../node_modules/@material-ui/core/List'
import ListItem from '../../../node_modules/@material-ui/core/ListItem'

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
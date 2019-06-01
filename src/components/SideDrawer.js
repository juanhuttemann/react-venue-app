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
                    onClick={()=>{alert("gllsd")}}>
                        Event Starts In
                </ListItem>
            </List>
        </Drawer>
        )
}

export default SideDrawer;
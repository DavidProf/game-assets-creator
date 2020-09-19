import React from 'react'
import { Drawer, List, Divider } from '@material-ui/core'
import MenuItem from './MenuItem'

interface MenuProps {
    open?: boolean
    onClose?: (event: React.KeyboardEvent | React.MouseEvent) => void
}

export const Menu: React.FC<MenuProps> = props => {
    return (
        <>
            <Drawer anchor="bottom" open={props.open} onClose={props.onClose}>
                <List>
                    <MenuItem title="Home" icon="home" href="/" />
                    <Divider />
                    <MenuItem
                        title="Create Sprite"
                        icon="emoji_people"
                        href="/Sprite"
                    />
                    <MenuItem
                        title="Create TileSet"
                        icon="map"
                        href="/TileSet"
                    />
                    <MenuItem title="Create UI" icon="apps" href="/UI" />
                    <Divider />
                    <MenuItem title="About" icon="info" href="/About" />
                </List>
            </Drawer>
        </>
    )
}

export default Menu

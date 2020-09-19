import React from 'react'
import { Button } from '@material-ui/core'
import Menu from './Menu'

interface MenuCallerProps {
    title?: string
}

export const MenuCaller: React.FC<MenuCallerProps> = props => {
    const [menuVisibility, setMenuVisibility] = React.useState(false)

    const toggleDrawer = (open: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent
    ) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return
        }

        setMenuVisibility(open)
    }

    return (
        <>
            <Button onClick={toggleDrawer(true)}>
                {props.title || 'menu'}
            </Button>
            <Menu open={menuVisibility} onClose={toggleDrawer(false)} />
        </>
    )
}

export default MenuCaller

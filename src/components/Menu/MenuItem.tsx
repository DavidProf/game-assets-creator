import React from 'react'
import Link from 'next/link'
import { ListItem, Icon } from '@material-ui/core'

interface MenuProps {
    title: string
    icon?: string
    href?: string
}

export const Menu: React.FC<MenuProps> = props => {
    return (
        <>
            <Link href={props.href ?? `/${props.title}`} shallow={true}>
                <ListItem button>
                    <Icon style={{ marginRight: '1em' }}>
                        {props.icon ?? 'forward'}
                    </Icon>
                    {props.title}
                    {props.children}
                </ListItem>
            </Link>
        </>
    )
}

export default Menu

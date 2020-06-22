import React from 'react'
import Aux from '../../hoc/Aux'

export default function Layout(props) {
    return (
        <Aux>
            <div>
                Toolbar,Sidebar, Backdrop
           </div>
            <main>
                {props.children}
            </main>
        </Aux>
    )
}

import React from 'react'
import classes from './Modal.css'
import Aux from '../../../hoc/Aux'
import Backdrop from '../Backdrop/Backdrop'

export default function Modal(props) {
    return (
        <Aux>
            <Backdrop show={props.show} Clicked={props.modalClosed} />
            <div className={classes.Modal}
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vH)',
                    opacity: props.show ? '1' : '0'
                }}
            >
                {props.children}

            </div>
        </Aux>
    )
}

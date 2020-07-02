import React from 'react'
import classes from './Input.css'
export default function Input(props) {


    let inputElement = null
    switch (props.elementType) {
        case ('input'): inputElement =
            < input

                onChange={props.changed}
                className={classes.InputElement}
                {...props.elementConfig}
                value={props.value} />;
            break;
        case ('textarea'): inputElement =
            < textarea className={classes.InputElement}
                onChange={props.changed}
                {...props.elementConfig}
                value={props.value} />
            break;
        case ('select'): inputElement =
            (< select
                className={classes.InputElement}
                onChange={props.changed}
                value={props.value} >
                {props.elementConfig.options.map(option => (
                    <option key={option.displayValue} value={option.value} >
                        {option.displayValue}
                    </option>
                ))}</ select>)
            break;
        default: inputElement =
            < input className={classes.InputElement}
                onChange={props.changed}
                {...props.elementConfig}

                value={props.value} />
            break;
    }


    return (
        <div className={classes.Input}>
            <label className={classes.Label}>
                {props.lable}
                {inputElement}
            </label>
        </div>
    )
}

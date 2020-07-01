import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.css'
import axios from '../../../axios-order'
import Loader from '../../../components/UI/Spinner/Spinner'


export default class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''

        }
        ,
        loading: false
    }

    submitFormhandler = (event) => {
        event.preventDefault()
        this.setState({ loading: true })
        const order = {
            ingredients: this.props.ingredients,
            price: Number(this.props.price).toFixed(2),
            customer: {
                name: 'Pawan',
                city: "Pinjore",
                state: "Haryana"
            }
        }

        console.log(order);


        axios.post('/orders.json', order).then(response => {
            this.setState({ loading: false })
            this.props.history.push('/')

        }).catch(err => {
            this.setState({ loading: false })

        })

    }
    render() {

        let form = (<form>

            <input className={classes.Input} type="text" name="name" placeholder="Your Name" />
            <input className={classes.Input} type="text" name="email" placeholder="Your email" />
            <input className={classes.Input} type="text" name="street" placeholder="Your street" />
            <input className={classes.Input} type="text" name="postal" placeholder="Your Postal Code" />
            <Button btnType="Success" clicked={this.submitFormhandler}> Order</Button>

        </form>)

        if (this.state.loading) {
            form = <Loader />
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your data</h4>
                {form}
            </div>
        )
    }
}

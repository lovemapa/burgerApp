import React, { Component } from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './ContactData.css'
import axios from '../../../axios-order'
import Loader from '../../../components/UI/Spinner/Spinner'
import Input from '../../../components/UI/Input/Input'


export default class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "Your Name"
                },
                value: ""
            },
            email: {
                elementType: "input",
                elementConfig: {
                    type: "email",
                    placeholder: "Your email"
                },
                value: ""
            },
            streetCode: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "Your Street Code"
                },
                value: ""
            },
            postalCode: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "Your Postal Code"
                },
                value: ""
            },
            delievery: {
                elementType: "select",
                elementConfig: {
                    options: [
                        {
                            value: "fastest", displayValue: "Fastest"
                        },
                        {
                            value: "cheapest", displayValue: "Cheapest"
                        }
                    ]
                },
                value: ""
            },
        }
        ,
        loading: false
    }

    submitFormhandler = (event) => {
        event.preventDefault()
        this.setState({ loading: true })

        const formData = {}
        for (let formId in this.state.orderForm) {
            formData[formId] = this.state.orderForm[formId].value
        }


        const order = {
            ingredients: this.props.ingredients,
            price: Number(this.props.price).toFixed(2),
            orderData: formData

        }

        axios.post('/orders.json', order).then(response => {
            this.setState({ loading: false })
            this.props.history.push('/')

        }).catch(err => {
            this.setState({ loading: false })

        })

    }

    inputChangeHandler = (event, formIdentifier) => {
        console.log(event.target.value, formIdentifier);
        const updatedorderForm = {
            ...this.state.orderForm
        }

        const OrderFormValue = {
            ...updatedorderForm[formIdentifier]
        }

        OrderFormValue.value = event.target.value
        updatedorderForm[formIdentifier] = OrderFormValue
        this.setState({ orderForm: updatedorderForm })

    }

    render() {


        const formArray = []
        for (let key in this.state.orderForm) {
            formArray.push({
                id: key,
                config: this.state.orderForm[key]
            })
        }


        let form = (<form onSubmit={this.submitFormhandler}>


            {
                formArray.map(element => {

                    return < Input key={element.id}
                        elementType={element.config.elementType}
                        elementConfig={element.config.elementConfig}
                        value={element.config.value}
                        changed={(event) => this.inputChangeHandler(event, element.id)}
                    />

                }

                )
            }
            <Button btnType="Success"> Order</Button>

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

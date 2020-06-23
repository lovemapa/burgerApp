import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'


const PRICES = {
    salad: 0.5,
    bacon: 1.4,
    cheese: 1.2,
    meat: 1.8
}

export default class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        price: 4
    }

    addIngredientHandler = (type) => {
        const oldCOunt = this.state.ingredients[type]
        const updatedCount = oldCOunt + 1;
        const updatedBurger = {
            ...this.state.ingredients
        }
        updatedBurger[type] = updatedCount

        const oldPrice = this.state.price
        const updatedPrice = oldPrice + PRICES[type]
        this.setState({ price: updatedPrice, ingredients: updatedBurger })

    }

    removeIngredientHandler = (type) => {
        const oldCOunt = this.state.ingredients[type]
        if (oldCOunt <= 0)
            return;
        const updatedCount = oldCOunt - 1;
        const updatedBurger = {
            ...this.state.ingredients
        }
        updatedBurger[type] = updatedCount

        const oldPrice = this.state.price
        const updatedPrice = oldPrice - PRICES[type]
        this.setState({ price: updatedPrice, ingredients: updatedBurger })

    }
    render() {

        let disabled = {
            ...this.state.ingredients
        }
        for (let key in disabled)
            disabled[key] = disabled[key] <= 0
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    disable={disabled}
                    ingredientAdded={this.addIngredientHandler}
                    ingredientDeleted={this.removeIngredientHandler}
                    price={this.state.price}
                />
            </Aux>
        )
    }
}

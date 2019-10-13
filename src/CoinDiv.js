import React, { Component } from 'react'
import {choice} from './helpers'
import Coin from './Coin';
import './CoinDiv.css'


class CoinDiv extends Component {
    static defaultProps = {
        coins: [
            {side: "heads", url: "./heads.jpg"},
            {side: "tails", url: "./tails.jpg"}
        ]
    }
    constructor(props) {
        super(props)
        this.state = {
            currCoin: null,
            noOfFlips: 0,
            noOfHeads: 0,
            noOfTails: 0
        }
    }
    
    flipper = () => {
        const newCoin = choice(this.props.coins)    
        this.setState(st => {
            let newState = {
                ...st,
                currCoin: newCoin,
                noOfFlips: st.noOfFlips + 1
            }
            if(newCoin.side === "heads") {
                newState.noOfHeads += 1
            } else {
                newState.noOfTails += 1
            }
            return newState;
        })
    }
 
    handleClick = (e) => {
        this.flipper()
    }
    
    render() {
        return (
            <div className="CoinDiv">
                <h1>Flip a Coin!</h1>
                <button className="Button" onClick={this.handleClick}>Flip!</button>
                {this.state.currCoin && <Coin info={this.state.currCoin}/>}
                <p>Out of {this.state.noOfFlips}, there have been {this.state.noOfHeads} heads and {this.state.noOfTails} tails</p>
            </div>
        )
    }
}

export default CoinDiv
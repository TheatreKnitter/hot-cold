import React from 'react';
import './app.css'
import Header from './header';
import {Guesses, Count, List, GuessSection, form} from './game';


export default class app extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            guesses: [],
            feedback: 'Make your guess!',
            correctAnswer: Math.round(Math.random() * 100)
        };
    }

    newGame() {
        this.setState({
            guesses: [],
            feedback: 'Make your guess!',
            correctAnswer: Math.round(Math.random() * 100)
        });
    }

    guess(guess) {
        guess = parseInt(guess, 10);
        if (isNaN(guess)) {
            this.setState({
                feedback: 'Please enter a valid number'
            });
            return;
        }

        const difference = Math.abs(guess - this.state.correctAnswer);

        let feedback;
        if (difference >= 50) {
            feedback = 'You\'re Ice Cold...';
        }
        else if (difference >= 30) {
            feedback = 'You\'re Cold...';
        }
        else if (difference >= 10) {
            feedback = 'You\'re Warm';
        }
        else if (difference >= 1) {
            feedback = 'You\'re Hot!';
        }
        else {
            feedback = 'You got it!';
        }

        this.setState({
            feedback,
            guesses: [...this.state.guesses, guess]
        });
    }

    render() {
        return (
            <div>
                <Header onNewGame={() => this.newGame()}/>
                <div className= "box">
                	<div className= "mainApp">
                		<GuessSection feedback={this.state.feedback}
                    		onGuess={(guess) => this.guess(guess)} />
                		<Count count={this.state.guesses.length} />
                	</div>	
                	<List guesses={this.state.guesses} />
                </div>	
            </div>
        );
    }
}

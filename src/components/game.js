import React from 'react';

import './game.css';

export function Guesses(props) {

    const guesses = props.guesses.map((guess, index) => (
        <li key={index}>
            {guess}
        </li>
    ));
}    

export class Form extends React.Component {
    onGuess(event) {
        event.preventDefault();

        if (this.props.onGuess) {
            const value = this.input.value;
            this.props.onGuess(value);
        }
        this.input.value = '';
    }    

    render() {
        return (
            <form onSubmit={e => this.onGuess(e)}>
                
                <input type="text" name="userGuess" id="userGuess"
                    className="text" maxLength="3" autoComplete="off"
                    placeholder="Enter Your Guess" required
                    ref={input => this.input = input} />
                <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
            </form>
        );
    }
};

export function Count(props) {
    	return (
        	<p>
            	Guess #<span id="count">{props.count}</span>!
        	</p>
    	);
};

export function GuessSection(props) {
    	return (
        	<section>
            	<h2 id="feedback">{props.feedback}</h2>
            	<Form onGuess={props.onGuess} />
        	</section>
    	);
};

export function List(props) {
    const guesses = props.guesses.map((guess, index) => (
        <li key={index}>
            {guess}
        </li>
    ));

    return (
        <ul id="guessList" className="guessBox clearfix">
            {guesses}
        </ul>
    );
};

		

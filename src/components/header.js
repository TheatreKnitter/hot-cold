import React from 'react';

import './header.css';

export default class Header extends React.Component{
    onNewGame(event) {
        event.preventDefault();
        if (this.props.onNewGame) {
            this.props.onNewGame();
        }
    }

    onInfo(event) {
        event.preventDefault();
        if (this.props.onInfo) {
            this.props.onInfo();
        }
    }

	render() {
		return (
			<nav>
				<ul className="clearfix">
					<li><a className="js-what" href="info">What ?</a></li>
					<li><a className="new js-new-game" href="info">+ New Game</a></li>
				</ul>
			</nav>
		);
	}
}
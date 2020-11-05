import React from 'react';

class Lamp extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isOn: this.props.bulbOn };

		this.toggleActive = this.toggleActive.bind(this);
	}

	toggleActive() {
		this.setState((prevState) => ({
			isOn: !prevState.isOn,
		}));
	}

	render() {
		if (this.state.isOn) {
			return (
				<div className='lightBulb' onClick={this.toggleActive}>
					<img src='http://res.cloudinary.com/dtjoxh5wb/image/upload/v1495532392/on_med_n3p8pd.png' alt='light bulb start' />
				</div>
			);
		} else {
			return (
				<div className='lightBulb' onClick={this.toggleActive}>
					<img src='http://res.cloudinary.com/dtjoxh5wb/image/upload/v1495532392/off_med_fmma6p.png' alt='light bulb stop' />
				</div>
			);
		}
	}
}

export default Lamp;

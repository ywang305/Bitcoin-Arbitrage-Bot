import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import PriceChart from './Chart.jsx';


export default class ModalChart extends React.Component {
	render() {
		return (
			<Modal show={true} onHide={this.props.closeMe}  bsSize="large">
				<Modal.Header closeButton>
					<Modal.Title>{this.props.title}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					{this.props.priceChart}
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={this.props.closeMe}>Close</Button>
				</Modal.Footer>
			</Modal>
		);
	}
}
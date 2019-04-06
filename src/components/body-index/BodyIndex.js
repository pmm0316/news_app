import React, {Component} from 'react'
import BodyChild from './BodyChild'

export default class BodyIndex extends Component {
	constructor () {
		super()
		this.state = {
			username: 'tom',
			value: ''
		}
	}
	handleChildValueChange = (event) => {
		this.setState({
			value: event.target.value
		})
	}
	render () {
		setTimeout(() => {
			this.setState({
				username: 'jack'
			})
		}, 3000)
		return (
			<div>
				<h2>这是主体</h2>
				<BodyChild handleChildValueChange={this.handleChildValueChange} age={26}/>
				<p>父组件的数据：{this.state.username} {this.state.value}</p>
			</div>
		)
	}
}
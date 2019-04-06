import React, {Component} from 'react'
import Mixin from 'react-mixin'
import MixinLog from '../mixins'

export default class ComponentHeader extends Component {
	componentDidMount () {
		console.log('header init componentDidMount')
		MixinLog.log()
	}
	render () {
		return (
			<header>
				<h1>我是头部</h1>
			</header>
		)
	}
}
Mixin(ComponentHeader.prototype, MixinLog)
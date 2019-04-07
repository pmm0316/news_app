import React, {Component} from 'react'
import {Link} from 'react-router-dom'
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
				<ul>
					<li><Link to={`/`}>首页</Link></li>
					<li><Link to={`/list/123`}>列表</Link></li>
					<li><Link to={`/detail`}>详情</Link></li>
				</ul>
			</header>
		)
	}
}
Mixin(ComponentHeader.prototype, MixinLog)
import React, {Component} from 'react'
import products from './products.json'

const TableHeader = () => {
	return (
		<thead>
			<tr>
				<th>Id</th>
				<th>product</th>
				<th>calories</th>
				<th>fat</th>
				<th>carbs</th>
				<th>protein</th>
				<th>iron</th>
			</tr>
		</thead>
	)
}

const TableBody = (props) => {
	const rows = props.characterData.map((row,index) => {
		return (
			<tr key={index}>
				<td> {row.id}</td>
				<td> {row.product}</td>
				<td> {row.calories}</td>
				<td> {row.fat}</td>
				<td> {row.carbs}</td>
				<td> {row.protein}</td>
				<td> {row.iron}</td>
			</tr>
		)
	})
	return <tbody>{rows}</tbody>
}


class Table extends Component{
	render(){
		const {characterData} = this.props
		return(
			<table>
				<TableHeader />
				<TableBody characterData = {characterData} />
			</table>
		)
	}
}

export default Table
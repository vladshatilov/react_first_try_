<<<<<<< HEAD
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
				<td> <button onClick={() => props.handleDeleteRow(index)}>Delete</button></td>
			</tr>
		)
	})
	return <tbody>{rows}</tbody>
}



const Table = (props) => {

		const {characterData, handleDeleteRow} = props
		return(
			<table>
				<TableHeader />
				<TableBody characterData = {characterData} handleDeleteRow={handleDeleteRow} />
			</table>
		)
	}


=======
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
				<td> <button onClick={() => props.handleDeleteRow(index)}>Delete</button></td>
			</tr>
		)
	})
	return <tbody>{rows}</tbody>
}



const Table = (props) => {

		const {characterData, handleDeleteRow} = props
		return(
			<table>
				<TableHeader />
				<TableBody characterData = {characterData} handleDeleteRow={handleDeleteRow} />
			</table>
		)
	}


>>>>>>> 8d13e09a2d43c809f0f33d346da4c4928b026516
export default Table
import React,{Component} from 'react'
import Table from './Table'

import products from './products.json'

class App extends React.Component{
	render(){
		return(
		
		<div className="container">
			<Table characterData = {products} />
		</div>
		)
	}	
}


export default App
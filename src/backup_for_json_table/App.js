import React,{Component} from 'react'
import Table from './Table'
import products from './products.json'

import Form from './Form'



class App extends React.Component{
	
	state = {
		characters: [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
    ]
	}
	
	chartry = [...products]
	
	removeCharacter = (index) => {
		const {characters} = [...products]
		
		this.setState({
			characters : characters.filter((character, i) => {
				{/*return i!== index*/}
				
			})
		})
	}
	
	handleDeleteRow = (i) =>{
		let characters = this.chartry
		console.log(characters)
		characters.splice(i,1)
		console.log(characters[1])
		this.setState({
			characters : characters
		})
	}
				
	handleSubmit = (character) => {
		console.log(character);
		{/*this.setState({characters: [...this.state.characters, character]})*/}
		let characters = this.chartry
		let id = character.name
		let product = character.job
		let js = [{id: 1001, product: 'product', calories:'dd',fat:'dd',
		carbs:'dd',
		protein:'dd',
		iron:'dd',}]
		
		this.setState({characters: js})
		console.log(characters)
	}

	render(){
		let characters = this.chartry
		
		return(
		
		<div className="container">
			<Form handleSubmit = {this.handleSubmit} />
			<Table characterData = {characters} handleDeleteRow={this.handleDeleteRow}/>
			
		</div>
		)
	}	
}


export default App
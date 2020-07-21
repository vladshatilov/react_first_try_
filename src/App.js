import React,{Component} from 'react'
import Table from './Table'
import products from './products.json'

import Form from './Form'



class App extends React.Component{
	
	state = {
		characters: [
      {
        name: 'End reading tutorial',
        job: 'JSON intro',
      },
      {
        name: 'Cook dinner',
        job: 'Do not forget meat!',
      },
      {
        name: 'Walk with dog',
        job: '...and buy some dishes for him',
      },
      {
        name: 'Call mom',
        job: "It's matter",
      },
    ]
	}
	
	removeCharacter = (index) => {
		const {characters} = this.state
		
		this.setState({
			characters : characters.filter((character, i) => {
				return i!== index
				
			})
		})
	}
	
				
	handleSubmit = (character) => {		
		this.setState({characters: [...this.state.characters, character]})
	}

	render(){
		const characters = this.state.characters
		
		return(
		
		<div className="container">
			
			<Table characterData = {characters} removeCharacter={this.removeCharacter}/>
			<Form handleSubmit = {this.handleSubmit} />
		</div>
		)
	}	
}


export default App
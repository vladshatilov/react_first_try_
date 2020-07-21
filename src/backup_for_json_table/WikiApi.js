import React, {Component} from 'react'

class App extends Component {
	state = {
		data :[],
	}
	
	componentDidMount(){
		const url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=Java+map&format=json&origin=*'
		
		fetch(url)
			.then((result) => result.json())
			.then((result) => {
				this.setState({
					data: result,
				})
			})
	}
	
	render(){
		const {data} = this.state
		console.log(data)
		const result = data.map((entry, index) => {
			{/*if (entry.length > 1) {
				for (let item of entry){
					console.log(item)
					return <li key={index}>{item}</li>
				}
			}
			else {*/}
			return <li key={index}>{entry}</li>
		})
		
		return <ul>{result}</ul>
	}
}
 export default App
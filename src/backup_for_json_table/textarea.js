import React, {Component} from 'react'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'coconut'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Сочинение отправлено: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Сочинение:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Отправить" />
		<select value={this.state.value} onChange={this.handleChange}>
		  <option value="grapefruit">Грейпфрут</option>
		  <option value="lime">Лайм</option>
		  <option selected value="coconut">Кокос</option>
		  <option value="mango">Манго</option>
		</select>
      </form>
    );
  }
}

export default App
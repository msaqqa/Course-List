import React, {Component} from 'react';
import ItemsList from './Components/ItemsList';
import AddItem from './Components/AddItem';

class App extends Component{
  state={
    items: [
      {id: 1, name: 'Mahmoud', age: 26},
      {id: 2, name: 'Ahmed', age: 24},
      {id: 3, name: 'Hamza', age: 23},
    ]
  }

  handleDelete = (id) => {
    // const {items} = this.state;
    // const i = items.findIndex(item => item.id === id);
    // items.splice(i, 1);
    
    const items = this.state.items.filter(item => item.id !== id);

    this.setState({items})
  }

  AddItem = (item) => {
    item.id = Math.random();
    const {items} = this.state;
    items.push(item);
    this.setState({items})
  }

  render(){
    return(
      <div className="container">
        <h1 className="heading">Todo List</h1>
        <ItemsList items={this.state.items} handleDelete={this.handleDelete} />
        <AddItem AddItem={this.AddItem} />
      </div>
    )
  }
}

export default App;

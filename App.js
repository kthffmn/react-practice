import React from "react";
import ReactDOM from "react-dom";
class App extends React.Component {
  constructor(){
    super();
    this.state = {data: [
        {id: 1, name: "Simon Bailey"},
        {id: 2, name: "Thomas Burleson"},
        {id: 3, name: "Will Button"},
        {id: 4, name: "Kent Dodds"},
        {id: 5, name: "Trevor Ewen"},
        {id: 6, name: "Aaron Frost"},
        {id: 7, name: "Joel Hooks"},
        {id: 8, name: "Tim Kinderg"},
        {id: 9, name: "John Lindquist"},
        {id: 10, name: "Joe Maddalone"}
    ]}
  }
  render(){
    let rows = this.state.data.map(person => {
      return <PersonRow key={person.id} data={person} />
    })
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

const PersonRow = (props) => {
  return (
    <tr>
      <td>{props.data.id}</td>
      <td>{props.data.name}</td>
    </tr>
  );
}

export default App

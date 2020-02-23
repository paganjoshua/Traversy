import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends React.Component {
  render() {
    return this.props.todos.map(obj => (
        <TodoItem key={obj.id} todo={obj} markComplete={this.props.markComplete} />
    ));
  }
}

// PropTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;

import React from 'react';
import { connect } from 'react-redux';
import { addItem, removeItem, reverse } from '../../redux/reducers/toDoList/actions/actionCreators';

function App (props) {
    return (
        <center>{ props.state.todos.join(' ') }</center>
    );
}

const mapStateToProps = (state) => {
    return { state: state.toDoList };
};

const mapDispatchToProps = {
    addItem,
    removeItem,
    reverse
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
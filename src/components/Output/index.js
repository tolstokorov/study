import React from 'react';
import { connect } from 'react-redux';
import style from './index.module.css';

const Output = (props) => {
    const reverse = false; // props.reverse;
    const todosCopy = [...props.todos];
    const arr = reverse ? todosCopy.reverse() : todosCopy;
    return (
        <>
            <small
                className={ style.center + ' ' + style['output-text']}
            >Click on an item to remove it</small>
            
            <ol className={ style.list } reversed={ reverse }>
                {
                    arr.map((item, index) => {
                        return (
                            <li key={ index } className={ style.item }>
                                { item }
                            </li>
                        );
                    })
                }
            </ol>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        todos: state.toDoList.todos,
        reverse: state.toDoList.reverse
    };
};

export default connect(mapStateToProps)(Output);
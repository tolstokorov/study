import React from 'react';
import { connect } from 'react-redux';
import style from './index.module.css';
import { removeItem } from '../../redux/reducers/toDoList/actions/actionCreators'

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
                            <li
                                key={ index }
                                className={ style.item }
                                onClick={ () => {
                                    props.removeItem(index)
                                } }
                            >
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

const mapDispatchToProps =  {
    removeItem
};

export default connect(mapStateToProps, mapDispatchToProps)(Output);
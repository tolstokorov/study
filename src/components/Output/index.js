import React from 'react';
import { connect } from 'react-redux';
import style from './index.module.css';
import { removeItem } from '../../redux/reducers/toDoList/actions/actionCreators'

const Output = (props) => {
    const isReverse = props.isReverse;
    const todosCopy = [...props.todos];
    const arr = isReverse ? todosCopy.reverse() : todosCopy;
    return (
        <>
            <small
                className={ style.center + ' ' + style['output-text']}
            >Click on an item to remove it</small>
            
            <ol className={ style.list } reversed={ isReverse }>
                {
                    arr.map((item, index) => {
                        return (
                            <li
                                key={ index }
                                className={ style.item }
                                onClick={ () => {
                                    props.removeItem(isReverse ? (arr.length - 1 - index) : index)
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
        isReverse: state.toDoList.isReverse
    };
};

const mapDispatchToProps =  {
    removeItem
};

export default connect(mapStateToProps, mapDispatchToProps)(Output);
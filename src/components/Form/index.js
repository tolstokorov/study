import React, { createRef, useState } from 'react';
import { connect } from 'react-redux';
import style from './index.module.css';
import { addItem, reverse } from '../../redux/reducers/toDoList/actions/actionCreators'


const Form = (props) => {
    const inputRef = createRef();
    const [inputValue, setInputValue] = useState(props.placeholder);

    return (
        <>
            <div className={ style.wrapper }>
                <form onSubmit={ e => {
                    e.preventDefault();
                    props.addItem(inputValue);
                    setInputValue('');
                } } >
                    <div>
                        <label>
                            <p>Do something</p>
                            <input
                                type="text"
                                ref={ inputRef }
                                value={ inputValue }
                                onChange={ () => {
                                    setInputValue(inputRef.current.value)
                                } }
                            />
                        </label>
                        <button className={ style.btn } >Add</button>
                    </div>
                    <p><label>
                        <input
                            type="checkbox"
                            value={ props.isRreverse }
                            onChange={ () => {
                                props.reverse();
                            } }
                        /> <span>Reverse</span>
                    </label></p>
                </form>
            </div>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        placeholder: state.toDoList.placeholder,
        isReverse: state.toDoList.isReverse
    };
};
const mapDispatchToProps = {
    addItem,
    reverse  
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
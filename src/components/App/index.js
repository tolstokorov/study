import React from 'react';
import Form from '../Form';
import Output from '../Output';
import style from './index.module.css';

function App (props) {
    return (
        <>
            <hr/>
            
            <h1 className={ style.center }>To Do List</h1>

            <hr/>

            <div className={ style.center }>
                <Form />
            </div>

            <hr/>

            <Output />

            <hr/>
        </>
    );
}

export default App;
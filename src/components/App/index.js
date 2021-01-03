import React from 'react';
import Form from '../Form';
import Output from '../Output';
import style from './index.module.css';

function App () {
    return (
        <>
            <hr/>

            <h1 className={ style.center }>To Do List</h1>

            <hr/>

            <Form />

            <hr/>
            
            <Output />

            <hr/>
        </>
    );
}

export default App;
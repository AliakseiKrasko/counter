import React from 'react';

import './App.css';
import {CounterDisplay} from './CounterDisplay';

function App() {
    return (
        <div className="App">
            <CounterDisplay value={7} maxValue={9}/>
        </div>
    );
}

export default App;

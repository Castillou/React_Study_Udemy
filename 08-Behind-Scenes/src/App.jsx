import { useState } from 'react';

import Counter from './components/Counter/Counter.jsx';
import Header from './components/Header.jsx';
import ConfiguareCounter from './components/Counter/ConfiguareCounter.jsx';
import { log } from './log.js';

function App() {
    log('<App /> rendered');

    const [chosenCount, setChosenCount] = useState(0);

    function handleSetCount(newCount) {
        setChosenCount(newCount);
        // console.log(chosenCount) // 0
        // React가 state update schedule을 조정할 뿐, 즉각 state가 바뀌지는 않음
    }

    return (
        <>
            <Header />
            <main>
                <ConfiguareCounter onSet={handleSetCount} />
                <Counter key={chosenCount} initialCount={chosenCount} />
            </main>
        </>
    );
}

export default App;

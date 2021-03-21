import React, { useState } from 'react';
import Counter from './Counter_2';
import Info from './Info_2';
import Average from './Average';

const App = () => {
    const [visible, setVisible] = useState(false);
	
    return (
        <div>
            <button
              onClick={() => setVisible(!visible)}
            >
                {visible ? '숨기기' : '보이기'}
            </button>
            <hr />
            {visible && <Info />}
            {visible && <Counter />}
            {visible && <Average />}
        </div>
    );
};

export default App;
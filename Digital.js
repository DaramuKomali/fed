import React from 'react'
import ReactDOM from 'react-dom/client'
function Digital(){
    const root=ReactDOM.createRoot(document.getElementById('root'));
    const ele=(
        <div>
            
            <h1 className='t1'>{new Date().toLocaleTimeString()}</h1>
        </div>
    );
    root.render(ele);
}
setInterval(Digital,1000);
export default Digital;


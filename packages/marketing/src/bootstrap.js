import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

//mount function
const mount = (el)=>{
    ReactDom.render(
        <App />,
        el
    )
}


//if in isolated development call mount immediately
if (process.env.NODE_ENV === "development") {
    const devRoot = document.querySelector('#_marketing-dev-root');
    if (devRoot) {
        mount(devRoot);
    }
}

//otherwise we're running through a container 
export { mount };

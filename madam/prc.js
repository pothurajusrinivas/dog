import React from 'react';

import ReactDOM from 'react-dom';
function Show() {

    return (  <h1> Hello !!!</h1>);
}
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<Show/>);
export default Show;
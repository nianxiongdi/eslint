import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
 
import Button from './button/view/button';

import ButtonGroup from './button/view/group';

import './index.js'

ReactDOM.render(
    
    <ButtonGroup>
        <Button type="primary">OK</Button>
        <Button type="secondary">Cancel</Button>
    </ButtonGroup>
, document.getElementById('root'));
 
serviceWorker.unregister();

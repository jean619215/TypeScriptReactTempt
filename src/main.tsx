import * as React from 'react';
import { render } from 'react-dom';
import { Hello } from './components/MainPanel';


const APP = () => (
	<Hello />
);

render( <APP />, document.getElementById( 'root' ) );
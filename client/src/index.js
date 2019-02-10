import React from 'react';
import { render } from 'react-dom';

import styles from './index.scss';

import App from './components/app/App';

render(<App className={styles.index} />, document.getElementById('root'));

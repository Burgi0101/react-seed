import React from 'react';

import createApp from '../src/app/app';

const App = createApp(React);

const props = {
    content: 'It works!'
};

export default () => (
    <App {...props} />
);

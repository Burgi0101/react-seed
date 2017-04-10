import { createStore } from 'redux';

import { HelloComponent } from './components/hello/hello.component';
import hello from './store/reducers/hello/hello.reducer';

// creating store from hello.reducer
const store = createStore(hello);

const setMode = (mode) => store.dispatch({ type: 'SET_MODE', mode });

store.subscribe(() => {
    console.log(store.getState());
});

export default React => ({ content, ...props }) => {
    const Hello = HelloComponent(React);
    const helloProps = {
        ...props,
        actions: {
            setMode
        }
    };

    return (
        <div className="content">
            <Hello { ...helloProps } />
            <p>{content}</p>
        </div>
    );
};

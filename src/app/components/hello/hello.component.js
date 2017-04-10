import PropTypes from 'prop-types';

import { hello } from '../../styles/themes/components';

export const HelloComponent = React => {

    const reactElement = ({ subject = 'World', actions: { setMode } }) => {
        return (
            <p onClick={() => setMode('edit')}>
                Hello, {subject}!

                <style jsx>{`p{${hello.styles}}`}</style>
            </p>
        );
    };

    const {
        string,     // string = PropTypes.string
        shape,      // shape = PropTypes.shape
        func        // func = PropTypes.func
    } = PropTypes;

    // adding PropTypes
    reactElement.propTypes = {
        subject: string,
        actions: shape({
            setMode: func.isRequired
        })
    };

    return reactElement;
};
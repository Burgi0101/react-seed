import PropTypes from 'prop-types';

import { colors, spacing } from '../../styles/theme';

export default React => {

    const hello = ({ subject = 'World', actions: { setMode } }) => {
        return (
            <p onClick={() => setMode('edit')}>
                Hello, {subject}!

                <style jsx>{`
                 p {
                     padding: ${spacing.medium};
                     background: ${colors.blue};
                   }
                 `}
                </style>
            </p>
        );
    };

    const {
        string,     // string = PropTypes.string
        shape,      // shape = PropTypes.shape
        func        // func = PropTypes.func
    } = PropTypes;

    // adding PropTypes
    hello.propTypes = {
        subject: string,
        actions: shape({
            setMode: func.isRequired
        })
    };

    return hello;
};
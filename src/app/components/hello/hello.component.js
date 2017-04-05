import { colors, spacing } from '../../styles/theme';

export default React => {

    const {
    string, shape, func
  } = React.PropTypes;

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

    // adding PropTypes
    hello.propTypes = {
        subject: string,
        actions: shape({
            setMode: func.isRequired
        })
    };

    return hello;
};
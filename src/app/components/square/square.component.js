import { square } from '../../styles/themes/components';

export const SquareComponent = React => {

    const createElement = ({ }) => {
        return (
            <button>
                <style jsx>{`button{${square.styles}}`}</style>
            </button>
        );
    };

    return createElement;
};
import { SquareComponent } from '../square/square.component';
import { board } from '../../styles/themes/components';

export const BoardComponent = React => {

    const Square = SquareComponent(React);
    const createElement = ({ }) => {
        const status = 'Next player: X';

        return (
            <div>
                <div className="status">{status}</div>
                <div>
                    <Square />
                    <Square />
                    <Square />
                    <style jsx>{`div{${board.styles}}`}</style>
                </div>
                <div>
                    <Square />
                    <Square />
                    <Square />
                    <style jsx>{`div{${board.styles}}`}</style>
                </div>
                <div>
                    <Square />
                    <Square />
                    <Square />
                    <style jsx>{`div{${board.styles}}`}</style>
                </div>
            </div>
        );
    };

    return createElement;
};
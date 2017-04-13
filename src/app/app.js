import { BoardComponent } from './components/board/board.component';

export const AppComponent = React => {

    const Board = BoardComponent(React);

    const createElement = ({}) => {

        return (
            <div className="content">
                <Board />
            </div>
        );
    };
    return createElement;
};

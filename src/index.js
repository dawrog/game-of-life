import * as React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Main extends React.Component {

    render() {
        return (
            <div>
                <h1>The Game of Life</h1>
                <Grid 
                />
                <h2>Generations: {this.state.generation}</h2>
            </div>
        );
    }


}

ReactDOM.render(<p>Hello World!</p>, document.getElementById('root'));


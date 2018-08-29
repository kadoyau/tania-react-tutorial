import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class App extends Component {
    render() {
        const name = 'Mito';
        const heading = <h1 className="site-heading">Hello, {name}</h1>;
        return (
            <div className="App">
                {heading}
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));

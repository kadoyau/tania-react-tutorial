import React, {Component} from 'react';

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

export default App;
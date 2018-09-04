import React, {Component} from 'react';
import Table from './Table';

class App extends Component {
    state = {
        characters: [
            {
                'name': 'Charlie',
                'job': 'Janitor'
            },
            {
                'name': 'Mac',
                'job': 'Bounce'
            },
            {
                'name': 'Dee',
                'job': 'Aspiring actress'
            },
            {
                'name': 'Dennis',
                'job': 'Bartender'
            }
        ]
    };

    removeCharacter = index => {
        const {characters} = this.state;

        this.setState({
            characters: characters.filter((characters, i) => {
                return i !== index;
            })
        })
    };

    render() {
        return (
            <div className="container">
                <Table characterData={this.state.characters}
                       removeCharacter={this.removeCharacter}
                />
            </div>
        );
    }

}

export default App;
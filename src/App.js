import React, {Component} from 'react';
import Table, {MySection} from './Table';

class App extends Component {
    render() {
        const characters = [
            {
                'name': 'Sasi',
                'job': 'Software Engineer'
            },
            {
                'name': 'Mac',
                'job': 'Bouncer'
            },
            {
                'name': 'Dee',
                'job': 'Aspring actress'
            },
            {
                'name': 'Dennis',
                'job': 'Bartender'
            }
        ];
        return(
            <div className="container">
                <Table characterData={characters}/>
                <MySection/>
            </div>
        );
    }
}

export default App;
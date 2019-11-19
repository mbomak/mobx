import React, {Component} from 'react';
import {observable, computed, configure} from 'mobx';
import {observer} from 'mobx-react';
import './App.css';

configure({enforceActions: 'observed'});

@observer
class App extends Component {
    @observable count = 0;
    hI = () => this.count++;
    hD = () => this.count--;
    render() {
        return (
            <div className="app">
                {this.count}
                <br />
                <button onClick={this.hI}>-------</button>
                <br />
                <button onClick={this.hD}>+++++</button>
            </div>
        );
    }
}

export default App;

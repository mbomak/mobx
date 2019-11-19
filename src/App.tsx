import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';
import {withRouter} from "react-router-dom";

import {IUser} from 'modules/user/store';
import './App.css';

interface IProps {
    
}

@inject((stores: any) => ({
    user: stores.user as IUser
}))
@(withRouter as any)
@observer
class App extends Component<{user?: IUser}, {}> {
    change = (): void => {
        this.props.user && this.props.user.chT('dasda');
    };

    render() {
        console.log('this.props',this.props);
        const {user} = this.props;

        return (
            <div className="app">
                {user && user.title}
                <br/>
                <br/>
                <button onClick={this.change}>button</button>
            </div>
        );
    }
}

export default App;

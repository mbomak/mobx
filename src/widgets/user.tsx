import React, {Component} from 'react';
import {observer, inject} from 'mobx-react';
import {withRouter} from 'react-router-dom';

import {Stores} from 'modules';
import ui from 'ui';
const {Button, UserItem} = ui;

@inject((stores: Stores) => ({
    user: stores.user as Stores['user'],
}))
@(withRouter as any)
@observer
class User extends Component<{
    user?: Stores['user'];
    title: string;
}> {
    getUser = (): void => {
        this.props.user && this.props.user.getData();
    };

    render() {
        const {user, title} = this.props;
        console.log('this.props', this.props);
        if (!user) {
            return null;
        }
        const {data} = user;

        return (
            <>
                {title}
                <Button type="button" onClick={this.getUser}>
                    Get user
                </Button>
                {data && (
                    <UserItem>
                        <p>title: {data.title}</p>
                        <p>id: {data.id}</p>
                        <p>user id: {data.userId}</p>
                        <p>
                            status:{' '}
                            {data.completed ? 'completed' : 'not completed'}
                        </p>
                    </UserItem>
                )}
            </>
        );
    }
}

export default User;

import React from 'react';

import UserInfo from 'widgets/user';
import ui from 'ui';
const {Title} = ui;

const User: React.FC = () => (
    <>
        <Title>User information</Title>
        <UserInfo title="v01" />
    </>
);

export default User;

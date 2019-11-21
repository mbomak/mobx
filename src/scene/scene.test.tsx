import React from 'react';
import {shallow} from 'enzyme';
import Home from './home';
import Registration from './registration';
import User from './user';

describe('Scene tests', () => {
    it('Should render Home without errors', () => {
        const wrapper = shallow(<Home />);
        const type: any = wrapper.type();
        expect(wrapper).toMatchSnapshot();
    });

    it('Should render Registration without errors', () => {
        const wrapper = shallow(<Registration />);
        const type: any = wrapper.type();
        expect(wrapper).toMatchSnapshot();
    });

    it('Should render User without errors', () => {
        const wrapper = shallow(<User />);
        expect(wrapper).toMatchSnapshot();
    });
});

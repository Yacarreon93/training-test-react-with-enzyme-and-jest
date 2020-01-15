import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import { TodoList } from './TodoList';

// addTodo with button click
// removeTodo with li click
// matches snapshot

configure({ adapter: new Adapter() });

describe('<TodoList />', () => {
    it('calls addTodo action creator on button click', () => {
        const props = {
            addTodo: jest.fn(),
            todos: [],
        };

        const wrapper = shallow(<TodoList {...props} />);

        wrapper.find('input').simulate('change', { currentTarget: { value: 'buy groceries' }});
        wrapper.find('button').simulate('click');

        expect(props.addTodo).toHaveBeenCalledWith({ text: 'buy groceries' });
    });
    
    it('calls removeTodo action creator on li click', () => {
        const props = {
            removeTodo: jest.fn(),
            todos: [{ text: 'todo 1' }, { text: 'todo 2' }],
        };

        const wrapper = shallow(<TodoList {...props} />);
        
        wrapper.find('li').at(0).simulate('click');
        
        expect(props.removeTodo).toHaveBeenCalledWith(0);
    });
    
    it('matches snapshot', () => {
        const props = {
            todos: [],
        };

        const wrapper = shallow(<TodoList {...props} />);

        expect(toJson(wrapper)).toMatchSnapshot();
    });
});
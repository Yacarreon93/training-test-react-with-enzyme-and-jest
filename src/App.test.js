import React from 'react';
import { render } from '@testing-library/react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from './App';
import { Title } from './App';

configure({ adapter: new Adapter() });

describe('<App />', () => {
  const wrapper = shallow(<App />);

  console.log(wrapper.debug());
  
  it ('should contain 1 p element', () => {
    expect(wrapper.find('p').length).toBe(1);
    expect(wrapper.find('p').exists()).toBe(true);
    expect(wrapper.find('.App-link').exists()).toBe(true);
  });
  
  it ('should exists App-link element', () => {
    expect(wrapper.find('.App-link').exists()).toBe(true);
  });
  
  it ('should contain a ul with 3 children', () => {
    expect(wrapper.find('ul').hasClass('custom-list')).toBe(true);
    expect(wrapper.find('ul').children().length).toBe(3);
  });
  
  it ('should h1 contains the right text', () => {
    expect(wrapper.find('h1').text()).toBe('Welcome to React');
  });

  it ('some special selectors', () => {
    expect(wrapper.find('[text="Hello"]').dive().text()).toBe('Hello');
    expect(wrapper.find({ text: "Hello" }).dive().text()).toBe('Hello');
    expect(wrapper.find(Title).dive().text()).toBe('Hello');
    expect(wrapper.find('Title').dive().text()).toBe('Hello');
  });
});

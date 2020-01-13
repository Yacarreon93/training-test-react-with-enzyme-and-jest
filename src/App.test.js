import React from 'react';
// import { render } from '@testing-library/react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import App, { Title, Link } from './App';

configure({ adapter: new Adapter() });

describe('<App /> shallow rendering', () => {
  const wrapper = shallow(<App />);

  // console.log(wrapper.debug());
  
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

  it('matches the snapshot', () => {
    const tree = shallow(<App />);

    expect(toJson(tree)).toMatchSnapshot();
  });
  
  it('matches the snapshot', () => {
    const tree = shallow(<App />);

    expect(toJson(tree)).toMatchSnapshot();
  });
  
  it('Link component accepts address prop', () => {
    const linkWrapper = shallow(<Link address="www.google.com" />);

    expect(linkWrapper.instance().props.address).toBe('www.google.com');
  });
  
  it('a tag node renders href conrrectly', () => {
    const linkWrapper = shallow(<Link address="www.google.com" />);

    expect(linkWrapper.props().href).toBe('www.google.com');
  });
  
  it('returns null with true hide prop', () => {
    const linkWrapper = shallow(<Link hide={false} address="www.google.com" />);

    expect(linkWrapper.find('a').length).toBe(1);

    linkWrapper.setProps({ hide: true });

    expect(linkWrapper.get(0)).toBeNull();
  });

  it('on button click changes p text', () => {
    const wrapper = shallow(<App />);
    const button = wrapper.find('button');

    expect(wrapper.find('.button-state').text()).toBe('No!');
    
    button.simulate('click');

    expect(wrapper.find('.button-state').text()).toBe('Yes!');
  });

  it('on input change, title changes text', () => {
    const wrapper = shallow(<App />);
    const input = wrapper.find('input[type="text"]');

    expect(wrapper.find('h2').text()).toBe('');

    input.simulate('change', { currentTarget: { value: 'Tyler' }});

    expect(wrapper.find('h2').text()).toBe('Tyler');
  })
});

describe('<App /> mount rendering', () => {
  it('h1 contains correct text', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('h1').text()).toBe('Welcome to React');
    wrapper.unmount(); // tests will not affect each other if they are using the same DOM
  });

  it('matches the snapshot', () => {
    const tree = mount(<App />);
    expect(toJson(tree)).toMatchSnapshot();
    tree.unmount(); // tests will not affect each other if they are using the same DOM
  });
});
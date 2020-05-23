import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App component', () => {
  it('starts with a count of 0', () => {
    const wrapper = shallow(<App />);
    const text = wrapper.find('span').text();
    expect(text).toEqual('0');
  });

  it('increments count by 1 when the increment button is clicked', () => {
    const wrapper = shallow(<App />);
    const incrementBtn = wrapper.find('button.button').at(0);
    incrementBtn.simulate('click');
    const text = wrapper.find('span').text();
    expect(text).toEqual('1');
  });

  it('decrements count by 1 when the decrement button is clicked', () => {
    const wrapper = shallow(<App />);
    const incrementBtn = wrapper.find('button.button').at(1);
    incrementBtn.simulate('click');
    const text = wrapper.find('span').text();
    expect(text).toEqual('0');
  });

  it('count value is not decremented below 0', () => {
    const wrapper = shallow(<App />);
    const incrementBtn = wrapper.find('button.button').at(1);
    incrementBtn.simulate('click');
    const text = wrapper.find('span').text();
    expect(text).toEqual('0');
  });
});


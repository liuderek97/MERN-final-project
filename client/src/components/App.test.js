import React from 'react';
// setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import App from './App';
configure({ adapter: new Adapter() });

const setup = (props = {}, state = null) =>
{
    const wrapper = shallow(<App {...props} />)
    if (state) wrapper.setState(state);
    return wrapper
}

const findByAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`)


test("renders without crashing", () => 
{
    const wrapper = setup();
    const appComponent = findByAttr(wrapper, 'component-app'); // target a specific element
    expect(appComponent.length).toBe(1) // make an assertion
});


test("renders increment button", () =>
{
    const wrapper = shallow(<App />);
    const button = findByAttr(wrapper, 'inc-button');
    expect(button.length).toBe(1);
});


test("renders decrement button", () =>
{
    const wrapper = shallow(<App />);
    const button = findByAttr(wrapper, 'dec-button');
    expect(button.length).toBe(1);
});


test("renders counter display", () => 
{
    const wrapper = setup();
    const counterDisplay = findByAttr(wrapper, 'counter-display');
    expect(counterDisplay.length).toBe(1);
});


test("counter starts at 0", () => 
{
    const wrapper = setup();
    const initialCount = wrapper.state('counter');
    expect(initialCount).toBe(0);
});


test("counter increments on button click", () => 
{
    let counter = 5;
    const wrapper = setup({}, { counter });
    const button = findByAttr(wrapper, 'inc-button');
    button.simulate('click');

    const counterDisplay = findByAttr(wrapper, 'counter-display');
    // console.log(counterDisplay.debug());
    
    expect(counterDisplay.text()).toContain(counter + 1)
});


test("counter decrements on button click", () => 
{
    let counter = 0;

    const wrapper = setup({}, { counter });
    const button = findByAttr(wrapper, 'dec-button');
    button.simulate('click');

    const counterDisplay = findByAttr(wrapper, 'counter-display');
    console.log(counterDisplay.debug());

    expect(counterDisplay.text())
});
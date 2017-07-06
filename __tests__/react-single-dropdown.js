import React from 'react';
import ReactComponentTemplate from './../src/react-single-dropdown';
import {shallow} from 'enzyme';


describe('The main app', () => {
    it('the app should have text', () => {
        const comp  = shallow(<ReactComponentTemplate/>);
        expect(comp.contains(<div className='component-class'>
      This is my react component
    </div>)).toBe(true);
    })
})
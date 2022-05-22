import React from 'react';
import { shallow } from 'enzyme';

import Record from '../Record/Record';

describe('RecordComponent', () => {
  it('should render audio component', () => {
    const props = {
    };
    const wrapper = shallow(<Record {...props} />);
    expect(wrapper.render().text()).toMatch('This is a dismissible demo component');
  });
});

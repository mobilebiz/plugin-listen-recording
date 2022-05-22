import React from 'react';
import { shallow } from 'enzyme';

import Record from '../Record/Record';

const correctProps = {
  task: {
    attributes: {
      conversations: {
        media: [
          {
            url: 'https://api.twilio.com/cowbell',
          }
        ]
      }
    }
  }
};

describe('RecordComponent', () => {
  it('正常：AudioPlayer コンポーネントがレンダリングされている', () => {
    const wrapper = shallow(<Record {...correctProps} />);
    expect(wrapper.find('.audioPlayer').length).toBe(1);
  });
  it('エラー：プロパティが存在しない', () => {
    const wrapper = shallow(<Record />);
    expect(wrapper.find('.audioPlayer').length).toBe(0);
  });
});

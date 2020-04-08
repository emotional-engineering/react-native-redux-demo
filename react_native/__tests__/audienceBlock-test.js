import React from 'react';
import MenuItem from '../elements/audienceBlock';

import renderer from 'react-test-renderer';

test('renders correctly', () => {

  const data = {
      languages: ["EN", "FR"],
      genders: ["F", "M"]
  }

  const tree = renderer.create(<audienceBlock visible={true} switchPlatformStat={()=>{}} />).toJSON();
  expect(tree).toMatchSnapshot();
});

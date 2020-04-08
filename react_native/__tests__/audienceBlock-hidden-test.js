import React from 'react';
import MenuItem from '../elements/audienceBlock';

import renderer from 'react-test-renderer';

test('renders correctly', () => {

  const data = { };

  const tree = renderer.create(<audienceBlock visible={false} switchPlatformStat={()=>{}} />).toJSON();
  expect(tree).toMatchSnapshot();
});

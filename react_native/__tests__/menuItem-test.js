import React from 'react';
import MenuItem from '../elements/menuElement';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
  const tree = renderer.create(<MenuItem onPress={()=>{}} />).toJSON();
  expect(tree).toMatchSnapshot();
});

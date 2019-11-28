import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Box } from './Box';

describe('Box', () => {
  test('renders correctly', () => {
    const tree = renderer.create(<Box>{'Test'}</Box>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

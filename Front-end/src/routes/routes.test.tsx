import React from 'react';
import renderer from 'react-test-renderer';
import Structure from '.';

test('render test', () => {
    const component = renderer.create(<Structure />).toJSON();

    expect(component).toMatchSnapshot();
  });
import React from 'react';
import renderer from 'react-test-renderer';
import Home from '.';

test('render test', () => {
    const component = renderer.create(<Home />).toJSON();

    expect(component).toMatchSnapshot();
  });
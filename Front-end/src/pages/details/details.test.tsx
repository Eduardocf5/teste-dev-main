import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from "react-router-dom";
import Details from '.';

test('render test', () => {
    const component = renderer.create(<BrowserRouter>
        <Details />
    </BrowserRouter>).toJSON();

    expect(component).toMatchSnapshot();
  });
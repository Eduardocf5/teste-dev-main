import { BrowserRouter } from "react-router-dom";
import renderer from 'react-test-renderer';
import Detail from '.';

const value = {
    id: 1,
    name: "Pica pau",
    image: "https://img.elo7.com.br/product/zoom/3FFF8A3/matriz-de-bordado-pica-pau-matriz-picapau.jpg",
    status: "Alive",
    species: "Picidae",
    origin_name: "Campephilus melanoleucos",
    gender: "Male",
    location_name: "Mundo todo",
    type: "Ave",
}

test('render test', () => {
    const component = renderer.create(
        <BrowserRouter>
            <Detail data={value} />
        </BrowserRouter>
    ).toJSON();

    expect(component).toMatchSnapshot();
  });
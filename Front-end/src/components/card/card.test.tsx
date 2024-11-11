import renderer from 'react-test-renderer';
import Card from '.';

const value = {
    id: 1,
    name: "Pica pau",
    img: "https://img.elo7.com.br/product/zoom/3FFF8A3/matriz-de-bordado-pica-pau-matriz-picapau.jpg",
    status: "Ave",
    species: "Picidae"
}

test('render test', () => {
    const component = renderer.create(<Card
        id={value.id}
        name={value.name}
        img={value.img}
        status={value.status}
        species={value.species}
        />).toJSON();

    expect(component).toMatchSnapshot();
  });
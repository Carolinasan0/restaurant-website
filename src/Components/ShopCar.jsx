import React, { createContext } from 'react';
import empanada1 from '../Images/arroz.jpg';
import empanada2 from '../Images/ranchera.jpg';
import empanada3 from '../Images/carne.jpg';
import paparellena4 from '../Images/papaRellena.jpg';
import pastelyuca5 from '../Images/pastelDeYuca.jpg';
import arepahuevo6 from '../Images/arepaDeHuevo.jpg';


const appEmp = createContext();

function ShopCar(props) {

  const prodList = {

    list: [
      {
        id: '1',
        name: 'Empanada de arroz',
        ingredients: 'Carne molida, arroz, arveja y huevo.',
        price: 1500,
        styles: {
          backgroundImage: `url('${empanada1}')`
        }
      },
      {
        id: '2',
        name: 'Empanada ranchera',
        ingredients: 'Queso mozarella, maiz, salchicha y tocineta.',
        price: 2000,
        styles: {
          backgroundImage: `url('${empanada2}')`
        }
      },
      {
        id: '3',
        name: 'Empanada de carne',
        ingredients: 'Carne desmechada y puré de papa.',
        price: 1500,
        styles: {
          backgroundImage: `url('${empanada3}')`
        }
      },
      {
        id: '4',
        name: 'Papa rellena',
        ingredients: 'Carne molida y huevo.',
        price: 1500,
        styles: {
          backgroundImage: `url('${paparellena4}')`
        }
      },
      {
        id: '5',
        name: 'Pastel de yuca',
        ingredients: 'Arroz, arveja, carne molida y yuca.',
        price: 1500,
        styles: {
          backgroundImage: `url('${pastelyuca5}')`
        }
      },
      {
        id: '6',
        name: 'Arepa de huevo',
        ingredients: 'Carne molida y huevo.',
        price: 2000,
        styles: {
          backgroundImage: `url('${arepahuevo6}')`
        }
      }
    ]  
  }

  const idProd = prodList.list
  .map(e => e = e.id)
;

let iStateCar = {};
for (let i of idProd) {
  iStateCar[i] = 0
}

const [car, setCar] = React.useState(iStateCar);

const add = e => {
  setCar({
    ...car,
    [e.target.dataset.product]: car[e.target.dataset.product] + 1
  });
}

const deduct = e => {
  if(car[e.target.dataset.product] > 0) {
    setCar({
      ...car,
      [e.target.dataset.product]: car[e.target.dataset.product] - 1
    });
  }
}

  return (
    <appEmp.Provider value={{ prodList, car, add, deduct }}>
      {props.children}
    </appEmp.Provider>
  )
}

export { ShopCar, appEmp };

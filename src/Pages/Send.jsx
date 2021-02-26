import React, { useContext } from 'react';

import { appEmp } from '../Components/ShopCar';
import PageProd from '../Components/PageProd';

function Send(props) {
  const { prodList, car, add, deduct } = useContext(appEmp);
  
  let keys = [];
  let values = [];

  Object.values(car).forEach((value, idx) => {
    if (value > 0) {
      keys.push(Object.keys(car)[idx]);
      values.push(value);
    }
  });

  let shopList = [];

  Object.keys(prodList).forEach(name => {
    prodList[name].forEach((item, idx) => {
      keys.forEach(key => {
        if (key === prodList[name][idx].id) {
          shopList.push(prodList[name][idx]);
        }
      })
    });
  });

  let total = 0;
  shopList.forEach((item, idx) => {
    total += item.price * values[idx];
  });

  const movil = 573132018799;
  const request = [];

  shopList.forEach((item, idx) => {
    request.push(`
      Producto ${idx+1}
      ${item.name}, 
      cantidad: ${values[idx]}; 
      `);
  });

  const order = `Hola, quiero pedir lo siguiente:
  
  ${request.join(`
  `)}
  `;

  return (
    <PageProd
      carValues={ values }
      shopList={ shopList }
      add={ add }
      deduct={ deduct }
      phone={ movil }
      order={ order }
      total={ total }
    />
  )
}

export default Send;
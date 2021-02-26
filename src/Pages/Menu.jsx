import React, { useContext } from 'react';
import MenuF from '../Components/MenuF';
import { appEmp } from '../Components/ShopCar';

function Menu() {
  const { prodList, car, add, deduct } = useContext(appEmp);

  const [list, setList] = React.useState(prodList.list);
  const [search, setSearch] = React.useState('');
  let filteredList = prodList.list;

  function clickProducts(e) {
    setList(prodList[e.target.dataset.name]);
  }

  function handleChange(e) {
    setList(prodList.list);
  
    setSearch(e.target.value);
  }

  search ?
    filteredList = list
      .filter(element => {
        return `${element.name} ${element.ingredients}`
          .toLowerCase()
          .includes(search.toLowerCase());
      })
  : filteredList = list;

  const shopp = Object.values(car).reduce((accum, curr) => accum + curr);

  return(

    <MenuF
      handleChange={ handleChange }
      products={ prodList.list }
      clickProducts={ clickProducts }
      list={ filteredList }
      add={ add }
      deduct={ deduct }
      amount={ car }
      totalAmount={ shopp }
    />
  )
}

export default Menu;

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './Components/Layout';
import { ShopCar } from './Components/ShopCar';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import Send from './Pages/Send';
// import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component = { Home }/>
        <Layout>
          <ShopCar>
            <Route exact path="/menu" component = { Menu }/>
            <Route exact path="/send" component = { Send }/>
          </ShopCar>
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

import React from 'react';
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import CheckOut from './containers/Checkout/Checkout'
function App() {
  return (
    <div >
      <Layout>
        <BurgerBuilder />
        <CheckOut />
      </Layout>
    </div>
  );
}

export default App;

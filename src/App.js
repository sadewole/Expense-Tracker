import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { AddTransaction } from './components/AddTransaction';
import { TransactionList } from './components/TransactionList';

import { GlobalProvider } from './context/GlobalContext';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;

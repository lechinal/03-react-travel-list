import React from 'react';

import Logo from './components/Logo/Logo';
import Form from './components/Form/Form';
import PackingList from './components/PackingList/PackingList';
import Stats from './components/Stats/Stats';

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

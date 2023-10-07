import { React, useState } from 'react';

import Logo from './components/Logo/Logo';
import Form from './components/Form/Form';
import PackingList from './components/PackingList/PackingList';
import Stats from './components/Stats/Stats';

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems(items => [...items, item]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} />
      <Stats />
    </div>
  );
}


import React from 'react';
import Header from './Components/Header';
import FormNewSticker from './Components/FormSticker';
import FormRepeatSticker from './Components/FormRepeatSticker';
import Table from './Components/Table';

function App() {
  return (
    <React.Fragment>
      <Header/>
      <FormNewSticker/>
      <FormRepeatSticker/>
      <Table name="gonza"/>
    </React.Fragment>
  );
}

export default App;

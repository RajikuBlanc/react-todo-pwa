import React from 'react';
import './App.css';
import './service/firebase';
import Header from './components/Header';
import AuthProvider from './providers/AuthProvider';
import Dashbord from './components/Dashbord';

function App() {
  return (
    <AuthProvider>
      <Header />
      <Dashbord />
    </AuthProvider>
  );
}

export default App;

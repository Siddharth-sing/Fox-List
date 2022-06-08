import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import BodyComponent from './components/BodyComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
         <HeaderComponent/>
      </header>
      <body className='body-main'>
        <BodyComponent/>
      </body>
    </div>
  );
}

export default App;

import './App.css';
import { MemoHeader } from './components/Header/Header';
import { Main } from './components/Main';
import { MemoFooter } from './components/Footer/index'

function App() {
  return (
    <div className="container py-5">
      <MemoHeader />
      <Main />
      <MemoFooter />
    </div>
  );
}

export default App;

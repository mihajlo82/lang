import './App.css';
import Main from './components/Main';
import useMain from './components/customs/useMain';

function App() {
  const { itemData, setOnSuccess, totalQuestions, counterSuccess } = useMain();

  return (
    <div className="App">
      <Main
        itemData={itemData}
        setOnSuccess={setOnSuccess}
        totalQuestions={totalQuestions}
        counterSuccess={counterSuccess}
      />
    </div>
  );
}

export default App;

import './App.css';
import { AnimalCreation } from './DataFromStorage/AnimalCreation.tsx';
import InitialForm from './Components/InitialForm/InitialForm.tsx';

function App() {
  return (
    <>
      <AnimalCreation />
      <InitialForm />
    </>
  );
}

export default App;

import './App.css';
import { AnimalCreation } from './DataFromStorage/AnimalCreation.tsx';
import InitialForm from './Components/InitialForm/InitialForm.tsx';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <AnimalCreation />
      <InitialForm />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;

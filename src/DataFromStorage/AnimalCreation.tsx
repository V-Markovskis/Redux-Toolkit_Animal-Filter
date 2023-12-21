import { useDispatch } from 'react-redux';
import { addAnimalsFromStorage } from '../Slices/animalSlice.tsx';
import { useEffect } from 'react';
import DisplayAnimal from '../Components/DisplayAnimal/DisplayAnimal.tsx';

export function AnimalCreation() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addAnimalsFromStorage());
  }, []);

  return <DisplayAnimal />;
}

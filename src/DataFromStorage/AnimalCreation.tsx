import { useDispatch } from 'react-redux';
import { addAnimalsFromStorage } from '../Slices/animalSlice.tsx';
import { useEffect } from 'react';
import DisplayAnimals from '../Components/DisplayAnimals/DisplayAnimals.tsx';

export function AnimalCreation() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addAnimalsFromStorage());
  }, []);

  return <DisplayAnimals />;
}

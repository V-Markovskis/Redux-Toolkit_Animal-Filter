import { useSelector } from 'react-redux';
import { RootState } from '../../Store/store.tsx';
import { Animal } from '../../Slices/animalSlice.tsx';
import DisplaySingleAnimal from '../DisplaySingleAnimal/DisplaySingleAnimal.tsx';
import styles from './DisplayAnimals.module.css';

const DisplayAnimals = () => {
  const animals = useSelector((state: RootState) => state.animals.animals);

  return (
    <>
      <section>
        <div className={styles.globalContainer}>
          {animals &&
            animals.map((animal: Animal, key: number) => <DisplaySingleAnimal key={key} animalToDisplay={animal} />)}
        </div>
      </section>
    </>
  );
};

export default DisplayAnimals;

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Store/store.tsx';
import { Animal, sortInAscending, sortInDescending } from '../../Slices/animalSlice.tsx';
import DisplaySingleAnimal from '../DisplaySingleAnimal/DisplaySingleAnimal.tsx';
import styles from './DisplayAnimals.module.css';

const DisplayAnimals = () => {
  const animals = useSelector((state: RootState) => state.animals.animals);
  const dispatch = useDispatch();

  return (
    <>
      <div className={styles.sortLogicContainer}>
        <div className={styles.buttonContainer}>
          <span>Press to sort: </span>
          <br />
          <button
            className="btn btn-info"
            onClick={() => {
              dispatch(sortInAscending());
            }}
          >
            Asc
          </button>
          <button
            className="btn btn-info"
            onClick={() => {
              dispatch(sortInDescending());
            }}
          >
            Desc
          </button>
        </div>
      </div>
      <br />
      <section>
        <div className={styles.displayAllAnimalsContainer}>
          {animals &&
            animals.map((animal: Animal, key: number) => <DisplaySingleAnimal key={key} animalToDisplay={animal} />)}
        </div>
      </section>
    </>
  );
};

export default DisplayAnimals;

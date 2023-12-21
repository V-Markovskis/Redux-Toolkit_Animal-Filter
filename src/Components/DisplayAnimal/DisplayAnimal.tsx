import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Store/store.tsx';
import { deleteAnimal } from '../../Slices/animalSlice.tsx';
import styles from './DisplayAnimal.module.css';

const DisplayAnimal = () => {
  const animals = useSelector((state: RootState) => state.animals.animals);
  const dispatch = useDispatch();

  return (
    <div className={styles.formGlobalContainer}>
      {animals.map((animal, key) => {
        return (
          <div key={key} className={styles.formContainer}>
            <div className={styles.nameContainer}>
              <span>Animal Nr: {animal.id}</span>
            </div>
            <span>Animal name: {animal.animalName}</span>
            <div className={styles.imageContainer}>
              <img className={styles.image} src={animal.imageUrl} alt="animal" width={200} />
            </div>
            <br />
            <div className={styles.buttonContainer}>
              <button
                className="btn btn-warning"
                onClick={() => {
                  dispatch(deleteAnimal(animal));
                }}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayAnimal;

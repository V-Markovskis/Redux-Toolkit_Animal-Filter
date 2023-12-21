import { animalState } from '../../Slices/animalSlice.tsx';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Store/store.tsx';
import { useState } from 'react';
import styles from './InitialForm.module.css';
import { addAnimal } from '../../ValidationFunctions/addAnimal.tsx';

const InitialForm = () => {
  const dispatch = useDispatch();
  const animals = useSelector((state: RootState) => state.animals.animals);
  const [animal, setAnimal] = useState(animalState);

  return (
    <div>
      <form
        className={styles.formContainer}
        onSubmit={(e) => {
          e.preventDefault();
          const animalId = animals.length + 1;
          // dispatch(addNewAnimal({ ...animal, id: animals.length + 1 }));
          addAnimal(dispatch, animal, animalId);
          setAnimal(animalState);
        }}
      >
        <label htmlFor="animal-name">Animal Name:</label>
        <br />
        <input
          type="text"
          id="animal-name"
          placeholder="Enter animal name..."
          value={animal.animalName}
          onChange={(e) => {
            setAnimal({
              ...animal,
              animalName: e.target.value,
            });
          }}
        />
        <br />
        <label htmlFor="animal-picture">Animal Picture:</label>
        <br />
        <input
          type="text"
          id="animal-picture"
          placeholder="Enter picture URL..."
          value={animal.imageUrl}
          onChange={(e) => {
            setAnimal({
              ...animal,
              imageUrl: e.target.value,
            });
          }}
        />
        <br />
        <br />
        <div className={styles.buttonContainer}>
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default InitialForm;

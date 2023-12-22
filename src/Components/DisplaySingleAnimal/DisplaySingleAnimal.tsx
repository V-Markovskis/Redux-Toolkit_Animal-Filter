import { Animal, deleteAnimal, editAnimal } from '../../Slices/animalSlice.tsx';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from './DisplaySingleAnimal.module.css';

type DisplaySingleAnimalProps = {
  animalToDisplay: Animal;
};

const DisplaySingleAnimal = ({ animalToDisplay }: DisplaySingleAnimalProps) => {
  const dispatch = useDispatch();
  const [editModeEnabled, setEditModeEnabled] = useState(false);
  const [editFormData, setEditFormData] = useState(animalToDisplay);
  {
    return (
      <div className={styles.formGlobalContainer}>
        {editModeEnabled ? (
          <form
            className={styles.editFormContainer}
            onSubmit={(e) => {
              e.preventDefault();
              console.log('edit submit clicked');
              dispatch(editAnimal({ ...editFormData, id: animalToDisplay.id }));
              setEditModeEnabled(!editModeEnabled);
            }}
          >
            <div className={styles.nameContainer}>
              <span>Animal Nr: {animalToDisplay.id}</span>
            </div>
            <br />
            <input
              value={editFormData.animalName}
              onChange={(e) => {
                setEditFormData({ ...editFormData, animalName: e.target.value });
              }}
            />
            <br />
            <input
              value={editFormData.imageUrl}
              onChange={(e) => {
                setEditFormData({ ...editFormData, imageUrl: e.target.value });
              }}
            />
            <br />
            <div className={styles.saveAfterEdit}>
              <button className="btn btn-success">Save</button>
            </div>
          </form>
        ) : (
          <div className={styles.formContainer}>
            <div className={styles.nameContainer}>
              <span>Animal Nr: {animalToDisplay.id}</span>
            </div>
            <span>Animal name: {animalToDisplay.animalName}</span>
            <div className={styles.imageContainer}>
              <img className={styles.image} src={animalToDisplay.imageUrl} alt="animal" width={200} />
            </div>
            <br />
            <div className={styles.buttonContainer}>
              <button
                className="btn btn-warning"
                onClick={() => {
                  dispatch(deleteAnimal(animalToDisplay));
                }}
              >
                Delete
              </button>
              <button
                className="btn btn-warning"
                onClick={() => {
                  setEditModeEnabled(!editModeEnabled);
                }}
              >
                Edit
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
};

export default DisplaySingleAnimal;

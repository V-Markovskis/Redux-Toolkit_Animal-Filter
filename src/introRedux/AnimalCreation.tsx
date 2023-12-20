import type { RootState } from './store.tsx';
import { useSelector, useDispatch } from 'react-redux';
import { addAnimalsFromStorage, addNewAnimal, animalState } from './animalSlice.tsx';
import { useEffect, useState } from 'react';
import DisplayAnimal from '../Components/DisplayAnimal.tsx';

export function AnimalCreation() {
  const dispatch = useDispatch();
  // dispatch(addAnimalsFromStorage());

  useEffect(() => {
    dispatch(addAnimalsFromStorage());
  }, []);

  const animals = useSelector((state: RootState) => state.animals.animals);
  const [animal, setAnimal] = useState(animalState);

  return (
    <div>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(addNewAnimal({ ...animal, id: animals.length }));
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
          <button>Submit</button>
        </form>
        <DisplayAnimal />
        {/*<button aria-label="Add animal" className="btn btn-primary" onClick={() => dispatch(addNewAnimal())}>*/}
        {/*  Add*/}
        {/*</button>*/}
        {/*<button aria-label="Delete animal" className="btn btn-warning" onClick={() => dispatch(deleteAnimal())}>*/}
        {/*  Delete*/}
        {/*</button>*/}
      </div>
    </div>
  );
}

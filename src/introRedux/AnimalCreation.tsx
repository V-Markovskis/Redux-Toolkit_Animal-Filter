import type { RootState } from './store.tsx';
import { useSelector, useDispatch } from 'react-redux';
import { addNewAnimal, animalState } from './counterSlice.tsx';
import { useState } from 'react';

export function AnimalCreation() {
  const animals = useSelector((state: RootState) => state.animals);
  const dispatch = useDispatch();

  const [animal, setAnimal] = useState(animalState);

  return (
    <div>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(addNewAnimal(animal));
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
              // const test = { ...animals, animalName: e.target.value };
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

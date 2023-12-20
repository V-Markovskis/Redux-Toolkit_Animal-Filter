import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../introRedux/store.tsx';
import { deleteAnimal } from '../introRedux/animalSlice.tsx';

const DisplayAnimal = () => {
  const animals = useSelector((state: RootState) => state.animals.animals);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        {animals.map((animal, key) => {
          return (
            <div key={key}>
              <br />
              <br />
              <span>Animal: {animal.id}</span>
              <div>{animal.animalName}</div>
              <div>{animal.imageUrl}</div>
              <button
                onClick={() => {
                  dispatch(deleteAnimal(animal));
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DisplayAnimal;

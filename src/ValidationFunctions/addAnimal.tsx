import { animalSlice, AnimalSchema, Animal } from '../Slices/animalSlice.tsx';
import { AppDispatch } from '../Store/store.tsx';

export const addAnimal = (dispatch: AppDispatch, animal: Animal, animalId: number) => {
  const result = AnimalSchema.safeParse(animal);
  if (result.success) {
    result.data.id = animalId;
    console.log('result.data', result.data);
    dispatch(animalSlice.actions.resetAnimalError());
    dispatch(animalSlice.actions.addNewAnimal(result.data));
  } else {
    dispatch(animalSlice.actions.failAnimalAdd(result.error));
  }
};

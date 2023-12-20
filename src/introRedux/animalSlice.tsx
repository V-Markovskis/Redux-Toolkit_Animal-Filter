import { createSlice } from '@reduxjs/toolkit';

export interface Animal {
  id: number;
  imageUrl: string;
  animalName: string;
}

export const animalState: Animal = {
  id: 0,
  imageUrl: '',
  animalName: '',
};

export interface AnimalState {
  animals: Animal[];
}

export const initialState: AnimalState = {
  animals: [],
};

export const animalSlice = createSlice({
  name: 'animals',
  initialState,
  reducers: {
    addNewAnimal: (state, action) => {
      //https://stackoverflow.com/questions/75812968/redux-toolkit-1-9-3-and-property-push-does-not-exist-on-type-writabledraftc
      console.log('action.payload', action.payload);
      state.animals.push(action.payload);
      console.log('animals current ID: ', action.payload.id);

      const animals = JSON.parse(localStorage.getItem('animals') || '[]');
      animals.push(action.payload);

      localStorage.setItem('animals', JSON.stringify(animals));
    },
    deleteAnimal: (state, action) => {
      state.animals = state.animals.filter((animal) => action.payload.id !== animal.id);
      localStorage.removeItem(action.payload.id);
    },
    addAnimalsFromStorage: (state) => {
      state.animals = JSON.parse(localStorage.getItem('animals') || '[]');
    },
  },
});

// Action creators are generated for each case reducer function
export const { addNewAnimal, deleteAnimal, addAnimalsFromStorage } = animalSlice.actions;

export default animalSlice.reducer;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Animal {
  imageUrl: string;
  animalName: string;
}

export const animalState: Animal = {
  imageUrl: '',
  animalName: '',
};

export interface AnimalState {
  animals: Animal[];
}

export const initialState: AnimalState = {
  animals: [],
};

export const counterSlice = createSlice({
  name: 'animals',
  initialState,
  reducers: {
    addNewAnimal: (state, action: PayloadAction<Animal>) => {
      //https://stackoverflow.com/questions/75812968/redux-toolkit-1-9-3-and-property-push-does-not-exist-on-type-writabledraftc
      state.animals.push(action.payload);
      localStorage.setItem(action.payload.animalName.toLowerCase(), JSON.stringify(action.payload));
    },
    deleteAnimal: (state) => {
      // localStorage.removeItem(state.animalName);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addNewAnimal, deleteAnimal } = counterSlice.actions;

export default counterSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import { z } from 'zod';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AnimalSchema = z.object({
  id: z.number(),
  imageUrl: z.string().url(),
  animalName: z.string(),
});

export type Animal = z.infer<typeof AnimalSchema>;

export const animalState: Animal = {
  id: 1,
  imageUrl: '',
  animalName: '',
};

export interface AnimalState {
  animals: Animal[];
  hasError: boolean;
  errorMessage: string;
}

export const initialState: AnimalState = {
  animals: [],
  hasError: false,
  errorMessage: '',
};

export const animalSlice = createSlice({
  name: 'animals',
  initialState,
  reducers: {
    resetAnimalError: (state) => {
      state.hasError = false;
      state.errorMessage = '';
    },
    failAnimalAdd: (state, action) => {
      state.errorMessage = action.payload;
      state.hasError = true;
      toast.error('Incorrect data passed');
    },
    addNewAnimal: (state, action) => {
      //https://stackoverflow.com/questions/75812968/redux-toolkit-1-9-3-and-property-push-does-not-exist-on-type-writabledraftc
      state.animals.push(action.payload);

      const animals = JSON.parse(localStorage.getItem('animals') || '[]');
      animals.push(action.payload);

      localStorage.setItem('animals', JSON.stringify(animals));
      toast.success('Success');
    },
    deleteAnimal: (state, action) => {
      state.animals = state.animals.filter((animal) => action.payload.id !== animal.id);
      //https://stackoverflow.com/questions/38748298/remove-array-item-from-localstorage
      localStorage.setItem('animals', JSON.stringify(state.animals));
    },
    addAnimalsFromStorage: (state) => {
      state.animals = JSON.parse(localStorage.getItem('animals') || '[]');
      if (state.animals.length === 0) {
        toast.warn('No data found in localStorage');
      }
    },
    editAnimal: (state, action) => {
      console.log('edit payload', action.payload);
      const findAnimalToUpdate = state.animals.find((animal) => animal.id === action.payload.id);
      if (findAnimalToUpdate) {
        findAnimalToUpdate.animalName = action.payload.animalName;
        findAnimalToUpdate.imageUrl = action.payload.imageUrl;
      }
      localStorage.setItem('animals', JSON.stringify(state.animals));
    },
  },
});

// Action creators are generated for each case reducer function
export const { addNewAnimal, deleteAnimal, addAnimalsFromStorage, editAnimal } = animalSlice.actions;

export default animalSlice.reducer;

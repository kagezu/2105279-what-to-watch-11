// Библиотеки
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Типы
import { GENRE_ALL, FilmData, CommentData } from '../types/film';
import { FilmsData } from '../types/store';

// Константы
import { ViewCardCount } from '../const';
import { NameSpace } from '../const';

const initialState: FilmsData = {
  genre: GENRE_ALL,
  films: [],
  film: null,
  comments: [],
  viewCardCount: ViewCardCount.Init,
  error: null,
};

export const filmsData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    selectGenre:
      (state, action: PayloadAction<string>) => {
        state.genre = action.payload;
      },
    addViewCardCount:
      (state) => {
        state.viewCardCount = state.viewCardCount + ViewCardCount.Step;
      },
    setViewCardCount:
      (state, action: PayloadAction<number>) => {
        state.viewCardCount = action.payload;
      },
    loadFilmList:
      (state, action: PayloadAction<FilmData[]>) => {
        state.films = action.payload;
      },
    loadFilm:
      (state, action: PayloadAction<FilmData>) => {
        state.film = action.payload;
      },
    loadFilmComments:
      (state, action: PayloadAction<CommentData[]>) => {
        state.comments = action.payload;
      },
    setError:
      (state, action: PayloadAction<string | null>) => {
        state.error = action.payload;
      }
  }
});

export const {
  selectGenre,
  addViewCardCount,
  setViewCardCount,
  setError,
  loadFilmList,
  loadFilm,
  loadFilmComments
} = filmsData.actions;

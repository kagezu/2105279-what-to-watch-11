export type FilmData = {
  id: number;
  name: string;
  posterImage: string;
  previewImage: string;
  backgroundImage: string;
  backgroundColor: string;
  videoLink: string;
  previewVideoLink: string;
  description: string;
  rating: number;
  scoresCount: number;
  director: string;
  starring: string[];
  runTime: number;
  genre: string;
  released: number;
  isFavorite: boolean;
};

export type CommentData = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: {
    id: number;
    name: string;
  };
};

export type MainProps = {
  films: FilmData[];
};

export enum TabsName {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews',
}

export enum Genre {
  'All' = 'All genres',
  'Comedy' = 'Comedies',
  'Crime' = 'Crime',
  'Documentary' = 'Documentary',
  'Drama' = 'Dramas',
  'Horror' = 'Horror',
  'Kids' = 'Kids & Family',
  'Family' = 'Kids & Family',
  'Romance' = 'Romance',
  'Sci-Fi' = 'Sci-Fi',
  'Thrillers' = 'Thrillers',
}

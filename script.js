"use strict";

const numberOfFilms = +prompt("Скільки фільмів Ви переглянули?", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt("Один із останніх переглянутих фільмів?", ""),
  b = prompt("Як ви оцінюєте його", ""),
  c = prompt("Один із останніх переглянутих фільмів?", ""),
  d = prompt('"Один із останніх переглянутих фільмів?", ""');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);

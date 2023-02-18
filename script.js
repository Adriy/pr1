const numberOfFilms = +prompt("Скільки фільмів ти уже переглянув", "");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt("Один із останніх переглянутих фільмів");
const b = prompt("На скільки Ви його оцінюєте");
const c = prompt("Один із останніх переглянутих фільмів");
const d = prompt("На скільки Ви його оцінюєте");
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);

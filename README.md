# movies-explorer-api

## Overview

This repo builds a backend part of the diploma project for a [Yandex Practicum](https://practicum.yandex.ru/) web development course.

## API Built with:

- NodeJS
- Express
- MongoDB
- Middleware / Helpers:
  - celebrate/Joi validation
  - jwt
  - bcrypt
  - cors
  - helmet
  - rate-limiter

## Locations:
- IP: 158.160.100.240
- Frontend: promovies.nomoredomains.work
- Backend: api.promovies.nomoredomains.work


### For testing purposes:
Backend movie API accepts following movie object with **required** fields. So here is one to use.
```json
{
  "country": "United States",
  "director": "James Wan",
  "duration": 103,
  "year": "2004",
  "description": "Two strangers awaken in a room with no recollection of how they got there, and soon discover they're pawns in a deadly game perpetrated by a notorious serial killer",
  "image": "https://m.media-amazon.com/images/M/MV5BM2M1MzI1MWYtYmM2ZC00OWY3LTk0ZGMtNmRkNzU1NzEzMWE5XkEyXkFqcGdeQXVyODUwOTkwODk@.jpg",
  "trailerLink": "https://youtu.be/S-1QgOMQ-ls",
  "thumbnail": "https://m.media-amazon.com/images/M/MV5BM2M1MzI1MWYtYmM2ZC00OWY3LTk0ZGMtNmRkNzU1NzEzMWE5XkEyXkFqcGdeQXVyODUwOTkwODk@.jpg",
  "movieId": 123,
  "nameRU": "Пила",
  "nameEN": "Saw"
}
```
```json
{
    "email": "test@mail.com",
    "password": "123123123",
    "name": "Testerman"
}
```

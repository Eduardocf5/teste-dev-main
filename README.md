<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

<p align="center"><a href="https://reactjs.org" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" width="200" alt="React Logo"></a></p>
<p align="center">
  <a href="https://github.com/facebook/react/actions"><img src="https://github.com/facebook/react/workflows/CI/badge.svg" alt="Build Status"></a>
  <a href="https://www.npmjs.com/package/react"><img src="https://img.shields.io/npm/dt/react" alt="Total Downloads"></a>
  <a href="https://www.npmjs.com/package/react"><img src="https://img.shields.io/npm/v/react" alt="Latest Stable Version"></a>
  <a href="https://github.com/facebook/react/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/react" alt="License"></a>
</p>

## BACK-END

## Rick and Morty API

[Run in Postman](https://www.postman.com/webzow/rick-and-morty-api/request/tughxhj/show-character)

## Install

* Copy env.example to .env
* Modify your database settings in .env

```bash
composer install
php artisan key:generate
php artisan migrate
php artisan rickandmorty:fetch
php artisan test
php artisan storage:link
php artisan server
```

## Routes

```bash
/v1/characters
/v1/characters?name=Rick&status=Alive&gender=Male&species=Human
/v1/characters/{id}
```

## Resources

- [Laravel](https://laravel.com)
- [Rick and Morty API](https://rickandmortyapi.com)
- [Rick And Morty PHP API](https://github.com/nickbeen/rick-and-morty-api-php)


## FRONT-END

Run de following two lines:

### `npm install`
### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


Launches the test runner in the interactive watch mode.
### `npm test`

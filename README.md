# Изучение Node.js

## Модули

Подключаются модули так:
```
var module = require('имя_файла')
```
 
Встроенный модуль имеет приоритет над нашим модулем, поэтому названия должны быть уникальными.

Переменные в модулях локальные. Можно поместить переменные и функции в глобальные, но это не рекомендуется.

Чтобы функцинал модуля был доступен извне, необходимо поместить его в объект exports.

Можно распечатать свойства модуля: `console.log(module);`

Модули будут искаться по имени файла, либо в одноименной папке в файлах index.js, package.json, либо в папке node_modules.
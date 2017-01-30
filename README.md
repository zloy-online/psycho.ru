# psycho.ru v5
## Составляющие
- [бэкенд](backend);
- [база данных](backend/models);
- [фронтенд](frontend);
- [компилириуемый(Sass/TS) фронэтнд](src/frontend).

Для сборки проекта используется Gulp 3.9, [конфигурация](gulpfile.js).  
Результаты работы сохраняются в папку `build/debug` и `build/release` в зависимости от типа сборки. 

## Развертывание для разработки
1. После скачивания в корневой папке дистрибутива `npm install`.
2. Для сборки debug-версии `gulp build`.
3. Для запуска livereload http-сервера на порту 8205 `gulp run`.
4. По умолчанию для работы используется тестовая БД dev.psycho.ru ([параметры](config.json)).

## Релизный билд
Отличается от отладочного:  
- скачиванием пакетов, необходимых для запуска проекта;
- созданием бандлов `css` и `js`, а также минификацией `css`, `js` и `html`.

Для сборки релизного билда необходимо установить значение `production` переменной окружения `NODE_ENV` [любым удобным способом](https://www.google.ru/search?q=set+node_env+production) и выполнить `gulp build`.  
После этого директорию `build/release` можно считать корнем Node.js приложения для размещения сайта на нужном сервере.

## [Развертывание на Debian 8](server_setup.md)

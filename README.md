# Drone Cafe

Система автоматизации ресторана, в котором вместо официантов используются автономные дроны, а заказ размещается через веб-приложение.

## Особенности системы

* Сервер реализован на Node.js с использованием Express.js
* Взаимодействие клиента и сервера в реальном времени реализовано с использованием Socket.io и REST API
* Интерфейс системы построен на фреймворке AngularJS
* Для хранения блюд, заказов и их состояний используется база данных MongoDB
* В качестве CSS фреймворка используется Materialyze
* Ключевые части системы покрыты тестами

## Запуск приложения

1. npm start
2. Customer application - [http://localhost:3000/#!/](http://localhost:3000/#!/)
3. Kitchen application - [http://localhost:3000/#!/kitchen](http://localhost:3000/#!/kitchen)

## Heroku демо

1. Customer application - [https://drone-cafe-20180608.herokuapp.com/#!/](https://drone-cafe-20180608.herokuapp.com/#!/)
2. Kitchen application - [https://drone-cafe-20180608.herokuapp.com/#!/kitchen](https://drone-cafe-20180608.herokuapp.com/#!/kitchen)

## Запуск Тестов

1. npm run test-api - Запуск юнит тестов REST API сервера (Mocha, Chai, Supertest)
2. npm test - Запуск юнит тестов AngularJS приложения (Karma, Chai)
3. npm run protractor - Запуск приемочных тестов AngularJS приложения (Jasmine, Protractor)

## Архитектура проекта

```
server/                             - REST API server
  controllers/
    dish.js
    order.js
    user.js
  etc/
    menu.json
  models/
    dish.js
    order.js
    user.js
  routes/
    dish.js
    order.js
    user.js
  config.json                                                  
node_modules/                    
public/                             - AngularJS application
  assets/                        
  bower_components/              
  src/                           
    Customer/               
      Customer.html         
      CustomerCtrl.js       
      CustomerService.js
      CustomerCtrl_test.js
    Kitchen/
      Kitchen.html
      KitchenCtrl.js
      KitchenService.js
      KitchenCtrl_test.js
    app.js
    styles.css
  index.html    
test/                               - e2e and unit tests
  e2e/
    protractor.conf.js
    scenarios.js
  restapi.test.js
.bowerrc
.gitignore
bower.json   
index.js       
karma.conf.js             
protractor.conf.js               
package.json
.Procfile           
README.md
```

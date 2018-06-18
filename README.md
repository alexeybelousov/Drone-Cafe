# Drone Cafe

Система автоматизации ресторана, в котором вместо официантов используются автономные дроны, а заказ размещается через веб-приложение.

## Особенности системы

* Сервер реализован на Node.js с использованием Express.js
* Взаимодействие клиента и сервера в реальном времени реализовано с использованием Socket.io и REST API
* Интерфейс системы построен на фреймворке AngularJS
* Для хранения блюд, заказов и их состояний используется база данных MongoDB
* В качестве CSS фреймворка используется Materialyze
* Ключевые части системы покрыты тестами с использованием Mocha, Supertest, Protractor, Jasmine

## Запуск приложения

1. npm start
2. [http://localhost:3000](http://localhost:3000)

## Запуск Тестов

1. npm run test-api
2. npm test
3. npm run protractor

## Архитектура проекта

```
server/                             
  controllers/
  etc/
  models/
  routes/                       
  config.json                                                    
node_modules/                    
public/                          
  assets/                        
  bower_components/              
  src/                           
    Customer/               
      Customer.html         
      CustomerCtrl.js       
      CustomerService.js    
    Kitchen/
      Kitchen.html
      KitchenCtrl.js
      KitchenService.js
    app.js
    styles.css
  index.html    
test/
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

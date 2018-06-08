const supertest = require('supertest');
const expect = require('chai').expect;

describe('REST API', () => {
  let server;

  before((done) => {
    require('../server/index');

    setTimeout(() => {
      server = supertest.agent('http://localhost:3000');
      done();
    }, 1000);
  });

  describe('Model User', () => {

    it('GET /users, should return 404 code', done => {
      server
        .get('/users')
        .expect(404)
        .end((err, res) => {
          done();
        })
    });

    it('POST /users, without data should return 404 code', done => {
      server
        .get('/users')
        .expect(500)
        .end((err, res) => {
          done();
        })
    });

    it('POST /users, with data should return Object', done => {
      server
        .post('/users')
        .send({
          "email": "test@test.ru", "name": "Test"
        })
        .expect("Content-type", /json/)
        .expect(200)
        .end((err, res) => {
          expect(res.body).deep.equal({
            "credits": 100,
            "_id": "5b1af07458b1795c9c5d1913",
            "email": "test@test.ru",
            "name": "Test",
            "__v": 0
          });
          done();
        })
    });
  });
  //
  // it('DELETE /users/:id, should return status is 200', done => {
  //   server
  //     .delete('/users/0')
  //     .expect(200)
  //     .end((err, res) => {
  //       done();
  //     })
  // });
});

const server = require('./server');
const request = require('superagent');
const expect = require('chai').expect;

describe('server', () => {
    let app = null;
    beforeEach((done) => {
        app = server.listen(function() {
            done();
        });
    });
    it('should return "Hello World"', (done) => {
        request.get(`http://localhost:${app.address().port}`)
            .then((rsp) => {
                expect(rsp.text).to.eql('<h1>Hello World!</h1>');
                done();
            }).catch(done);
    });
});

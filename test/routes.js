define([
  'request',
  'app',
], function(request,app) {
  describe('GET /', function() {
    it('should return 200 OK', function(done) {
      request(app)
        .get('/')
        .expect(200, done);
    });
  });
});

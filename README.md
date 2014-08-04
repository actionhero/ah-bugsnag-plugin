## notes
- be sure to enable the plugin within actionhero (`config/api.js`)
- you will need to add the bugsnag package (`npm install bugsnag --save`) to your package.json

You can add a deployment drunt task to clear the previous deploy's errors.  Note that there are [deployment tracking options](https://github.com/watson/bugsnag-node#deployment-tracking) you can pass to `trackDeployment`.
```javascript
grunt.registerTask('notifybugsnagDeploy','tell bugsnag we deployed',function(message){
  var done = this.async()
  init(function(api){
    api.bugsnag.client.trackDeployment(function(){
      done();
    });
  });
});
```

exports.bugsnag = function(api, next){  

  api.bugsnag = {
    client: require("bugsnag"),
  }

  api.bugsnag.client.register(api.config.bugsnag.apiKey, api.config.bugsnag.options);

  api.bugsnag.notifier = function(err, type, name, objects, severity){
    var relevantObjects = objects;
    if(type == 'action'){
      var relevantDetails = ['action', 'remoteIP', 'type', 'params', 'room'];
      relevantObjects.connection = {};
      relevantDetails.forEach(function(key){
        relevantObjects.connection[key] = objects.connection[key];
      });
    }

    api.bugsnag.client.notify(err, {
      errorName: name,
      groupingHash: name,
      type: type, 
      objects: objects
    });
  }

  api.bugsnag._start = function(api, next){
    if(api.env != 'test'){
      api.exceptionHandlers.reporters.push(api.bugsnag.notifier);
    }
    next();
  };

  api.bugsnag._stop =  function(api, next){
    next();
  };

  next();
}
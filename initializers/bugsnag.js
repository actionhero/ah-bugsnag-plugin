exports.bugsnag = function(api, next){  

  api.bugsnag = {
    client: require("bugsnag"),
  }

  api.bugsnag.client.register(api.config.bugsnag.apiKey, api.config.bugsnag.options);

  api.bugsnag.notifier = function(type, err, extraMessages, severity){
    api.bugsnag.client.notify(err, {
      groupingHash: extraMessages[0],
      type: type, 
      extraMessages: extraMessages
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
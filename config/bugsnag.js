exports.default = {
  bugsnag: function(api){
    return {
      apiKey: 'XXX',
      options: {
        useSSL: true,
        releaseStage: api.env,
        notifyReleaseStages: ['production', 'staging'],
      },
    }
  }
}

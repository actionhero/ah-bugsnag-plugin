exports.default = {
  bugsnag: function(api){
    return {
      apiKey: 'XXX',
      options: {
        useSSL: true,
        notifyReleaseStages: ['production', 'staging'],
      },
    }
  }
}

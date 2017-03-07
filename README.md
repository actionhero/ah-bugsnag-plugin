## Installation

[![Greenkeeper badge](https://badges.greenkeeper.io/actionhero/ah-bugsnag-plugin.svg)](https://greenkeeper.io/)

1) Install bugsnag and the plugin:
```
npm install bugsnag --save
npm install ah-bugsnag-plugin --save
```

2) Link with ActionHero
```
npm run actionhero link -- --name ah-bugsnag-plugin
```

3) Configure 

Configuration is found at ```/config/bugsnag.js```

## Configuration
* apiKey: API key provided by BugSnag (find in project settings)
* useSSL: (default is true) should SSL be used
* releaseStage: current release stage
* notifyReleaseStages: which stages we should notify on

## Deployment tracking

There is no deployment tracking at this time

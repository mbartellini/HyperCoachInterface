# Hyper Coach Interface - your online coach

## Requirements
To run the tests you should first install the project requirements.
- <a href="https://docs.npmjs.com/">npm >= 7.24.1</a>
- <a href="https://nodejs.org/en/">nodejs >= 16.11.1</a>

If you do not have this installed, you can do so by running the following commands.

```bash
sudo apt-get update
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo apt-get install npm
npm install -g npm
```

For Windows installation you can follow the [Node documentation](https://nodejs.org/en/download/package-manager/) and [npm Documentation](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

## Setting up the API url

Go to the _**src/api/api.js**_ and set up the baseUrl to your API's server url.

Once that is done you could use our own mailing.js template file.

## Project setup
```bash
npm install
```

The server port is set in _**vue.config.js**_ you can change it to which ever you will use. The default is `9090`.

### Compiles and hot-reloads for development
```bash
npm run serve
```

### Compiles and minifies for production
```bash
npm run build
```

### Lints and fixes files
```bash
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


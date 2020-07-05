# f1monkey

## Project setup
* Install dependencies
```
npm install
```
## Development
* Copy `docker-compose.override.yml.dist` to `docker-compose.override.yml`
```
cp docker-compose.override.yml.dist docker-compose.override.yml
```
* Run docker containers
```
docker-compose up -d

```
## Useful commands
### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

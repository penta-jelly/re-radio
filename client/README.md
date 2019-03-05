# Re Radio Client

Client project for re-radio

## Development

- Make sure you have `Docker` up and running
- Run `npm install`
- Run `npm run docker-compose:up`
- Run `npm run generate` to generate typescript types, **make sure server is running first**.
- Navigate to [http://localhost:3000](http://localhost:3000)
- To stop docker, run `npm run docker-compose:stop`

## Note

- All `.graphql` files must go `src/graphql`
- Files `src/graphql/index.tsx` and `schema.json` will be auto generated, **please don't modify them**!

## Build and deploy

- Run `docker-compose:deploy` to deploy the project to docker.

## Recommended Extensions

- [Apollo GraphQL](https://marketplace.visualstudio.com/items?itemName=apollographql.vscode-apollo): This provides auto complete for `.graphql` files, see `apollo.config.js` for more detail.

## License

MIT

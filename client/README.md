# Re Radio Client

Client project for re-radio

## Development

- Make sure you have `Docker` up and running
- Run `npm ci`
- Run `npm run docker-compose:up`
- Run `npm run generate` to generate typescript types, **make sure server is running first**.
- Navigate to [http://localhost:3000](http://localhost:3000) for the website.
- To stop docker, run `npm run docker-compose:stop`

## Storybook

- Storybook lives at [http://localhost:4000](http://localhost:4000), this is the places for all customized components.

## Note

- All `.graphql` files must go `src/graphql`
- Files `src/graphql/index.tsx` and `schema.json` will be auto generated, **please don't modify them**!

## Build and deploy

- Run `docker-compose:deploy` to deploy the project to docker.

## Translation

- Currently we support English and Vietnamese
- Please take a look at `src/translates` for resource files
- Example file is `src/pages/register.tsx`

## Recommended Extensions

- [Apollo GraphQL](https://marketplace.visualstudio.com/items?itemName=apollographql.vscode-apollo): This provides auto complete for `.graphql` files, see `apollo.config.js` for more detail.

## License

MIT

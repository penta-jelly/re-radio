# Re Radio Client

Client project for re-radio

## Development

- Run `npm ci`
- Run `npm run generate` to generate typescript types, **make sure server is running first**.
- Navigate to [http://localhost:3000](http://localhost:3000) for the website.

## Note

- All `.graphql` files must go `src/operations`
- Files `src/operations/index.tsx` will be auto generated, **please don't modify them**!

## Translation

- Currently we support English and Vietnamese
- Please take a look at `src/translates` for resource files
- Example file is `src/pages/register.tsx`

## Recommended Extensions

- [Apollo GraphQL](https://marketplace.visualstudio.com/items?itemName=apollographql.vscode-apollo): This provides auto complete for `.graphql` files, see `apollo.config.js` for more detail.

## License

MIT

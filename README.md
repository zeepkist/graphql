# GTR & Zworpshop GraphQL Clients

Fully typed TypeScript GraphQL clients for the [GTR] and [Zworpshop] APIs for Zeepkist.

Download the GTR mod for Zeepkist in [Modkist] (Zeepkist's Mod Loader) or on [mod.io]

Please note that as this is an ever green package that automatically updates types when it detects the GTR or Zworpshop schemas change, breaking changes may occur in minor releases.

## Usage

### CDN

```html
<script type="module">
  import { gtr, zworpshop } from 'https://esm.run/@zeepkist/graphql'

  const gtrResponse = await gtr.query({
	...
  })

  const zworpshopResponse = await zworpshop.query({
	...
  })
</script>
```

### Deno

```js
import { gtr, zworpshop } from 'https://esm.run/@zeepkist/graphql'

const gtrResponse = await gtr.query({
...
})

const zworpshopResponse = await zworpshop.query({
...
})
```

### Node / Bundlers

#### Install dependencies

```sh
yarn add @zeepkist/graphql

# or with npm:
npm install @zeepkist/graphql
```

#### Import and use

```ts
import { gtr, zworpshop } from '@zeepkist/graphql'

const gtrResponse = await gtr.query({
...
})

const zworpshopResponse = await zworpshop.query({
...
})
```

#### Enums

Enums can be imported from the specific service you are using, for example:

```ts
import { gtr } from '@zeepkist/graphql'
import { enumPlayerPointsOrderBy } from '@zeepkist/graphql/gtr'

const response = await gtr.query({
  allPlayerPoints: {
    __args: {
      orderBy: [enumPlayerPointsOrderBy.POINTS_DESC]
    }
  }
})
```

## Documentation

To see all available exports and options, see the [package documentation](https://zeepkist.github.io/graphql).

## Contributing

You will either need Node.js' CorePack enabled or an installation of pnpm to run this package locally. CorePack is recommended as it will automatically keep you updated with pnpm version the repository is using.

### Install development dependencies

```sh
pnpm i
```

### Type-Check, Compile and Minify for Production

```sh
pnpm build
```

### Run tests

```sh
pnpm test
```

### Run tests with code coverage

```sh
pnpm coverage
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint
```

### Update schemas with the latest versions

```sh
pnpm generate
```

[GTR]:https://graphql.zeepkist-gtr.com/graphiql
[Zworpshop]:https://graphql.zworpshop.com/graphqiql
[Modkist]:https://zeepkist.fandom.com/wiki/Modkist_(Mod_Manager)
[mod.io]:https://zeepkist.mod.io/zeepkist-gtr

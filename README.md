# Iblis React Native Undraw

_**React Native component library for undraw.co (1027 illustrations)**_

[![NPM version](https://badge.fury.io/js/iblis-react-native-undraw.svg)](https://www.npmjs.com/package/iblis-react-native-undraw)

You can find all undraw illustrations here: [Undraw.co](https://undraw.co/illustrations)

## Why

Undraw is wonderful and you can use the illustrations published on unDraw for personal and commercial projects, without the need to include attribution.
I always think my projects looks more professional and funnier with illustrations. As we say a picture is worth a thousand words.

I didn't find any React native library with Undraw and `react-native-svg`

For this project I want the following requirements :

- Written in pure Typescript
- Have up-to-date illustrations
- Compile with esNext (I don't want have all the svg in my final bundle when I use only one illustration)
- Can customize the main colors

## Documentation and Basic Usage

All props can be found here

- [Properties](https://github.com/vdelacou/iblis-react-native-undraw/blob/master/src/iblis_react_native_undraw_props/index.ts)

Basic Usage

```jsx
import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { Svg3DModeling } from 'iblis-react-native-undraw';

export const BasicUsage: FC = () => {
  return (
    <View style={styles.container}>
      <Svg3DModeling />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```

You can extend all the properties of `SvgProps` from `react-native-svg`

By default the height of the components is 200 and the width will be set to '100%'

## Install

Install the library and the dependencies to your React project

`npm install iblis-react-native-undraw`

With expo:

`expo install react-native-svg`

Without expo follow the [react-native-svg installation instructions](https://github.com/react-native-community/react-native-svg).

## Test

You can launch test by running `npm run test`

## To rebuild the project and update with the new undraw design

First download all new svg

```
cd scripts/scrap_website/
npm install
node index.js
```

Then generate the typescript components

```
cd ../generate_components/
npx @svgr/cli --config-file .svgrrc.js --native --ext tsx --out-dir ../../src/components ../scrap_website/undraw
```

Then add the new components in `src/index.ts`

Build the library

`npm run tsc`

or

```
export NODE_OPTIONS=--max_old_space_size=4096
npm run build
```

## Contribute

1.  [Fork](https://help.github.com/articles/fork-a-repo/) this repository to your own GitHub account and then [clone](https://help.github.com/articles/cloning-a-repository/) it to your local device
2.  Make the necessary changes and ensure that the tests are passing
3.  Send a pull request

## Todo

- Write more tests with jest

## Known issues

- None for the moment

## Thanks

- [Undraw.co](https://undraw.co) for the fantastic work and the keep going illustrations. It's just amazing!

## License

Please, refer to [LICENSE](https://github.com/vdelacou/iblis-react-native-undraw/blob/master/LICENSE) file

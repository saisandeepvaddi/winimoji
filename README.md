# Winimoji

## Emoji picker for Windows

Search :point_right: Click :point_right: Paste Anywhere :sunglasses:

Download from [here](https://saisandeepvaddi.github.io/winimoji/)

## Demo

![demo](demo)

## For Developers

### Set Up

- Have NodeJS, Electron, and Webpack installed

- Install npm dependencies
  ```shell
    $> yarn install

    (or)

    $> npm install
  ```


- (Optional) Update [unicodes.js](/renderer/actions/unicodes.js) file if any there are new emoji unicodes at [unicode.org](1)

- **_Only_** if you updated [unicodes.js](/renderer/actions/unicodes.js) in above step, run the following command. 
  ```shell
   $> npm run make-unicodes
  ```

- Keep webpack running in one terminal

  ```shell
   $> webpack
  ```

- Start the application from Command Prompt from the project direcory

  ```shell
   $> electron .
  ```

### Build

- Builds are made using [electron-builder](2)

- Make sure you comment the electron-reload line in [main.js](/main.js)

  ```js
    require("electron-reload")(__dirname);
  ```

- To generate only a package directory

  ```shell
   $> npm run pack
  ```

- To generate a distributable package

  ```shell
   $> npm run dist
  ```


## License

[MIT](/LICENSE) 


[1]: http://unicode.org/emoji/charts/full-emoji-list.html
[2]: https://www.npmjs.com/package/electron-builder
[demo]: https://saisandeepvaddi.github.io/winimoji/img/demo.gif
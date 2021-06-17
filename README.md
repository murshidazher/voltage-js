# [voltage.js](https://github.com/murshidazher/voltage.js) [![npm](https://img.shields.io/npm/v/voltage.js.svg?label=&color=0080FF)](https://github.com/murshidazher/voltage.js/releases/latest)

[![travisci](https://img.shields.io/travis/com/murshidazher/voltage.js.svg?branch=main&style=flat-square)](https://travis-ci.com/)
[![codecov](https://img.shields.io/codecov/c/gh/murshidazher/voltage.js/main?logo=codecov&style=flat-square&token=XV6FDAFTM0)](https://codecov.io/gh/murshidazher/voltage.js)
![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)

> A library for websites to detect user's connection status. Certified Lit 🔥🔥 **Accepting PRs**

- A simple JavaScript library to provide a functionality for websites to detect online / offline connection status.

## Table of Contents

- [Table of Contents](#table-of-contents)
  - [Installing / Getting started](#installing--getting-started)
  - [Usage](#usage)
  - [Contributors](#contributors)
  - [License](#license)

## Installing / Getting started

A quick introduction of the minimal setup you need to get a up & running.

```shell
$ npm install voltage.js
```

## Usage

Here's a brief intro about what a developer must do in order to start developing the project further:

### Manually

- Download the latest distribution from [github release](https://github.com/murshidazher/voltage.js/releases/latest).
- Add `voltage.min.css` and `voltage.min.js` to your html page.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Voltage.JS Example</title>
    <link rel="stylesheet" href="voltage.min.css" />
  </head>
  <body>
    <div>Turn off your network to experience voltage.</div>

    <script src="voltage.min.js"></script>
  </body>
</html>
```

### Using `npm`

> An example implementation using react could be found [here](./example).

- Add the latest npm package to the project.
- Import `voltage.css` and `voltage.js` to your frontend.

```js
import 'voltage.js/dist/css/voltage.css';
import 'voltage.js/dist/js/voltage.js';
```

## Contributors

[![contributors](https://contrib.rocks/image?repo=murshidazher/voltage.js)](https://github.com/murshidazher/voltage.js/graphs/contributors)

## License

[MIT](https://github.com/murshidazher/voltage.js/blob/master/LICENSE) © Murshid Azher.

# angular-string-interpolation

**NOTE:** This is not ready for production use.


TODO: Add quick demo here with images or gif.


_[Comments and Pull Requests welcome!][issues]_


## Contents

- [Installation](#installation)
- [Dependencies](#dependencies)
- [Usage](#usage)
- [Development](#development)



## Installation

#### NPM
```bash
npm install angular-string-interpolation --save
```

#### Bower
```bash
bower install angular-string-interpolation --save
```

## Dependencies

- Angular.js (~1.4.0)


## Usage


```html
<bc-interpolate
  bc-string="Two incredibly useful libraries are {{0}} and {{1}}."
  bc-array="['lodash', 'moment']"
></bc-interpolate>

<!-- Output:
  Two incredibly useful libraries are lodash and moment.
-->
```



## Development

- `npm run build` - Build JS/CSS/HTML/SVG
- `npm run build:js` - Build JS
- `npm run build:css` - Build CSS
- `npm run watch:css` - Watch CSS and rebuild on change
- `npm run watch:js` - Watch JS/HTML and rebuild on change
- `npm run watch` - Watch JS/CSS/HTML and rebuild on change




[issues]: https://github.com/benjamincharity/angular-string-interpolation/issues


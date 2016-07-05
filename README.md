# angular-string-interpolation

**NOTE:** Full documentation coming soon!


- TODO: Add quick demo here with images or gif.
- TODO: Add 'why'. (missing functionality from ES6 string literals)


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
  bc-string="Who is ${0} without ${1}?"
  bc-array="['Statler', 'Waldorf']"
></bc-interpolate>

<!-- Output:
  Who is Statler without Waldorf?
-->
```



## Development

- `npm run build` - Build JS/CSS/HTML/SVG
- `npm run build:js` - Build JS
- `npm run watch:js` - Watch JS/HTML and rebuild on change
- `npm run watch` - Watch JS/HTML and rebuild on change




[issues]: https://github.com/benjamincharity/angular-string-interpolation/issues
[demo_simple]: http://plnkr.co/edit/xo9I6K?p=preview


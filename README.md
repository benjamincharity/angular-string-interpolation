# angular-string-interpolation

[![MIT License][license_image]][license_url] [![NPM version][npm_version_image]][npm_url]

`inˈtərpəˌlāt/ - verb: insert (something) between fixed points`

This module was created to help developers create a separation between the text for a project and
the actual project code. Currently you can easily abstract static text out into a constant or
configuration file, but if that abstracted string needs any dynamic information you will be forced
to split the copy up into many smaller parts or leave the copy directly in the DOM.

This module allows you to keep marketing or interface copy out of the DOM while still allowing you
to use dynamic data.

> [:tv: **All Demos**][demo_collection]

_[Comments and Pull Requests welcome!][issues]_


## Contents

- [Installation](#installation)
- [Dependencies](#dependencies)
- [How Replacement Works](#howreplacementworks)
- [Usage](#usage)
- [Directive](#directive)
  - [`bc-string`](#bc-string)
  - [`bc-array`](#bc-array)
- [Service](#service)
- [Filter](#filter)
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

#### Manual
```html
<script src="path/to/directory/dist/angular-string-interpolation.js"></script>
```

## Dependencies

- Angular.js (~1.4.0)


### How Replacement Works

This module uses the same basic format as [ES6 template strings][template_strings]: `${0}`. Rather
than naming the custom variables as you would with template strings, these placeholders simply take
an integer for each replacement with the first replacement starting with `0`. These numbers will be
used to get the correct content from the passed in array.

```html
<bc-interpolate
  bc-string="Item 0 matches ${0}, item 1 matches ${1}, etc..."
  bc-array="['ZERO', 'ONE']"
></bc-interpolate>

<!-- Output:
  Item 0 matches ZERO, item 2 matches ONE, etc...
-->
```

You can use as many instances of a placeholder as needed:

```html
<bc-interpolate
  bc-string="How much ${0} would a woodchuck ${1} if a ${0} ${1} could ${1} ${0}?"
  bc-array="['wood', 'chuck']"
></bc-interpolate>

<!-- Output:
  How much wood would a woodchuck chuck if a wood chuck could chuck wood?
-->
```


## Usage

Include `bc.AngularStringInterpolation` as a dependency in your project.

```javascript
angular.module('YourModule', ['bc.AngularStringInterpolation']);
```


### Directive

Use the directive as an element or as an attribute:

```html
<!-- As an element -->
<bc-interpolate
  bc-string="Who is ${0} without ${1}?"
  bc-array="['Statler', 'Waldorf']"
></bc-interpolate>

<!-- Output:
  Who is Statler without Waldorf?
-->

<!-- Or as an attribute -->
<div bc-interpolate
  bc-string="Who is ${1} without ${0}?"
  bc-array="['Calvin', 'Hobbes']"
></div>

<!-- Output:
  Who is Hobbes without Calvin?
-->
```

> [:tv: Directive demo][demo_directive]

#### `bc-string`

This custom attribute accepts a **string** containing the items to be replaced.

```javascript
// You can define all the content inside your controller
this.myString = 'You have ${0} dollars in your ${1} account.';
```

```html
<bc-interpolate
  bc-string="{{ vm.myString }}"
  bc-array="['200', 'checking']"
></bc-interpolate>

<!-- Output:
  You have 200 dollars in your checking account.
-->
```

Or pass a string directly to the attribute:

```html
<bc-interpolate
  bc-string="Who is ${0} without ${1}?"
  bc-array="['Garth', 'Wayne']"
></bc-interpolate>

<!-- Output:
  Who is Garth without Wayne?
-->
```


#### `bc-array`

This custom attribute accepts an **array** containing the items to be injected into the placeholders. As
with [`bc-string`](#bc-string) you can define items in the controller or directly in the DOM.

```javascript
// You can define the content inside your controller
const remainingCredits = 12;
const expiration = 'Aug 31st, 2016';
this.replacements = [remainingCredits, expiration];
```

```html
<bc-interpolate
  bc-string="You have ${0} credits remaining until ${1}."
  bc-array="vm.replacements"
></bc-interpolate>

<!-- Output:
  You have 200 dollars in your checking account.
-->
```

Or pass an array directly to the attribute:

```html
<bc-interpolate
  bc-string="Who is ${0} without ${1}?"
  bc-array="['Bullwinkle', 'Rocky']"
></div>

<!-- Output:
  Who is Bullwinkle without Rocky?
-->
```


## Service

The interpolation method is exposed through `bcInterpolationService`. This allows you to interpolate
text inside a controller, service or anywhere it is needed.

##### Parameters

- `string`: `{String}`
  - A string containing placeholders (`${}`)
- `values`: `{Array}`
  - An array of values to replace the placeholders

##### Returns `String`

> [:tv: Service demo][demo_service]

```javascript
// Controller Example

export class MyController() {
  // Inject the service into your controller
  constructor(bcInterpolationService) {
    'ngInject';

    // Define our string and the values to inject into the placeholders
    this.string = 'You have ${0} credits remaining as of ${1}.';
    this.values = ['12', new Date()];

    // Pass both into the service to get back an interpolated string
    this.string = bcInterpolationService.interpolate(string, values);

  }
}
```


## Filter

The interpolation method is also exposed through the `bcInterpolation` filter. This allows several
uses.

##### Parameters

- `string`: `{String}`
  - A string containing placeholders (`${}`)
- `values`: `{Array}`
  - An array of values to replace the placeholders

##### Returns `String`

> [:tv: Filter demo][demo_filter]

```javascript
// Controller Example

export class MyController() {
  constructor() {

    // Define our string and the values to inject into the placeholders
    this.string = 'You have ${0} credits remaining as of ${1}.';
    this.values = ['12', new Date()];

    // Pass both into the filter to get back the interpolated string
    this.filteredString = this.$filter('bcInterpolation')(string, values);

    // Outputs:
    // "You have 12 credits remaining as of Fri Jul 08 2016 16:45:19 GMT-0400 (EDT)."

  }
}
```

```html
<p>
  {{ vm.string | bcInterpolation:vm.values }}
</p>

<!-- or -->

<p>
  {{ "Neither ${0} nor ${1} nor ${2} nor gloom of ${3}..." |
      bcInterpolation:['❄', '🌧', '🔥', '🌃'] }}
</p>

<!-- Outputs:
  Neither ❄ nor 🌧 nor 🔥 nor gloom of 🌃...
-->
```


## Development

- `npm run build` - Build JS/CSS/HTML/SVG
- `npm run build:js` - Build JS
- `npm run watch:js` - Watch JS/HTML and rebuild on change
- `npm run watch` - Watch JS/HTML and rebuild on change




[issues]: https://github.com/benjamincharity/angular-string-interpolation/issues
[demo_directive]: http://codepen.io/benjamincharity/pen/xEYYZX?editors=0010
[demo_service]: https://codepen.io/benjamincharity/pen/NRyYjx?editors=0010
[demo_filter]: https://codepen.io/benjamincharity/pen/BLYAdy?editors=0010
[demo_collection]: https://codepen.io/collection/AMrxJP/
[template_strings]: https://developers.google.com/web/updates/2015/01/ES6-Template-Strings

[license_image]: http://img.shields.io/badge/license-MIT-blue.svg
[license_url]: LICENSE
[npm_url]: https://npmjs.org/package/angular-string-interpolation
[npm_version_image]: http://img.shields.io/npm/v/angular-string-interpolation.svg

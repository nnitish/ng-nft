# Introduction

Number Formatter for [Angular](http://angular.io); Transforms the number into human readable format when in Thousands, Millions and Billions. It accept the negative number also.
* 12345 -> 12.345K
* -12345 -> -12.345K (Negative number)
* 1234567 -> 1.23M
* 123456789123 -> 123.45B

The number of digits after the decimal point depends on the input value of `[nftPlaceValue]=""` Range [0-100]

# Installation

### npm
```js
npm install ng-nft --save
```

# Usage

### Import `NgNftModule`

You need to import the `NgNftModule` in the module of your app where you want to use it.

```js
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgNftModule } from 'ng-nft';

@NgModule({
  declarations: [
    // Your components
  ],
  imports: [
    // Your modules,
    NgNftModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
```

### selector
Place the `ng-nft` and pass the un-formatted number as an input to `nftNumber`.

```html
<ng-nft [nftNumber]="12345"></ng-nft>

<ng-nft [nftNumber]="'12345'"></ng-nft>  (Accept number as a string format)
```


Use the input `nftPlaceValue` to fix the digit after decimal point

```js
[nftPlaceValue]="" // Optional. The number of digits after the decimal point. Range [0-100]
```
```html
<ng-nft [nftNumber]="12345" [nftPlaceValue]=""></ng-nft>
<ng-nft [nftNumber]="12345" [nftPlaceValue]="0"></ng-nft>

....

<ng-nft [nftNumber]="12345" [nftPlaceValue]="1"></ng-nft>
<ng-nft [nftNumber]="12345" [nftPlaceValue]="2"></ng-nft>
<ng-nft [nftNumber]="-12345" [nftPlaceValue]="2"></ng-nft> (Accept negative number)

...
```


# Demo App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.1. 
Thus, one can consume the Demo App with in the Repository and can understand the flow of how this Package works.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
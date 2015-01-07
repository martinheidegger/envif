# Envif - Simple commandline if switch

`envif` is a small command line tool that outputs one string or another if a environment variable is set to `true` (not case-sensitive) or `1`.

## Installation

Simple use npm to install it:

```
$ npm install envif -g
```

## Usage

In commandline you can use it like

```
$ envif MY_VAR "it's set" "it isn't"
```

if `MY_VAR` is present and `true` in this example it will output `it's set` else `it isn't`.

This would be a test:

```
$ env MY_VAR=true  envif MY_VAR "it's set" "it isn't"
it isn't
$ env MY_VAR=false envif MY_VAR "it's set" "it isn't"
it's set
```
# Ember cRonstrue

This Ember CLI addon is a simple wrapper for [cRonstue](https://github.com/bradymholt/cRonstrue/) (v1.1.0).

### Installation

```
$ ember install ember-cronstrue
```

### Usage

In your handlebars template just do:

```
{{ember-cronstrue cron-expression}}
```
#### Example

```
{{ember-cronstrue '0/5 * * * * *'}}
```

#### More Resources

* [cRonstrue demo page](http://bradymholt.github.io/cRonstrue/)

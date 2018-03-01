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

## i18n

To use the i18n support cRonstrue provides, you can pass the name of a supported locale as the second parameter to the {{ember-cronstrue}} helper.  

#### Example
```
{{ember-cronstrue '0/5 * * * * *' 'fr'}}
```

### Supported Locales

- en - English
- nl - Dutch
- fr - French
- de - German
- it - Italian
- nb - Norwegian
- pl - Polish
- pt_BR - Portuguese (Brazil)
- ro - Romanian
- ru - Russian
- es - Spanish
- sv - Swedish
- tr - Turkish
- uk - Ukrainian
- zh_CN - Chinese (Simplified)

### Default Locale

The default locale is 'en'. The default locale can be configured in your apps `config/environment.js` file. For example:

```javascript
// config/environment.js
module.exports = function(environment) {
  var ENV = {
    ...
  };

  ENV['ember-cronstrue'] = {
    defaultLocale: 'nl'
  };

  return ENV;
};
```

## More Resources

* [cRonstrue demo page](http://bradymholt.github.io/cRonstrue/)

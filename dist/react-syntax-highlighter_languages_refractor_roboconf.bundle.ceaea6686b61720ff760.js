(self["webpackChunkheaderproject"] = self["webpackChunkheaderproject"] || []).push([["react-syntax-highlighter_languages_refractor_roboconf"],{

/***/ "./node_modules/refractor/lang/roboconf.js":
/*!*************************************************!*\
  !*** ./node_modules/refractor/lang/roboconf.js ***!
  \*************************************************/
/***/ ((module) => {

"use strict";


module.exports = roboconf
roboconf.displayName = 'roboconf'
roboconf.aliases = []
function roboconf(Prism) {
  Prism.languages.roboconf = {
    comment: /#.*/,
    keyword: {
      pattern: /(^|\s)(?:(?:facet|instance of)(?=[ \t]+[\w-]+[ \t]*\{)|(?:external|import)\b)/,
      lookbehind: true
    },
    component: {
      pattern: /[\w-]+(?=[ \t]*\{)/,
      alias: 'variable'
    },
    property: /[\w.-]+(?=[ \t]*:)/,
    value: {
      pattern: /(=[ \t]*)[^,;]+/,
      lookbehind: true,
      alias: 'attr-value'
    },
    optional: {
      pattern: /\(optional\)/,
      alias: 'builtin'
    },
    wildcard: {
      pattern: /(\.)\*/,
      lookbehind: true,
      alias: 'operator'
    },
    punctuation: /[{},.;:=]/
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFkZXJwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL3JvYm9jb25mLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUVBQXFFO0FBQ3JFO0FBQ0EsS0FBSztBQUNMO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wscUJBQXFCLEdBQUc7QUFDeEI7QUFDQSIsImZpbGUiOiJyZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX3JlZnJhY3Rvcl9yb2JvY29uZi5idW5kbGUuY2VhZWE2Njg2YjYxNzIwZmY3NjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSByb2JvY29uZlxucm9ib2NvbmYuZGlzcGxheU5hbWUgPSAncm9ib2NvbmYnXG5yb2JvY29uZi5hbGlhc2VzID0gW11cbmZ1bmN0aW9uIHJvYm9jb25mKFByaXNtKSB7XG4gIFByaXNtLmxhbmd1YWdlcy5yb2JvY29uZiA9IHtcbiAgICBjb21tZW50OiAvIy4qLyxcbiAgICBrZXl3b3JkOiB7XG4gICAgICBwYXR0ZXJuOiAvKF58XFxzKSg/Oig/OmZhY2V0fGluc3RhbmNlIG9mKSg/PVsgXFx0XStbXFx3LV0rWyBcXHRdKlxceyl8KD86ZXh0ZXJuYWx8aW1wb3J0KVxcYikvLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgIH0sXG4gICAgY29tcG9uZW50OiB7XG4gICAgICBwYXR0ZXJuOiAvW1xcdy1dKyg/PVsgXFx0XSpcXHspLyxcbiAgICAgIGFsaWFzOiAndmFyaWFibGUnXG4gICAgfSxcbiAgICBwcm9wZXJ0eTogL1tcXHcuLV0rKD89WyBcXHRdKjopLyxcbiAgICB2YWx1ZToge1xuICAgICAgcGF0dGVybjogLyg9WyBcXHRdKilbXiw7XSsvLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgIGFsaWFzOiAnYXR0ci12YWx1ZSdcbiAgICB9LFxuICAgIG9wdGlvbmFsOiB7XG4gICAgICBwYXR0ZXJuOiAvXFwob3B0aW9uYWxcXCkvLFxuICAgICAgYWxpYXM6ICdidWlsdGluJ1xuICAgIH0sXG4gICAgd2lsZGNhcmQ6IHtcbiAgICAgIHBhdHRlcm46IC8oXFwuKVxcKi8sXG4gICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgYWxpYXM6ICdvcGVyYXRvcidcbiAgICB9LFxuICAgIHB1bmN0dWF0aW9uOiAvW3t9LC47Oj1dL1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9
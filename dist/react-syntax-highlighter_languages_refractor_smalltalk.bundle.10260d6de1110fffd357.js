(self["webpackChunkheaderproject"] = self["webpackChunkheaderproject"] || []).push([["react-syntax-highlighter_languages_refractor_smalltalk"],{

/***/ "./node_modules/refractor/lang/smalltalk.js":
/*!**************************************************!*\
  !*** ./node_modules/refractor/lang/smalltalk.js ***!
  \**************************************************/
/***/ ((module) => {

"use strict";


module.exports = smalltalk
smalltalk.displayName = 'smalltalk'
smalltalk.aliases = []
function smalltalk(Prism) {
  Prism.languages.smalltalk = {
    comment: /"(?:""|[^"])*"/,
    string: /'(?:''|[^'])*'/,
    symbol: /#[\da-z]+|#(?:-|([+\/\\*~<>=@%|&?!])\1?)|#(?=\()/i,
    'block-arguments': {
      pattern: /(\[\s*):[^\[|]*\|/,
      lookbehind: true,
      inside: {
        variable: /:[\da-z]+/i,
        punctuation: /\|/
      }
    },
    'temporary-variables': {
      pattern: /\|[^|]+\|/,
      inside: {
        variable: /[\da-z]+/i,
        punctuation: /\|/
      }
    },
    keyword: /\b(?:nil|true|false|self|super|new)\b/,
    character: {
      pattern: /\$./,
      alias: 'string'
    },
    number: [
      /\d+r-?[\dA-Z]+(?:\.[\dA-Z]+)?(?:e-?\d+)?/,
      /\b\d+(?:\.\d+)?(?:e-?\d+)?/
    ],
    operator: /[<=]=?|:=|~[~=]|\/\/?|\\\\|>[>=]?|[!^+\-*&|,@]/,
    punctuation: /[.;:?\[\](){}]/
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFkZXJwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL3NtYWxsdGFsay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsVUFBVTtBQUMvQjtBQUNBIiwiZmlsZSI6InJlYWN0LXN5bnRheC1oaWdobGlnaHRlcl9sYW5ndWFnZXNfcmVmcmFjdG9yX3NtYWxsdGFsay5idW5kbGUuMTAyNjBkNmRlMTExMGZmZmQzNTcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBzbWFsbHRhbGtcbnNtYWxsdGFsay5kaXNwbGF5TmFtZSA9ICdzbWFsbHRhbGsnXG5zbWFsbHRhbGsuYWxpYXNlcyA9IFtdXG5mdW5jdGlvbiBzbWFsbHRhbGsoUHJpc20pIHtcbiAgUHJpc20ubGFuZ3VhZ2VzLnNtYWxsdGFsayA9IHtcbiAgICBjb21tZW50OiAvXCIoPzpcIlwifFteXCJdKSpcIi8sXG4gICAgc3RyaW5nOiAvJyg/OicnfFteJ10pKicvLFxuICAgIHN5bWJvbDogLyNbXFxkYS16XSt8Iyg/Oi18KFsrXFwvXFxcXCp+PD49QCV8Jj8hXSlcXDE/KXwjKD89XFwoKS9pLFxuICAgICdibG9jay1hcmd1bWVudHMnOiB7XG4gICAgICBwYXR0ZXJuOiAvKFxcW1xccyopOlteXFxbfF0qXFx8LyxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICBpbnNpZGU6IHtcbiAgICAgICAgdmFyaWFibGU6IC86W1xcZGEtel0rL2ksXG4gICAgICAgIHB1bmN0dWF0aW9uOiAvXFx8L1xuICAgICAgfVxuICAgIH0sXG4gICAgJ3RlbXBvcmFyeS12YXJpYWJsZXMnOiB7XG4gICAgICBwYXR0ZXJuOiAvXFx8W158XStcXHwvLFxuICAgICAgaW5zaWRlOiB7XG4gICAgICAgIHZhcmlhYmxlOiAvW1xcZGEtel0rL2ksXG4gICAgICAgIHB1bmN0dWF0aW9uOiAvXFx8L1xuICAgICAgfVxuICAgIH0sXG4gICAga2V5d29yZDogL1xcYig/Om5pbHx0cnVlfGZhbHNlfHNlbGZ8c3VwZXJ8bmV3KVxcYi8sXG4gICAgY2hhcmFjdGVyOiB7XG4gICAgICBwYXR0ZXJuOiAvXFwkLi8sXG4gICAgICBhbGlhczogJ3N0cmluZydcbiAgICB9LFxuICAgIG51bWJlcjogW1xuICAgICAgL1xcZCtyLT9bXFxkQS1aXSsoPzpcXC5bXFxkQS1aXSspPyg/OmUtP1xcZCspPy8sXG4gICAgICAvXFxiXFxkKyg/OlxcLlxcZCspPyg/OmUtP1xcZCspPy9cbiAgICBdLFxuICAgIG9wZXJhdG9yOiAvWzw9XT0/fDo9fH5bfj1dfFxcL1xcLz98XFxcXFxcXFx8Pls+PV0/fFshXitcXC0qJnwsQF0vLFxuICAgIHB1bmN0dWF0aW9uOiAvWy47Oj9cXFtcXF0oKXt9XS9cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
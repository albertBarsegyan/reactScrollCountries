(self["webpackChunkheaderproject"] = self["webpackChunkheaderproject"] || []).push([["react-syntax-highlighter_languages_refractor_ini"],{

/***/ "./node_modules/refractor/lang/ini.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/ini.js ***!
  \********************************************/
/***/ ((module) => {

"use strict";


module.exports = ini
ini.displayName = 'ini'
ini.aliases = []
function ini(Prism) {
  Prism.languages.ini = {
    comment: /^[ \t]*[;#].*$/m,
    selector: /^[ \t]*\[.*?\]/m,
    constant: /^[ \t]*[^\s=]+?(?=[ \t]*=)/m,
    'attr-value': {
      pattern: /=.*/,
      inside: {
        punctuation: /^[=]/
      }
    }
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFkZXJwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL2luaS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InJlYWN0LXN5bnRheC1oaWdobGlnaHRlcl9sYW5ndWFnZXNfcmVmcmFjdG9yX2luaS5idW5kbGUuY2VhZWE2Njg2YjYxNzIwZmY3NjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBpbmlcbmluaS5kaXNwbGF5TmFtZSA9ICdpbmknXG5pbmkuYWxpYXNlcyA9IFtdXG5mdW5jdGlvbiBpbmkoUHJpc20pIHtcbiAgUHJpc20ubGFuZ3VhZ2VzLmluaSA9IHtcbiAgICBjb21tZW50OiAvXlsgXFx0XSpbOyNdLiokL20sXG4gICAgc2VsZWN0b3I6IC9eWyBcXHRdKlxcWy4qP1xcXS9tLFxuICAgIGNvbnN0YW50OiAvXlsgXFx0XSpbXlxccz1dKz8oPz1bIFxcdF0qPSkvbSxcbiAgICAnYXR0ci12YWx1ZSc6IHtcbiAgICAgIHBhdHRlcm46IC89LiovLFxuICAgICAgaW5zaWRlOiB7XG4gICAgICAgIHB1bmN0dWF0aW9uOiAvXls9XS9cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
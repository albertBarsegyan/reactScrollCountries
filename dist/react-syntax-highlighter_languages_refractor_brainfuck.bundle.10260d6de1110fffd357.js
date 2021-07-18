(self["webpackChunkheaderproject"] = self["webpackChunkheaderproject"] || []).push([["react-syntax-highlighter_languages_refractor_brainfuck"],{

/***/ "./node_modules/refractor/lang/brainfuck.js":
/*!**************************************************!*\
  !*** ./node_modules/refractor/lang/brainfuck.js ***!
  \**************************************************/
/***/ ((module) => {

"use strict";


module.exports = brainfuck
brainfuck.displayName = 'brainfuck'
brainfuck.aliases = []
function brainfuck(Prism) {
  Prism.languages.brainfuck = {
    pointer: {
      pattern: /<|>/,
      alias: 'keyword'
    },
    increment: {
      pattern: /\+/,
      alias: 'inserted'
    },
    decrement: {
      pattern: /-/,
      alias: 'deleted'
    },
    branching: {
      pattern: /\[|\]/,
      alias: 'important'
    },
    operator: /[.,]/,
    comment: /\S+/
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFkZXJwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL2JyYWluZnVjay5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InJlYWN0LXN5bnRheC1oaWdobGlnaHRlcl9sYW5ndWFnZXNfcmVmcmFjdG9yX2JyYWluZnVjay5idW5kbGUuMTAyNjBkNmRlMTExMGZmZmQzNTcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBicmFpbmZ1Y2tcbmJyYWluZnVjay5kaXNwbGF5TmFtZSA9ICdicmFpbmZ1Y2snXG5icmFpbmZ1Y2suYWxpYXNlcyA9IFtdXG5mdW5jdGlvbiBicmFpbmZ1Y2soUHJpc20pIHtcbiAgUHJpc20ubGFuZ3VhZ2VzLmJyYWluZnVjayA9IHtcbiAgICBwb2ludGVyOiB7XG4gICAgICBwYXR0ZXJuOiAvPHw+LyxcbiAgICAgIGFsaWFzOiAna2V5d29yZCdcbiAgICB9LFxuICAgIGluY3JlbWVudDoge1xuICAgICAgcGF0dGVybjogL1xcKy8sXG4gICAgICBhbGlhczogJ2luc2VydGVkJ1xuICAgIH0sXG4gICAgZGVjcmVtZW50OiB7XG4gICAgICBwYXR0ZXJuOiAvLS8sXG4gICAgICBhbGlhczogJ2RlbGV0ZWQnXG4gICAgfSxcbiAgICBicmFuY2hpbmc6IHtcbiAgICAgIHBhdHRlcm46IC9cXFt8XFxdLyxcbiAgICAgIGFsaWFzOiAnaW1wb3J0YW50J1xuICAgIH0sXG4gICAgb3BlcmF0b3I6IC9bLixdLyxcbiAgICBjb21tZW50OiAvXFxTKy9cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
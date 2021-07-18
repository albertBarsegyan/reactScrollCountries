(self["webpackChunkheaderproject"] = self["webpackChunkheaderproject"] || []).push([["react-syntax-highlighter_languages_refractor_mizar"],{

/***/ "./node_modules/refractor/lang/mizar.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/mizar.js ***!
  \**********************************************/
/***/ ((module) => {

"use strict";


module.exports = mizar
mizar.displayName = 'mizar'
mizar.aliases = []
function mizar(Prism) {
  Prism.languages.mizar = {
    comment: /::.+/,
    keyword: /@proof\b|\b(?:according|aggregate|all|and|antonym|are|as|associativity|assume|asymmetry|attr|be|begin|being|by|canceled|case|cases|clusters?|coherence|commutativity|compatibility|connectedness|consider|consistency|constructors|contradiction|correctness|def|deffunc|define|definitions?|defpred|do|does|equals|end|environ|ex|exactly|existence|for|from|func|given|hence|hereby|holds|idempotence|identity|iff?|implies|involutiveness|irreflexivity|is|it|let|means|mode|non|not|notations?|now|of|or|otherwise|over|per|pred|prefix|projectivity|proof|provided|qua|reconsider|redefine|reduce|reducibility|reflexivity|registrations?|requirements|reserve|sch|schemes?|section|selector|set|sethood|st|struct|such|suppose|symmetry|synonym|take|that|the|then|theorems?|thesis|thus|to|transitivity|uniqueness|vocabular(?:y|ies)|when|where|with|wrt)\b/,
    parameter: {
      pattern: /\$(?:10|\d)/,
      alias: 'variable'
    },
    variable: /\w+(?=:)/,
    number: /(?:\b|-)\d+\b/,
    operator: /\.\.\.|->|&|\.?=/,
    punctuation: /\(#|#\)|[,:;\[\](){}]/
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFkZXJwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL21pemFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixRQUFRO0FBQ3RDO0FBQ0EiLCJmaWxlIjoicmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyX2xhbmd1YWdlc19yZWZyYWN0b3JfbWl6YXIuYnVuZGxlLjEwMjYwZDZkZTExMTBmZmZkMzU3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gbWl6YXJcbm1pemFyLmRpc3BsYXlOYW1lID0gJ21pemFyJ1xubWl6YXIuYWxpYXNlcyA9IFtdXG5mdW5jdGlvbiBtaXphcihQcmlzbSkge1xuICBQcmlzbS5sYW5ndWFnZXMubWl6YXIgPSB7XG4gICAgY29tbWVudDogLzo6LisvLFxuICAgIGtleXdvcmQ6IC9AcHJvb2ZcXGJ8XFxiKD86YWNjb3JkaW5nfGFnZ3JlZ2F0ZXxhbGx8YW5kfGFudG9ueW18YXJlfGFzfGFzc29jaWF0aXZpdHl8YXNzdW1lfGFzeW1tZXRyeXxhdHRyfGJlfGJlZ2lufGJlaW5nfGJ5fGNhbmNlbGVkfGNhc2V8Y2FzZXN8Y2x1c3RlcnM/fGNvaGVyZW5jZXxjb21tdXRhdGl2aXR5fGNvbXBhdGliaWxpdHl8Y29ubmVjdGVkbmVzc3xjb25zaWRlcnxjb25zaXN0ZW5jeXxjb25zdHJ1Y3RvcnN8Y29udHJhZGljdGlvbnxjb3JyZWN0bmVzc3xkZWZ8ZGVmZnVuY3xkZWZpbmV8ZGVmaW5pdGlvbnM/fGRlZnByZWR8ZG98ZG9lc3xlcXVhbHN8ZW5kfGVudmlyb258ZXh8ZXhhY3RseXxleGlzdGVuY2V8Zm9yfGZyb218ZnVuY3xnaXZlbnxoZW5jZXxoZXJlYnl8aG9sZHN8aWRlbXBvdGVuY2V8aWRlbnRpdHl8aWZmP3xpbXBsaWVzfGludm9sdXRpdmVuZXNzfGlycmVmbGV4aXZpdHl8aXN8aXR8bGV0fG1lYW5zfG1vZGV8bm9ufG5vdHxub3RhdGlvbnM/fG5vd3xvZnxvcnxvdGhlcndpc2V8b3ZlcnxwZXJ8cHJlZHxwcmVmaXh8cHJvamVjdGl2aXR5fHByb29mfHByb3ZpZGVkfHF1YXxyZWNvbnNpZGVyfHJlZGVmaW5lfHJlZHVjZXxyZWR1Y2liaWxpdHl8cmVmbGV4aXZpdHl8cmVnaXN0cmF0aW9ucz98cmVxdWlyZW1lbnRzfHJlc2VydmV8c2NofHNjaGVtZXM/fHNlY3Rpb258c2VsZWN0b3J8c2V0fHNldGhvb2R8c3R8c3RydWN0fHN1Y2h8c3VwcG9zZXxzeW1tZXRyeXxzeW5vbnltfHRha2V8dGhhdHx0aGV8dGhlbnx0aGVvcmVtcz98dGhlc2lzfHRodXN8dG98dHJhbnNpdGl2aXR5fHVuaXF1ZW5lc3N8dm9jYWJ1bGFyKD86eXxpZXMpfHdoZW58d2hlcmV8d2l0aHx3cnQpXFxiLyxcbiAgICBwYXJhbWV0ZXI6IHtcbiAgICAgIHBhdHRlcm46IC9cXCQoPzoxMHxcXGQpLyxcbiAgICAgIGFsaWFzOiAndmFyaWFibGUnXG4gICAgfSxcbiAgICB2YXJpYWJsZTogL1xcdysoPz06KS8sXG4gICAgbnVtYmVyOiAvKD86XFxifC0pXFxkK1xcYi8sXG4gICAgb3BlcmF0b3I6IC9cXC5cXC5cXC58LT58JnxcXC4/PS8sXG4gICAgcHVuY3R1YXRpb246IC9cXCgjfCNcXCl8Wyw6O1xcW1xcXSgpe31dL1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9
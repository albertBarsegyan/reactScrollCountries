(self["webpackChunkheaderproject"] = self["webpackChunkheaderproject"] || []).push([["react-syntax-highlighter_languages_refractor_sas"],{

/***/ "./node_modules/refractor/lang/sas.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/sas.js ***!
  \********************************************/
/***/ ((module) => {

"use strict";


module.exports = sas
sas.displayName = 'sas'
sas.aliases = []
function sas(Prism) {
  Prism.languages.sas = {
    datalines: {
      pattern: /^\s*(?:(?:data)?lines|cards);[\s\S]+?(?:\r?\n|\r);/im,
      alias: 'string',
      inside: {
        keyword: {
          pattern: /^(\s*)(?:(?:data)?lines|cards)/i,
          lookbehind: true
        },
        punctuation: /;/
      }
    },
    comment: [
      {
        pattern: /(^\s*|;\s*)\*.*;/m,
        lookbehind: true
      },
      /\/\*[\s\S]+?\*\//
    ],
    datetime: {
      // '1jan2013'd, '9:25:19pm't, '18jan2003:9:27:05am'dt
      pattern: /'[^']+'(?:dt?|t)\b/i,
      alias: 'number'
    },
    string: {
      pattern: /(["'])(?:\1\1|(?!\1)[\s\S])*\1/,
      greedy: true
    },
    keyword: /\b(?:data|else|format|if|input|proc\s\w+|quit|run|then|libname|set|output|options)\b/i,
    // Decimal (1.2e23), hexadecimal (0c1x)
    number: /\b(?:[\da-f]+x|\d+(?:\.\d+)?(?:e[+-]?\d+)?)/i,
    operator: /\*\*?|\|\|?|!!?|¦¦?|<[>=]?|>[<=]?|[-+\/=&]|[~¬^]=?|\b(?:eq|ne|gt|lt|ge|le|in|not)\b/i,
    punctuation: /[$%@.(){}\[\];,\\]/
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFkZXJwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL3Nhcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMscUJBQXFCO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsdUJBQXVCO0FBQ3ZCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSx5QkFBeUIsU0FBUztBQUNsQztBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLEtBQUs7QUFDaEM7QUFDQSIsImZpbGUiOiJyZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX3JlZnJhY3Rvcl9zYXMuYnVuZGxlLjEwMjYwZDZkZTExMTBmZmZkMzU3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gc2FzXG5zYXMuZGlzcGxheU5hbWUgPSAnc2FzJ1xuc2FzLmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24gc2FzKFByaXNtKSB7XG4gIFByaXNtLmxhbmd1YWdlcy5zYXMgPSB7XG4gICAgZGF0YWxpbmVzOiB7XG4gICAgICBwYXR0ZXJuOiAvXlxccyooPzooPzpkYXRhKT9saW5lc3xjYXJkcyk7W1xcc1xcU10rPyg/Olxccj9cXG58XFxyKTsvaW0sXG4gICAgICBhbGlhczogJ3N0cmluZycsXG4gICAgICBpbnNpZGU6IHtcbiAgICAgICAga2V5d29yZDoge1xuICAgICAgICAgIHBhdHRlcm46IC9eKFxccyopKD86KD86ZGF0YSk/bGluZXN8Y2FyZHMpL2ksXG4gICAgICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBwdW5jdHVhdGlvbjogLzsvXG4gICAgICB9XG4gICAgfSxcbiAgICBjb21tZW50OiBbXG4gICAgICB7XG4gICAgICAgIHBhdHRlcm46IC8oXlxccyp8O1xccyopXFwqLio7L20sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgIH0sXG4gICAgICAvXFwvXFwqW1xcc1xcU10rP1xcKlxcLy9cbiAgICBdLFxuICAgIGRhdGV0aW1lOiB7XG4gICAgICAvLyAnMWphbjIwMTMnZCwgJzk6MjU6MTlwbSd0LCAnMThqYW4yMDAzOjk6Mjc6MDVhbSdkdFxuICAgICAgcGF0dGVybjogLydbXiddKycoPzpkdD98dClcXGIvaSxcbiAgICAgIGFsaWFzOiAnbnVtYmVyJ1xuICAgIH0sXG4gICAgc3RyaW5nOiB7XG4gICAgICBwYXR0ZXJuOiAvKFtcIiddKSg/OlxcMVxcMXwoPyFcXDEpW1xcc1xcU10pKlxcMS8sXG4gICAgICBncmVlZHk6IHRydWVcbiAgICB9LFxuICAgIGtleXdvcmQ6IC9cXGIoPzpkYXRhfGVsc2V8Zm9ybWF0fGlmfGlucHV0fHByb2NcXHNcXHcrfHF1aXR8cnVufHRoZW58bGlibmFtZXxzZXR8b3V0cHV0fG9wdGlvbnMpXFxiL2ksXG4gICAgLy8gRGVjaW1hbCAoMS4yZTIzKSwgaGV4YWRlY2ltYWwgKDBjMXgpXG4gICAgbnVtYmVyOiAvXFxiKD86W1xcZGEtZl0reHxcXGQrKD86XFwuXFxkKyk/KD86ZVsrLV0/XFxkKyk/KS9pLFxuICAgIG9wZXJhdG9yOiAvXFwqXFwqP3xcXHxcXHw/fCEhP3zCpsKmP3w8Wz49XT98Pls8PV0/fFstK1xcLz0mXXxbfsKsXl09P3xcXGIoPzplcXxuZXxndHxsdHxnZXxsZXxpbnxub3QpXFxiL2ksXG4gICAgcHVuY3R1YXRpb246IC9bJCVALigpe31cXFtcXF07LFxcXFxdL1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9
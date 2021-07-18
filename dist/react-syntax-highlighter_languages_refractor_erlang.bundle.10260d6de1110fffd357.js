(self["webpackChunkheaderproject"] = self["webpackChunkheaderproject"] || []).push([["react-syntax-highlighter_languages_refractor_erlang"],{

/***/ "./node_modules/refractor/lang/erlang.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/erlang.js ***!
  \***********************************************/
/***/ ((module) => {

"use strict";


module.exports = erlang
erlang.displayName = 'erlang'
erlang.aliases = []
function erlang(Prism) {
  Prism.languages.erlang = {
    comment: /%.+/,
    string: {
      pattern: /"(?:\\.|[^\\"\r\n])*"/,
      greedy: true
    },
    'quoted-function': {
      pattern: /'(?:\\.|[^\\'\r\n])+'(?=\()/,
      alias: 'function'
    },
    'quoted-atom': {
      pattern: /'(?:\\.|[^\\'\r\n])+'/,
      alias: 'atom'
    },
    boolean: /\b(?:true|false)\b/,
    keyword: /\b(?:fun|when|case|of|end|if|receive|after|try|catch)\b/,
    number: [
      /\$\\?./,
      /\d+#[a-z0-9]+/i,
      /(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i
    ],
    function: /\b[a-z][\w@]*(?=\()/,
    variable: {
      // Look-behind is used to prevent wrong highlighting of atoms containing "@"
      pattern: /(^|[^@])(?:\b|\?)[A-Z_][\w@]*/,
      lookbehind: true
    },
    operator: [
      /[=\/<>:]=|=[:\/]=|\+\+?|--?|[=*\/!]|\b(?:bnot|div|rem|band|bor|bxor|bsl|bsr|not|and|or|xor|orelse|andalso)\b/,
      {
        // We don't want to match <<
        pattern: /(^|[^<])<(?!<)/,
        lookbehind: true
      },
      {
        // We don't want to match >>
        pattern: /(^|[^>])>(?!>)/,
        lookbehind: true
      }
    ],
    atom: /\b[a-z][\w@]*/,
    punctuation: /[()[\]{}:;,.#|]|<<|>>/
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFkZXJwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL2VybGFuZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLEVBQUU7QUFDNUI7QUFDQSIsImZpbGUiOiJyZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX3JlZnJhY3Rvcl9lcmxhbmcuYnVuZGxlLjEwMjYwZDZkZTExMTBmZmZkMzU3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gZXJsYW5nXG5lcmxhbmcuZGlzcGxheU5hbWUgPSAnZXJsYW5nJ1xuZXJsYW5nLmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24gZXJsYW5nKFByaXNtKSB7XG4gIFByaXNtLmxhbmd1YWdlcy5lcmxhbmcgPSB7XG4gICAgY29tbWVudDogLyUuKy8sXG4gICAgc3RyaW5nOiB7XG4gICAgICBwYXR0ZXJuOiAvXCIoPzpcXFxcLnxbXlxcXFxcIlxcclxcbl0pKlwiLyxcbiAgICAgIGdyZWVkeTogdHJ1ZVxuICAgIH0sXG4gICAgJ3F1b3RlZC1mdW5jdGlvbic6IHtcbiAgICAgIHBhdHRlcm46IC8nKD86XFxcXC58W15cXFxcJ1xcclxcbl0pKycoPz1cXCgpLyxcbiAgICAgIGFsaWFzOiAnZnVuY3Rpb24nXG4gICAgfSxcbiAgICAncXVvdGVkLWF0b20nOiB7XG4gICAgICBwYXR0ZXJuOiAvJyg/OlxcXFwufFteXFxcXCdcXHJcXG5dKSsnLyxcbiAgICAgIGFsaWFzOiAnYXRvbSdcbiAgICB9LFxuICAgIGJvb2xlYW46IC9cXGIoPzp0cnVlfGZhbHNlKVxcYi8sXG4gICAga2V5d29yZDogL1xcYig/OmZ1bnx3aGVufGNhc2V8b2Z8ZW5kfGlmfHJlY2VpdmV8YWZ0ZXJ8dHJ5fGNhdGNoKVxcYi8sXG4gICAgbnVtYmVyOiBbXG4gICAgICAvXFwkXFxcXD8uLyxcbiAgICAgIC9cXGQrI1thLXowLTldKy9pLFxuICAgICAgLyg/OlxcYlxcZCtcXC4/XFxkKnxcXEJcXC5cXGQrKSg/OmVbKy1dP1xcZCspPy9pXG4gICAgXSxcbiAgICBmdW5jdGlvbjogL1xcYlthLXpdW1xcd0BdKig/PVxcKCkvLFxuICAgIHZhcmlhYmxlOiB7XG4gICAgICAvLyBMb29rLWJlaGluZCBpcyB1c2VkIHRvIHByZXZlbnQgd3JvbmcgaGlnaGxpZ2h0aW5nIG9mIGF0b21zIGNvbnRhaW5pbmcgXCJAXCJcbiAgICAgIHBhdHRlcm46IC8oXnxbXkBdKSg/OlxcYnxcXD8pW0EtWl9dW1xcd0BdKi8sXG4gICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgfSxcbiAgICBvcGVyYXRvcjogW1xuICAgICAgL1s9XFwvPD46XT18PVs6XFwvXT18XFwrXFwrP3wtLT98Wz0qXFwvIV18XFxiKD86Ym5vdHxkaXZ8cmVtfGJhbmR8Ym9yfGJ4b3J8YnNsfGJzcnxub3R8YW5kfG9yfHhvcnxvcmVsc2V8YW5kYWxzbylcXGIvLFxuICAgICAge1xuICAgICAgICAvLyBXZSBkb24ndCB3YW50IHRvIG1hdGNoIDw8XG4gICAgICAgIHBhdHRlcm46IC8oXnxbXjxdKTwoPyE8KS8sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIC8vIFdlIGRvbid0IHdhbnQgdG8gbWF0Y2ggPj5cbiAgICAgICAgcGF0dGVybjogLyhefFtePl0pPig/IT4pLyxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgICAgfVxuICAgIF0sXG4gICAgYXRvbTogL1xcYlthLXpdW1xcd0BdKi8sXG4gICAgcHVuY3R1YXRpb246IC9bKClbXFxde306OywuI3xdfDw8fD4+L1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9
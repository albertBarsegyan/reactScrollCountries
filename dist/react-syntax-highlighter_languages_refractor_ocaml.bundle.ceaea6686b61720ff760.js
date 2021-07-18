(self["webpackChunkheaderproject"] = self["webpackChunkheaderproject"] || []).push([["react-syntax-highlighter_languages_refractor_ocaml"],{

/***/ "./node_modules/refractor/lang/ocaml.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/ocaml.js ***!
  \**********************************************/
/***/ ((module) => {

"use strict";


module.exports = ocaml
ocaml.displayName = 'ocaml'
ocaml.aliases = []
function ocaml(Prism) {
  Prism.languages.ocaml = {
    comment: /\(\*[\s\S]*?\*\)/,
    string: [
      {
        pattern: /"(?:\\.|[^\\\r\n"])*"/,
        greedy: true
      },
      {
        pattern: /(['`])(?:\\(?:\d+|x[\da-f]+|.)|(?!\1)[^\\\r\n])\1/i,
        greedy: true
      }
    ],
    number: /\b(?:0x[\da-f][\da-f_]+|(?:0[bo])?\d[\d_]*\.?[\d_]*(?:e[+-]?[\d_]+)?)/i,
    type: {
      pattern: /\B['`]\w*/,
      alias: 'variable'
    },
    directive: {
      pattern: /\B#\w+/,
      alias: 'function'
    },
    keyword: /\b(?:as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|match|method|module|mutable|new|object|of|open|prefix|private|rec|then|sig|struct|to|try|type|val|value|virtual|where|while|with)\b/,
    boolean: /\b(?:false|true)\b/,
    // Custom operators are allowed
    operator: /:=|[=<>@^|&+\-*\/$%!?~][!$%&*+\-.\/:<=>?@^|~]*|\b(?:and|asr|land|lor|lxor|lsl|lsr|mod|nor|or)\b/,
    punctuation: /[(){}\[\]|_.,:;]/
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFkZXJwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL29jYW1sLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsVUFBVTtBQUNqQztBQUNBIiwiZmlsZSI6InJlYWN0LXN5bnRheC1oaWdobGlnaHRlcl9sYW5ndWFnZXNfcmVmcmFjdG9yX29jYW1sLmJ1bmRsZS5jZWFlYTY2ODZiNjE3MjBmZjc2MC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IG9jYW1sXG5vY2FtbC5kaXNwbGF5TmFtZSA9ICdvY2FtbCdcbm9jYW1sLmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24gb2NhbWwoUHJpc20pIHtcbiAgUHJpc20ubGFuZ3VhZ2VzLm9jYW1sID0ge1xuICAgIGNvbW1lbnQ6IC9cXChcXCpbXFxzXFxTXSo/XFwqXFwpLyxcbiAgICBzdHJpbmc6IFtcbiAgICAgIHtcbiAgICAgICAgcGF0dGVybjogL1wiKD86XFxcXC58W15cXFxcXFxyXFxuXCJdKSpcIi8sXG4gICAgICAgIGdyZWVkeTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0dGVybjogLyhbJ2BdKSg/OlxcXFwoPzpcXGQrfHhbXFxkYS1mXSt8Lil8KD8hXFwxKVteXFxcXFxcclxcbl0pXFwxL2ksXG4gICAgICAgIGdyZWVkeTogdHJ1ZVxuICAgICAgfVxuICAgIF0sXG4gICAgbnVtYmVyOiAvXFxiKD86MHhbXFxkYS1mXVtcXGRhLWZfXSt8KD86MFtib10pP1xcZFtcXGRfXSpcXC4/W1xcZF9dKig/OmVbKy1dP1tcXGRfXSspPykvaSxcbiAgICB0eXBlOiB7XG4gICAgICBwYXR0ZXJuOiAvXFxCWydgXVxcdyovLFxuICAgICAgYWxpYXM6ICd2YXJpYWJsZSdcbiAgICB9LFxuICAgIGRpcmVjdGl2ZToge1xuICAgICAgcGF0dGVybjogL1xcQiNcXHcrLyxcbiAgICAgIGFsaWFzOiAnZnVuY3Rpb24nXG4gICAgfSxcbiAgICBrZXl3b3JkOiAvXFxiKD86YXN8YXNzZXJ0fGJlZ2lufGNsYXNzfGNvbnN0cmFpbnR8ZG98ZG9uZXxkb3dudG98ZWxzZXxlbmR8ZXhjZXB0aW9ufGV4dGVybmFsfGZvcnxmdW58ZnVuY3Rpb258ZnVuY3RvcnxpZnxpbnxpbmNsdWRlfGluaGVyaXR8aW5pdGlhbGl6ZXJ8bGF6eXxsZXR8bWF0Y2h8bWV0aG9kfG1vZHVsZXxtdXRhYmxlfG5ld3xvYmplY3R8b2Z8b3BlbnxwcmVmaXh8cHJpdmF0ZXxyZWN8dGhlbnxzaWd8c3RydWN0fHRvfHRyeXx0eXBlfHZhbHx2YWx1ZXx2aXJ0dWFsfHdoZXJlfHdoaWxlfHdpdGgpXFxiLyxcbiAgICBib29sZWFuOiAvXFxiKD86ZmFsc2V8dHJ1ZSlcXGIvLFxuICAgIC8vIEN1c3RvbSBvcGVyYXRvcnMgYXJlIGFsbG93ZWRcbiAgICBvcGVyYXRvcjogLzo9fFs9PD5AXnwmK1xcLSpcXC8kJSE/fl1bISQlJiorXFwtLlxcLzo8PT4/QF58fl0qfFxcYig/OmFuZHxhc3J8bGFuZHxsb3J8bHhvcnxsc2x8bHNyfG1vZHxub3J8b3IpXFxiLyxcbiAgICBwdW5jdHVhdGlvbjogL1soKXt9XFxbXFxdfF8uLDo7XS9cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
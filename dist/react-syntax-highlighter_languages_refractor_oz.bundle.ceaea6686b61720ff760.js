(self["webpackChunkheaderproject"] = self["webpackChunkheaderproject"] || []).push([["react-syntax-highlighter_languages_refractor_oz"],{

/***/ "./node_modules/refractor/lang/oz.js":
/*!*******************************************!*\
  !*** ./node_modules/refractor/lang/oz.js ***!
  \*******************************************/
/***/ ((module) => {

"use strict";


module.exports = oz
oz.displayName = 'oz'
oz.aliases = []
function oz(Prism) {
  Prism.languages.oz = {
    comment: /\/\*[\s\S]*?\*\/|%.*/,
    string: {
      pattern: /"(?:[^"\\]|\\[\s\S])*"/,
      greedy: true
    },
    atom: {
      pattern: /'(?:[^'\\]|\\[\s\S])*'/,
      greedy: true,
      alias: 'builtin'
    },
    keyword: /[$_]|\[\]|\b(?:at|attr|case|catch|choice|class|cond|declare|define|dis|else(?:case|if)?|end|export|fail|false|feat|finally|from|fun|functor|if|import|in|local|lock|meth|nil|not|of|or|prepare|proc|prop|raise|require|self|skip|then|thread|true|try|unit)\b/,
    function: [
      /[a-z][A-Za-z\d]*(?=\()/,
      {
        pattern: /(\{)[A-Z][A-Za-z\d]*/,
        lookbehind: true
      }
    ],
    number: /\b(?:0[bx][\da-f]+|\d+\.?\d*(?:e~?\d+)?\b)|&(?:[^\\]|\\(?:\d{3}|.))/i,
    variable: /\b[A-Z][A-Za-z\d]*|`(?:[^`\\]|\\.)+`/,
    'attr-name': /\w+(?=:)/,
    operator: /:(?:=|::?)|<[-:=]?|=(?:=|<?:?)|>=?:?|\\=:?|!!?|[|#+\-*\/,~^@]|\b(?:andthen|div|mod|orelse)\b/,
    punctuation: /[\[\](){}.:;?]/
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFkZXJwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL296LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSwwRUFBMEUsRUFBRTtBQUM1RTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsR0FBRztBQUM5QjtBQUNBIiwiZmlsZSI6InJlYWN0LXN5bnRheC1oaWdobGlnaHRlcl9sYW5ndWFnZXNfcmVmcmFjdG9yX296LmJ1bmRsZS5jZWFlYTY2ODZiNjE3MjBmZjc2MC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IG96XG5vei5kaXNwbGF5TmFtZSA9ICdveidcbm96LmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24gb3ooUHJpc20pIHtcbiAgUHJpc20ubGFuZ3VhZ2VzLm96ID0ge1xuICAgIGNvbW1lbnQ6IC9cXC9cXCpbXFxzXFxTXSo/XFwqXFwvfCUuKi8sXG4gICAgc3RyaW5nOiB7XG4gICAgICBwYXR0ZXJuOiAvXCIoPzpbXlwiXFxcXF18XFxcXFtcXHNcXFNdKSpcIi8sXG4gICAgICBncmVlZHk6IHRydWVcbiAgICB9LFxuICAgIGF0b206IHtcbiAgICAgIHBhdHRlcm46IC8nKD86W14nXFxcXF18XFxcXFtcXHNcXFNdKSonLyxcbiAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgIGFsaWFzOiAnYnVpbHRpbidcbiAgICB9LFxuICAgIGtleXdvcmQ6IC9bJF9dfFxcW1xcXXxcXGIoPzphdHxhdHRyfGNhc2V8Y2F0Y2h8Y2hvaWNlfGNsYXNzfGNvbmR8ZGVjbGFyZXxkZWZpbmV8ZGlzfGVsc2UoPzpjYXNlfGlmKT98ZW5kfGV4cG9ydHxmYWlsfGZhbHNlfGZlYXR8ZmluYWxseXxmcm9tfGZ1bnxmdW5jdG9yfGlmfGltcG9ydHxpbnxsb2NhbHxsb2NrfG1ldGh8bmlsfG5vdHxvZnxvcnxwcmVwYXJlfHByb2N8cHJvcHxyYWlzZXxyZXF1aXJlfHNlbGZ8c2tpcHx0aGVufHRocmVhZHx0cnVlfHRyeXx1bml0KVxcYi8sXG4gICAgZnVuY3Rpb246IFtcbiAgICAgIC9bYS16XVtBLVphLXpcXGRdKig/PVxcKCkvLFxuICAgICAge1xuICAgICAgICBwYXR0ZXJuOiAvKFxceylbQS1aXVtBLVphLXpcXGRdKi8sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgIH1cbiAgICBdLFxuICAgIG51bWJlcjogL1xcYig/OjBbYnhdW1xcZGEtZl0rfFxcZCtcXC4/XFxkKig/OmV+P1xcZCspP1xcYil8Jig/OlteXFxcXF18XFxcXCg/OlxcZHszfXwuKSkvaSxcbiAgICB2YXJpYWJsZTogL1xcYltBLVpdW0EtWmEtelxcZF0qfGAoPzpbXmBcXFxcXXxcXFxcLikrYC8sXG4gICAgJ2F0dHItbmFtZSc6IC9cXHcrKD89OikvLFxuICAgIG9wZXJhdG9yOiAvOig/Oj18Ojo/KXw8Wy06PV0/fD0oPzo9fDw/Oj8pfD49Pzo/fFxcXFw9Oj98ISE/fFt8IytcXC0qXFwvLH5eQF18XFxiKD86YW5kdGhlbnxkaXZ8bW9kfG9yZWxzZSlcXGIvLFxuICAgIHB1bmN0dWF0aW9uOiAvW1xcW1xcXSgpe30uOjs/XS9cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
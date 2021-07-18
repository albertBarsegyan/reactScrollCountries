(self["webpackChunkheaderproject"] = self["webpackChunkheaderproject"] || []).push([["react-syntax-highlighter_languages_refractor_rip"],{

/***/ "./node_modules/refractor/lang/rip.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/rip.js ***!
  \********************************************/
/***/ ((module) => {

"use strict";


module.exports = rip
rip.displayName = 'rip'
rip.aliases = []
function rip(Prism) {
  Prism.languages.rip = {
    comment: /#.*/,
    keyword: /(?:=>|->)|\b(?:class|if|else|switch|case|return|exit|try|catch|finally|raise)\b/,
    builtin: /@|\bSystem\b/,
    boolean: /\b(?:true|false)\b/,
    date: /\b\d{4}-\d{2}-\d{2}\b/,
    time: /\b\d{2}:\d{2}:\d{2}\b/,
    datetime: /\b\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\b/,
    character: /\B`[^\s`'",.:;#\/\\()<>\[\]{}]\b/,
    regex: {
      pattern: /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\\\r\n])+\/(?=\s*($|[\r\n,.;})]))/,
      lookbehind: true,
      greedy: true
    },
    symbol: /:[^\d\s`'",.:;#\/\\()<>\[\]{}][^\s`'",.:;#\/\\()<>\[\]{}]*/,
    string: {
      pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
      greedy: true
    },
    number: /[+-]?(?:(?:\d+\.\d+)|(?:\d+))/,
    punctuation: /(?:\.{2,3})|[`,.:;=\/\\()<>\[\]{}]/,
    reference: /[^\d\s`'",.:;#\/\\()<>\[\]{}][^\s`'",.:;#\/\\()<>\[\]{}]*/
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFkZXJwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL3JpcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFO0FBQzlCLGdCQUFnQixFQUFFLElBQUksRUFBRSxJQUFJLEVBQUU7QUFDOUIsb0JBQW9CLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRTtBQUNwRCw4QkFBOEIsZUFBZTtBQUM3QztBQUNBLDRFQUE0RTtBQUM1RTtBQUNBO0FBQ0EsS0FBSztBQUNMLDJCQUEyQixlQUFlLFlBQVksZUFBZTtBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSx3QkFBd0IsSUFBSSxRQUFRLGVBQWU7QUFDbkQsNkJBQTZCLGVBQWUsWUFBWSxlQUFlO0FBQ3ZFO0FBQ0EiLCJmaWxlIjoicmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyX2xhbmd1YWdlc19yZWZyYWN0b3JfcmlwLmJ1bmRsZS5jZWFlYTY2ODZiNjE3MjBmZjc2MC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJpcFxucmlwLmRpc3BsYXlOYW1lID0gJ3JpcCdcbnJpcC5hbGlhc2VzID0gW11cbmZ1bmN0aW9uIHJpcChQcmlzbSkge1xuICBQcmlzbS5sYW5ndWFnZXMucmlwID0ge1xuICAgIGNvbW1lbnQ6IC8jLiovLFxuICAgIGtleXdvcmQ6IC8oPzo9PnwtPil8XFxiKD86Y2xhc3N8aWZ8ZWxzZXxzd2l0Y2h8Y2FzZXxyZXR1cm58ZXhpdHx0cnl8Y2F0Y2h8ZmluYWxseXxyYWlzZSlcXGIvLFxuICAgIGJ1aWx0aW46IC9AfFxcYlN5c3RlbVxcYi8sXG4gICAgYm9vbGVhbjogL1xcYig/OnRydWV8ZmFsc2UpXFxiLyxcbiAgICBkYXRlOiAvXFxiXFxkezR9LVxcZHsyfS1cXGR7Mn1cXGIvLFxuICAgIHRpbWU6IC9cXGJcXGR7Mn06XFxkezJ9OlxcZHsyfVxcYi8sXG4gICAgZGF0ZXRpbWU6IC9cXGJcXGR7NH0tXFxkezJ9LVxcZHsyfVRcXGR7Mn06XFxkezJ9OlxcZHsyfVxcYi8sXG4gICAgY2hhcmFjdGVyOiAvXFxCYFteXFxzYCdcIiwuOjsjXFwvXFxcXCgpPD5cXFtcXF17fV1cXGIvLFxuICAgIHJlZ2V4OiB7XG4gICAgICBwYXR0ZXJuOiAvKF58W14vXSlcXC8oPyFcXC8pKFxcWy4rP118XFxcXC58W14vXFxcXFxcclxcbl0pK1xcLyg/PVxccyooJHxbXFxyXFxuLC47fSldKSkvLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgIGdyZWVkeTogdHJ1ZVxuICAgIH0sXG4gICAgc3ltYm9sOiAvOlteXFxkXFxzYCdcIiwuOjsjXFwvXFxcXCgpPD5cXFtcXF17fV1bXlxcc2AnXCIsLjo7I1xcL1xcXFwoKTw+XFxbXFxde31dKi8sXG4gICAgc3RyaW5nOiB7XG4gICAgICBwYXR0ZXJuOiAvKFwifCcpKD86XFxcXC58KD8hXFwxKVteXFxcXFxcclxcbl0pKlxcMS8sXG4gICAgICBncmVlZHk6IHRydWVcbiAgICB9LFxuICAgIG51bWJlcjogL1srLV0/KD86KD86XFxkK1xcLlxcZCspfCg/OlxcZCspKS8sXG4gICAgcHVuY3R1YXRpb246IC8oPzpcXC57MiwzfSl8W2AsLjo7PVxcL1xcXFwoKTw+XFxbXFxde31dLyxcbiAgICByZWZlcmVuY2U6IC9bXlxcZFxcc2AnXCIsLjo7I1xcL1xcXFwoKTw+XFxbXFxde31dW15cXHNgJ1wiLC46OyNcXC9cXFxcKCk8PlxcW1xcXXt9XSovXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
(self["webpackChunkheaderproject"] = self["webpackChunkheaderproject"] || []).push([["react-syntax-highlighter_languages_refractor_go"],{

/***/ "./node_modules/refractor/lang/go.js":
/*!*******************************************!*\
  !*** ./node_modules/refractor/lang/go.js ***!
  \*******************************************/
/***/ ((module) => {

"use strict";


module.exports = go
go.displayName = 'go'
go.aliases = []
function go(Prism) {
  Prism.languages.go = Prism.languages.extend('clike', {
    keyword: /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
    builtin: /\b(?:bool|byte|complex(?:64|128)|error|float(?:32|64)|rune|string|u?int(?:8|16|32|64)?|uintptr|append|cap|close|complex|copy|delete|imag|len|make|new|panic|print(?:ln)?|real|recover)\b/,
    boolean: /\b(?:_|iota|nil|true|false)\b/,
    operator: /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
    number: /(?:\b0x[a-f\d]+|(?:\b\d+\.?\d*|\B\.\d+)(?:e[-+]?\d+)?)i?/i,
    string: {
      pattern: /(["'`])(\\[\s\S]|(?!\1)[^\\])*\1/,
      greedy: true
    }
  })
  delete Prism.languages.go['class-name']
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFkZXJwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL2dvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSIsImZpbGUiOiJyZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX3JlZnJhY3Rvcl9nby5idW5kbGUuMTAyNjBkNmRlMTExMGZmZmQzNTcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBnb1xuZ28uZGlzcGxheU5hbWUgPSAnZ28nXG5nby5hbGlhc2VzID0gW11cbmZ1bmN0aW9uIGdvKFByaXNtKSB7XG4gIFByaXNtLmxhbmd1YWdlcy5nbyA9IFByaXNtLmxhbmd1YWdlcy5leHRlbmQoJ2NsaWtlJywge1xuICAgIGtleXdvcmQ6IC9cXGIoPzpicmVha3xjYXNlfGNoYW58Y29uc3R8Y29udGludWV8ZGVmYXVsdHxkZWZlcnxlbHNlfGZhbGx0aHJvdWdofGZvcnxmdW5jfGdvKD86dG8pP3xpZnxpbXBvcnR8aW50ZXJmYWNlfG1hcHxwYWNrYWdlfHJhbmdlfHJldHVybnxzZWxlY3R8c3RydWN0fHN3aXRjaHx0eXBlfHZhcilcXGIvLFxuICAgIGJ1aWx0aW46IC9cXGIoPzpib29sfGJ5dGV8Y29tcGxleCg/OjY0fDEyOCl8ZXJyb3J8ZmxvYXQoPzozMnw2NCl8cnVuZXxzdHJpbmd8dT9pbnQoPzo4fDE2fDMyfDY0KT98dWludHB0cnxhcHBlbmR8Y2FwfGNsb3NlfGNvbXBsZXh8Y29weXxkZWxldGV8aW1hZ3xsZW58bWFrZXxuZXd8cGFuaWN8cHJpbnQoPzpsbik/fHJlYWx8cmVjb3ZlcilcXGIvLFxuICAgIGJvb2xlYW46IC9cXGIoPzpffGlvdGF8bmlsfHRydWV8ZmFsc2UpXFxiLyxcbiAgICBvcGVyYXRvcjogL1sqXFwvJV4hPV09P3xcXCtbPStdP3wtWz0tXT98XFx8Wz18XT98Jig/Oj18JnxcXF49Pyk/fD4oPzo+PT98PSk/fDwoPzo8PT98PXwtKT98Oj18XFwuXFwuXFwuLyxcbiAgICBudW1iZXI6IC8oPzpcXGIweFthLWZcXGRdK3woPzpcXGJcXGQrXFwuP1xcZCp8XFxCXFwuXFxkKykoPzplWy0rXT9cXGQrKT8paT8vaSxcbiAgICBzdHJpbmc6IHtcbiAgICAgIHBhdHRlcm46IC8oW1wiJ2BdKShcXFxcW1xcc1xcU118KD8hXFwxKVteXFxcXF0pKlxcMS8sXG4gICAgICBncmVlZHk6IHRydWVcbiAgICB9XG4gIH0pXG4gIGRlbGV0ZSBQcmlzbS5sYW5ndWFnZXMuZ29bJ2NsYXNzLW5hbWUnXVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
(self["webpackChunkheaderproject"] = self["webpackChunkheaderproject"] || []).push([["react-syntax-highlighter_languages_refractor_nasm"],{

/***/ "./node_modules/refractor/lang/nasm.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/nasm.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";


module.exports = nasm
nasm.displayName = 'nasm'
nasm.aliases = []
function nasm(Prism) {
  Prism.languages.nasm = {
    comment: /;.*$/m,
    string: /(["'`])(?:\\.|(?!\1)[^\\\r\n])*\1/,
    label: {
      pattern: /(^\s*)[A-Za-z._?$][\w.?$@~#]*:/m,
      lookbehind: true,
      alias: 'function'
    },
    keyword: [
      /\[?BITS (?:16|32|64)\]?/,
      {
        pattern: /(^\s*)section\s*[a-zA-Z.]+:?/im,
        lookbehind: true
      },
      /(?:extern|global)[^;\r\n]*/i,
      /(?:CPU|FLOAT|DEFAULT).*$/m
    ],
    register: {
      pattern: /\b(?:st\d|[xyz]mm\d\d?|[cdt]r\d|r\d\d?[bwd]?|[er]?[abcd]x|[abcd][hl]|[er]?(?:bp|sp|si|di)|[cdefgs]s)\b/i,
      alias: 'variable'
    },
    number: /(?:\b|(?=\$))(?:0[hx][\da-f]*\.?[\da-f]+(?:p[+-]?\d+)?|\d[\da-f]+[hx]|\$\d[\da-f]*|0[oq][0-7]+|[0-7]+[oq]|0[by][01]+|[01]+[by]|0[dt]\d+|\d*\.?\d+(?:\.?e[+-]?\d+)?[dt]?)\b/i,
    operator: /[\[\]*+\-\/%<>=&|$!]/
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFkZXJwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL25hc20uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQVk7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoicmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyX2xhbmd1YWdlc19yZWZyYWN0b3JfbmFzbS5idW5kbGUuY2VhZWE2Njg2YjYxNzIwZmY3NjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBuYXNtXG5uYXNtLmRpc3BsYXlOYW1lID0gJ25hc20nXG5uYXNtLmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24gbmFzbShQcmlzbSkge1xuICBQcmlzbS5sYW5ndWFnZXMubmFzbSA9IHtcbiAgICBjb21tZW50OiAvOy4qJC9tLFxuICAgIHN0cmluZzogLyhbXCInYF0pKD86XFxcXC58KD8hXFwxKVteXFxcXFxcclxcbl0pKlxcMS8sXG4gICAgbGFiZWw6IHtcbiAgICAgIHBhdHRlcm46IC8oXlxccyopW0EtWmEtei5fPyRdW1xcdy4/JEB+I10qOi9tLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgIGFsaWFzOiAnZnVuY3Rpb24nXG4gICAgfSxcbiAgICBrZXl3b3JkOiBbXG4gICAgICAvXFxbP0JJVFMgKD86MTZ8MzJ8NjQpXFxdPy8sXG4gICAgICB7XG4gICAgICAgIHBhdHRlcm46IC8oXlxccyopc2VjdGlvblxccypbYS16QS1aLl0rOj8vaW0sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgIH0sXG4gICAgICAvKD86ZXh0ZXJufGdsb2JhbClbXjtcXHJcXG5dKi9pLFxuICAgICAgLyg/OkNQVXxGTE9BVHxERUZBVUxUKS4qJC9tXG4gICAgXSxcbiAgICByZWdpc3Rlcjoge1xuICAgICAgcGF0dGVybjogL1xcYig/OnN0XFxkfFt4eXpdbW1cXGRcXGQ/fFtjZHRdclxcZHxyXFxkXFxkP1tid2RdP3xbZXJdP1thYmNkXXh8W2FiY2RdW2hsXXxbZXJdPyg/OmJwfHNwfHNpfGRpKXxbY2RlZmdzXXMpXFxiL2ksXG4gICAgICBhbGlhczogJ3ZhcmlhYmxlJ1xuICAgIH0sXG4gICAgbnVtYmVyOiAvKD86XFxifCg/PVxcJCkpKD86MFtoeF1bXFxkYS1mXSpcXC4/W1xcZGEtZl0rKD86cFsrLV0/XFxkKyk/fFxcZFtcXGRhLWZdK1toeF18XFwkXFxkW1xcZGEtZl0qfDBbb3FdWzAtN10rfFswLTddK1tvcV18MFtieV1bMDFdK3xbMDFdK1tieV18MFtkdF1cXGQrfFxcZCpcXC4/XFxkKyg/OlxcLj9lWystXT9cXGQrKT9bZHRdPylcXGIvaSxcbiAgICBvcGVyYXRvcjogL1tcXFtcXF0qK1xcLVxcLyU8Pj0mfCQhXS9cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
(self["webpackChunkheaderproject"] = self["webpackChunkheaderproject"] || []).push([["react-syntax-highlighter_languages_refractor_bison"],{

/***/ "./node_modules/refractor/lang/bison.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/bison.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var refractorC = __webpack_require__(/*! ./c.js */ "./node_modules/refractor/lang/c.js")
module.exports = bison
bison.displayName = 'bison'
bison.aliases = []
function bison(Prism) {
  Prism.register(refractorC)
  Prism.languages.bison = Prism.languages.extend('c', {})
  Prism.languages.insertBefore('bison', 'comment', {
    bison: {
      // This should match all the beginning of the file
      // including the prologue(s), the bison declarations and
      // the grammar rules.
      pattern: /^[\s\S]*?%%[\s\S]*?%%/,
      inside: {
        c: {
          // Allow for one level of nested braces
          pattern: /%\{[\s\S]*?%\}|\{(?:\{[^}]*\}|[^{}])*\}/,
          inside: {
            delimiter: {
              pattern: /^%?\{|%?\}$/,
              alias: 'punctuation'
            },
            'bison-variable': {
              pattern: /[$@](?:<[^\s>]+>)?[\w$]+/,
              alias: 'variable',
              inside: {
                punctuation: /<|>/
              }
            },
            rest: Prism.languages.c
          }
        },
        comment: Prism.languages.c.comment,
        string: Prism.languages.c.string,
        property: /\S+(?=:)/,
        keyword: /%\w+/,
        number: {
          pattern: /(^|[^@])\b(?:0x[\da-f]+|\d+)/i,
          lookbehind: true
        },
        punctuation: /%[%?]|[|:;\[\]<>]/
      }
    }
  })
}


/***/ }),

/***/ "./node_modules/refractor/lang/c.js":
/*!******************************************!*\
  !*** ./node_modules/refractor/lang/c.js ***!
  \******************************************/
/***/ ((module) => {

"use strict";


module.exports = c
c.displayName = 'c'
c.aliases = []
function c(Prism) {
  Prism.languages.c = Prism.languages.extend('clike', {
    'class-name': {
      pattern: /(\b(?:enum|struct)\s+)\w+/,
      lookbehind: true
    },
    keyword: /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\b/,
    operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/,
    number: /(?:\b0x(?:[\da-f]+\.?[\da-f]*|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?)[ful]*/i
  })
  Prism.languages.insertBefore('c', 'string', {
    macro: {
      // allow for multiline macro definitions
      // spaces after the # character compile fine with gcc
      pattern: /(^\s*)#\s*[a-z]+(?:[^\r\n\\]|\\(?:\r\n|[\s\S]))*/im,
      lookbehind: true,
      alias: 'property',
      inside: {
        // highlight the path of the include statement as a string
        string: {
          pattern: /(#\s*include\s*)(?:<.+?>|("|')(?:\\?.)+?\2)/,
          lookbehind: true
        },
        // highlight macro directives as keywords
        directive: {
          pattern: /(#\s*)\b(?:define|defined|elif|else|endif|error|ifdef|ifndef|if|import|include|line|pragma|undef|using)\b/,
          lookbehind: true,
          alias: 'keyword'
        }
      }
    },
    // highlight predefined macros as constants
    constant: /\b(?:__FILE__|__LINE__|__DATE__|__TIME__|__TIMESTAMP__|__func__|EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|stdin|stdout|stderr)\b/
  })
  delete Prism.languages.c['boolean']
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFkZXJwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL2Jpc29uLmpzIiwid2VicGFjazovL2hlYWRlcnByb2plY3QvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2xhbmcvYy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBWTtBQUNaLGlCQUFpQixtQkFBTyxDQUFDLGtEQUFRO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0Q7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLFdBQVcsR0FBRyxLQUFLLEdBQUcsSUFBSSxLQUFLLEtBQUs7QUFDM0Q7QUFDQTtBQUNBLDZCQUE2QixLQUFLO0FBQ2xDO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULGdDQUFnQztBQUNoQztBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7QUM3Q1k7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSIsImZpbGUiOiJyZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX3JlZnJhY3Rvcl9iaXNvbi5idW5kbGUuY2VhZWE2Njg2YjYxNzIwZmY3NjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcbnZhciByZWZyYWN0b3JDID0gcmVxdWlyZSgnLi9jLmpzJylcbm1vZHVsZS5leHBvcnRzID0gYmlzb25cbmJpc29uLmRpc3BsYXlOYW1lID0gJ2Jpc29uJ1xuYmlzb24uYWxpYXNlcyA9IFtdXG5mdW5jdGlvbiBiaXNvbihQcmlzbSkge1xuICBQcmlzbS5yZWdpc3RlcihyZWZyYWN0b3JDKVxuICBQcmlzbS5sYW5ndWFnZXMuYmlzb24gPSBQcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdjJywge30pXG4gIFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ2Jpc29uJywgJ2NvbW1lbnQnLCB7XG4gICAgYmlzb246IHtcbiAgICAgIC8vIFRoaXMgc2hvdWxkIG1hdGNoIGFsbCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBmaWxlXG4gICAgICAvLyBpbmNsdWRpbmcgdGhlIHByb2xvZ3VlKHMpLCB0aGUgYmlzb24gZGVjbGFyYXRpb25zIGFuZFxuICAgICAgLy8gdGhlIGdyYW1tYXIgcnVsZXMuXG4gICAgICBwYXR0ZXJuOiAvXltcXHNcXFNdKj8lJVtcXHNcXFNdKj8lJS8sXG4gICAgICBpbnNpZGU6IHtcbiAgICAgICAgYzoge1xuICAgICAgICAgIC8vIEFsbG93IGZvciBvbmUgbGV2ZWwgb2YgbmVzdGVkIGJyYWNlc1xuICAgICAgICAgIHBhdHRlcm46IC8lXFx7W1xcc1xcU10qPyVcXH18XFx7KD86XFx7W159XSpcXH18W157fV0pKlxcfS8sXG4gICAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgICBkZWxpbWl0ZXI6IHtcbiAgICAgICAgICAgICAgcGF0dGVybjogL14lP1xce3wlP1xcfSQvLFxuICAgICAgICAgICAgICBhbGlhczogJ3B1bmN0dWF0aW9uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICdiaXNvbi12YXJpYWJsZSc6IHtcbiAgICAgICAgICAgICAgcGF0dGVybjogL1skQF0oPzo8W15cXHM+XSs+KT9bXFx3JF0rLyxcbiAgICAgICAgICAgICAgYWxpYXM6ICd2YXJpYWJsZScsXG4gICAgICAgICAgICAgIGluc2lkZToge1xuICAgICAgICAgICAgICAgIHB1bmN0dWF0aW9uOiAvPHw+L1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVzdDogUHJpc20ubGFuZ3VhZ2VzLmNcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbW1lbnQ6IFByaXNtLmxhbmd1YWdlcy5jLmNvbW1lbnQsXG4gICAgICAgIHN0cmluZzogUHJpc20ubGFuZ3VhZ2VzLmMuc3RyaW5nLFxuICAgICAgICBwcm9wZXJ0eTogL1xcUysoPz06KS8sXG4gICAgICAgIGtleXdvcmQ6IC8lXFx3Ky8sXG4gICAgICAgIG51bWJlcjoge1xuICAgICAgICAgIHBhdHRlcm46IC8oXnxbXkBdKVxcYig/OjB4W1xcZGEtZl0rfFxcZCspL2ksXG4gICAgICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBwdW5jdHVhdGlvbjogLyVbJT9dfFt8OjtcXFtcXF08Pl0vXG4gICAgICB9XG4gICAgfVxuICB9KVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gY1xuYy5kaXNwbGF5TmFtZSA9ICdjJ1xuYy5hbGlhc2VzID0gW11cbmZ1bmN0aW9uIGMoUHJpc20pIHtcbiAgUHJpc20ubGFuZ3VhZ2VzLmMgPSBQcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdjbGlrZScsIHtcbiAgICAnY2xhc3MtbmFtZSc6IHtcbiAgICAgIHBhdHRlcm46IC8oXFxiKD86ZW51bXxzdHJ1Y3QpXFxzKylcXHcrLyxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICB9LFxuICAgIGtleXdvcmQ6IC9cXGIoPzpfQWxpZ25hc3xfQWxpZ25vZnxfQXRvbWljfF9Cb29sfF9Db21wbGV4fF9HZW5lcmljfF9JbWFnaW5hcnl8X05vcmV0dXJufF9TdGF0aWNfYXNzZXJ0fF9UaHJlYWRfbG9jYWx8YXNtfHR5cGVvZnxpbmxpbmV8YXV0b3xicmVha3xjYXNlfGNoYXJ8Y29uc3R8Y29udGludWV8ZGVmYXVsdHxkb3xkb3VibGV8ZWxzZXxlbnVtfGV4dGVybnxmbG9hdHxmb3J8Z290b3xpZnxpbnR8bG9uZ3xyZWdpc3RlcnxyZXR1cm58c2hvcnR8c2lnbmVkfHNpemVvZnxzdGF0aWN8c3RydWN0fHN3aXRjaHx0eXBlZGVmfHVuaW9ufHVuc2lnbmVkfHZvaWR8dm9sYXRpbGV8d2hpbGUpXFxiLyxcbiAgICBvcGVyYXRvcjogLz4+PT98PDw9P3wtPnwoWy0rJnw6XSlcXDF8Wz86fl18Wy0rKi8lJnxeIT08Pl09Py8sXG4gICAgbnVtYmVyOiAvKD86XFxiMHgoPzpbXFxkYS1mXStcXC4/W1xcZGEtZl0qfFxcLltcXGRhLWZdKykoPzpwWystXT9cXGQrKT98KD86XFxiXFxkK1xcLj9cXGQqfFxcQlxcLlxcZCspKD86ZVsrLV0/XFxkKyk/KVtmdWxdKi9pXG4gIH0pXG4gIFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ2MnLCAnc3RyaW5nJywge1xuICAgIG1hY3JvOiB7XG4gICAgICAvLyBhbGxvdyBmb3IgbXVsdGlsaW5lIG1hY3JvIGRlZmluaXRpb25zXG4gICAgICAvLyBzcGFjZXMgYWZ0ZXIgdGhlICMgY2hhcmFjdGVyIGNvbXBpbGUgZmluZSB3aXRoIGdjY1xuICAgICAgcGF0dGVybjogLyheXFxzKikjXFxzKlthLXpdKyg/OlteXFxyXFxuXFxcXF18XFxcXCg/OlxcclxcbnxbXFxzXFxTXSkpKi9pbSxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICBhbGlhczogJ3Byb3BlcnR5JyxcbiAgICAgIGluc2lkZToge1xuICAgICAgICAvLyBoaWdobGlnaHQgdGhlIHBhdGggb2YgdGhlIGluY2x1ZGUgc3RhdGVtZW50IGFzIGEgc3RyaW5nXG4gICAgICAgIHN0cmluZzoge1xuICAgICAgICAgIHBhdHRlcm46IC8oI1xccyppbmNsdWRlXFxzKikoPzo8Lis/PnwoXCJ8JykoPzpcXFxcPy4pKz9cXDIpLyxcbiAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIC8vIGhpZ2hsaWdodCBtYWNybyBkaXJlY3RpdmVzIGFzIGtleXdvcmRzXG4gICAgICAgIGRpcmVjdGl2ZToge1xuICAgICAgICAgIHBhdHRlcm46IC8oI1xccyopXFxiKD86ZGVmaW5lfGRlZmluZWR8ZWxpZnxlbHNlfGVuZGlmfGVycm9yfGlmZGVmfGlmbmRlZnxpZnxpbXBvcnR8aW5jbHVkZXxsaW5lfHByYWdtYXx1bmRlZnx1c2luZylcXGIvLFxuICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgICAgYWxpYXM6ICdrZXl3b3JkJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICAvLyBoaWdobGlnaHQgcHJlZGVmaW5lZCBtYWNyb3MgYXMgY29uc3RhbnRzXG4gICAgY29uc3RhbnQ6IC9cXGIoPzpfX0ZJTEVfX3xfX0xJTkVfX3xfX0RBVEVfX3xfX1RJTUVfX3xfX1RJTUVTVEFNUF9ffF9fZnVuY19ffEVPRnxOVUxMfFNFRUtfQ1VSfFNFRUtfRU5EfFNFRUtfU0VUfHN0ZGlufHN0ZG91dHxzdGRlcnIpXFxiL1xuICB9KVxuICBkZWxldGUgUHJpc20ubGFuZ3VhZ2VzLmNbJ2Jvb2xlYW4nXVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
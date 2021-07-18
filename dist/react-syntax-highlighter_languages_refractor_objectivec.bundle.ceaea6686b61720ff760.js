(self["webpackChunkheaderproject"] = self["webpackChunkheaderproject"] || []).push([["react-syntax-highlighter_languages_refractor_objectivec"],{

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


/***/ }),

/***/ "./node_modules/refractor/lang/objectivec.js":
/*!***************************************************!*\
  !*** ./node_modules/refractor/lang/objectivec.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var refractorC = __webpack_require__(/*! ./c.js */ "./node_modules/refractor/lang/c.js")
module.exports = objectivec
objectivec.displayName = 'objectivec'
objectivec.aliases = []
function objectivec(Prism) {
  Prism.register(refractorC)
  Prism.languages.objectivec = Prism.languages.extend('c', {
    keyword: /\b(?:asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while|in|self|super)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
    string: /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|@"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
    operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/
  })
  delete Prism.languages.objectivec['class-name']
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFkZXJwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL2MuanMiLCJ3ZWJwYWNrOi8vaGVhZGVycHJvamVjdC8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy9vYmplY3RpdmVjLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3hDWTtBQUNaLGlCQUFpQixtQkFBTyxDQUFDLGtEQUFRO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBIiwiZmlsZSI6InJlYWN0LXN5bnRheC1oaWdobGlnaHRlcl9sYW5ndWFnZXNfcmVmcmFjdG9yX29iamVjdGl2ZWMuYnVuZGxlLmNlYWVhNjY4NmI2MTcyMGZmNzYwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gY1xuYy5kaXNwbGF5TmFtZSA9ICdjJ1xuYy5hbGlhc2VzID0gW11cbmZ1bmN0aW9uIGMoUHJpc20pIHtcbiAgUHJpc20ubGFuZ3VhZ2VzLmMgPSBQcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdjbGlrZScsIHtcbiAgICAnY2xhc3MtbmFtZSc6IHtcbiAgICAgIHBhdHRlcm46IC8oXFxiKD86ZW51bXxzdHJ1Y3QpXFxzKylcXHcrLyxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICB9LFxuICAgIGtleXdvcmQ6IC9cXGIoPzpfQWxpZ25hc3xfQWxpZ25vZnxfQXRvbWljfF9Cb29sfF9Db21wbGV4fF9HZW5lcmljfF9JbWFnaW5hcnl8X05vcmV0dXJufF9TdGF0aWNfYXNzZXJ0fF9UaHJlYWRfbG9jYWx8YXNtfHR5cGVvZnxpbmxpbmV8YXV0b3xicmVha3xjYXNlfGNoYXJ8Y29uc3R8Y29udGludWV8ZGVmYXVsdHxkb3xkb3VibGV8ZWxzZXxlbnVtfGV4dGVybnxmbG9hdHxmb3J8Z290b3xpZnxpbnR8bG9uZ3xyZWdpc3RlcnxyZXR1cm58c2hvcnR8c2lnbmVkfHNpemVvZnxzdGF0aWN8c3RydWN0fHN3aXRjaHx0eXBlZGVmfHVuaW9ufHVuc2lnbmVkfHZvaWR8dm9sYXRpbGV8d2hpbGUpXFxiLyxcbiAgICBvcGVyYXRvcjogLz4+PT98PDw9P3wtPnwoWy0rJnw6XSlcXDF8Wz86fl18Wy0rKi8lJnxeIT08Pl09Py8sXG4gICAgbnVtYmVyOiAvKD86XFxiMHgoPzpbXFxkYS1mXStcXC4/W1xcZGEtZl0qfFxcLltcXGRhLWZdKykoPzpwWystXT9cXGQrKT98KD86XFxiXFxkK1xcLj9cXGQqfFxcQlxcLlxcZCspKD86ZVsrLV0/XFxkKyk/KVtmdWxdKi9pXG4gIH0pXG4gIFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ2MnLCAnc3RyaW5nJywge1xuICAgIG1hY3JvOiB7XG4gICAgICAvLyBhbGxvdyBmb3IgbXVsdGlsaW5lIG1hY3JvIGRlZmluaXRpb25zXG4gICAgICAvLyBzcGFjZXMgYWZ0ZXIgdGhlICMgY2hhcmFjdGVyIGNvbXBpbGUgZmluZSB3aXRoIGdjY1xuICAgICAgcGF0dGVybjogLyheXFxzKikjXFxzKlthLXpdKyg/OlteXFxyXFxuXFxcXF18XFxcXCg/OlxcclxcbnxbXFxzXFxTXSkpKi9pbSxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICBhbGlhczogJ3Byb3BlcnR5JyxcbiAgICAgIGluc2lkZToge1xuICAgICAgICAvLyBoaWdobGlnaHQgdGhlIHBhdGggb2YgdGhlIGluY2x1ZGUgc3RhdGVtZW50IGFzIGEgc3RyaW5nXG4gICAgICAgIHN0cmluZzoge1xuICAgICAgICAgIHBhdHRlcm46IC8oI1xccyppbmNsdWRlXFxzKikoPzo8Lis/PnwoXCJ8JykoPzpcXFxcPy4pKz9cXDIpLyxcbiAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIC8vIGhpZ2hsaWdodCBtYWNybyBkaXJlY3RpdmVzIGFzIGtleXdvcmRzXG4gICAgICAgIGRpcmVjdGl2ZToge1xuICAgICAgICAgIHBhdHRlcm46IC8oI1xccyopXFxiKD86ZGVmaW5lfGRlZmluZWR8ZWxpZnxlbHNlfGVuZGlmfGVycm9yfGlmZGVmfGlmbmRlZnxpZnxpbXBvcnR8aW5jbHVkZXxsaW5lfHByYWdtYXx1bmRlZnx1c2luZylcXGIvLFxuICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgICAgYWxpYXM6ICdrZXl3b3JkJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICAvLyBoaWdobGlnaHQgcHJlZGVmaW5lZCBtYWNyb3MgYXMgY29uc3RhbnRzXG4gICAgY29uc3RhbnQ6IC9cXGIoPzpfX0ZJTEVfX3xfX0xJTkVfX3xfX0RBVEVfX3xfX1RJTUVfX3xfX1RJTUVTVEFNUF9ffF9fZnVuY19ffEVPRnxOVUxMfFNFRUtfQ1VSfFNFRUtfRU5EfFNFRUtfU0VUfHN0ZGlufHN0ZG91dHxzdGRlcnIpXFxiL1xuICB9KVxuICBkZWxldGUgUHJpc20ubGFuZ3VhZ2VzLmNbJ2Jvb2xlYW4nXVxufVxuIiwiJ3VzZSBzdHJpY3QnXG52YXIgcmVmcmFjdG9yQyA9IHJlcXVpcmUoJy4vYy5qcycpXG5tb2R1bGUuZXhwb3J0cyA9IG9iamVjdGl2ZWNcbm9iamVjdGl2ZWMuZGlzcGxheU5hbWUgPSAnb2JqZWN0aXZlYydcbm9iamVjdGl2ZWMuYWxpYXNlcyA9IFtdXG5mdW5jdGlvbiBvYmplY3RpdmVjKFByaXNtKSB7XG4gIFByaXNtLnJlZ2lzdGVyKHJlZnJhY3RvckMpXG4gIFByaXNtLmxhbmd1YWdlcy5vYmplY3RpdmVjID0gUHJpc20ubGFuZ3VhZ2VzLmV4dGVuZCgnYycsIHtcbiAgICBrZXl3b3JkOiAvXFxiKD86YXNtfHR5cGVvZnxpbmxpbmV8YXV0b3xicmVha3xjYXNlfGNoYXJ8Y29uc3R8Y29udGludWV8ZGVmYXVsdHxkb3xkb3VibGV8ZWxzZXxlbnVtfGV4dGVybnxmbG9hdHxmb3J8Z290b3xpZnxpbnR8bG9uZ3xyZWdpc3RlcnxyZXR1cm58c2hvcnR8c2lnbmVkfHNpemVvZnxzdGF0aWN8c3RydWN0fHN3aXRjaHx0eXBlZGVmfHVuaW9ufHVuc2lnbmVkfHZvaWR8dm9sYXRpbGV8d2hpbGV8aW58c2VsZnxzdXBlcilcXGJ8KD86QGludGVyZmFjZXxAZW5kfEBpbXBsZW1lbnRhdGlvbnxAcHJvdG9jb2x8QGNsYXNzfEBwdWJsaWN8QHByb3RlY3RlZHxAcHJpdmF0ZXxAcHJvcGVydHl8QHRyeXxAY2F0Y2h8QGZpbmFsbHl8QHRocm93fEBzeW50aGVzaXplfEBkeW5hbWljfEBzZWxlY3RvcilcXGIvLFxuICAgIHN0cmluZzogLyhcInwnKSg/OlxcXFwoPzpcXHJcXG58W1xcc1xcU10pfCg/IVxcMSlbXlxcXFxcXHJcXG5dKSpcXDF8QFwiKD86XFxcXCg/OlxcclxcbnxbXFxzXFxTXSl8W15cIlxcXFxcXHJcXG5dKSpcIi8sXG4gICAgb3BlcmF0b3I6IC8tWy0+XT98XFwrXFwrP3whPT98PDw/PT98Pj4/PT98PT0/fCYmP3xcXHxcXHw/fFt+XiU/KlxcL0BdL1xuICB9KVxuICBkZWxldGUgUHJpc20ubGFuZ3VhZ2VzLm9iamVjdGl2ZWNbJ2NsYXNzLW5hbWUnXVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
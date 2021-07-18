(self["webpackChunkheaderproject"] = self["webpackChunkheaderproject"] || []).push([["react-syntax-highlighter_languages_refractor_pure"],{

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

/***/ "./node_modules/refractor/lang/pure.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/pure.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var refractorC = __webpack_require__(/*! ./c.js */ "./node_modules/refractor/lang/c.js")
module.exports = pure
pure.displayName = 'pure'
pure.aliases = []
function pure(Prism) {
  Prism.register(refractorC)
  ;(function(Prism) {
    Prism.languages.pure = {
      comment: [
        {
          pattern: /(^|[^\\])\/\*[\s\S]*?\*\//,
          lookbehind: true
        },
        {
          pattern: /(^|[^\\:])\/\/.*/,
          lookbehind: true
        },
        /#!.+/
      ],
      'inline-lang': {
        pattern: /%<[\s\S]+?%>/,
        greedy: true,
        inside: {
          lang: {
            pattern: /(^%< *)-\*-.+?-\*-/,
            lookbehind: true,
            alias: 'comment'
          },
          delimiter: {
            pattern: /^%<.*|%>$/,
            alias: 'punctuation'
          }
        }
      },
      string: {
        pattern: /"(?:\\.|[^"\\\r\n])*"/,
        greedy: true
      },
      number: {
        // The look-behind prevents wrong highlighting of the .. operator
        pattern: /((?:\.\.)?)(?:\b(?:inf|nan)\b|\b0x[\da-f]+|(?:\b(?:0b)?\d+(?:\.\d)?|\B\.\d)\d*(?:e[+-]?\d+)?L?)/i,
        lookbehind: true
      },
      keyword: /\b(?:ans|break|bt|case|catch|cd|clear|const|def|del|dump|else|end|exit|extern|false|force|help|if|infix[lr]?|interface|let|ls|mem|namespace|nonfix|NULL|of|otherwise|outfix|override|postfix|prefix|private|public|pwd|quit|run|save|show|stats|then|throw|trace|true|type|underride|using|when|with)\b/,
      function: /\b(?:abs|add_(?:(?:fundef|interface|macdef|typedef)(?:_at)?|addr|constdef|vardef)|all|any|applp?|arity|bigintp?|blob(?:_crc|_size|p)?|boolp?|byte_(?:matrix|pointer)|byte_c?string(?:_pointer)?|calloc|cat|catmap|ceil|char[ps]?|check_ptrtag|chr|clear_sentry|clearsym|closurep?|cmatrixp?|cols?|colcat(?:map)?|colmap|colrev|colvector(?:p|seq)?|complex(?:_float_(?:matrix|pointer)|_matrix(?:_view)?|_pointer|p)?|conj|cookedp?|cst|cstring(?:_(?:dup|list|vector))?|curry3?|cyclen?|del_(?:constdef|fundef|interface|macdef|typedef|vardef)|delete|diag(?:mat)?|dim|dmatrixp?|do|double(?:_matrix(?:_view)?|_pointer|p)?|dowith3?|drop|dropwhile|eval(?:cmd)?|exactp|filter|fix|fixity|flip|float(?:_matrix|_pointer)|floor|fold[lr]1?|frac|free|funp?|functionp?|gcd|get(?:_(?:byte|constdef|double|float|fundef|int(?:64)?|interface(?:_typedef)?|long|macdef|pointer|ptrtag|short|sentry|string|typedef|vardef))?|globsym|hash|head|id|im|imatrixp?|index|inexactp|infp|init|insert|int(?:_matrix(?:_view)?|_pointer|p)?|int64_(?:matrix|pointer)|integerp?|iteraten?|iterwhile|join|keys?|lambdap?|last(?:err(?:pos)?)?|lcd|list[2p]?|listmap|make_ptrtag|malloc|map|matcat|matrixp?|max|member|min|nanp|nargs|nmatrixp?|null|numberp?|ord|pack(?:ed)?|pointer(?:_cast|_tag|_type|p)?|pow|pred|ptrtag|put(?:_(?:byte|double|float|int(?:64)?|long|pointer|short|string))?|rationalp?|re|realp?|realloc|recordp?|redim|reduce(?:_with)?|refp?|repeatn?|reverse|rlistp?|round|rows?|rowcat(?:map)?|rowmap|rowrev|rowvector(?:p|seq)?|same|scan[lr]1?|sentry|sgn|short_(?:matrix|pointer)|slice|smatrixp?|sort|split|str|strcat|stream|stride|string(?:_(?:dup|list|vector)|p)?|subdiag(?:mat)?|submat|subseq2?|substr|succ|supdiag(?:mat)?|symbolp?|tail|take|takewhile|thunkp?|transpose|trunc|tuplep?|typep|ubyte|uint(?:64)?|ulong|uncurry3?|unref|unzip3?|update|ushort|vals?|varp?|vector(?:p|seq)?|void|zip3?|zipwith3?)\b/,
      special: {
        pattern: /\b__[a-z]+__\b/i,
        alias: 'builtin'
      },
      // Any combination of operator chars can be an operator
      operator: /(?=\b_|[^_])[!"#$%&'*+,\-.\/:<=>?@\\^_`|~\u00a1-\u00bf\u00d7-\u00f7\u20d0-\u2bff]+|\b(?:and|div|mod|not|or)\b/,
      // FIXME: How can we prevent | and , to be highlighted as operator when they are used alone?
      punctuation: /[(){}\[\];,|]/
    }
    var inlineLanguages = [
      'c',
      {
        lang: 'c++',
        alias: 'cpp'
      },
      'fortran'
    ]
    var inlineLanguageRe = /%< *-\*- *{lang}\d* *-\*-[\s\S]+?%>/.source
    inlineLanguages.forEach(function(lang) {
      var alias = lang
      if (typeof lang !== 'string') {
        alias = lang.alias
        lang = lang.lang
      }
      if (Prism.languages[alias]) {
        var o = {}
        o['inline-lang-' + alias] = {
          pattern: RegExp(
            inlineLanguageRe.replace(
              '{lang}',
              lang.replace(/([.+*?\/\\(){}\[\]])/g, '\\$1')
            ),
            'i'
          ),
          inside: Prism.util.clone(Prism.languages.pure['inline-lang'].inside)
        }
        o['inline-lang-' + alias].inside.rest = Prism.util.clone(
          Prism.languages[alias]
        )
        Prism.languages.insertBefore('pure', 'inline-lang', o)
      }
    }) // C is the default inline language
    if (Prism.languages.c) {
      Prism.languages.pure['inline-lang'].inside.rest = Prism.util.clone(
        Prism.languages.c
      )
    }
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFkZXJwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL2MuanMiLCJ3ZWJwYWNrOi8vaGVhZGVycHJvamVjdC8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy9wdXJlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3hDWTtBQUNaLGlCQUFpQixtQkFBTyxDQUFDLGtEQUFRO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsS0FBSztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLHVDQUF1QyxLQUFLO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsS0FBSztBQUNyQiwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCIsImZpbGUiOiJyZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX3JlZnJhY3Rvcl9wdXJlLmJ1bmRsZS4xMDI2MGQ2ZGUxMTEwZmZmZDM1Ny5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNcbmMuZGlzcGxheU5hbWUgPSAnYydcbmMuYWxpYXNlcyA9IFtdXG5mdW5jdGlvbiBjKFByaXNtKSB7XG4gIFByaXNtLmxhbmd1YWdlcy5jID0gUHJpc20ubGFuZ3VhZ2VzLmV4dGVuZCgnY2xpa2UnLCB7XG4gICAgJ2NsYXNzLW5hbWUnOiB7XG4gICAgICBwYXR0ZXJuOiAvKFxcYig/OmVudW18c3RydWN0KVxccyspXFx3Ky8sXG4gICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgfSxcbiAgICBrZXl3b3JkOiAvXFxiKD86X0FsaWduYXN8X0FsaWdub2Z8X0F0b21pY3xfQm9vbHxfQ29tcGxleHxfR2VuZXJpY3xfSW1hZ2luYXJ5fF9Ob3JldHVybnxfU3RhdGljX2Fzc2VydHxfVGhyZWFkX2xvY2FsfGFzbXx0eXBlb2Z8aW5saW5lfGF1dG98YnJlYWt8Y2FzZXxjaGFyfGNvbnN0fGNvbnRpbnVlfGRlZmF1bHR8ZG98ZG91YmxlfGVsc2V8ZW51bXxleHRlcm58ZmxvYXR8Zm9yfGdvdG98aWZ8aW50fGxvbmd8cmVnaXN0ZXJ8cmV0dXJufHNob3J0fHNpZ25lZHxzaXplb2Z8c3RhdGljfHN0cnVjdHxzd2l0Y2h8dHlwZWRlZnx1bmlvbnx1bnNpZ25lZHx2b2lkfHZvbGF0aWxlfHdoaWxlKVxcYi8sXG4gICAgb3BlcmF0b3I6IC8+Pj0/fDw8PT98LT58KFstKyZ8Ol0pXFwxfFs/On5dfFstKyovJSZ8XiE9PD5dPT8vLFxuICAgIG51bWJlcjogLyg/OlxcYjB4KD86W1xcZGEtZl0rXFwuP1tcXGRhLWZdKnxcXC5bXFxkYS1mXSspKD86cFsrLV0/XFxkKyk/fCg/OlxcYlxcZCtcXC4/XFxkKnxcXEJcXC5cXGQrKSg/OmVbKy1dP1xcZCspPylbZnVsXSovaVxuICB9KVxuICBQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdjJywgJ3N0cmluZycsIHtcbiAgICBtYWNybzoge1xuICAgICAgLy8gYWxsb3cgZm9yIG11bHRpbGluZSBtYWNybyBkZWZpbml0aW9uc1xuICAgICAgLy8gc3BhY2VzIGFmdGVyIHRoZSAjIGNoYXJhY3RlciBjb21waWxlIGZpbmUgd2l0aCBnY2NcbiAgICAgIHBhdHRlcm46IC8oXlxccyopI1xccypbYS16XSsoPzpbXlxcclxcblxcXFxdfFxcXFwoPzpcXHJcXG58W1xcc1xcU10pKSovaW0sXG4gICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgYWxpYXM6ICdwcm9wZXJ0eScsXG4gICAgICBpbnNpZGU6IHtcbiAgICAgICAgLy8gaGlnaGxpZ2h0IHRoZSBwYXRoIG9mIHRoZSBpbmNsdWRlIHN0YXRlbWVudCBhcyBhIHN0cmluZ1xuICAgICAgICBzdHJpbmc6IHtcbiAgICAgICAgICBwYXR0ZXJuOiAvKCNcXHMqaW5jbHVkZVxccyopKD86PC4rPz58KFwifCcpKD86XFxcXD8uKSs/XFwyKS8sXG4gICAgICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICAvLyBoaWdobGlnaHQgbWFjcm8gZGlyZWN0aXZlcyBhcyBrZXl3b3Jkc1xuICAgICAgICBkaXJlY3RpdmU6IHtcbiAgICAgICAgICBwYXR0ZXJuOiAvKCNcXHMqKVxcYig/OmRlZmluZXxkZWZpbmVkfGVsaWZ8ZWxzZXxlbmRpZnxlcnJvcnxpZmRlZnxpZm5kZWZ8aWZ8aW1wb3J0fGluY2x1ZGV8bGluZXxwcmFnbWF8dW5kZWZ8dXNpbmcpXFxiLyxcbiAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICAgIGFsaWFzOiAna2V5d29yZCdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgLy8gaGlnaGxpZ2h0IHByZWRlZmluZWQgbWFjcm9zIGFzIGNvbnN0YW50c1xuICAgIGNvbnN0YW50OiAvXFxiKD86X19GSUxFX198X19MSU5FX198X19EQVRFX198X19USU1FX198X19USU1FU1RBTVBfX3xfX2Z1bmNfX3xFT0Z8TlVMTHxTRUVLX0NVUnxTRUVLX0VORHxTRUVLX1NFVHxzdGRpbnxzdGRvdXR8c3RkZXJyKVxcYi9cbiAgfSlcbiAgZGVsZXRlIFByaXNtLmxhbmd1YWdlcy5jWydib29sZWFuJ11cbn1cbiIsIid1c2Ugc3RyaWN0J1xudmFyIHJlZnJhY3RvckMgPSByZXF1aXJlKCcuL2MuanMnKVxubW9kdWxlLmV4cG9ydHMgPSBwdXJlXG5wdXJlLmRpc3BsYXlOYW1lID0gJ3B1cmUnXG5wdXJlLmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24gcHVyZShQcmlzbSkge1xuICBQcmlzbS5yZWdpc3RlcihyZWZyYWN0b3JDKVxuICA7KGZ1bmN0aW9uKFByaXNtKSB7XG4gICAgUHJpc20ubGFuZ3VhZ2VzLnB1cmUgPSB7XG4gICAgICBjb21tZW50OiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwYXR0ZXJuOiAvKF58W15cXFxcXSlcXC9cXCpbXFxzXFxTXSo/XFwqXFwvLyxcbiAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYXR0ZXJuOiAvKF58W15cXFxcOl0pXFwvXFwvLiovLFxuICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgLyMhLisvXG4gICAgICBdLFxuICAgICAgJ2lubGluZS1sYW5nJzoge1xuICAgICAgICBwYXR0ZXJuOiAvJTxbXFxzXFxTXSs/JT4vLFxuICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgICAgIGluc2lkZToge1xuICAgICAgICAgIGxhbmc6IHtcbiAgICAgICAgICAgIHBhdHRlcm46IC8oXiU8ICopLVxcKi0uKz8tXFwqLS8sXG4gICAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICAgICAgYWxpYXM6ICdjb21tZW50J1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZGVsaW1pdGVyOiB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvXiU8Lip8JT4kLyxcbiAgICAgICAgICAgIGFsaWFzOiAncHVuY3R1YXRpb24nXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgc3RyaW5nOiB7XG4gICAgICAgIHBhdHRlcm46IC9cIig/OlxcXFwufFteXCJcXFxcXFxyXFxuXSkqXCIvLFxuICAgICAgICBncmVlZHk6IHRydWVcbiAgICAgIH0sXG4gICAgICBudW1iZXI6IHtcbiAgICAgICAgLy8gVGhlIGxvb2stYmVoaW5kIHByZXZlbnRzIHdyb25nIGhpZ2hsaWdodGluZyBvZiB0aGUgLi4gb3BlcmF0b3JcbiAgICAgICAgcGF0dGVybjogLygoPzpcXC5cXC4pPykoPzpcXGIoPzppbmZ8bmFuKVxcYnxcXGIweFtcXGRhLWZdK3woPzpcXGIoPzowYik/XFxkKyg/OlxcLlxcZCk/fFxcQlxcLlxcZClcXGQqKD86ZVsrLV0/XFxkKyk/TD8pL2ksXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgIH0sXG4gICAgICBrZXl3b3JkOiAvXFxiKD86YW5zfGJyZWFrfGJ0fGNhc2V8Y2F0Y2h8Y2R8Y2xlYXJ8Y29uc3R8ZGVmfGRlbHxkdW1wfGVsc2V8ZW5kfGV4aXR8ZXh0ZXJufGZhbHNlfGZvcmNlfGhlbHB8aWZ8aW5maXhbbHJdP3xpbnRlcmZhY2V8bGV0fGxzfG1lbXxuYW1lc3BhY2V8bm9uZml4fE5VTEx8b2Z8b3RoZXJ3aXNlfG91dGZpeHxvdmVycmlkZXxwb3N0Zml4fHByZWZpeHxwcml2YXRlfHB1YmxpY3xwd2R8cXVpdHxydW58c2F2ZXxzaG93fHN0YXRzfHRoZW58dGhyb3d8dHJhY2V8dHJ1ZXx0eXBlfHVuZGVycmlkZXx1c2luZ3x3aGVufHdpdGgpXFxiLyxcbiAgICAgIGZ1bmN0aW9uOiAvXFxiKD86YWJzfGFkZF8oPzooPzpmdW5kZWZ8aW50ZXJmYWNlfG1hY2RlZnx0eXBlZGVmKSg/Ol9hdCk/fGFkZHJ8Y29uc3RkZWZ8dmFyZGVmKXxhbGx8YW55fGFwcGxwP3xhcml0eXxiaWdpbnRwP3xibG9iKD86X2NyY3xfc2l6ZXxwKT98Ym9vbHA/fGJ5dGVfKD86bWF0cml4fHBvaW50ZXIpfGJ5dGVfYz9zdHJpbmcoPzpfcG9pbnRlcik/fGNhbGxvY3xjYXR8Y2F0bWFwfGNlaWx8Y2hhcltwc10/fGNoZWNrX3B0cnRhZ3xjaHJ8Y2xlYXJfc2VudHJ5fGNsZWFyc3ltfGNsb3N1cmVwP3xjbWF0cml4cD98Y29scz98Y29sY2F0KD86bWFwKT98Y29sbWFwfGNvbHJldnxjb2x2ZWN0b3IoPzpwfHNlcSk/fGNvbXBsZXgoPzpfZmxvYXRfKD86bWF0cml4fHBvaW50ZXIpfF9tYXRyaXgoPzpfdmlldyk/fF9wb2ludGVyfHApP3xjb25qfGNvb2tlZHA/fGNzdHxjc3RyaW5nKD86Xyg/OmR1cHxsaXN0fHZlY3RvcikpP3xjdXJyeTM/fGN5Y2xlbj98ZGVsXyg/OmNvbnN0ZGVmfGZ1bmRlZnxpbnRlcmZhY2V8bWFjZGVmfHR5cGVkZWZ8dmFyZGVmKXxkZWxldGV8ZGlhZyg/Om1hdCk/fGRpbXxkbWF0cml4cD98ZG98ZG91YmxlKD86X21hdHJpeCg/Ol92aWV3KT98X3BvaW50ZXJ8cCk/fGRvd2l0aDM/fGRyb3B8ZHJvcHdoaWxlfGV2YWwoPzpjbWQpP3xleGFjdHB8ZmlsdGVyfGZpeHxmaXhpdHl8ZmxpcHxmbG9hdCg/Ol9tYXRyaXh8X3BvaW50ZXIpfGZsb29yfGZvbGRbbHJdMT98ZnJhY3xmcmVlfGZ1bnA/fGZ1bmN0aW9ucD98Z2NkfGdldCg/Ol8oPzpieXRlfGNvbnN0ZGVmfGRvdWJsZXxmbG9hdHxmdW5kZWZ8aW50KD86NjQpP3xpbnRlcmZhY2UoPzpfdHlwZWRlZik/fGxvbmd8bWFjZGVmfHBvaW50ZXJ8cHRydGFnfHNob3J0fHNlbnRyeXxzdHJpbmd8dHlwZWRlZnx2YXJkZWYpKT98Z2xvYnN5bXxoYXNofGhlYWR8aWR8aW18aW1hdHJpeHA/fGluZGV4fGluZXhhY3RwfGluZnB8aW5pdHxpbnNlcnR8aW50KD86X21hdHJpeCg/Ol92aWV3KT98X3BvaW50ZXJ8cCk/fGludDY0Xyg/Om1hdHJpeHxwb2ludGVyKXxpbnRlZ2VycD98aXRlcmF0ZW4/fGl0ZXJ3aGlsZXxqb2lufGtleXM/fGxhbWJkYXA/fGxhc3QoPzplcnIoPzpwb3MpPyk/fGxjZHxsaXN0WzJwXT98bGlzdG1hcHxtYWtlX3B0cnRhZ3xtYWxsb2N8bWFwfG1hdGNhdHxtYXRyaXhwP3xtYXh8bWVtYmVyfG1pbnxuYW5wfG5hcmdzfG5tYXRyaXhwP3xudWxsfG51bWJlcnA/fG9yZHxwYWNrKD86ZWQpP3xwb2ludGVyKD86X2Nhc3R8X3RhZ3xfdHlwZXxwKT98cG93fHByZWR8cHRydGFnfHB1dCg/Ol8oPzpieXRlfGRvdWJsZXxmbG9hdHxpbnQoPzo2NCk/fGxvbmd8cG9pbnRlcnxzaG9ydHxzdHJpbmcpKT98cmF0aW9uYWxwP3xyZXxyZWFscD98cmVhbGxvY3xyZWNvcmRwP3xyZWRpbXxyZWR1Y2UoPzpfd2l0aCk/fHJlZnA/fHJlcGVhdG4/fHJldmVyc2V8cmxpc3RwP3xyb3VuZHxyb3dzP3xyb3djYXQoPzptYXApP3xyb3dtYXB8cm93cmV2fHJvd3ZlY3Rvcig/OnB8c2VxKT98c2FtZXxzY2FuW2xyXTE/fHNlbnRyeXxzZ258c2hvcnRfKD86bWF0cml4fHBvaW50ZXIpfHNsaWNlfHNtYXRyaXhwP3xzb3J0fHNwbGl0fHN0cnxzdHJjYXR8c3RyZWFtfHN0cmlkZXxzdHJpbmcoPzpfKD86ZHVwfGxpc3R8dmVjdG9yKXxwKT98c3ViZGlhZyg/Om1hdCk/fHN1Ym1hdHxzdWJzZXEyP3xzdWJzdHJ8c3VjY3xzdXBkaWFnKD86bWF0KT98c3ltYm9scD98dGFpbHx0YWtlfHRha2V3aGlsZXx0aHVua3A/fHRyYW5zcG9zZXx0cnVuY3x0dXBsZXA/fHR5cGVwfHVieXRlfHVpbnQoPzo2NCk/fHVsb25nfHVuY3VycnkzP3x1bnJlZnx1bnppcDM/fHVwZGF0ZXx1c2hvcnR8dmFscz98dmFycD98dmVjdG9yKD86cHxzZXEpP3x2b2lkfHppcDM/fHppcHdpdGgzPylcXGIvLFxuICAgICAgc3BlY2lhbDoge1xuICAgICAgICBwYXR0ZXJuOiAvXFxiX19bYS16XStfX1xcYi9pLFxuICAgICAgICBhbGlhczogJ2J1aWx0aW4nXG4gICAgICB9LFxuICAgICAgLy8gQW55IGNvbWJpbmF0aW9uIG9mIG9wZXJhdG9yIGNoYXJzIGNhbiBiZSBhbiBvcGVyYXRvclxuICAgICAgb3BlcmF0b3I6IC8oPz1cXGJffFteX10pWyFcIiMkJSYnKissXFwtLlxcLzo8PT4/QFxcXFxeX2B8flxcdTAwYTEtXFx1MDBiZlxcdTAwZDctXFx1MDBmN1xcdTIwZDAtXFx1MmJmZl0rfFxcYig/OmFuZHxkaXZ8bW9kfG5vdHxvcilcXGIvLFxuICAgICAgLy8gRklYTUU6IEhvdyBjYW4gd2UgcHJldmVudCB8IGFuZCAsIHRvIGJlIGhpZ2hsaWdodGVkIGFzIG9wZXJhdG9yIHdoZW4gdGhleSBhcmUgdXNlZCBhbG9uZT9cbiAgICAgIHB1bmN0dWF0aW9uOiAvWygpe31cXFtcXF07LHxdL1xuICAgIH1cbiAgICB2YXIgaW5saW5lTGFuZ3VhZ2VzID0gW1xuICAgICAgJ2MnLFxuICAgICAge1xuICAgICAgICBsYW5nOiAnYysrJyxcbiAgICAgICAgYWxpYXM6ICdjcHAnXG4gICAgICB9LFxuICAgICAgJ2ZvcnRyYW4nXG4gICAgXVxuICAgIHZhciBpbmxpbmVMYW5ndWFnZVJlID0gLyU8ICotXFwqLSAqe2xhbmd9XFxkKiAqLVxcKi1bXFxzXFxTXSs/JT4vLnNvdXJjZVxuICAgIGlubGluZUxhbmd1YWdlcy5mb3JFYWNoKGZ1bmN0aW9uKGxhbmcpIHtcbiAgICAgIHZhciBhbGlhcyA9IGxhbmdcbiAgICAgIGlmICh0eXBlb2YgbGFuZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgYWxpYXMgPSBsYW5nLmFsaWFzXG4gICAgICAgIGxhbmcgPSBsYW5nLmxhbmdcbiAgICAgIH1cbiAgICAgIGlmIChQcmlzbS5sYW5ndWFnZXNbYWxpYXNdKSB7XG4gICAgICAgIHZhciBvID0ge31cbiAgICAgICAgb1snaW5saW5lLWxhbmctJyArIGFsaWFzXSA9IHtcbiAgICAgICAgICBwYXR0ZXJuOiBSZWdFeHAoXG4gICAgICAgICAgICBpbmxpbmVMYW5ndWFnZVJlLnJlcGxhY2UoXG4gICAgICAgICAgICAgICd7bGFuZ30nLFxuICAgICAgICAgICAgICBsYW5nLnJlcGxhY2UoLyhbLisqP1xcL1xcXFwoKXt9XFxbXFxdXSkvZywgJ1xcXFwkMScpXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgJ2knXG4gICAgICAgICAgKSxcbiAgICAgICAgICBpbnNpZGU6IFByaXNtLnV0aWwuY2xvbmUoUHJpc20ubGFuZ3VhZ2VzLnB1cmVbJ2lubGluZS1sYW5nJ10uaW5zaWRlKVxuICAgICAgICB9XG4gICAgICAgIG9bJ2lubGluZS1sYW5nLScgKyBhbGlhc10uaW5zaWRlLnJlc3QgPSBQcmlzbS51dGlsLmNsb25lKFxuICAgICAgICAgIFByaXNtLmxhbmd1YWdlc1thbGlhc11cbiAgICAgICAgKVxuICAgICAgICBQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdwdXJlJywgJ2lubGluZS1sYW5nJywgbylcbiAgICAgIH1cbiAgICB9KSAvLyBDIGlzIHRoZSBkZWZhdWx0IGlubGluZSBsYW5ndWFnZVxuICAgIGlmIChQcmlzbS5sYW5ndWFnZXMuYykge1xuICAgICAgUHJpc20ubGFuZ3VhZ2VzLnB1cmVbJ2lubGluZS1sYW5nJ10uaW5zaWRlLnJlc3QgPSBQcmlzbS51dGlsLmNsb25lKFxuICAgICAgICBQcmlzbS5sYW5ndWFnZXMuY1xuICAgICAgKVxuICAgIH1cbiAgfSkoUHJpc20pXG59XG4iXSwic291cmNlUm9vdCI6IiJ9
(self["webpackChunkheaderproject"] = self["webpackChunkheaderproject"] || []).push([["react-syntax-highlighter_languages_refractor_scala"],{

/***/ "./node_modules/refractor/lang/java.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/java.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";


module.exports = java
java.displayName = 'java'
java.aliases = []
function java(Prism) {
  ;(function(Prism) {
    var keywords = /\b(?:abstract|continue|for|new|switch|assert|default|goto|package|synchronized|boolean|do|if|private|this|break|double|implements|protected|throw|byte|else|import|public|throws|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|final|interface|static|void|class|finally|long|strictfp|volatile|const|float|native|super|while|var|null|exports|module|open|opens|provides|requires|to|transitive|uses|with)\b/ // based on the java naming conventions
    var className = /\b[A-Z](?:\w*[a-z]\w*)?\b/
    Prism.languages.java = Prism.languages.extend('clike', {
      'class-name': [
        className, // variables and parameters
        // this to support class names (or generic parameters) which do not contain a lower case letter (also works for methods)
        /\b[A-Z]\w*(?=\s+\w+\s*[;,=())])/
      ],
      keyword: keywords,
      function: [
        Prism.languages.clike.function,
        {
          pattern: /(\:\:)[a-z_]\w*/,
          lookbehind: true
        }
      ],
      number: /\b0b[01][01_]*L?\b|\b0x[\da-f_]*\.?[\da-f_p+-]+\b|(?:\b\d[\d_]*\.?[\d_]*|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
      operator: {
        pattern: /(^|[^.])(?:<<=?|>>>?=?|->|([-+&|])\2|[?:~]|[-+*/%&|^!=<>]=?)/m,
        lookbehind: true
      }
    })
    Prism.languages.insertBefore('java', 'class-name', {
      annotation: {
        alias: 'punctuation',
        pattern: /(^|[^.])@\w+/,
        lookbehind: true
      },
      namespace: {
        pattern: /(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)[a-z]\w*(\.[a-z]\w*)+/,
        lookbehind: true,
        inside: {
          punctuation: /\./
        }
      },
      generics: {
        pattern: /<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<[\w\s,.&?]*>)*>)*>)*>/,
        inside: {
          'class-name': className,
          keyword: keywords,
          punctuation: /[<>(),.:]/,
          operator: /[?&|]/
        }
      }
    })
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/scala.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/scala.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var refractorJava = __webpack_require__(/*! ./java.js */ "./node_modules/refractor/lang/java.js")
module.exports = scala
scala.displayName = 'scala'
scala.aliases = []
function scala(Prism) {
  Prism.register(refractorJava)
  Prism.languages.scala = Prism.languages.extend('java', {
    keyword: /<-|=>|\b(?:abstract|case|catch|class|def|do|else|extends|final|finally|for|forSome|if|implicit|import|lazy|match|new|null|object|override|package|private|protected|return|sealed|self|super|this|throw|trait|try|type|val|var|while|with|yield)\b/,
    string: [
      {
        pattern: /"""[\s\S]*?"""/,
        greedy: true
      },
      {
        pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
        greedy: true
      }
    ],
    builtin: /\b(?:String|Int|Long|Short|Byte|Boolean|Double|Float|Char|Any|AnyRef|AnyVal|Unit|Nothing)\b/,
    number: /\b0x[\da-f]*\.?[\da-f]+|(?:\b\d+\.?\d*|\B\.\d+)(?:e\d+)?[dfl]?/i,
    symbol: /'[^\d\s\\]\w*/
  })
  delete Prism.languages.scala['class-name']
  delete Prism.languages.scala['function']
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFkZXJwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL2phdmEuanMiLCJ3ZWJwYWNrOi8vaGVhZGVycHJvamVjdC8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy9zY2FsYS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7QUNyRFk7QUFDWixvQkFBb0IsbUJBQU8sQ0FBQyx3REFBVztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBIiwiZmlsZSI6InJlYWN0LXN5bnRheC1oaWdobGlnaHRlcl9sYW5ndWFnZXNfcmVmcmFjdG9yX3NjYWxhLmJ1bmRsZS4xMDI2MGQ2ZGUxMTEwZmZmZDM1Ny5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGphdmFcbmphdmEuZGlzcGxheU5hbWUgPSAnamF2YSdcbmphdmEuYWxpYXNlcyA9IFtdXG5mdW5jdGlvbiBqYXZhKFByaXNtKSB7XG4gIDsoZnVuY3Rpb24oUHJpc20pIHtcbiAgICB2YXIga2V5d29yZHMgPSAvXFxiKD86YWJzdHJhY3R8Y29udGludWV8Zm9yfG5ld3xzd2l0Y2h8YXNzZXJ0fGRlZmF1bHR8Z290b3xwYWNrYWdlfHN5bmNocm9uaXplZHxib29sZWFufGRvfGlmfHByaXZhdGV8dGhpc3xicmVha3xkb3VibGV8aW1wbGVtZW50c3xwcm90ZWN0ZWR8dGhyb3d8Ynl0ZXxlbHNlfGltcG9ydHxwdWJsaWN8dGhyb3dzfGNhc2V8ZW51bXxpbnN0YW5jZW9mfHJldHVybnx0cmFuc2llbnR8Y2F0Y2h8ZXh0ZW5kc3xpbnR8c2hvcnR8dHJ5fGNoYXJ8ZmluYWx8aW50ZXJmYWNlfHN0YXRpY3x2b2lkfGNsYXNzfGZpbmFsbHl8bG9uZ3xzdHJpY3RmcHx2b2xhdGlsZXxjb25zdHxmbG9hdHxuYXRpdmV8c3VwZXJ8d2hpbGV8dmFyfG51bGx8ZXhwb3J0c3xtb2R1bGV8b3BlbnxvcGVuc3xwcm92aWRlc3xyZXF1aXJlc3x0b3x0cmFuc2l0aXZlfHVzZXN8d2l0aClcXGIvIC8vIGJhc2VkIG9uIHRoZSBqYXZhIG5hbWluZyBjb252ZW50aW9uc1xuICAgIHZhciBjbGFzc05hbWUgPSAvXFxiW0EtWl0oPzpcXHcqW2Etel1cXHcqKT9cXGIvXG4gICAgUHJpc20ubGFuZ3VhZ2VzLmphdmEgPSBQcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdjbGlrZScsIHtcbiAgICAgICdjbGFzcy1uYW1lJzogW1xuICAgICAgICBjbGFzc05hbWUsIC8vIHZhcmlhYmxlcyBhbmQgcGFyYW1ldGVyc1xuICAgICAgICAvLyB0aGlzIHRvIHN1cHBvcnQgY2xhc3MgbmFtZXMgKG9yIGdlbmVyaWMgcGFyYW1ldGVycykgd2hpY2ggZG8gbm90IGNvbnRhaW4gYSBsb3dlciBjYXNlIGxldHRlciAoYWxzbyB3b3JrcyBmb3IgbWV0aG9kcylcbiAgICAgICAgL1xcYltBLVpdXFx3Kig/PVxccytcXHcrXFxzKls7LD0oKSldKS9cbiAgICAgIF0sXG4gICAgICBrZXl3b3JkOiBrZXl3b3JkcyxcbiAgICAgIGZ1bmN0aW9uOiBbXG4gICAgICAgIFByaXNtLmxhbmd1YWdlcy5jbGlrZS5mdW5jdGlvbixcbiAgICAgICAge1xuICAgICAgICAgIHBhdHRlcm46IC8oXFw6XFw6KVthLXpfXVxcdyovLFxuICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIG51bWJlcjogL1xcYjBiWzAxXVswMV9dKkw/XFxifFxcYjB4W1xcZGEtZl9dKlxcLj9bXFxkYS1mX3ArLV0rXFxifCg/OlxcYlxcZFtcXGRfXSpcXC4/W1xcZF9dKnxcXEJcXC5cXGRbXFxkX10qKSg/OmVbKy1dP1xcZFtcXGRfXSopP1tkZmxdPy9pLFxuICAgICAgb3BlcmF0b3I6IHtcbiAgICAgICAgcGF0dGVybjogLyhefFteLl0pKD86PDw9P3w+Pj4/PT98LT58KFstKyZ8XSlcXDJ8Wz86fl18Wy0rKi8lJnxeIT08Pl09PykvbSxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgICAgfVxuICAgIH0pXG4gICAgUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnamF2YScsICdjbGFzcy1uYW1lJywge1xuICAgICAgYW5ub3RhdGlvbjoge1xuICAgICAgICBhbGlhczogJ3B1bmN0dWF0aW9uJyxcbiAgICAgICAgcGF0dGVybjogLyhefFteLl0pQFxcdysvLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgICB9LFxuICAgICAgbmFtZXNwYWNlOiB7XG4gICAgICAgIHBhdHRlcm46IC8oXFxiKD86ZXhwb3J0c3xpbXBvcnQoPzpcXHMrc3RhdGljKT98bW9kdWxlfG9wZW58b3BlbnN8cGFja2FnZXxwcm92aWRlc3xyZXF1aXJlc3x0b3x0cmFuc2l0aXZlfHVzZXN8d2l0aClcXHMrKVthLXpdXFx3KihcXC5bYS16XVxcdyopKy8sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgIGluc2lkZToge1xuICAgICAgICAgIHB1bmN0dWF0aW9uOiAvXFwuL1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZ2VuZXJpY3M6IHtcbiAgICAgICAgcGF0dGVybjogLzwoPzpbXFx3XFxzLC4mP118PCg/OltcXHdcXHMsLiY/XXw8KD86W1xcd1xccywuJj9dfDxbXFx3XFxzLC4mP10qPikqPikqPikqPi8sXG4gICAgICAgIGluc2lkZToge1xuICAgICAgICAgICdjbGFzcy1uYW1lJzogY2xhc3NOYW1lLFxuICAgICAgICAgIGtleXdvcmQ6IGtleXdvcmRzLFxuICAgICAgICAgIHB1bmN0dWF0aW9uOiAvWzw+KCksLjpdLyxcbiAgICAgICAgICBvcGVyYXRvcjogL1s/JnxdL1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSkoUHJpc20pXG59XG4iLCIndXNlIHN0cmljdCdcbnZhciByZWZyYWN0b3JKYXZhID0gcmVxdWlyZSgnLi9qYXZhLmpzJylcbm1vZHVsZS5leHBvcnRzID0gc2NhbGFcbnNjYWxhLmRpc3BsYXlOYW1lID0gJ3NjYWxhJ1xuc2NhbGEuYWxpYXNlcyA9IFtdXG5mdW5jdGlvbiBzY2FsYShQcmlzbSkge1xuICBQcmlzbS5yZWdpc3RlcihyZWZyYWN0b3JKYXZhKVxuICBQcmlzbS5sYW5ndWFnZXMuc2NhbGEgPSBQcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdqYXZhJywge1xuICAgIGtleXdvcmQ6IC88LXw9PnxcXGIoPzphYnN0cmFjdHxjYXNlfGNhdGNofGNsYXNzfGRlZnxkb3xlbHNlfGV4dGVuZHN8ZmluYWx8ZmluYWxseXxmb3J8Zm9yU29tZXxpZnxpbXBsaWNpdHxpbXBvcnR8bGF6eXxtYXRjaHxuZXd8bnVsbHxvYmplY3R8b3ZlcnJpZGV8cGFja2FnZXxwcml2YXRlfHByb3RlY3RlZHxyZXR1cm58c2VhbGVkfHNlbGZ8c3VwZXJ8dGhpc3x0aHJvd3x0cmFpdHx0cnl8dHlwZXx2YWx8dmFyfHdoaWxlfHdpdGh8eWllbGQpXFxiLyxcbiAgICBzdHJpbmc6IFtcbiAgICAgIHtcbiAgICAgICAgcGF0dGVybjogL1wiXCJcIltcXHNcXFNdKj9cIlwiXCIvLFxuICAgICAgICBncmVlZHk6IHRydWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdHRlcm46IC8oXCJ8JykoPzpcXFxcLnwoPyFcXDEpW15cXFxcXFxyXFxuXSkqXFwxLyxcbiAgICAgICAgZ3JlZWR5OiB0cnVlXG4gICAgICB9XG4gICAgXSxcbiAgICBidWlsdGluOiAvXFxiKD86U3RyaW5nfEludHxMb25nfFNob3J0fEJ5dGV8Qm9vbGVhbnxEb3VibGV8RmxvYXR8Q2hhcnxBbnl8QW55UmVmfEFueVZhbHxVbml0fE5vdGhpbmcpXFxiLyxcbiAgICBudW1iZXI6IC9cXGIweFtcXGRhLWZdKlxcLj9bXFxkYS1mXSt8KD86XFxiXFxkK1xcLj9cXGQqfFxcQlxcLlxcZCspKD86ZVxcZCspP1tkZmxdPy9pLFxuICAgIHN5bWJvbDogLydbXlxcZFxcc1xcXFxdXFx3Ki9cbiAgfSlcbiAgZGVsZXRlIFByaXNtLmxhbmd1YWdlcy5zY2FsYVsnY2xhc3MtbmFtZSddXG4gIGRlbGV0ZSBQcmlzbS5sYW5ndWFnZXMuc2NhbGFbJ2Z1bmN0aW9uJ11cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
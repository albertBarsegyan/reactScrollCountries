(self["webpackChunkheaderproject"] = self["webpackChunkheaderproject"] || []).push([["react-syntax-highlighter_languages_refractor_tsx"],{

/***/ "./node_modules/refractor/lang/jsx.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/jsx.js ***!
  \********************************************/
/***/ ((module) => {

"use strict";


module.exports = jsx
jsx.displayName = 'jsx'
jsx.aliases = []
function jsx(Prism) {
  ;(function(Prism) {
    var javascript = Prism.util.clone(Prism.languages.javascript)
    Prism.languages.jsx = Prism.languages.extend('markup', javascript)
    Prism.languages.jsx.tag.pattern = /<\/?(?:[\w.:-]+\s*(?:\s+(?:[\w.:-]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s{'">=]+|\{(?:\{(?:\{[^}]*\}|[^{}])*\}|[^{}])+\}))?|\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}))*\s*\/?)?>/i
    Prism.languages.jsx.tag.inside['tag'].pattern = /^<\/?[^\s>\/]*/i
    Prism.languages.jsx.tag.inside[
      'attr-value'
    ].pattern = /=(?!\{)(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">]+)/i
    Prism.languages.jsx.tag.inside['tag'].inside[
      'class-name'
    ] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/
    Prism.languages.insertBefore(
      'inside',
      'attr-name',
      {
        spread: {
          pattern: /\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}/,
          inside: {
            punctuation: /\.{3}|[{}.]/,
            'attr-value': /\w+/
          }
        }
      },
      Prism.languages.jsx.tag
    )
    Prism.languages.insertBefore(
      'inside',
      'attr-value',
      {
        script: {
          // Allow for two levels of nesting
          pattern: /=(\{(?:\{(?:\{[^}]*\}|[^}])*\}|[^}])+\})/i,
          inside: {
            'script-punctuation': {
              pattern: /^=(?={)/,
              alias: 'punctuation'
            },
            rest: Prism.languages.jsx
          },
          alias: 'language-javascript'
        }
      },
      Prism.languages.jsx.tag
    ) // The following will handle plain text inside tags
    var stringifyToken = function(token) {
      if (!token) {
        return ''
      }
      if (typeof token === 'string') {
        return token
      }
      if (typeof token.content === 'string') {
        return token.content
      }
      return token.content.map(stringifyToken).join('')
    }
    var walkTokens = function(tokens) {
      var openedTags = []
      for (var i = 0; i < tokens.length; i++) {
        var token = tokens[i]
        var notTagNorBrace = false
        if (typeof token !== 'string') {
          if (
            token.type === 'tag' &&
            token.content[0] &&
            token.content[0].type === 'tag'
          ) {
            // We found a tag, now find its kind
            if (token.content[0].content[0].content === '</') {
              // Closing tag
              if (
                openedTags.length > 0 &&
                openedTags[openedTags.length - 1].tagName ===
                  stringifyToken(token.content[0].content[1])
              ) {
                // Pop matching opening tag
                openedTags.pop()
              }
            } else {
              if (token.content[token.content.length - 1].content === '/>') {
                // Autoclosed tag, ignore
              } else {
                // Opening tag
                openedTags.push({
                  tagName: stringifyToken(token.content[0].content[1]),
                  openedBraces: 0
                })
              }
            }
          } else if (
            openedTags.length > 0 &&
            token.type === 'punctuation' &&
            token.content === '{'
          ) {
            // Here we might have entered a JSX context inside a tag
            openedTags[openedTags.length - 1].openedBraces++
          } else if (
            openedTags.length > 0 &&
            openedTags[openedTags.length - 1].openedBraces > 0 &&
            token.type === 'punctuation' &&
            token.content === '}'
          ) {
            // Here we might have left a JSX context inside a tag
            openedTags[openedTags.length - 1].openedBraces--
          } else {
            notTagNorBrace = true
          }
        }
        if (notTagNorBrace || typeof token === 'string') {
          if (
            openedTags.length > 0 &&
            openedTags[openedTags.length - 1].openedBraces === 0
          ) {
            // Here we are inside a tag, and not inside a JSX context.
            // That's plain text: drop any tokens matched.
            var plainText = stringifyToken(token) // And merge text with adjacent text
            if (
              i < tokens.length - 1 &&
              (typeof tokens[i + 1] === 'string' ||
                tokens[i + 1].type === 'plain-text')
            ) {
              plainText += stringifyToken(tokens[i + 1])
              tokens.splice(i + 1, 1)
            }
            if (
              i > 0 &&
              (typeof tokens[i - 1] === 'string' ||
                tokens[i - 1].type === 'plain-text')
            ) {
              plainText = stringifyToken(tokens[i - 1]) + plainText
              tokens.splice(i - 1, 1)
              i--
            }
            tokens[i] = new Prism.Token(
              'plain-text',
              plainText,
              null,
              plainText
            )
          }
        }
        if (token.content && typeof token.content !== 'string') {
          walkTokens(token.content)
        }
      }
    }
    Prism.hooks.add('after-tokenize', function(env) {
      if (env.language !== 'jsx' && env.language !== 'tsx') {
        return
      }
      walkTokens(env.tokens)
    })
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/tsx.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/tsx.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var refractorJsx = __webpack_require__(/*! ./jsx.js */ "./node_modules/refractor/lang/jsx.js")
var refractorTypescript = __webpack_require__(/*! ./typescript.js */ "./node_modules/refractor/lang/typescript.js")
module.exports = tsx
tsx.displayName = 'tsx'
tsx.aliases = []
function tsx(Prism) {
  Prism.register(refractorJsx)
  Prism.register(refractorTypescript)
  var typescript = Prism.util.clone(Prism.languages.typescript)
  Prism.languages.tsx = Prism.languages.extend('jsx', typescript)
}


/***/ }),

/***/ "./node_modules/refractor/lang/typescript.js":
/*!***************************************************!*\
  !*** ./node_modules/refractor/lang/typescript.js ***!
  \***************************************************/
/***/ ((module) => {

"use strict";


module.exports = typescript
typescript.displayName = 'typescript'
typescript.aliases = ['ts']
function typescript(Prism) {
  Prism.languages.typescript = Prism.languages.extend('javascript', {
    // From JavaScript Prism keyword list and TypeScript language spec: https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md#221-reserved-words
    keyword: /\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/,
    builtin: /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/
  })
  Prism.languages.ts = Prism.languages.typescript
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFkZXJwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL2pzeC5qcyIsIndlYnBhY2s6Ly9oZWFkZXJwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL3RzeC5qcyIsIndlYnBhY2s6Ly9oZWFkZXJwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL3R5cGVzY3JpcHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQVk7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLHVIQUF1SCxTQUFTLEtBQUssS0FBSyxHQUFHLElBQUksS0FBSyxLQUFLLEtBQUssS0FBSyxNQUFNLEdBQUcsRUFBRSxtQ0FBbUM7QUFDbk47QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsR0FBRyxFQUFFLG1DQUFtQztBQUM5RDtBQUNBLDZCQUE2QixFQUFFLElBQUk7QUFDbkM7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsS0FBSyxLQUFLLEdBQUcsSUFBSSxJQUFJLEtBQUssSUFBSSxLQUFLO0FBQzNEO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQSxhQUFhO0FBQ2I7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixtQkFBbUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7QUMvSlk7QUFDWixtQkFBbUIsbUJBQU8sQ0FBQyxzREFBVTtBQUNyQywwQkFBMEIsbUJBQU8sQ0FBQyxvRUFBaUI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNYWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EiLCJmaWxlIjoicmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyX2xhbmd1YWdlc19yZWZyYWN0b3JfdHN4LmJ1bmRsZS5jZWFlYTY2ODZiNjE3MjBmZjc2MC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGpzeFxuanN4LmRpc3BsYXlOYW1lID0gJ2pzeCdcbmpzeC5hbGlhc2VzID0gW11cbmZ1bmN0aW9uIGpzeChQcmlzbSkge1xuICA7KGZ1bmN0aW9uKFByaXNtKSB7XG4gICAgdmFyIGphdmFzY3JpcHQgPSBQcmlzbS51dGlsLmNsb25lKFByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0KVxuICAgIFByaXNtLmxhbmd1YWdlcy5qc3ggPSBQcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdtYXJrdXAnLCBqYXZhc2NyaXB0KVxuICAgIFByaXNtLmxhbmd1YWdlcy5qc3gudGFnLnBhdHRlcm4gPSAvPFxcLz8oPzpbXFx3LjotXStcXHMqKD86XFxzKyg/OltcXHcuOi1dKyg/Oj0oPzooXCJ8JykoPzpcXFxcW1xcc1xcU118KD8hXFwxKVteXFxcXF0pKlxcMXxbXlxcc3snXCI+PV0rfFxceyg/Olxceyg/Olxce1tefV0qXFx9fFtee31dKSpcXH18W157fV0pK1xcfSkpP3xcXHtcXC57M31bYS16XyRdW1xcdyRdKig/OlxcLlthLXpfJF1bXFx3JF0qKSpcXH0pKSpcXHMqXFwvPyk/Pi9pXG4gICAgUHJpc20ubGFuZ3VhZ2VzLmpzeC50YWcuaW5zaWRlWyd0YWcnXS5wYXR0ZXJuID0gL148XFwvP1teXFxzPlxcL10qL2lcbiAgICBQcmlzbS5sYW5ndWFnZXMuanN4LnRhZy5pbnNpZGVbXG4gICAgICAnYXR0ci12YWx1ZSdcbiAgICBdLnBhdHRlcm4gPSAvPSg/IVxceykoPzooXCJ8JykoPzpcXFxcW1xcc1xcU118KD8hXFwxKVteXFxcXF0pKlxcMXxbXlxccydcIj5dKykvaVxuICAgIFByaXNtLmxhbmd1YWdlcy5qc3gudGFnLmluc2lkZVsndGFnJ10uaW5zaWRlW1xuICAgICAgJ2NsYXNzLW5hbWUnXG4gICAgXSA9IC9eW0EtWl1cXHcqKD86XFwuW0EtWl1cXHcqKSokL1xuICAgIFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoXG4gICAgICAnaW5zaWRlJyxcbiAgICAgICdhdHRyLW5hbWUnLFxuICAgICAge1xuICAgICAgICBzcHJlYWQ6IHtcbiAgICAgICAgICBwYXR0ZXJuOiAvXFx7XFwuezN9W2Etel8kXVtcXHckXSooPzpcXC5bYS16XyRdW1xcdyRdKikqXFx9LyxcbiAgICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICAgIHB1bmN0dWF0aW9uOiAvXFwuezN9fFt7fS5dLyxcbiAgICAgICAgICAgICdhdHRyLXZhbHVlJzogL1xcdysvXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgUHJpc20ubGFuZ3VhZ2VzLmpzeC50YWdcbiAgICApXG4gICAgUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZShcbiAgICAgICdpbnNpZGUnLFxuICAgICAgJ2F0dHItdmFsdWUnLFxuICAgICAge1xuICAgICAgICBzY3JpcHQ6IHtcbiAgICAgICAgICAvLyBBbGxvdyBmb3IgdHdvIGxldmVscyBvZiBuZXN0aW5nXG4gICAgICAgICAgcGF0dGVybjogLz0oXFx7KD86XFx7KD86XFx7W159XSpcXH18W159XSkqXFx9fFtefV0pK1xcfSkvaSxcbiAgICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICAgICdzY3JpcHQtcHVuY3R1YXRpb24nOiB7XG4gICAgICAgICAgICAgIHBhdHRlcm46IC9ePSg/PXspLyxcbiAgICAgICAgICAgICAgYWxpYXM6ICdwdW5jdHVhdGlvbidcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZXN0OiBQcmlzbS5sYW5ndWFnZXMuanN4XG4gICAgICAgICAgfSxcbiAgICAgICAgICBhbGlhczogJ2xhbmd1YWdlLWphdmFzY3JpcHQnXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBQcmlzbS5sYW5ndWFnZXMuanN4LnRhZ1xuICAgICkgLy8gVGhlIGZvbGxvd2luZyB3aWxsIGhhbmRsZSBwbGFpbiB0ZXh0IGluc2lkZSB0YWdzXG4gICAgdmFyIHN0cmluZ2lmeVRva2VuID0gZnVuY3Rpb24odG9rZW4pIHtcbiAgICAgIGlmICghdG9rZW4pIHtcbiAgICAgICAgcmV0dXJuICcnXG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIHRva2VuID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gdG9rZW5cbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgdG9rZW4uY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHRva2VuLmNvbnRlbnRcbiAgICAgIH1cbiAgICAgIHJldHVybiB0b2tlbi5jb250ZW50Lm1hcChzdHJpbmdpZnlUb2tlbikuam9pbignJylcbiAgICB9XG4gICAgdmFyIHdhbGtUb2tlbnMgPSBmdW5jdGlvbih0b2tlbnMpIHtcbiAgICAgIHZhciBvcGVuZWRUYWdzID0gW11cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXVxuICAgICAgICB2YXIgbm90VGFnTm9yQnJhY2UgPSBmYWxzZVxuICAgICAgICBpZiAodHlwZW9mIHRva2VuICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHRva2VuLnR5cGUgPT09ICd0YWcnICYmXG4gICAgICAgICAgICB0b2tlbi5jb250ZW50WzBdICYmXG4gICAgICAgICAgICB0b2tlbi5jb250ZW50WzBdLnR5cGUgPT09ICd0YWcnXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICAvLyBXZSBmb3VuZCBhIHRhZywgbm93IGZpbmQgaXRzIGtpbmRcbiAgICAgICAgICAgIGlmICh0b2tlbi5jb250ZW50WzBdLmNvbnRlbnRbMF0uY29udGVudCA9PT0gJzwvJykge1xuICAgICAgICAgICAgICAvLyBDbG9zaW5nIHRhZ1xuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgb3BlbmVkVGFncy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICAgICAgb3BlbmVkVGFnc1tvcGVuZWRUYWdzLmxlbmd0aCAtIDFdLnRhZ05hbWUgPT09XG4gICAgICAgICAgICAgICAgICBzdHJpbmdpZnlUb2tlbih0b2tlbi5jb250ZW50WzBdLmNvbnRlbnRbMV0pXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIC8vIFBvcCBtYXRjaGluZyBvcGVuaW5nIHRhZ1xuICAgICAgICAgICAgICAgIG9wZW5lZFRhZ3MucG9wKClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaWYgKHRva2VuLmNvbnRlbnRbdG9rZW4uY29udGVudC5sZW5ndGggLSAxXS5jb250ZW50ID09PSAnLz4nKSB7XG4gICAgICAgICAgICAgICAgLy8gQXV0b2Nsb3NlZCB0YWcsIGlnbm9yZVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIE9wZW5pbmcgdGFnXG4gICAgICAgICAgICAgICAgb3BlbmVkVGFncy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgIHRhZ05hbWU6IHN0cmluZ2lmeVRva2VuKHRva2VuLmNvbnRlbnRbMF0uY29udGVudFsxXSksXG4gICAgICAgICAgICAgICAgICBvcGVuZWRCcmFjZXM6IDBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgIG9wZW5lZFRhZ3MubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgdG9rZW4udHlwZSA9PT0gJ3B1bmN0dWF0aW9uJyAmJlxuICAgICAgICAgICAgdG9rZW4uY29udGVudCA9PT0gJ3snXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICAvLyBIZXJlIHdlIG1pZ2h0IGhhdmUgZW50ZXJlZCBhIEpTWCBjb250ZXh0IGluc2lkZSBhIHRhZ1xuICAgICAgICAgICAgb3BlbmVkVGFnc1tvcGVuZWRUYWdzLmxlbmd0aCAtIDFdLm9wZW5lZEJyYWNlcysrXG4gICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgIG9wZW5lZFRhZ3MubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgb3BlbmVkVGFnc1tvcGVuZWRUYWdzLmxlbmd0aCAtIDFdLm9wZW5lZEJyYWNlcyA+IDAgJiZcbiAgICAgICAgICAgIHRva2VuLnR5cGUgPT09ICdwdW5jdHVhdGlvbicgJiZcbiAgICAgICAgICAgIHRva2VuLmNvbnRlbnQgPT09ICd9J1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgLy8gSGVyZSB3ZSBtaWdodCBoYXZlIGxlZnQgYSBKU1ggY29udGV4dCBpbnNpZGUgYSB0YWdcbiAgICAgICAgICAgIG9wZW5lZFRhZ3Nbb3BlbmVkVGFncy5sZW5ndGggLSAxXS5vcGVuZWRCcmFjZXMtLVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBub3RUYWdOb3JCcmFjZSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5vdFRhZ05vckJyYWNlIHx8IHR5cGVvZiB0b2tlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBvcGVuZWRUYWdzLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgIG9wZW5lZFRhZ3Nbb3BlbmVkVGFncy5sZW5ndGggLSAxXS5vcGVuZWRCcmFjZXMgPT09IDBcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIC8vIEhlcmUgd2UgYXJlIGluc2lkZSBhIHRhZywgYW5kIG5vdCBpbnNpZGUgYSBKU1ggY29udGV4dC5cbiAgICAgICAgICAgIC8vIFRoYXQncyBwbGFpbiB0ZXh0OiBkcm9wIGFueSB0b2tlbnMgbWF0Y2hlZC5cbiAgICAgICAgICAgIHZhciBwbGFpblRleHQgPSBzdHJpbmdpZnlUb2tlbih0b2tlbikgLy8gQW5kIG1lcmdlIHRleHQgd2l0aCBhZGphY2VudCB0ZXh0XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIGkgPCB0b2tlbnMubGVuZ3RoIC0gMSAmJlxuICAgICAgICAgICAgICAodHlwZW9mIHRva2Vuc1tpICsgMV0gPT09ICdzdHJpbmcnIHx8XG4gICAgICAgICAgICAgICAgdG9rZW5zW2kgKyAxXS50eXBlID09PSAncGxhaW4tdGV4dCcpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgcGxhaW5UZXh0ICs9IHN0cmluZ2lmeVRva2VuKHRva2Vuc1tpICsgMV0pXG4gICAgICAgICAgICAgIHRva2Vucy5zcGxpY2UoaSArIDEsIDEpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIGkgPiAwICYmXG4gICAgICAgICAgICAgICh0eXBlb2YgdG9rZW5zW2kgLSAxXSA9PT0gJ3N0cmluZycgfHxcbiAgICAgICAgICAgICAgICB0b2tlbnNbaSAtIDFdLnR5cGUgPT09ICdwbGFpbi10ZXh0JylcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBwbGFpblRleHQgPSBzdHJpbmdpZnlUb2tlbih0b2tlbnNbaSAtIDFdKSArIHBsYWluVGV4dFxuICAgICAgICAgICAgICB0b2tlbnMuc3BsaWNlKGkgLSAxLCAxKVxuICAgICAgICAgICAgICBpLS1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRva2Vuc1tpXSA9IG5ldyBQcmlzbS5Ub2tlbihcbiAgICAgICAgICAgICAgJ3BsYWluLXRleHQnLFxuICAgICAgICAgICAgICBwbGFpblRleHQsXG4gICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgIHBsYWluVGV4dFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodG9rZW4uY29udGVudCAmJiB0eXBlb2YgdG9rZW4uY29udGVudCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB3YWxrVG9rZW5zKHRva2VuLmNvbnRlbnQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgUHJpc20uaG9va3MuYWRkKCdhZnRlci10b2tlbml6ZScsIGZ1bmN0aW9uKGVudikge1xuICAgICAgaWYgKGVudi5sYW5ndWFnZSAhPT0gJ2pzeCcgJiYgZW52Lmxhbmd1YWdlICE9PSAndHN4Jykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHdhbGtUb2tlbnMoZW52LnRva2VucylcbiAgICB9KVxuICB9KShQcmlzbSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xudmFyIHJlZnJhY3RvckpzeCA9IHJlcXVpcmUoJy4vanN4LmpzJylcbnZhciByZWZyYWN0b3JUeXBlc2NyaXB0ID0gcmVxdWlyZSgnLi90eXBlc2NyaXB0LmpzJylcbm1vZHVsZS5leHBvcnRzID0gdHN4XG50c3guZGlzcGxheU5hbWUgPSAndHN4J1xudHN4LmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24gdHN4KFByaXNtKSB7XG4gIFByaXNtLnJlZ2lzdGVyKHJlZnJhY3RvckpzeClcbiAgUHJpc20ucmVnaXN0ZXIocmVmcmFjdG9yVHlwZXNjcmlwdClcbiAgdmFyIHR5cGVzY3JpcHQgPSBQcmlzbS51dGlsLmNsb25lKFByaXNtLmxhbmd1YWdlcy50eXBlc2NyaXB0KVxuICBQcmlzbS5sYW5ndWFnZXMudHN4ID0gUHJpc20ubGFuZ3VhZ2VzLmV4dGVuZCgnanN4JywgdHlwZXNjcmlwdClcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVzY3JpcHRcbnR5cGVzY3JpcHQuZGlzcGxheU5hbWUgPSAndHlwZXNjcmlwdCdcbnR5cGVzY3JpcHQuYWxpYXNlcyA9IFsndHMnXVxuZnVuY3Rpb24gdHlwZXNjcmlwdChQcmlzbSkge1xuICBQcmlzbS5sYW5ndWFnZXMudHlwZXNjcmlwdCA9IFByaXNtLmxhbmd1YWdlcy5leHRlbmQoJ2phdmFzY3JpcHQnLCB7XG4gICAgLy8gRnJvbSBKYXZhU2NyaXB0IFByaXNtIGtleXdvcmQgbGlzdCBhbmQgVHlwZVNjcmlwdCBsYW5ndWFnZSBzcGVjOiBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L1R5cGVTY3JpcHQvYmxvYi9tYXN0ZXIvZG9jL3NwZWMubWQjMjIxLXJlc2VydmVkLXdvcmRzXG4gICAga2V5d29yZDogL1xcYig/OmFic3RyYWN0fGFzfGFzeW5jfGF3YWl0fGJyZWFrfGNhc2V8Y2F0Y2h8Y2xhc3N8Y29uc3R8Y29uc3RydWN0b3J8Y29udGludWV8ZGVidWdnZXJ8ZGVjbGFyZXxkZWZhdWx0fGRlbGV0ZXxkb3xlbHNlfGVudW18ZXhwb3J0fGV4dGVuZHN8ZmluYWxseXxmb3J8ZnJvbXxmdW5jdGlvbnxnZXR8aWZ8aW1wbGVtZW50c3xpbXBvcnR8aW58aW5zdGFuY2VvZnxpbnRlcmZhY2V8aXN8a2V5b2Z8bGV0fG1vZHVsZXxuYW1lc3BhY2V8bmV3fG51bGx8b2Z8cGFja2FnZXxwcml2YXRlfHByb3RlY3RlZHxwdWJsaWN8cmVhZG9ubHl8cmV0dXJufHJlcXVpcmV8c2V0fHN0YXRpY3xzdXBlcnxzd2l0Y2h8dGhpc3x0aHJvd3x0cnl8dHlwZXx0eXBlb2Z8dmFyfHZvaWR8d2hpbGV8d2l0aHx5aWVsZClcXGIvLFxuICAgIGJ1aWx0aW46IC9cXGIoPzpzdHJpbmd8RnVuY3Rpb258YW55fG51bWJlcnxib29sZWFufEFycmF5fHN5bWJvbHxjb25zb2xlfFByb21pc2V8dW5rbm93bnxuZXZlcilcXGIvXG4gIH0pXG4gIFByaXNtLmxhbmd1YWdlcy50cyA9IFByaXNtLmxhbmd1YWdlcy50eXBlc2NyaXB0XG59XG4iXSwic291cmNlUm9vdCI6IiJ9
(self["webpackChunkheaderproject"] = self["webpackChunkheaderproject"] || []).push([["react-syntax-highlighter_languages_refractor_kotlin"],{

/***/ "./node_modules/refractor/lang/kotlin.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/kotlin.js ***!
  \***********************************************/
/***/ ((module) => {

"use strict";


module.exports = kotlin
kotlin.displayName = 'kotlin'
kotlin.aliases = []
function kotlin(Prism) {
  ;(function(Prism) {
    Prism.languages.kotlin = Prism.languages.extend('clike', {
      keyword: {
        // The lookbehind prevents wrong highlighting of e.g. kotlin.properties.get
        pattern: /(^|[^.])\b(?:abstract|actual|annotation|as|break|by|catch|class|companion|const|constructor|continue|crossinline|data|do|dynamic|else|enum|expect|external|final|finally|for|fun|get|if|import|in|infix|init|inline|inner|interface|internal|is|lateinit|noinline|null|object|open|operator|out|override|package|private|protected|public|reified|return|sealed|set|super|suspend|tailrec|this|throw|to|try|typealias|val|var|vararg|when|where|while)\b/,
        lookbehind: true
      },
      function: [
        /\w+(?=\s*\()/,
        {
          pattern: /(\.)\w+(?=\s*\{)/,
          lookbehind: true
        }
      ],
      number: /\b(?:0[xX][\da-fA-F]+(?:_[\da-fA-F]+)*|0[bB][01]+(?:_[01]+)*|\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?[fFL]?)\b/,
      operator: /\+[+=]?|-[-=>]?|==?=?|!(?:!|==?)?|[\/*%<>]=?|[?:]:?|\.\.|&&|\|\||\b(?:and|inv|or|shl|shr|ushr|xor)\b/
    })
    delete Prism.languages.kotlin['class-name']
    Prism.languages.insertBefore('kotlin', 'string', {
      'raw-string': {
        pattern: /("""|''')[\s\S]*?\1/,
        alias: 'string' // See interpolation below
      }
    })
    Prism.languages.insertBefore('kotlin', 'keyword', {
      annotation: {
        pattern: /\B@(?:\w+:)?(?:[A-Z]\w*|\[[^\]]+\])/,
        alias: 'builtin'
      }
    })
    Prism.languages.insertBefore('kotlin', 'function', {
      label: {
        pattern: /\w+@|@\w+/,
        alias: 'symbol'
      }
    })
    var interpolation = [
      {
        pattern: /\$\{[^}]+\}/,
        inside: {
          delimiter: {
            pattern: /^\$\{|\}$/,
            alias: 'variable'
          },
          rest: Prism.languages.kotlin
        }
      },
      {
        pattern: /\$\w+/,
        alias: 'variable'
      }
    ]
    Prism.languages.kotlin['string'].inside = Prism.languages.kotlin[
      'raw-string'
    ].inside = {
      interpolation: interpolation
    }
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFkZXJwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL2tvdGxpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNCQUFzQixHQUFHLElBQUk7QUFDN0I7QUFDQTtBQUNBLDJCQUEyQixHQUFHO0FBQzlCO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0giLCJmaWxlIjoicmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyX2xhbmd1YWdlc19yZWZyYWN0b3Jfa290bGluLmJ1bmRsZS5jZWFlYTY2ODZiNjE3MjBmZjc2MC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGtvdGxpblxua290bGluLmRpc3BsYXlOYW1lID0gJ2tvdGxpbidcbmtvdGxpbi5hbGlhc2VzID0gW11cbmZ1bmN0aW9uIGtvdGxpbihQcmlzbSkge1xuICA7KGZ1bmN0aW9uKFByaXNtKSB7XG4gICAgUHJpc20ubGFuZ3VhZ2VzLmtvdGxpbiA9IFByaXNtLmxhbmd1YWdlcy5leHRlbmQoJ2NsaWtlJywge1xuICAgICAga2V5d29yZDoge1xuICAgICAgICAvLyBUaGUgbG9va2JlaGluZCBwcmV2ZW50cyB3cm9uZyBoaWdobGlnaHRpbmcgb2YgZS5nLiBrb3RsaW4ucHJvcGVydGllcy5nZXRcbiAgICAgICAgcGF0dGVybjogLyhefFteLl0pXFxiKD86YWJzdHJhY3R8YWN0dWFsfGFubm90YXRpb258YXN8YnJlYWt8Ynl8Y2F0Y2h8Y2xhc3N8Y29tcGFuaW9ufGNvbnN0fGNvbnN0cnVjdG9yfGNvbnRpbnVlfGNyb3NzaW5saW5lfGRhdGF8ZG98ZHluYW1pY3xlbHNlfGVudW18ZXhwZWN0fGV4dGVybmFsfGZpbmFsfGZpbmFsbHl8Zm9yfGZ1bnxnZXR8aWZ8aW1wb3J0fGlufGluZml4fGluaXR8aW5saW5lfGlubmVyfGludGVyZmFjZXxpbnRlcm5hbHxpc3xsYXRlaW5pdHxub2lubGluZXxudWxsfG9iamVjdHxvcGVufG9wZXJhdG9yfG91dHxvdmVycmlkZXxwYWNrYWdlfHByaXZhdGV8cHJvdGVjdGVkfHB1YmxpY3xyZWlmaWVkfHJldHVybnxzZWFsZWR8c2V0fHN1cGVyfHN1c3BlbmR8dGFpbHJlY3x0aGlzfHRocm93fHRvfHRyeXx0eXBlYWxpYXN8dmFsfHZhcnx2YXJhcmd8d2hlbnx3aGVyZXx3aGlsZSlcXGIvLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgICB9LFxuICAgICAgZnVuY3Rpb246IFtcbiAgICAgICAgL1xcdysoPz1cXHMqXFwoKS8sXG4gICAgICAgIHtcbiAgICAgICAgICBwYXR0ZXJuOiAvKFxcLilcXHcrKD89XFxzKlxceykvLFxuICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIG51bWJlcjogL1xcYig/OjBbeFhdW1xcZGEtZkEtRl0rKD86X1tcXGRhLWZBLUZdKykqfDBbYkJdWzAxXSsoPzpfWzAxXSspKnxcXGQrKD86X1xcZCspKig/OlxcLlxcZCsoPzpfXFxkKykqKT8oPzpbZUVdWystXT9cXGQrKD86X1xcZCspKik/W2ZGTF0/KVxcYi8sXG4gICAgICBvcGVyYXRvcjogL1xcK1srPV0/fC1bLT0+XT98PT0/PT98ISg/OiF8PT0/KT98W1xcLyolPD5dPT98Wz86XTo/fFxcLlxcLnwmJnxcXHxcXHx8XFxiKD86YW5kfGludnxvcnxzaGx8c2hyfHVzaHJ8eG9yKVxcYi9cbiAgICB9KVxuICAgIGRlbGV0ZSBQcmlzbS5sYW5ndWFnZXMua290bGluWydjbGFzcy1uYW1lJ11cbiAgICBQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdrb3RsaW4nLCAnc3RyaW5nJywge1xuICAgICAgJ3Jhdy1zdHJpbmcnOiB7XG4gICAgICAgIHBhdHRlcm46IC8oXCJcIlwifCcnJylbXFxzXFxTXSo/XFwxLyxcbiAgICAgICAgYWxpYXM6ICdzdHJpbmcnIC8vIFNlZSBpbnRlcnBvbGF0aW9uIGJlbG93XG4gICAgICB9XG4gICAgfSlcbiAgICBQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdrb3RsaW4nLCAna2V5d29yZCcsIHtcbiAgICAgIGFubm90YXRpb246IHtcbiAgICAgICAgcGF0dGVybjogL1xcQkAoPzpcXHcrOik/KD86W0EtWl1cXHcqfFxcW1teXFxdXStcXF0pLyxcbiAgICAgICAgYWxpYXM6ICdidWlsdGluJ1xuICAgICAgfVxuICAgIH0pXG4gICAgUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgna290bGluJywgJ2Z1bmN0aW9uJywge1xuICAgICAgbGFiZWw6IHtcbiAgICAgICAgcGF0dGVybjogL1xcdytAfEBcXHcrLyxcbiAgICAgICAgYWxpYXM6ICdzeW1ib2wnXG4gICAgICB9XG4gICAgfSlcbiAgICB2YXIgaW50ZXJwb2xhdGlvbiA9IFtcbiAgICAgIHtcbiAgICAgICAgcGF0dGVybjogL1xcJFxce1tefV0rXFx9LyxcbiAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgZGVsaW1pdGVyOiB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvXlxcJFxce3xcXH0kLyxcbiAgICAgICAgICAgIGFsaWFzOiAndmFyaWFibGUnXG4gICAgICAgICAgfSxcbiAgICAgICAgICByZXN0OiBQcmlzbS5sYW5ndWFnZXMua290bGluXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdHRlcm46IC9cXCRcXHcrLyxcbiAgICAgICAgYWxpYXM6ICd2YXJpYWJsZSdcbiAgICAgIH1cbiAgICBdXG4gICAgUHJpc20ubGFuZ3VhZ2VzLmtvdGxpblsnc3RyaW5nJ10uaW5zaWRlID0gUHJpc20ubGFuZ3VhZ2VzLmtvdGxpbltcbiAgICAgICdyYXctc3RyaW5nJ1xuICAgIF0uaW5zaWRlID0ge1xuICAgICAgaW50ZXJwb2xhdGlvbjogaW50ZXJwb2xhdGlvblxuICAgIH1cbiAgfSkoUHJpc20pXG59XG4iXSwic291cmNlUm9vdCI6IiJ9
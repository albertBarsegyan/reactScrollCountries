(self["webpackChunkheaderproject"] = self["webpackChunkheaderproject"] || []).push([["react-syntax-highlighter_languages_refractor_apl"],{

/***/ "./node_modules/refractor/lang/apl.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/apl.js ***!
  \********************************************/
/***/ ((module) => {

"use strict";


module.exports = apl
apl.displayName = 'apl'
apl.aliases = []
function apl(Prism) {
  Prism.languages.apl = {
    comment: /(?:⍝|#[! ]).*$/m,
    string: {
      pattern: /'(?:[^'\r\n]|'')*'/,
      greedy: true
    },
    number: /¯?(?:\d*\.?\d+(?:e[+¯]?\d+)?|¯|∞)(?:j¯?(?:\d*\.?\d+(?:e[+¯]?\d+)?|¯|∞))?/i,
    statement: /:[A-Z][a-z][A-Za-z]*\b/,
    'system-function': {
      pattern: /⎕[A-Z]+/i,
      alias: 'function'
    },
    constant: /[⍬⌾#⎕⍞]/,
    function: /[-+×÷⌈⌊∣|⍳⍸?*⍟○!⌹<≤=>≥≠≡≢∊⍷∪∩~∨∧⍱⍲⍴,⍪⌽⊖⍉↑↓⊂⊃⊆⊇⌷⍋⍒⊤⊥⍕⍎⊣⊢⍁⍂≈⍯↗¤→]/,
    'monadic-operator': {
      pattern: /[\\\/⌿⍀¨⍨⌶&∥]/,
      alias: 'operator'
    },
    'dyadic-operator': {
      pattern: /[.⍣⍠⍤∘⌸@⌺]/,
      alias: 'operator'
    },
    assignment: {
      pattern: /←/,
      alias: 'keyword'
    },
    punctuation: /[\[;\]()◇⋄]/,
    dfn: {
      pattern: /[{}⍺⍵⍶⍹∇⍫:]/,
      alias: 'builtin'
    }
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFkZXJwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL2FwbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsc0JBQXNCO0FBQ3RCO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InJlYWN0LXN5bnRheC1oaWdobGlnaHRlcl9sYW5ndWFnZXNfcmVmcmFjdG9yX2FwbC5idW5kbGUuY2VhZWE2Njg2YjYxNzIwZmY3NjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBhcGxcbmFwbC5kaXNwbGF5TmFtZSA9ICdhcGwnXG5hcGwuYWxpYXNlcyA9IFtdXG5mdW5jdGlvbiBhcGwoUHJpc20pIHtcbiAgUHJpc20ubGFuZ3VhZ2VzLmFwbCA9IHtcbiAgICBjb21tZW50OiAvKD864o2dfCNbISBdKS4qJC9tLFxuICAgIHN0cmluZzoge1xuICAgICAgcGF0dGVybjogLycoPzpbXidcXHJcXG5dfCcnKSonLyxcbiAgICAgIGdyZWVkeTogdHJ1ZVxuICAgIH0sXG4gICAgbnVtYmVyOiAvwq8/KD86XFxkKlxcLj9cXGQrKD86ZVsrwq9dP1xcZCspP3zCr3ziiJ4pKD86asKvPyg/OlxcZCpcXC4/XFxkKyg/OmVbK8KvXT9cXGQrKT98wq984oieKSk/L2ksXG4gICAgc3RhdGVtZW50OiAvOltBLVpdW2Etel1bQS1aYS16XSpcXGIvLFxuICAgICdzeXN0ZW0tZnVuY3Rpb24nOiB7XG4gICAgICBwYXR0ZXJuOiAv4o6VW0EtWl0rL2ksXG4gICAgICBhbGlhczogJ2Z1bmN0aW9uJ1xuICAgIH0sXG4gICAgY29uc3RhbnQ6IC9b4o2s4oy+I+KOleKNnl0vLFxuICAgIGZ1bmN0aW9uOiAvWy0rw5fDt+KMiOKMiuKIo3zijbPijbg/KuKNn+KXiyHijLk84omkPT7iiaXiiaDiiaHiiaLiiIrijbfiiKriiKl+4oio4oin4o2x4o2y4o20LOKNquKMveKKluKNieKGkeKGk+KKguKKg+KKhuKKh+KMt+KNi+KNkuKKpOKKpeKNleKNjuKKo+KKouKNgeKNguKJiOKNr+KGl8Kk4oaSXS8sXG4gICAgJ21vbmFkaWMtb3BlcmF0b3InOiB7XG4gICAgICBwYXR0ZXJuOiAvW1xcXFxcXC/ijL/ijYDCqOKNqOKMtibiiKVdLyxcbiAgICAgIGFsaWFzOiAnb3BlcmF0b3InXG4gICAgfSxcbiAgICAnZHlhZGljLW9wZXJhdG9yJzoge1xuICAgICAgcGF0dGVybjogL1su4o2j4o2g4o2k4oiY4oy4QOKMul0vLFxuICAgICAgYWxpYXM6ICdvcGVyYXRvcidcbiAgICB9LFxuICAgIGFzc2lnbm1lbnQ6IHtcbiAgICAgIHBhdHRlcm46IC/ihpAvLFxuICAgICAgYWxpYXM6ICdrZXl3b3JkJ1xuICAgIH0sXG4gICAgcHVuY3R1YXRpb246IC9bXFxbO1xcXSgp4peH4ouEXS8sXG4gICAgZGZuOiB7XG4gICAgICBwYXR0ZXJuOiAvW3t94o264o214o224o254oiH4o2rOl0vLFxuICAgICAgYWxpYXM6ICdidWlsdGluJ1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
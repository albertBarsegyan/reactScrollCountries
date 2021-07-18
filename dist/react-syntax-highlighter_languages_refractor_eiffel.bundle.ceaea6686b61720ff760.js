(self["webpackChunkheaderproject"] = self["webpackChunkheaderproject"] || []).push([["react-syntax-highlighter_languages_refractor_eiffel"],{

/***/ "./node_modules/refractor/lang/eiffel.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/eiffel.js ***!
  \***********************************************/
/***/ ((module) => {

"use strict";


module.exports = eiffel
eiffel.displayName = 'eiffel'
eiffel.aliases = []
function eiffel(Prism) {
  Prism.languages.eiffel = {
    comment: /--.*/,
    string: [
      // Aligned-verbatim-strings
      {
        pattern: /"([^[]*)\[[\s\S]*?\]\1"/,
        greedy: true
      }, // Non-aligned-verbatim-strings
      {
        pattern: /"([^{]*)\{[\s\S]*?\}\1"/,
        greedy: true
      }, // Single-line string
      {
        pattern: /"(?:%\s+%|%.|[^%"\r\n])*"/,
        greedy: true
      }
    ],
    // normal char | special char | char code
    char: /'(?:%.|[^%'\r\n])+'/,
    keyword: /\b(?:across|agent|alias|all|and|attached|as|assign|attribute|check|class|convert|create|Current|debug|deferred|detachable|do|else|elseif|end|ensure|expanded|export|external|feature|from|frozen|if|implies|inherit|inspect|invariant|like|local|loop|not|note|obsolete|old|once|or|Precursor|redefine|rename|require|rescue|Result|retry|select|separate|some|then|undefine|until|variant|Void|when|xor)\b/i,
    boolean: /\b(?:True|False)\b/i,
    // Convention: class-names are always all upper-case characters
    'class-name': {
      pattern: /\b[A-Z][\dA-Z_]*\b/,
      alias: 'builtin'
    },
    number: [
      // hexa | octal | bin
      /\b0[xcb][\da-f](?:_*[\da-f])*\b/i, // Decimal
      /(?:\d(?:_*\d)*)?\.(?:(?:\d(?:_*\d)*)?e[+-]?)?\d(?:_*\d)*|\d(?:_*\d)*\.?/i
    ],
    punctuation: /:=|<<|>>|\(\||\|\)|->|\.(?=\w)|[{}[\];(),:?]/,
    operator: /\\\\|\|\.\.\||\.\.|\/[~\/=]?|[><]=?|[-+*^=~]/
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFkZXJwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL2VpZmZlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsdUJBQXVCLEtBQUssVUFBVTtBQUN0QztBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELElBQUk7QUFDeEQ7QUFDQTtBQUNBIiwiZmlsZSI6InJlYWN0LXN5bnRheC1oaWdobGlnaHRlcl9sYW5ndWFnZXNfcmVmcmFjdG9yX2VpZmZlbC5idW5kbGUuY2VhZWE2Njg2YjYxNzIwZmY3NjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBlaWZmZWxcbmVpZmZlbC5kaXNwbGF5TmFtZSA9ICdlaWZmZWwnXG5laWZmZWwuYWxpYXNlcyA9IFtdXG5mdW5jdGlvbiBlaWZmZWwoUHJpc20pIHtcbiAgUHJpc20ubGFuZ3VhZ2VzLmVpZmZlbCA9IHtcbiAgICBjb21tZW50OiAvLS0uKi8sXG4gICAgc3RyaW5nOiBbXG4gICAgICAvLyBBbGlnbmVkLXZlcmJhdGltLXN0cmluZ3NcbiAgICAgIHtcbiAgICAgICAgcGF0dGVybjogL1wiKFteW10qKVxcW1tcXHNcXFNdKj9cXF1cXDFcIi8sXG4gICAgICAgIGdyZWVkeTogdHJ1ZVxuICAgICAgfSwgLy8gTm9uLWFsaWduZWQtdmVyYmF0aW0tc3RyaW5nc1xuICAgICAge1xuICAgICAgICBwYXR0ZXJuOiAvXCIoW157XSopXFx7W1xcc1xcU10qP1xcfVxcMVwiLyxcbiAgICAgICAgZ3JlZWR5OiB0cnVlXG4gICAgICB9LCAvLyBTaW5nbGUtbGluZSBzdHJpbmdcbiAgICAgIHtcbiAgICAgICAgcGF0dGVybjogL1wiKD86JVxccyslfCUufFteJVwiXFxyXFxuXSkqXCIvLFxuICAgICAgICBncmVlZHk6IHRydWVcbiAgICAgIH1cbiAgICBdLFxuICAgIC8vIG5vcm1hbCBjaGFyIHwgc3BlY2lhbCBjaGFyIHwgY2hhciBjb2RlXG4gICAgY2hhcjogLycoPzolLnxbXiUnXFxyXFxuXSkrJy8sXG4gICAga2V5d29yZDogL1xcYig/OmFjcm9zc3xhZ2VudHxhbGlhc3xhbGx8YW5kfGF0dGFjaGVkfGFzfGFzc2lnbnxhdHRyaWJ1dGV8Y2hlY2t8Y2xhc3N8Y29udmVydHxjcmVhdGV8Q3VycmVudHxkZWJ1Z3xkZWZlcnJlZHxkZXRhY2hhYmxlfGRvfGVsc2V8ZWxzZWlmfGVuZHxlbnN1cmV8ZXhwYW5kZWR8ZXhwb3J0fGV4dGVybmFsfGZlYXR1cmV8ZnJvbXxmcm96ZW58aWZ8aW1wbGllc3xpbmhlcml0fGluc3BlY3R8aW52YXJpYW50fGxpa2V8bG9jYWx8bG9vcHxub3R8bm90ZXxvYnNvbGV0ZXxvbGR8b25jZXxvcnxQcmVjdXJzb3J8cmVkZWZpbmV8cmVuYW1lfHJlcXVpcmV8cmVzY3VlfFJlc3VsdHxyZXRyeXxzZWxlY3R8c2VwYXJhdGV8c29tZXx0aGVufHVuZGVmaW5lfHVudGlsfHZhcmlhbnR8Vm9pZHx3aGVufHhvcilcXGIvaSxcbiAgICBib29sZWFuOiAvXFxiKD86VHJ1ZXxGYWxzZSlcXGIvaSxcbiAgICAvLyBDb252ZW50aW9uOiBjbGFzcy1uYW1lcyBhcmUgYWx3YXlzIGFsbCB1cHBlci1jYXNlIGNoYXJhY3RlcnNcbiAgICAnY2xhc3MtbmFtZSc6IHtcbiAgICAgIHBhdHRlcm46IC9cXGJbQS1aXVtcXGRBLVpfXSpcXGIvLFxuICAgICAgYWxpYXM6ICdidWlsdGluJ1xuICAgIH0sXG4gICAgbnVtYmVyOiBbXG4gICAgICAvLyBoZXhhIHwgb2N0YWwgfCBiaW5cbiAgICAgIC9cXGIwW3hjYl1bXFxkYS1mXSg/Ol8qW1xcZGEtZl0pKlxcYi9pLCAvLyBEZWNpbWFsXG4gICAgICAvKD86XFxkKD86XypcXGQpKik/XFwuKD86KD86XFxkKD86XypcXGQpKik/ZVsrLV0/KT9cXGQoPzpfKlxcZCkqfFxcZCg/Ol8qXFxkKSpcXC4/L2lcbiAgICBdLFxuICAgIHB1bmN0dWF0aW9uOiAvOj18PDx8Pj58XFwoXFx8fFxcfFxcKXwtPnxcXC4oPz1cXHcpfFt7fVtcXF07KCksOj9dLyxcbiAgICBvcGVyYXRvcjogL1xcXFxcXFxcfFxcfFxcLlxcLlxcfHxcXC5cXC58XFwvW35cXC89XT98Wz48XT0/fFstKypePX5dL1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9
(self["webpackChunkheaderproject"] = self["webpackChunkheaderproject"] || []).push([["react-syntax-highlighter_languages_refractor_clike"],{

/***/ "./node_modules/refractor/lang/clike.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/clike.js ***!
  \**********************************************/
/***/ ((module) => {

"use strict";


module.exports = clike
clike.displayName = 'clike'
clike.aliases = []
function clike(Prism) {
  Prism.languages.clike = {
    comment: [
      {
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: true
      },
      {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: true,
        greedy: true
      }
    ],
    string: {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: true
    },
    'class-name': {
      pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
      lookbehind: true,
      inside: {
        punctuation: /[.\\]/
      }
    },
    keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
    boolean: /\b(?:true|false)\b/,
    function: /\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
    punctuation: /[{}[\];(),.:]/
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFkZXJwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL2NsaWtlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsSUFBSTtBQUN6QjtBQUNBIiwiZmlsZSI6InJlYWN0LXN5bnRheC1oaWdobGlnaHRlcl9sYW5ndWFnZXNfcmVmcmFjdG9yX2NsaWtlLmJ1bmRsZS5jZWFlYTY2ODZiNjE3MjBmZjc2MC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsaWtlXG5jbGlrZS5kaXNwbGF5TmFtZSA9ICdjbGlrZSdcbmNsaWtlLmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24gY2xpa2UoUHJpc20pIHtcbiAgUHJpc20ubGFuZ3VhZ2VzLmNsaWtlID0ge1xuICAgIGNvbW1lbnQ6IFtcbiAgICAgIHtcbiAgICAgICAgcGF0dGVybjogLyhefFteXFxcXF0pXFwvXFwqW1xcc1xcU10qPyg/OlxcKlxcL3wkKS8sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdHRlcm46IC8oXnxbXlxcXFw6XSlcXC9cXC8uKi8sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgIGdyZWVkeTogdHJ1ZVxuICAgICAgfVxuICAgIF0sXG4gICAgc3RyaW5nOiB7XG4gICAgICBwYXR0ZXJuOiAvKFtcIiddKSg/OlxcXFwoPzpcXHJcXG58W1xcc1xcU10pfCg/IVxcMSlbXlxcXFxcXHJcXG5dKSpcXDEvLFxuICAgICAgZ3JlZWR5OiB0cnVlXG4gICAgfSxcbiAgICAnY2xhc3MtbmFtZSc6IHtcbiAgICAgIHBhdHRlcm46IC8oKD86XFxiKD86Y2xhc3N8aW50ZXJmYWNlfGV4dGVuZHN8aW1wbGVtZW50c3x0cmFpdHxpbnN0YW5jZW9mfG5ldylcXHMrKXwoPzpjYXRjaFxccytcXCgpKVtcXHcuXFxcXF0rL2ksXG4gICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgaW5zaWRlOiB7XG4gICAgICAgIHB1bmN0dWF0aW9uOiAvWy5cXFxcXS9cbiAgICAgIH1cbiAgICB9LFxuICAgIGtleXdvcmQ6IC9cXGIoPzppZnxlbHNlfHdoaWxlfGRvfGZvcnxyZXR1cm58aW58aW5zdGFuY2VvZnxmdW5jdGlvbnxuZXd8dHJ5fHRocm93fGNhdGNofGZpbmFsbHl8bnVsbHxicmVha3xjb250aW51ZSlcXGIvLFxuICAgIGJvb2xlYW46IC9cXGIoPzp0cnVlfGZhbHNlKVxcYi8sXG4gICAgZnVuY3Rpb246IC9cXHcrKD89XFwoKS8sXG4gICAgbnVtYmVyOiAvXFxiMHhbXFxkYS1mXStcXGJ8KD86XFxiXFxkK1xcLj9cXGQqfFxcQlxcLlxcZCspKD86ZVsrLV0/XFxkKyk/L2ksXG4gICAgb3BlcmF0b3I6IC8tLT98XFwrXFwrP3whPT89P3w8PT98Pj0/fD09Pz0/fCYmP3xcXHxcXHw/fFxcP3xcXCp8XFwvfH58XFxefCUvLFxuICAgIHB1bmN0dWF0aW9uOiAvW3t9W1xcXTsoKSwuOl0vXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
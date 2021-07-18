(self["webpackChunkheaderproject"] = self["webpackChunkheaderproject"] || []).push([["react-syntax-highlighter_languages_refractor_reason"],{

/***/ "./node_modules/refractor/lang/reason.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/reason.js ***!
  \***********************************************/
/***/ ((module) => {

"use strict";


module.exports = reason
reason.displayName = 'reason'
reason.aliases = []
function reason(Prism) {
  Prism.languages.reason = Prism.languages.extend('clike', {
    comment: {
      pattern: /(^|[^\\])\/\*[\s\S]*?\*\//,
      lookbehind: true
    },
    string: {
      pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,
      greedy: true
    },
    // 'class-name' must be matched *after* 'constructor' defined below
    'class-name': /\b[A-Z]\w*/,
    keyword: /\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,
    operator: /\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:mod|land|lor|lxor|lsl|lsr|asr)\b/
  })
  Prism.languages.insertBefore('reason', 'class-name', {
    character: {
      pattern: /'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,
      alias: 'string'
    },
    constructor: {
      // Negative look-ahead prevents from matching things like String.capitalize
      pattern: /\b[A-Z]\w*\b(?!\s*\.)/,
      alias: 'variable'
    },
    label: {
      pattern: /\b[a-z]\w*(?=::)/,
      alias: 'symbol'
    }
  }) // We can't match functions property, so let's not even try.
  delete Prism.languages.reason.function
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFkZXJwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL3JlYXNvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsRUFBRTtBQUNwQixHQUFHO0FBQ0g7QUFDQTtBQUNBLCtCQUErQixFQUFFLHlCQUF5QixFQUFFO0FBQzVEO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EiLCJmaWxlIjoicmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyX2xhbmd1YWdlc19yZWZyYWN0b3JfcmVhc29uLmJ1bmRsZS5jZWFlYTY2ODZiNjE3MjBmZjc2MC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlYXNvblxucmVhc29uLmRpc3BsYXlOYW1lID0gJ3JlYXNvbidcbnJlYXNvbi5hbGlhc2VzID0gW11cbmZ1bmN0aW9uIHJlYXNvbihQcmlzbSkge1xuICBQcmlzbS5sYW5ndWFnZXMucmVhc29uID0gUHJpc20ubGFuZ3VhZ2VzLmV4dGVuZCgnY2xpa2UnLCB7XG4gICAgY29tbWVudDoge1xuICAgICAgcGF0dGVybjogLyhefFteXFxcXF0pXFwvXFwqW1xcc1xcU10qP1xcKlxcLy8sXG4gICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgfSxcbiAgICBzdHJpbmc6IHtcbiAgICAgIHBhdHRlcm46IC9cIig/OlxcXFwoPzpcXHJcXG58W1xcc1xcU10pfFteXFxcXFxcclxcblwiXSkqXCIvLFxuICAgICAgZ3JlZWR5OiB0cnVlXG4gICAgfSxcbiAgICAvLyAnY2xhc3MtbmFtZScgbXVzdCBiZSBtYXRjaGVkICphZnRlciogJ2NvbnN0cnVjdG9yJyBkZWZpbmVkIGJlbG93XG4gICAgJ2NsYXNzLW5hbWUnOiAvXFxiW0EtWl1cXHcqLyxcbiAgICBrZXl3b3JkOiAvXFxiKD86YW5kfGFzfGFzc2VydHxiZWdpbnxjbGFzc3xjb25zdHJhaW50fGRvfGRvbmV8ZG93bnRvfGVsc2V8ZW5kfGV4Y2VwdGlvbnxleHRlcm5hbHxmb3J8ZnVufGZ1bmN0aW9ufGZ1bmN0b3J8aWZ8aW58aW5jbHVkZXxpbmhlcml0fGluaXRpYWxpemVyfGxhenl8bGV0fG1ldGhvZHxtb2R1bGV8bXV0YWJsZXxuZXd8bm9ucmVjfG9iamVjdHxvZnxvcGVufG9yfHByaXZhdGV8cmVjfHNpZ3xzdHJ1Y3R8c3dpdGNofHRoZW58dG98dHJ5fHR5cGV8dmFsfHZpcnR1YWx8d2hlbnx3aGlsZXx3aXRoKVxcYi8sXG4gICAgb3BlcmF0b3I6IC9cXC57M318Ols6PV18XFx8PnwtPnw9KD86PT0/fD4pP3w8PT98Pj0/fFt8Xj8nIyF+YF18WytcXC0qXFwvXVxcLj98XFxiKD86bW9kfGxhbmR8bG9yfGx4b3J8bHNsfGxzcnxhc3IpXFxiL1xuICB9KVxuICBQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdyZWFzb24nLCAnY2xhc3MtbmFtZScsIHtcbiAgICBjaGFyYWN0ZXI6IHtcbiAgICAgIHBhdHRlcm46IC8nKD86XFxcXHhbXFxkYS1mXXsyfXxcXFxcb1swLTNdWzAtN11bMC03XXxcXFxcXFxkezN9fFxcXFwufFteJ1xcXFxcXHJcXG5dKScvLFxuICAgICAgYWxpYXM6ICdzdHJpbmcnXG4gICAgfSxcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgLy8gTmVnYXRpdmUgbG9vay1haGVhZCBwcmV2ZW50cyBmcm9tIG1hdGNoaW5nIHRoaW5ncyBsaWtlIFN0cmluZy5jYXBpdGFsaXplXG4gICAgICBwYXR0ZXJuOiAvXFxiW0EtWl1cXHcqXFxiKD8hXFxzKlxcLikvLFxuICAgICAgYWxpYXM6ICd2YXJpYWJsZSdcbiAgICB9LFxuICAgIGxhYmVsOiB7XG4gICAgICBwYXR0ZXJuOiAvXFxiW2Etel1cXHcqKD89OjopLyxcbiAgICAgIGFsaWFzOiAnc3ltYm9sJ1xuICAgIH1cbiAgfSkgLy8gV2UgY2FuJ3QgbWF0Y2ggZnVuY3Rpb25zIHByb3BlcnR5LCBzbyBsZXQncyBub3QgZXZlbiB0cnkuXG4gIGRlbGV0ZSBQcmlzbS5sYW5ndWFnZXMucmVhc29uLmZ1bmN0aW9uXG59XG4iXSwic291cmNlUm9vdCI6IiJ9
(self["webpackChunkheaderproject"] = self["webpackChunkheaderproject"] || []).push([["react-syntax-highlighter_languages_refractor_nim"],{

/***/ "./node_modules/refractor/lang/nim.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/nim.js ***!
  \********************************************/
/***/ ((module) => {

"use strict";


module.exports = nim
nim.displayName = 'nim'
nim.aliases = []
function nim(Prism) {
  Prism.languages.nim = {
    comment: /#.*/,
    // Double-quoted strings can be prefixed by an identifier (Generalized raw string literals)
    // Character literals are handled specifically to prevent issues with numeric type suffixes
    string: {
      pattern: /(?:(?:\b(?!\d)(?:\w|\\x[8-9a-fA-F][0-9a-fA-F])+)?(?:"""[\s\S]*?"""(?!")|"(?:\\[\s\S]|""|[^"\\])*")|'(?:\\(?:\d+|x[\da-fA-F]{2}|.)|[^'])')/,
      greedy: true
    },
    // The negative look ahead prevents wrong highlighting of the .. operator
    number: /\b(?:0[xXoObB][\da-fA-F_]+|\d[\d_]*(?:(?!\.\.)\.[\d_]*)?(?:[eE][+-]?\d[\d_]*)?)(?:'?[iuf]\d*)?/,
    keyword: /\b(?:addr|as|asm|atomic|bind|block|break|case|cast|concept|const|continue|converter|defer|discard|distinct|do|elif|else|end|enum|except|export|finally|for|from|func|generic|if|import|include|interface|iterator|let|macro|method|mixin|nil|object|out|proc|ptr|raise|ref|return|static|template|try|tuple|type|using|var|when|while|with|without|yield)\b/,
    function: {
      pattern: /(?:(?!\d)(?:\w|\\x[8-9a-fA-F][0-9a-fA-F])+|`[^`\r\n]+`)\*?(?:\[[^\]]+\])?(?=\s*\()/,
      inside: {
        operator: /\*$/
      }
    },
    // We don't want to highlight operators inside backticks
    ignore: {
      pattern: /`[^`\r\n]+`/,
      inside: {
        punctuation: /`/
      }
    },
    operator: {
      // Look behind and look ahead prevent wrong highlighting of punctuations [. .] {. .} (. .)
      // but allow the slice operator .. to take precedence over them
      // One can define his own operators in Nim so all combination of operators might be an operator.
      pattern: /(^|[({\[](?=\.\.)|(?![({\[]\.).)(?:(?:[=+\-*\/<>@$~&%|!?^:\\]|\.\.|\.(?![)}\]]))+|\b(?:and|div|of|or|in|is|isnot|mod|not|notin|shl|shr|xor)\b)/m,
      lookbehind: true
    },
    punctuation: /[({\[]\.|\.[)}\]]|[`(){}\[\],:]/
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFkZXJwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL25pbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0SUFBNEksRUFBRTtBQUM5STtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLHNGQUFzRixJQUFJO0FBQzFGO0FBQ0E7QUFDQSxzQkFBc0Isa0JBQWtCLG1EQUFtRDtBQUMzRjtBQUNBLEtBQUs7QUFDTCxxQkFBcUIsV0FBVyxVQUFVO0FBQzFDO0FBQ0EiLCJmaWxlIjoicmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyX2xhbmd1YWdlc19yZWZyYWN0b3JfbmltLmJ1bmRsZS4xMDI2MGQ2ZGUxMTEwZmZmZDM1Ny5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IG5pbVxubmltLmRpc3BsYXlOYW1lID0gJ25pbSdcbm5pbS5hbGlhc2VzID0gW11cbmZ1bmN0aW9uIG5pbShQcmlzbSkge1xuICBQcmlzbS5sYW5ndWFnZXMubmltID0ge1xuICAgIGNvbW1lbnQ6IC8jLiovLFxuICAgIC8vIERvdWJsZS1xdW90ZWQgc3RyaW5ncyBjYW4gYmUgcHJlZml4ZWQgYnkgYW4gaWRlbnRpZmllciAoR2VuZXJhbGl6ZWQgcmF3IHN0cmluZyBsaXRlcmFscylcbiAgICAvLyBDaGFyYWN0ZXIgbGl0ZXJhbHMgYXJlIGhhbmRsZWQgc3BlY2lmaWNhbGx5IHRvIHByZXZlbnQgaXNzdWVzIHdpdGggbnVtZXJpYyB0eXBlIHN1ZmZpeGVzXG4gICAgc3RyaW5nOiB7XG4gICAgICBwYXR0ZXJuOiAvKD86KD86XFxiKD8hXFxkKSg/Olxcd3xcXFxceFs4LTlhLWZBLUZdWzAtOWEtZkEtRl0pKyk/KD86XCJcIlwiW1xcc1xcU10qP1wiXCJcIig/IVwiKXxcIig/OlxcXFxbXFxzXFxTXXxcIlwifFteXCJcXFxcXSkqXCIpfCcoPzpcXFxcKD86XFxkK3x4W1xcZGEtZkEtRl17Mn18Lil8W14nXSknKS8sXG4gICAgICBncmVlZHk6IHRydWVcbiAgICB9LFxuICAgIC8vIFRoZSBuZWdhdGl2ZSBsb29rIGFoZWFkIHByZXZlbnRzIHdyb25nIGhpZ2hsaWdodGluZyBvZiB0aGUgLi4gb3BlcmF0b3JcbiAgICBudW1iZXI6IC9cXGIoPzowW3hYb09iQl1bXFxkYS1mQS1GX10rfFxcZFtcXGRfXSooPzooPyFcXC5cXC4pXFwuW1xcZF9dKik/KD86W2VFXVsrLV0/XFxkW1xcZF9dKik/KSg/Oic/W2l1Zl1cXGQqKT8vLFxuICAgIGtleXdvcmQ6IC9cXGIoPzphZGRyfGFzfGFzbXxhdG9taWN8YmluZHxibG9ja3xicmVha3xjYXNlfGNhc3R8Y29uY2VwdHxjb25zdHxjb250aW51ZXxjb252ZXJ0ZXJ8ZGVmZXJ8ZGlzY2FyZHxkaXN0aW5jdHxkb3xlbGlmfGVsc2V8ZW5kfGVudW18ZXhjZXB0fGV4cG9ydHxmaW5hbGx5fGZvcnxmcm9tfGZ1bmN8Z2VuZXJpY3xpZnxpbXBvcnR8aW5jbHVkZXxpbnRlcmZhY2V8aXRlcmF0b3J8bGV0fG1hY3JvfG1ldGhvZHxtaXhpbnxuaWx8b2JqZWN0fG91dHxwcm9jfHB0cnxyYWlzZXxyZWZ8cmV0dXJufHN0YXRpY3x0ZW1wbGF0ZXx0cnl8dHVwbGV8dHlwZXx1c2luZ3x2YXJ8d2hlbnx3aGlsZXx3aXRofHdpdGhvdXR8eWllbGQpXFxiLyxcbiAgICBmdW5jdGlvbjoge1xuICAgICAgcGF0dGVybjogLyg/Oig/IVxcZCkoPzpcXHd8XFxcXHhbOC05YS1mQS1GXVswLTlhLWZBLUZdKSt8YFteYFxcclxcbl0rYClcXCo/KD86XFxbW15cXF1dK1xcXSk/KD89XFxzKlxcKCkvLFxuICAgICAgaW5zaWRlOiB7XG4gICAgICAgIG9wZXJhdG9yOiAvXFwqJC9cbiAgICAgIH1cbiAgICB9LFxuICAgIC8vIFdlIGRvbid0IHdhbnQgdG8gaGlnaGxpZ2h0IG9wZXJhdG9ycyBpbnNpZGUgYmFja3RpY2tzXG4gICAgaWdub3JlOiB7XG4gICAgICBwYXR0ZXJuOiAvYFteYFxcclxcbl0rYC8sXG4gICAgICBpbnNpZGU6IHtcbiAgICAgICAgcHVuY3R1YXRpb246IC9gL1xuICAgICAgfVxuICAgIH0sXG4gICAgb3BlcmF0b3I6IHtcbiAgICAgIC8vIExvb2sgYmVoaW5kIGFuZCBsb29rIGFoZWFkIHByZXZlbnQgd3JvbmcgaGlnaGxpZ2h0aW5nIG9mIHB1bmN0dWF0aW9ucyBbLiAuXSB7LiAufSAoLiAuKVxuICAgICAgLy8gYnV0IGFsbG93IHRoZSBzbGljZSBvcGVyYXRvciAuLiB0byB0YWtlIHByZWNlZGVuY2Ugb3ZlciB0aGVtXG4gICAgICAvLyBPbmUgY2FuIGRlZmluZSBoaXMgb3duIG9wZXJhdG9ycyBpbiBOaW0gc28gYWxsIGNvbWJpbmF0aW9uIG9mIG9wZXJhdG9ycyBtaWdodCBiZSBhbiBvcGVyYXRvci5cbiAgICAgIHBhdHRlcm46IC8oXnxbKHtcXFtdKD89XFwuXFwuKXwoPyFbKHtcXFtdXFwuKS4pKD86KD86Wz0rXFwtKlxcLzw+QCR+JiV8IT9eOlxcXFxdfFxcLlxcLnxcXC4oPyFbKX1cXF1dKSkrfFxcYig/OmFuZHxkaXZ8b2Z8b3J8aW58aXN8aXNub3R8bW9kfG5vdHxub3RpbnxzaGx8c2hyfHhvcilcXGIpL20sXG4gICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgfSxcbiAgICBwdW5jdHVhdGlvbjogL1soe1xcW11cXC58XFwuWyl9XFxdXXxbYCgpe31cXFtcXF0sOl0vXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
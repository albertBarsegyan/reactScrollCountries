(self["webpackChunkheaderproject"] = self["webpackChunkheaderproject"] || []).push([["react-syntax-highlighter_languages_refractor_latex"],{

/***/ "./node_modules/refractor/lang/latex.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/latex.js ***!
  \**********************************************/
/***/ ((module) => {

"use strict";


module.exports = latex
latex.displayName = 'latex'
latex.aliases = ['tex', 'context']
function latex(Prism) {
  ;(function(Prism) {
    var funcPattern = /\\(?:[^a-z()[\]]|[a-z*]+)/i
    var insideEqu = {
      'equation-command': {
        pattern: funcPattern,
        alias: 'regex'
      }
    }
    Prism.languages.latex = {
      comment: /%.*/m,
      // the verbatim environment prints whitespace to the document
      cdata: {
        pattern: /(\\begin\{((?:verbatim|lstlisting)\*?)\})[\s\S]*?(?=\\end\{\2\})/,
        lookbehind: true
      },
      /*
       * equations can be between $$ $$ or $ $ or \( \) or \[ \]
       * (all are multiline)
       */
      equation: [
        {
          pattern: /\$\$(?:\\[\s\S]|[^\\$])+\$\$|\$(?:\\[\s\S]|[^\\$])+\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]/,
          inside: insideEqu,
          alias: 'string'
        },
        {
          pattern: /(\\begin\{((?:equation|math|eqnarray|align|multline|gather)\*?)\})[\s\S]*?(?=\\end\{\2\})/,
          lookbehind: true,
          inside: insideEqu,
          alias: 'string'
        }
      ],
      /*
       * arguments which are keywords or references are highlighted
       * as keywords
       */
      keyword: {
        pattern: /(\\(?:begin|end|ref|cite|label|usepackage|documentclass)(?:\[[^\]]+\])?\{)[^}]+(?=\})/,
        lookbehind: true
      },
      url: {
        pattern: /(\\url\{)[^}]+(?=\})/,
        lookbehind: true
      },
      /*
       * section or chapter headlines are highlighted as bold so that
       * they stand out more
       */
      headline: {
        pattern: /(\\(?:part|chapter|section|subsection|frametitle|subsubsection|paragraph|subparagraph|subsubparagraph|subsubsubparagraph)\*?(?:\[[^\]]+\])?\{)[^}]+(?=\}(?:\[[^\]]+\])?)/,
        lookbehind: true,
        alias: 'class-name'
      },
      function: {
        pattern: funcPattern,
        alias: 'selector'
      },
      punctuation: /[[\]{}&]/
    }
    Prism.languages.tex = Prism.languages.latex
    Prism.languages.context = Prism.languages.latex
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFkZXJwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL2xhdGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsOEJBQThCLG1CQUFtQixJQUFJO0FBQ2pGO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLDhCQUE4Qix1REFBdUQsbUJBQW1CLElBQUk7QUFDNUc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRkFBMkYsSUFBSSxPQUFPO0FBQ3RHO0FBQ0EsT0FBTztBQUNQO0FBQ0EsMEJBQTBCLElBQUksT0FBTztBQUNyQztBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0pBQStKLElBQUksT0FBTztBQUMxSztBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIIiwiZmlsZSI6InJlYWN0LXN5bnRheC1oaWdobGlnaHRlcl9sYW5ndWFnZXNfcmVmcmFjdG9yX2xhdGV4LmJ1bmRsZS4xMDI2MGQ2ZGUxMTEwZmZmZDM1Ny5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxhdGV4XG5sYXRleC5kaXNwbGF5TmFtZSA9ICdsYXRleCdcbmxhdGV4LmFsaWFzZXMgPSBbJ3RleCcsICdjb250ZXh0J11cbmZ1bmN0aW9uIGxhdGV4KFByaXNtKSB7XG4gIDsoZnVuY3Rpb24oUHJpc20pIHtcbiAgICB2YXIgZnVuY1BhdHRlcm4gPSAvXFxcXCg/OlteYS16KClbXFxdXXxbYS16Kl0rKS9pXG4gICAgdmFyIGluc2lkZUVxdSA9IHtcbiAgICAgICdlcXVhdGlvbi1jb21tYW5kJzoge1xuICAgICAgICBwYXR0ZXJuOiBmdW5jUGF0dGVybixcbiAgICAgICAgYWxpYXM6ICdyZWdleCdcbiAgICAgIH1cbiAgICB9XG4gICAgUHJpc20ubGFuZ3VhZ2VzLmxhdGV4ID0ge1xuICAgICAgY29tbWVudDogLyUuKi9tLFxuICAgICAgLy8gdGhlIHZlcmJhdGltIGVudmlyb25tZW50IHByaW50cyB3aGl0ZXNwYWNlIHRvIHRoZSBkb2N1bWVudFxuICAgICAgY2RhdGE6IHtcbiAgICAgICAgcGF0dGVybjogLyhcXFxcYmVnaW5cXHsoKD86dmVyYmF0aW18bHN0bGlzdGluZylcXCo/KVxcfSlbXFxzXFxTXSo/KD89XFxcXGVuZFxce1xcMlxcfSkvLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgICB9LFxuICAgICAgLypcbiAgICAgICAqIGVxdWF0aW9ucyBjYW4gYmUgYmV0d2VlbiAkJCAkJCBvciAkICQgb3IgXFwoIFxcKSBvciBcXFsgXFxdXG4gICAgICAgKiAoYWxsIGFyZSBtdWx0aWxpbmUpXG4gICAgICAgKi9cbiAgICAgIGVxdWF0aW9uOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwYXR0ZXJuOiAvXFwkXFwkKD86XFxcXFtcXHNcXFNdfFteXFxcXCRdKStcXCRcXCR8XFwkKD86XFxcXFtcXHNcXFNdfFteXFxcXCRdKStcXCR8XFxcXFxcKFtcXHNcXFNdKj9cXFxcXFwpfFxcXFxcXFtbXFxzXFxTXSo/XFxcXFxcXS8sXG4gICAgICAgICAgaW5zaWRlOiBpbnNpZGVFcXUsXG4gICAgICAgICAgYWxpYXM6ICdzdHJpbmcnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYXR0ZXJuOiAvKFxcXFxiZWdpblxceygoPzplcXVhdGlvbnxtYXRofGVxbmFycmF5fGFsaWdufG11bHRsaW5lfGdhdGhlcilcXCo/KVxcfSlbXFxzXFxTXSo/KD89XFxcXGVuZFxce1xcMlxcfSkvLFxuICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgICAgaW5zaWRlOiBpbnNpZGVFcXUsXG4gICAgICAgICAgYWxpYXM6ICdzdHJpbmcnXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICAvKlxuICAgICAgICogYXJndW1lbnRzIHdoaWNoIGFyZSBrZXl3b3JkcyBvciByZWZlcmVuY2VzIGFyZSBoaWdobGlnaHRlZFxuICAgICAgICogYXMga2V5d29yZHNcbiAgICAgICAqL1xuICAgICAga2V5d29yZDoge1xuICAgICAgICBwYXR0ZXJuOiAvKFxcXFwoPzpiZWdpbnxlbmR8cmVmfGNpdGV8bGFiZWx8dXNlcGFja2FnZXxkb2N1bWVudGNsYXNzKSg/OlxcW1teXFxdXStcXF0pP1xceylbXn1dKyg/PVxcfSkvLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgICB9LFxuICAgICAgdXJsOiB7XG4gICAgICAgIHBhdHRlcm46IC8oXFxcXHVybFxceylbXn1dKyg/PVxcfSkvLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgICB9LFxuICAgICAgLypcbiAgICAgICAqIHNlY3Rpb24gb3IgY2hhcHRlciBoZWFkbGluZXMgYXJlIGhpZ2hsaWdodGVkIGFzIGJvbGQgc28gdGhhdFxuICAgICAgICogdGhleSBzdGFuZCBvdXQgbW9yZVxuICAgICAgICovXG4gICAgICBoZWFkbGluZToge1xuICAgICAgICBwYXR0ZXJuOiAvKFxcXFwoPzpwYXJ0fGNoYXB0ZXJ8c2VjdGlvbnxzdWJzZWN0aW9ufGZyYW1ldGl0bGV8c3Vic3Vic2VjdGlvbnxwYXJhZ3JhcGh8c3VicGFyYWdyYXBofHN1YnN1YnBhcmFncmFwaHxzdWJzdWJzdWJwYXJhZ3JhcGgpXFwqPyg/OlxcW1teXFxdXStcXF0pP1xceylbXn1dKyg/PVxcfSg/OlxcW1teXFxdXStcXF0pPykvLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICBhbGlhczogJ2NsYXNzLW5hbWUnXG4gICAgICB9LFxuICAgICAgZnVuY3Rpb246IHtcbiAgICAgICAgcGF0dGVybjogZnVuY1BhdHRlcm4sXG4gICAgICAgIGFsaWFzOiAnc2VsZWN0b3InXG4gICAgICB9LFxuICAgICAgcHVuY3R1YXRpb246IC9bW1xcXXt9Jl0vXG4gICAgfVxuICAgIFByaXNtLmxhbmd1YWdlcy50ZXggPSBQcmlzbS5sYW5ndWFnZXMubGF0ZXhcbiAgICBQcmlzbS5sYW5ndWFnZXMuY29udGV4dCA9IFByaXNtLmxhbmd1YWdlcy5sYXRleFxuICB9KShQcmlzbSlcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
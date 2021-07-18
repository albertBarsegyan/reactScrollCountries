(self["webpackChunkheaderproject"] = self["webpackChunkheaderproject"] || []).push([["react-syntax-highlighter_languages_refractor_autoit"],{

/***/ "./node_modules/refractor/lang/autoit.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/autoit.js ***!
  \***********************************************/
/***/ ((module) => {

"use strict";


module.exports = autoit
autoit.displayName = 'autoit'
autoit.aliases = []
function autoit(Prism) {
  Prism.languages.autoit = {
    comment: [
      /;.*/,
      {
        // The multi-line comments delimiters can actually be commented out with ";"
        pattern: /(^\s*)#(?:comments-start|cs)[\s\S]*?^\s*#(?:comments-end|ce)/m,
        lookbehind: true
      }
    ],
    url: {
      pattern: /(^\s*#include\s+)(?:<[^\r\n>]+>|"[^\r\n"]+")/m,
      lookbehind: true
    },
    string: {
      pattern: /(["'])(?:\1\1|(?!\1)[^\r\n])*\1/,
      greedy: true,
      inside: {
        variable: /([%$@])\w+\1/
      }
    },
    directive: {
      pattern: /(^\s*)#\w+/m,
      lookbehind: true,
      alias: 'keyword'
    },
    function: /\b\w+(?=\()/,
    // Variables and macros
    variable: /[$@]\w+/,
    keyword: /\b(?:Case|Const|Continue(?:Case|Loop)|Default|Dim|Do|Else(?:If)?|End(?:Func|If|Select|Switch|With)|Enum|Exit(?:Loop)?|For|Func|Global|If|In|Local|Next|Null|ReDim|Select|Static|Step|Switch|Then|To|Until|Volatile|WEnd|While|With)\b/i,
    number: /\b(?:0x[\da-f]+|\d+(?:\.\d+)?(?:e[+-]?\d+)?)\b/i,
    boolean: /\b(?:True|False)\b/i,
    operator: /<[=>]?|[-+*\/=&>]=?|[?^]|\b(?:And|Or|Not)\b/i,
    punctuation: /[\[\]().,:]/
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFkZXJwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL2F1dG9pdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxtRkFBbUY7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InJlYWN0LXN5bnRheC1oaWdobGlnaHRlcl9sYW5ndWFnZXNfcmVmcmFjdG9yX2F1dG9pdC5idW5kbGUuY2VhZWE2Njg2YjYxNzIwZmY3NjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBhdXRvaXRcbmF1dG9pdC5kaXNwbGF5TmFtZSA9ICdhdXRvaXQnXG5hdXRvaXQuYWxpYXNlcyA9IFtdXG5mdW5jdGlvbiBhdXRvaXQoUHJpc20pIHtcbiAgUHJpc20ubGFuZ3VhZ2VzLmF1dG9pdCA9IHtcbiAgICBjb21tZW50OiBbXG4gICAgICAvOy4qLyxcbiAgICAgIHtcbiAgICAgICAgLy8gVGhlIG11bHRpLWxpbmUgY29tbWVudHMgZGVsaW1pdGVycyBjYW4gYWN0dWFsbHkgYmUgY29tbWVudGVkIG91dCB3aXRoIFwiO1wiXG4gICAgICAgIHBhdHRlcm46IC8oXlxccyopIyg/OmNvbW1lbnRzLXN0YXJ0fGNzKVtcXHNcXFNdKj9eXFxzKiMoPzpjb21tZW50cy1lbmR8Y2UpL20sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgIH1cbiAgICBdLFxuICAgIHVybDoge1xuICAgICAgcGF0dGVybjogLyheXFxzKiNpbmNsdWRlXFxzKykoPzo8W15cXHJcXG4+XSs+fFwiW15cXHJcXG5cIl0rXCIpL20sXG4gICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgfSxcbiAgICBzdHJpbmc6IHtcbiAgICAgIHBhdHRlcm46IC8oW1wiJ10pKD86XFwxXFwxfCg/IVxcMSlbXlxcclxcbl0pKlxcMS8sXG4gICAgICBncmVlZHk6IHRydWUsXG4gICAgICBpbnNpZGU6IHtcbiAgICAgICAgdmFyaWFibGU6IC8oWyUkQF0pXFx3K1xcMS9cbiAgICAgIH1cbiAgICB9LFxuICAgIGRpcmVjdGl2ZToge1xuICAgICAgcGF0dGVybjogLyheXFxzKikjXFx3Ky9tLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgIGFsaWFzOiAna2V5d29yZCdcbiAgICB9LFxuICAgIGZ1bmN0aW9uOiAvXFxiXFx3Kyg/PVxcKCkvLFxuICAgIC8vIFZhcmlhYmxlcyBhbmQgbWFjcm9zXG4gICAgdmFyaWFibGU6IC9bJEBdXFx3Ky8sXG4gICAga2V5d29yZDogL1xcYig/OkNhc2V8Q29uc3R8Q29udGludWUoPzpDYXNlfExvb3ApfERlZmF1bHR8RGltfERvfEVsc2UoPzpJZik/fEVuZCg/OkZ1bmN8SWZ8U2VsZWN0fFN3aXRjaHxXaXRoKXxFbnVtfEV4aXQoPzpMb29wKT98Rm9yfEZ1bmN8R2xvYmFsfElmfElufExvY2FsfE5leHR8TnVsbHxSZURpbXxTZWxlY3R8U3RhdGljfFN0ZXB8U3dpdGNofFRoZW58VG98VW50aWx8Vm9sYXRpbGV8V0VuZHxXaGlsZXxXaXRoKVxcYi9pLFxuICAgIG51bWJlcjogL1xcYig/OjB4W1xcZGEtZl0rfFxcZCsoPzpcXC5cXGQrKT8oPzplWystXT9cXGQrKT8pXFxiL2ksXG4gICAgYm9vbGVhbjogL1xcYig/OlRydWV8RmFsc2UpXFxiL2ksXG4gICAgb3BlcmF0b3I6IC88Wz0+XT98Wy0rKlxcLz0mPl09P3xbP15dfFxcYig/OkFuZHxPcnxOb3QpXFxiL2ksXG4gICAgcHVuY3R1YXRpb246IC9bXFxbXFxdKCkuLDpdL1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9
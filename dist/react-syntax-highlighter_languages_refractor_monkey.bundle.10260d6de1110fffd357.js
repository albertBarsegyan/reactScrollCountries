(self["webpackChunkheaderproject"] = self["webpackChunkheaderproject"] || []).push([["react-syntax-highlighter_languages_refractor_monkey"],{

/***/ "./node_modules/refractor/lang/monkey.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/monkey.js ***!
  \***********************************************/
/***/ ((module) => {

"use strict";


module.exports = monkey
monkey.displayName = 'monkey'
monkey.aliases = []
function monkey(Prism) {
  Prism.languages.monkey = {
    string: /"[^"\r\n]*"/,
    comment: [
      {
        pattern: /^#Rem\s+[\s\S]*?^#End/im,
        greedy: true
      },
      {
        pattern: /'.+/,
        greedy: true
      }
    ],
    preprocessor: {
      pattern: /(^[ \t]*)#.+/m,
      lookbehind: true,
      alias: 'comment'
    },
    function: /\w+(?=\()/,
    'type-char': {
      pattern: /(\w)[?%#$]/,
      lookbehind: true,
      alias: 'variable'
    },
    number: {
      pattern: /((?:\.\.)?)(?:(?:\b|\B-\.?|\B\.)\d+(?:(?!\.\.)\.\d*)?|\$[\da-f]+)/i,
      lookbehind: true
    },
    keyword: /\b(?:Void|Strict|Public|Private|Property|Bool|Int|Float|String|Array|Object|Continue|Exit|Import|Extern|New|Self|Super|Try|Catch|Eachin|True|False|Extends|Abstract|Final|Select|Case|Default|Const|Local|Global|Field|Method|Function|Class|End|If|Then|Else|ElseIf|EndIf|While|Wend|Repeat|Until|Forever|For|To|Step|Next|Return|Module|Interface|Implements|Inline|Throw|Null)\b/i,
    operator: /\.\.|<[=>]?|>=?|:?=|(?:[+\-*\/&~|]|\b(?:Mod|Shl|Shr)\b)=?|\b(?:And|Not|Or)\b/i,
    punctuation: /[.,:;()\[\]]/
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFkZXJwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL21vbmtleS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBIiwiZmlsZSI6InJlYWN0LXN5bnRheC1oaWdobGlnaHRlcl9sYW5ndWFnZXNfcmVmcmFjdG9yX21vbmtleS5idW5kbGUuMTAyNjBkNmRlMTExMGZmZmQzNTcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBtb25rZXlcbm1vbmtleS5kaXNwbGF5TmFtZSA9ICdtb25rZXknXG5tb25rZXkuYWxpYXNlcyA9IFtdXG5mdW5jdGlvbiBtb25rZXkoUHJpc20pIHtcbiAgUHJpc20ubGFuZ3VhZ2VzLm1vbmtleSA9IHtcbiAgICBzdHJpbmc6IC9cIlteXCJcXHJcXG5dKlwiLyxcbiAgICBjb21tZW50OiBbXG4gICAgICB7XG4gICAgICAgIHBhdHRlcm46IC9eI1JlbVxccytbXFxzXFxTXSo/XiNFbmQvaW0sXG4gICAgICAgIGdyZWVkeTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0dGVybjogLycuKy8sXG4gICAgICAgIGdyZWVkeTogdHJ1ZVxuICAgICAgfVxuICAgIF0sXG4gICAgcHJlcHJvY2Vzc29yOiB7XG4gICAgICBwYXR0ZXJuOiAvKF5bIFxcdF0qKSMuKy9tLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgIGFsaWFzOiAnY29tbWVudCdcbiAgICB9LFxuICAgIGZ1bmN0aW9uOiAvXFx3Kyg/PVxcKCkvLFxuICAgICd0eXBlLWNoYXInOiB7XG4gICAgICBwYXR0ZXJuOiAvKFxcdylbPyUjJF0vLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgIGFsaWFzOiAndmFyaWFibGUnXG4gICAgfSxcbiAgICBudW1iZXI6IHtcbiAgICAgIHBhdHRlcm46IC8oKD86XFwuXFwuKT8pKD86KD86XFxifFxcQi1cXC4/fFxcQlxcLilcXGQrKD86KD8hXFwuXFwuKVxcLlxcZCopP3xcXCRbXFxkYS1mXSspL2ksXG4gICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgfSxcbiAgICBrZXl3b3JkOiAvXFxiKD86Vm9pZHxTdHJpY3R8UHVibGljfFByaXZhdGV8UHJvcGVydHl8Qm9vbHxJbnR8RmxvYXR8U3RyaW5nfEFycmF5fE9iamVjdHxDb250aW51ZXxFeGl0fEltcG9ydHxFeHRlcm58TmV3fFNlbGZ8U3VwZXJ8VHJ5fENhdGNofEVhY2hpbnxUcnVlfEZhbHNlfEV4dGVuZHN8QWJzdHJhY3R8RmluYWx8U2VsZWN0fENhc2V8RGVmYXVsdHxDb25zdHxMb2NhbHxHbG9iYWx8RmllbGR8TWV0aG9kfEZ1bmN0aW9ufENsYXNzfEVuZHxJZnxUaGVufEVsc2V8RWxzZUlmfEVuZElmfFdoaWxlfFdlbmR8UmVwZWF0fFVudGlsfEZvcmV2ZXJ8Rm9yfFRvfFN0ZXB8TmV4dHxSZXR1cm58TW9kdWxlfEludGVyZmFjZXxJbXBsZW1lbnRzfElubGluZXxUaHJvd3xOdWxsKVxcYi9pLFxuICAgIG9wZXJhdG9yOiAvXFwuXFwufDxbPT5dP3w+PT98Oj89fCg/OlsrXFwtKlxcLyZ+fF18XFxiKD86TW9kfFNobHxTaHIpXFxiKT0/fFxcYig/OkFuZHxOb3R8T3IpXFxiL2ksXG4gICAgcHVuY3R1YXRpb246IC9bLiw6OygpXFxbXFxdXS9cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
(self["webpackChunkheaderproject"] = self["webpackChunkheaderproject"] || []).push([["react-syntax-highlighter_languages_refractor_tcl"],{

/***/ "./node_modules/refractor/lang/tcl.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/tcl.js ***!
  \********************************************/
/***/ ((module) => {

"use strict";


module.exports = tcl
tcl.displayName = 'tcl'
tcl.aliases = []
function tcl(Prism) {
  Prism.languages.tcl = {
    comment: {
      pattern: /(^|[^\\])#.*/,
      lookbehind: true
    },
    string: {
      pattern: /"(?:[^"\\\r\n]|\\(?:\r\n|[\s\S]))*"/,
      greedy: true
    },
    variable: [
      {
        pattern: /(\$)(?:::)?(?:[a-zA-Z0-9]+::)*\w+/,
        lookbehind: true
      },
      {
        pattern: /(\$){[^}]+}/,
        lookbehind: true
      },
      {
        pattern: /(^\s*set[ \t]+)(?:::)?(?:[a-zA-Z0-9]+::)*\w+/m,
        lookbehind: true
      }
    ],
    function: {
      pattern: /(^\s*proc[ \t]+)[^\s]+/m,
      lookbehind: true
    },
    builtin: [
      {
        pattern: /(^\s*)(?:proc|return|class|error|eval|exit|for|foreach|if|switch|while|break|continue)\b/m,
        lookbehind: true
      },
      /\b(?:elseif|else)\b/
    ],
    scope: {
      pattern: /(^\s*)(?:global|upvar|variable)\b/m,
      lookbehind: true,
      alias: 'constant'
    },
    keyword: {
      pattern: /(^\s*|\[)(?:after|append|apply|array|auto_(?:execok|import|load|mkindex|qualify|reset)|automkindex_old|bgerror|binary|catch|cd|chan|clock|close|concat|dde|dict|encoding|eof|exec|expr|fblocked|fconfigure|fcopy|file(?:event|name)?|flush|gets|glob|history|http|incr|info|interp|join|lappend|lassign|lindex|linsert|list|llength|load|lrange|lrepeat|lreplace|lreverse|lsearch|lset|lsort|math(?:func|op)|memory|msgcat|namespace|open|package|parray|pid|pkg_mkIndex|platform|puts|pwd|re_syntax|read|refchan|regexp|registry|regsub|rename|Safe_Base|scan|seek|set|socket|source|split|string|subst|Tcl|tcl(?:_endOfWord|_findLibrary|startOf(?:Next|Previous)Word|wordBreak(?:After|Before)|test|vars)|tell|time|tm|trace|unknown|unload|unset|update|uplevel|vwait)\b/m,
      lookbehind: true
    },
    operator: /!=?|\*\*?|==|&&?|\|\|?|<[=<]?|>[=>]?|[-+~\/%?^]|\b(?:eq|ne|in|ni)\b/,
    punctuation: /[{}()\[\]]/
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFkZXJwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL3RjbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLHVCQUF1QixHQUFHLEdBQUc7QUFDN0I7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EiLCJmaWxlIjoicmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyX2xhbmd1YWdlc19yZWZyYWN0b3JfdGNsLmJ1bmRsZS5jZWFlYTY2ODZiNjE3MjBmZjc2MC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHRjbFxudGNsLmRpc3BsYXlOYW1lID0gJ3RjbCdcbnRjbC5hbGlhc2VzID0gW11cbmZ1bmN0aW9uIHRjbChQcmlzbSkge1xuICBQcmlzbS5sYW5ndWFnZXMudGNsID0ge1xuICAgIGNvbW1lbnQ6IHtcbiAgICAgIHBhdHRlcm46IC8oXnxbXlxcXFxdKSMuKi8sXG4gICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgfSxcbiAgICBzdHJpbmc6IHtcbiAgICAgIHBhdHRlcm46IC9cIig/OlteXCJcXFxcXFxyXFxuXXxcXFxcKD86XFxyXFxufFtcXHNcXFNdKSkqXCIvLFxuICAgICAgZ3JlZWR5OiB0cnVlXG4gICAgfSxcbiAgICB2YXJpYWJsZTogW1xuICAgICAge1xuICAgICAgICBwYXR0ZXJuOiAvKFxcJCkoPzo6Oik/KD86W2EtekEtWjAtOV0rOjopKlxcdysvLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXR0ZXJuOiAvKFxcJCl7W159XSt9LyxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0dGVybjogLyheXFxzKnNldFsgXFx0XSspKD86OjopPyg/OlthLXpBLVowLTldKzo6KSpcXHcrL20sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgIH1cbiAgICBdLFxuICAgIGZ1bmN0aW9uOiB7XG4gICAgICBwYXR0ZXJuOiAvKF5cXHMqcHJvY1sgXFx0XSspW15cXHNdKy9tLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgIH0sXG4gICAgYnVpbHRpbjogW1xuICAgICAge1xuICAgICAgICBwYXR0ZXJuOiAvKF5cXHMqKSg/OnByb2N8cmV0dXJufGNsYXNzfGVycm9yfGV2YWx8ZXhpdHxmb3J8Zm9yZWFjaHxpZnxzd2l0Y2h8d2hpbGV8YnJlYWt8Y29udGludWUpXFxiL20sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgIH0sXG4gICAgICAvXFxiKD86ZWxzZWlmfGVsc2UpXFxiL1xuICAgIF0sXG4gICAgc2NvcGU6IHtcbiAgICAgIHBhdHRlcm46IC8oXlxccyopKD86Z2xvYmFsfHVwdmFyfHZhcmlhYmxlKVxcYi9tLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgIGFsaWFzOiAnY29uc3RhbnQnXG4gICAgfSxcbiAgICBrZXl3b3JkOiB7XG4gICAgICBwYXR0ZXJuOiAvKF5cXHMqfFxcWykoPzphZnRlcnxhcHBlbmR8YXBwbHl8YXJyYXl8YXV0b18oPzpleGVjb2t8aW1wb3J0fGxvYWR8bWtpbmRleHxxdWFsaWZ5fHJlc2V0KXxhdXRvbWtpbmRleF9vbGR8YmdlcnJvcnxiaW5hcnl8Y2F0Y2h8Y2R8Y2hhbnxjbG9ja3xjbG9zZXxjb25jYXR8ZGRlfGRpY3R8ZW5jb2Rpbmd8ZW9mfGV4ZWN8ZXhwcnxmYmxvY2tlZHxmY29uZmlndXJlfGZjb3B5fGZpbGUoPzpldmVudHxuYW1lKT98Zmx1c2h8Z2V0c3xnbG9ifGhpc3Rvcnl8aHR0cHxpbmNyfGluZm98aW50ZXJwfGpvaW58bGFwcGVuZHxsYXNzaWdufGxpbmRleHxsaW5zZXJ0fGxpc3R8bGxlbmd0aHxsb2FkfGxyYW5nZXxscmVwZWF0fGxyZXBsYWNlfGxyZXZlcnNlfGxzZWFyY2h8bHNldHxsc29ydHxtYXRoKD86ZnVuY3xvcCl8bWVtb3J5fG1zZ2NhdHxuYW1lc3BhY2V8b3BlbnxwYWNrYWdlfHBhcnJheXxwaWR8cGtnX21rSW5kZXh8cGxhdGZvcm18cHV0c3xwd2R8cmVfc3ludGF4fHJlYWR8cmVmY2hhbnxyZWdleHB8cmVnaXN0cnl8cmVnc3VifHJlbmFtZXxTYWZlX0Jhc2V8c2NhbnxzZWVrfHNldHxzb2NrZXR8c291cmNlfHNwbGl0fHN0cmluZ3xzdWJzdHxUY2x8dGNsKD86X2VuZE9mV29yZHxfZmluZExpYnJhcnl8c3RhcnRPZig/Ok5leHR8UHJldmlvdXMpV29yZHx3b3JkQnJlYWsoPzpBZnRlcnxCZWZvcmUpfHRlc3R8dmFycyl8dGVsbHx0aW1lfHRtfHRyYWNlfHVua25vd258dW5sb2FkfHVuc2V0fHVwZGF0ZXx1cGxldmVsfHZ3YWl0KVxcYi9tLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgIH0sXG4gICAgb3BlcmF0b3I6IC8hPT98XFwqXFwqP3w9PXwmJj98XFx8XFx8P3w8Wz08XT98Pls9Pl0/fFstK35cXC8lP15dfFxcYig/OmVxfG5lfGlufG5pKVxcYi8sXG4gICAgcHVuY3R1YXRpb246IC9be30oKVxcW1xcXV0vXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
(self["webpackChunkheaderproject"] = self["webpackChunkheaderproject"] || []).push([["react-syntax-highlighter_languages_refractor_lua"],{

/***/ "./node_modules/refractor/lang/lua.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/lua.js ***!
  \********************************************/
/***/ ((module) => {

"use strict";


module.exports = lua
lua.displayName = 'lua'
lua.aliases = []
function lua(Prism) {
  Prism.languages.lua = {
    comment: /^#!.+|--(?:\[(=*)\[[\s\S]*?\]\1\]|.*)/m,
    // \z may be used to skip the following space
    string: {
      pattern: /(["'])(?:(?!\1)[^\\\r\n]|\\z(?:\r\n|\s)|\\(?:\r\n|[\s\S]))*\1|\[(=*)\[[\s\S]*?\]\2\]/,
      greedy: true
    },
    number: /\b0x[a-f\d]+\.?[a-f\d]*(?:p[+-]?\d+)?\b|\b\d+(?:\.\B|\.?\d*(?:e[+-]?\d+)?\b)|\B\.\d+(?:e[+-]?\d+)?\b/i,
    keyword: /\b(?:and|break|do|else|elseif|end|false|for|function|goto|if|in|local|nil|not|or|repeat|return|then|true|until|while)\b/,
    function: /(?!\d)\w+(?=\s*(?:[({]))/,
    operator: [
      /[-+*%^&|#]|\/\/?|<[<=]?|>[>=]?|[=~]=?/,
      {
        // Match ".." but don't break "..."
        pattern: /(^|[^.])\.\.(?!\.)/,
        lookbehind: true
      }
    ],
    punctuation: /[\[\](){},;]|\.+|:+/
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFkZXJwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL2x1YS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsRUFBRTtBQUM3QjtBQUNBIiwiZmlsZSI6InJlYWN0LXN5bnRheC1oaWdobGlnaHRlcl9sYW5ndWFnZXNfcmVmcmFjdG9yX2x1YS5idW5kbGUuMTAyNjBkNmRlMTExMGZmZmQzNTcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBsdWFcbmx1YS5kaXNwbGF5TmFtZSA9ICdsdWEnXG5sdWEuYWxpYXNlcyA9IFtdXG5mdW5jdGlvbiBsdWEoUHJpc20pIHtcbiAgUHJpc20ubGFuZ3VhZ2VzLmx1YSA9IHtcbiAgICBjb21tZW50OiAvXiMhLit8LS0oPzpcXFsoPSopXFxbW1xcc1xcU10qP1xcXVxcMVxcXXwuKikvbSxcbiAgICAvLyBcXHogbWF5IGJlIHVzZWQgdG8gc2tpcCB0aGUgZm9sbG93aW5nIHNwYWNlXG4gICAgc3RyaW5nOiB7XG4gICAgICBwYXR0ZXJuOiAvKFtcIiddKSg/Oig/IVxcMSlbXlxcXFxcXHJcXG5dfFxcXFx6KD86XFxyXFxufFxccyl8XFxcXCg/OlxcclxcbnxbXFxzXFxTXSkpKlxcMXxcXFsoPSopXFxbW1xcc1xcU10qP1xcXVxcMlxcXS8sXG4gICAgICBncmVlZHk6IHRydWVcbiAgICB9LFxuICAgIG51bWJlcjogL1xcYjB4W2EtZlxcZF0rXFwuP1thLWZcXGRdKig/OnBbKy1dP1xcZCspP1xcYnxcXGJcXGQrKD86XFwuXFxCfFxcLj9cXGQqKD86ZVsrLV0/XFxkKyk/XFxiKXxcXEJcXC5cXGQrKD86ZVsrLV0/XFxkKyk/XFxiL2ksXG4gICAga2V5d29yZDogL1xcYig/OmFuZHxicmVha3xkb3xlbHNlfGVsc2VpZnxlbmR8ZmFsc2V8Zm9yfGZ1bmN0aW9ufGdvdG98aWZ8aW58bG9jYWx8bmlsfG5vdHxvcnxyZXBlYXR8cmV0dXJufHRoZW58dHJ1ZXx1bnRpbHx3aGlsZSlcXGIvLFxuICAgIGZ1bmN0aW9uOiAvKD8hXFxkKVxcdysoPz1cXHMqKD86Wyh7XSkpLyxcbiAgICBvcGVyYXRvcjogW1xuICAgICAgL1stKyolXiZ8I118XFwvXFwvP3w8Wzw9XT98Pls+PV0/fFs9fl09Py8sXG4gICAgICB7XG4gICAgICAgIC8vIE1hdGNoIFwiLi5cIiBidXQgZG9uJ3QgYnJlYWsgXCIuLi5cIlxuICAgICAgICBwYXR0ZXJuOiAvKF58W14uXSlcXC5cXC4oPyFcXC4pLyxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgICAgfVxuICAgIF0sXG4gICAgcHVuY3R1YXRpb246IC9bXFxbXFxdKCl7fSw7XXxcXC4rfDorL1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9
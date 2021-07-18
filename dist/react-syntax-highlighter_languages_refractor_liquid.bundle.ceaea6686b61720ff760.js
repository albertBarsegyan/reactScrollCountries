(self["webpackChunkheaderproject"] = self["webpackChunkheaderproject"] || []).push([["react-syntax-highlighter_languages_refractor_liquid"],{

/***/ "./node_modules/refractor/lang/liquid.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/liquid.js ***!
  \***********************************************/
/***/ ((module) => {

"use strict";


module.exports = liquid
liquid.displayName = 'liquid'
liquid.aliases = []
function liquid(Prism) {
  Prism.languages.liquid = {
    keyword: /\b(?:comment|endcomment|if|elsif|else|endif|unless|endunless|for|endfor|case|endcase|when|in|break|assign|continue|limit|offset|range|reversed|raw|endraw|capture|endcapture|tablerow|endtablerow)\b/,
    number: /\b0b[01]+\b|\b0x[\da-f]*\.?[\da-fp-]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?[df]?/i,
    operator: {
      pattern: /(^|[^.])(?:\+[+=]?|-[-=]?|!=?|<<?=?|>>?>?=?|==?|&[&=]?|\|[|=]?|\*=?|\/=?|%=?|\^=?|[?:~])/m,
      lookbehind: true
    },
    function: {
      pattern: /(^|[\s;|&])(?:append|prepend|capitalize|cycle|cols|increment|decrement|abs|at_least|at_most|ceil|compact|concat|date|default|divided_by|downcase|escape|escape_once|first|floor|join|last|lstrip|map|minus|modulo|newline_to_br|plus|remove|remove_first|replace|replace_first|reverse|round|rstrip|size|slice|sort|sort_natural|split|strip|strip_html|strip_newlines|times|truncate|truncatewords|uniq|upcase|url_decode|url_encode|include|paginate)(?=$|[\s;|&])/,
      lookbehind: true
    }
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFkZXJwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL2xpcXVpZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLHVCQUF1Qix5YkFBeWI7QUFDaGQ7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoicmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyX2xhbmd1YWdlc19yZWZyYWN0b3JfbGlxdWlkLmJ1bmRsZS5jZWFlYTY2ODZiNjE3MjBmZjc2MC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGxpcXVpZFxubGlxdWlkLmRpc3BsYXlOYW1lID0gJ2xpcXVpZCdcbmxpcXVpZC5hbGlhc2VzID0gW11cbmZ1bmN0aW9uIGxpcXVpZChQcmlzbSkge1xuICBQcmlzbS5sYW5ndWFnZXMubGlxdWlkID0ge1xuICAgIGtleXdvcmQ6IC9cXGIoPzpjb21tZW50fGVuZGNvbW1lbnR8aWZ8ZWxzaWZ8ZWxzZXxlbmRpZnx1bmxlc3N8ZW5kdW5sZXNzfGZvcnxlbmRmb3J8Y2FzZXxlbmRjYXNlfHdoZW58aW58YnJlYWt8YXNzaWdufGNvbnRpbnVlfGxpbWl0fG9mZnNldHxyYW5nZXxyZXZlcnNlZHxyYXd8ZW5kcmF3fGNhcHR1cmV8ZW5kY2FwdHVyZXx0YWJsZXJvd3xlbmR0YWJsZXJvdylcXGIvLFxuICAgIG51bWJlcjogL1xcYjBiWzAxXStcXGJ8XFxiMHhbXFxkYS1mXSpcXC4/W1xcZGEtZnAtXStcXGJ8KD86XFxiXFxkK1xcLj9cXGQqfFxcQlxcLlxcZCspKD86ZVsrLV0/XFxkKyk/W2RmXT8vaSxcbiAgICBvcGVyYXRvcjoge1xuICAgICAgcGF0dGVybjogLyhefFteLl0pKD86XFwrWys9XT98LVstPV0/fCE9P3w8PD89P3w+Pj8+Pz0/fD09P3wmWyY9XT98XFx8W3w9XT98XFwqPT98XFwvPT98JT0/fFxcXj0/fFs/On5dKS9tLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgIH0sXG4gICAgZnVuY3Rpb246IHtcbiAgICAgIHBhdHRlcm46IC8oXnxbXFxzO3wmXSkoPzphcHBlbmR8cHJlcGVuZHxjYXBpdGFsaXplfGN5Y2xlfGNvbHN8aW5jcmVtZW50fGRlY3JlbWVudHxhYnN8YXRfbGVhc3R8YXRfbW9zdHxjZWlsfGNvbXBhY3R8Y29uY2F0fGRhdGV8ZGVmYXVsdHxkaXZpZGVkX2J5fGRvd25jYXNlfGVzY2FwZXxlc2NhcGVfb25jZXxmaXJzdHxmbG9vcnxqb2lufGxhc3R8bHN0cmlwfG1hcHxtaW51c3xtb2R1bG98bmV3bGluZV90b19icnxwbHVzfHJlbW92ZXxyZW1vdmVfZmlyc3R8cmVwbGFjZXxyZXBsYWNlX2ZpcnN0fHJldmVyc2V8cm91bmR8cnN0cmlwfHNpemV8c2xpY2V8c29ydHxzb3J0X25hdHVyYWx8c3BsaXR8c3RyaXB8c3RyaXBfaHRtbHxzdHJpcF9uZXdsaW5lc3x0aW1lc3x0cnVuY2F0ZXx0cnVuY2F0ZXdvcmRzfHVuaXF8dXBjYXNlfHVybF9kZWNvZGV8dXJsX2VuY29kZXxpbmNsdWRlfHBhZ2luYXRlKSg/PSR8W1xcczt8Jl0pLyxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
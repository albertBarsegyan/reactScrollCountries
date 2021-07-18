(self["webpackChunkheaderproject"] = self["webpackChunkheaderproject"] || []).push([["react-syntax-highlighter_languages_refractor_nix"],{

/***/ "./node_modules/refractor/lang/nix.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/nix.js ***!
  \********************************************/
/***/ ((module) => {

"use strict";


module.exports = nix
nix.displayName = 'nix'
nix.aliases = []
function nix(Prism) {
  Prism.languages.nix = {
    comment: /\/\*[\s\S]*?\*\/|#.*/,
    string: {
      pattern: /"(?:[^"\\]|\\[\s\S])*"|''(?:(?!'')[\s\S]|''(?:'|\\|\$\{))*''/,
      greedy: true,
      inside: {
        interpolation: {
          // The lookbehind ensures the ${} is not preceded by \ or ''
          pattern: /(^|(?:^|(?!'').)[^\\])\$\{(?:[^}]|\{[^}]*\})*}/,
          lookbehind: true,
          inside: {
            antiquotation: {
              pattern: /^\$(?=\{)/,
              alias: 'variable'
            } // See rest below
          }
        }
      }
    },
    url: [
      /\b(?:[a-z]{3,7}:\/\/)[\w\-+%~\/.:#=?&]+/,
      {
        pattern: /([^\/])(?:[\w\-+%~.:#=?&]*(?!\/\/)[\w\-+%~\/.:#=?&])?(?!\/\/)\/[\w\-+%~\/.:#=?&]*/,
        lookbehind: true
      }
    ],
    antiquotation: {
      pattern: /\$(?=\{)/,
      alias: 'variable'
    },
    number: /\b\d+\b/,
    keyword: /\b(?:assert|builtins|else|if|in|inherit|let|null|or|then|with)\b/,
    function: /\b(?:abort|add|all|any|attrNames|attrValues|baseNameOf|compareVersions|concatLists|currentSystem|deepSeq|derivation|dirOf|div|elem(?:At)?|fetch(?:url|Tarball)|filter(?:Source)?|fromJSON|genList|getAttr|getEnv|hasAttr|hashString|head|import|intersectAttrs|is(?:Attrs|Bool|Function|Int|List|Null|String)|length|lessThan|listToAttrs|map|mul|parseDrvName|pathExists|read(?:Dir|File)|removeAttrs|replaceStrings|seq|sort|stringLength|sub(?:string)?|tail|throw|to(?:File|JSON|Path|String|XML)|trace|typeOf)\b|\bfoldl'\B/,
    boolean: /\b(?:true|false)\b/,
    operator: /[=!<>]=?|\+\+?|\|\||&&|\/\/|->?|[?@]/,
    punctuation: /[{}()[\].,:;]/
  }
  Prism.languages.nix.string.inside.interpolation.inside.rest =
    Prism.languages.nix
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFkZXJwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL25peC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVFQUF1RTtBQUN2RTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0MsOENBQThDLE1BQU0sSUFBSSxHQUFHLElBQUksR0FBRztBQUNsRTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0Esa0JBQWtCLElBQUk7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsU0FBUztBQUM5QjtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJyZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX3JlZnJhY3Rvcl9uaXguYnVuZGxlLjEwMjYwZDZkZTExMTBmZmZkMzU3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gbml4XG5uaXguZGlzcGxheU5hbWUgPSAnbml4J1xubml4LmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24gbml4KFByaXNtKSB7XG4gIFByaXNtLmxhbmd1YWdlcy5uaXggPSB7XG4gICAgY29tbWVudDogL1xcL1xcKltcXHNcXFNdKj9cXCpcXC98Iy4qLyxcbiAgICBzdHJpbmc6IHtcbiAgICAgIHBhdHRlcm46IC9cIig/OlteXCJcXFxcXXxcXFxcW1xcc1xcU10pKlwifCcnKD86KD8hJycpW1xcc1xcU118JycoPzonfFxcXFx8XFwkXFx7KSkqJycvLFxuICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgaW5zaWRlOiB7XG4gICAgICAgIGludGVycG9sYXRpb246IHtcbiAgICAgICAgICAvLyBUaGUgbG9va2JlaGluZCBlbnN1cmVzIHRoZSAke30gaXMgbm90IHByZWNlZGVkIGJ5IFxcIG9yICcnXG4gICAgICAgICAgcGF0dGVybjogLyhefCg/Ol58KD8hJycpLilbXlxcXFxdKVxcJFxceyg/OltefV18XFx7W159XSpcXH0pKn0vLFxuICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgICBhbnRpcXVvdGF0aW9uOiB7XG4gICAgICAgICAgICAgIHBhdHRlcm46IC9eXFwkKD89XFx7KS8sXG4gICAgICAgICAgICAgIGFsaWFzOiAndmFyaWFibGUnXG4gICAgICAgICAgICB9IC8vIFNlZSByZXN0IGJlbG93XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICB1cmw6IFtcbiAgICAgIC9cXGIoPzpbYS16XXszLDd9OlxcL1xcLylbXFx3XFwtKyV+XFwvLjojPT8mXSsvLFxuICAgICAge1xuICAgICAgICBwYXR0ZXJuOiAvKFteXFwvXSkoPzpbXFx3XFwtKyV+LjojPT8mXSooPyFcXC9cXC8pW1xcd1xcLSslflxcLy46Iz0/Jl0pPyg/IVxcL1xcLylcXC9bXFx3XFwtKyV+XFwvLjojPT8mXSovLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgICB9XG4gICAgXSxcbiAgICBhbnRpcXVvdGF0aW9uOiB7XG4gICAgICBwYXR0ZXJuOiAvXFwkKD89XFx7KS8sXG4gICAgICBhbGlhczogJ3ZhcmlhYmxlJ1xuICAgIH0sXG4gICAgbnVtYmVyOiAvXFxiXFxkK1xcYi8sXG4gICAga2V5d29yZDogL1xcYig/OmFzc2VydHxidWlsdGluc3xlbHNlfGlmfGlufGluaGVyaXR8bGV0fG51bGx8b3J8dGhlbnx3aXRoKVxcYi8sXG4gICAgZnVuY3Rpb246IC9cXGIoPzphYm9ydHxhZGR8YWxsfGFueXxhdHRyTmFtZXN8YXR0clZhbHVlc3xiYXNlTmFtZU9mfGNvbXBhcmVWZXJzaW9uc3xjb25jYXRMaXN0c3xjdXJyZW50U3lzdGVtfGRlZXBTZXF8ZGVyaXZhdGlvbnxkaXJPZnxkaXZ8ZWxlbSg/OkF0KT98ZmV0Y2goPzp1cmx8VGFyYmFsbCl8ZmlsdGVyKD86U291cmNlKT98ZnJvbUpTT058Z2VuTGlzdHxnZXRBdHRyfGdldEVudnxoYXNBdHRyfGhhc2hTdHJpbmd8aGVhZHxpbXBvcnR8aW50ZXJzZWN0QXR0cnN8aXMoPzpBdHRyc3xCb29sfEZ1bmN0aW9ufEludHxMaXN0fE51bGx8U3RyaW5nKXxsZW5ndGh8bGVzc1RoYW58bGlzdFRvQXR0cnN8bWFwfG11bHxwYXJzZURydk5hbWV8cGF0aEV4aXN0c3xyZWFkKD86RGlyfEZpbGUpfHJlbW92ZUF0dHJzfHJlcGxhY2VTdHJpbmdzfHNlcXxzb3J0fHN0cmluZ0xlbmd0aHxzdWIoPzpzdHJpbmcpP3x0YWlsfHRocm93fHRvKD86RmlsZXxKU09OfFBhdGh8U3RyaW5nfFhNTCl8dHJhY2V8dHlwZU9mKVxcYnxcXGJmb2xkbCdcXEIvLFxuICAgIGJvb2xlYW46IC9cXGIoPzp0cnVlfGZhbHNlKVxcYi8sXG4gICAgb3BlcmF0b3I6IC9bPSE8Pl09P3xcXCtcXCs/fFxcfFxcfHwmJnxcXC9cXC98LT4/fFs/QF0vLFxuICAgIHB1bmN0dWF0aW9uOiAvW3t9KClbXFxdLiw6O10vXG4gIH1cbiAgUHJpc20ubGFuZ3VhZ2VzLm5peC5zdHJpbmcuaW5zaWRlLmludGVycG9sYXRpb24uaW5zaWRlLnJlc3QgPVxuICAgIFByaXNtLmxhbmd1YWdlcy5uaXhcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
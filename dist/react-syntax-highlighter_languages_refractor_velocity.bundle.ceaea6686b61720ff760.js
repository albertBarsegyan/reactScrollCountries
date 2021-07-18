(self["webpackChunkheaderproject"] = self["webpackChunkheaderproject"] || []).push([["react-syntax-highlighter_languages_refractor_velocity"],{

/***/ "./node_modules/refractor/lang/velocity.js":
/*!*************************************************!*\
  !*** ./node_modules/refractor/lang/velocity.js ***!
  \*************************************************/
/***/ ((module) => {

"use strict";


module.exports = velocity
velocity.displayName = 'velocity'
velocity.aliases = []
function velocity(Prism) {
  ;(function(Prism) {
    Prism.languages.velocity = Prism.languages.extend('markup', {})
    var velocity = {
      variable: {
        pattern: /(^|[^\\](?:\\\\)*)\$!?(?:[a-z][\w-]*(?:\([^)]*\))?(?:\.[a-z][\w-]*(?:\([^)]*\))?|\[[^\]]+])*|{[^}]+})/i,
        lookbehind: true,
        inside: {} // See below
      },
      string: {
        pattern: /"[^"]*"|'[^']*'/,
        greedy: true
      },
      number: /\b\d+\b/,
      boolean: /\b(?:true|false)\b/,
      operator: /[=!<>]=?|[+*/%-]|&&|\|\||\.\.|\b(?:eq|g[et]|l[et]|n(?:e|ot))\b/,
      punctuation: /[(){}[\]:,.]/
    }
    velocity.variable.inside = {
      string: velocity['string'],
      function: {
        pattern: /([^\w-])[a-z][\w-]*(?=\()/,
        lookbehind: true
      },
      number: velocity['number'],
      boolean: velocity['boolean'],
      punctuation: velocity['punctuation']
    }
    Prism.languages.insertBefore('velocity', 'comment', {
      unparsed: {
        pattern: /(^|[^\\])#\[\[[\s\S]*?]]#/,
        lookbehind: true,
        greedy: true,
        inside: {
          punctuation: /^#\[\[|]]#$/
        }
      },
      'velocity-comment': [
        {
          pattern: /(^|[^\\])#\*[\s\S]*?\*#/,
          lookbehind: true,
          greedy: true,
          alias: 'comment'
        },
        {
          pattern: /(^|[^\\])##.*/,
          lookbehind: true,
          greedy: true,
          alias: 'comment'
        }
      ],
      directive: {
        pattern: /(^|[^\\](?:\\\\)*)#@?(?:[a-z][\w-]*|{[a-z][\w-]*})(?:\s*\((?:[^()]|\([^()]*\))*\))?/i,
        lookbehind: true,
        inside: {
          keyword: {
            pattern: /^#@?(?:[a-z][\w-]*|{[a-z][\w-]*})|\bin\b/,
            inside: {
              punctuation: /[{}]/
            }
          },
          rest: velocity
        }
      },
      variable: velocity['variable']
    })
    Prism.languages.velocity['tag'].inside['attr-value'].inside.rest =
      Prism.languages.velocity
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFkZXJwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL3ZlbG9jaXR5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILGtFQUFrRTtBQUNsRTtBQUNBO0FBQ0EsZ0hBQWdILEdBQUcsR0FBRztBQUN0SDtBQUNBLGtCQUFrQjtBQUNsQixPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELFlBQVk7QUFDbkU7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLFlBQVk7QUFDdEQ7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIIiwiZmlsZSI6InJlYWN0LXN5bnRheC1oaWdobGlnaHRlcl9sYW5ndWFnZXNfcmVmcmFjdG9yX3ZlbG9jaXR5LmJ1bmRsZS5jZWFlYTY2ODZiNjE3MjBmZjc2MC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHZlbG9jaXR5XG52ZWxvY2l0eS5kaXNwbGF5TmFtZSA9ICd2ZWxvY2l0eSdcbnZlbG9jaXR5LmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24gdmVsb2NpdHkoUHJpc20pIHtcbiAgOyhmdW5jdGlvbihQcmlzbSkge1xuICAgIFByaXNtLmxhbmd1YWdlcy52ZWxvY2l0eSA9IFByaXNtLmxhbmd1YWdlcy5leHRlbmQoJ21hcmt1cCcsIHt9KVxuICAgIHZhciB2ZWxvY2l0eSA9IHtcbiAgICAgIHZhcmlhYmxlOiB7XG4gICAgICAgIHBhdHRlcm46IC8oXnxbXlxcXFxdKD86XFxcXFxcXFwpKilcXCQhPyg/OlthLXpdW1xcdy1dKig/OlxcKFteKV0qXFwpKT8oPzpcXC5bYS16XVtcXHctXSooPzpcXChbXildKlxcKSk/fFxcW1teXFxdXStdKSp8e1tefV0rfSkvaSxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgaW5zaWRlOiB7fSAvLyBTZWUgYmVsb3dcbiAgICAgIH0sXG4gICAgICBzdHJpbmc6IHtcbiAgICAgICAgcGF0dGVybjogL1wiW15cIl0qXCJ8J1teJ10qJy8sXG4gICAgICAgIGdyZWVkeTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIG51bWJlcjogL1xcYlxcZCtcXGIvLFxuICAgICAgYm9vbGVhbjogL1xcYig/OnRydWV8ZmFsc2UpXFxiLyxcbiAgICAgIG9wZXJhdG9yOiAvWz0hPD5dPT98WysqLyUtXXwmJnxcXHxcXHx8XFwuXFwufFxcYig/OmVxfGdbZXRdfGxbZXRdfG4oPzplfG90KSlcXGIvLFxuICAgICAgcHVuY3R1YXRpb246IC9bKCl7fVtcXF06LC5dL1xuICAgIH1cbiAgICB2ZWxvY2l0eS52YXJpYWJsZS5pbnNpZGUgPSB7XG4gICAgICBzdHJpbmc6IHZlbG9jaXR5WydzdHJpbmcnXSxcbiAgICAgIGZ1bmN0aW9uOiB7XG4gICAgICAgIHBhdHRlcm46IC8oW15cXHctXSlbYS16XVtcXHctXSooPz1cXCgpLyxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIG51bWJlcjogdmVsb2NpdHlbJ251bWJlciddLFxuICAgICAgYm9vbGVhbjogdmVsb2NpdHlbJ2Jvb2xlYW4nXSxcbiAgICAgIHB1bmN0dWF0aW9uOiB2ZWxvY2l0eVsncHVuY3R1YXRpb24nXVxuICAgIH1cbiAgICBQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCd2ZWxvY2l0eScsICdjb21tZW50Jywge1xuICAgICAgdW5wYXJzZWQ6IHtcbiAgICAgICAgcGF0dGVybjogLyhefFteXFxcXF0pI1xcW1xcW1tcXHNcXFNdKj9dXSMvLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgICAgIGluc2lkZToge1xuICAgICAgICAgIHB1bmN0dWF0aW9uOiAvXiNcXFtcXFt8XV0jJC9cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgICd2ZWxvY2l0eS1jb21tZW50JzogW1xuICAgICAgICB7XG4gICAgICAgICAgcGF0dGVybjogLyhefFteXFxcXF0pI1xcKltcXHNcXFNdKj9cXCojLyxcbiAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgICAgICBhbGlhczogJ2NvbW1lbnQnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYXR0ZXJuOiAvKF58W15cXFxcXSkjIy4qLyxcbiAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgICAgICBhbGlhczogJ2NvbW1lbnQnXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBkaXJlY3RpdmU6IHtcbiAgICAgICAgcGF0dGVybjogLyhefFteXFxcXF0oPzpcXFxcXFxcXCkqKSNAPyg/OlthLXpdW1xcdy1dKnx7W2Etel1bXFx3LV0qfSkoPzpcXHMqXFwoKD86W14oKV18XFwoW14oKV0qXFwpKSpcXCkpPy9pLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICBrZXl3b3JkOiB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvXiNAPyg/OlthLXpdW1xcdy1dKnx7W2Etel1bXFx3LV0qfSl8XFxiaW5cXGIvLFxuICAgICAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgICAgIHB1bmN0dWF0aW9uOiAvW3t9XS9cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlc3Q6IHZlbG9jaXR5XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB2YXJpYWJsZTogdmVsb2NpdHlbJ3ZhcmlhYmxlJ11cbiAgICB9KVxuICAgIFByaXNtLmxhbmd1YWdlcy52ZWxvY2l0eVsndGFnJ10uaW5zaWRlWydhdHRyLXZhbHVlJ10uaW5zaWRlLnJlc3QgPVxuICAgICAgUHJpc20ubGFuZ3VhZ2VzLnZlbG9jaXR5XG4gIH0pKFByaXNtKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
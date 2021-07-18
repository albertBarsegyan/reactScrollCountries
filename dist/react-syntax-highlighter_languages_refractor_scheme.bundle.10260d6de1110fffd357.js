(self["webpackChunkheaderproject"] = self["webpackChunkheaderproject"] || []).push([["react-syntax-highlighter_languages_refractor_scheme"],{

/***/ "./node_modules/refractor/lang/scheme.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/scheme.js ***!
  \***********************************************/
/***/ ((module) => {

"use strict";


module.exports = scheme
scheme.displayName = 'scheme'
scheme.aliases = []
function scheme(Prism) {
  Prism.languages.scheme = {
    comment: /;.*/,
    string: {
      pattern: /"(?:[^"\\]|\\.)*"|'[^()#'\s]+/,
      greedy: true
    },
    character: {
      pattern: /#\\(?:[ux][a-fA-F\d]+|[a-zA-Z]+|\S)/,
      alias: 'string'
    },
    keyword: {
      pattern: /(\()(?:define(?:-syntax|-library|-values)?|(?:case-)?lambda|let(?:\*|rec)?(?:-values)?|else|if|cond|begin|delay(?:-force)?|parameterize|guard|set!|(?:quasi-)?quote|syntax-rules)(?=[()\s])/,
      lookbehind: true
    },
    builtin: {
      pattern: /(\()(?:(?:cons|car|cdr|list|call-with-current-continuation|call\/cc|append|abs|apply|eval)\b|null\?|pair\?|boolean\?|eof-object\?|char\?|procedure\?|number\?|port\?|string\?|vector\?|symbol\?|bytevector\?)(?=[()\s])/,
      lookbehind: true
    },
    number: {
      pattern: /([\s()])[-+]?(?:\d+\/\d+|\d*\.?\d+(?:\s*[-+]\s*\d*\.?\d+i)?)\b/,
      lookbehind: true
    },
    boolean: /#[tf]/,
    operator: {
      pattern: /(\()(?:[-+*%\/]|[<>]=?|=>?)(?=\s|$)/,
      lookbehind: true
    },
    function: {
      pattern: /(\()[^()'\s]+(?=[()\s)]|$)/,
      lookbehind: true
    },
    punctuation: /[()']/
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFkZXJwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL3NjaGVtZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSIsImZpbGUiOiJyZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX3JlZnJhY3Rvcl9zY2hlbWUuYnVuZGxlLjEwMjYwZDZkZTExMTBmZmZkMzU3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gc2NoZW1lXG5zY2hlbWUuZGlzcGxheU5hbWUgPSAnc2NoZW1lJ1xuc2NoZW1lLmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24gc2NoZW1lKFByaXNtKSB7XG4gIFByaXNtLmxhbmd1YWdlcy5zY2hlbWUgPSB7XG4gICAgY29tbWVudDogLzsuKi8sXG4gICAgc3RyaW5nOiB7XG4gICAgICBwYXR0ZXJuOiAvXCIoPzpbXlwiXFxcXF18XFxcXC4pKlwifCdbXigpIydcXHNdKy8sXG4gICAgICBncmVlZHk6IHRydWVcbiAgICB9LFxuICAgIGNoYXJhY3Rlcjoge1xuICAgICAgcGF0dGVybjogLyNcXFxcKD86W3V4XVthLWZBLUZcXGRdK3xbYS16QS1aXSt8XFxTKS8sXG4gICAgICBhbGlhczogJ3N0cmluZydcbiAgICB9LFxuICAgIGtleXdvcmQ6IHtcbiAgICAgIHBhdHRlcm46IC8oXFwoKSg/OmRlZmluZSg/Oi1zeW50YXh8LWxpYnJhcnl8LXZhbHVlcyk/fCg/OmNhc2UtKT9sYW1iZGF8bGV0KD86XFwqfHJlYyk/KD86LXZhbHVlcyk/fGVsc2V8aWZ8Y29uZHxiZWdpbnxkZWxheSg/Oi1mb3JjZSk/fHBhcmFtZXRlcml6ZXxndWFyZHxzZXQhfCg/OnF1YXNpLSk/cXVvdGV8c3ludGF4LXJ1bGVzKSg/PVsoKVxcc10pLyxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICB9LFxuICAgIGJ1aWx0aW46IHtcbiAgICAgIHBhdHRlcm46IC8oXFwoKSg/Oig/OmNvbnN8Y2FyfGNkcnxsaXN0fGNhbGwtd2l0aC1jdXJyZW50LWNvbnRpbnVhdGlvbnxjYWxsXFwvY2N8YXBwZW5kfGFic3xhcHBseXxldmFsKVxcYnxudWxsXFw/fHBhaXJcXD98Ym9vbGVhblxcP3xlb2Ytb2JqZWN0XFw/fGNoYXJcXD98cHJvY2VkdXJlXFw/fG51bWJlclxcP3xwb3J0XFw/fHN0cmluZ1xcP3x2ZWN0b3JcXD98c3ltYm9sXFw/fGJ5dGV2ZWN0b3JcXD8pKD89WygpXFxzXSkvLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgIH0sXG4gICAgbnVtYmVyOiB7XG4gICAgICBwYXR0ZXJuOiAvKFtcXHMoKV0pWy0rXT8oPzpcXGQrXFwvXFxkK3xcXGQqXFwuP1xcZCsoPzpcXHMqWy0rXVxccypcXGQqXFwuP1xcZCtpKT8pXFxiLyxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICB9LFxuICAgIGJvb2xlYW46IC8jW3RmXS8sXG4gICAgb3BlcmF0b3I6IHtcbiAgICAgIHBhdHRlcm46IC8oXFwoKSg/OlstKyolXFwvXXxbPD5dPT98PT4/KSg/PVxcc3wkKS8sXG4gICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgfSxcbiAgICBmdW5jdGlvbjoge1xuICAgICAgcGF0dGVybjogLyhcXCgpW14oKSdcXHNdKyg/PVsoKVxccyldfCQpLyxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICB9LFxuICAgIHB1bmN0dWF0aW9uOiAvWygpJ10vXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
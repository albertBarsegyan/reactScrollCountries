(self["webpackChunkheaderproject"] = self["webpackChunkheaderproject"] || []).push([["react-syntax-highlighter_languages_refractor_stylus"],{

/***/ "./node_modules/refractor/lang/stylus.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/stylus.js ***!
  \***********************************************/
/***/ ((module) => {

"use strict";


module.exports = stylus
stylus.displayName = 'stylus'
stylus.aliases = []
function stylus(Prism) {
  ;(function(Prism) {
    var inside = {
      url: /url\((["']?).*?\1\)/i,
      string: {
        pattern: /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,
        greedy: true
      },
      interpolation: null,
      // See below
      func: null,
      // See below
      important: /\B!(?:important|optional)\b/i,
      keyword: {
        pattern: /(^|\s+)(?:(?:if|else|for|return|unless)(?=\s+|$)|@[\w-]+)/,
        lookbehind: true
      },
      hexcode: /#[\da-f]{3,6}/i,
      number: /\b\d+(?:\.\d+)?%?/,
      boolean: /\b(?:true|false)\b/,
      operator: [
        // We want non-word chars around "-" because it is
        // accepted in property names.
        /~|[+!\/%<>?=]=?|[-:]=|\*[*=]?|\.+|&&|\|\||\B-\B|\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\b/
      ],
      punctuation: /[{}()\[\];:,]/
    }
    inside['interpolation'] = {
      pattern: /\{[^\r\n}:]+\}/,
      alias: 'variable',
      inside: {
        delimiter: {
          pattern: /^{|}$/,
          alias: 'punctuation'
        },
        rest: inside
      }
    }
    inside['func'] = {
      pattern: /[\w-]+\([^)]*\).*/,
      inside: {
        function: /^[^(]+/,
        rest: inside
      }
    }
    Prism.languages.stylus = {
      comment: {
        pattern: /(^|[^\\])(\/\*[\s\S]*?\*\/|\/\/.*)/,
        lookbehind: true
      },
      'atrule-declaration': {
        pattern: /(^\s*)@.+/m,
        lookbehind: true,
        inside: {
          atrule: /^@[\w-]+/,
          rest: inside
        }
      },
      'variable-declaration': {
        pattern: /(^[ \t]*)[\w$-]+\s*.?=[ \t]*(?:(?:\{[^}]*\}|.+)|$)/m,
        lookbehind: true,
        inside: {
          variable: /^\S+/,
          rest: inside
        }
      },
      statement: {
        pattern: /(^[ \t]*)(?:if|else|for|return|unless)[ \t]+.+/m,
        lookbehind: true,
        inside: {
          keyword: /^\S+/,
          rest: inside
        }
      },
      // A property/value pair cannot end with a comma or a brace
      // It cannot have indented content unless it ended with a semicolon
      'property-declaration': {
        pattern: /((?:^|\{)([ \t]*))(?:[\w-]|\{[^}\r\n]+\})+(?:\s*:\s*|[ \t]+)[^{\r\n]*(?:;|[^{\r\n,](?=$)(?!(\r?\n|\r)(?:\{|\2[ \t]+)))/m,
        lookbehind: true,
        inside: {
          property: {
            pattern: /^[^\s:]+/,
            inside: {
              interpolation: inside.interpolation
            }
          },
          rest: inside
        }
      },
      // A selector can contain parentheses only as part of a pseudo-element
      // It can span multiple lines.
      // It must end with a comma or an accolade or have indented content.
      selector: {
        pattern: /(^[ \t]*)(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\))?|\{[^}\r\n]+\})+)(?:(?:\r?\n|\r)(?:\1(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\))?|\{[^}\r\n]+\})+)))*(?:,$|\{|(?=(?:\r?\n|\r)(?:\{|\1[ \t]+)))/m,
        lookbehind: true,
        inside: {
          interpolation: inside.interpolation,
          punctuation: /[{},]/
        }
      },
      func: inside.func,
      string: inside.string,
      interpolation: inside.interpolation,
      punctuation: /[{}()\[\];:.]/
    }
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFkZXJwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL3N0eWx1cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AseUJBQXlCLElBQUk7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsT0FBTztBQUM5QjtBQUNBO0FBQ0Esa0JBQWtCLE9BQU8sS0FBSztBQUM5QjtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsRUFBRTtBQUN4QjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0Esc0RBQXNELEdBQUcsSUFBSTtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixxQkFBcUIsR0FBRyxRQUFRLHVCQUF1QixVQUFVLElBQUksNkJBQTZCO0FBQzVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsdUNBQXVDLEdBQUcsUUFBUSx1Q0FBdUMsdUNBQXVDLEdBQUcsUUFBUSxjQUFjLHFCQUFxQjtBQUN6TjtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLE9BQU87QUFDOUI7QUFDQSxHQUFHO0FBQ0giLCJmaWxlIjoicmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyX2xhbmd1YWdlc19yZWZyYWN0b3Jfc3R5bHVzLmJ1bmRsZS5jZWFlYTY2ODZiNjE3MjBmZjc2MC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWx1c1xuc3R5bHVzLmRpc3BsYXlOYW1lID0gJ3N0eWx1cydcbnN0eWx1cy5hbGlhc2VzID0gW11cbmZ1bmN0aW9uIHN0eWx1cyhQcmlzbSkge1xuICA7KGZ1bmN0aW9uKFByaXNtKSB7XG4gICAgdmFyIGluc2lkZSA9IHtcbiAgICAgIHVybDogL3VybFxcKChbXCInXT8pLio/XFwxXFwpL2ksXG4gICAgICBzdHJpbmc6IHtcbiAgICAgICAgcGF0dGVybjogLyhcInwnKSg/Oig/IVxcMSlbXlxcXFxcXHJcXG5dfFxcXFwoPzpcXHJcXG58W1xcc1xcU10pKSpcXDEvLFxuICAgICAgICBncmVlZHk6IHRydWVcbiAgICAgIH0sXG4gICAgICBpbnRlcnBvbGF0aW9uOiBudWxsLFxuICAgICAgLy8gU2VlIGJlbG93XG4gICAgICBmdW5jOiBudWxsLFxuICAgICAgLy8gU2VlIGJlbG93XG4gICAgICBpbXBvcnRhbnQ6IC9cXEIhKD86aW1wb3J0YW50fG9wdGlvbmFsKVxcYi9pLFxuICAgICAga2V5d29yZDoge1xuICAgICAgICBwYXR0ZXJuOiAvKF58XFxzKykoPzooPzppZnxlbHNlfGZvcnxyZXR1cm58dW5sZXNzKSg/PVxccyt8JCl8QFtcXHctXSspLyxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIGhleGNvZGU6IC8jW1xcZGEtZl17Myw2fS9pLFxuICAgICAgbnVtYmVyOiAvXFxiXFxkKyg/OlxcLlxcZCspPyU/LyxcbiAgICAgIGJvb2xlYW46IC9cXGIoPzp0cnVlfGZhbHNlKVxcYi8sXG4gICAgICBvcGVyYXRvcjogW1xuICAgICAgICAvLyBXZSB3YW50IG5vbi13b3JkIGNoYXJzIGFyb3VuZCBcIi1cIiBiZWNhdXNlIGl0IGlzXG4gICAgICAgIC8vIGFjY2VwdGVkIGluIHByb3BlcnR5IG5hbWVzLlxuICAgICAgICAvfnxbKyFcXC8lPD4/PV09P3xbLTpdPXxcXCpbKj1dP3xcXC4rfCYmfFxcfFxcfHxcXEItXFxCfFxcYig/OmFuZHxpbnxpcyg/OiBhfCBkZWZpbmVkfCBub3R8bnQpP3xub3R8b3IpXFxiL1xuICAgICAgXSxcbiAgICAgIHB1bmN0dWF0aW9uOiAvW3t9KClcXFtcXF07OixdL1xuICAgIH1cbiAgICBpbnNpZGVbJ2ludGVycG9sYXRpb24nXSA9IHtcbiAgICAgIHBhdHRlcm46IC9cXHtbXlxcclxcbn06XStcXH0vLFxuICAgICAgYWxpYXM6ICd2YXJpYWJsZScsXG4gICAgICBpbnNpZGU6IHtcbiAgICAgICAgZGVsaW1pdGVyOiB7XG4gICAgICAgICAgcGF0dGVybjogL157fH0kLyxcbiAgICAgICAgICBhbGlhczogJ3B1bmN0dWF0aW9uJ1xuICAgICAgICB9LFxuICAgICAgICByZXN0OiBpbnNpZGVcbiAgICAgIH1cbiAgICB9XG4gICAgaW5zaWRlWydmdW5jJ10gPSB7XG4gICAgICBwYXR0ZXJuOiAvW1xcdy1dK1xcKFteKV0qXFwpLiovLFxuICAgICAgaW5zaWRlOiB7XG4gICAgICAgIGZ1bmN0aW9uOiAvXlteKF0rLyxcbiAgICAgICAgcmVzdDogaW5zaWRlXG4gICAgICB9XG4gICAgfVxuICAgIFByaXNtLmxhbmd1YWdlcy5zdHlsdXMgPSB7XG4gICAgICBjb21tZW50OiB7XG4gICAgICAgIHBhdHRlcm46IC8oXnxbXlxcXFxdKShcXC9cXCpbXFxzXFxTXSo/XFwqXFwvfFxcL1xcLy4qKS8sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgIH0sXG4gICAgICAnYXRydWxlLWRlY2xhcmF0aW9uJzoge1xuICAgICAgICBwYXR0ZXJuOiAvKF5cXHMqKUAuKy9tLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICBhdHJ1bGU6IC9eQFtcXHctXSsvLFxuICAgICAgICAgIHJlc3Q6IGluc2lkZVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgJ3ZhcmlhYmxlLWRlY2xhcmF0aW9uJzoge1xuICAgICAgICBwYXR0ZXJuOiAvKF5bIFxcdF0qKVtcXHckLV0rXFxzKi4/PVsgXFx0XSooPzooPzpcXHtbXn1dKlxcfXwuKyl8JCkvbSxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgdmFyaWFibGU6IC9eXFxTKy8sXG4gICAgICAgICAgcmVzdDogaW5zaWRlXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBzdGF0ZW1lbnQ6IHtcbiAgICAgICAgcGF0dGVybjogLyheWyBcXHRdKikoPzppZnxlbHNlfGZvcnxyZXR1cm58dW5sZXNzKVsgXFx0XSsuKy9tLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICBrZXl3b3JkOiAvXlxcUysvLFxuICAgICAgICAgIHJlc3Q6IGluc2lkZVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gQSBwcm9wZXJ0eS92YWx1ZSBwYWlyIGNhbm5vdCBlbmQgd2l0aCBhIGNvbW1hIG9yIGEgYnJhY2VcbiAgICAgIC8vIEl0IGNhbm5vdCBoYXZlIGluZGVudGVkIGNvbnRlbnQgdW5sZXNzIGl0IGVuZGVkIHdpdGggYSBzZW1pY29sb25cbiAgICAgICdwcm9wZXJ0eS1kZWNsYXJhdGlvbic6IHtcbiAgICAgICAgcGF0dGVybjogLygoPzpefFxceykoWyBcXHRdKikpKD86W1xcdy1dfFxce1tefVxcclxcbl0rXFx9KSsoPzpcXHMqOlxccyp8WyBcXHRdKylbXntcXHJcXG5dKig/Ojt8W157XFxyXFxuLF0oPz0kKSg/IShcXHI/XFxufFxccikoPzpcXHt8XFwyWyBcXHRdKykpKS9tLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICBwcm9wZXJ0eToge1xuICAgICAgICAgICAgcGF0dGVybjogL15bXlxcczpdKy8sXG4gICAgICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICAgICAgaW50ZXJwb2xhdGlvbjogaW5zaWRlLmludGVycG9sYXRpb25cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHJlc3Q6IGluc2lkZVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gQSBzZWxlY3RvciBjYW4gY29udGFpbiBwYXJlbnRoZXNlcyBvbmx5IGFzIHBhcnQgb2YgYSBwc2V1ZG8tZWxlbWVudFxuICAgICAgLy8gSXQgY2FuIHNwYW4gbXVsdGlwbGUgbGluZXMuXG4gICAgICAvLyBJdCBtdXN0IGVuZCB3aXRoIGEgY29tbWEgb3IgYW4gYWNjb2xhZGUgb3IgaGF2ZSBpbmRlbnRlZCBjb250ZW50LlxuICAgICAgc2VsZWN0b3I6IHtcbiAgICAgICAgcGF0dGVybjogLyheWyBcXHRdKikoPzooPz1cXFMpKD86W157fVxcclxcbjooKV18Ojo/W1xcdy1dKyg/OlxcKFteKVxcclxcbl0qXFwpKT98XFx7W159XFxyXFxuXStcXH0pKykoPzooPzpcXHI/XFxufFxccikoPzpcXDEoPzooPz1cXFMpKD86W157fVxcclxcbjooKV18Ojo/W1xcdy1dKyg/OlxcKFteKVxcclxcbl0qXFwpKT98XFx7W159XFxyXFxuXStcXH0pKykpKSooPzosJHxcXHt8KD89KD86XFxyP1xcbnxcXHIpKD86XFx7fFxcMVsgXFx0XSspKSkvbSxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgaW50ZXJwb2xhdGlvbjogaW5zaWRlLmludGVycG9sYXRpb24sXG4gICAgICAgICAgcHVuY3R1YXRpb246IC9be30sXS9cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGZ1bmM6IGluc2lkZS5mdW5jLFxuICAgICAgc3RyaW5nOiBpbnNpZGUuc3RyaW5nLFxuICAgICAgaW50ZXJwb2xhdGlvbjogaW5zaWRlLmludGVycG9sYXRpb24sXG4gICAgICBwdW5jdHVhdGlvbjogL1t7fSgpXFxbXFxdOzouXS9cbiAgICB9XG4gIH0pKFByaXNtKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
(self["webpackChunkheaderproject"] = self["webpackChunkheaderproject"] || []).push([["react-syntax-highlighter_languages_refractor_xeora"],{

/***/ "./node_modules/refractor/lang/xeora.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/xeora.js ***!
  \**********************************************/
/***/ ((module) => {

"use strict";


module.exports = xeora
xeora.displayName = 'xeora'
xeora.aliases = ['xeoracube']
function xeora(Prism) {
  ;(function(Prism) {
    Prism.languages.xeora = Prism.languages.extend('markup', {
      constant: {
        pattern: /\$(?:DomainContents|PageRenderDuration)\$/,
        inside: {
          punctuation: {
            pattern: /\$/
          }
        }
      },
      variable: {
        pattern: /\$@?(?:#+|[-+*~=^])?[\w.]+\$/,
        inside: {
          punctuation: {
            pattern: /[$.]/
          },
          operator: {
            pattern: /#+|[-+*~=^@]/
          }
        }
      },
      'function-inline': {
        pattern: /\$F:[-\w.]+\?[-\w.]+(?:,(?:\|?(?:[-#.^+*~]*(?:[\w+][^$]*)|=(?:[\S+][^$]*)|@[-#]*(?:\w+.)[\w+.]+)?)*)?\$/,
        inside: {
          variable: {
            pattern: /(?:[,|])@?(?:#+|[-+*~=^])?[\w.]+/,
            inside: {
              punctuation: {
                pattern: /[,.|]/
              },
              operator: {
                pattern: /#+|[-+*~=^@]/
              }
            }
          },
          punctuation: {
            pattern: /\$\w:|[$:?.,|]/
          }
        },
        alias: 'function'
      },
      'function-block': {
        pattern: /\$XF:{[-\w.]+\?[-\w.]+(?:,(?:\|?(?:[-#.^+*~]*(?:[\w+][^$]*)|=(?:[\S+][^$]*)|@[-#]*(?:\w+.)[\w+.]+)?)*)?}:XF\$/,
        inside: {
          punctuation: {
            pattern: /[$:{}?.,|]/
          }
        },
        alias: 'function'
      },
      'directive-inline': {
        pattern: /\$\w(?:#\d+\+?)?(?:\[[-\w.]+])?:[-\/\w.]+\$/,
        inside: {
          punctuation: {
            pattern: /\$(?:\w:|C(?:\[|#\d))?|[:{[\]]/,
            inside: {
              tag: {
                pattern: /#\d/
              }
            }
          }
        },
        alias: 'function'
      },
      'directive-block-open': {
        pattern: /\$\w+:{|\$\w(?:#\d+\+?)?(?:\[[-\w.]+])?:[-\w.]+:{(![A-Z]+)?/,
        inside: {
          punctuation: {
            pattern: /\$(?:\w:|C(?:\[|#\d))?|[:{[\]]/,
            inside: {
              tag: {
                pattern: /#\d/
              }
            }
          },
          attribute: {
            pattern: /![A-Z]+$/,
            inside: {
              punctuation: {
                pattern: /!/
              }
            },
            alias: 'keyword'
          }
        },
        alias: 'function'
      },
      'directive-block-separator': {
        pattern: /}:[-\w.]+:{/,
        inside: {
          punctuation: {
            pattern: /[:{}]/
          }
        },
        alias: 'function'
      },
      'directive-block-close': {
        pattern: /}:[-\w.]+\$/,
        inside: {
          punctuation: {
            pattern: /[:{}$]/
          }
        },
        alias: 'function'
      }
    })
    Prism.languages.insertBefore(
      'inside',
      'punctuation',
      {
        variable: Prism.languages.xeora['function-inline'].inside['variable']
      },
      Prism.languages.xeora['function-block']
    )
    Prism.languages.xeoracube = Prism.languages.xeora
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFkZXJwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL3hlb3JhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE9BQU87QUFDUDtBQUNBLHdCQUF3QixrR0FBa0c7QUFDMUg7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBLFNBQVM7QUFDVDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxPQUFPO0FBQ1A7QUFDQSx5QkFBeUIsMENBQTBDO0FBQ25FO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLE9BQU87QUFDUDtBQUNBLG1CQUFtQixVQUFVO0FBQzdCO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxPQUFPO0FBQ1A7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIIiwiZmlsZSI6InJlYWN0LXN5bnRheC1oaWdobGlnaHRlcl9sYW5ndWFnZXNfcmVmcmFjdG9yX3hlb3JhLmJ1bmRsZS5jZWFlYTY2ODZiNjE3MjBmZjc2MC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHhlb3JhXG54ZW9yYS5kaXNwbGF5TmFtZSA9ICd4ZW9yYSdcbnhlb3JhLmFsaWFzZXMgPSBbJ3hlb3JhY3ViZSddXG5mdW5jdGlvbiB4ZW9yYShQcmlzbSkge1xuICA7KGZ1bmN0aW9uKFByaXNtKSB7XG4gICAgUHJpc20ubGFuZ3VhZ2VzLnhlb3JhID0gUHJpc20ubGFuZ3VhZ2VzLmV4dGVuZCgnbWFya3VwJywge1xuICAgICAgY29uc3RhbnQ6IHtcbiAgICAgICAgcGF0dGVybjogL1xcJCg/OkRvbWFpbkNvbnRlbnRzfFBhZ2VSZW5kZXJEdXJhdGlvbilcXCQvLFxuICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICBwdW5jdHVhdGlvbjoge1xuICAgICAgICAgICAgcGF0dGVybjogL1xcJC9cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB2YXJpYWJsZToge1xuICAgICAgICBwYXR0ZXJuOiAvXFwkQD8oPzojK3xbLSsqfj1eXSk/W1xcdy5dK1xcJC8sXG4gICAgICAgIGluc2lkZToge1xuICAgICAgICAgIHB1bmN0dWF0aW9uOiB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvWyQuXS9cbiAgICAgICAgICB9LFxuICAgICAgICAgIG9wZXJhdG9yOiB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvIyt8Wy0rKn49XkBdL1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgICdmdW5jdGlvbi1pbmxpbmUnOiB7XG4gICAgICAgIHBhdHRlcm46IC9cXCRGOlstXFx3Ll0rXFw/Wy1cXHcuXSsoPzosKD86XFx8Pyg/OlstIy5eKyp+XSooPzpbXFx3K11bXiRdKil8PSg/OltcXFMrXVteJF0qKXxAWy0jXSooPzpcXHcrLilbXFx3Ky5dKyk/KSopP1xcJC8sXG4gICAgICAgIGluc2lkZToge1xuICAgICAgICAgIHZhcmlhYmxlOiB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvKD86Wyx8XSlAPyg/OiMrfFstKyp+PV5dKT9bXFx3Ll0rLyxcbiAgICAgICAgICAgIGluc2lkZToge1xuICAgICAgICAgICAgICBwdW5jdHVhdGlvbjoge1xuICAgICAgICAgICAgICAgIHBhdHRlcm46IC9bLC58XS9cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgb3BlcmF0b3I6IHtcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiAvIyt8Wy0rKn49XkBdL1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBwdW5jdHVhdGlvbjoge1xuICAgICAgICAgICAgcGF0dGVybjogL1xcJFxcdzp8WyQ6Py4sfF0vXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBhbGlhczogJ2Z1bmN0aW9uJ1xuICAgICAgfSxcbiAgICAgICdmdW5jdGlvbi1ibG9jayc6IHtcbiAgICAgICAgcGF0dGVybjogL1xcJFhGOntbLVxcdy5dK1xcP1stXFx3Ll0rKD86LCg/OlxcfD8oPzpbLSMuXisqfl0qKD86W1xcdytdW14kXSopfD0oPzpbXFxTK11bXiRdKil8QFstI10qKD86XFx3Ky4pW1xcdysuXSspPykqKT99OlhGXFwkLyxcbiAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgcHVuY3R1YXRpb246IHtcbiAgICAgICAgICAgIHBhdHRlcm46IC9bJDp7fT8uLHxdL1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgYWxpYXM6ICdmdW5jdGlvbidcbiAgICAgIH0sXG4gICAgICAnZGlyZWN0aXZlLWlubGluZSc6IHtcbiAgICAgICAgcGF0dGVybjogL1xcJFxcdyg/OiNcXGQrXFwrPyk/KD86XFxbWy1cXHcuXStdKT86Wy1cXC9cXHcuXStcXCQvLFxuICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICBwdW5jdHVhdGlvbjoge1xuICAgICAgICAgICAgcGF0dGVybjogL1xcJCg/Olxcdzp8Qyg/OlxcW3wjXFxkKSk/fFs6e1tcXF1dLyxcbiAgICAgICAgICAgIGluc2lkZToge1xuICAgICAgICAgICAgICB0YWc6IHtcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiAvI1xcZC9cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgYWxpYXM6ICdmdW5jdGlvbidcbiAgICAgIH0sXG4gICAgICAnZGlyZWN0aXZlLWJsb2NrLW9wZW4nOiB7XG4gICAgICAgIHBhdHRlcm46IC9cXCRcXHcrOnt8XFwkXFx3KD86I1xcZCtcXCs/KT8oPzpcXFtbLVxcdy5dK10pPzpbLVxcdy5dKzp7KCFbQS1aXSspPy8sXG4gICAgICAgIGluc2lkZToge1xuICAgICAgICAgIHB1bmN0dWF0aW9uOiB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvXFwkKD86XFx3OnxDKD86XFxbfCNcXGQpKT98Wzp7W1xcXV0vLFxuICAgICAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgICAgIHRhZzoge1xuICAgICAgICAgICAgICAgIHBhdHRlcm46IC8jXFxkL1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBhdHRyaWJ1dGU6IHtcbiAgICAgICAgICAgIHBhdHRlcm46IC8hW0EtWl0rJC8sXG4gICAgICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICAgICAgcHVuY3R1YXRpb246IHtcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiAvIS9cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFsaWFzOiAna2V5d29yZCdcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGFsaWFzOiAnZnVuY3Rpb24nXG4gICAgICB9LFxuICAgICAgJ2RpcmVjdGl2ZS1ibG9jay1zZXBhcmF0b3InOiB7XG4gICAgICAgIHBhdHRlcm46IC99OlstXFx3Ll0rOnsvLFxuICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICBwdW5jdHVhdGlvbjoge1xuICAgICAgICAgICAgcGF0dGVybjogL1s6e31dL1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgYWxpYXM6ICdmdW5jdGlvbidcbiAgICAgIH0sXG4gICAgICAnZGlyZWN0aXZlLWJsb2NrLWNsb3NlJzoge1xuICAgICAgICBwYXR0ZXJuOiAvfTpbLVxcdy5dK1xcJC8sXG4gICAgICAgIGluc2lkZToge1xuICAgICAgICAgIHB1bmN0dWF0aW9uOiB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvWzp7fSRdL1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgYWxpYXM6ICdmdW5jdGlvbidcbiAgICAgIH1cbiAgICB9KVxuICAgIFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoXG4gICAgICAnaW5zaWRlJyxcbiAgICAgICdwdW5jdHVhdGlvbicsXG4gICAgICB7XG4gICAgICAgIHZhcmlhYmxlOiBQcmlzbS5sYW5ndWFnZXMueGVvcmFbJ2Z1bmN0aW9uLWlubGluZSddLmluc2lkZVsndmFyaWFibGUnXVxuICAgICAgfSxcbiAgICAgIFByaXNtLmxhbmd1YWdlcy54ZW9yYVsnZnVuY3Rpb24tYmxvY2snXVxuICAgIClcbiAgICBQcmlzbS5sYW5ndWFnZXMueGVvcmFjdWJlID0gUHJpc20ubGFuZ3VhZ2VzLnhlb3JhXG4gIH0pKFByaXNtKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
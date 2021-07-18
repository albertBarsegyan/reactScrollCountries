(self["webpackChunkheaderproject"] = self["webpackChunkheaderproject"] || []).push([["react-syntax-highlighter_languages_refractor_markup"],{

/***/ "./node_modules/refractor/lang/markup.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/markup.js ***!
  \***********************************************/
/***/ ((module) => {

"use strict";


module.exports = markup
markup.displayName = 'markup'
markup.aliases = ['xml', 'html', 'mathml', 'svg']
function markup(Prism) {
  Prism.languages.markup = {
    comment: /<!--[\s\S]*?-->/,
    prolog: /<\?[\s\S]+?\?>/,
    doctype: /<!DOCTYPE[\s\S]+?>/i,
    cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
    tag: {
      pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,
      greedy: true,
      inside: {
        tag: {
          pattern: /^<\/?[^\s>\/]+/i,
          inside: {
            punctuation: /^<\/?/,
            namespace: /^[^\s>\/:]+:/
          }
        },
        'attr-value': {
          pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,
          inside: {
            punctuation: [
              /^=/,
              {
                pattern: /^(\s*)["']|["']$/,
                lookbehind: true
              }
            ]
          }
        },
        punctuation: /\/?>/,
        'attr-name': {
          pattern: /[^\s>\/]+/,
          inside: {
            namespace: /^[^\s>\/:]+:/
          }
        }
      }
    },
    entity: /&#?[\da-z]{1,8};/i
  }
  Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] =
    Prism.languages.markup['entity'] // Plugin to make entity title show the real entity, idea by Roman Komarov
  Prism.hooks.add('wrap', function(env) {
    if (env.type === 'entity') {
      env.attributes['title'] = env.content.value.replace(/&amp;/, '&')
    }
  })
  Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
    /**
     * Adds an inlined language to markup.
     *
     * An example of an inlined language is CSS with `<style>` tags.
     *
     * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
     * case insensitive.
     * @param {string} lang The language key.
     * @example
     * addInlined('style', 'css');
     */
    value: function addInlined(tagName, lang) {
      var includedCdataInside = {}
      includedCdataInside['language-' + lang] = {
        pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
        lookbehind: true,
        inside: Prism.languages[lang]
      }
      includedCdataInside['cdata'] = /^<!\[CDATA\[|\]\]>$/i
      var inside = {
        'included-cdata': {
          pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
          inside: includedCdataInside
        }
      }
      inside['language-' + lang] = {
        pattern: /[\s\S]+/,
        inside: Prism.languages[lang]
      }
      var def = {}
      def[tagName] = {
        pattern: RegExp(
          /(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(
            /__/g,
            tagName
          ),
          'i'
        ),
        lookbehind: true,
        greedy: true,
        inside: inside
      }
      Prism.languages.insertBefore('markup', 'cdata', def)
    }
  })
  Prism.languages.xml = Prism.languages.extend('markup', {})
  Prism.languages.html = Prism.languages.markup
  Prism.languages.mathml = Prism.languages.markup
  Prism.languages.svg = Prism.languages.markup
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFkZXJwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL21hcmt1cC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsd0JBQXdCLEtBQUs7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRTtBQUNoRTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILDJEQUEyRDtBQUMzRDtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJyZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX3JlZnJhY3Rvcl9tYXJrdXAuYnVuZGxlLmNlYWVhNjY4NmI2MTcyMGZmNzYwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gbWFya3VwXG5tYXJrdXAuZGlzcGxheU5hbWUgPSAnbWFya3VwJ1xubWFya3VwLmFsaWFzZXMgPSBbJ3htbCcsICdodG1sJywgJ21hdGhtbCcsICdzdmcnXVxuZnVuY3Rpb24gbWFya3VwKFByaXNtKSB7XG4gIFByaXNtLmxhbmd1YWdlcy5tYXJrdXAgPSB7XG4gICAgY29tbWVudDogLzwhLS1bXFxzXFxTXSo/LS0+LyxcbiAgICBwcm9sb2c6IC88XFw/W1xcc1xcU10rP1xcPz4vLFxuICAgIGRvY3R5cGU6IC88IURPQ1RZUEVbXFxzXFxTXSs/Pi9pLFxuICAgIGNkYXRhOiAvPCFcXFtDREFUQVxcW1tcXHNcXFNdKj9dXT4vaSxcbiAgICB0YWc6IHtcbiAgICAgIHBhdHRlcm46IC88XFwvPyg/IVxcZClbXlxccz5cXC89JDwlXSsoPzpcXHMoPzpcXHMqW15cXHM+XFwvPV0rKD86XFxzKj1cXHMqKD86XCJbXlwiXSpcInwnW14nXSonfFteXFxzJ1wiPj1dKyg/PVtcXHM+XSkpfCg/PVtcXHMvPl0pKSkrKT9cXHMqXFwvPz4vaSxcbiAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgIGluc2lkZToge1xuICAgICAgICB0YWc6IHtcbiAgICAgICAgICBwYXR0ZXJuOiAvXjxcXC8/W15cXHM+XFwvXSsvaSxcbiAgICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICAgIHB1bmN0dWF0aW9uOiAvXjxcXC8/LyxcbiAgICAgICAgICAgIG5hbWVzcGFjZTogL15bXlxccz5cXC86XSs6L1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJ2F0dHItdmFsdWUnOiB7XG4gICAgICAgICAgcGF0dGVybjogLz1cXHMqKD86XCJbXlwiXSpcInwnW14nXSonfFteXFxzJ1wiPj1dKykvaSxcbiAgICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICAgIHB1bmN0dWF0aW9uOiBbXG4gICAgICAgICAgICAgIC9ePS8sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiAvXihcXHMqKVtcIiddfFtcIiddJC8sXG4gICAgICAgICAgICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBwdW5jdHVhdGlvbjogL1xcLz8+LyxcbiAgICAgICAgJ2F0dHItbmFtZSc6IHtcbiAgICAgICAgICBwYXR0ZXJuOiAvW15cXHM+XFwvXSsvLFxuICAgICAgICAgIGluc2lkZToge1xuICAgICAgICAgICAgbmFtZXNwYWNlOiAvXlteXFxzPlxcLzpdKzovXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBlbnRpdHk6IC8mIz9bXFxkYS16XXsxLDh9Oy9pXG4gIH1cbiAgUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cFsndGFnJ10uaW5zaWRlWydhdHRyLXZhbHVlJ10uaW5zaWRlWydlbnRpdHknXSA9XG4gICAgUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cFsnZW50aXR5J10gLy8gUGx1Z2luIHRvIG1ha2UgZW50aXR5IHRpdGxlIHNob3cgdGhlIHJlYWwgZW50aXR5LCBpZGVhIGJ5IFJvbWFuIEtvbWFyb3ZcbiAgUHJpc20uaG9va3MuYWRkKCd3cmFwJywgZnVuY3Rpb24oZW52KSB7XG4gICAgaWYgKGVudi50eXBlID09PSAnZW50aXR5Jykge1xuICAgICAgZW52LmF0dHJpYnV0ZXNbJ3RpdGxlJ10gPSBlbnYuY29udGVudC52YWx1ZS5yZXBsYWNlKC8mYW1wOy8sICcmJylcbiAgICB9XG4gIH0pXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShQcmlzbS5sYW5ndWFnZXMubWFya3VwLnRhZywgJ2FkZElubGluZWQnLCB7XG4gICAgLyoqXG4gICAgICogQWRkcyBhbiBpbmxpbmVkIGxhbmd1YWdlIHRvIG1hcmt1cC5cbiAgICAgKlxuICAgICAqIEFuIGV4YW1wbGUgb2YgYW4gaW5saW5lZCBsYW5ndWFnZSBpcyBDU1Mgd2l0aCBgPHN0eWxlPmAgdGFncy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0YWdOYW1lIFRoZSBuYW1lIG9mIHRoZSB0YWcgdGhhdCBjb250YWlucyB0aGUgaW5saW5lZCBsYW5ndWFnZS4gVGhpcyBuYW1lIHdpbGwgYmUgdHJlYXRlZCBhc1xuICAgICAqIGNhc2UgaW5zZW5zaXRpdmUuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGxhbmcgVGhlIGxhbmd1YWdlIGtleS5cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIGFkZElubGluZWQoJ3N0eWxlJywgJ2NzcycpO1xuICAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRJbmxpbmVkKHRhZ05hbWUsIGxhbmcpIHtcbiAgICAgIHZhciBpbmNsdWRlZENkYXRhSW5zaWRlID0ge31cbiAgICAgIGluY2x1ZGVkQ2RhdGFJbnNpZGVbJ2xhbmd1YWdlLScgKyBsYW5nXSA9IHtcbiAgICAgICAgcGF0dGVybjogLyhePCFcXFtDREFUQVxcWylbXFxzXFxTXSs/KD89XFxdXFxdPiQpL2ksXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgIGluc2lkZTogUHJpc20ubGFuZ3VhZ2VzW2xhbmddXG4gICAgICB9XG4gICAgICBpbmNsdWRlZENkYXRhSW5zaWRlWydjZGF0YSddID0gL148IVxcW0NEQVRBXFxbfFxcXVxcXT4kL2lcbiAgICAgIHZhciBpbnNpZGUgPSB7XG4gICAgICAgICdpbmNsdWRlZC1jZGF0YSc6IHtcbiAgICAgICAgICBwYXR0ZXJuOiAvPCFcXFtDREFUQVxcW1tcXHNcXFNdKj9cXF1cXF0+L2ksXG4gICAgICAgICAgaW5zaWRlOiBpbmNsdWRlZENkYXRhSW5zaWRlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGluc2lkZVsnbGFuZ3VhZ2UtJyArIGxhbmddID0ge1xuICAgICAgICBwYXR0ZXJuOiAvW1xcc1xcU10rLyxcbiAgICAgICAgaW5zaWRlOiBQcmlzbS5sYW5ndWFnZXNbbGFuZ11cbiAgICAgIH1cbiAgICAgIHZhciBkZWYgPSB7fVxuICAgICAgZGVmW3RhZ05hbWVdID0ge1xuICAgICAgICBwYXR0ZXJuOiBSZWdFeHAoXG4gICAgICAgICAgLyg8X19bXFxzXFxTXSo/PikoPzo8IVxcW0NEQVRBXFxbW1xcc1xcU10qP1xcXVxcXT5cXHMqfFtcXHNcXFNdKSo/KD89PFxcL19fPikvLnNvdXJjZS5yZXBsYWNlKFxuICAgICAgICAgICAgL19fL2csXG4gICAgICAgICAgICB0YWdOYW1lXG4gICAgICAgICAgKSxcbiAgICAgICAgICAnaSdcbiAgICAgICAgKSxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgICBpbnNpZGU6IGluc2lkZVxuICAgICAgfVxuICAgICAgUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnbWFya3VwJywgJ2NkYXRhJywgZGVmKVxuICAgIH1cbiAgfSlcbiAgUHJpc20ubGFuZ3VhZ2VzLnhtbCA9IFByaXNtLmxhbmd1YWdlcy5leHRlbmQoJ21hcmt1cCcsIHt9KVxuICBQcmlzbS5sYW5ndWFnZXMuaHRtbCA9IFByaXNtLmxhbmd1YWdlcy5tYXJrdXBcbiAgUHJpc20ubGFuZ3VhZ2VzLm1hdGhtbCA9IFByaXNtLmxhbmd1YWdlcy5tYXJrdXBcbiAgUHJpc20ubGFuZ3VhZ2VzLnN2ZyA9IFByaXNtLmxhbmd1YWdlcy5tYXJrdXBcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
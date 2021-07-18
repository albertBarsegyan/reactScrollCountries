(self["webpackChunkheaderproject"] = self["webpackChunkheaderproject"] || []).push([["react-syntax-highlighter_languages_refractor_pug"],{

/***/ "./node_modules/refractor/lang/pug.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/pug.js ***!
  \********************************************/
/***/ ((module) => {

"use strict";


module.exports = pug
pug.displayName = 'pug'
pug.aliases = []
function pug(Prism) {
  ;(function(Prism) {
    // TODO:
    // - Add CSS highlighting inside <style> tags
    // - Add support for multi-line code blocks
    // - Add support for interpolation #{} and !{}
    // - Add support for tag interpolation #[]
    // - Add explicit support for plain text using |
    // - Add support for markup embedded in plain text
    Prism.languages.pug = {
      // Multiline stuff should appear before the rest
      // This handles both single-line and multi-line comments
      comment: {
        pattern: /(^([\t ]*))\/\/.*(?:(?:\r?\n|\r)\2[\t ]+.+)*/m,
        lookbehind: true
      },
      // All the tag-related part is in lookbehind
      // so that it can be highlighted by the "tag" pattern
      'multiline-script': {
        pattern: /(^([\t ]*)script\b.*\.[\t ]*)(?:(?:\r?\n|\r(?!\n))(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/m,
        lookbehind: true,
        inside: {
          rest: Prism.languages.javascript
        }
      },
      // See at the end of the file for known filters
      filter: {
        pattern: /(^([\t ]*)):.+(?:(?:\r?\n|\r(?!\n))(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/m,
        lookbehind: true,
        inside: {
          'filter-name': {
            pattern: /^:[\w-]+/,
            alias: 'variable'
          }
        }
      },
      'multiline-plain-text': {
        pattern: /(^([\t ]*)[\w\-#.]+\.[\t ]*)(?:(?:\r?\n|\r(?!\n))(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/m,
        lookbehind: true
      },
      markup: {
        pattern: /(^[\t ]*)<.+/m,
        lookbehind: true,
        inside: {
          rest: Prism.languages.markup
        }
      },
      doctype: {
        pattern: /((?:^|\n)[\t ]*)doctype(?: .+)?/,
        lookbehind: true
      },
      // This handle all conditional and loop keywords
      'flow-control': {
        pattern: /(^[\t ]*)(?:if|unless|else|case|when|default|each|while)\b(?: .+)?/m,
        lookbehind: true,
        inside: {
          each: {
            pattern: /^each .+? in\b/,
            inside: {
              keyword: /\b(?:each|in)\b/,
              punctuation: /,/
            }
          },
          branch: {
            pattern: /^(?:if|unless|else|case|when|default|while)\b/,
            alias: 'keyword'
          },
          rest: Prism.languages.javascript
        }
      },
      keyword: {
        pattern: /(^[\t ]*)(?:block|extends|include|append|prepend)\b.+/m,
        lookbehind: true
      },
      mixin: [
        // Declaration
        {
          pattern: /(^[\t ]*)mixin .+/m,
          lookbehind: true,
          inside: {
            keyword: /^mixin/,
            function: /\w+(?=\s*\(|\s*$)/,
            punctuation: /[(),.]/
          }
        }, // Usage
        {
          pattern: /(^[\t ]*)\+.+/m,
          lookbehind: true,
          inside: {
            name: {
              pattern: /^\+\w+/,
              alias: 'function'
            },
            rest: Prism.languages.javascript
          }
        }
      ],
      script: {
        pattern: /(^[\t ]*script(?:(?:&[^(]+)?\([^)]+\))*[\t ]+).+/m,
        lookbehind: true,
        inside: {
          rest: Prism.languages.javascript
        }
      },
      'plain-text': {
        pattern: /(^[\t ]*(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?[\t ]+).+/m,
        lookbehind: true
      },
      tag: {
        pattern: /(^[\t ]*)(?!-)[\w\-#.]*[\w\-](?:(?:&[^(]+)?\([^)]+\))*\/?:?/m,
        lookbehind: true,
        inside: {
          attributes: [
            {
              pattern: /&[^(]+\([^)]+\)/,
              inside: {
                rest: Prism.languages.javascript
              }
            },
            {
              pattern: /\([^)]+\)/,
              inside: {
                'attr-value': {
                  pattern: /(=\s*)(?:\{[^}]*\}|[^,)\r\n]+)/,
                  lookbehind: true,
                  inside: {
                    rest: Prism.languages.javascript
                  }
                },
                'attr-name': /[\w-]+(?=\s*!?=|\s*[,)])/,
                punctuation: /[!=(),]+/
              }
            }
          ],
          punctuation: /:/
        }
      },
      code: [
        {
          pattern: /(^[\t ]*(?:-|!?=)).+/m,
          lookbehind: true,
          inside: {
            rest: Prism.languages.javascript
          }
        }
      ],
      punctuation: /[.\-!=|]+/
    }
    var filter_pattern = /(^([\t ]*)):{{filter_name}}(?:(?:\r?\n|\r(?!\n))(?:\2[\t ]+.+|\s*?(?=\r?\n|\r)))+/
      .source // Non exhaustive list of available filters and associated languages
    var filters = [
      {
        filter: 'atpl',
        language: 'twig'
      },
      {
        filter: 'coffee',
        language: 'coffeescript'
      },
      'ejs',
      'handlebars',
      'less',
      'livescript',
      'markdown',
      {
        filter: 'sass',
        language: 'scss'
      },
      'stylus'
    ]
    var all_filters = {}
    for (var i = 0, l = filters.length; i < l; i++) {
      var filter = filters[i]
      filter =
        typeof filter === 'string'
          ? {
              filter: filter,
              language: filter
            }
          : filter
      if (Prism.languages[filter.language]) {
        all_filters['filter-' + filter.filter] = {
          pattern: RegExp(
            filter_pattern.replace('{{filter_name}}', filter.filter),
            'm'
          ),
          lookbehind: true,
          inside: {
            'filter-name': {
              pattern: /^:[\w-]+/,
              alias: 'variable'
            },
            rest: Prism.languages[filter.language]
          }
        }
      }
    }
    Prism.languages.insertBefore('pug', 'filter', all_filters)
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFkZXJwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL3B1Zy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLEdBQUcsSUFBSTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLGFBQWE7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsT0FBTztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLGFBQWE7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIIiwiZmlsZSI6InJlYWN0LXN5bnRheC1oaWdobGlnaHRlcl9sYW5ndWFnZXNfcmVmcmFjdG9yX3B1Zy5idW5kbGUuMTAyNjBkNmRlMTExMGZmZmQzNTcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBwdWdcbnB1Zy5kaXNwbGF5TmFtZSA9ICdwdWcnXG5wdWcuYWxpYXNlcyA9IFtdXG5mdW5jdGlvbiBwdWcoUHJpc20pIHtcbiAgOyhmdW5jdGlvbihQcmlzbSkge1xuICAgIC8vIFRPRE86XG4gICAgLy8gLSBBZGQgQ1NTIGhpZ2hsaWdodGluZyBpbnNpZGUgPHN0eWxlPiB0YWdzXG4gICAgLy8gLSBBZGQgc3VwcG9ydCBmb3IgbXVsdGktbGluZSBjb2RlIGJsb2Nrc1xuICAgIC8vIC0gQWRkIHN1cHBvcnQgZm9yIGludGVycG9sYXRpb24gI3t9IGFuZCAhe31cbiAgICAvLyAtIEFkZCBzdXBwb3J0IGZvciB0YWcgaW50ZXJwb2xhdGlvbiAjW11cbiAgICAvLyAtIEFkZCBleHBsaWNpdCBzdXBwb3J0IGZvciBwbGFpbiB0ZXh0IHVzaW5nIHxcbiAgICAvLyAtIEFkZCBzdXBwb3J0IGZvciBtYXJrdXAgZW1iZWRkZWQgaW4gcGxhaW4gdGV4dFxuICAgIFByaXNtLmxhbmd1YWdlcy5wdWcgPSB7XG4gICAgICAvLyBNdWx0aWxpbmUgc3R1ZmYgc2hvdWxkIGFwcGVhciBiZWZvcmUgdGhlIHJlc3RcbiAgICAgIC8vIFRoaXMgaGFuZGxlcyBib3RoIHNpbmdsZS1saW5lIGFuZCBtdWx0aS1saW5lIGNvbW1lbnRzXG4gICAgICBjb21tZW50OiB7XG4gICAgICAgIHBhdHRlcm46IC8oXihbXFx0IF0qKSlcXC9cXC8uKig/Oig/Olxccj9cXG58XFxyKVxcMltcXHQgXSsuKykqL20sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgIH0sXG4gICAgICAvLyBBbGwgdGhlIHRhZy1yZWxhdGVkIHBhcnQgaXMgaW4gbG9va2JlaGluZFxuICAgICAgLy8gc28gdGhhdCBpdCBjYW4gYmUgaGlnaGxpZ2h0ZWQgYnkgdGhlIFwidGFnXCIgcGF0dGVyblxuICAgICAgJ211bHRpbGluZS1zY3JpcHQnOiB7XG4gICAgICAgIHBhdHRlcm46IC8oXihbXFx0IF0qKXNjcmlwdFxcYi4qXFwuW1xcdCBdKikoPzooPzpcXHI/XFxufFxccig/IVxcbikpKD86XFwyW1xcdCBdKy4rfFxccyo/KD89XFxyP1xcbnxcXHIpKSkrL20sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgIGluc2lkZToge1xuICAgICAgICAgIHJlc3Q6IFByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyBTZWUgYXQgdGhlIGVuZCBvZiB0aGUgZmlsZSBmb3Iga25vd24gZmlsdGVyc1xuICAgICAgZmlsdGVyOiB7XG4gICAgICAgIHBhdHRlcm46IC8oXihbXFx0IF0qKSk6LisoPzooPzpcXHI/XFxufFxccig/IVxcbikpKD86XFwyW1xcdCBdKy4rfFxccyo/KD89XFxyP1xcbnxcXHIpKSkrL20sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgIGluc2lkZToge1xuICAgICAgICAgICdmaWx0ZXItbmFtZSc6IHtcbiAgICAgICAgICAgIHBhdHRlcm46IC9eOltcXHctXSsvLFxuICAgICAgICAgICAgYWxpYXM6ICd2YXJpYWJsZSdcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAnbXVsdGlsaW5lLXBsYWluLXRleHQnOiB7XG4gICAgICAgIHBhdHRlcm46IC8oXihbXFx0IF0qKVtcXHdcXC0jLl0rXFwuW1xcdCBdKikoPzooPzpcXHI/XFxufFxccig/IVxcbikpKD86XFwyW1xcdCBdKy4rfFxccyo/KD89XFxyP1xcbnxcXHIpKSkrL20sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgIH0sXG4gICAgICBtYXJrdXA6IHtcbiAgICAgICAgcGF0dGVybjogLyheW1xcdCBdKik8LisvbSxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgcmVzdDogUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZG9jdHlwZToge1xuICAgICAgICBwYXR0ZXJuOiAvKCg/Ol58XFxuKVtcXHQgXSopZG9jdHlwZSg/OiAuKyk/LyxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIC8vIFRoaXMgaGFuZGxlIGFsbCBjb25kaXRpb25hbCBhbmQgbG9vcCBrZXl3b3Jkc1xuICAgICAgJ2Zsb3ctY29udHJvbCc6IHtcbiAgICAgICAgcGF0dGVybjogLyheW1xcdCBdKikoPzppZnx1bmxlc3N8ZWxzZXxjYXNlfHdoZW58ZGVmYXVsdHxlYWNofHdoaWxlKVxcYig/OiAuKyk/L20sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgIGluc2lkZToge1xuICAgICAgICAgIGVhY2g6IHtcbiAgICAgICAgICAgIHBhdHRlcm46IC9eZWFjaCAuKz8gaW5cXGIvLFxuICAgICAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgICAgIGtleXdvcmQ6IC9cXGIoPzplYWNofGluKVxcYi8sXG4gICAgICAgICAgICAgIHB1bmN0dWF0aW9uOiAvLC9cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIGJyYW5jaDoge1xuICAgICAgICAgICAgcGF0dGVybjogL14oPzppZnx1bmxlc3N8ZWxzZXxjYXNlfHdoZW58ZGVmYXVsdHx3aGlsZSlcXGIvLFxuICAgICAgICAgICAgYWxpYXM6ICdrZXl3b3JkJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVzdDogUHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHRcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGtleXdvcmQ6IHtcbiAgICAgICAgcGF0dGVybjogLyheW1xcdCBdKikoPzpibG9ja3xleHRlbmRzfGluY2x1ZGV8YXBwZW5kfHByZXBlbmQpXFxiLisvbSxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIG1peGluOiBbXG4gICAgICAgIC8vIERlY2xhcmF0aW9uXG4gICAgICAgIHtcbiAgICAgICAgICBwYXR0ZXJuOiAvKF5bXFx0IF0qKW1peGluIC4rL20sXG4gICAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICAgIGtleXdvcmQ6IC9ebWl4aW4vLFxuICAgICAgICAgICAgZnVuY3Rpb246IC9cXHcrKD89XFxzKlxcKHxcXHMqJCkvLFxuICAgICAgICAgICAgcHVuY3R1YXRpb246IC9bKCksLl0vXG4gICAgICAgICAgfVxuICAgICAgICB9LCAvLyBVc2FnZVxuICAgICAgICB7XG4gICAgICAgICAgcGF0dGVybjogLyheW1xcdCBdKilcXCsuKy9tLFxuICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgICAgIHBhdHRlcm46IC9eXFwrXFx3Ky8sXG4gICAgICAgICAgICAgIGFsaWFzOiAnZnVuY3Rpb24nXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVzdDogUHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHRcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBzY3JpcHQ6IHtcbiAgICAgICAgcGF0dGVybjogLyheW1xcdCBdKnNjcmlwdCg/Oig/OiZbXihdKyk/XFwoW14pXStcXCkpKltcXHQgXSspLisvbSxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgcmVzdDogUHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHRcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgICdwbGFpbi10ZXh0Jzoge1xuICAgICAgICBwYXR0ZXJuOiAvKF5bXFx0IF0qKD8hLSlbXFx3XFwtIy5dKltcXHdcXC1dKD86KD86JlteKF0rKT9cXChbXildK1xcKSkqXFwvP1tcXHQgXSspLisvbSxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHRhZzoge1xuICAgICAgICBwYXR0ZXJuOiAvKF5bXFx0IF0qKSg/IS0pW1xcd1xcLSMuXSpbXFx3XFwtXSg/Oig/OiZbXihdKyk/XFwoW14pXStcXCkpKlxcLz86Py9tLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICBhdHRyaWJ1dGVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHBhdHRlcm46IC8mW14oXStcXChbXildK1xcKS8sXG4gICAgICAgICAgICAgIGluc2lkZToge1xuICAgICAgICAgICAgICAgIHJlc3Q6IFByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHBhdHRlcm46IC9cXChbXildK1xcKS8sXG4gICAgICAgICAgICAgIGluc2lkZToge1xuICAgICAgICAgICAgICAgICdhdHRyLXZhbHVlJzoge1xuICAgICAgICAgICAgICAgICAgcGF0dGVybjogLyg9XFxzKikoPzpcXHtbXn1dKlxcfXxbXiwpXFxyXFxuXSspLyxcbiAgICAgICAgICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdDogUHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHRcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICdhdHRyLW5hbWUnOiAvW1xcdy1dKyg/PVxccyohPz18XFxzKlssKV0pLyxcbiAgICAgICAgICAgICAgICBwdW5jdHVhdGlvbjogL1shPSgpLF0rL1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBwdW5jdHVhdGlvbjogLzovXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBjb2RlOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwYXR0ZXJuOiAvKF5bXFx0IF0qKD86LXwhPz0pKS4rL20sXG4gICAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICAgIHJlc3Q6IFByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgcHVuY3R1YXRpb246IC9bLlxcLSE9fF0rL1xuICAgIH1cbiAgICB2YXIgZmlsdGVyX3BhdHRlcm4gPSAvKF4oW1xcdCBdKikpOnt7ZmlsdGVyX25hbWV9fSg/Oig/Olxccj9cXG58XFxyKD8hXFxuKSkoPzpcXDJbXFx0IF0rLit8XFxzKj8oPz1cXHI/XFxufFxccikpKSsvXG4gICAgICAuc291cmNlIC8vIE5vbiBleGhhdXN0aXZlIGxpc3Qgb2YgYXZhaWxhYmxlIGZpbHRlcnMgYW5kIGFzc29jaWF0ZWQgbGFuZ3VhZ2VzXG4gICAgdmFyIGZpbHRlcnMgPSBbXG4gICAgICB7XG4gICAgICAgIGZpbHRlcjogJ2F0cGwnLFxuICAgICAgICBsYW5ndWFnZTogJ3R3aWcnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBmaWx0ZXI6ICdjb2ZmZWUnLFxuICAgICAgICBsYW5ndWFnZTogJ2NvZmZlZXNjcmlwdCdcbiAgICAgIH0sXG4gICAgICAnZWpzJyxcbiAgICAgICdoYW5kbGViYXJzJyxcbiAgICAgICdsZXNzJyxcbiAgICAgICdsaXZlc2NyaXB0JyxcbiAgICAgICdtYXJrZG93bicsXG4gICAgICB7XG4gICAgICAgIGZpbHRlcjogJ3Nhc3MnLFxuICAgICAgICBsYW5ndWFnZTogJ3Njc3MnXG4gICAgICB9LFxuICAgICAgJ3N0eWx1cydcbiAgICBdXG4gICAgdmFyIGFsbF9maWx0ZXJzID0ge31cbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IGZpbHRlcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICB2YXIgZmlsdGVyID0gZmlsdGVyc1tpXVxuICAgICAgZmlsdGVyID1cbiAgICAgICAgdHlwZW9mIGZpbHRlciA9PT0gJ3N0cmluZydcbiAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgZmlsdGVyOiBmaWx0ZXIsXG4gICAgICAgICAgICAgIGxhbmd1YWdlOiBmaWx0ZXJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA6IGZpbHRlclxuICAgICAgaWYgKFByaXNtLmxhbmd1YWdlc1tmaWx0ZXIubGFuZ3VhZ2VdKSB7XG4gICAgICAgIGFsbF9maWx0ZXJzWydmaWx0ZXItJyArIGZpbHRlci5maWx0ZXJdID0ge1xuICAgICAgICAgIHBhdHRlcm46IFJlZ0V4cChcbiAgICAgICAgICAgIGZpbHRlcl9wYXR0ZXJuLnJlcGxhY2UoJ3t7ZmlsdGVyX25hbWV9fScsIGZpbHRlci5maWx0ZXIpLFxuICAgICAgICAgICAgJ20nXG4gICAgICAgICAgKSxcbiAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICAgIGluc2lkZToge1xuICAgICAgICAgICAgJ2ZpbHRlci1uYW1lJzoge1xuICAgICAgICAgICAgICBwYXR0ZXJuOiAvXjpbXFx3LV0rLyxcbiAgICAgICAgICAgICAgYWxpYXM6ICd2YXJpYWJsZSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZXN0OiBQcmlzbS5sYW5ndWFnZXNbZmlsdGVyLmxhbmd1YWdlXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdwdWcnLCAnZmlsdGVyJywgYWxsX2ZpbHRlcnMpXG4gIH0pKFByaXNtKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
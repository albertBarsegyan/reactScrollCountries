(self["webpackChunkheaderproject"] = self["webpackChunkheaderproject"] || []).push([["react-syntax-highlighter_languages_refractor_css"],{

/***/ "./node_modules/refractor/lang/css.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/css.js ***!
  \********************************************/
/***/ ((module) => {

"use strict";


module.exports = css
css.displayName = 'css'
css.aliases = []
function css(Prism) {
  ;(function(Prism) {
    var string = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/
    Prism.languages.css = {
      comment: /\/\*[\s\S]*?\*\//,
      atrule: {
        pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,
        inside: {
          rule: /@[\w-]+/ // See rest below
        }
      },
      url: {
        pattern: RegExp('url\\((?:' + string.source + '|[^\n\r()]*)\\)', 'i'),
        inside: {
          function: /^url/i,
          punctuation: /^\(|\)$/
        }
      },
      selector: RegExp(
        '[^{}\\s](?:[^{};"\']|' + string.source + ')*?(?=\\s*\\{)'
      ),
      string: {
        pattern: string,
        greedy: true
      },
      property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
      important: /!important\b/i,
      function: /[-a-z0-9]+(?=\()/i,
      punctuation: /[(){};:,]/
    }
    Prism.languages.css['atrule'].inside.rest = Prism.languages.css
    var markup = Prism.languages.markup
    if (markup) {
      markup.tag.addInlined('style', 'css')
      Prism.languages.insertBefore(
        'inside',
        'attr-value',
        {
          'style-attr': {
            pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
            inside: {
              'attr-name': {
                pattern: /^\s*style/i,
                inside: markup.tag.inside
              },
              punctuation: /^\s*=\s*['"]|['"]\s*$/,
              'attr-value': {
                pattern: /.+/i,
                inside: Prism.languages.css
              }
            },
            alias: 'language-css'
          }
        },
        markup.tag
      )
    }
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFkZXJwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL2Nzcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxTQUFTO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxhQUFhLFlBQVksdUNBQXVDO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCIsImZpbGUiOiJyZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX3JlZnJhY3Rvcl9jc3MuYnVuZGxlLmNlYWVhNjY4NmI2MTcyMGZmNzYwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gY3NzXG5jc3MuZGlzcGxheU5hbWUgPSAnY3NzJ1xuY3NzLmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24gY3NzKFByaXNtKSB7XG4gIDsoZnVuY3Rpb24oUHJpc20pIHtcbiAgICB2YXIgc3RyaW5nID0gLyhcInwnKSg/OlxcXFwoPzpcXHJcXG58W1xcc1xcU10pfCg/IVxcMSlbXlxcXFxcXHJcXG5dKSpcXDEvXG4gICAgUHJpc20ubGFuZ3VhZ2VzLmNzcyA9IHtcbiAgICAgIGNvbW1lbnQ6IC9cXC9cXCpbXFxzXFxTXSo/XFwqXFwvLyxcbiAgICAgIGF0cnVsZToge1xuICAgICAgICBwYXR0ZXJuOiAvQFtcXHctXStbXFxzXFxTXSo/KD86O3woPz1cXHMqXFx7KSkvLFxuICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICBydWxlOiAvQFtcXHctXSsvIC8vIFNlZSByZXN0IGJlbG93XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB1cmw6IHtcbiAgICAgICAgcGF0dGVybjogUmVnRXhwKCd1cmxcXFxcKCg/OicgKyBzdHJpbmcuc291cmNlICsgJ3xbXlxcblxccigpXSopXFxcXCknLCAnaScpLFxuICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICBmdW5jdGlvbjogL151cmwvaSxcbiAgICAgICAgICBwdW5jdHVhdGlvbjogL15cXCh8XFwpJC9cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHNlbGVjdG9yOiBSZWdFeHAoXG4gICAgICAgICdbXnt9XFxcXHNdKD86W157fTtcIlxcJ118JyArIHN0cmluZy5zb3VyY2UgKyAnKSo/KD89XFxcXHMqXFxcXHspJ1xuICAgICAgKSxcbiAgICAgIHN0cmluZzoge1xuICAgICAgICBwYXR0ZXJuOiBzdHJpbmcsXG4gICAgICAgIGdyZWVkeTogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHByb3BlcnR5OiAvWy1fYS16XFx4QTAtXFx1RkZGRl1bLVxcd1xceEEwLVxcdUZGRkZdKig/PVxccyo6KS9pLFxuICAgICAgaW1wb3J0YW50OiAvIWltcG9ydGFudFxcYi9pLFxuICAgICAgZnVuY3Rpb246IC9bLWEtejAtOV0rKD89XFwoKS9pLFxuICAgICAgcHVuY3R1YXRpb246IC9bKCl7fTs6LF0vXG4gICAgfVxuICAgIFByaXNtLmxhbmd1YWdlcy5jc3NbJ2F0cnVsZSddLmluc2lkZS5yZXN0ID0gUHJpc20ubGFuZ3VhZ2VzLmNzc1xuICAgIHZhciBtYXJrdXAgPSBQcmlzbS5sYW5ndWFnZXMubWFya3VwXG4gICAgaWYgKG1hcmt1cCkge1xuICAgICAgbWFya3VwLnRhZy5hZGRJbmxpbmVkKCdzdHlsZScsICdjc3MnKVxuICAgICAgUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZShcbiAgICAgICAgJ2luc2lkZScsXG4gICAgICAgICdhdHRyLXZhbHVlJyxcbiAgICAgICAge1xuICAgICAgICAgICdzdHlsZS1hdHRyJzoge1xuICAgICAgICAgICAgcGF0dGVybjogL1xccypzdHlsZT0oXCJ8JykoPzpcXFxcW1xcc1xcU118KD8hXFwxKVteXFxcXF0pKlxcMS9pLFxuICAgICAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgICAgICdhdHRyLW5hbWUnOiB7XG4gICAgICAgICAgICAgICAgcGF0dGVybjogL15cXHMqc3R5bGUvaSxcbiAgICAgICAgICAgICAgICBpbnNpZGU6IG1hcmt1cC50YWcuaW5zaWRlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHB1bmN0dWF0aW9uOiAvXlxccyo9XFxzKlsnXCJdfFsnXCJdXFxzKiQvLFxuICAgICAgICAgICAgICAnYXR0ci12YWx1ZSc6IHtcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiAvLisvaSxcbiAgICAgICAgICAgICAgICBpbnNpZGU6IFByaXNtLmxhbmd1YWdlcy5jc3NcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFsaWFzOiAnbGFuZ3VhZ2UtY3NzJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWFya3VwLnRhZ1xuICAgICAgKVxuICAgIH1cbiAgfSkoUHJpc20pXG59XG4iXSwic291cmNlUm9vdCI6IiJ9
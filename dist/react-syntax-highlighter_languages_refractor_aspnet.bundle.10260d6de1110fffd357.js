(self["webpackChunkheaderproject"] = self["webpackChunkheaderproject"] || []).push([["react-syntax-highlighter_languages_refractor_aspnet"],{

/***/ "./node_modules/refractor/lang/aspnet.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/aspnet.js ***!
  \***********************************************/
/***/ ((module) => {

"use strict";


module.exports = aspnet
aspnet.displayName = 'aspnet'
aspnet.aliases = []
function aspnet(Prism) {
  Prism.languages.aspnet = Prism.languages.extend('markup', {
    'page-directive tag': {
      pattern: /<%\s*@.*%>/i,
      inside: {
        'page-directive tag': /<%\s*@\s*(?:Assembly|Control|Implements|Import|Master(?:Type)?|OutputCache|Page|PreviousPageType|Reference|Register)?|%>/i,
        rest: Prism.languages.markup.tag.inside
      }
    },
    'directive tag': {
      pattern: /<%.*%>/i,
      inside: {
        'directive tag': /<%\s*?[$=%#:]{0,2}|%>/i,
        rest: Prism.languages.csharp
      }
    }
  }) // Regexp copied from prism-markup, with a negative look-ahead added
  Prism.languages.aspnet.tag.pattern = /<(?!%)\/?[^\s>\/]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i // match directives of attribute value foo="<% Bar %>"
  Prism.languages.insertBefore(
    'inside',
    'punctuation',
    {
      'directive tag': Prism.languages.aspnet['directive tag']
    },
    Prism.languages.aspnet.tag.inside['attr-value']
  )
  Prism.languages.insertBefore('aspnet', 'comment', {
    'asp comment': /<%--[\s\S]*?--%>/
  }) // script runat="server" contains csharp, not javascript
  Prism.languages.insertBefore(
    'aspnet',
    Prism.languages.javascript ? 'script' : 'tag',
    {
      'asp script': {
        pattern: /(<script(?=.*runat=['"]?server['"]?)[\s\S]*?>)[\s\S]*?(?=<\/script>)/i,
        lookbehind: true,
        inside: Prism.languages.csharp || {}
      }
    }
  )
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFkZXJwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL2FzcG5ldC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxJQUFJO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InJlYWN0LXN5bnRheC1oaWdobGlnaHRlcl9sYW5ndWFnZXNfcmVmcmFjdG9yX2FzcG5ldC5idW5kbGUuMTAyNjBkNmRlMTExMGZmZmQzNTcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBhc3BuZXRcbmFzcG5ldC5kaXNwbGF5TmFtZSA9ICdhc3BuZXQnXG5hc3BuZXQuYWxpYXNlcyA9IFtdXG5mdW5jdGlvbiBhc3BuZXQoUHJpc20pIHtcbiAgUHJpc20ubGFuZ3VhZ2VzLmFzcG5ldCA9IFByaXNtLmxhbmd1YWdlcy5leHRlbmQoJ21hcmt1cCcsIHtcbiAgICAncGFnZS1kaXJlY3RpdmUgdGFnJzoge1xuICAgICAgcGF0dGVybjogLzwlXFxzKkAuKiU+L2ksXG4gICAgICBpbnNpZGU6IHtcbiAgICAgICAgJ3BhZ2UtZGlyZWN0aXZlIHRhZyc6IC88JVxccypAXFxzKig/OkFzc2VtYmx5fENvbnRyb2x8SW1wbGVtZW50c3xJbXBvcnR8TWFzdGVyKD86VHlwZSk/fE91dHB1dENhY2hlfFBhZ2V8UHJldmlvdXNQYWdlVHlwZXxSZWZlcmVuY2V8UmVnaXN0ZXIpP3wlPi9pLFxuICAgICAgICByZXN0OiBQcmlzbS5sYW5ndWFnZXMubWFya3VwLnRhZy5pbnNpZGVcbiAgICAgIH1cbiAgICB9LFxuICAgICdkaXJlY3RpdmUgdGFnJzoge1xuICAgICAgcGF0dGVybjogLzwlLiolPi9pLFxuICAgICAgaW5zaWRlOiB7XG4gICAgICAgICdkaXJlY3RpdmUgdGFnJzogLzwlXFxzKj9bJD0lIzpdezAsMn18JT4vaSxcbiAgICAgICAgcmVzdDogUHJpc20ubGFuZ3VhZ2VzLmNzaGFycFxuICAgICAgfVxuICAgIH1cbiAgfSkgLy8gUmVnZXhwIGNvcGllZCBmcm9tIHByaXNtLW1hcmt1cCwgd2l0aCBhIG5lZ2F0aXZlIGxvb2stYWhlYWQgYWRkZWRcbiAgUHJpc20ubGFuZ3VhZ2VzLmFzcG5ldC50YWcucGF0dGVybiA9IC88KD8hJSlcXC8/W15cXHM+XFwvXSsoPzpcXHMrW15cXHM+XFwvPV0rKD86PSg/OihcInwnKSg/OlxcXFxbXFxzXFxTXXwoPyFcXDEpW15cXFxcXSkqXFwxfFteXFxzJ1wiPj1dKykpPykqXFxzKlxcLz8+L2kgLy8gbWF0Y2ggZGlyZWN0aXZlcyBvZiBhdHRyaWJ1dGUgdmFsdWUgZm9vPVwiPCUgQmFyICU+XCJcbiAgUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZShcbiAgICAnaW5zaWRlJyxcbiAgICAncHVuY3R1YXRpb24nLFxuICAgIHtcbiAgICAgICdkaXJlY3RpdmUgdGFnJzogUHJpc20ubGFuZ3VhZ2VzLmFzcG5ldFsnZGlyZWN0aXZlIHRhZyddXG4gICAgfSxcbiAgICBQcmlzbS5sYW5ndWFnZXMuYXNwbmV0LnRhZy5pbnNpZGVbJ2F0dHItdmFsdWUnXVxuICApXG4gIFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ2FzcG5ldCcsICdjb21tZW50Jywge1xuICAgICdhc3AgY29tbWVudCc6IC88JS0tW1xcc1xcU10qPy0tJT4vXG4gIH0pIC8vIHNjcmlwdCBydW5hdD1cInNlcnZlclwiIGNvbnRhaW5zIGNzaGFycCwgbm90IGphdmFzY3JpcHRcbiAgUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZShcbiAgICAnYXNwbmV0JyxcbiAgICBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdCA/ICdzY3JpcHQnIDogJ3RhZycsXG4gICAge1xuICAgICAgJ2FzcCBzY3JpcHQnOiB7XG4gICAgICAgIHBhdHRlcm46IC8oPHNjcmlwdCg/PS4qcnVuYXQ9WydcIl0/c2VydmVyWydcIl0/KVtcXHNcXFNdKj8+KVtcXHNcXFNdKj8oPz08XFwvc2NyaXB0PikvaSxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgaW5zaWRlOiBQcmlzbS5sYW5ndWFnZXMuY3NoYXJwIHx8IHt9XG4gICAgICB9XG4gICAgfVxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9
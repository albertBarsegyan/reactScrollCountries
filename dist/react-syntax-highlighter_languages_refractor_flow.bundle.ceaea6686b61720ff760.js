(self["webpackChunkheaderproject"] = self["webpackChunkheaderproject"] || []).push([["react-syntax-highlighter_languages_refractor_flow"],{

/***/ "./node_modules/refractor/lang/flow.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/flow.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";


module.exports = flow
flow.displayName = 'flow'
flow.aliases = []
function flow(Prism) {
  ;(function(Prism) {
    Prism.languages.flow = Prism.languages.extend('javascript', {})
    Prism.languages.insertBefore('flow', 'keyword', {
      type: [
        {
          pattern: /\b(?:[Nn]umber|[Ss]tring|[Bb]oolean|Function|any|mixed|null|void)\b/,
          alias: 'tag'
        }
      ]
    })
    Prism.languages.flow[
      'function-variable'
    ].pattern = /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)(?:\s*:\s*\w+)?|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i
    delete Prism.languages.flow['parameter']
    Prism.languages.insertBefore('flow', 'operator', {
      'flow-punctuation': {
        pattern: /\{\||\|\}/,
        alias: 'punctuation'
      }
    })
    if (!Array.isArray(Prism.languages.flow.keyword)) {
      Prism.languages.flow.keyword = [Prism.languages.flow.keyword]
    }
    Prism.languages.flow.keyword.unshift(
      {
        pattern: /(^|[^$]\b)(?:type|opaque|declare|Class)\b(?!\$)/,
        lookbehind: true
      },
      {
        pattern: /(^|[^$]\B)\$(?:await|Diff|Exact|Keys|ObjMap|PropertyType|Shape|Record|Supertype|Subtype|Enum)\b(?!\$)/,
        lookbehind: true
      }
    )
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFkZXJwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL2Zsb3cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQVk7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsa0VBQWtFO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixPQUFPO0FBQzNCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCIsImZpbGUiOiJyZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX3JlZnJhY3Rvcl9mbG93LmJ1bmRsZS5jZWFlYTY2ODZiNjE3MjBmZjc2MC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZsb3dcbmZsb3cuZGlzcGxheU5hbWUgPSAnZmxvdydcbmZsb3cuYWxpYXNlcyA9IFtdXG5mdW5jdGlvbiBmbG93KFByaXNtKSB7XG4gIDsoZnVuY3Rpb24oUHJpc20pIHtcbiAgICBQcmlzbS5sYW5ndWFnZXMuZmxvdyA9IFByaXNtLmxhbmd1YWdlcy5leHRlbmQoJ2phdmFzY3JpcHQnLCB7fSlcbiAgICBQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdmbG93JywgJ2tleXdvcmQnLCB7XG4gICAgICB0eXBlOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwYXR0ZXJuOiAvXFxiKD86W05uXXVtYmVyfFtTc110cmluZ3xbQmJdb29sZWFufEZ1bmN0aW9ufGFueXxtaXhlZHxudWxsfHZvaWQpXFxiLyxcbiAgICAgICAgICBhbGlhczogJ3RhZydcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0pXG4gICAgUHJpc20ubGFuZ3VhZ2VzLmZsb3dbXG4gICAgICAnZnVuY3Rpb24tdmFyaWFibGUnXG4gICAgXS5wYXR0ZXJuID0gL1tfJGEtelxceEEwLVxcdUZGRkZdWyRcXHdcXHhBMC1cXHVGRkZGXSooPz1cXHMqPVxccyooPzpmdW5jdGlvblxcYnwoPzpcXChbXigpXSpcXCkoPzpcXHMqOlxccypcXHcrKT98W18kYS16XFx4QTAtXFx1RkZGRl1bJFxcd1xceEEwLVxcdUZGRkZdKilcXHMqPT4pKS9pXG4gICAgZGVsZXRlIFByaXNtLmxhbmd1YWdlcy5mbG93WydwYXJhbWV0ZXInXVxuICAgIFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ2Zsb3cnLCAnb3BlcmF0b3InLCB7XG4gICAgICAnZmxvdy1wdW5jdHVhdGlvbic6IHtcbiAgICAgICAgcGF0dGVybjogL1xce1xcfHxcXHxcXH0vLFxuICAgICAgICBhbGlhczogJ3B1bmN0dWF0aW9uJ1xuICAgICAgfVxuICAgIH0pXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KFByaXNtLmxhbmd1YWdlcy5mbG93LmtleXdvcmQpKSB7XG4gICAgICBQcmlzbS5sYW5ndWFnZXMuZmxvdy5rZXl3b3JkID0gW1ByaXNtLmxhbmd1YWdlcy5mbG93LmtleXdvcmRdXG4gICAgfVxuICAgIFByaXNtLmxhbmd1YWdlcy5mbG93LmtleXdvcmQudW5zaGlmdChcbiAgICAgIHtcbiAgICAgICAgcGF0dGVybjogLyhefFteJF1cXGIpKD86dHlwZXxvcGFxdWV8ZGVjbGFyZXxDbGFzcylcXGIoPyFcXCQpLyxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0dGVybjogLyhefFteJF1cXEIpXFwkKD86YXdhaXR8RGlmZnxFeGFjdHxLZXlzfE9iak1hcHxQcm9wZXJ0eVR5cGV8U2hhcGV8UmVjb3JkfFN1cGVydHlwZXxTdWJ0eXBlfEVudW0pXFxiKD8hXFwkKS8sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgIH1cbiAgICApXG4gIH0pKFByaXNtKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
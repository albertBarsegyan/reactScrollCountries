(self["webpackChunkheaderproject"] = self["webpackChunkheaderproject"] || []).push([["react-syntax-highlighter_languages_refractor_gedcom"],{

/***/ "./node_modules/refractor/lang/gedcom.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/gedcom.js ***!
  \***********************************************/
/***/ ((module) => {

"use strict";


module.exports = gedcom
gedcom.displayName = 'gedcom'
gedcom.aliases = []
function gedcom(Prism) {
  Prism.languages.gedcom = {
    'line-value': {
      // Preceded by level, optional pointer, and tag
      pattern: /(^\s*\d+ +(?:@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@ +)?\w+ +).+/m,
      lookbehind: true,
      inside: {
        pointer: {
          pattern: /^@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@$/,
          alias: 'variable'
        }
      }
    },
    tag: {
      // Preceded by level and optional pointer
      pattern: /(^\s*\d+ +(?:@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@ +)?)\w+/m,
      lookbehind: true,
      alias: 'string'
    },
    level: {
      pattern: /(^\s*)\d+/m,
      lookbehind: true,
      alias: 'number'
    },
    pointer: {
      pattern: /@\w[\w!"$%&'()*+,\-./:;<=>?[\\\]^`{|}~\x80-\xfe #]*@/,
      alias: 'variable'
    }
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFkZXJwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL2dlZGNvbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxZQUFZLEVBQUU7QUFDbEU7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLFlBQVksRUFBRTtBQUMxRDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLG9EQUFvRCxZQUFZLEVBQUU7QUFDbEU7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLHVDQUF1QyxZQUFZLEVBQUU7QUFDckQ7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoicmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyX2xhbmd1YWdlc19yZWZyYWN0b3JfZ2VkY29tLmJ1bmRsZS5jZWFlYTY2ODZiNjE3MjBmZjc2MC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdlZGNvbVxuZ2VkY29tLmRpc3BsYXlOYW1lID0gJ2dlZGNvbSdcbmdlZGNvbS5hbGlhc2VzID0gW11cbmZ1bmN0aW9uIGdlZGNvbShQcmlzbSkge1xuICBQcmlzbS5sYW5ndWFnZXMuZ2VkY29tID0ge1xuICAgICdsaW5lLXZhbHVlJzoge1xuICAgICAgLy8gUHJlY2VkZWQgYnkgbGV2ZWwsIG9wdGlvbmFsIHBvaW50ZXIsIGFuZCB0YWdcbiAgICAgIHBhdHRlcm46IC8oXlxccypcXGQrICsoPzpAXFx3W1xcdyFcIiQlJicoKSorLFxcLS4vOjs8PT4/W1xcXFxcXF1eYHt8fX5cXHg4MC1cXHhmZSAjXSpAICspP1xcdysgKykuKy9tLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgIGluc2lkZToge1xuICAgICAgICBwb2ludGVyOiB7XG4gICAgICAgICAgcGF0dGVybjogL15AXFx3W1xcdyFcIiQlJicoKSorLFxcLS4vOjs8PT4/W1xcXFxcXF1eYHt8fX5cXHg4MC1cXHhmZSAjXSpAJC8sXG4gICAgICAgICAgYWxpYXM6ICd2YXJpYWJsZSdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgdGFnOiB7XG4gICAgICAvLyBQcmVjZWRlZCBieSBsZXZlbCBhbmQgb3B0aW9uYWwgcG9pbnRlclxuICAgICAgcGF0dGVybjogLyheXFxzKlxcZCsgKyg/OkBcXHdbXFx3IVwiJCUmJygpKissXFwtLi86Ozw9Pj9bXFxcXFxcXV5ge3x9flxceDgwLVxceGZlICNdKkAgKyk/KVxcdysvbSxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICBhbGlhczogJ3N0cmluZydcbiAgICB9LFxuICAgIGxldmVsOiB7XG4gICAgICBwYXR0ZXJuOiAvKF5cXHMqKVxcZCsvbSxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICBhbGlhczogJ251bWJlcidcbiAgICB9LFxuICAgIHBvaW50ZXI6IHtcbiAgICAgIHBhdHRlcm46IC9AXFx3W1xcdyFcIiQlJicoKSorLFxcLS4vOjs8PT4/W1xcXFxcXF1eYHt8fX5cXHg4MC1cXHhmZSAjXSpALyxcbiAgICAgIGFsaWFzOiAndmFyaWFibGUnXG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9
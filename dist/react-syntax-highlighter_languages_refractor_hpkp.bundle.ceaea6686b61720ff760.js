(self["webpackChunkheaderproject"] = self["webpackChunkheaderproject"] || []).push([["react-syntax-highlighter_languages_refractor_hpkp"],{

/***/ "./node_modules/refractor/lang/hpkp.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/hpkp.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";


module.exports = hpkp
hpkp.displayName = 'hpkp'
hpkp.aliases = []
function hpkp(Prism) {
  /**
   * Original by Scott Helme.
   *
   * Reference: https://scotthelme.co.uk/hpkp-cheat-sheet/
   */
  Prism.languages.hpkp = {
    directive: {
      pattern: /\b(?:(?:includeSubDomains|preload|strict)(?: |;)|pin-sha256="[a-zA-Z\d+=/]+"|(?:max-age|report-uri)=|report-to )/,
      alias: 'keyword'
    },
    safe: {
      pattern: /\d{7,}/,
      alias: 'selector'
    },
    unsafe: {
      pattern: /\d{1,6}/,
      alias: 'function'
    }
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFkZXJwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL2hwa3AuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQVk7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtEQUErRDtBQUMvRDtBQUNBLEtBQUs7QUFDTDtBQUNBLG1CQUFtQixHQUFHO0FBQ3RCO0FBQ0EsS0FBSztBQUNMO0FBQ0EsbUJBQW1CLElBQUk7QUFDdkI7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoicmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyX2xhbmd1YWdlc19yZWZyYWN0b3JfaHBrcC5idW5kbGUuY2VhZWE2Njg2YjYxNzIwZmY3NjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBocGtwXG5ocGtwLmRpc3BsYXlOYW1lID0gJ2hwa3AnXG5ocGtwLmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24gaHBrcChQcmlzbSkge1xuICAvKipcbiAgICogT3JpZ2luYWwgYnkgU2NvdHQgSGVsbWUuXG4gICAqXG4gICAqIFJlZmVyZW5jZTogaHR0cHM6Ly9zY290dGhlbG1lLmNvLnVrL2hwa3AtY2hlYXQtc2hlZXQvXG4gICAqL1xuICBQcmlzbS5sYW5ndWFnZXMuaHBrcCA9IHtcbiAgICBkaXJlY3RpdmU6IHtcbiAgICAgIHBhdHRlcm46IC9cXGIoPzooPzppbmNsdWRlU3ViRG9tYWluc3xwcmVsb2FkfHN0cmljdCkoPzogfDspfHBpbi1zaGEyNTY9XCJbYS16QS1aXFxkKz0vXStcInwoPzptYXgtYWdlfHJlcG9ydC11cmkpPXxyZXBvcnQtdG8gKS8sXG4gICAgICBhbGlhczogJ2tleXdvcmQnXG4gICAgfSxcbiAgICBzYWZlOiB7XG4gICAgICBwYXR0ZXJuOiAvXFxkezcsfS8sXG4gICAgICBhbGlhczogJ3NlbGVjdG9yJ1xuICAgIH0sXG4gICAgdW5zYWZlOiB7XG4gICAgICBwYXR0ZXJuOiAvXFxkezEsNn0vLFxuICAgICAgYWxpYXM6ICdmdW5jdGlvbidcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
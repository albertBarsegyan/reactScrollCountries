(self["webpackChunkheaderproject"] = self["webpackChunkheaderproject"] || []).push([["react-syntax-highlighter_languages_refractor_tap"],{

/***/ "./node_modules/refractor/lang/tap.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/tap.js ***!
  \********************************************/
/***/ ((module) => {

"use strict";


module.exports = tap
tap.displayName = 'tap'
tap.aliases = []
function tap(Prism) {
  Prism.languages.tap = {
    fail: /not ok[^#{\n\r]*/,
    pass: /ok[^#{\n\r]*/,
    pragma: /pragma [+-][a-z]+/,
    bailout: /bail out!.*/i,
    version: /TAP version \d+/i,
    plan: /\d+\.\.\d+(?: +#.*)?/,
    subtest: {
      pattern: /# Subtest(?:: .*)?/,
      greedy: true
    },
    punctuation: /[{}]/,
    directive: /#.*/,
    yamlish: {
      pattern: /(^[^\S\r\n]*)---(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?[^\S\r\n]*\.\.\.$/m,
      lookbehind: true,
      inside: Prism.languages.yaml,
      alias: 'language-yaml'
    }
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFkZXJwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL3RhcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InJlYWN0LXN5bnRheC1oaWdobGlnaHRlcl9sYW5ndWFnZXNfcmVmcmFjdG9yX3RhcC5idW5kbGUuMTAyNjBkNmRlMTExMGZmZmQzNTcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSB0YXBcbnRhcC5kaXNwbGF5TmFtZSA9ICd0YXAnXG50YXAuYWxpYXNlcyA9IFtdXG5mdW5jdGlvbiB0YXAoUHJpc20pIHtcbiAgUHJpc20ubGFuZ3VhZ2VzLnRhcCA9IHtcbiAgICBmYWlsOiAvbm90IG9rW14je1xcblxccl0qLyxcbiAgICBwYXNzOiAvb2tbXiN7XFxuXFxyXSovLFxuICAgIHByYWdtYTogL3ByYWdtYSBbKy1dW2Etel0rLyxcbiAgICBiYWlsb3V0OiAvYmFpbCBvdXQhLiovaSxcbiAgICB2ZXJzaW9uOiAvVEFQIHZlcnNpb24gXFxkKy9pLFxuICAgIHBsYW46IC9cXGQrXFwuXFwuXFxkKyg/OiArIy4qKT8vLFxuICAgIHN1YnRlc3Q6IHtcbiAgICAgIHBhdHRlcm46IC8jIFN1YnRlc3QoPzo6IC4qKT8vLFxuICAgICAgZ3JlZWR5OiB0cnVlXG4gICAgfSxcbiAgICBwdW5jdHVhdGlvbjogL1t7fV0vLFxuICAgIGRpcmVjdGl2ZTogLyMuKi8sXG4gICAgeWFtbGlzaDoge1xuICAgICAgcGF0dGVybjogLyheW15cXFNcXHJcXG5dKiktLS0oPzpcXHJcXG4/fFxcbikoPzouKig/Olxcclxcbj98XFxuKSkqP1teXFxTXFxyXFxuXSpcXC5cXC5cXC4kL20sXG4gICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgaW5zaWRlOiBQcmlzbS5sYW5ndWFnZXMueWFtbCxcbiAgICAgIGFsaWFzOiAnbGFuZ3VhZ2UteWFtbCdcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
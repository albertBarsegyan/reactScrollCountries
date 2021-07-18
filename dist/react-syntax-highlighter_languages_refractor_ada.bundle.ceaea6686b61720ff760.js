(self["webpackChunkheaderproject"] = self["webpackChunkheaderproject"] || []).push([["react-syntax-highlighter_languages_refractor_ada"],{

/***/ "./node_modules/refractor/lang/ada.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/ada.js ***!
  \********************************************/
/***/ ((module) => {

"use strict";


module.exports = ada
ada.displayName = 'ada'
ada.aliases = []
function ada(Prism) {
  Prism.languages.ada = {
    comment: /--.*/,
    string: /"(?:""|[^"\r\f\n])*"/i,
    number: [
      {
        pattern: /\b\d(?:_?\d)*#[\dA-F](?:_?[\dA-F])*(?:\.[\dA-F](?:_?[\dA-F])*)?#(?:E[+-]?\d(?:_?\d)*)?/i
      },
      {
        pattern: /\b\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:E[+-]?\d(?:_?\d)*)?\b/i
      }
    ],
    'attr-name': /\b'\w+/i,
    keyword: /\b(?:abort|abs|abstract|accept|access|aliased|all|and|array|at|begin|body|case|constant|declare|delay|delta|digits|do|else|new|return|elsif|end|entry|exception|exit|for|function|generic|goto|if|in|interface|is|limited|loop|mod|not|null|of|others|out|overriding|package|pragma|private|procedure|protected|raise|range|record|rem|renames|requeue|reverse|select|separate|some|subtype|synchronized|tagged|task|terminate|then|type|until|use|when|while|with|xor)\b/i,
    boolean: /\b(?:true|false)\b/i,
    operator: /<[=>]?|>=?|=>?|:=|\/=?|\*\*?|[&+-]/,
    punctuation: /\.\.?|[,;():]/,
    char: /'.'/,
    variable: /\b[a-z](?:[_a-z\d])*\b/i
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFkZXJwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL2FkYS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InJlYWN0LXN5bnRheC1oaWdobGlnaHRlcl9sYW5ndWFnZXNfcmVmcmFjdG9yX2FkYS5idW5kbGUuY2VhZWE2Njg2YjYxNzIwZmY3NjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBhZGFcbmFkYS5kaXNwbGF5TmFtZSA9ICdhZGEnXG5hZGEuYWxpYXNlcyA9IFtdXG5mdW5jdGlvbiBhZGEoUHJpc20pIHtcbiAgUHJpc20ubGFuZ3VhZ2VzLmFkYSA9IHtcbiAgICBjb21tZW50OiAvLS0uKi8sXG4gICAgc3RyaW5nOiAvXCIoPzpcIlwifFteXCJcXHJcXGZcXG5dKSpcIi9pLFxuICAgIG51bWJlcjogW1xuICAgICAge1xuICAgICAgICBwYXR0ZXJuOiAvXFxiXFxkKD86Xz9cXGQpKiNbXFxkQS1GXSg/Ol8/W1xcZEEtRl0pKig/OlxcLltcXGRBLUZdKD86Xz9bXFxkQS1GXSkqKT8jKD86RVsrLV0/XFxkKD86Xz9cXGQpKik/L2lcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdHRlcm46IC9cXGJcXGQoPzpfP1xcZCkqKD86XFwuXFxkKD86Xz9cXGQpKik/KD86RVsrLV0/XFxkKD86Xz9cXGQpKik/XFxiL2lcbiAgICAgIH1cbiAgICBdLFxuICAgICdhdHRyLW5hbWUnOiAvXFxiJ1xcdysvaSxcbiAgICBrZXl3b3JkOiAvXFxiKD86YWJvcnR8YWJzfGFic3RyYWN0fGFjY2VwdHxhY2Nlc3N8YWxpYXNlZHxhbGx8YW5kfGFycmF5fGF0fGJlZ2lufGJvZHl8Y2FzZXxjb25zdGFudHxkZWNsYXJlfGRlbGF5fGRlbHRhfGRpZ2l0c3xkb3xlbHNlfG5ld3xyZXR1cm58ZWxzaWZ8ZW5kfGVudHJ5fGV4Y2VwdGlvbnxleGl0fGZvcnxmdW5jdGlvbnxnZW5lcmljfGdvdG98aWZ8aW58aW50ZXJmYWNlfGlzfGxpbWl0ZWR8bG9vcHxtb2R8bm90fG51bGx8b2Z8b3RoZXJzfG91dHxvdmVycmlkaW5nfHBhY2thZ2V8cHJhZ21hfHByaXZhdGV8cHJvY2VkdXJlfHByb3RlY3RlZHxyYWlzZXxyYW5nZXxyZWNvcmR8cmVtfHJlbmFtZXN8cmVxdWV1ZXxyZXZlcnNlfHNlbGVjdHxzZXBhcmF0ZXxzb21lfHN1YnR5cGV8c3luY2hyb25pemVkfHRhZ2dlZHx0YXNrfHRlcm1pbmF0ZXx0aGVufHR5cGV8dW50aWx8dXNlfHdoZW58d2hpbGV8d2l0aHx4b3IpXFxiL2ksXG4gICAgYm9vbGVhbjogL1xcYig/OnRydWV8ZmFsc2UpXFxiL2ksXG4gICAgb3BlcmF0b3I6IC88Wz0+XT98Pj0/fD0+P3w6PXxcXC89P3xcXCpcXCo/fFsmKy1dLyxcbiAgICBwdW5jdHVhdGlvbjogL1xcLlxcLj98Wyw7KCk6XS8sXG4gICAgY2hhcjogLycuJy8sXG4gICAgdmFyaWFibGU6IC9cXGJbYS16XSg/OltfYS16XFxkXSkqXFxiL2lcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
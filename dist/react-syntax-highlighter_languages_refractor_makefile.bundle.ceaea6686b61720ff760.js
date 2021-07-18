(self["webpackChunkheaderproject"] = self["webpackChunkheaderproject"] || []).push([["react-syntax-highlighter_languages_refractor_makefile"],{

/***/ "./node_modules/refractor/lang/makefile.js":
/*!*************************************************!*\
  !*** ./node_modules/refractor/lang/makefile.js ***!
  \*************************************************/
/***/ ((module) => {

"use strict";


module.exports = makefile
makefile.displayName = 'makefile'
makefile.aliases = []
function makefile(Prism) {
  Prism.languages.makefile = {
    comment: {
      pattern: /(^|[^\\])#(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/,
      lookbehind: true
    },
    string: {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: true
    },
    // Built-in target names
    builtin: /\.[A-Z][^:#=\s]+(?=\s*:(?!=))/,
    // Targets
    symbol: {
      pattern: /^[^:=\r\n]+(?=\s*:(?!=))/m,
      inside: {
        variable: /\$+(?:[^(){}:#=\s]+|(?=[({]))/
      }
    },
    variable: /\$+(?:[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,
    keyword: [
      // Directives
      /-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/, // Functions
      {
        pattern: /(\()(?:addsuffix|abspath|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:s|list)?)(?=[ \t])/,
        lookbehind: true
      }
    ],
    operator: /(?:::|[?:+!])?=|[|@]/,
    punctuation: /[:;(){}]/
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFkZXJwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL21ha2VmaWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixjQUFjO0FBQzdDO0FBQ0EsS0FBSztBQUNMLDJCQUEyQixnQ0FBZ0M7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLElBQUk7QUFDekI7QUFDQSIsImZpbGUiOiJyZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX3JlZnJhY3Rvcl9tYWtlZmlsZS5idW5kbGUuY2VhZWE2Njg2YjYxNzIwZmY3NjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBtYWtlZmlsZVxubWFrZWZpbGUuZGlzcGxheU5hbWUgPSAnbWFrZWZpbGUnXG5tYWtlZmlsZS5hbGlhc2VzID0gW11cbmZ1bmN0aW9uIG1ha2VmaWxlKFByaXNtKSB7XG4gIFByaXNtLmxhbmd1YWdlcy5tYWtlZmlsZSA9IHtcbiAgICBjb21tZW50OiB7XG4gICAgICBwYXR0ZXJuOiAvKF58W15cXFxcXSkjKD86XFxcXCg/OlxcclxcbnxbXFxzXFxTXSl8W15cXFxcXFxyXFxuXSkqLyxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICB9LFxuICAgIHN0cmluZzoge1xuICAgICAgcGF0dGVybjogLyhbXCInXSkoPzpcXFxcKD86XFxyXFxufFtcXHNcXFNdKXwoPyFcXDEpW15cXFxcXFxyXFxuXSkqXFwxLyxcbiAgICAgIGdyZWVkeTogdHJ1ZVxuICAgIH0sXG4gICAgLy8gQnVpbHQtaW4gdGFyZ2V0IG5hbWVzXG4gICAgYnVpbHRpbjogL1xcLltBLVpdW146Iz1cXHNdKyg/PVxccyo6KD8hPSkpLyxcbiAgICAvLyBUYXJnZXRzXG4gICAgc3ltYm9sOiB7XG4gICAgICBwYXR0ZXJuOiAvXlteOj1cXHJcXG5dKyg/PVxccyo6KD8hPSkpL20sXG4gICAgICBpbnNpZGU6IHtcbiAgICAgICAgdmFyaWFibGU6IC9cXCQrKD86W14oKXt9OiM9XFxzXSt8KD89Wyh7XSkpL1xuICAgICAgfVxuICAgIH0sXG4gICAgdmFyaWFibGU6IC9cXCQrKD86W14oKXt9OiM9XFxzXSt8XFwoW0AqJTxeKz9dW0RGXVxcKXwoPz1bKHtdKSkvLFxuICAgIGtleXdvcmQ6IFtcbiAgICAgIC8vIERpcmVjdGl2ZXNcbiAgICAgIC8taW5jbHVkZVxcYnxcXGIoPzpkZWZpbmV8ZWxzZXxlbmRlZnxlbmRpZnxleHBvcnR8aWZuP2RlZnxpZm4/ZXF8aW5jbHVkZXxvdmVycmlkZXxwcml2YXRlfHNpbmNsdWRlfHVuZGVmaW5lfHVuZXhwb3J0fHZwYXRoKVxcYi8sIC8vIEZ1bmN0aW9uc1xuICAgICAge1xuICAgICAgICBwYXR0ZXJuOiAvKFxcKCkoPzphZGRzdWZmaXh8YWJzcGF0aHxhbmR8YmFzZW5hbWV8Y2FsbHxkaXJ8ZXJyb3J8ZXZhbHxmaWxlfGZpbHRlcig/Oi1vdXQpP3xmaW5kc3RyaW5nfGZpcnN0d29yZHxmbGF2b3J8Zm9yZWFjaHxndWlsZXxpZnxpbmZvfGpvaW58bGFzdHdvcmR8bG9hZHxub3RkaXJ8b3J8b3JpZ2lufHBhdHN1YnN0fHJlYWxwYXRofHNoZWxsfHNvcnR8c3RyaXB8c3Vic3R8c3VmZml4fHZhbHVlfHdhcm5pbmd8d2lsZGNhcmR8d29yZCg/OnN8bGlzdCk/KSg/PVsgXFx0XSkvLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgICB9XG4gICAgXSxcbiAgICBvcGVyYXRvcjogLyg/Ojo6fFs/OishXSk/PXxbfEBdLyxcbiAgICBwdW5jdHVhdGlvbjogL1s6Oygpe31dL1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9
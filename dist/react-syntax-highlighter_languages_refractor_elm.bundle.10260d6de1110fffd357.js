(self["webpackChunkheaderproject"] = self["webpackChunkheaderproject"] || []).push([["react-syntax-highlighter_languages_refractor_elm"],{

/***/ "./node_modules/refractor/lang/elm.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/elm.js ***!
  \********************************************/
/***/ ((module) => {

"use strict";


module.exports = elm
elm.displayName = 'elm'
elm.aliases = []
function elm(Prism) {
  Prism.languages.elm = {
    comment: /--.*|{-[\s\S]*?-}/,
    char: {
      pattern: /'(?:[^\\'\r\n]|\\(?:[abfnrtv\\']|\d+|x[0-9a-fA-F]+))'/,
      greedy: true
    },
    string: [
      {
        // Multiline strings are wrapped in triple ". Quotes may appear unescaped.
        pattern: /"""[\s\S]*?"""/,
        greedy: true
      },
      {
        pattern: /"(?:[^\\"\r\n]|\\(?:[abfnrtv\\"]|\d+|x[0-9a-fA-F]+))*"/,
        greedy: true
      }
    ],
    import_statement: {
      // The imported or hidden names are not included in this import
      // statement. This is because we want to highlight those exactly like
      // we do for the names in the program.
      pattern: /^\s*import\s+[A-Z]\w*(?:\.[A-Z]\w*)*(?:\s+as\s+([A-Z]\w*)(?:\.[A-Z]\w*)*)?(?:\s+exposing\s+)?/m,
      inside: {
        keyword: /\b(?:import|as|exposing)\b/
      }
    },
    keyword: /\b(?:alias|as|case|else|exposing|if|in|infixl|infixr|let|module|of|then|type)\b/,
    // These are builtin variables only. Constructors are highlighted later as a constant.
    builtin: /\b(?:abs|acos|always|asin|atan|atan2|ceiling|clamp|compare|cos|curry|degrees|e|flip|floor|fromPolar|identity|isInfinite|isNaN|logBase|max|min|negate|never|not|pi|radians|rem|round|sin|sqrt|tan|toFloat|toPolar|toString|truncate|turns|uncurry|xor)\b/,
    // decimal integers and floating point numbers | hexadecimal integers
    number: /\b(?:\d+(?:\.\d+)?(?:e[+-]?\d+)?|0x[0-9a-f]+)\b/i,
    // Most of this is needed because of the meaning of a single '.'.
    // If it stands alone freely, it is the function composition.
    // It may also be a separator between a module name and an identifier => no
    // operator. If it comes together with other special characters it is an
    // operator too.
    // Valid operator characters in 0.18: +-/*=.$<>:&|^?%#@~!
    // Ref: https://groups.google.com/forum/#!msg/elm-dev/0AHSnDdkSkQ/E0SVU70JEQAJ
    operator: /\s\.\s|[+\-/*=.$<>:&|^?%#@~!]{2,}|[+\-/*=$<>:&|^?%#@~!]/,
    // In Elm, nearly everything is a variable, do not highlight these.
    hvariable: /\b(?:[A-Z]\w*\.)*[a-z]\w*\b/,
    constant: /\b(?:[A-Z]\w*\.)*[A-Z]\w*\b/,
    punctuation: /[{}[\]|(),.:]/
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFkZXJwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL2VsbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFdBQVc7QUFDL0I7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLEdBQUc7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EiLCJmaWxlIjoicmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyX2xhbmd1YWdlc19yZWZyYWN0b3JfZWxtLmJ1bmRsZS4xMDI2MGQ2ZGUxMTEwZmZmZDM1Ny5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGVsbVxuZWxtLmRpc3BsYXlOYW1lID0gJ2VsbSdcbmVsbS5hbGlhc2VzID0gW11cbmZ1bmN0aW9uIGVsbShQcmlzbSkge1xuICBQcmlzbS5sYW5ndWFnZXMuZWxtID0ge1xuICAgIGNvbW1lbnQ6IC8tLS4qfHstW1xcc1xcU10qPy19LyxcbiAgICBjaGFyOiB7XG4gICAgICBwYXR0ZXJuOiAvJyg/OlteXFxcXCdcXHJcXG5dfFxcXFwoPzpbYWJmbnJ0dlxcXFwnXXxcXGQrfHhbMC05YS1mQS1GXSspKScvLFxuICAgICAgZ3JlZWR5OiB0cnVlXG4gICAgfSxcbiAgICBzdHJpbmc6IFtcbiAgICAgIHtcbiAgICAgICAgLy8gTXVsdGlsaW5lIHN0cmluZ3MgYXJlIHdyYXBwZWQgaW4gdHJpcGxlIFwiLiBRdW90ZXMgbWF5IGFwcGVhciB1bmVzY2FwZWQuXG4gICAgICAgIHBhdHRlcm46IC9cIlwiXCJbXFxzXFxTXSo/XCJcIlwiLyxcbiAgICAgICAgZ3JlZWR5OiB0cnVlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXR0ZXJuOiAvXCIoPzpbXlxcXFxcIlxcclxcbl18XFxcXCg/OlthYmZucnR2XFxcXFwiXXxcXGQrfHhbMC05YS1mQS1GXSspKSpcIi8sXG4gICAgICAgIGdyZWVkeTogdHJ1ZVxuICAgICAgfVxuICAgIF0sXG4gICAgaW1wb3J0X3N0YXRlbWVudDoge1xuICAgICAgLy8gVGhlIGltcG9ydGVkIG9yIGhpZGRlbiBuYW1lcyBhcmUgbm90IGluY2x1ZGVkIGluIHRoaXMgaW1wb3J0XG4gICAgICAvLyBzdGF0ZW1lbnQuIFRoaXMgaXMgYmVjYXVzZSB3ZSB3YW50IHRvIGhpZ2hsaWdodCB0aG9zZSBleGFjdGx5IGxpa2VcbiAgICAgIC8vIHdlIGRvIGZvciB0aGUgbmFtZXMgaW4gdGhlIHByb2dyYW0uXG4gICAgICBwYXR0ZXJuOiAvXlxccyppbXBvcnRcXHMrW0EtWl1cXHcqKD86XFwuW0EtWl1cXHcqKSooPzpcXHMrYXNcXHMrKFtBLVpdXFx3KikoPzpcXC5bQS1aXVxcdyopKik/KD86XFxzK2V4cG9zaW5nXFxzKyk/L20sXG4gICAgICBpbnNpZGU6IHtcbiAgICAgICAga2V5d29yZDogL1xcYig/OmltcG9ydHxhc3xleHBvc2luZylcXGIvXG4gICAgICB9XG4gICAgfSxcbiAgICBrZXl3b3JkOiAvXFxiKD86YWxpYXN8YXN8Y2FzZXxlbHNlfGV4cG9zaW5nfGlmfGlufGluZml4bHxpbmZpeHJ8bGV0fG1vZHVsZXxvZnx0aGVufHR5cGUpXFxiLyxcbiAgICAvLyBUaGVzZSBhcmUgYnVpbHRpbiB2YXJpYWJsZXMgb25seS4gQ29uc3RydWN0b3JzIGFyZSBoaWdobGlnaHRlZCBsYXRlciBhcyBhIGNvbnN0YW50LlxuICAgIGJ1aWx0aW46IC9cXGIoPzphYnN8YWNvc3xhbHdheXN8YXNpbnxhdGFufGF0YW4yfGNlaWxpbmd8Y2xhbXB8Y29tcGFyZXxjb3N8Y3Vycnl8ZGVncmVlc3xlfGZsaXB8Zmxvb3J8ZnJvbVBvbGFyfGlkZW50aXR5fGlzSW5maW5pdGV8aXNOYU58bG9nQmFzZXxtYXh8bWlufG5lZ2F0ZXxuZXZlcnxub3R8cGl8cmFkaWFuc3xyZW18cm91bmR8c2lufHNxcnR8dGFufHRvRmxvYXR8dG9Qb2xhcnx0b1N0cmluZ3x0cnVuY2F0ZXx0dXJuc3x1bmN1cnJ5fHhvcilcXGIvLFxuICAgIC8vIGRlY2ltYWwgaW50ZWdlcnMgYW5kIGZsb2F0aW5nIHBvaW50IG51bWJlcnMgfCBoZXhhZGVjaW1hbCBpbnRlZ2Vyc1xuICAgIG51bWJlcjogL1xcYig/OlxcZCsoPzpcXC5cXGQrKT8oPzplWystXT9cXGQrKT98MHhbMC05YS1mXSspXFxiL2ksXG4gICAgLy8gTW9zdCBvZiB0aGlzIGlzIG5lZWRlZCBiZWNhdXNlIG9mIHRoZSBtZWFuaW5nIG9mIGEgc2luZ2xlICcuJy5cbiAgICAvLyBJZiBpdCBzdGFuZHMgYWxvbmUgZnJlZWx5LCBpdCBpcyB0aGUgZnVuY3Rpb24gY29tcG9zaXRpb24uXG4gICAgLy8gSXQgbWF5IGFsc28gYmUgYSBzZXBhcmF0b3IgYmV0d2VlbiBhIG1vZHVsZSBuYW1lIGFuZCBhbiBpZGVudGlmaWVyID0+IG5vXG4gICAgLy8gb3BlcmF0b3IuIElmIGl0IGNvbWVzIHRvZ2V0aGVyIHdpdGggb3RoZXIgc3BlY2lhbCBjaGFyYWN0ZXJzIGl0IGlzIGFuXG4gICAgLy8gb3BlcmF0b3IgdG9vLlxuICAgIC8vIFZhbGlkIG9wZXJhdG9yIGNoYXJhY3RlcnMgaW4gMC4xODogKy0vKj0uJDw+OiZ8Xj8lI0B+IVxuICAgIC8vIFJlZjogaHR0cHM6Ly9ncm91cHMuZ29vZ2xlLmNvbS9mb3J1bS8jIW1zZy9lbG0tZGV2LzBBSFNuRGRrU2tRL0UwU1ZVNzBKRVFBSlxuICAgIG9wZXJhdG9yOiAvXFxzXFwuXFxzfFsrXFwtLyo9LiQ8PjomfF4/JSNAfiFdezIsfXxbK1xcLS8qPSQ8PjomfF4/JSNAfiFdLyxcbiAgICAvLyBJbiBFbG0sIG5lYXJseSBldmVyeXRoaW5nIGlzIGEgdmFyaWFibGUsIGRvIG5vdCBoaWdobGlnaHQgdGhlc2UuXG4gICAgaHZhcmlhYmxlOiAvXFxiKD86W0EtWl1cXHcqXFwuKSpbYS16XVxcdypcXGIvLFxuICAgIGNvbnN0YW50OiAvXFxiKD86W0EtWl1cXHcqXFwuKSpbQS1aXVxcdypcXGIvLFxuICAgIHB1bmN0dWF0aW9uOiAvW3t9W1xcXXwoKSwuOl0vXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
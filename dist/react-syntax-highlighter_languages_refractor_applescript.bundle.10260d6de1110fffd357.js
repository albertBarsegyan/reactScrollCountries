(self["webpackChunkheaderproject"] = self["webpackChunkheaderproject"] || []).push([["react-syntax-highlighter_languages_refractor_applescript"],{

/***/ "./node_modules/refractor/lang/applescript.js":
/*!****************************************************!*\
  !*** ./node_modules/refractor/lang/applescript.js ***!
  \****************************************************/
/***/ ((module) => {

"use strict";


module.exports = applescript
applescript.displayName = 'applescript'
applescript.aliases = []
function applescript(Prism) {
  Prism.languages.applescript = {
    comment: [
      // Allow one level of nesting
      /\(\*(?:\(\*[\s\S]*?\*\)|[\s\S])*?\*\)/,
      /--.+/,
      /#.+/
    ],
    string: /"(?:\\.|[^"\\\r\n])*"/,
    number: /(?:\b\d+\.?\d*|\B\.\d+)(?:e-?\d+)?\b/i,
    operator: [
      /[&=≠≤≥*+\-\/÷^]|[<>]=?/,
      /\b(?:(?:start|begin|end)s? with|(?:(?:does not|doesn't) contain|contains?)|(?:is|isn't|is not) (?:in|contained by)|(?:(?:is|isn't|is not) )?(?:greater|less) than(?: or equal)?(?: to)?|(?:(?:does not|doesn't) come|comes) (?:before|after)|(?:is|isn't|is not) equal(?: to)?|(?:(?:does not|doesn't) equal|equals|equal to|isn't|is not)|(?:a )?(?:ref(?: to)?|reference to)|(?:and|or|div|mod|as|not))\b/
    ],
    keyword: /\b(?:about|above|after|against|apart from|around|aside from|at|back|before|beginning|behind|below|beneath|beside|between|but|by|considering|continue|copy|does|eighth|else|end|equal|error|every|exit|false|fifth|first|for|fourth|from|front|get|given|global|if|ignoring|in|instead of|into|is|it|its|last|local|me|middle|my|ninth|of|on|onto|out of|over|prop|property|put|repeat|return|returning|second|set|seventh|since|sixth|some|tell|tenth|that|the|then|third|through|thru|timeout|times|to|transaction|true|try|until|where|while|whose|with|without)\b/,
    class: {
      pattern: /\b(?:alias|application|boolean|class|constant|date|file|integer|list|number|POSIX file|real|record|reference|RGB color|script|text|centimetres|centimeters|feet|inches|kilometres|kilometers|metres|meters|miles|yards|square feet|square kilometres|square kilometers|square metres|square meters|square miles|square yards|cubic centimetres|cubic centimeters|cubic feet|cubic inches|cubic metres|cubic meters|cubic yards|gallons|litres|liters|quarts|grams|kilograms|ounces|pounds|degrees Celsius|degrees Fahrenheit|degrees Kelvin)\b/,
      alias: 'builtin'
    },
    punctuation: /[{}():,¬«»《》]/
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFkZXJwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL2FwcGxlc2NyaXB0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxxQkFBcUI7QUFDckI7QUFDQSIsImZpbGUiOiJyZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX3JlZnJhY3Rvcl9hcHBsZXNjcmlwdC5idW5kbGUuMTAyNjBkNmRlMTExMGZmZmQzNTcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBhcHBsZXNjcmlwdFxuYXBwbGVzY3JpcHQuZGlzcGxheU5hbWUgPSAnYXBwbGVzY3JpcHQnXG5hcHBsZXNjcmlwdC5hbGlhc2VzID0gW11cbmZ1bmN0aW9uIGFwcGxlc2NyaXB0KFByaXNtKSB7XG4gIFByaXNtLmxhbmd1YWdlcy5hcHBsZXNjcmlwdCA9IHtcbiAgICBjb21tZW50OiBbXG4gICAgICAvLyBBbGxvdyBvbmUgbGV2ZWwgb2YgbmVzdGluZ1xuICAgICAgL1xcKFxcKig/OlxcKFxcKltcXHNcXFNdKj9cXCpcXCl8W1xcc1xcU10pKj9cXCpcXCkvLFxuICAgICAgLy0tLisvLFxuICAgICAgLyMuKy9cbiAgICBdLFxuICAgIHN0cmluZzogL1wiKD86XFxcXC58W15cIlxcXFxcXHJcXG5dKSpcIi8sXG4gICAgbnVtYmVyOiAvKD86XFxiXFxkK1xcLj9cXGQqfFxcQlxcLlxcZCspKD86ZS0/XFxkKyk/XFxiL2ksXG4gICAgb3BlcmF0b3I6IFtcbiAgICAgIC9bJj3iiaDiiaTiiaUqK1xcLVxcL8O3Xl18Wzw+XT0/LyxcbiAgICAgIC9cXGIoPzooPzpzdGFydHxiZWdpbnxlbmQpcz8gd2l0aHwoPzooPzpkb2VzIG5vdHxkb2Vzbid0KSBjb250YWlufGNvbnRhaW5zPyl8KD86aXN8aXNuJ3R8aXMgbm90KSAoPzppbnxjb250YWluZWQgYnkpfCg/Oig/OmlzfGlzbid0fGlzIG5vdCkgKT8oPzpncmVhdGVyfGxlc3MpIHRoYW4oPzogb3IgZXF1YWwpPyg/OiB0byk/fCg/Oig/OmRvZXMgbm90fGRvZXNuJ3QpIGNvbWV8Y29tZXMpICg/OmJlZm9yZXxhZnRlcil8KD86aXN8aXNuJ3R8aXMgbm90KSBlcXVhbCg/OiB0byk/fCg/Oig/OmRvZXMgbm90fGRvZXNuJ3QpIGVxdWFsfGVxdWFsc3xlcXVhbCB0b3xpc24ndHxpcyBub3QpfCg/OmEgKT8oPzpyZWYoPzogdG8pP3xyZWZlcmVuY2UgdG8pfCg/OmFuZHxvcnxkaXZ8bW9kfGFzfG5vdCkpXFxiL1xuICAgIF0sXG4gICAga2V5d29yZDogL1xcYig/OmFib3V0fGFib3ZlfGFmdGVyfGFnYWluc3R8YXBhcnQgZnJvbXxhcm91bmR8YXNpZGUgZnJvbXxhdHxiYWNrfGJlZm9yZXxiZWdpbm5pbmd8YmVoaW5kfGJlbG93fGJlbmVhdGh8YmVzaWRlfGJldHdlZW58YnV0fGJ5fGNvbnNpZGVyaW5nfGNvbnRpbnVlfGNvcHl8ZG9lc3xlaWdodGh8ZWxzZXxlbmR8ZXF1YWx8ZXJyb3J8ZXZlcnl8ZXhpdHxmYWxzZXxmaWZ0aHxmaXJzdHxmb3J8Zm91cnRofGZyb218ZnJvbnR8Z2V0fGdpdmVufGdsb2JhbHxpZnxpZ25vcmluZ3xpbnxpbnN0ZWFkIG9mfGludG98aXN8aXR8aXRzfGxhc3R8bG9jYWx8bWV8bWlkZGxlfG15fG5pbnRofG9mfG9ufG9udG98b3V0IG9mfG92ZXJ8cHJvcHxwcm9wZXJ0eXxwdXR8cmVwZWF0fHJldHVybnxyZXR1cm5pbmd8c2Vjb25kfHNldHxzZXZlbnRofHNpbmNlfHNpeHRofHNvbWV8dGVsbHx0ZW50aHx0aGF0fHRoZXx0aGVufHRoaXJkfHRocm91Z2h8dGhydXx0aW1lb3V0fHRpbWVzfHRvfHRyYW5zYWN0aW9ufHRydWV8dHJ5fHVudGlsfHdoZXJlfHdoaWxlfHdob3NlfHdpdGh8d2l0aG91dClcXGIvLFxuICAgIGNsYXNzOiB7XG4gICAgICBwYXR0ZXJuOiAvXFxiKD86YWxpYXN8YXBwbGljYXRpb258Ym9vbGVhbnxjbGFzc3xjb25zdGFudHxkYXRlfGZpbGV8aW50ZWdlcnxsaXN0fG51bWJlcnxQT1NJWCBmaWxlfHJlYWx8cmVjb3JkfHJlZmVyZW5jZXxSR0IgY29sb3J8c2NyaXB0fHRleHR8Y2VudGltZXRyZXN8Y2VudGltZXRlcnN8ZmVldHxpbmNoZXN8a2lsb21ldHJlc3xraWxvbWV0ZXJzfG1ldHJlc3xtZXRlcnN8bWlsZXN8eWFyZHN8c3F1YXJlIGZlZXR8c3F1YXJlIGtpbG9tZXRyZXN8c3F1YXJlIGtpbG9tZXRlcnN8c3F1YXJlIG1ldHJlc3xzcXVhcmUgbWV0ZXJzfHNxdWFyZSBtaWxlc3xzcXVhcmUgeWFyZHN8Y3ViaWMgY2VudGltZXRyZXN8Y3ViaWMgY2VudGltZXRlcnN8Y3ViaWMgZmVldHxjdWJpYyBpbmNoZXN8Y3ViaWMgbWV0cmVzfGN1YmljIG1ldGVyc3xjdWJpYyB5YXJkc3xnYWxsb25zfGxpdHJlc3xsaXRlcnN8cXVhcnRzfGdyYW1zfGtpbG9ncmFtc3xvdW5jZXN8cG91bmRzfGRlZ3JlZXMgQ2Vsc2l1c3xkZWdyZWVzIEZhaHJlbmhlaXR8ZGVncmVlcyBLZWx2aW4pXFxiLyxcbiAgICAgIGFsaWFzOiAnYnVpbHRpbidcbiAgICB9LFxuICAgIHB1bmN0dWF0aW9uOiAvW3t9KCk6LMKswqvCu+OAiuOAi10vXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
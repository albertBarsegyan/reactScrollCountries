(self["webpackChunkheaderproject"] = self["webpackChunkheaderproject"] || []).push([["react-syntax-highlighter_languages_refractor_batch"],{

/***/ "./node_modules/refractor/lang/batch.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/batch.js ***!
  \**********************************************/
/***/ ((module) => {

"use strict";


module.exports = batch
batch.displayName = 'batch'
batch.aliases = []
function batch(Prism) {
  ;(function(Prism) {
    var variable = /%%?[~:\w]+%?|!\S+!/
    var parameter = {
      pattern: /\/[a-z?]+(?=[ :]|$):?|-[a-z]\b|--[a-z-]+\b/im,
      alias: 'attr-name',
      inside: {
        punctuation: /:/
      }
    }
    var string = /"[^"]*"/
    var number = /(?:\b|-)\d+\b/
    Prism.languages.batch = {
      comment: [
        /^::.*/m,
        {
          pattern: /((?:^|[&(])[ \t]*)rem\b(?:[^^&)\r\n]|\^(?:\r\n|[\s\S]))*/im,
          lookbehind: true
        }
      ],
      label: {
        pattern: /^:.*/m,
        alias: 'property'
      },
      command: [
        {
          // FOR command
          pattern: /((?:^|[&(])[ \t]*)for(?: ?\/[a-z?](?:[ :](?:"[^"]*"|\S+))?)* \S+ in \([^)]+\) do/im,
          lookbehind: true,
          inside: {
            keyword: /^for\b|\b(?:in|do)\b/i,
            string: string,
            parameter: parameter,
            variable: variable,
            number: number,
            punctuation: /[()',]/
          }
        },
        {
          // IF command
          pattern: /((?:^|[&(])[ \t]*)if(?: ?\/[a-z?](?:[ :](?:"[^"]*"|\S+))?)* (?:not )?(?:cmdextversion \d+|defined \w+|errorlevel \d+|exist \S+|(?:"[^"]*"|\S+)?(?:==| (?:equ|neq|lss|leq|gtr|geq) )(?:"[^"]*"|\S+))/im,
          lookbehind: true,
          inside: {
            keyword: /^if\b|\b(?:not|cmdextversion|defined|errorlevel|exist)\b/i,
            string: string,
            parameter: parameter,
            variable: variable,
            number: number,
            operator: /\^|==|\b(?:equ|neq|lss|leq|gtr|geq)\b/i
          }
        },
        {
          // ELSE command
          pattern: /((?:^|[&()])[ \t]*)else\b/im,
          lookbehind: true,
          inside: {
            keyword: /^else\b/i
          }
        },
        {
          // SET command
          pattern: /((?:^|[&(])[ \t]*)set(?: ?\/[a-z](?:[ :](?:"[^"]*"|\S+))?)* (?:[^^&)\r\n]|\^(?:\r\n|[\s\S]))*/im,
          lookbehind: true,
          inside: {
            keyword: /^set\b/i,
            string: string,
            parameter: parameter,
            variable: [variable, /\w+(?=(?:[*\/%+\-&^|]|<<|>>)?=)/],
            number: number,
            operator: /[*\/%+\-&^|]=?|<<=?|>>=?|[!~_=]/,
            punctuation: /[()',]/
          }
        },
        {
          // Other commands
          pattern: /((?:^|[&(])[ \t]*@?)\w+\b(?:[^^&)\r\n]|\^(?:\r\n|[\s\S]))*/im,
          lookbehind: true,
          inside: {
            keyword: /^\w+\b/i,
            string: string,
            parameter: parameter,
            label: {
              pattern: /(^\s*):\S+/m,
              lookbehind: true,
              alias: 'property'
            },
            variable: variable,
            number: number,
            operator: /\^/
          }
        }
      ],
      operator: /[&@]/,
      punctuation: /[()']/
    }
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFkZXJwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL2JhdGNoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCIsImZpbGUiOiJyZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX3JlZnJhY3Rvcl9iYXRjaC5idW5kbGUuY2VhZWE2Njg2YjYxNzIwZmY3NjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBiYXRjaFxuYmF0Y2guZGlzcGxheU5hbWUgPSAnYmF0Y2gnXG5iYXRjaC5hbGlhc2VzID0gW11cbmZ1bmN0aW9uIGJhdGNoKFByaXNtKSB7XG4gIDsoZnVuY3Rpb24oUHJpc20pIHtcbiAgICB2YXIgdmFyaWFibGUgPSAvJSU/W346XFx3XSslP3whXFxTKyEvXG4gICAgdmFyIHBhcmFtZXRlciA9IHtcbiAgICAgIHBhdHRlcm46IC9cXC9bYS16P10rKD89WyA6XXwkKTo/fC1bYS16XVxcYnwtLVthLXotXStcXGIvaW0sXG4gICAgICBhbGlhczogJ2F0dHItbmFtZScsXG4gICAgICBpbnNpZGU6IHtcbiAgICAgICAgcHVuY3R1YXRpb246IC86L1xuICAgICAgfVxuICAgIH1cbiAgICB2YXIgc3RyaW5nID0gL1wiW15cIl0qXCIvXG4gICAgdmFyIG51bWJlciA9IC8oPzpcXGJ8LSlcXGQrXFxiL1xuICAgIFByaXNtLmxhbmd1YWdlcy5iYXRjaCA9IHtcbiAgICAgIGNvbW1lbnQ6IFtcbiAgICAgICAgL146Oi4qL20sXG4gICAgICAgIHtcbiAgICAgICAgICBwYXR0ZXJuOiAvKCg/Ol58WyYoXSlbIFxcdF0qKXJlbVxcYig/OlteXiYpXFxyXFxuXXxcXF4oPzpcXHJcXG58W1xcc1xcU10pKSovaW0sXG4gICAgICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgbGFiZWw6IHtcbiAgICAgICAgcGF0dGVybjogL146LiovbSxcbiAgICAgICAgYWxpYXM6ICdwcm9wZXJ0eSdcbiAgICAgIH0sXG4gICAgICBjb21tYW5kOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAvLyBGT1IgY29tbWFuZFxuICAgICAgICAgIHBhdHRlcm46IC8oKD86XnxbJihdKVsgXFx0XSopZm9yKD86ID9cXC9bYS16P10oPzpbIDpdKD86XCJbXlwiXSpcInxcXFMrKSk/KSogXFxTKyBpbiBcXChbXildK1xcKSBkby9pbSxcbiAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICAgIGluc2lkZToge1xuICAgICAgICAgICAga2V5d29yZDogL15mb3JcXGJ8XFxiKD86aW58ZG8pXFxiL2ksXG4gICAgICAgICAgICBzdHJpbmc6IHN0cmluZyxcbiAgICAgICAgICAgIHBhcmFtZXRlcjogcGFyYW1ldGVyLFxuICAgICAgICAgICAgdmFyaWFibGU6IHZhcmlhYmxlLFxuICAgICAgICAgICAgbnVtYmVyOiBudW1iZXIsXG4gICAgICAgICAgICBwdW5jdHVhdGlvbjogL1soKScsXS9cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAvLyBJRiBjb21tYW5kXG4gICAgICAgICAgcGF0dGVybjogLygoPzpefFsmKF0pWyBcXHRdKilpZig/OiA/XFwvW2Etej9dKD86WyA6XSg/OlwiW15cIl0qXCJ8XFxTKykpPykqICg/Om5vdCApPyg/OmNtZGV4dHZlcnNpb24gXFxkK3xkZWZpbmVkIFxcdyt8ZXJyb3JsZXZlbCBcXGQrfGV4aXN0IFxcUyt8KD86XCJbXlwiXSpcInxcXFMrKT8oPzo9PXwgKD86ZXF1fG5lcXxsc3N8bGVxfGd0cnxnZXEpICkoPzpcIlteXCJdKlwifFxcUyspKS9pbSxcbiAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICAgIGluc2lkZToge1xuICAgICAgICAgICAga2V5d29yZDogL15pZlxcYnxcXGIoPzpub3R8Y21kZXh0dmVyc2lvbnxkZWZpbmVkfGVycm9ybGV2ZWx8ZXhpc3QpXFxiL2ksXG4gICAgICAgICAgICBzdHJpbmc6IHN0cmluZyxcbiAgICAgICAgICAgIHBhcmFtZXRlcjogcGFyYW1ldGVyLFxuICAgICAgICAgICAgdmFyaWFibGU6IHZhcmlhYmxlLFxuICAgICAgICAgICAgbnVtYmVyOiBudW1iZXIsXG4gICAgICAgICAgICBvcGVyYXRvcjogL1xcXnw9PXxcXGIoPzplcXV8bmVxfGxzc3xsZXF8Z3RyfGdlcSlcXGIvaVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIC8vIEVMU0UgY29tbWFuZFxuICAgICAgICAgIHBhdHRlcm46IC8oKD86XnxbJigpXSlbIFxcdF0qKWVsc2VcXGIvaW0sXG4gICAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICAgIGtleXdvcmQ6IC9eZWxzZVxcYi9pXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgLy8gU0VUIGNvbW1hbmRcbiAgICAgICAgICBwYXR0ZXJuOiAvKCg/Ol58WyYoXSlbIFxcdF0qKXNldCg/OiA/XFwvW2Etel0oPzpbIDpdKD86XCJbXlwiXSpcInxcXFMrKSk/KSogKD86W15eJilcXHJcXG5dfFxcXig/OlxcclxcbnxbXFxzXFxTXSkpKi9pbSxcbiAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICAgIGluc2lkZToge1xuICAgICAgICAgICAga2V5d29yZDogL15zZXRcXGIvaSxcbiAgICAgICAgICAgIHN0cmluZzogc3RyaW5nLFxuICAgICAgICAgICAgcGFyYW1ldGVyOiBwYXJhbWV0ZXIsXG4gICAgICAgICAgICB2YXJpYWJsZTogW3ZhcmlhYmxlLCAvXFx3Kyg/PSg/OlsqXFwvJStcXC0mXnxdfDw8fD4+KT89KS9dLFxuICAgICAgICAgICAgbnVtYmVyOiBudW1iZXIsXG4gICAgICAgICAgICBvcGVyYXRvcjogL1sqXFwvJStcXC0mXnxdPT98PDw9P3w+Pj0/fFshfl89XS8sXG4gICAgICAgICAgICBwdW5jdHVhdGlvbjogL1soKScsXS9cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAvLyBPdGhlciBjb21tYW5kc1xuICAgICAgICAgIHBhdHRlcm46IC8oKD86XnxbJihdKVsgXFx0XSpAPylcXHcrXFxiKD86W15eJilcXHJcXG5dfFxcXig/OlxcclxcbnxbXFxzXFxTXSkpKi9pbSxcbiAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICAgIGluc2lkZToge1xuICAgICAgICAgICAga2V5d29yZDogL15cXHcrXFxiL2ksXG4gICAgICAgICAgICBzdHJpbmc6IHN0cmluZyxcbiAgICAgICAgICAgIHBhcmFtZXRlcjogcGFyYW1ldGVyLFxuICAgICAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICAgICAgcGF0dGVybjogLyheXFxzKik6XFxTKy9tLFxuICAgICAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICAgICAgICBhbGlhczogJ3Byb3BlcnR5J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHZhcmlhYmxlOiB2YXJpYWJsZSxcbiAgICAgICAgICAgIG51bWJlcjogbnVtYmVyLFxuICAgICAgICAgICAgb3BlcmF0b3I6IC9cXF4vXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgb3BlcmF0b3I6IC9bJkBdLyxcbiAgICAgIHB1bmN0dWF0aW9uOiAvWygpJ10vXG4gICAgfVxuICB9KShQcmlzbSlcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
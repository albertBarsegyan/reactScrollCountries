(self["webpackChunkheaderproject"] = self["webpackChunkheaderproject"] || []).push([["react-syntax-highlighter_languages_refractor_ichigojam"],{

/***/ "./node_modules/refractor/lang/ichigojam.js":
/*!**************************************************!*\
  !*** ./node_modules/refractor/lang/ichigojam.js ***!
  \**************************************************/
/***/ ((module) => {

"use strict";


module.exports = ichigojam
ichigojam.displayName = 'ichigojam'
ichigojam.aliases = []
function ichigojam(Prism) {
  // according to the offical reference (EN)
  // https://ichigojam.net/IchigoJam-en.html
  Prism.languages.ichigojam = {
    comment: /(?:\B'|REM)(?:[^\n\r]*)/i,
    string: {
      pattern: /"(?:""|[!#$%&'()*,\/:;<=>?^_ +\-.A-Z\d])*"/i,
      greedy: true
    },
    number: /\B#[0-9A-F]+|\B`[01]+|(?:\b\d+\.?\d*|\B\.\d+)(?:E[+-]?\d+)?/i,
    keyword: /\b(?:BEEP|BPS|CASE|CLEAR|CLK|CLO|CLP|CLS|CLT|CLV|CONT|COPY|ELSE|END|FILE|FILES|FOR|GOSUB|GSB|GOTO|IF|INPUT|KBD|LED|LET|LIST|LOAD|LOCATE|LRUN|NEW|NEXT|OUT|RIGHT|PLAY|POKE|PRINT|PWM|REM|RENUM|RESET|RETURN|RTN|RUN|SAVE|SCROLL|SLEEP|SRND|STEP|STOP|SUB|TEMPO|THEN|TO|UART|VIDEO|WAIT)(?:\$|\b)/i,
    function: /\b(?:ABS|ANA|ASC|BIN|BTN|DEC|END|FREE|HELP|HEX|I2CR|I2CW|IN|INKEY|LEN|LINE|PEEK|RND|SCR|SOUND|STR|TICK|USR|VER|VPEEK|ZER)(?:\$|\b)/i,
    label: /(?:\B@[^\s]+)/i,
    operator: /<[=>]?|>=?|\|\||&&|[+\-*\/=|&^~!]|\b(?:AND|NOT|OR)\b/i,
    punctuation: /[\[,;:()\]]/
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFkZXJwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL2ljaGlnb2phbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBIiwiZmlsZSI6InJlYWN0LXN5bnRheC1oaWdobGlnaHRlcl9sYW5ndWFnZXNfcmVmcmFjdG9yX2ljaGlnb2phbS5idW5kbGUuY2VhZWE2Njg2YjYxNzIwZmY3NjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBpY2hpZ29qYW1cbmljaGlnb2phbS5kaXNwbGF5TmFtZSA9ICdpY2hpZ29qYW0nXG5pY2hpZ29qYW0uYWxpYXNlcyA9IFtdXG5mdW5jdGlvbiBpY2hpZ29qYW0oUHJpc20pIHtcbiAgLy8gYWNjb3JkaW5nIHRvIHRoZSBvZmZpY2FsIHJlZmVyZW5jZSAoRU4pXG4gIC8vIGh0dHBzOi8vaWNoaWdvamFtLm5ldC9JY2hpZ29KYW0tZW4uaHRtbFxuICBQcmlzbS5sYW5ndWFnZXMuaWNoaWdvamFtID0ge1xuICAgIGNvbW1lbnQ6IC8oPzpcXEInfFJFTSkoPzpbXlxcblxccl0qKS9pLFxuICAgIHN0cmluZzoge1xuICAgICAgcGF0dGVybjogL1wiKD86XCJcInxbISMkJSYnKCkqLFxcLzo7PD0+P15fICtcXC0uQS1aXFxkXSkqXCIvaSxcbiAgICAgIGdyZWVkeTogdHJ1ZVxuICAgIH0sXG4gICAgbnVtYmVyOiAvXFxCI1swLTlBLUZdK3xcXEJgWzAxXSt8KD86XFxiXFxkK1xcLj9cXGQqfFxcQlxcLlxcZCspKD86RVsrLV0/XFxkKyk/L2ksXG4gICAga2V5d29yZDogL1xcYig/OkJFRVB8QlBTfENBU0V8Q0xFQVJ8Q0xLfENMT3xDTFB8Q0xTfENMVHxDTFZ8Q09OVHxDT1BZfEVMU0V8RU5EfEZJTEV8RklMRVN8Rk9SfEdPU1VCfEdTQnxHT1RPfElGfElOUFVUfEtCRHxMRUR8TEVUfExJU1R8TE9BRHxMT0NBVEV8TFJVTnxORVd8TkVYVHxPVVR8UklHSFR8UExBWXxQT0tFfFBSSU5UfFBXTXxSRU18UkVOVU18UkVTRVR8UkVUVVJOfFJUTnxSVU58U0FWRXxTQ1JPTEx8U0xFRVB8U1JORHxTVEVQfFNUT1B8U1VCfFRFTVBPfFRIRU58VE98VUFSVHxWSURFT3xXQUlUKSg/OlxcJHxcXGIpL2ksXG4gICAgZnVuY3Rpb246IC9cXGIoPzpBQlN8QU5BfEFTQ3xCSU58QlROfERFQ3xFTkR8RlJFRXxIRUxQfEhFWHxJMkNSfEkyQ1d8SU58SU5LRVl8TEVOfExJTkV8UEVFS3xSTkR8U0NSfFNPVU5EfFNUUnxUSUNLfFVTUnxWRVJ8VlBFRUt8WkVSKSg/OlxcJHxcXGIpL2ksXG4gICAgbGFiZWw6IC8oPzpcXEJAW15cXHNdKykvaSxcbiAgICBvcGVyYXRvcjogLzxbPT5dP3w+PT98XFx8XFx8fCYmfFsrXFwtKlxcLz18Jl5+IV18XFxiKD86QU5EfE5PVHxPUilcXGIvaSxcbiAgICBwdW5jdHVhdGlvbjogL1tcXFssOzooKVxcXV0vXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
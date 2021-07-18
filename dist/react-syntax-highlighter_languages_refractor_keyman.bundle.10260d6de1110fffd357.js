(self["webpackChunkheaderproject"] = self["webpackChunkheaderproject"] || []).push([["react-syntax-highlighter_languages_refractor_keyman"],{

/***/ "./node_modules/refractor/lang/keyman.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/keyman.js ***!
  \***********************************************/
/***/ ((module) => {

"use strict";


module.exports = keyman
keyman.displayName = 'keyman'
keyman.aliases = []
function keyman(Prism) {
  Prism.languages.keyman = {
    comment: /\bc\s.*/i,
    function: /\[\s*(?:(?:CTRL|SHIFT|ALT|LCTRL|RCTRL|LALT|RALT|CAPS|NCAPS)\s+)*(?:[TKU]_[\w?]+|".+?"|'.+?')\s*\]/i,
    // virtual key
    string: /("|').*?\1/,
    bold: [
      // header statements, system stores and variable system stores
      /&(?:baselayout|bitmap|capsononly|capsalwaysoff|shiftfreescaps|copyright|ethnologuecode|hotkey|includecodes|keyboardversion|kmw_embedcss|kmw_embedjs|kmw_helpfile|kmw_helptext|kmw_rtl|language|layer|layoutfile|message|mnemoniclayout|name|oldcharposmatching|platform|targets|version|visualkeyboard|windowslanguages)\b/i,
      /\b(?:bitmap|bitmaps|caps on only|caps always off|shift frees caps|copyright|hotkey|language|layout|message|name|version)\b/i
    ],
    keyword: /\b(?:any|baselayout|beep|call|context|deadkey|dk|if|index|layer|notany|nul|outs|platform|return|reset|save|set|store|use)\b/i,
    // rule keywords
    atrule: /\b(?:ansi|begin|unicode|group|using keys|match|nomatch)\b/i,
    // structural keywords
    number: /\b(?:U\+[\dA-F]+|d\d+|x[\da-f]+|\d+)\b/i,
    // U+####, x###, d### characters and numbers
    operator: /[+>\\,()]/,
    tag: /\$(?:keyman|kmfl|weaver|keymanweb|keymanonly):/i // prefixes
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFkZXJwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL2tleW1hbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoicmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyX2xhbmd1YWdlc19yZWZyYWN0b3Jfa2V5bWFuLmJ1bmRsZS4xMDI2MGQ2ZGUxMTEwZmZmZDM1Ny5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGtleW1hblxua2V5bWFuLmRpc3BsYXlOYW1lID0gJ2tleW1hbidcbmtleW1hbi5hbGlhc2VzID0gW11cbmZ1bmN0aW9uIGtleW1hbihQcmlzbSkge1xuICBQcmlzbS5sYW5ndWFnZXMua2V5bWFuID0ge1xuICAgIGNvbW1lbnQ6IC9cXGJjXFxzLiovaSxcbiAgICBmdW5jdGlvbjogL1xcW1xccyooPzooPzpDVFJMfFNISUZUfEFMVHxMQ1RSTHxSQ1RSTHxMQUxUfFJBTFR8Q0FQU3xOQ0FQUylcXHMrKSooPzpbVEtVXV9bXFx3P10rfFwiLis/XCJ8Jy4rPycpXFxzKlxcXS9pLFxuICAgIC8vIHZpcnR1YWwga2V5XG4gICAgc3RyaW5nOiAvKFwifCcpLio/XFwxLyxcbiAgICBib2xkOiBbXG4gICAgICAvLyBoZWFkZXIgc3RhdGVtZW50cywgc3lzdGVtIHN0b3JlcyBhbmQgdmFyaWFibGUgc3lzdGVtIHN0b3Jlc1xuICAgICAgLyYoPzpiYXNlbGF5b3V0fGJpdG1hcHxjYXBzb25vbmx5fGNhcHNhbHdheXNvZmZ8c2hpZnRmcmVlc2NhcHN8Y29weXJpZ2h0fGV0aG5vbG9ndWVjb2RlfGhvdGtleXxpbmNsdWRlY29kZXN8a2V5Ym9hcmR2ZXJzaW9ufGttd19lbWJlZGNzc3xrbXdfZW1iZWRqc3xrbXdfaGVscGZpbGV8a213X2hlbHB0ZXh0fGttd19ydGx8bGFuZ3VhZ2V8bGF5ZXJ8bGF5b3V0ZmlsZXxtZXNzYWdlfG1uZW1vbmljbGF5b3V0fG5hbWV8b2xkY2hhcnBvc21hdGNoaW5nfHBsYXRmb3JtfHRhcmdldHN8dmVyc2lvbnx2aXN1YWxrZXlib2FyZHx3aW5kb3dzbGFuZ3VhZ2VzKVxcYi9pLFxuICAgICAgL1xcYig/OmJpdG1hcHxiaXRtYXBzfGNhcHMgb24gb25seXxjYXBzIGFsd2F5cyBvZmZ8c2hpZnQgZnJlZXMgY2Fwc3xjb3B5cmlnaHR8aG90a2V5fGxhbmd1YWdlfGxheW91dHxtZXNzYWdlfG5hbWV8dmVyc2lvbilcXGIvaVxuICAgIF0sXG4gICAga2V5d29yZDogL1xcYig/OmFueXxiYXNlbGF5b3V0fGJlZXB8Y2FsbHxjb250ZXh0fGRlYWRrZXl8ZGt8aWZ8aW5kZXh8bGF5ZXJ8bm90YW55fG51bHxvdXRzfHBsYXRmb3JtfHJldHVybnxyZXNldHxzYXZlfHNldHxzdG9yZXx1c2UpXFxiL2ksXG4gICAgLy8gcnVsZSBrZXl3b3Jkc1xuICAgIGF0cnVsZTogL1xcYig/OmFuc2l8YmVnaW58dW5pY29kZXxncm91cHx1c2luZyBrZXlzfG1hdGNofG5vbWF0Y2gpXFxiL2ksXG4gICAgLy8gc3RydWN0dXJhbCBrZXl3b3Jkc1xuICAgIG51bWJlcjogL1xcYig/OlVcXCtbXFxkQS1GXSt8ZFxcZCt8eFtcXGRhLWZdK3xcXGQrKVxcYi9pLFxuICAgIC8vIFUrIyMjIywgeCMjIywgZCMjIyBjaGFyYWN0ZXJzIGFuZCBudW1iZXJzXG4gICAgb3BlcmF0b3I6IC9bKz5cXFxcLCgpXS8sXG4gICAgdGFnOiAvXFwkKD86a2V5bWFufGttZmx8d2VhdmVyfGtleW1hbndlYnxrZXltYW5vbmx5KTovaSAvLyBwcmVmaXhlc1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9
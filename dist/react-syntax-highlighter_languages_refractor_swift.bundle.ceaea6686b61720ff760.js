(self["webpackChunkheaderproject"] = self["webpackChunkheaderproject"] || []).push([["react-syntax-highlighter_languages_refractor_swift"],{

/***/ "./node_modules/refractor/lang/swift.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/swift.js ***!
  \**********************************************/
/***/ ((module) => {

"use strict";


module.exports = swift
swift.displayName = 'swift'
swift.aliases = []
function swift(Prism) {
  // issues: nested multiline comments
  Prism.languages.swift = Prism.languages.extend('clike', {
    string: {
      pattern: /("|')(\\(?:\((?:[^()]|\([^)]+\))+\)|\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: true,
      inside: {
        interpolation: {
          pattern: /\\\((?:[^()]|\([^)]+\))+\)/,
          inside: {
            delimiter: {
              pattern: /^\\\(|\)$/,
              alias: 'variable'
            } // See rest below
          }
        }
      }
    },
    keyword: /\b(?:as|associativity|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic(?:Type)?|else|enum|extension|fallthrough|final|for|func|get|guard|if|import|in|infix|init|inout|internal|is|lazy|left|let|mutating|new|none|nonmutating|operator|optional|override|postfix|precedence|prefix|private|protocol|public|repeat|required|rethrows|return|right|safe|self|Self|set|static|struct|subscript|super|switch|throws?|try|Type|typealias|unowned|unsafe|var|weak|where|while|willSet|__(?:COLUMN__|FILE__|FUNCTION__|LINE__))\b/,
    number: /\b(?:[\d_]+(?:\.[\de_]+)?|0x[a-f0-9_]+(?:\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,
    constant: /\b(?:nil|[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,
    atrule: /@\b(?:IB(?:Outlet|Designable|Action|Inspectable)|class_protocol|exported|noreturn|NS(?:Copying|Managed)|objc|UIApplicationMain|auto_closure)\b/,
    builtin: /\b(?:[A-Z]\S+|abs|advance|alignof(?:Value)?|assert|contains|count(?:Elements)?|debugPrint(?:ln)?|distance|drop(?:First|Last)|dump|enumerate|equal|filter|find|first|getVaList|indices|isEmpty|join|last|lexicographicalCompare|map|max(?:Element)?|min(?:Element)?|numericCast|overlaps|partition|print(?:ln)?|reduce|reflect|reverse|sizeof(?:Value)?|sort(?:ed)?|split|startsWith|stride(?:of(?:Value)?)?|suffix|swap|toDebugString|toString|transcode|underestimateCount|unsafeBitCast|with(?:ExtendedLifetime|Unsafe(?:MutablePointers?|Pointers?)|VaList))\b/
  })
  Prism.languages.swift['string'].inside['interpolation'].inside.rest =
    Prism.languages.swift
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFkZXJwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL3N3aWZ0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsK0JBQStCLEdBQUc7QUFDbEM7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EiLCJmaWxlIjoicmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyX2xhbmd1YWdlc19yZWZyYWN0b3Jfc3dpZnQuYnVuZGxlLmNlYWVhNjY4NmI2MTcyMGZmNzYwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gc3dpZnRcbnN3aWZ0LmRpc3BsYXlOYW1lID0gJ3N3aWZ0J1xuc3dpZnQuYWxpYXNlcyA9IFtdXG5mdW5jdGlvbiBzd2lmdChQcmlzbSkge1xuICAvLyBpc3N1ZXM6IG5lc3RlZCBtdWx0aWxpbmUgY29tbWVudHNcbiAgUHJpc20ubGFuZ3VhZ2VzLnN3aWZ0ID0gUHJpc20ubGFuZ3VhZ2VzLmV4dGVuZCgnY2xpa2UnLCB7XG4gICAgc3RyaW5nOiB7XG4gICAgICBwYXR0ZXJuOiAvKFwifCcpKFxcXFwoPzpcXCgoPzpbXigpXXxcXChbXildK1xcKSkrXFwpfFxcclxcbnxbXFxzXFxTXSl8KD8hXFwxKVteXFxcXFxcclxcbl0pKlxcMS8sXG4gICAgICBncmVlZHk6IHRydWUsXG4gICAgICBpbnNpZGU6IHtcbiAgICAgICAgaW50ZXJwb2xhdGlvbjoge1xuICAgICAgICAgIHBhdHRlcm46IC9cXFxcXFwoKD86W14oKV18XFwoW14pXStcXCkpK1xcKS8sXG4gICAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgICBkZWxpbWl0ZXI6IHtcbiAgICAgICAgICAgICAgcGF0dGVybjogL15cXFxcXFwofFxcKSQvLFxuICAgICAgICAgICAgICBhbGlhczogJ3ZhcmlhYmxlJ1xuICAgICAgICAgICAgfSAvLyBTZWUgcmVzdCBiZWxvd1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAga2V5d29yZDogL1xcYig/OmFzfGFzc29jaWF0aXZpdHl8YnJlYWt8Y2FzZXxjYXRjaHxjbGFzc3xjb250aW51ZXxjb252ZW5pZW5jZXxkZWZhdWx0fGRlZmVyfGRlaW5pdHxkaWRTZXR8ZG98ZHluYW1pYyg/OlR5cGUpP3xlbHNlfGVudW18ZXh0ZW5zaW9ufGZhbGx0aHJvdWdofGZpbmFsfGZvcnxmdW5jfGdldHxndWFyZHxpZnxpbXBvcnR8aW58aW5maXh8aW5pdHxpbm91dHxpbnRlcm5hbHxpc3xsYXp5fGxlZnR8bGV0fG11dGF0aW5nfG5ld3xub25lfG5vbm11dGF0aW5nfG9wZXJhdG9yfG9wdGlvbmFsfG92ZXJyaWRlfHBvc3RmaXh8cHJlY2VkZW5jZXxwcmVmaXh8cHJpdmF0ZXxwcm90b2NvbHxwdWJsaWN8cmVwZWF0fHJlcXVpcmVkfHJldGhyb3dzfHJldHVybnxyaWdodHxzYWZlfHNlbGZ8U2VsZnxzZXR8c3RhdGljfHN0cnVjdHxzdWJzY3JpcHR8c3VwZXJ8c3dpdGNofHRocm93cz98dHJ5fFR5cGV8dHlwZWFsaWFzfHVub3duZWR8dW5zYWZlfHZhcnx3ZWFrfHdoZXJlfHdoaWxlfHdpbGxTZXR8X18oPzpDT0xVTU5fX3xGSUxFX198RlVOQ1RJT05fX3xMSU5FX18pKVxcYi8sXG4gICAgbnVtYmVyOiAvXFxiKD86W1xcZF9dKyg/OlxcLltcXGRlX10rKT98MHhbYS1mMC05X10rKD86XFwuW2EtZjAtOXBfXSspP3wwYlswMV9dK3wwb1swLTdfXSspXFxiL2ksXG4gICAgY29uc3RhbnQ6IC9cXGIoPzpuaWx8W0EtWl9dezIsfXxrW0EtWl1bQS1aYS16X10rKVxcYi8sXG4gICAgYXRydWxlOiAvQFxcYig/OklCKD86T3V0bGV0fERlc2lnbmFibGV8QWN0aW9ufEluc3BlY3RhYmxlKXxjbGFzc19wcm90b2NvbHxleHBvcnRlZHxub3JldHVybnxOUyg/OkNvcHlpbmd8TWFuYWdlZCl8b2JqY3xVSUFwcGxpY2F0aW9uTWFpbnxhdXRvX2Nsb3N1cmUpXFxiLyxcbiAgICBidWlsdGluOiAvXFxiKD86W0EtWl1cXFMrfGFic3xhZHZhbmNlfGFsaWdub2YoPzpWYWx1ZSk/fGFzc2VydHxjb250YWluc3xjb3VudCg/OkVsZW1lbnRzKT98ZGVidWdQcmludCg/OmxuKT98ZGlzdGFuY2V8ZHJvcCg/OkZpcnN0fExhc3QpfGR1bXB8ZW51bWVyYXRlfGVxdWFsfGZpbHRlcnxmaW5kfGZpcnN0fGdldFZhTGlzdHxpbmRpY2VzfGlzRW1wdHl8am9pbnxsYXN0fGxleGljb2dyYXBoaWNhbENvbXBhcmV8bWFwfG1heCg/OkVsZW1lbnQpP3xtaW4oPzpFbGVtZW50KT98bnVtZXJpY0Nhc3R8b3ZlcmxhcHN8cGFydGl0aW9ufHByaW50KD86bG4pP3xyZWR1Y2V8cmVmbGVjdHxyZXZlcnNlfHNpemVvZig/OlZhbHVlKT98c29ydCg/OmVkKT98c3BsaXR8c3RhcnRzV2l0aHxzdHJpZGUoPzpvZig/OlZhbHVlKT8pP3xzdWZmaXh8c3dhcHx0b0RlYnVnU3RyaW5nfHRvU3RyaW5nfHRyYW5zY29kZXx1bmRlcmVzdGltYXRlQ291bnR8dW5zYWZlQml0Q2FzdHx3aXRoKD86RXh0ZW5kZWRMaWZldGltZXxVbnNhZmUoPzpNdXRhYmxlUG9pbnRlcnM/fFBvaW50ZXJzPyl8VmFMaXN0KSlcXGIvXG4gIH0pXG4gIFByaXNtLmxhbmd1YWdlcy5zd2lmdFsnc3RyaW5nJ10uaW5zaWRlWydpbnRlcnBvbGF0aW9uJ10uaW5zaWRlLnJlc3QgPVxuICAgIFByaXNtLmxhbmd1YWdlcy5zd2lmdFxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
(self["webpackChunkheaderproject"] = self["webpackChunkheaderproject"] || []).push([["react-syntax-highlighter_languages_refractor_yaml"],{

/***/ "./node_modules/refractor/lang/yaml.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/yaml.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";


module.exports = yaml
yaml.displayName = 'yaml'
yaml.aliases = ['yml']
function yaml(Prism) {
  Prism.languages.yaml = {
    scalar: {
      pattern: /([\-:]\s*(?:![^\s]+)?[ \t]*[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)[^\r\n]+(?:\2[^\r\n]+)*)/,
      lookbehind: true,
      alias: 'string'
    },
    comment: /#.*/,
    key: {
      pattern: /(\s*(?:^|[:\-,[{\r\n?])[ \t]*(?:![^\s]+)?[ \t]*)[^\r\n{[\]},#\s]+?(?=\s*:\s)/,
      lookbehind: true,
      alias: 'atrule'
    },
    directive: {
      pattern: /(^[ \t]*)%.+/m,
      lookbehind: true,
      alias: 'important'
    },
    datetime: {
      pattern: /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)(?:\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?)?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?)(?=[ \t]*(?:$|,|]|}))/m,
      lookbehind: true,
      alias: 'number'
    },
    boolean: {
      pattern: /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)(?:true|false)[ \t]*(?=$|,|]|})/im,
      lookbehind: true,
      alias: 'important'
    },
    null: {
      pattern: /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)(?:null|~)[ \t]*(?=$|,|]|})/im,
      lookbehind: true,
      alias: 'important'
    },
    string: {
      pattern: /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)("|')(?:(?!\2)[^\\\r\n]|\\.)*\2(?=[ \t]*(?:$|,|]|}|\s*#))/m,
      lookbehind: true,
      greedy: true
    },
    number: {
      pattern: /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+\.?\d*|\.?\d+)(?:e[+-]?\d+)?|\.inf|\.nan)[ \t]*(?=$|,|]|})/im,
      lookbehind: true
    },
    tag: /![^\s]+/,
    important: /[&*][\w]+/,
    punctuation: /---|[:[\]{}\-,|>?]|\.\.\./
  }
  Prism.languages.yml = Prism.languages.yaml
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFkZXJwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL3lhbWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQVk7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxnQ0FBZ0MsdUNBQXVDLElBQUk7QUFDM0U7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLHdCQUF3Qiw2QkFBNkIsRUFBRSxvQ0FBb0MsRUFBRSxJQUFJLEVBQUUscUNBQXFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxnQ0FBZ0M7QUFDck47QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLHdCQUF3QixxREFBcUQ7QUFDN0U7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLHdCQUF3QixpREFBaUQ7QUFDekU7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLHdCQUF3Qix5RUFBeUU7QUFDakc7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLHdCQUF3QixrSEFBa0g7QUFDMUk7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0EiLCJmaWxlIjoicmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyX2xhbmd1YWdlc19yZWZyYWN0b3JfeWFtbC5idW5kbGUuMTAyNjBkNmRlMTExMGZmZmQzNTcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSB5YW1sXG55YW1sLmRpc3BsYXlOYW1lID0gJ3lhbWwnXG55YW1sLmFsaWFzZXMgPSBbJ3ltbCddXG5mdW5jdGlvbiB5YW1sKFByaXNtKSB7XG4gIFByaXNtLmxhbmd1YWdlcy55YW1sID0ge1xuICAgIHNjYWxhcjoge1xuICAgICAgcGF0dGVybjogLyhbXFwtOl1cXHMqKD86IVteXFxzXSspP1sgXFx0XSpbfD5dKVsgXFx0XSooPzooKD86XFxyP1xcbnxcXHIpWyBcXHRdKylbXlxcclxcbl0rKD86XFwyW15cXHJcXG5dKykqKS8sXG4gICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgYWxpYXM6ICdzdHJpbmcnXG4gICAgfSxcbiAgICBjb21tZW50OiAvIy4qLyxcbiAgICBrZXk6IHtcbiAgICAgIHBhdHRlcm46IC8oXFxzKig/Ol58WzpcXC0sW3tcXHJcXG4/XSlbIFxcdF0qKD86IVteXFxzXSspP1sgXFx0XSopW15cXHJcXG57W1xcXX0sI1xcc10rPyg/PVxccyo6XFxzKS8sXG4gICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgYWxpYXM6ICdhdHJ1bGUnXG4gICAgfSxcbiAgICBkaXJlY3RpdmU6IHtcbiAgICAgIHBhdHRlcm46IC8oXlsgXFx0XSopJS4rL20sXG4gICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgYWxpYXM6ICdpbXBvcnRhbnQnXG4gICAgfSxcbiAgICBkYXRldGltZToge1xuICAgICAgcGF0dGVybjogLyhbOlxcLSxbe11cXHMqKD86IVteXFxzXSspP1sgXFx0XSopKD86XFxkezR9LVxcZFxcZD8tXFxkXFxkPyg/Olt0VF18WyBcXHRdKylcXGRcXGQ/OlxcZHsyfTpcXGR7Mn0oPzpcXC5cXGQqKT9bIFxcdF0qKD86WnxbLStdXFxkXFxkPyg/OjpcXGR7Mn0pPyk/fFxcZHs0fS1cXGR7Mn0tXFxkezJ9fFxcZFxcZD86XFxkezJ9KD86OlxcZHsyfSg/OlxcLlxcZCopPyk/KSg/PVsgXFx0XSooPzokfCx8XXx9KSkvbSxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICBhbGlhczogJ251bWJlcidcbiAgICB9LFxuICAgIGJvb2xlYW46IHtcbiAgICAgIHBhdHRlcm46IC8oWzpcXC0sW3tdXFxzKig/OiFbXlxcc10rKT9bIFxcdF0qKSg/OnRydWV8ZmFsc2UpWyBcXHRdKig/PSR8LHxdfH0pL2ltLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgIGFsaWFzOiAnaW1wb3J0YW50J1xuICAgIH0sXG4gICAgbnVsbDoge1xuICAgICAgcGF0dGVybjogLyhbOlxcLSxbe11cXHMqKD86IVteXFxzXSspP1sgXFx0XSopKD86bnVsbHx+KVsgXFx0XSooPz0kfCx8XXx9KS9pbSxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICBhbGlhczogJ2ltcG9ydGFudCdcbiAgICB9LFxuICAgIHN0cmluZzoge1xuICAgICAgcGF0dGVybjogLyhbOlxcLSxbe11cXHMqKD86IVteXFxzXSspP1sgXFx0XSopKFwifCcpKD86KD8hXFwyKVteXFxcXFxcclxcbl18XFxcXC4pKlxcMig/PVsgXFx0XSooPzokfCx8XXx9fFxccyojKSkvbSxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICBncmVlZHk6IHRydWVcbiAgICB9LFxuICAgIG51bWJlcjoge1xuICAgICAgcGF0dGVybjogLyhbOlxcLSxbe11cXHMqKD86IVteXFxzXSspP1sgXFx0XSopWystXT8oPzoweFtcXGRhLWZdK3wwb1swLTddK3woPzpcXGQrXFwuP1xcZCp8XFwuP1xcZCspKD86ZVsrLV0/XFxkKyk/fFxcLmluZnxcXC5uYW4pWyBcXHRdKig/PSR8LHxdfH0pL2ltLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgIH0sXG4gICAgdGFnOiAvIVteXFxzXSsvLFxuICAgIGltcG9ydGFudDogL1smKl1bXFx3XSsvLFxuICAgIHB1bmN0dWF0aW9uOiAvLS0tfFs6W1xcXXt9XFwtLHw+P118XFwuXFwuXFwuL1xuICB9XG4gIFByaXNtLmxhbmd1YWdlcy55bWwgPSBQcmlzbS5sYW5ndWFnZXMueWFtbFxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
(self["webpackChunkheaderproject"] = self["webpackChunkheaderproject"] || []).push([["react-syntax-highlighter_languages_refractor_visualBasic"],{

/***/ "./node_modules/refractor/lang/visual-basic.js":
/*!*****************************************************!*\
  !*** ./node_modules/refractor/lang/visual-basic.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


module.exports = visualBasic
visualBasic.displayName = 'visualBasic'
visualBasic.aliases = []
function visualBasic(Prism) {
  Prism.languages['visual-basic'] = {
    comment: {
      pattern: /(?:['‘’]|REM\b).*/i,
      inside: {
        keyword: /^REM/i
      }
    },
    directive: {
      pattern: /#(?:Const|Else|ElseIf|End|ExternalChecksum|ExternalSource|If|Region)(?:[^\S\r\n]_[^\S\r\n]*(?:\r\n?|\n)|.)+/i,
      alias: 'comment',
      greedy: true
    },
    string: {
      pattern: /\$?["“”](?:["“”]{2}|[^"“”])*["“”]C?/i,
      greedy: true
    },
    date: {
      pattern: /#[^\S\r\n]*(?:\d+([/-])\d+\1\d+(?:[^\S\r\n]+(?:\d+[^\S\r\n]*(?:AM|PM)|\d+:\d+(?::\d+)?(?:[^\S\r\n]*(?:AM|PM))?))?|(?:\d+[^\S\r\n]*(?:AM|PM)|\d+:\d+(?::\d+)?(?:[^\S\r\n]*(?:AM|PM))?))[^\S\r\n]*#/i,
      alias: 'builtin'
    },
    number: /(?:(?:\b\d+(?:\.\d+)?|\.\d+)(?:E[+-]?\d+)?|&[HO][\dA-F]+)(?:U?[ILS]|[FRD])?/i,
    boolean: /\b(?:True|False|Nothing)\b/i,
    keyword: /\b(?:AddHandler|AddressOf|Alias|And(?:Also)?|As|Boolean|ByRef|Byte|ByVal|Call|Case|Catch|C(?:Bool|Byte|Char|Date|Dbl|Dec|Int|Lng|Obj|SByte|Short|Sng|Str|Type|UInt|ULng|UShort)|Char|Class|Const|Continue|Date|Decimal|Declare|Default|Delegate|Dim|DirectCast|Do|Double|Each|Else(?:If)?|End(?:If)?|Enum|Erase|Error|Event|Exit|Finally|For|Friend|Function|Get(?:Type|XMLNamespace)?|Global|GoSub|GoTo|Handles|If|Implements|Imports|In|Inherits|Integer|Interface|Is|IsNot|Let|Lib|Like|Long|Loop|Me|Mod|Module|Must(?:Inherit|Override)|My(?:Base|Class)|Namespace|Narrowing|New|Next|Not(?:Inheritable|Overridable)?|Object|Of|On|Operator|Option(?:al)?|Or(?:Else)?|Out|Overloads|Overridable|Overrides|ParamArray|Partial|Private|Property|Protected|Public|RaiseEvent|ReadOnly|ReDim|RemoveHandler|Resume|Return|SByte|Select|Set|Shadows|Shared|short|Single|Static|Step|Stop|String|Structure|Sub|SyncLock|Then|Throw|To|Try|TryCast|TypeOf|U(?:Integer|Long|Short)|Using|Variant|Wend|When|While|Widening|With(?:Events)?|WriteOnly|Xor)\b/i,
    operator: [
      /[+\-*/\\^<=>&#@$%!]/,
      {
        pattern: /([^\S\r\n])_(?=[^\S\r\n]*[\r\n])/,
        lookbehind: true
      }
    ],
    punctuation: /[{}().,:?]/
  }
  Prism.languages.vb = Prism.languages['visual-basic']
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFkZXJwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL3Zpc3VhbC1iYXNpYy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGlDQUFpQyxFQUFFO0FBQ25DO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EiLCJmaWxlIjoicmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyX2xhbmd1YWdlc19yZWZyYWN0b3JfdmlzdWFsQmFzaWMuYnVuZGxlLmNlYWVhNjY4NmI2MTcyMGZmNzYwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gdmlzdWFsQmFzaWNcbnZpc3VhbEJhc2ljLmRpc3BsYXlOYW1lID0gJ3Zpc3VhbEJhc2ljJ1xudmlzdWFsQmFzaWMuYWxpYXNlcyA9IFtdXG5mdW5jdGlvbiB2aXN1YWxCYXNpYyhQcmlzbSkge1xuICBQcmlzbS5sYW5ndWFnZXNbJ3Zpc3VhbC1iYXNpYyddID0ge1xuICAgIGNvbW1lbnQ6IHtcbiAgICAgIHBhdHRlcm46IC8oPzpbJ+KAmOKAmV18UkVNXFxiKS4qL2ksXG4gICAgICBpbnNpZGU6IHtcbiAgICAgICAga2V5d29yZDogL15SRU0vaVxuICAgICAgfVxuICAgIH0sXG4gICAgZGlyZWN0aXZlOiB7XG4gICAgICBwYXR0ZXJuOiAvIyg/OkNvbnN0fEVsc2V8RWxzZUlmfEVuZHxFeHRlcm5hbENoZWNrc3VtfEV4dGVybmFsU291cmNlfElmfFJlZ2lvbikoPzpbXlxcU1xcclxcbl1fW15cXFNcXHJcXG5dKig/Olxcclxcbj98XFxuKXwuKSsvaSxcbiAgICAgIGFsaWFzOiAnY29tbWVudCcsXG4gICAgICBncmVlZHk6IHRydWVcbiAgICB9LFxuICAgIHN0cmluZzoge1xuICAgICAgcGF0dGVybjogL1xcJD9bXCLigJzigJ1dKD86W1wi4oCc4oCdXXsyfXxbXlwi4oCc4oCdXSkqW1wi4oCc4oCdXUM/L2ksXG4gICAgICBncmVlZHk6IHRydWVcbiAgICB9LFxuICAgIGRhdGU6IHtcbiAgICAgIHBhdHRlcm46IC8jW15cXFNcXHJcXG5dKig/OlxcZCsoWy8tXSlcXGQrXFwxXFxkKyg/OlteXFxTXFxyXFxuXSsoPzpcXGQrW15cXFNcXHJcXG5dKig/OkFNfFBNKXxcXGQrOlxcZCsoPzo6XFxkKyk/KD86W15cXFNcXHJcXG5dKig/OkFNfFBNKSk/KSk/fCg/OlxcZCtbXlxcU1xcclxcbl0qKD86QU18UE0pfFxcZCs6XFxkKyg/OjpcXGQrKT8oPzpbXlxcU1xcclxcbl0qKD86QU18UE0pKT8pKVteXFxTXFxyXFxuXSojL2ksXG4gICAgICBhbGlhczogJ2J1aWx0aW4nXG4gICAgfSxcbiAgICBudW1iZXI6IC8oPzooPzpcXGJcXGQrKD86XFwuXFxkKyk/fFxcLlxcZCspKD86RVsrLV0/XFxkKyk/fCZbSE9dW1xcZEEtRl0rKSg/OlU/W0lMU118W0ZSRF0pPy9pLFxuICAgIGJvb2xlYW46IC9cXGIoPzpUcnVlfEZhbHNlfE5vdGhpbmcpXFxiL2ksXG4gICAga2V5d29yZDogL1xcYig/OkFkZEhhbmRsZXJ8QWRkcmVzc09mfEFsaWFzfEFuZCg/OkFsc28pP3xBc3xCb29sZWFufEJ5UmVmfEJ5dGV8QnlWYWx8Q2FsbHxDYXNlfENhdGNofEMoPzpCb29sfEJ5dGV8Q2hhcnxEYXRlfERibHxEZWN8SW50fExuZ3xPYmp8U0J5dGV8U2hvcnR8U25nfFN0cnxUeXBlfFVJbnR8VUxuZ3xVU2hvcnQpfENoYXJ8Q2xhc3N8Q29uc3R8Q29udGludWV8RGF0ZXxEZWNpbWFsfERlY2xhcmV8RGVmYXVsdHxEZWxlZ2F0ZXxEaW18RGlyZWN0Q2FzdHxEb3xEb3VibGV8RWFjaHxFbHNlKD86SWYpP3xFbmQoPzpJZik/fEVudW18RXJhc2V8RXJyb3J8RXZlbnR8RXhpdHxGaW5hbGx5fEZvcnxGcmllbmR8RnVuY3Rpb258R2V0KD86VHlwZXxYTUxOYW1lc3BhY2UpP3xHbG9iYWx8R29TdWJ8R29Ub3xIYW5kbGVzfElmfEltcGxlbWVudHN8SW1wb3J0c3xJbnxJbmhlcml0c3xJbnRlZ2VyfEludGVyZmFjZXxJc3xJc05vdHxMZXR8TGlifExpa2V8TG9uZ3xMb29wfE1lfE1vZHxNb2R1bGV8TXVzdCg/OkluaGVyaXR8T3ZlcnJpZGUpfE15KD86QmFzZXxDbGFzcyl8TmFtZXNwYWNlfE5hcnJvd2luZ3xOZXd8TmV4dHxOb3QoPzpJbmhlcml0YWJsZXxPdmVycmlkYWJsZSk/fE9iamVjdHxPZnxPbnxPcGVyYXRvcnxPcHRpb24oPzphbCk/fE9yKD86RWxzZSk/fE91dHxPdmVybG9hZHN8T3ZlcnJpZGFibGV8T3ZlcnJpZGVzfFBhcmFtQXJyYXl8UGFydGlhbHxQcml2YXRlfFByb3BlcnR5fFByb3RlY3RlZHxQdWJsaWN8UmFpc2VFdmVudHxSZWFkT25seXxSZURpbXxSZW1vdmVIYW5kbGVyfFJlc3VtZXxSZXR1cm58U0J5dGV8U2VsZWN0fFNldHxTaGFkb3dzfFNoYXJlZHxzaG9ydHxTaW5nbGV8U3RhdGljfFN0ZXB8U3RvcHxTdHJpbmd8U3RydWN0dXJlfFN1YnxTeW5jTG9ja3xUaGVufFRocm93fFRvfFRyeXxUcnlDYXN0fFR5cGVPZnxVKD86SW50ZWdlcnxMb25nfFNob3J0KXxVc2luZ3xWYXJpYW50fFdlbmR8V2hlbnxXaGlsZXxXaWRlbmluZ3xXaXRoKD86RXZlbnRzKT98V3JpdGVPbmx5fFhvcilcXGIvaSxcbiAgICBvcGVyYXRvcjogW1xuICAgICAgL1srXFwtKi9cXFxcXjw9PiYjQCQlIV0vLFxuICAgICAge1xuICAgICAgICBwYXR0ZXJuOiAvKFteXFxTXFxyXFxuXSlfKD89W15cXFNcXHJcXG5dKltcXHJcXG5dKS8sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgIH1cbiAgICBdLFxuICAgIHB1bmN0dWF0aW9uOiAvW3t9KCkuLDo/XS9cbiAgfVxuICBQcmlzbS5sYW5ndWFnZXMudmIgPSBQcmlzbS5sYW5ndWFnZXNbJ3Zpc3VhbC1iYXNpYyddXG59XG4iXSwic291cmNlUm9vdCI6IiJ9
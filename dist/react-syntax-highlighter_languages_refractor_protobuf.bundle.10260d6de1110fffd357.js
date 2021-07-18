(self["webpackChunkheaderproject"] = self["webpackChunkheaderproject"] || []).push([["react-syntax-highlighter_languages_refractor_protobuf"],{

/***/ "./node_modules/refractor/lang/protobuf.js":
/*!*************************************************!*\
  !*** ./node_modules/refractor/lang/protobuf.js ***!
  \*************************************************/
/***/ ((module) => {

"use strict";


module.exports = protobuf
protobuf.displayName = 'protobuf'
protobuf.aliases = []
function protobuf(Prism) {
  ;(function(Prism) {
    var builtinTypes = /\b(?:double|float|[su]?int(?:32|64)|s?fixed(?:32|64)|bool|string|bytes)\b/
    Prism.languages.protobuf = Prism.languages.extend('clike', {
      'class-name': {
        pattern: /(\b(?:enum|extend|message|service)\s+)[A-Za-z_]\w*(?=\s*\{)/,
        lookbehind: true
      },
      keyword: /\b(?:enum|extend|extensions|import|message|oneof|option|optional|package|public|repeated|required|reserved|service|syntax|to)\b/
    })
    Prism.languages.insertBefore('protobuf', 'operator', {
      map: {
        pattern: /\bmap<\s*[\w.]+\s*,\s*[\w.]+\s*>(?=\s+[A-Za-z_]\w*\s*[=;])/,
        alias: 'class-name',
        inside: {
          punctuation: /[<>.,]/,
          builtin: builtinTypes
        }
      },
      builtin: builtinTypes,
      'positional-class-name': {
        pattern: /(?:\b|\B\.)[A-Za-z_]\w*(?:\.[A-Za-z_]\w*)*(?=\s+[A-Za-z_]\w*\s*[=;])/,
        alias: 'class-name',
        inside: {
          punctuation: /\./
        }
      },
      annotation: {
        pattern: /(\[\s*)[A-Za-z_]\w*(?=\s*=)/,
        lookbehind: true
      }
    })
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFkZXJwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL3Byb3RvYnVmLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLDRFQUE0RTtBQUM1RTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsMEVBQTBFO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLG9GQUFvRjtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0giLCJmaWxlIjoicmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyX2xhbmd1YWdlc19yZWZyYWN0b3JfcHJvdG9idWYuYnVuZGxlLjEwMjYwZDZkZTExMTBmZmZkMzU3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gcHJvdG9idWZcbnByb3RvYnVmLmRpc3BsYXlOYW1lID0gJ3Byb3RvYnVmJ1xucHJvdG9idWYuYWxpYXNlcyA9IFtdXG5mdW5jdGlvbiBwcm90b2J1ZihQcmlzbSkge1xuICA7KGZ1bmN0aW9uKFByaXNtKSB7XG4gICAgdmFyIGJ1aWx0aW5UeXBlcyA9IC9cXGIoPzpkb3VibGV8ZmxvYXR8W3N1XT9pbnQoPzozMnw2NCl8cz9maXhlZCg/OjMyfDY0KXxib29sfHN0cmluZ3xieXRlcylcXGIvXG4gICAgUHJpc20ubGFuZ3VhZ2VzLnByb3RvYnVmID0gUHJpc20ubGFuZ3VhZ2VzLmV4dGVuZCgnY2xpa2UnLCB7XG4gICAgICAnY2xhc3MtbmFtZSc6IHtcbiAgICAgICAgcGF0dGVybjogLyhcXGIoPzplbnVtfGV4dGVuZHxtZXNzYWdlfHNlcnZpY2UpXFxzKylbQS1aYS16X11cXHcqKD89XFxzKlxceykvLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgICB9LFxuICAgICAga2V5d29yZDogL1xcYig/OmVudW18ZXh0ZW5kfGV4dGVuc2lvbnN8aW1wb3J0fG1lc3NhZ2V8b25lb2Z8b3B0aW9ufG9wdGlvbmFsfHBhY2thZ2V8cHVibGljfHJlcGVhdGVkfHJlcXVpcmVkfHJlc2VydmVkfHNlcnZpY2V8c3ludGF4fHRvKVxcYi9cbiAgICB9KVxuICAgIFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ3Byb3RvYnVmJywgJ29wZXJhdG9yJywge1xuICAgICAgbWFwOiB7XG4gICAgICAgIHBhdHRlcm46IC9cXGJtYXA8XFxzKltcXHcuXStcXHMqLFxccypbXFx3Ll0rXFxzKj4oPz1cXHMrW0EtWmEtel9dXFx3KlxccypbPTtdKS8sXG4gICAgICAgIGFsaWFzOiAnY2xhc3MtbmFtZScsXG4gICAgICAgIGluc2lkZToge1xuICAgICAgICAgIHB1bmN0dWF0aW9uOiAvWzw+LixdLyxcbiAgICAgICAgICBidWlsdGluOiBidWlsdGluVHlwZXNcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGJ1aWx0aW46IGJ1aWx0aW5UeXBlcyxcbiAgICAgICdwb3NpdGlvbmFsLWNsYXNzLW5hbWUnOiB7XG4gICAgICAgIHBhdHRlcm46IC8oPzpcXGJ8XFxCXFwuKVtBLVphLXpfXVxcdyooPzpcXC5bQS1aYS16X11cXHcqKSooPz1cXHMrW0EtWmEtel9dXFx3KlxccypbPTtdKS8sXG4gICAgICAgIGFsaWFzOiAnY2xhc3MtbmFtZScsXG4gICAgICAgIGluc2lkZToge1xuICAgICAgICAgIHB1bmN0dWF0aW9uOiAvXFwuL1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgYW5ub3RhdGlvbjoge1xuICAgICAgICBwYXR0ZXJuOiAvKFxcW1xccyopW0EtWmEtel9dXFx3Kig/PVxccyo9KS8sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgIH1cbiAgICB9KVxuICB9KShQcmlzbSlcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
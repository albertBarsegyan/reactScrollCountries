(self["webpackChunkheaderproject"] = self["webpackChunkheaderproject"] || []).push([["react-syntax-highlighter_languages_refractor_fsharp"],{

/***/ "./node_modules/refractor/lang/fsharp.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/fsharp.js ***!
  \***********************************************/
/***/ ((module) => {

"use strict";


module.exports = fsharp
fsharp.displayName = 'fsharp'
fsharp.aliases = []
function fsharp(Prism) {
  Prism.languages.fsharp = Prism.languages.extend('clike', {
    comment: [
      {
        pattern: /(^|[^\\])\(\*[\s\S]*?\*\)/,
        lookbehind: true
      },
      {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: true
      }
    ],
    string: {
      pattern: /(?:"""[\s\S]*?"""|@"(?:""|[^"])*"|"(?:\\[\s\S]|[^\\"])*")B?|'(?:[^\\']|\\(?:.|\d{3}|x[a-fA-F\d]{2}|u[a-fA-F\d]{4}|U[a-fA-F\d]{8}))'B?/,
      greedy: true
    },
    'class-name': {
      pattern: /(\b(?:exception|inherit|interface|new|of|type)\s+|\w\s*:\s*|\s:\??>\s*)[.\w]+\b(?:\s*(?:->|\*)\s*[.\w]+\b)*(?!\s*[:.])/,
      lookbehind: true,
      inside: {
        operator: /->|\*/,
        punctuation: /\./
      }
    },
    keyword: /\b(?:let|return|use|yield)(?:!\B|\b)|\b(abstract|and|as|assert|base|begin|class|default|delegate|do|done|downcast|downto|elif|else|end|exception|extern|false|finally|for|fun|function|global|if|in|inherit|inline|interface|internal|lazy|match|member|module|mutable|namespace|new|not|null|of|open|or|override|private|public|rec|select|static|struct|then|to|true|try|type|upcast|val|void|when|while|with|asr|land|lor|lsl|lsr|lxor|mod|sig|atomic|break|checked|component|const|constraint|constructor|continue|eager|event|external|fixed|functor|include|method|mixin|object|parallel|process|protected|pure|sealed|tailcall|trait|virtual|volatile)\b/,
    number: [
      /\b0x[\da-fA-F]+(?:un|lf|LF)?\b/,
      /\b0b[01]+(?:y|uy)?\b/,
      /(?:\b\d+\.?\d*|\B\.\d+)(?:[fm]|e[+-]?\d+)?\b/i,
      /\b\d+(?:[IlLsy]|u[lsy]?|UL)?\b/
    ],
    operator: /([<>~&^])\1\1|([*.:<>&])\2|<-|->|[!=:]=|<?\|{1,3}>?|\??(?:<=|>=|<>|[-+*/%=<>])\??|[!?^&]|~[+~-]|:>|:\?>?/
  })
  Prism.languages.insertBefore('fsharp', 'keyword', {
    preprocessor: {
      pattern: /^[^\r\n\S]*#.*/m,
      alias: 'property',
      inside: {
        directive: {
          pattern: /(\s*#)\b(?:else|endif|if|light|line|nowarn)\b/,
          lookbehind: true,
          alias: 'keyword'
        }
      }
    }
  })
  Prism.languages.insertBefore('fsharp', 'punctuation', {
    'computation-expression': {
      pattern: /[_a-z]\w*(?=\s*\{)/i,
      alias: 'keyword'
    }
  })
  Prism.languages.insertBefore('fsharp', 'string', {
    annotation: {
      pattern: /\[<.+?>\]/,
      inside: {
        punctuation: /^\[<|>\]$/,
        'class-name': {
          pattern: /^\w+$|(^|;\s*)[A-Z]\w*(?=\()/,
          lookbehind: true
        },
        'annotation-content': {
          pattern: /[\s\S]+/,
          inside: Prism.languages.fsharp
        }
      }
    }
  })
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFkZXJwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL2ZzaGFycC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUdBQWlHLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUU7QUFDaEo7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0REFBNEQsSUFBSTtBQUNoRSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIIiwiZmlsZSI6InJlYWN0LXN5bnRheC1oaWdobGlnaHRlcl9sYW5ndWFnZXNfcmVmcmFjdG9yX2ZzaGFycC5idW5kbGUuMTAyNjBkNmRlMTExMGZmZmQzNTcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBmc2hhcnBcbmZzaGFycC5kaXNwbGF5TmFtZSA9ICdmc2hhcnAnXG5mc2hhcnAuYWxpYXNlcyA9IFtdXG5mdW5jdGlvbiBmc2hhcnAoUHJpc20pIHtcbiAgUHJpc20ubGFuZ3VhZ2VzLmZzaGFycCA9IFByaXNtLmxhbmd1YWdlcy5leHRlbmQoJ2NsaWtlJywge1xuICAgIGNvbW1lbnQ6IFtcbiAgICAgIHtcbiAgICAgICAgcGF0dGVybjogLyhefFteXFxcXF0pXFwoXFwqW1xcc1xcU10qP1xcKlxcKS8sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdHRlcm46IC8oXnxbXlxcXFw6XSlcXC9cXC8uKi8sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgIH1cbiAgICBdLFxuICAgIHN0cmluZzoge1xuICAgICAgcGF0dGVybjogLyg/OlwiXCJcIltcXHNcXFNdKj9cIlwiXCJ8QFwiKD86XCJcInxbXlwiXSkqXCJ8XCIoPzpcXFxcW1xcc1xcU118W15cXFxcXCJdKSpcIilCP3wnKD86W15cXFxcJ118XFxcXCg/Oi58XFxkezN9fHhbYS1mQS1GXFxkXXsyfXx1W2EtZkEtRlxcZF17NH18VVthLWZBLUZcXGRdezh9KSknQj8vLFxuICAgICAgZ3JlZWR5OiB0cnVlXG4gICAgfSxcbiAgICAnY2xhc3MtbmFtZSc6IHtcbiAgICAgIHBhdHRlcm46IC8oXFxiKD86ZXhjZXB0aW9ufGluaGVyaXR8aW50ZXJmYWNlfG5ld3xvZnx0eXBlKVxccyt8XFx3XFxzKjpcXHMqfFxcczpcXD8/PlxccyopWy5cXHddK1xcYig/OlxccyooPzotPnxcXCopXFxzKlsuXFx3XStcXGIpKig/IVxccypbOi5dKS8sXG4gICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgaW5zaWRlOiB7XG4gICAgICAgIG9wZXJhdG9yOiAvLT58XFwqLyxcbiAgICAgICAgcHVuY3R1YXRpb246IC9cXC4vXG4gICAgICB9XG4gICAgfSxcbiAgICBrZXl3b3JkOiAvXFxiKD86bGV0fHJldHVybnx1c2V8eWllbGQpKD86IVxcQnxcXGIpfFxcYihhYnN0cmFjdHxhbmR8YXN8YXNzZXJ0fGJhc2V8YmVnaW58Y2xhc3N8ZGVmYXVsdHxkZWxlZ2F0ZXxkb3xkb25lfGRvd25jYXN0fGRvd250b3xlbGlmfGVsc2V8ZW5kfGV4Y2VwdGlvbnxleHRlcm58ZmFsc2V8ZmluYWxseXxmb3J8ZnVufGZ1bmN0aW9ufGdsb2JhbHxpZnxpbnxpbmhlcml0fGlubGluZXxpbnRlcmZhY2V8aW50ZXJuYWx8bGF6eXxtYXRjaHxtZW1iZXJ8bW9kdWxlfG11dGFibGV8bmFtZXNwYWNlfG5ld3xub3R8bnVsbHxvZnxvcGVufG9yfG92ZXJyaWRlfHByaXZhdGV8cHVibGljfHJlY3xzZWxlY3R8c3RhdGljfHN0cnVjdHx0aGVufHRvfHRydWV8dHJ5fHR5cGV8dXBjYXN0fHZhbHx2b2lkfHdoZW58d2hpbGV8d2l0aHxhc3J8bGFuZHxsb3J8bHNsfGxzcnxseG9yfG1vZHxzaWd8YXRvbWljfGJyZWFrfGNoZWNrZWR8Y29tcG9uZW50fGNvbnN0fGNvbnN0cmFpbnR8Y29uc3RydWN0b3J8Y29udGludWV8ZWFnZXJ8ZXZlbnR8ZXh0ZXJuYWx8Zml4ZWR8ZnVuY3RvcnxpbmNsdWRlfG1ldGhvZHxtaXhpbnxvYmplY3R8cGFyYWxsZWx8cHJvY2Vzc3xwcm90ZWN0ZWR8cHVyZXxzZWFsZWR8dGFpbGNhbGx8dHJhaXR8dmlydHVhbHx2b2xhdGlsZSlcXGIvLFxuICAgIG51bWJlcjogW1xuICAgICAgL1xcYjB4W1xcZGEtZkEtRl0rKD86dW58bGZ8TEYpP1xcYi8sXG4gICAgICAvXFxiMGJbMDFdKyg/Onl8dXkpP1xcYi8sXG4gICAgICAvKD86XFxiXFxkK1xcLj9cXGQqfFxcQlxcLlxcZCspKD86W2ZtXXxlWystXT9cXGQrKT9cXGIvaSxcbiAgICAgIC9cXGJcXGQrKD86W0lsTHN5XXx1W2xzeV0/fFVMKT9cXGIvXG4gICAgXSxcbiAgICBvcGVyYXRvcjogLyhbPD5+Jl5dKVxcMVxcMXwoWyouOjw+Jl0pXFwyfDwtfC0+fFshPTpdPXw8P1xcfHsxLDN9Pj98XFw/Pyg/Ojw9fD49fDw+fFstKyovJT08Pl0pXFw/P3xbIT9eJl18flsrfi1dfDo+fDpcXD8+Py9cbiAgfSlcbiAgUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnZnNoYXJwJywgJ2tleXdvcmQnLCB7XG4gICAgcHJlcHJvY2Vzc29yOiB7XG4gICAgICBwYXR0ZXJuOiAvXlteXFxyXFxuXFxTXSojLiovbSxcbiAgICAgIGFsaWFzOiAncHJvcGVydHknLFxuICAgICAgaW5zaWRlOiB7XG4gICAgICAgIGRpcmVjdGl2ZToge1xuICAgICAgICAgIHBhdHRlcm46IC8oXFxzKiMpXFxiKD86ZWxzZXxlbmRpZnxpZnxsaWdodHxsaW5lfG5vd2FybilcXGIvLFxuICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgICAgYWxpYXM6ICdrZXl3b3JkJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KVxuICBQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdmc2hhcnAnLCAncHVuY3R1YXRpb24nLCB7XG4gICAgJ2NvbXB1dGF0aW9uLWV4cHJlc3Npb24nOiB7XG4gICAgICBwYXR0ZXJuOiAvW19hLXpdXFx3Kig/PVxccypcXHspL2ksXG4gICAgICBhbGlhczogJ2tleXdvcmQnXG4gICAgfVxuICB9KVxuICBQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdmc2hhcnAnLCAnc3RyaW5nJywge1xuICAgIGFubm90YXRpb246IHtcbiAgICAgIHBhdHRlcm46IC9cXFs8Lis/PlxcXS8sXG4gICAgICBpbnNpZGU6IHtcbiAgICAgICAgcHVuY3R1YXRpb246IC9eXFxbPHw+XFxdJC8sXG4gICAgICAgICdjbGFzcy1uYW1lJzoge1xuICAgICAgICAgIHBhdHRlcm46IC9eXFx3KyR8KF58O1xccyopW0EtWl1cXHcqKD89XFwoKS8sXG4gICAgICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICAnYW5ub3RhdGlvbi1jb250ZW50Jzoge1xuICAgICAgICAgIHBhdHRlcm46IC9bXFxzXFxTXSsvLFxuICAgICAgICAgIGluc2lkZTogUHJpc20ubGFuZ3VhZ2VzLmZzaGFycFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
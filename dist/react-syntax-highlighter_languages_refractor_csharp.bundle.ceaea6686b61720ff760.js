(self["webpackChunkheaderproject"] = self["webpackChunkheaderproject"] || []).push([["react-syntax-highlighter_languages_refractor_csharp"],{

/***/ "./node_modules/refractor/lang/csharp.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/csharp.js ***!
  \***********************************************/
/***/ ((module) => {

"use strict";


module.exports = csharp
csharp.displayName = 'csharp'
csharp.aliases = ['dotnet', 'cs']
function csharp(Prism) {
  Prism.languages.csharp = Prism.languages.extend('clike', {
    keyword: /\b(?:abstract|add|alias|as|ascending|async|await|base|bool|break|byte|case|catch|char|checked|class|const|continue|decimal|default|delegate|descending|do|double|dynamic|else|enum|event|explicit|extern|false|finally|fixed|float|for|foreach|from|get|global|goto|group|if|implicit|in|int|interface|internal|into|is|join|let|lock|long|namespace|new|null|object|operator|orderby|out|override|params|partial|private|protected|public|readonly|ref|remove|return|sbyte|sealed|select|set|short|sizeof|stackalloc|static|string|struct|switch|this|throw|true|try|typeof|uint|ulong|unchecked|unsafe|ushort|using|value|var|virtual|void|volatile|where|while|yield)\b/,
    string: [
      {
        pattern: /@("|')(?:\1\1|\\[\s\S]|(?!\1)[^\\])*\1/,
        greedy: true
      },
      {
        pattern: /("|')(?:\\.|(?!\1)[^\\\r\n])*?\1/,
        greedy: true
      }
    ],
    'class-name': [
      {
        // (Foo bar, Bar baz)
        pattern: /\b[A-Z]\w*(?:\.\w+)*\b(?=\s+\w+)/,
        inside: {
          punctuation: /\./
        }
      },
      {
        // [Foo]
        pattern: /(\[)[A-Z]\w*(?:\.\w+)*\b/,
        lookbehind: true,
        inside: {
          punctuation: /\./
        }
      },
      {
        // class Foo : Bar
        pattern: /(\b(?:class|interface)\s+[A-Z]\w*(?:\.\w+)*\s*:\s*)[A-Z]\w*(?:\.\w+)*\b/,
        lookbehind: true,
        inside: {
          punctuation: /\./
        }
      },
      {
        // class Foo
        pattern: /((?:\b(?:class|interface|new)\s+)|(?:catch\s+\())[A-Z]\w*(?:\.\w+)*\b/,
        lookbehind: true,
        inside: {
          punctuation: /\./
        }
      }
    ],
    number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)f?/i,
    operator: />>=?|<<=?|[-=]>|([-+&|?])\1|~|[-+*/%&|^!=<>]=?/,
    punctuation: /\?\.?|::|[{}[\];(),.:]/
  })
  Prism.languages.insertBefore('csharp', 'class-name', {
    'generic-method': {
      pattern: /\w+\s*<[^>\r\n]+?>\s*(?=\()/,
      inside: {
        function: /^\w+/,
        'class-name': {
          pattern: /\b[A-Z]\w*(?:\.\w+)*\b/,
          inside: {
            punctuation: /\./
          }
        },
        keyword: Prism.languages.csharp.keyword,
        punctuation: /[<>(),.:]/
      }
    },
    preprocessor: {
      pattern: /(^\s*)#.*/m,
      lookbehind: true,
      alias: 'property',
      inside: {
        // highlight preprocessor directives as keywords
        directive: {
          pattern: /(\s*#)\b(?:define|elif|else|endif|endregion|error|if|line|pragma|region|undef|warning)\b/,
          lookbehind: true,
          alias: 'keyword'
        }
      }
    }
  })
  Prism.languages.dotnet = Prism.languages.cs = Prism.languages.csharp
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFkZXJwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL2NzaGFycC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixJQUFJO0FBQ2xDLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSIsImZpbGUiOiJyZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX3JlZnJhY3Rvcl9jc2hhcnAuYnVuZGxlLmNlYWVhNjY4NmI2MTcyMGZmNzYwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gY3NoYXJwXG5jc2hhcnAuZGlzcGxheU5hbWUgPSAnY3NoYXJwJ1xuY3NoYXJwLmFsaWFzZXMgPSBbJ2RvdG5ldCcsICdjcyddXG5mdW5jdGlvbiBjc2hhcnAoUHJpc20pIHtcbiAgUHJpc20ubGFuZ3VhZ2VzLmNzaGFycCA9IFByaXNtLmxhbmd1YWdlcy5leHRlbmQoJ2NsaWtlJywge1xuICAgIGtleXdvcmQ6IC9cXGIoPzphYnN0cmFjdHxhZGR8YWxpYXN8YXN8YXNjZW5kaW5nfGFzeW5jfGF3YWl0fGJhc2V8Ym9vbHxicmVha3xieXRlfGNhc2V8Y2F0Y2h8Y2hhcnxjaGVja2VkfGNsYXNzfGNvbnN0fGNvbnRpbnVlfGRlY2ltYWx8ZGVmYXVsdHxkZWxlZ2F0ZXxkZXNjZW5kaW5nfGRvfGRvdWJsZXxkeW5hbWljfGVsc2V8ZW51bXxldmVudHxleHBsaWNpdHxleHRlcm58ZmFsc2V8ZmluYWxseXxmaXhlZHxmbG9hdHxmb3J8Zm9yZWFjaHxmcm9tfGdldHxnbG9iYWx8Z290b3xncm91cHxpZnxpbXBsaWNpdHxpbnxpbnR8aW50ZXJmYWNlfGludGVybmFsfGludG98aXN8am9pbnxsZXR8bG9ja3xsb25nfG5hbWVzcGFjZXxuZXd8bnVsbHxvYmplY3R8b3BlcmF0b3J8b3JkZXJieXxvdXR8b3ZlcnJpZGV8cGFyYW1zfHBhcnRpYWx8cHJpdmF0ZXxwcm90ZWN0ZWR8cHVibGljfHJlYWRvbmx5fHJlZnxyZW1vdmV8cmV0dXJufHNieXRlfHNlYWxlZHxzZWxlY3R8c2V0fHNob3J0fHNpemVvZnxzdGFja2FsbG9jfHN0YXRpY3xzdHJpbmd8c3RydWN0fHN3aXRjaHx0aGlzfHRocm93fHRydWV8dHJ5fHR5cGVvZnx1aW50fHVsb25nfHVuY2hlY2tlZHx1bnNhZmV8dXNob3J0fHVzaW5nfHZhbHVlfHZhcnx2aXJ0dWFsfHZvaWR8dm9sYXRpbGV8d2hlcmV8d2hpbGV8eWllbGQpXFxiLyxcbiAgICBzdHJpbmc6IFtcbiAgICAgIHtcbiAgICAgICAgcGF0dGVybjogL0AoXCJ8JykoPzpcXDFcXDF8XFxcXFtcXHNcXFNdfCg/IVxcMSlbXlxcXFxdKSpcXDEvLFxuICAgICAgICBncmVlZHk6IHRydWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdHRlcm46IC8oXCJ8JykoPzpcXFxcLnwoPyFcXDEpW15cXFxcXFxyXFxuXSkqP1xcMS8sXG4gICAgICAgIGdyZWVkeTogdHJ1ZVxuICAgICAgfVxuICAgIF0sXG4gICAgJ2NsYXNzLW5hbWUnOiBbXG4gICAgICB7XG4gICAgICAgIC8vIChGb28gYmFyLCBCYXIgYmF6KVxuICAgICAgICBwYXR0ZXJuOiAvXFxiW0EtWl1cXHcqKD86XFwuXFx3KykqXFxiKD89XFxzK1xcdyspLyxcbiAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgcHVuY3R1YXRpb246IC9cXC4vXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIC8vIFtGb29dXG4gICAgICAgIHBhdHRlcm46IC8oXFxbKVtBLVpdXFx3Kig/OlxcLlxcdyspKlxcYi8sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgIGluc2lkZToge1xuICAgICAgICAgIHB1bmN0dWF0aW9uOiAvXFwuL1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAvLyBjbGFzcyBGb28gOiBCYXJcbiAgICAgICAgcGF0dGVybjogLyhcXGIoPzpjbGFzc3xpbnRlcmZhY2UpXFxzK1tBLVpdXFx3Kig/OlxcLlxcdyspKlxccyo6XFxzKilbQS1aXVxcdyooPzpcXC5cXHcrKSpcXGIvLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICBwdW5jdHVhdGlvbjogL1xcLi9cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgLy8gY2xhc3MgRm9vXG4gICAgICAgIHBhdHRlcm46IC8oKD86XFxiKD86Y2xhc3N8aW50ZXJmYWNlfG5ldylcXHMrKXwoPzpjYXRjaFxccytcXCgpKVtBLVpdXFx3Kig/OlxcLlxcdyspKlxcYi8sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgIGluc2lkZToge1xuICAgICAgICAgIHB1bmN0dWF0aW9uOiAvXFwuL1xuICAgICAgICB9XG4gICAgICB9XG4gICAgXSxcbiAgICBudW1iZXI6IC9cXGIweFtcXGRhLWZdK1xcYnwoPzpcXGJcXGQrXFwuP1xcZCp8XFxCXFwuXFxkKylmPy9pLFxuICAgIG9wZXJhdG9yOiAvPj49P3w8PD0/fFstPV0+fChbLSsmfD9dKVxcMXx+fFstKyovJSZ8XiE9PD5dPT8vLFxuICAgIHB1bmN0dWF0aW9uOiAvXFw/XFwuP3w6Onxbe31bXFxdOygpLC46XS9cbiAgfSlcbiAgUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnY3NoYXJwJywgJ2NsYXNzLW5hbWUnLCB7XG4gICAgJ2dlbmVyaWMtbWV0aG9kJzoge1xuICAgICAgcGF0dGVybjogL1xcdytcXHMqPFtePlxcclxcbl0rPz5cXHMqKD89XFwoKS8sXG4gICAgICBpbnNpZGU6IHtcbiAgICAgICAgZnVuY3Rpb246IC9eXFx3Ky8sXG4gICAgICAgICdjbGFzcy1uYW1lJzoge1xuICAgICAgICAgIHBhdHRlcm46IC9cXGJbQS1aXVxcdyooPzpcXC5cXHcrKSpcXGIvLFxuICAgICAgICAgIGluc2lkZToge1xuICAgICAgICAgICAgcHVuY3R1YXRpb246IC9cXC4vXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBrZXl3b3JkOiBQcmlzbS5sYW5ndWFnZXMuY3NoYXJwLmtleXdvcmQsXG4gICAgICAgIHB1bmN0dWF0aW9uOiAvWzw+KCksLjpdL1xuICAgICAgfVxuICAgIH0sXG4gICAgcHJlcHJvY2Vzc29yOiB7XG4gICAgICBwYXR0ZXJuOiAvKF5cXHMqKSMuKi9tLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgIGFsaWFzOiAncHJvcGVydHknLFxuICAgICAgaW5zaWRlOiB7XG4gICAgICAgIC8vIGhpZ2hsaWdodCBwcmVwcm9jZXNzb3IgZGlyZWN0aXZlcyBhcyBrZXl3b3Jkc1xuICAgICAgICBkaXJlY3RpdmU6IHtcbiAgICAgICAgICBwYXR0ZXJuOiAvKFxccyojKVxcYig/OmRlZmluZXxlbGlmfGVsc2V8ZW5kaWZ8ZW5kcmVnaW9ufGVycm9yfGlmfGxpbmV8cHJhZ21hfHJlZ2lvbnx1bmRlZnx3YXJuaW5nKVxcYi8sXG4gICAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgICBhbGlhczogJ2tleXdvcmQnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pXG4gIFByaXNtLmxhbmd1YWdlcy5kb3RuZXQgPSBQcmlzbS5sYW5ndWFnZXMuY3MgPSBQcmlzbS5sYW5ndWFnZXMuY3NoYXJwXG59XG4iXSwic291cmNlUm9vdCI6IiJ9
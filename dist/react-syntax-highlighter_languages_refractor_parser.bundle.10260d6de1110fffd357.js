(self["webpackChunkheaderproject"] = self["webpackChunkheaderproject"] || []).push([["react-syntax-highlighter_languages_refractor_parser"],{

/***/ "./node_modules/refractor/lang/parser.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/parser.js ***!
  \***********************************************/
/***/ ((module) => {

"use strict";


module.exports = parser
parser.displayName = 'parser'
parser.aliases = []
function parser(Prism) {
  ;(function(Prism) {
    var parser = (Prism.languages.parser = Prism.languages.extend('markup', {
      keyword: {
        pattern: /(^|[^^])(?:\^(?:case|eval|for|if|switch|throw)\b|@(?:BASE|CLASS|GET(?:_DEFAULT)?|OPTIONS|SET_DEFAULT|USE)\b)/,
        lookbehind: true
      },
      variable: {
        pattern: /(^|[^^])\B\$(?:\w+|(?=[.{]))(?:(?:\.|::?)\w+)*(?:\.|::?)?/,
        lookbehind: true,
        inside: {
          punctuation: /\.|:+/
        }
      },
      function: {
        pattern: /(^|[^^])\B[@^]\w+(?:(?:\.|::?)\w+)*(?:\.|::?)?/,
        lookbehind: true,
        inside: {
          keyword: {
            pattern: /(^@)(?:GET_|SET_)/,
            lookbehind: true
          },
          punctuation: /\.|:+/
        }
      },
      escape: {
        pattern: /\^(?:[$^;@()\[\]{}"':]|#[a-f\d]*)/i,
        alias: 'builtin'
      },
      punctuation: /[\[\](){};]/
    }))
    parser = Prism.languages.insertBefore('parser', 'keyword', {
      'parser-comment': {
        pattern: /(\s)#.*/,
        lookbehind: true,
        alias: 'comment'
      },
      expression: {
        // Allow for 3 levels of depth
        pattern: /(^|[^^])\((?:[^()]|\((?:[^()]|\((?:[^()])*\))*\))*\)/,
        greedy: true,
        lookbehind: true,
        inside: {
          string: {
            pattern: /(^|[^^])(["'])(?:(?!\2)[^^]|\^[\s\S])*\2/,
            lookbehind: true
          },
          keyword: parser.keyword,
          variable: parser.variable,
          function: parser.function,
          boolean: /\b(?:true|false)\b/,
          number: /\b(?:0x[a-f\d]+|\d+\.?\d*(?:e[+-]?\d+)?)\b/i,
          escape: parser.escape,
          operator: /[~+*\/\\%]|!(?:\|\|?|=)?|&&?|\|\|?|==|<[<=]?|>[>=]?|-[fd]?|\b(?:def|eq|ge|gt|in|is|le|lt|ne)\b/,
          punctuation: parser.punctuation
        }
      }
    })
    parser = Prism.languages.insertBefore(
      'inside',
      'punctuation',
      {
        expression: parser.expression,
        keyword: parser.keyword,
        variable: parser.variable,
        function: parser.function,
        escape: parser.escape,
        'parser-punctuation': {
          pattern: parser.punctuation,
          alias: 'punctuation'
        }
      },
      parser['tag'].inside['attr-value']
    )
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFkZXJwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL3BhcnNlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsMkJBQTJCLFNBQVM7QUFDcEM7QUFDQSxPQUFPO0FBQ1AsOEJBQThCO0FBQzlCLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsR0FBRztBQUNIIiwiZmlsZSI6InJlYWN0LXN5bnRheC1oaWdobGlnaHRlcl9sYW5ndWFnZXNfcmVmcmFjdG9yX3BhcnNlci5idW5kbGUuMTAyNjBkNmRlMTExMGZmZmQzNTcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBwYXJzZXJcbnBhcnNlci5kaXNwbGF5TmFtZSA9ICdwYXJzZXInXG5wYXJzZXIuYWxpYXNlcyA9IFtdXG5mdW5jdGlvbiBwYXJzZXIoUHJpc20pIHtcbiAgOyhmdW5jdGlvbihQcmlzbSkge1xuICAgIHZhciBwYXJzZXIgPSAoUHJpc20ubGFuZ3VhZ2VzLnBhcnNlciA9IFByaXNtLmxhbmd1YWdlcy5leHRlbmQoJ21hcmt1cCcsIHtcbiAgICAgIGtleXdvcmQ6IHtcbiAgICAgICAgcGF0dGVybjogLyhefFteXl0pKD86XFxeKD86Y2FzZXxldmFsfGZvcnxpZnxzd2l0Y2h8dGhyb3cpXFxifEAoPzpCQVNFfENMQVNTfEdFVCg/Ol9ERUZBVUxUKT98T1BUSU9OU3xTRVRfREVGQVVMVHxVU0UpXFxiKS8sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgIH0sXG4gICAgICB2YXJpYWJsZToge1xuICAgICAgICBwYXR0ZXJuOiAvKF58W15eXSlcXEJcXCQoPzpcXHcrfCg/PVsue10pKSg/Oig/OlxcLnw6Oj8pXFx3KykqKD86XFwufDo6Pyk/LyxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgcHVuY3R1YXRpb246IC9cXC58OisvXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBmdW5jdGlvbjoge1xuICAgICAgICBwYXR0ZXJuOiAvKF58W15eXSlcXEJbQF5dXFx3Kyg/Oig/OlxcLnw6Oj8pXFx3KykqKD86XFwufDo6Pyk/LyxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAga2V5d29yZDoge1xuICAgICAgICAgICAgcGF0dGVybjogLyheQCkoPzpHRVRffFNFVF8pLyxcbiAgICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHB1bmN0dWF0aW9uOiAvXFwufDorL1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZXNjYXBlOiB7XG4gICAgICAgIHBhdHRlcm46IC9cXF4oPzpbJF47QCgpXFxbXFxde31cIic6XXwjW2EtZlxcZF0qKS9pLFxuICAgICAgICBhbGlhczogJ2J1aWx0aW4nXG4gICAgICB9LFxuICAgICAgcHVuY3R1YXRpb246IC9bXFxbXFxdKCl7fTtdL1xuICAgIH0pKVxuICAgIHBhcnNlciA9IFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ3BhcnNlcicsICdrZXl3b3JkJywge1xuICAgICAgJ3BhcnNlci1jb21tZW50Jzoge1xuICAgICAgICBwYXR0ZXJuOiAvKFxccykjLiovLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICBhbGlhczogJ2NvbW1lbnQnXG4gICAgICB9LFxuICAgICAgZXhwcmVzc2lvbjoge1xuICAgICAgICAvLyBBbGxvdyBmb3IgMyBsZXZlbHMgb2YgZGVwdGhcbiAgICAgICAgcGF0dGVybjogLyhefFteXl0pXFwoKD86W14oKV18XFwoKD86W14oKV18XFwoKD86W14oKV0pKlxcKSkqXFwpKSpcXCkvLFxuICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgIGluc2lkZToge1xuICAgICAgICAgIHN0cmluZzoge1xuICAgICAgICAgICAgcGF0dGVybjogLyhefFteXl0pKFtcIiddKSg/Oig/IVxcMilbXl5dfFxcXltcXHNcXFNdKSpcXDIvLFxuICAgICAgICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAga2V5d29yZDogcGFyc2VyLmtleXdvcmQsXG4gICAgICAgICAgdmFyaWFibGU6IHBhcnNlci52YXJpYWJsZSxcbiAgICAgICAgICBmdW5jdGlvbjogcGFyc2VyLmZ1bmN0aW9uLFxuICAgICAgICAgIGJvb2xlYW46IC9cXGIoPzp0cnVlfGZhbHNlKVxcYi8sXG4gICAgICAgICAgbnVtYmVyOiAvXFxiKD86MHhbYS1mXFxkXSt8XFxkK1xcLj9cXGQqKD86ZVsrLV0/XFxkKyk/KVxcYi9pLFxuICAgICAgICAgIGVzY2FwZTogcGFyc2VyLmVzY2FwZSxcbiAgICAgICAgICBvcGVyYXRvcjogL1t+KypcXC9cXFxcJV18ISg/OlxcfFxcfD98PSk/fCYmP3xcXHxcXHw/fD09fDxbPD1dP3w+Wz49XT98LVtmZF0/fFxcYig/OmRlZnxlcXxnZXxndHxpbnxpc3xsZXxsdHxuZSlcXGIvLFxuICAgICAgICAgIHB1bmN0dWF0aW9uOiBwYXJzZXIucHVuY3R1YXRpb25cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gICAgcGFyc2VyID0gUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZShcbiAgICAgICdpbnNpZGUnLFxuICAgICAgJ3B1bmN0dWF0aW9uJyxcbiAgICAgIHtcbiAgICAgICAgZXhwcmVzc2lvbjogcGFyc2VyLmV4cHJlc3Npb24sXG4gICAgICAgIGtleXdvcmQ6IHBhcnNlci5rZXl3b3JkLFxuICAgICAgICB2YXJpYWJsZTogcGFyc2VyLnZhcmlhYmxlLFxuICAgICAgICBmdW5jdGlvbjogcGFyc2VyLmZ1bmN0aW9uLFxuICAgICAgICBlc2NhcGU6IHBhcnNlci5lc2NhcGUsXG4gICAgICAgICdwYXJzZXItcHVuY3R1YXRpb24nOiB7XG4gICAgICAgICAgcGF0dGVybjogcGFyc2VyLnB1bmN0dWF0aW9uLFxuICAgICAgICAgIGFsaWFzOiAncHVuY3R1YXRpb24nXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBwYXJzZXJbJ3RhZyddLmluc2lkZVsnYXR0ci12YWx1ZSddXG4gICAgKVxuICB9KShQcmlzbSlcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
(self["webpackChunkheaderproject"] = self["webpackChunkheaderproject"] || []).push([["react-syntax-highlighter_languages_refractor_xquery"],{

/***/ "./node_modules/refractor/lang/xquery.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/xquery.js ***!
  \***********************************************/
/***/ ((module) => {

"use strict";


module.exports = xquery
xquery.displayName = 'xquery'
xquery.aliases = []
function xquery(Prism) {
  ;(function(Prism) {
    Prism.languages.xquery = Prism.languages.extend('markup', {
      'xquery-comment': {
        pattern: /\(:[\s\S]*?:\)/,
        greedy: true,
        alias: 'comment'
      },
      string: {
        pattern: /(["'])(?:\1\1|(?!\1)[\s\S])*\1/,
        greedy: true
      },
      extension: {
        pattern: /\(#.+?#\)/,
        alias: 'symbol'
      },
      variable: /\$[\w-:]+/,
      axis: {
        pattern: /(^|[^-])(?:ancestor(?:-or-self)?|attribute|child|descendant(?:-or-self)?|following(?:-sibling)?|parent|preceding(?:-sibling)?|self)(?=::)/,
        lookbehind: true,
        alias: 'operator'
      },
      'keyword-operator': {
        pattern: /(^|[^:-])\b(?:and|castable as|div|eq|except|ge|gt|idiv|instance of|intersect|is|le|lt|mod|ne|or|union)\b(?=$|[^:-])/,
        lookbehind: true,
        alias: 'operator'
      },
      keyword: {
        pattern: /(^|[^:-])\b(?:as|ascending|at|base-uri|boundary-space|case|cast as|collation|construction|copy-namespaces|declare|default|descending|else|empty (?:greatest|least)|encoding|every|external|for|function|if|import|in|inherit|lax|let|map|module|namespace|no-inherit|no-preserve|option|order(?: by|ed|ing)?|preserve|return|satisfies|schema|some|stable|strict|strip|then|to|treat as|typeswitch|unordered|validate|variable|version|where|xquery)\b(?=$|[^:-])/,
        lookbehind: true
      },
      function: /[\w-]+(?::[\w-]+)*(?=\s*\()/,
      'xquery-element': {
        pattern: /(element\s+)[\w-]+(?::[\w-]+)*/,
        lookbehind: true,
        alias: 'tag'
      },
      'xquery-attribute': {
        pattern: /(attribute\s+)[\w-]+(?::[\w-]+)*/,
        lookbehind: true,
        alias: 'attr-name'
      },
      builtin: {
        pattern: /(^|[^:-])\b(?:attribute|comment|document|element|processing-instruction|text|xs:(?:anyAtomicType|anyType|anyURI|base64Binary|boolean|byte|date|dateTime|dayTimeDuration|decimal|double|duration|ENTITIES|ENTITY|float|gDay|gMonth|gMonthDay|gYear|gYearMonth|hexBinary|ID|IDREFS?|int|integer|language|long|Name|NCName|negativeInteger|NMTOKENS?|nonNegativeInteger|nonPositiveInteger|normalizedString|NOTATION|positiveInteger|QName|short|string|time|token|unsigned(?:Byte|Int|Long|Short)|untyped(?:Atomic)?|yearMonthDuration))\b(?=$|[^:-])/,
        lookbehind: true
      },
      number: /\b\d+(?:\.\d+)?(?:E[+-]?\d+)?/,
      operator: [
        /[+*=?|@]|\.\.?|:=|!=|<[=<]?|>[=>]?/,
        {
          pattern: /(\s)-(?=\s)/,
          lookbehind: true
        }
      ],
      punctuation: /[[\](){},;:/]/
    })
    Prism.languages.xquery.tag.pattern = /<\/?(?!\d)[^\s>\/=$<%]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\[\s\S]|{(?!{)(?:{(?:{[^}]*}|[^}])*}|[^}])+}|(?!\1)[^\\])*\1|[^\s'">=]+))?)*\s*\/?>/i
    Prism.languages.xquery['tag'].inside[
      'attr-value'
    ].pattern = /=(?:("|')(?:\\[\s\S]|{(?!{)(?:{(?:{[^}]*}|[^}])*}|[^}])+}|(?!\1)[^\\])*\1|[^\s'">=]+)/i
    Prism.languages.xquery['tag'].inside['attr-value'].inside[
      'punctuation'
    ] = /^="|"$/
    Prism.languages.xquery['tag'].inside['attr-value'].inside['expression'] = {
      // Allow for two levels of nesting
      pattern: /{(?!{)(?:{(?:{[^}]*}|[^}])*}|[^}])+}/,
      inside: {
        rest: Prism.languages.xquery
      },
      alias: 'language-xquery'
    } // The following will handle plain text inside tags
    var stringifyToken = function(token) {
      if (typeof token === 'string') {
        return token
      }
      if (typeof token.content === 'string') {
        return token.content
      }
      return token.content.map(stringifyToken).join('')
    }
    var walkTokens = function(tokens) {
      var openedTags = []
      for (var i = 0; i < tokens.length; i++) {
        var token = tokens[i]
        var notTagNorBrace = false
        if (typeof token !== 'string') {
          if (
            token.type === 'tag' &&
            token.content[0] &&
            token.content[0].type === 'tag'
          ) {
            // We found a tag, now find its kind
            if (token.content[0].content[0].content === '</') {
              // Closing tag
              if (
                openedTags.length > 0 &&
                openedTags[openedTags.length - 1].tagName ===
                  stringifyToken(token.content[0].content[1])
              ) {
                // Pop matching opening tag
                openedTags.pop()
              }
            } else {
              if (token.content[token.content.length - 1].content === '/>') {
                // Autoclosed tag, ignore
              } else {
                // Opening tag
                openedTags.push({
                  tagName: stringifyToken(token.content[0].content[1]),
                  openedBraces: 0
                })
              }
            }
          } else if (
            openedTags.length > 0 &&
            token.type === 'punctuation' &&
            token.content === '{' && // Ignore `{{`
            (!tokens[i + 1] ||
              tokens[i + 1].type !== 'punctuation' ||
              tokens[i + 1].content !== '{') &&
            (!tokens[i - 1] ||
              tokens[i - 1].type !== 'plain-text' ||
              tokens[i - 1].content !== '{')
          ) {
            // Here we might have entered an XQuery expression inside a tag
            openedTags[openedTags.length - 1].openedBraces++
          } else if (
            openedTags.length > 0 &&
            openedTags[openedTags.length - 1].openedBraces > 0 &&
            token.type === 'punctuation' &&
            token.content === '}'
          ) {
            // Here we might have left an XQuery expression inside a tag
            openedTags[openedTags.length - 1].openedBraces--
          } else if (token.type !== 'comment') {
            notTagNorBrace = true
          }
        }
        if (notTagNorBrace || typeof token === 'string') {
          if (
            openedTags.length > 0 &&
            openedTags[openedTags.length - 1].openedBraces === 0
          ) {
            // Here we are inside a tag, and not inside an XQuery expression.
            // That's plain text: drop any tokens matched.
            var plainText = stringifyToken(token) // And merge text with adjacent text
            if (
              i < tokens.length - 1 &&
              (typeof tokens[i + 1] === 'string' ||
                tokens[i + 1].type === 'plain-text')
            ) {
              plainText += stringifyToken(tokens[i + 1])
              tokens.splice(i + 1, 1)
            }
            if (
              i > 0 &&
              (typeof tokens[i - 1] === 'string' ||
                tokens[i - 1].type === 'plain-text')
            ) {
              plainText = stringifyToken(tokens[i - 1]) + plainText
              tokens.splice(i - 1, 1)
              i--
            }
            if (/^\s+$/.test(plainText)) {
              tokens[i] = plainText
            } else {
              tokens[i] = new Prism.Token(
                'plain-text',
                plainText,
                null,
                plainText
              )
            }
          }
        }
        if (token.content && typeof token.content !== 'string') {
          walkTokens(token.content)
        }
      }
    }
    Prism.hooks.add('after-tokenize', function(env) {
      if (env.language !== 'xquery') {
        return
      }
      walkTokens(env.tokens)
    })
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFkZXJwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL3hxdWVyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixFQUFFO0FBQzlCLEtBQUs7QUFDTCwwR0FBMEcsSUFBSSxLQUFLLElBQUksR0FBRyxHQUFHLElBQUksSUFBSSxJQUFJLElBQUk7QUFDN0k7QUFDQTtBQUNBLHVDQUF1QyxJQUFJLEtBQUssSUFBSSxHQUFHLEdBQUcsSUFBSSxJQUFJLElBQUksSUFBSTtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLElBQUksS0FBSyxJQUFJLEdBQUcsR0FBRyxJQUFJLElBQUksSUFBSSxJQUFJO0FBQ3BEO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixtQkFBbUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxnQ0FBZ0Msa0JBQWtCO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIIiwiZmlsZSI6InJlYWN0LXN5bnRheC1oaWdobGlnaHRlcl9sYW5ndWFnZXNfcmVmcmFjdG9yX3hxdWVyeS5idW5kbGUuMTAyNjBkNmRlMTExMGZmZmQzNTcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSB4cXVlcnlcbnhxdWVyeS5kaXNwbGF5TmFtZSA9ICd4cXVlcnknXG54cXVlcnkuYWxpYXNlcyA9IFtdXG5mdW5jdGlvbiB4cXVlcnkoUHJpc20pIHtcbiAgOyhmdW5jdGlvbihQcmlzbSkge1xuICAgIFByaXNtLmxhbmd1YWdlcy54cXVlcnkgPSBQcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdtYXJrdXAnLCB7XG4gICAgICAneHF1ZXJ5LWNvbW1lbnQnOiB7XG4gICAgICAgIHBhdHRlcm46IC9cXCg6W1xcc1xcU10qPzpcXCkvLFxuICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgICAgIGFsaWFzOiAnY29tbWVudCdcbiAgICAgIH0sXG4gICAgICBzdHJpbmc6IHtcbiAgICAgICAgcGF0dGVybjogLyhbXCInXSkoPzpcXDFcXDF8KD8hXFwxKVtcXHNcXFNdKSpcXDEvLFxuICAgICAgICBncmVlZHk6IHRydWVcbiAgICAgIH0sXG4gICAgICBleHRlbnNpb246IHtcbiAgICAgICAgcGF0dGVybjogL1xcKCMuKz8jXFwpLyxcbiAgICAgICAgYWxpYXM6ICdzeW1ib2wnXG4gICAgICB9LFxuICAgICAgdmFyaWFibGU6IC9cXCRbXFx3LTpdKy8sXG4gICAgICBheGlzOiB7XG4gICAgICAgIHBhdHRlcm46IC8oXnxbXi1dKSg/OmFuY2VzdG9yKD86LW9yLXNlbGYpP3xhdHRyaWJ1dGV8Y2hpbGR8ZGVzY2VuZGFudCg/Oi1vci1zZWxmKT98Zm9sbG93aW5nKD86LXNpYmxpbmcpP3xwYXJlbnR8cHJlY2VkaW5nKD86LXNpYmxpbmcpP3xzZWxmKSg/PTo6KS8sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgIGFsaWFzOiAnb3BlcmF0b3InXG4gICAgICB9LFxuICAgICAgJ2tleXdvcmQtb3BlcmF0b3InOiB7XG4gICAgICAgIHBhdHRlcm46IC8oXnxbXjotXSlcXGIoPzphbmR8Y2FzdGFibGUgYXN8ZGl2fGVxfGV4Y2VwdHxnZXxndHxpZGl2fGluc3RhbmNlIG9mfGludGVyc2VjdHxpc3xsZXxsdHxtb2R8bmV8b3J8dW5pb24pXFxiKD89JHxbXjotXSkvLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICBhbGlhczogJ29wZXJhdG9yJ1xuICAgICAgfSxcbiAgICAgIGtleXdvcmQ6IHtcbiAgICAgICAgcGF0dGVybjogLyhefFteOi1dKVxcYig/OmFzfGFzY2VuZGluZ3xhdHxiYXNlLXVyaXxib3VuZGFyeS1zcGFjZXxjYXNlfGNhc3QgYXN8Y29sbGF0aW9ufGNvbnN0cnVjdGlvbnxjb3B5LW5hbWVzcGFjZXN8ZGVjbGFyZXxkZWZhdWx0fGRlc2NlbmRpbmd8ZWxzZXxlbXB0eSAoPzpncmVhdGVzdHxsZWFzdCl8ZW5jb2Rpbmd8ZXZlcnl8ZXh0ZXJuYWx8Zm9yfGZ1bmN0aW9ufGlmfGltcG9ydHxpbnxpbmhlcml0fGxheHxsZXR8bWFwfG1vZHVsZXxuYW1lc3BhY2V8bm8taW5oZXJpdHxuby1wcmVzZXJ2ZXxvcHRpb258b3JkZXIoPzogYnl8ZWR8aW5nKT98cHJlc2VydmV8cmV0dXJufHNhdGlzZmllc3xzY2hlbWF8c29tZXxzdGFibGV8c3RyaWN0fHN0cmlwfHRoZW58dG98dHJlYXQgYXN8dHlwZXN3aXRjaHx1bm9yZGVyZWR8dmFsaWRhdGV8dmFyaWFibGV8dmVyc2lvbnx3aGVyZXx4cXVlcnkpXFxiKD89JHxbXjotXSkvLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgICB9LFxuICAgICAgZnVuY3Rpb246IC9bXFx3LV0rKD86OltcXHctXSspKig/PVxccypcXCgpLyxcbiAgICAgICd4cXVlcnktZWxlbWVudCc6IHtcbiAgICAgICAgcGF0dGVybjogLyhlbGVtZW50XFxzKylbXFx3LV0rKD86OltcXHctXSspKi8sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgIGFsaWFzOiAndGFnJ1xuICAgICAgfSxcbiAgICAgICd4cXVlcnktYXR0cmlidXRlJzoge1xuICAgICAgICBwYXR0ZXJuOiAvKGF0dHJpYnV0ZVxccyspW1xcdy1dKyg/OjpbXFx3LV0rKSovLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICBhbGlhczogJ2F0dHItbmFtZSdcbiAgICAgIH0sXG4gICAgICBidWlsdGluOiB7XG4gICAgICAgIHBhdHRlcm46IC8oXnxbXjotXSlcXGIoPzphdHRyaWJ1dGV8Y29tbWVudHxkb2N1bWVudHxlbGVtZW50fHByb2Nlc3NpbmctaW5zdHJ1Y3Rpb258dGV4dHx4czooPzphbnlBdG9taWNUeXBlfGFueVR5cGV8YW55VVJJfGJhc2U2NEJpbmFyeXxib29sZWFufGJ5dGV8ZGF0ZXxkYXRlVGltZXxkYXlUaW1lRHVyYXRpb258ZGVjaW1hbHxkb3VibGV8ZHVyYXRpb258RU5USVRJRVN8RU5USVRZfGZsb2F0fGdEYXl8Z01vbnRofGdNb250aERheXxnWWVhcnxnWWVhck1vbnRofGhleEJpbmFyeXxJRHxJRFJFRlM/fGludHxpbnRlZ2VyfGxhbmd1YWdlfGxvbmd8TmFtZXxOQ05hbWV8bmVnYXRpdmVJbnRlZ2VyfE5NVE9LRU5TP3xub25OZWdhdGl2ZUludGVnZXJ8bm9uUG9zaXRpdmVJbnRlZ2VyfG5vcm1hbGl6ZWRTdHJpbmd8Tk9UQVRJT058cG9zaXRpdmVJbnRlZ2VyfFFOYW1lfHNob3J0fHN0cmluZ3x0aW1lfHRva2VufHVuc2lnbmVkKD86Qnl0ZXxJbnR8TG9uZ3xTaG9ydCl8dW50eXBlZCg/OkF0b21pYyk/fHllYXJNb250aER1cmF0aW9uKSlcXGIoPz0kfFteOi1dKS8sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgIH0sXG4gICAgICBudW1iZXI6IC9cXGJcXGQrKD86XFwuXFxkKyk/KD86RVsrLV0/XFxkKyk/LyxcbiAgICAgIG9wZXJhdG9yOiBbXG4gICAgICAgIC9bKyo9P3xAXXxcXC5cXC4/fDo9fCE9fDxbPTxdP3w+Wz0+XT8vLFxuICAgICAgICB7XG4gICAgICAgICAgcGF0dGVybjogLyhcXHMpLSg/PVxccykvLFxuICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIHB1bmN0dWF0aW9uOiAvW1tcXF0oKXt9LDs6L10vXG4gICAgfSlcbiAgICBQcmlzbS5sYW5ndWFnZXMueHF1ZXJ5LnRhZy5wYXR0ZXJuID0gLzxcXC8/KD8hXFxkKVteXFxzPlxcLz0kPCVdKyg/OlxccytbXlxccz5cXC89XSsoPzo9KD86KFwifCcpKD86XFxcXFtcXHNcXFNdfHsoPyF7KSg/OnsoPzp7W159XSp9fFtefV0pKn18W159XSkrfXwoPyFcXDEpW15cXFxcXSkqXFwxfFteXFxzJ1wiPj1dKykpPykqXFxzKlxcLz8+L2lcbiAgICBQcmlzbS5sYW5ndWFnZXMueHF1ZXJ5Wyd0YWcnXS5pbnNpZGVbXG4gICAgICAnYXR0ci12YWx1ZSdcbiAgICBdLnBhdHRlcm4gPSAvPSg/OihcInwnKSg/OlxcXFxbXFxzXFxTXXx7KD8heykoPzp7KD86e1tefV0qfXxbXn1dKSp9fFtefV0pK318KD8hXFwxKVteXFxcXF0pKlxcMXxbXlxccydcIj49XSspL2lcbiAgICBQcmlzbS5sYW5ndWFnZXMueHF1ZXJ5Wyd0YWcnXS5pbnNpZGVbJ2F0dHItdmFsdWUnXS5pbnNpZGVbXG4gICAgICAncHVuY3R1YXRpb24nXG4gICAgXSA9IC9ePVwifFwiJC9cbiAgICBQcmlzbS5sYW5ndWFnZXMueHF1ZXJ5Wyd0YWcnXS5pbnNpZGVbJ2F0dHItdmFsdWUnXS5pbnNpZGVbJ2V4cHJlc3Npb24nXSA9IHtcbiAgICAgIC8vIEFsbG93IGZvciB0d28gbGV2ZWxzIG9mIG5lc3RpbmdcbiAgICAgIHBhdHRlcm46IC97KD8heykoPzp7KD86e1tefV0qfXxbXn1dKSp9fFtefV0pK30vLFxuICAgICAgaW5zaWRlOiB7XG4gICAgICAgIHJlc3Q6IFByaXNtLmxhbmd1YWdlcy54cXVlcnlcbiAgICAgIH0sXG4gICAgICBhbGlhczogJ2xhbmd1YWdlLXhxdWVyeSdcbiAgICB9IC8vIFRoZSBmb2xsb3dpbmcgd2lsbCBoYW5kbGUgcGxhaW4gdGV4dCBpbnNpZGUgdGFnc1xuICAgIHZhciBzdHJpbmdpZnlUb2tlbiA9IGZ1bmN0aW9uKHRva2VuKSB7XG4gICAgICBpZiAodHlwZW9mIHRva2VuID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gdG9rZW5cbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgdG9rZW4uY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHRva2VuLmNvbnRlbnRcbiAgICAgIH1cbiAgICAgIHJldHVybiB0b2tlbi5jb250ZW50Lm1hcChzdHJpbmdpZnlUb2tlbikuam9pbignJylcbiAgICB9XG4gICAgdmFyIHdhbGtUb2tlbnMgPSBmdW5jdGlvbih0b2tlbnMpIHtcbiAgICAgIHZhciBvcGVuZWRUYWdzID0gW11cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXVxuICAgICAgICB2YXIgbm90VGFnTm9yQnJhY2UgPSBmYWxzZVxuICAgICAgICBpZiAodHlwZW9mIHRva2VuICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIHRva2VuLnR5cGUgPT09ICd0YWcnICYmXG4gICAgICAgICAgICB0b2tlbi5jb250ZW50WzBdICYmXG4gICAgICAgICAgICB0b2tlbi5jb250ZW50WzBdLnR5cGUgPT09ICd0YWcnXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICAvLyBXZSBmb3VuZCBhIHRhZywgbm93IGZpbmQgaXRzIGtpbmRcbiAgICAgICAgICAgIGlmICh0b2tlbi5jb250ZW50WzBdLmNvbnRlbnRbMF0uY29udGVudCA9PT0gJzwvJykge1xuICAgICAgICAgICAgICAvLyBDbG9zaW5nIHRhZ1xuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgb3BlbmVkVGFncy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICAgICAgb3BlbmVkVGFnc1tvcGVuZWRUYWdzLmxlbmd0aCAtIDFdLnRhZ05hbWUgPT09XG4gICAgICAgICAgICAgICAgICBzdHJpbmdpZnlUb2tlbih0b2tlbi5jb250ZW50WzBdLmNvbnRlbnRbMV0pXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIC8vIFBvcCBtYXRjaGluZyBvcGVuaW5nIHRhZ1xuICAgICAgICAgICAgICAgIG9wZW5lZFRhZ3MucG9wKClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaWYgKHRva2VuLmNvbnRlbnRbdG9rZW4uY29udGVudC5sZW5ndGggLSAxXS5jb250ZW50ID09PSAnLz4nKSB7XG4gICAgICAgICAgICAgICAgLy8gQXV0b2Nsb3NlZCB0YWcsIGlnbm9yZVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIE9wZW5pbmcgdGFnXG4gICAgICAgICAgICAgICAgb3BlbmVkVGFncy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgIHRhZ05hbWU6IHN0cmluZ2lmeVRva2VuKHRva2VuLmNvbnRlbnRbMF0uY29udGVudFsxXSksXG4gICAgICAgICAgICAgICAgICBvcGVuZWRCcmFjZXM6IDBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgIG9wZW5lZFRhZ3MubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgdG9rZW4udHlwZSA9PT0gJ3B1bmN0dWF0aW9uJyAmJlxuICAgICAgICAgICAgdG9rZW4uY29udGVudCA9PT0gJ3snICYmIC8vIElnbm9yZSBge3tgXG4gICAgICAgICAgICAoIXRva2Vuc1tpICsgMV0gfHxcbiAgICAgICAgICAgICAgdG9rZW5zW2kgKyAxXS50eXBlICE9PSAncHVuY3R1YXRpb24nIHx8XG4gICAgICAgICAgICAgIHRva2Vuc1tpICsgMV0uY29udGVudCAhPT0gJ3snKSAmJlxuICAgICAgICAgICAgKCF0b2tlbnNbaSAtIDFdIHx8XG4gICAgICAgICAgICAgIHRva2Vuc1tpIC0gMV0udHlwZSAhPT0gJ3BsYWluLXRleHQnIHx8XG4gICAgICAgICAgICAgIHRva2Vuc1tpIC0gMV0uY29udGVudCAhPT0gJ3snKVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgLy8gSGVyZSB3ZSBtaWdodCBoYXZlIGVudGVyZWQgYW4gWFF1ZXJ5IGV4cHJlc3Npb24gaW5zaWRlIGEgdGFnXG4gICAgICAgICAgICBvcGVuZWRUYWdzW29wZW5lZFRhZ3MubGVuZ3RoIC0gMV0ub3BlbmVkQnJhY2VzKytcbiAgICAgICAgICB9IGVsc2UgaWYgKFxuICAgICAgICAgICAgb3BlbmVkVGFncy5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICBvcGVuZWRUYWdzW29wZW5lZFRhZ3MubGVuZ3RoIC0gMV0ub3BlbmVkQnJhY2VzID4gMCAmJlxuICAgICAgICAgICAgdG9rZW4udHlwZSA9PT0gJ3B1bmN0dWF0aW9uJyAmJlxuICAgICAgICAgICAgdG9rZW4uY29udGVudCA9PT0gJ30nXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICAvLyBIZXJlIHdlIG1pZ2h0IGhhdmUgbGVmdCBhbiBYUXVlcnkgZXhwcmVzc2lvbiBpbnNpZGUgYSB0YWdcbiAgICAgICAgICAgIG9wZW5lZFRhZ3Nbb3BlbmVkVGFncy5sZW5ndGggLSAxXS5vcGVuZWRCcmFjZXMtLVxuICAgICAgICAgIH0gZWxzZSBpZiAodG9rZW4udHlwZSAhPT0gJ2NvbW1lbnQnKSB7XG4gICAgICAgICAgICBub3RUYWdOb3JCcmFjZSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5vdFRhZ05vckJyYWNlIHx8IHR5cGVvZiB0b2tlbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBvcGVuZWRUYWdzLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgIG9wZW5lZFRhZ3Nbb3BlbmVkVGFncy5sZW5ndGggLSAxXS5vcGVuZWRCcmFjZXMgPT09IDBcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIC8vIEhlcmUgd2UgYXJlIGluc2lkZSBhIHRhZywgYW5kIG5vdCBpbnNpZGUgYW4gWFF1ZXJ5IGV4cHJlc3Npb24uXG4gICAgICAgICAgICAvLyBUaGF0J3MgcGxhaW4gdGV4dDogZHJvcCBhbnkgdG9rZW5zIG1hdGNoZWQuXG4gICAgICAgICAgICB2YXIgcGxhaW5UZXh0ID0gc3RyaW5naWZ5VG9rZW4odG9rZW4pIC8vIEFuZCBtZXJnZSB0ZXh0IHdpdGggYWRqYWNlbnQgdGV4dFxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBpIDwgdG9rZW5zLmxlbmd0aCAtIDEgJiZcbiAgICAgICAgICAgICAgKHR5cGVvZiB0b2tlbnNbaSArIDFdID09PSAnc3RyaW5nJyB8fFxuICAgICAgICAgICAgICAgIHRva2Vuc1tpICsgMV0udHlwZSA9PT0gJ3BsYWluLXRleHQnKVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHBsYWluVGV4dCArPSBzdHJpbmdpZnlUb2tlbih0b2tlbnNbaSArIDFdKVxuICAgICAgICAgICAgICB0b2tlbnMuc3BsaWNlKGkgKyAxLCAxKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBpID4gMCAmJlxuICAgICAgICAgICAgICAodHlwZW9mIHRva2Vuc1tpIC0gMV0gPT09ICdzdHJpbmcnIHx8XG4gICAgICAgICAgICAgICAgdG9rZW5zW2kgLSAxXS50eXBlID09PSAncGxhaW4tdGV4dCcpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgcGxhaW5UZXh0ID0gc3RyaW5naWZ5VG9rZW4odG9rZW5zW2kgLSAxXSkgKyBwbGFpblRleHRcbiAgICAgICAgICAgICAgdG9rZW5zLnNwbGljZShpIC0gMSwgMSlcbiAgICAgICAgICAgICAgaS0tXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoL15cXHMrJC8udGVzdChwbGFpblRleHQpKSB7XG4gICAgICAgICAgICAgIHRva2Vuc1tpXSA9IHBsYWluVGV4dFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdG9rZW5zW2ldID0gbmV3IFByaXNtLlRva2VuKFxuICAgICAgICAgICAgICAgICdwbGFpbi10ZXh0JyxcbiAgICAgICAgICAgICAgICBwbGFpblRleHQsXG4gICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICBwbGFpblRleHRcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodG9rZW4uY29udGVudCAmJiB0eXBlb2YgdG9rZW4uY29udGVudCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB3YWxrVG9rZW5zKHRva2VuLmNvbnRlbnQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgUHJpc20uaG9va3MuYWRkKCdhZnRlci10b2tlbml6ZScsIGZ1bmN0aW9uKGVudikge1xuICAgICAgaWYgKGVudi5sYW5ndWFnZSAhPT0gJ3hxdWVyeScpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICB3YWxrVG9rZW5zKGVudi50b2tlbnMpXG4gICAgfSlcbiAgfSkoUHJpc20pXG59XG4iXSwic291cmNlUm9vdCI6IiJ9
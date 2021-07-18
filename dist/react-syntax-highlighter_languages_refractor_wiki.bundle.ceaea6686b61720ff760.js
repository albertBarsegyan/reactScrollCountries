(self["webpackChunkheaderproject"] = self["webpackChunkheaderproject"] || []).push([["react-syntax-highlighter_languages_refractor_wiki"],{

/***/ "./node_modules/refractor/lang/wiki.js":
/*!*********************************************!*\
  !*** ./node_modules/refractor/lang/wiki.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";


module.exports = wiki
wiki.displayName = 'wiki'
wiki.aliases = []
function wiki(Prism) {
  Prism.languages.wiki = Prism.languages.extend('markup', {
    'block-comment': {
      pattern: /(^|[^\\])\/\*[\s\S]*?\*\//,
      lookbehind: true,
      alias: 'comment'
    },
    heading: {
      pattern: /^(=+).+?\1/m,
      inside: {
        punctuation: /^=+|=+$/,
        important: /.+/
      }
    },
    emphasis: {
      // TODO Multi-line
      pattern: /('{2,5}).+?\1/,
      inside: {
        'bold italic': {
          pattern: /(''''').+?(?=\1)/,
          lookbehind: true
        },
        bold: {
          pattern: /(''')[^'](?:.*?[^'])?(?=\1)/,
          lookbehind: true
        },
        italic: {
          pattern: /('')[^'](?:.*?[^'])?(?=\1)/,
          lookbehind: true
        },
        punctuation: /^''+|''+$/
      }
    },
    hr: {
      pattern: /^-{4,}/m,
      alias: 'punctuation'
    },
    url: [
      /ISBN +(?:97[89][ -]?)?(?:\d[ -]?){9}[\dx]\b|(?:RFC|PMID) +\d+/i,
      /\[\[.+?\]\]|\[.+?\]/
    ],
    variable: [
      /__[A-Z]+__/, // FIXME Nested structures should be handled
      // {{formatnum:{{#expr:{{{3}}}}}}}
      /\{{3}.+?\}{3}/,
      /\{\{.+?\}\}/
    ],
    symbol: [/^#redirect/im, /~{3,5}/],
    // Handle table attrs:
    // {|
    // ! style="text-align:left;"| Item
    // |}
    'table-tag': {
      pattern: /((?:^|[|!])[|!])[^|\r\n]+\|(?!\|)/m,
      lookbehind: true,
      inside: {
        'table-bar': {
          pattern: /\|$/,
          alias: 'punctuation'
        },
        rest: Prism.languages.markup['tag'].inside
      }
    },
    punctuation: /^(?:\{\||\|\}|\|-|[*#:;!|])|\|\||!!/m
  })
  Prism.languages.insertBefore('wiki', 'tag', {
    // Prevent highlighting inside <nowiki>, <source> and <pre> tags
    nowiki: {
      pattern: /<(nowiki|pre|source)\b[\s\S]*?>[\s\S]*?<\/\1>/i,
      inside: {
        tag: {
          pattern: /<(?:nowiki|pre|source)\b[\s\S]*?>|<\/(?:nowiki|pre|source)>/i,
          inside: Prism.languages.markup['tag'].inside
        }
      }
    }
  })
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFkZXJwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL3dpa2kuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQVk7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsbUJBQW1CLElBQUk7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsbUJBQW1CLEdBQUc7QUFDdEI7QUFDQSxLQUFLO0FBQ0w7QUFDQSx5Q0FBeUMsRUFBRTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsWUFBWSxTQUFTO0FBQ2hDLFVBQVUsRUFBRSxNQUFNLEVBQUU7QUFDcEIsU0FBUyxFQUFFLEtBQUssRUFBRTtBQUNsQjtBQUNBLGdDQUFnQyxJQUFJO0FBQ3BDO0FBQ0EsUUFBUTtBQUNSLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsd0JBQXdCLE9BQU8sVUFBVTtBQUN6QyxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCIsImZpbGUiOiJyZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX3JlZnJhY3Rvcl93aWtpLmJ1bmRsZS5jZWFlYTY2ODZiNjE3MjBmZjc2MC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IHdpa2lcbndpa2kuZGlzcGxheU5hbWUgPSAnd2lraSdcbndpa2kuYWxpYXNlcyA9IFtdXG5mdW5jdGlvbiB3aWtpKFByaXNtKSB7XG4gIFByaXNtLmxhbmd1YWdlcy53aWtpID0gUHJpc20ubGFuZ3VhZ2VzLmV4dGVuZCgnbWFya3VwJywge1xuICAgICdibG9jay1jb21tZW50Jzoge1xuICAgICAgcGF0dGVybjogLyhefFteXFxcXF0pXFwvXFwqW1xcc1xcU10qP1xcKlxcLy8sXG4gICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgYWxpYXM6ICdjb21tZW50J1xuICAgIH0sXG4gICAgaGVhZGluZzoge1xuICAgICAgcGF0dGVybjogL14oPSspLis/XFwxL20sXG4gICAgICBpbnNpZGU6IHtcbiAgICAgICAgcHVuY3R1YXRpb246IC9ePSt8PSskLyxcbiAgICAgICAgaW1wb3J0YW50OiAvLisvXG4gICAgICB9XG4gICAgfSxcbiAgICBlbXBoYXNpczoge1xuICAgICAgLy8gVE9ETyBNdWx0aS1saW5lXG4gICAgICBwYXR0ZXJuOiAvKCd7Miw1fSkuKz9cXDEvLFxuICAgICAgaW5zaWRlOiB7XG4gICAgICAgICdib2xkIGl0YWxpYyc6IHtcbiAgICAgICAgICBwYXR0ZXJuOiAvKCcnJycnKS4rPyg/PVxcMSkvLFxuICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgYm9sZDoge1xuICAgICAgICAgIHBhdHRlcm46IC8oJycnKVteJ10oPzouKj9bXiddKT8oPz1cXDEpLyxcbiAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIGl0YWxpYzoge1xuICAgICAgICAgIHBhdHRlcm46IC8oJycpW14nXSg/Oi4qP1teJ10pPyg/PVxcMSkvLFxuICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgcHVuY3R1YXRpb246IC9eJycrfCcnKyQvXG4gICAgICB9XG4gICAgfSxcbiAgICBocjoge1xuICAgICAgcGF0dGVybjogL14tezQsfS9tLFxuICAgICAgYWxpYXM6ICdwdW5jdHVhdGlvbidcbiAgICB9LFxuICAgIHVybDogW1xuICAgICAgL0lTQk4gKyg/Ojk3Wzg5XVsgLV0/KT8oPzpcXGRbIC1dPyl7OX1bXFxkeF1cXGJ8KD86UkZDfFBNSUQpICtcXGQrL2ksXG4gICAgICAvXFxbXFxbLis/XFxdXFxdfFxcWy4rP1xcXS9cbiAgICBdLFxuICAgIHZhcmlhYmxlOiBbXG4gICAgICAvX19bQS1aXStfXy8sIC8vIEZJWE1FIE5lc3RlZCBzdHJ1Y3R1cmVzIHNob3VsZCBiZSBoYW5kbGVkXG4gICAgICAvLyB7e2Zvcm1hdG51bTp7eyNleHByOnt7ezN9fX19fX19XG4gICAgICAvXFx7ezN9Lis/XFx9ezN9LyxcbiAgICAgIC9cXHtcXHsuKz9cXH1cXH0vXG4gICAgXSxcbiAgICBzeW1ib2w6IFsvXiNyZWRpcmVjdC9pbSwgL357Myw1fS9dLFxuICAgIC8vIEhhbmRsZSB0YWJsZSBhdHRyczpcbiAgICAvLyB7fFxuICAgIC8vICEgc3R5bGU9XCJ0ZXh0LWFsaWduOmxlZnQ7XCJ8IEl0ZW1cbiAgICAvLyB8fVxuICAgICd0YWJsZS10YWcnOiB7XG4gICAgICBwYXR0ZXJuOiAvKCg/Ol58W3whXSlbfCFdKVtefFxcclxcbl0rXFx8KD8hXFx8KS9tLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgIGluc2lkZToge1xuICAgICAgICAndGFibGUtYmFyJzoge1xuICAgICAgICAgIHBhdHRlcm46IC9cXHwkLyxcbiAgICAgICAgICBhbGlhczogJ3B1bmN0dWF0aW9uJ1xuICAgICAgICB9LFxuICAgICAgICByZXN0OiBQcmlzbS5sYW5ndWFnZXMubWFya3VwWyd0YWcnXS5pbnNpZGVcbiAgICAgIH1cbiAgICB9LFxuICAgIHB1bmN0dWF0aW9uOiAvXig/Olxce1xcfHxcXHxcXH18XFx8LXxbKiM6OyF8XSl8XFx8XFx8fCEhL21cbiAgfSlcbiAgUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnd2lraScsICd0YWcnLCB7XG4gICAgLy8gUHJldmVudCBoaWdobGlnaHRpbmcgaW5zaWRlIDxub3dpa2k+LCA8c291cmNlPiBhbmQgPHByZT4gdGFnc1xuICAgIG5vd2lraToge1xuICAgICAgcGF0dGVybjogLzwobm93aWtpfHByZXxzb3VyY2UpXFxiW1xcc1xcU10qPz5bXFxzXFxTXSo/PFxcL1xcMT4vaSxcbiAgICAgIGluc2lkZToge1xuICAgICAgICB0YWc6IHtcbiAgICAgICAgICBwYXR0ZXJuOiAvPCg/Om5vd2lraXxwcmV8c291cmNlKVxcYltcXHNcXFNdKj8+fDxcXC8oPzpub3dpa2l8cHJlfHNvdXJjZSk+L2ksXG4gICAgICAgICAgaW5zaWRlOiBQcmlzbS5sYW5ndWFnZXMubWFya3VwWyd0YWcnXS5pbnNpZGVcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSlcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
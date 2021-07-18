(self["webpackChunkheaderproject"] = self["webpackChunkheaderproject"] || []).push([["react-syntax-highlighter_languages_refractor_markdown"],{

/***/ "./node_modules/refractor/lang/markdown.js":
/*!*************************************************!*\
  !*** ./node_modules/refractor/lang/markdown.js ***!
  \*************************************************/
/***/ ((module) => {

"use strict";


module.exports = markdown
markdown.displayName = 'markdown'
markdown.aliases = ['md']
function markdown(Prism) {
  ;(function(Prism) {
    // Allow only one line break
    var inner = /(?:\\.|[^\\\n\r]|(?:\r?\n|\r)(?!\r?\n|\r))/.source
    /**
     * This function is intended for the creation of the bold or italic pattern.
     *
     * This also adds a lookbehind group to the given pattern to ensure that the pattern is not backslash-escaped.
     *
     * _Note:_ Keep in mind that this adds a capturing group.
     *
     * @param {string} pattern
     * @param {boolean} starAlternative Whether to also add an alternative where all `_`s are replaced with `*`s.
     * @returns {RegExp}
     */
    function createInline(pattern, starAlternative) {
      pattern = pattern.replace(/<inner>/g, inner)
      if (starAlternative) {
        pattern = pattern + '|' + pattern.replace(/_/g, '\\*')
      }
      return RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + '(?:' + pattern + ')')
    }
    var tableCell = /(?:\\.|``.+?``|`[^`\r\n]+`|[^\\|\r\n`])+/.source
    var tableRow = /\|?__(?:\|__)+\|?(?:(?:\r?\n|\r)|$)/.source.replace(
      /__/g,
      tableCell
    )
    var tableLine = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\r?\n|\r)/
      .source
    Prism.languages.markdown = Prism.languages.extend('markup', {})
    Prism.languages.insertBefore('markdown', 'prolog', {
      blockquote: {
        // > ...
        pattern: /^>(?:[\t ]*>)*/m,
        alias: 'punctuation'
      },
      table: {
        pattern: RegExp(
          '^' + tableRow + tableLine + '(?:' + tableRow + ')*',
          'm'
        ),
        inside: {
          'table-data-rows': {
            pattern: RegExp(
              '^(' + tableRow + tableLine + ')(?:' + tableRow + ')*$'
            ),
            lookbehind: true,
            inside: {
              'table-data': {
                pattern: RegExp(tableCell),
                inside: Prism.languages.markdown
              },
              punctuation: /\|/
            }
          },
          'table-line': {
            pattern: RegExp('^(' + tableRow + ')' + tableLine + '$'),
            lookbehind: true,
            inside: {
              punctuation: /\||:?-{3,}:?/
            }
          },
          'table-header-row': {
            pattern: RegExp('^' + tableRow + '$'),
            inside: {
              'table-header': {
                pattern: RegExp(tableCell),
                alias: 'important',
                inside: Prism.languages.markdown
              },
              punctuation: /\|/
            }
          }
        }
      },
      code: [
        {
          // Prefixed by 4 spaces or 1 tab and preceded by an empty line
          pattern: /(^[ \t]*(?:\r?\n|\r))(?: {4}|\t).+(?:(?:\r?\n|\r)(?: {4}|\t).+)*/m,
          lookbehind: true,
          alias: 'keyword'
        },
        {
          // `code`
          // ``code``
          pattern: /``.+?``|`[^`\r\n]+`/,
          alias: 'keyword'
        },
        {
          // ```optional language
          // code block
          // ```
          pattern: /^```[\s\S]*?^```$/m,
          greedy: true,
          inside: {
            'code-block': {
              pattern: /^(```.*(?:\r?\n|\r))[\s\S]+?(?=(?:\r?\n|\r)^```$)/m,
              lookbehind: true
            },
            'code-language': {
              pattern: /^(```).+/,
              lookbehind: true
            },
            punctuation: /```/
          }
        }
      ],
      title: [
        {
          // title 1
          // =======
          // title 2
          // -------
          pattern: /\S.*(?:\r?\n|\r)(?:==+|--+)(?=[ \t]*$)/m,
          alias: 'important',
          inside: {
            punctuation: /==+$|--+$/
          }
        },
        {
          // # title 1
          // ###### title 6
          pattern: /(^\s*)#+.+/m,
          lookbehind: true,
          alias: 'important',
          inside: {
            punctuation: /^#+|#+$/
          }
        }
      ],
      hr: {
        // ***
        // ---
        // * * *
        // -----------
        pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
        lookbehind: true,
        alias: 'punctuation'
      },
      list: {
        // * item
        // + item
        // - item
        // 1. item
        pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
        lookbehind: true,
        alias: 'punctuation'
      },
      'url-reference': {
        // [id]: http://example.com "Optional title"
        // [id]: http://example.com 'Optional title'
        // [id]: http://example.com (Optional title)
        // [id]: <http://example.com> "Optional title"
        pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
        inside: {
          variable: {
            pattern: /^(!?\[)[^\]]+/,
            lookbehind: true
          },
          string: /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
          punctuation: /^[\[\]!:]|[<>]/
        },
        alias: 'url'
      },
      bold: {
        // **strong**
        // __strong__
        // allow one nested instance of italic text using the same delimiter
        pattern: createInline(
          /__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__/.source,
          true
        ),
        lookbehind: true,
        greedy: true,
        inside: {
          content: {
            pattern: /(^..)[\s\S]+(?=..$)/,
            lookbehind: true,
            inside: {} // see below
          },
          punctuation: /\*\*|__/
        }
      },
      italic: {
        // *em*
        // _em_
        // allow one nested instance of bold text using the same delimiter
        pattern: createInline(
          /_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_/.source,
          true
        ),
        lookbehind: true,
        greedy: true,
        inside: {
          content: {
            pattern: /(^.)[\s\S]+(?=.$)/,
            lookbehind: true,
            inside: {} // see below
          },
          punctuation: /[*_]/
        }
      },
      strike: {
        // ~~strike through~~
        // ~strike~
        pattern: createInline(/(~~?)(?:(?!~)<inner>)+?\2/.source, false),
        lookbehind: true,
        greedy: true,
        inside: {
          content: {
            pattern: /(^~~?)[\s\S]+(?=\1$)/,
            lookbehind: true,
            inside: {} // see below
          },
          punctuation: /~~?/
        }
      },
      url: {
        // [example](http://example.com "Optional title")
        // [example][id]
        // [example] [id]
        pattern: createInline(
          /!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)| ?\[(?:(?!\])<inner>)+\])/
            .source,
          false
        ),
        lookbehind: true,
        greedy: true,
        inside: {
          variable: {
            pattern: /(\[)[^\]]+(?=\]$)/,
            lookbehind: true
          },
          content: {
            pattern: /(^!?\[)[^\]]+(?=\])/,
            lookbehind: true,
            inside: {} // see below
          },
          string: {
            pattern: /"(?:\\.|[^"\\])*"(?=\)$)/
          }
        }
      }
    })
    ;['url', 'bold', 'italic', 'strike'].forEach(function(token) {
      ;['url', 'bold', 'italic', 'strike'].forEach(function(inside) {
        if (token !== inside) {
          Prism.languages.markdown[token].inside.content.inside[inside] =
            Prism.languages.markdown[inside]
        }
      })
    })
    Prism.hooks.add('after-tokenize', function(env) {
      if (env.language !== 'markdown' && env.language !== 'md') {
        return
      }
      function walkTokens(tokens) {
        if (!tokens || typeof tokens === 'string') {
          return
        }
        for (var i = 0, l = tokens.length; i < l; i++) {
          var token = tokens[i]
          if (token.type !== 'code') {
            walkTokens(token.content)
            continue
          }
          /*
           * Add the correct `language-xxxx` class to this code block. Keep in mind that the `code-language` token
           * is optional. But the grammar is defined so that there is only one case we have to handle:
           *
           * token.content = [
           *     <span class="punctuation">```</span>,
           *     <span class="code-language">xxxx</span>,
           *     '\n', // exactly one new lines (\r or \n or \r\n)
           *     <span class="code-block">...</span>,
           *     '\n', // exactly one new lines again
           *     <span class="punctuation">```</span>
           * ];
           */
          var codeLang = token.content[1]
          var codeBlock = token.content[3]
          if (
            codeLang &&
            codeBlock &&
            codeLang.type === 'code-language' &&
            codeBlock.type === 'code-block' &&
            typeof codeLang.content === 'string'
          ) {
            // this might be a language that Prism does not support
            var alias =
              'language-' +
              codeLang.content
                .trim()
                .split(/\s+/)[0]
                .toLowerCase() // add alias
            if (!codeBlock.alias) {
              codeBlock.alias = [alias]
            } else if (typeof codeBlock.alias === 'string') {
              codeBlock.alias = [codeBlock.alias, alias]
            } else {
              codeBlock.alias.push(alias)
            }
          }
        }
      }
      walkTokens(env.tokens)
    })
    Prism.hooks.add('wrap', function(env) {
      if (env.type !== 'code-block') {
        return
      }
      var codeLang = ''
      for (var i = 0, l = env.classes.length; i < l; i++) {
        var cls = env.classes[i]
        var match = /language-(.+)/.exec(cls)
        if (match) {
          codeLang = match[1]
          break
        }
      }
      var grammar = Prism.languages[codeLang]
      if (!grammar) {
        if (codeLang && codeLang !== 'none' && Prism.plugins.autoloader) {
          var id =
            'md-' +
            new Date().valueOf() +
            '-' +
            Math.floor(Math.random() * 1e16)
          env.attributes['id'] = id
          Prism.plugins.autoloader.loadLanguages(codeLang, function() {
            var ele = document.getElementById(id)
            if (ele) {
              ele.innerHTML = Prism.highlight(
                ele.textContent,
                Prism.languages[codeLang],
                codeLang
              )
            }
          })
        }
      } else {
        // reverse Prism.util.encode
        var code = env.content.value
          .replace(/&lt;/g, '<')
          .replace(/&amp;/g, '&')
        env.content = Prism.highlight(code, grammar, codeLang)
      }
    })
    Prism.languages.md = Prism.languages.markdown
  })(Prism)
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFkZXJwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL21hcmtkb3duLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLFFBQVE7QUFDdkIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxFQUFFO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxHQUFHLHVCQUF1QixHQUFHO0FBQy9EO0FBQ0Esa0VBQWtFO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsR0FBRztBQUN0QztBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsRUFBRSwwQkFBMEIsRUFBRTtBQUM1RTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxHQUFHO0FBQzlDO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIsV0FBVztBQUNYO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QixXQUFXO0FBQ1g7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QixXQUFXO0FBQ1g7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEtBQUs7QUFDTCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsT0FBTztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsT0FBTztBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIIiwiZmlsZSI6InJlYWN0LXN5bnRheC1oaWdobGlnaHRlcl9sYW5ndWFnZXNfcmVmcmFjdG9yX21hcmtkb3duLmJ1bmRsZS5jZWFlYTY2ODZiNjE3MjBmZjc2MC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IG1hcmtkb3duXG5tYXJrZG93bi5kaXNwbGF5TmFtZSA9ICdtYXJrZG93bidcbm1hcmtkb3duLmFsaWFzZXMgPSBbJ21kJ11cbmZ1bmN0aW9uIG1hcmtkb3duKFByaXNtKSB7XG4gIDsoZnVuY3Rpb24oUHJpc20pIHtcbiAgICAvLyBBbGxvdyBvbmx5IG9uZSBsaW5lIGJyZWFrXG4gICAgdmFyIGlubmVyID0gLyg/OlxcXFwufFteXFxcXFxcblxccl18KD86XFxyP1xcbnxcXHIpKD8hXFxyP1xcbnxcXHIpKS8uc291cmNlXG4gICAgLyoqXG4gICAgICogVGhpcyBmdW5jdGlvbiBpcyBpbnRlbmRlZCBmb3IgdGhlIGNyZWF0aW9uIG9mIHRoZSBib2xkIG9yIGl0YWxpYyBwYXR0ZXJuLlxuICAgICAqXG4gICAgICogVGhpcyBhbHNvIGFkZHMgYSBsb29rYmVoaW5kIGdyb3VwIHRvIHRoZSBnaXZlbiBwYXR0ZXJuIHRvIGVuc3VyZSB0aGF0IHRoZSBwYXR0ZXJuIGlzIG5vdCBiYWNrc2xhc2gtZXNjYXBlZC5cbiAgICAgKlxuICAgICAqIF9Ob3RlOl8gS2VlcCBpbiBtaW5kIHRoYXQgdGhpcyBhZGRzIGEgY2FwdHVyaW5nIGdyb3VwLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhdHRlcm5cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHN0YXJBbHRlcm5hdGl2ZSBXaGV0aGVyIHRvIGFsc28gYWRkIGFuIGFsdGVybmF0aXZlIHdoZXJlIGFsbCBgX2BzIGFyZSByZXBsYWNlZCB3aXRoIGAqYHMuXG4gICAgICogQHJldHVybnMge1JlZ0V4cH1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBjcmVhdGVJbmxpbmUocGF0dGVybiwgc3RhckFsdGVybmF0aXZlKSB7XG4gICAgICBwYXR0ZXJuID0gcGF0dGVybi5yZXBsYWNlKC88aW5uZXI+L2csIGlubmVyKVxuICAgICAgaWYgKHN0YXJBbHRlcm5hdGl2ZSkge1xuICAgICAgICBwYXR0ZXJuID0gcGF0dGVybiArICd8JyArIHBhdHRlcm4ucmVwbGFjZSgvXy9nLCAnXFxcXConKVxuICAgICAgfVxuICAgICAgcmV0dXJuIFJlZ0V4cCgvKCg/Ol58W15cXFxcXSkoPzpcXFxcezJ9KSopLy5zb3VyY2UgKyAnKD86JyArIHBhdHRlcm4gKyAnKScpXG4gICAgfVxuICAgIHZhciB0YWJsZUNlbGwgPSAvKD86XFxcXC58YGAuKz9gYHxgW15gXFxyXFxuXStgfFteXFxcXHxcXHJcXG5gXSkrLy5zb3VyY2VcbiAgICB2YXIgdGFibGVSb3cgPSAvXFx8P19fKD86XFx8X18pK1xcfD8oPzooPzpcXHI/XFxufFxccil8JCkvLnNvdXJjZS5yZXBsYWNlKFxuICAgICAgL19fL2csXG4gICAgICB0YWJsZUNlbGxcbiAgICApXG4gICAgdmFyIHRhYmxlTGluZSA9IC9cXHw/WyBcXHRdKjo/LXszLH06P1sgXFx0XSooPzpcXHxbIFxcdF0qOj8tezMsfTo/WyBcXHRdKikrXFx8Pyg/Olxccj9cXG58XFxyKS9cbiAgICAgIC5zb3VyY2VcbiAgICBQcmlzbS5sYW5ndWFnZXMubWFya2Rvd24gPSBQcmlzbS5sYW5ndWFnZXMuZXh0ZW5kKCdtYXJrdXAnLCB7fSlcbiAgICBQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdtYXJrZG93bicsICdwcm9sb2cnLCB7XG4gICAgICBibG9ja3F1b3RlOiB7XG4gICAgICAgIC8vID4gLi4uXG4gICAgICAgIHBhdHRlcm46IC9ePig/OltcXHQgXSo+KSovbSxcbiAgICAgICAgYWxpYXM6ICdwdW5jdHVhdGlvbidcbiAgICAgIH0sXG4gICAgICB0YWJsZToge1xuICAgICAgICBwYXR0ZXJuOiBSZWdFeHAoXG4gICAgICAgICAgJ14nICsgdGFibGVSb3cgKyB0YWJsZUxpbmUgKyAnKD86JyArIHRhYmxlUm93ICsgJykqJyxcbiAgICAgICAgICAnbSdcbiAgICAgICAgKSxcbiAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgJ3RhYmxlLWRhdGEtcm93cyc6IHtcbiAgICAgICAgICAgIHBhdHRlcm46IFJlZ0V4cChcbiAgICAgICAgICAgICAgJ14oJyArIHRhYmxlUm93ICsgdGFibGVMaW5lICsgJykoPzonICsgdGFibGVSb3cgKyAnKSokJ1xuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICAgICAgJ3RhYmxlLWRhdGEnOiB7XG4gICAgICAgICAgICAgICAgcGF0dGVybjogUmVnRXhwKHRhYmxlQ2VsbCksXG4gICAgICAgICAgICAgICAgaW5zaWRlOiBQcmlzbS5sYW5ndWFnZXMubWFya2Rvd25cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgcHVuY3R1YXRpb246IC9cXHwvXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICAndGFibGUtbGluZSc6IHtcbiAgICAgICAgICAgIHBhdHRlcm46IFJlZ0V4cCgnXignICsgdGFibGVSb3cgKyAnKScgKyB0YWJsZUxpbmUgKyAnJCcpLFxuICAgICAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgICAgIGluc2lkZToge1xuICAgICAgICAgICAgICBwdW5jdHVhdGlvbjogL1xcfHw6Py17Myx9Oj8vXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICAndGFibGUtaGVhZGVyLXJvdyc6IHtcbiAgICAgICAgICAgIHBhdHRlcm46IFJlZ0V4cCgnXicgKyB0YWJsZVJvdyArICckJyksXG4gICAgICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICAgICAgJ3RhYmxlLWhlYWRlcic6IHtcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBSZWdFeHAodGFibGVDZWxsKSxcbiAgICAgICAgICAgICAgICBhbGlhczogJ2ltcG9ydGFudCcsXG4gICAgICAgICAgICAgICAgaW5zaWRlOiBQcmlzbS5sYW5ndWFnZXMubWFya2Rvd25cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgcHVuY3R1YXRpb246IC9cXHwvXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgY29kZTogW1xuICAgICAgICB7XG4gICAgICAgICAgLy8gUHJlZml4ZWQgYnkgNCBzcGFjZXMgb3IgMSB0YWIgYW5kIHByZWNlZGVkIGJ5IGFuIGVtcHR5IGxpbmVcbiAgICAgICAgICBwYXR0ZXJuOiAvKF5bIFxcdF0qKD86XFxyP1xcbnxcXHIpKSg/OiB7NH18XFx0KS4rKD86KD86XFxyP1xcbnxcXHIpKD86IHs0fXxcXHQpLispKi9tLFxuICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgICAgYWxpYXM6ICdrZXl3b3JkJ1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgLy8gYGNvZGVgXG4gICAgICAgICAgLy8gYGBjb2RlYGBcbiAgICAgICAgICBwYXR0ZXJuOiAvYGAuKz9gYHxgW15gXFxyXFxuXStgLyxcbiAgICAgICAgICBhbGlhczogJ2tleXdvcmQnXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAvLyBgYGBvcHRpb25hbCBsYW5ndWFnZVxuICAgICAgICAgIC8vIGNvZGUgYmxvY2tcbiAgICAgICAgICAvLyBgYGBcbiAgICAgICAgICBwYXR0ZXJuOiAvXmBgYFtcXHNcXFNdKj9eYGBgJC9tLFxuICAgICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICAgICdjb2RlLWJsb2NrJzoge1xuICAgICAgICAgICAgICBwYXR0ZXJuOiAvXihgYGAuKig/Olxccj9cXG58XFxyKSlbXFxzXFxTXSs/KD89KD86XFxyP1xcbnxcXHIpXmBgYCQpL20sXG4gICAgICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAnY29kZS1sYW5ndWFnZSc6IHtcbiAgICAgICAgICAgICAgcGF0dGVybjogL14oYGBgKS4rLyxcbiAgICAgICAgICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHB1bmN0dWF0aW9uOiAvYGBgL1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIHRpdGxlOiBbXG4gICAgICAgIHtcbiAgICAgICAgICAvLyB0aXRsZSAxXG4gICAgICAgICAgLy8gPT09PT09PVxuICAgICAgICAgIC8vIHRpdGxlIDJcbiAgICAgICAgICAvLyAtLS0tLS0tXG4gICAgICAgICAgcGF0dGVybjogL1xcUy4qKD86XFxyP1xcbnxcXHIpKD86PT0rfC0tKykoPz1bIFxcdF0qJCkvbSxcbiAgICAgICAgICBhbGlhczogJ2ltcG9ydGFudCcsXG4gICAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgICBwdW5jdHVhdGlvbjogLz09KyR8LS0rJC9cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAvLyAjIHRpdGxlIDFcbiAgICAgICAgICAvLyAjIyMjIyMgdGl0bGUgNlxuICAgICAgICAgIHBhdHRlcm46IC8oXlxccyopIysuKy9tLFxuICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgICAgYWxpYXM6ICdpbXBvcnRhbnQnLFxuICAgICAgICAgIGluc2lkZToge1xuICAgICAgICAgICAgcHVuY3R1YXRpb246IC9eIyt8IyskL1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIGhyOiB7XG4gICAgICAgIC8vICoqKlxuICAgICAgICAvLyAtLS1cbiAgICAgICAgLy8gKiAqICpcbiAgICAgICAgLy8gLS0tLS0tLS0tLS1cbiAgICAgICAgcGF0dGVybjogLyheXFxzKikoWyotXSkoPzpbXFx0IF0qXFwyKXsyLH0oPz1cXHMqJCkvbSxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgYWxpYXM6ICdwdW5jdHVhdGlvbidcbiAgICAgIH0sXG4gICAgICBsaXN0OiB7XG4gICAgICAgIC8vICogaXRlbVxuICAgICAgICAvLyArIGl0ZW1cbiAgICAgICAgLy8gLSBpdGVtXG4gICAgICAgIC8vIDEuIGl0ZW1cbiAgICAgICAgcGF0dGVybjogLyheXFxzKikoPzpbKistXXxcXGQrXFwuKSg/PVtcXHQgXS4pL20sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgIGFsaWFzOiAncHVuY3R1YXRpb24nXG4gICAgICB9LFxuICAgICAgJ3VybC1yZWZlcmVuY2UnOiB7XG4gICAgICAgIC8vIFtpZF06IGh0dHA6Ly9leGFtcGxlLmNvbSBcIk9wdGlvbmFsIHRpdGxlXCJcbiAgICAgICAgLy8gW2lkXTogaHR0cDovL2V4YW1wbGUuY29tICdPcHRpb25hbCB0aXRsZSdcbiAgICAgICAgLy8gW2lkXTogaHR0cDovL2V4YW1wbGUuY29tIChPcHRpb25hbCB0aXRsZSlcbiAgICAgICAgLy8gW2lkXTogPGh0dHA6Ly9leGFtcGxlLmNvbT4gXCJPcHRpb25hbCB0aXRsZVwiXG4gICAgICAgIHBhdHRlcm46IC8hP1xcW1teXFxdXStcXF06W1xcdCBdKyg/OlxcUyt8PCg/OlxcXFwufFtePlxcXFxdKSs+KSg/OltcXHQgXSsoPzpcIig/OlxcXFwufFteXCJcXFxcXSkqXCJ8Jyg/OlxcXFwufFteJ1xcXFxdKSonfFxcKCg/OlxcXFwufFteKVxcXFxdKSpcXCkpKT8vLFxuICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICB2YXJpYWJsZToge1xuICAgICAgICAgICAgcGF0dGVybjogL14oIT9cXFspW15cXF1dKy8sXG4gICAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzdHJpbmc6IC8oPzpcIig/OlxcXFwufFteXCJcXFxcXSkqXCJ8Jyg/OlxcXFwufFteJ1xcXFxdKSonfFxcKCg/OlxcXFwufFteKVxcXFxdKSpcXCkpJC8sXG4gICAgICAgICAgcHVuY3R1YXRpb246IC9eW1xcW1xcXSE6XXxbPD5dL1xuICAgICAgICB9LFxuICAgICAgICBhbGlhczogJ3VybCdcbiAgICAgIH0sXG4gICAgICBib2xkOiB7XG4gICAgICAgIC8vICoqc3Ryb25nKipcbiAgICAgICAgLy8gX19zdHJvbmdfX1xuICAgICAgICAvLyBhbGxvdyBvbmUgbmVzdGVkIGluc3RhbmNlIG9mIGl0YWxpYyB0ZXh0IHVzaW5nIHRoZSBzYW1lIGRlbGltaXRlclxuICAgICAgICBwYXR0ZXJuOiBjcmVhdGVJbmxpbmUoXG4gICAgICAgICAgL19fKD86KD8hXyk8aW5uZXI+fF8oPzooPyFfKTxpbm5lcj4pK18pK19fLy5zb3VyY2UsXG4gICAgICAgICAgdHJ1ZVxuICAgICAgICApLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgICAgIGluc2lkZToge1xuICAgICAgICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgICAgIHBhdHRlcm46IC8oXi4uKVtcXHNcXFNdKyg/PS4uJCkvLFxuICAgICAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgICAgIGluc2lkZToge30gLy8gc2VlIGJlbG93XG4gICAgICAgICAgfSxcbiAgICAgICAgICBwdW5jdHVhdGlvbjogL1xcKlxcKnxfXy9cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGl0YWxpYzoge1xuICAgICAgICAvLyAqZW0qXG4gICAgICAgIC8vIF9lbV9cbiAgICAgICAgLy8gYWxsb3cgb25lIG5lc3RlZCBpbnN0YW5jZSBvZiBib2xkIHRleHQgdXNpbmcgdGhlIHNhbWUgZGVsaW1pdGVyXG4gICAgICAgIHBhdHRlcm46IGNyZWF0ZUlubGluZShcbiAgICAgICAgICAvXyg/Oig/IV8pPGlubmVyPnxfXyg/Oig/IV8pPGlubmVyPikrX18pK18vLnNvdXJjZSxcbiAgICAgICAgICB0cnVlXG4gICAgICAgICksXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgICAgaW5zaWRlOiB7XG4gICAgICAgICAgY29udGVudDoge1xuICAgICAgICAgICAgcGF0dGVybjogLyheLilbXFxzXFxTXSsoPz0uJCkvLFxuICAgICAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgICAgIGluc2lkZToge30gLy8gc2VlIGJlbG93XG4gICAgICAgICAgfSxcbiAgICAgICAgICBwdW5jdHVhdGlvbjogL1sqX10vXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBzdHJpa2U6IHtcbiAgICAgICAgLy8gfn5zdHJpa2UgdGhyb3VnaH5+XG4gICAgICAgIC8vIH5zdHJpa2V+XG4gICAgICAgIHBhdHRlcm46IGNyZWF0ZUlubGluZSgvKH5+PykoPzooPyF+KTxpbm5lcj4pKz9cXDIvLnNvdXJjZSwgZmFsc2UpLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICBncmVlZHk6IHRydWUsXG4gICAgICAgIGluc2lkZToge1xuICAgICAgICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgICAgIHBhdHRlcm46IC8oXn5+PylbXFxzXFxTXSsoPz1cXDEkKS8sXG4gICAgICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICAgICAgaW5zaWRlOiB7fSAvLyBzZWUgYmVsb3dcbiAgICAgICAgICB9LFxuICAgICAgICAgIHB1bmN0dWF0aW9uOiAvfn4/L1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgdXJsOiB7XG4gICAgICAgIC8vIFtleGFtcGxlXShodHRwOi8vZXhhbXBsZS5jb20gXCJPcHRpb25hbCB0aXRsZVwiKVxuICAgICAgICAvLyBbZXhhbXBsZV1baWRdXG4gICAgICAgIC8vIFtleGFtcGxlXSBbaWRdXG4gICAgICAgIHBhdHRlcm46IGNyZWF0ZUlubGluZShcbiAgICAgICAgICAvIT9cXFsoPzooPyFcXF0pPGlubmVyPikrXFxdKD86XFwoW15cXHMpXSsoPzpbXFx0IF0rXCIoPzpcXFxcLnxbXlwiXFxcXF0pKlwiKT9cXCl8ID9cXFsoPzooPyFcXF0pPGlubmVyPikrXFxdKS9cbiAgICAgICAgICAgIC5zb3VyY2UsXG4gICAgICAgICAgZmFsc2VcbiAgICAgICAgKSxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICB2YXJpYWJsZToge1xuICAgICAgICAgICAgcGF0dGVybjogLyhcXFspW15cXF1dKyg/PVxcXSQpLyxcbiAgICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgICAgIHBhdHRlcm46IC8oXiE/XFxbKVteXFxdXSsoPz1cXF0pLyxcbiAgICAgICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgICAgICBpbnNpZGU6IHt9IC8vIHNlZSBiZWxvd1xuICAgICAgICAgIH0sXG4gICAgICAgICAgc3RyaW5nOiB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvXCIoPzpcXFxcLnxbXlwiXFxcXF0pKlwiKD89XFwpJCkvXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgICA7Wyd1cmwnLCAnYm9sZCcsICdpdGFsaWMnLCAnc3RyaWtlJ10uZm9yRWFjaChmdW5jdGlvbih0b2tlbikge1xuICAgICAgO1sndXJsJywgJ2JvbGQnLCAnaXRhbGljJywgJ3N0cmlrZSddLmZvckVhY2goZnVuY3Rpb24oaW5zaWRlKSB7XG4gICAgICAgIGlmICh0b2tlbiAhPT0gaW5zaWRlKSB7XG4gICAgICAgICAgUHJpc20ubGFuZ3VhZ2VzLm1hcmtkb3duW3Rva2VuXS5pbnNpZGUuY29udGVudC5pbnNpZGVbaW5zaWRlXSA9XG4gICAgICAgICAgICBQcmlzbS5sYW5ndWFnZXMubWFya2Rvd25baW5zaWRlXVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pXG4gICAgUHJpc20uaG9va3MuYWRkKCdhZnRlci10b2tlbml6ZScsIGZ1bmN0aW9uKGVudikge1xuICAgICAgaWYgKGVudi5sYW5ndWFnZSAhPT0gJ21hcmtkb3duJyAmJiBlbnYubGFuZ3VhZ2UgIT09ICdtZCcpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBmdW5jdGlvbiB3YWxrVG9rZW5zKHRva2Vucykge1xuICAgICAgICBpZiAoIXRva2VucyB8fCB0eXBlb2YgdG9rZW5zID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gdG9rZW5zLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXVxuICAgICAgICAgIGlmICh0b2tlbi50eXBlICE9PSAnY29kZScpIHtcbiAgICAgICAgICAgIHdhbGtUb2tlbnModG9rZW4uY29udGVudClcbiAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIC8qXG4gICAgICAgICAgICogQWRkIHRoZSBjb3JyZWN0IGBsYW5ndWFnZS14eHh4YCBjbGFzcyB0byB0aGlzIGNvZGUgYmxvY2suIEtlZXAgaW4gbWluZCB0aGF0IHRoZSBgY29kZS1sYW5ndWFnZWAgdG9rZW5cbiAgICAgICAgICAgKiBpcyBvcHRpb25hbC4gQnV0IHRoZSBncmFtbWFyIGlzIGRlZmluZWQgc28gdGhhdCB0aGVyZSBpcyBvbmx5IG9uZSBjYXNlIHdlIGhhdmUgdG8gaGFuZGxlOlxuICAgICAgICAgICAqXG4gICAgICAgICAgICogdG9rZW4uY29udGVudCA9IFtcbiAgICAgICAgICAgKiAgICAgPHNwYW4gY2xhc3M9XCJwdW5jdHVhdGlvblwiPmBgYDwvc3Bhbj4sXG4gICAgICAgICAgICogICAgIDxzcGFuIGNsYXNzPVwiY29kZS1sYW5ndWFnZVwiPnh4eHg8L3NwYW4+LFxuICAgICAgICAgICAqICAgICAnXFxuJywgLy8gZXhhY3RseSBvbmUgbmV3IGxpbmVzIChcXHIgb3IgXFxuIG9yIFxcclxcbilcbiAgICAgICAgICAgKiAgICAgPHNwYW4gY2xhc3M9XCJjb2RlLWJsb2NrXCI+Li4uPC9zcGFuPixcbiAgICAgICAgICAgKiAgICAgJ1xcbicsIC8vIGV4YWN0bHkgb25lIG5ldyBsaW5lcyBhZ2FpblxuICAgICAgICAgICAqICAgICA8c3BhbiBjbGFzcz1cInB1bmN0dWF0aW9uXCI+YGBgPC9zcGFuPlxuICAgICAgICAgICAqIF07XG4gICAgICAgICAgICovXG4gICAgICAgICAgdmFyIGNvZGVMYW5nID0gdG9rZW4uY29udGVudFsxXVxuICAgICAgICAgIHZhciBjb2RlQmxvY2sgPSB0b2tlbi5jb250ZW50WzNdXG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgY29kZUxhbmcgJiZcbiAgICAgICAgICAgIGNvZGVCbG9jayAmJlxuICAgICAgICAgICAgY29kZUxhbmcudHlwZSA9PT0gJ2NvZGUtbGFuZ3VhZ2UnICYmXG4gICAgICAgICAgICBjb2RlQmxvY2sudHlwZSA9PT0gJ2NvZGUtYmxvY2snICYmXG4gICAgICAgICAgICB0eXBlb2YgY29kZUxhbmcuY29udGVudCA9PT0gJ3N0cmluZydcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIC8vIHRoaXMgbWlnaHQgYmUgYSBsYW5ndWFnZSB0aGF0IFByaXNtIGRvZXMgbm90IHN1cHBvcnRcbiAgICAgICAgICAgIHZhciBhbGlhcyA9XG4gICAgICAgICAgICAgICdsYW5ndWFnZS0nICtcbiAgICAgICAgICAgICAgY29kZUxhbmcuY29udGVudFxuICAgICAgICAgICAgICAgIC50cmltKClcbiAgICAgICAgICAgICAgICAuc3BsaXQoL1xccysvKVswXVxuICAgICAgICAgICAgICAgIC50b0xvd2VyQ2FzZSgpIC8vIGFkZCBhbGlhc1xuICAgICAgICAgICAgaWYgKCFjb2RlQmxvY2suYWxpYXMpIHtcbiAgICAgICAgICAgICAgY29kZUJsb2NrLmFsaWFzID0gW2FsaWFzXVxuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgY29kZUJsb2NrLmFsaWFzID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb2RlQmxvY2suYWxpYXMgPSBbY29kZUJsb2NrLmFsaWFzLCBhbGlhc11cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvZGVCbG9jay5hbGlhcy5wdXNoKGFsaWFzKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgd2Fsa1Rva2VucyhlbnYudG9rZW5zKVxuICAgIH0pXG4gICAgUHJpc20uaG9va3MuYWRkKCd3cmFwJywgZnVuY3Rpb24oZW52KSB7XG4gICAgICBpZiAoZW52LnR5cGUgIT09ICdjb2RlLWJsb2NrJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIHZhciBjb2RlTGFuZyA9ICcnXG4gICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGVudi5jbGFzc2VzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICB2YXIgY2xzID0gZW52LmNsYXNzZXNbaV1cbiAgICAgICAgdmFyIG1hdGNoID0gL2xhbmd1YWdlLSguKykvLmV4ZWMoY2xzKVxuICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICBjb2RlTGFuZyA9IG1hdGNoWzFdXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdmFyIGdyYW1tYXIgPSBQcmlzbS5sYW5ndWFnZXNbY29kZUxhbmddXG4gICAgICBpZiAoIWdyYW1tYXIpIHtcbiAgICAgICAgaWYgKGNvZGVMYW5nICYmIGNvZGVMYW5nICE9PSAnbm9uZScgJiYgUHJpc20ucGx1Z2lucy5hdXRvbG9hZGVyKSB7XG4gICAgICAgICAgdmFyIGlkID1cbiAgICAgICAgICAgICdtZC0nICtcbiAgICAgICAgICAgIG5ldyBEYXRlKCkudmFsdWVPZigpICtcbiAgICAgICAgICAgICctJyArXG4gICAgICAgICAgICBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxZTE2KVxuICAgICAgICAgIGVudi5hdHRyaWJ1dGVzWydpZCddID0gaWRcbiAgICAgICAgICBQcmlzbS5wbHVnaW5zLmF1dG9sb2FkZXIubG9hZExhbmd1YWdlcyhjb2RlTGFuZywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgZWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpXG4gICAgICAgICAgICBpZiAoZWxlKSB7XG4gICAgICAgICAgICAgIGVsZS5pbm5lckhUTUwgPSBQcmlzbS5oaWdobGlnaHQoXG4gICAgICAgICAgICAgICAgZWxlLnRleHRDb250ZW50LFxuICAgICAgICAgICAgICAgIFByaXNtLmxhbmd1YWdlc1tjb2RlTGFuZ10sXG4gICAgICAgICAgICAgICAgY29kZUxhbmdcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHJldmVyc2UgUHJpc20udXRpbC5lbmNvZGVcbiAgICAgICAgdmFyIGNvZGUgPSBlbnYuY29udGVudC52YWx1ZVxuICAgICAgICAgIC5yZXBsYWNlKC8mbHQ7L2csICc8JylcbiAgICAgICAgICAucmVwbGFjZSgvJmFtcDsvZywgJyYnKVxuICAgICAgICBlbnYuY29udGVudCA9IFByaXNtLmhpZ2hsaWdodChjb2RlLCBncmFtbWFyLCBjb2RlTGFuZylcbiAgICAgIH1cbiAgICB9KVxuICAgIFByaXNtLmxhbmd1YWdlcy5tZCA9IFByaXNtLmxhbmd1YWdlcy5tYXJrZG93blxuICB9KShQcmlzbSlcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
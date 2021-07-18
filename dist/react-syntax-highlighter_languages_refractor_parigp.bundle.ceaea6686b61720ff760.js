(self["webpackChunkheaderproject"] = self["webpackChunkheaderproject"] || []).push([["react-syntax-highlighter_languages_refractor_parigp"],{

/***/ "./node_modules/refractor/lang/parigp.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/parigp.js ***!
  \***********************************************/
/***/ ((module) => {

"use strict";


module.exports = parigp
parigp.displayName = 'parigp'
parigp.aliases = []
function parigp(Prism) {
  Prism.languages.parigp = {
    comment: /\/\*[\s\S]*?\*\/|\\\\.*/,
    string: {
      pattern: /"(?:[^"\\\r\n]|\\.)*"/,
      greedy: true
    },
    // PARI/GP does not care about white spaces at all
    // so let's process the keywords to build an appropriate regexp
    // (e.g. "b *r *e *a *k", etc.)
    keyword: (function() {
      var keywords = [
        'breakpoint',
        'break',
        'dbg_down',
        'dbg_err',
        'dbg_up',
        'dbg_x',
        'forcomposite',
        'fordiv',
        'forell',
        'forpart',
        'forprime',
        'forstep',
        'forsubgroup',
        'forvec',
        'for',
        'iferr',
        'if',
        'local',
        'my',
        'next',
        'return',
        'until',
        'while'
      ]
      keywords = keywords
        .map(function(keyword) {
          return keyword.split('').join(' *')
        })
        .join('|')
      return RegExp('\\b(?:' + keywords + ')\\b')
    })(),
    function: /\w[\w ]*?(?= *\()/,
    number: {
      // The lookbehind and the negative lookahead prevent from breaking the .. operator
      pattern: /((?:\. *\. *)?)(?:\d(?: *\d)*(?: *(?!\. *\.)\.(?: *\d)*)?|\. *\d(?: *\d)*)(?: *e *[+-]? *\d(?: *\d)*)?/i,
      lookbehind: true
    },
    operator: /\. *\.|[*\/!](?: *=)?|%(?: *=|(?: *#)?(?: *')*)?|\+(?: *[+=])?|-(?: *[-=>])?|<(?:(?: *<)?(?: *=)?| *>)?|>(?: *>)?(?: *=)?|=(?: *=){0,2}|\\(?: *\/)?(?: *=)?|&(?: *&)?|\| *\||['#~^]/,
    punctuation: /[\[\]{}().,:;|]/
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFkZXJwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL3BhcmlncC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsa0pBQWtKLElBQUk7QUFDdEoseUJBQXlCLE1BQU07QUFDL0I7QUFDQSIsImZpbGUiOiJyZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX3JlZnJhY3Rvcl9wYXJpZ3AuYnVuZGxlLmNlYWVhNjY4NmI2MTcyMGZmNzYwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gcGFyaWdwXG5wYXJpZ3AuZGlzcGxheU5hbWUgPSAncGFyaWdwJ1xucGFyaWdwLmFsaWFzZXMgPSBbXVxuZnVuY3Rpb24gcGFyaWdwKFByaXNtKSB7XG4gIFByaXNtLmxhbmd1YWdlcy5wYXJpZ3AgPSB7XG4gICAgY29tbWVudDogL1xcL1xcKltcXHNcXFNdKj9cXCpcXC98XFxcXFxcXFwuKi8sXG4gICAgc3RyaW5nOiB7XG4gICAgICBwYXR0ZXJuOiAvXCIoPzpbXlwiXFxcXFxcclxcbl18XFxcXC4pKlwiLyxcbiAgICAgIGdyZWVkeTogdHJ1ZVxuICAgIH0sXG4gICAgLy8gUEFSSS9HUCBkb2VzIG5vdCBjYXJlIGFib3V0IHdoaXRlIHNwYWNlcyBhdCBhbGxcbiAgICAvLyBzbyBsZXQncyBwcm9jZXNzIHRoZSBrZXl3b3JkcyB0byBidWlsZCBhbiBhcHByb3ByaWF0ZSByZWdleHBcbiAgICAvLyAoZS5nLiBcImIgKnIgKmUgKmEgKmtcIiwgZXRjLilcbiAgICBrZXl3b3JkOiAoZnVuY3Rpb24oKSB7XG4gICAgICB2YXIga2V5d29yZHMgPSBbXG4gICAgICAgICdicmVha3BvaW50JyxcbiAgICAgICAgJ2JyZWFrJyxcbiAgICAgICAgJ2RiZ19kb3duJyxcbiAgICAgICAgJ2RiZ19lcnInLFxuICAgICAgICAnZGJnX3VwJyxcbiAgICAgICAgJ2RiZ194JyxcbiAgICAgICAgJ2ZvcmNvbXBvc2l0ZScsXG4gICAgICAgICdmb3JkaXYnLFxuICAgICAgICAnZm9yZWxsJyxcbiAgICAgICAgJ2ZvcnBhcnQnLFxuICAgICAgICAnZm9ycHJpbWUnLFxuICAgICAgICAnZm9yc3RlcCcsXG4gICAgICAgICdmb3JzdWJncm91cCcsXG4gICAgICAgICdmb3J2ZWMnLFxuICAgICAgICAnZm9yJyxcbiAgICAgICAgJ2lmZXJyJyxcbiAgICAgICAgJ2lmJyxcbiAgICAgICAgJ2xvY2FsJyxcbiAgICAgICAgJ215JyxcbiAgICAgICAgJ25leHQnLFxuICAgICAgICAncmV0dXJuJyxcbiAgICAgICAgJ3VudGlsJyxcbiAgICAgICAgJ3doaWxlJ1xuICAgICAgXVxuICAgICAga2V5d29yZHMgPSBrZXl3b3Jkc1xuICAgICAgICAubWFwKGZ1bmN0aW9uKGtleXdvcmQpIHtcbiAgICAgICAgICByZXR1cm4ga2V5d29yZC5zcGxpdCgnJykuam9pbignIConKVxuICAgICAgICB9KVxuICAgICAgICAuam9pbignfCcpXG4gICAgICByZXR1cm4gUmVnRXhwKCdcXFxcYig/OicgKyBrZXl3b3JkcyArICcpXFxcXGInKVxuICAgIH0pKCksXG4gICAgZnVuY3Rpb246IC9cXHdbXFx3IF0qPyg/PSAqXFwoKS8sXG4gICAgbnVtYmVyOiB7XG4gICAgICAvLyBUaGUgbG9va2JlaGluZCBhbmQgdGhlIG5lZ2F0aXZlIGxvb2thaGVhZCBwcmV2ZW50IGZyb20gYnJlYWtpbmcgdGhlIC4uIG9wZXJhdG9yXG4gICAgICBwYXR0ZXJuOiAvKCg/OlxcLiAqXFwuICopPykoPzpcXGQoPzogKlxcZCkqKD86ICooPyFcXC4gKlxcLilcXC4oPzogKlxcZCkqKT98XFwuICpcXGQoPzogKlxcZCkqKSg/OiAqZSAqWystXT8gKlxcZCg/OiAqXFxkKSopPy9pLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgIH0sXG4gICAgb3BlcmF0b3I6IC9cXC4gKlxcLnxbKlxcLyFdKD86ICo9KT98JSg/OiAqPXwoPzogKiMpPyg/OiAqJykqKT98XFwrKD86ICpbKz1dKT98LSg/OiAqWy09Pl0pP3w8KD86KD86ICo8KT8oPzogKj0pP3wgKj4pP3w+KD86ICo+KT8oPzogKj0pP3w9KD86ICo9KXswLDJ9fFxcXFwoPzogKlxcLyk/KD86ICo9KT98Jig/OiAqJik/fFxcfCAqXFx8fFsnI35eXS8sXG4gICAgcHVuY3R1YXRpb246IC9bXFxbXFxde30oKS4sOjt8XS9cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
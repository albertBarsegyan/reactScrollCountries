(self["webpackChunkheaderproject"] = self["webpackChunkheaderproject"] || []).push([["react-syntax-highlighter_languages_refractor_git"],{

/***/ "./node_modules/refractor/lang/git.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/git.js ***!
  \********************************************/
/***/ ((module) => {

"use strict";


module.exports = git
git.displayName = 'git'
git.aliases = []
function git(Prism) {
  Prism.languages.git = {
    /*
     * A simple one line comment like in a git status command
     * For instance:
     * $ git status
     * # On branch infinite-scroll
     * # Your branch and 'origin/sharedBranches/frontendTeam/infinite-scroll' have diverged,
     * # and have 1 and 2 different commits each, respectively.
     * nothing to commit (working directory clean)
     */
    comment: /^#.*/m,
    /*
     * Regexp to match the changed lines in a git diff output. Check the example below.
     */
    deleted: /^[-–].*/m,
    inserted: /^\+.*/m,
    /*
     * a string (double and simple quote)
     */
    string: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/m,
    /*
     * a git command. It starts with a random prompt finishing by a $, then "git" then some other parameters
     * For instance:
     * $ git add file.txt
     */
    command: {
      pattern: /^.*\$ git .*$/m,
      inside: {
        /*
         * A git command can contain a parameter starting by a single or a double dash followed by a string
         * For instance:
         * $ git diff --cached
         * $ git log -p
         */
        parameter: /\s--?\w+/m
      }
    },
    /*
     * Coordinates displayed in a git diff command
     * For instance:
     * $ git diff
     * diff --git file.txt file.txt
     * index 6214953..1d54a52 100644
     * --- file.txt
     * +++ file.txt
     * @@ -1 +1,2 @@
     * -Here's my tetx file
     * +Here's my text file
     * +And this is the second line
     */
    coord: /^@@.*@@$/m,
    /*
     * Match a "commit [SHA1]" line in a git log output.
     * For instance:
     * $ git log
     * commit a11a14ef7e26f2ca62d4b35eac455ce636d0dc09
     * Author: lgiraudel
     * Date:   Mon Feb 17 11:18:34 2014 +0100
     *
     *     Add of a new line
     */
    commit_sha1: /^commit \w{40}$/m
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFkZXJwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL2dpdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsR0FBRztBQUNoQztBQUNBIiwiZmlsZSI6InJlYWN0LXN5bnRheC1oaWdobGlnaHRlcl9sYW5ndWFnZXNfcmVmcmFjdG9yX2dpdC5idW5kbGUuMTAyNjBkNmRlMTExMGZmZmQzNTcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBnaXRcbmdpdC5kaXNwbGF5TmFtZSA9ICdnaXQnXG5naXQuYWxpYXNlcyA9IFtdXG5mdW5jdGlvbiBnaXQoUHJpc20pIHtcbiAgUHJpc20ubGFuZ3VhZ2VzLmdpdCA9IHtcbiAgICAvKlxuICAgICAqIEEgc2ltcGxlIG9uZSBsaW5lIGNvbW1lbnQgbGlrZSBpbiBhIGdpdCBzdGF0dXMgY29tbWFuZFxuICAgICAqIEZvciBpbnN0YW5jZTpcbiAgICAgKiAkIGdpdCBzdGF0dXNcbiAgICAgKiAjIE9uIGJyYW5jaCBpbmZpbml0ZS1zY3JvbGxcbiAgICAgKiAjIFlvdXIgYnJhbmNoIGFuZCAnb3JpZ2luL3NoYXJlZEJyYW5jaGVzL2Zyb250ZW5kVGVhbS9pbmZpbml0ZS1zY3JvbGwnIGhhdmUgZGl2ZXJnZWQsXG4gICAgICogIyBhbmQgaGF2ZSAxIGFuZCAyIGRpZmZlcmVudCBjb21taXRzIGVhY2gsIHJlc3BlY3RpdmVseS5cbiAgICAgKiBub3RoaW5nIHRvIGNvbW1pdCAod29ya2luZyBkaXJlY3RvcnkgY2xlYW4pXG4gICAgICovXG4gICAgY29tbWVudDogL14jLiovbSxcbiAgICAvKlxuICAgICAqIFJlZ2V4cCB0byBtYXRjaCB0aGUgY2hhbmdlZCBsaW5lcyBpbiBhIGdpdCBkaWZmIG91dHB1dC4gQ2hlY2sgdGhlIGV4YW1wbGUgYmVsb3cuXG4gICAgICovXG4gICAgZGVsZXRlZDogL15bLeKAk10uKi9tLFxuICAgIGluc2VydGVkOiAvXlxcKy4qL20sXG4gICAgLypcbiAgICAgKiBhIHN0cmluZyAoZG91YmxlIGFuZCBzaW1wbGUgcXVvdGUpXG4gICAgICovXG4gICAgc3RyaW5nOiAvKFwifCcpKD86XFxcXC58KD8hXFwxKVteXFxcXFxcclxcbl0pKlxcMS9tLFxuICAgIC8qXG4gICAgICogYSBnaXQgY29tbWFuZC4gSXQgc3RhcnRzIHdpdGggYSByYW5kb20gcHJvbXB0IGZpbmlzaGluZyBieSBhICQsIHRoZW4gXCJnaXRcIiB0aGVuIHNvbWUgb3RoZXIgcGFyYW1ldGVyc1xuICAgICAqIEZvciBpbnN0YW5jZTpcbiAgICAgKiAkIGdpdCBhZGQgZmlsZS50eHRcbiAgICAgKi9cbiAgICBjb21tYW5kOiB7XG4gICAgICBwYXR0ZXJuOiAvXi4qXFwkIGdpdCAuKiQvbSxcbiAgICAgIGluc2lkZToge1xuICAgICAgICAvKlxuICAgICAgICAgKiBBIGdpdCBjb21tYW5kIGNhbiBjb250YWluIGEgcGFyYW1ldGVyIHN0YXJ0aW5nIGJ5IGEgc2luZ2xlIG9yIGEgZG91YmxlIGRhc2ggZm9sbG93ZWQgYnkgYSBzdHJpbmdcbiAgICAgICAgICogRm9yIGluc3RhbmNlOlxuICAgICAgICAgKiAkIGdpdCBkaWZmIC0tY2FjaGVkXG4gICAgICAgICAqICQgZ2l0IGxvZyAtcFxuICAgICAgICAgKi9cbiAgICAgICAgcGFyYW1ldGVyOiAvXFxzLS0/XFx3Ky9tXG4gICAgICB9XG4gICAgfSxcbiAgICAvKlxuICAgICAqIENvb3JkaW5hdGVzIGRpc3BsYXllZCBpbiBhIGdpdCBkaWZmIGNvbW1hbmRcbiAgICAgKiBGb3IgaW5zdGFuY2U6XG4gICAgICogJCBnaXQgZGlmZlxuICAgICAqIGRpZmYgLS1naXQgZmlsZS50eHQgZmlsZS50eHRcbiAgICAgKiBpbmRleCA2MjE0OTUzLi4xZDU0YTUyIDEwMDY0NFxuICAgICAqIC0tLSBmaWxlLnR4dFxuICAgICAqICsrKyBmaWxlLnR4dFxuICAgICAqIEBAIC0xICsxLDIgQEBcbiAgICAgKiAtSGVyZSdzIG15IHRldHggZmlsZVxuICAgICAqICtIZXJlJ3MgbXkgdGV4dCBmaWxlXG4gICAgICogK0FuZCB0aGlzIGlzIHRoZSBzZWNvbmQgbGluZVxuICAgICAqL1xuICAgIGNvb3JkOiAvXkBALipAQCQvbSxcbiAgICAvKlxuICAgICAqIE1hdGNoIGEgXCJjb21taXQgW1NIQTFdXCIgbGluZSBpbiBhIGdpdCBsb2cgb3V0cHV0LlxuICAgICAqIEZvciBpbnN0YW5jZTpcbiAgICAgKiAkIGdpdCBsb2dcbiAgICAgKiBjb21taXQgYTExYTE0ZWY3ZTI2ZjJjYTYyZDRiMzVlYWM0NTVjZTYzNmQwZGMwOVxuICAgICAqIEF1dGhvcjogbGdpcmF1ZGVsXG4gICAgICogRGF0ZTogICBNb24gRmViIDE3IDExOjE4OjM0IDIwMTQgKzAxMDBcbiAgICAgKlxuICAgICAqICAgICBBZGQgb2YgYSBuZXcgbGluZVxuICAgICAqL1xuICAgIGNvbW1pdF9zaGExOiAvXmNvbW1pdCBcXHd7NDB9JC9tXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
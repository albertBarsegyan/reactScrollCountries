(self["webpackChunkheaderproject"] = self["webpackChunkheaderproject"] || []).push([["react-syntax-highlighter_languages_refractor_io"],{

/***/ "./node_modules/refractor/lang/io.js":
/*!*******************************************!*\
  !*** ./node_modules/refractor/lang/io.js ***!
  \*******************************************/
/***/ ((module) => {

"use strict";


module.exports = io
io.displayName = 'io'
io.aliases = []
function io(Prism) {
  Prism.languages.io = {
    comment: [
      {
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: true
      },
      {
        pattern: /(^|[^\\])\/\/.*/,
        lookbehind: true
      },
      {
        pattern: /(^|[^\\])#.*/,
        lookbehind: true
      }
    ],
    'triple-quoted-string': {
      pattern: /"""(?:\\[\s\S]|(?!""")[^\\])*"""/,
      greedy: true,
      alias: 'string'
    },
    string: {
      pattern: /"(?:\\.|[^\\\r\n"])*"/,
      greedy: true
    },
    keyword: /\b(?:activate|activeCoroCount|asString|block|break|catch|clone|collectGarbage|compileString|continue|do|doFile|doMessage|doString|else|elseif|exit|for|foreach|forward|getSlot|getEnvironmentVariable|hasSlot|if|ifFalse|ifNil|ifNilEval|ifTrue|isActive|isNil|isResumable|list|message|method|parent|pass|pause|perform|performWithArgList|print|println|proto|raise|raiseResumable|removeSlot|resend|resume|schedulerSleepSeconds|self|sender|setSchedulerSleepSeconds|setSlot|shallowCopy|slotNames|super|system|then|thisBlock|thisContext|call|try|type|uniqueId|updateSlot|wait|while|write|yield)\b/,
    builtin: /\b(?:Array|AudioDevice|AudioMixer|Block|Box|Buffer|CFunction|CGI|Color|Curses|DBM|DNSResolver|DOConnection|DOProxy|DOServer|Date|Directory|Duration|DynLib|Error|Exception|FFT|File|Fnmatch|Font|Future|GL|GLE|GLScissor|GLU|GLUCylinder|GLUQuadric|GLUSphere|GLUT|Host|Image|Importer|LinkList|List|Lobby|Locals|MD5|MP3Decoder|MP3Encoder|Map|Message|Movie|Notification|Number|Object|OpenGL|Point|Protos|Regex|SGML|SGMLElement|SGMLParser|SQLite|Server|Sequence|ShowMessage|SleepyCat|SleepyCatCursor|Socket|SocketManager|Sound|Soup|Store|String|Tree|UDPSender|UPDReceiver|URL|User|Warning|WeakLink|Random|BigNum|Sequence)\b/,
    boolean: /\b(?:true|false|nil)\b/,
    number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e-?\d+)?/i,
    operator: /[=!*/%+-^&|]=|>>?=?|<<?=?|:?:?=|\+\+?|--?|\*\*?|\/\/?|%|\|\|?|&&?|(\b(?:return|and|or|not)\b)|@@?|\?\??|\.\./,
    punctuation: /[{}[\];(),.:]/
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFkZXJwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL2lvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLElBQUk7QUFDekI7QUFDQSIsImZpbGUiOiJyZWFjdC1zeW50YXgtaGlnaGxpZ2h0ZXJfbGFuZ3VhZ2VzX3JlZnJhY3Rvcl9pby5idW5kbGUuY2VhZWE2Njg2YjYxNzIwZmY3NjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBpb1xuaW8uZGlzcGxheU5hbWUgPSAnaW8nXG5pby5hbGlhc2VzID0gW11cbmZ1bmN0aW9uIGlvKFByaXNtKSB7XG4gIFByaXNtLmxhbmd1YWdlcy5pbyA9IHtcbiAgICBjb21tZW50OiBbXG4gICAgICB7XG4gICAgICAgIHBhdHRlcm46IC8oXnxbXlxcXFxdKVxcL1xcKltcXHNcXFNdKj8oPzpcXCpcXC98JCkvLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXR0ZXJuOiAvKF58W15cXFxcXSlcXC9cXC8uKi8sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdHRlcm46IC8oXnxbXlxcXFxdKSMuKi8sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgIH1cbiAgICBdLFxuICAgICd0cmlwbGUtcXVvdGVkLXN0cmluZyc6IHtcbiAgICAgIHBhdHRlcm46IC9cIlwiXCIoPzpcXFxcW1xcc1xcU118KD8hXCJcIlwiKVteXFxcXF0pKlwiXCJcIi8sXG4gICAgICBncmVlZHk6IHRydWUsXG4gICAgICBhbGlhczogJ3N0cmluZydcbiAgICB9LFxuICAgIHN0cmluZzoge1xuICAgICAgcGF0dGVybjogL1wiKD86XFxcXC58W15cXFxcXFxyXFxuXCJdKSpcIi8sXG4gICAgICBncmVlZHk6IHRydWVcbiAgICB9LFxuICAgIGtleXdvcmQ6IC9cXGIoPzphY3RpdmF0ZXxhY3RpdmVDb3JvQ291bnR8YXNTdHJpbmd8YmxvY2t8YnJlYWt8Y2F0Y2h8Y2xvbmV8Y29sbGVjdEdhcmJhZ2V8Y29tcGlsZVN0cmluZ3xjb250aW51ZXxkb3xkb0ZpbGV8ZG9NZXNzYWdlfGRvU3RyaW5nfGVsc2V8ZWxzZWlmfGV4aXR8Zm9yfGZvcmVhY2h8Zm9yd2FyZHxnZXRTbG90fGdldEVudmlyb25tZW50VmFyaWFibGV8aGFzU2xvdHxpZnxpZkZhbHNlfGlmTmlsfGlmTmlsRXZhbHxpZlRydWV8aXNBY3RpdmV8aXNOaWx8aXNSZXN1bWFibGV8bGlzdHxtZXNzYWdlfG1ldGhvZHxwYXJlbnR8cGFzc3xwYXVzZXxwZXJmb3JtfHBlcmZvcm1XaXRoQXJnTGlzdHxwcmludHxwcmludGxufHByb3RvfHJhaXNlfHJhaXNlUmVzdW1hYmxlfHJlbW92ZVNsb3R8cmVzZW5kfHJlc3VtZXxzY2hlZHVsZXJTbGVlcFNlY29uZHN8c2VsZnxzZW5kZXJ8c2V0U2NoZWR1bGVyU2xlZXBTZWNvbmRzfHNldFNsb3R8c2hhbGxvd0NvcHl8c2xvdE5hbWVzfHN1cGVyfHN5c3RlbXx0aGVufHRoaXNCbG9ja3x0aGlzQ29udGV4dHxjYWxsfHRyeXx0eXBlfHVuaXF1ZUlkfHVwZGF0ZVNsb3R8d2FpdHx3aGlsZXx3cml0ZXx5aWVsZClcXGIvLFxuICAgIGJ1aWx0aW46IC9cXGIoPzpBcnJheXxBdWRpb0RldmljZXxBdWRpb01peGVyfEJsb2NrfEJveHxCdWZmZXJ8Q0Z1bmN0aW9ufENHSXxDb2xvcnxDdXJzZXN8REJNfEROU1Jlc29sdmVyfERPQ29ubmVjdGlvbnxET1Byb3h5fERPU2VydmVyfERhdGV8RGlyZWN0b3J5fER1cmF0aW9ufER5bkxpYnxFcnJvcnxFeGNlcHRpb258RkZUfEZpbGV8Rm5tYXRjaHxGb250fEZ1dHVyZXxHTHxHTEV8R0xTY2lzc29yfEdMVXxHTFVDeWxpbmRlcnxHTFVRdWFkcmljfEdMVVNwaGVyZXxHTFVUfEhvc3R8SW1hZ2V8SW1wb3J0ZXJ8TGlua0xpc3R8TGlzdHxMb2JieXxMb2NhbHN8TUQ1fE1QM0RlY29kZXJ8TVAzRW5jb2RlcnxNYXB8TWVzc2FnZXxNb3ZpZXxOb3RpZmljYXRpb258TnVtYmVyfE9iamVjdHxPcGVuR0x8UG9pbnR8UHJvdG9zfFJlZ2V4fFNHTUx8U0dNTEVsZW1lbnR8U0dNTFBhcnNlcnxTUUxpdGV8U2VydmVyfFNlcXVlbmNlfFNob3dNZXNzYWdlfFNsZWVweUNhdHxTbGVlcHlDYXRDdXJzb3J8U29ja2V0fFNvY2tldE1hbmFnZXJ8U291bmR8U291cHxTdG9yZXxTdHJpbmd8VHJlZXxVRFBTZW5kZXJ8VVBEUmVjZWl2ZXJ8VVJMfFVzZXJ8V2FybmluZ3xXZWFrTGlua3xSYW5kb218QmlnTnVtfFNlcXVlbmNlKVxcYi8sXG4gICAgYm9vbGVhbjogL1xcYig/OnRydWV8ZmFsc2V8bmlsKVxcYi8sXG4gICAgbnVtYmVyOiAvXFxiMHhbXFxkYS1mXStcXGJ8KD86XFxiXFxkK1xcLj9cXGQqfFxcQlxcLlxcZCspKD86ZS0/XFxkKyk/L2ksXG4gICAgb3BlcmF0b3I6IC9bPSEqLyUrLV4mfF09fD4+Pz0/fDw8Pz0/fDo/Oj89fFxcK1xcKz98LS0/fFxcKlxcKj98XFwvXFwvP3wlfFxcfFxcfD98JiY/fChcXGIoPzpyZXR1cm58YW5kfG9yfG5vdClcXGIpfEBAP3xcXD9cXD8/fFxcLlxcLi8sXG4gICAgcHVuY3R1YXRpb246IC9be31bXFxdOygpLC46XS9cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
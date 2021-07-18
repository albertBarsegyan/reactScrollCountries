(self["webpackChunkheaderproject"] = self["webpackChunkheaderproject"] || []).push([["react-syntax-highlighter_languages_refractor_docker"],{

/***/ "./node_modules/refractor/lang/docker.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/docker.js ***!
  \***********************************************/
/***/ ((module) => {

"use strict";


module.exports = docker
docker.displayName = 'docker'
docker.aliases = ['dockerfile']
function docker(Prism) {
  Prism.languages.docker = {
    keyword: {
      pattern: /(^\s*)(?:ADD|ARG|CMD|COPY|ENTRYPOINT|ENV|EXPOSE|FROM|HEALTHCHECK|LABEL|MAINTAINER|ONBUILD|RUN|SHELL|STOPSIGNAL|USER|VOLUME|WORKDIR)(?=\s)/im,
      lookbehind: true
    },
    string: /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,
    comment: /#.*/,
    punctuation: /---|\.\.\.|[:[\]{}\-,|>?]/
  }
  Prism.languages.dockerfile = Prism.languages.docker
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFkZXJwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL2RvY2tlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBIiwiZmlsZSI6InJlYWN0LXN5bnRheC1oaWdobGlnaHRlcl9sYW5ndWFnZXNfcmVmcmFjdG9yX2RvY2tlci5idW5kbGUuMTAyNjBkNmRlMTExMGZmZmQzNTcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBkb2NrZXJcbmRvY2tlci5kaXNwbGF5TmFtZSA9ICdkb2NrZXInXG5kb2NrZXIuYWxpYXNlcyA9IFsnZG9ja2VyZmlsZSddXG5mdW5jdGlvbiBkb2NrZXIoUHJpc20pIHtcbiAgUHJpc20ubGFuZ3VhZ2VzLmRvY2tlciA9IHtcbiAgICBrZXl3b3JkOiB7XG4gICAgICBwYXR0ZXJuOiAvKF5cXHMqKSg/OkFERHxBUkd8Q01EfENPUFl8RU5UUllQT0lOVHxFTlZ8RVhQT1NFfEZST018SEVBTFRIQ0hFQ0t8TEFCRUx8TUFJTlRBSU5FUnxPTkJVSUxEfFJVTnxTSEVMTHxTVE9QU0lHTkFMfFVTRVJ8Vk9MVU1FfFdPUktESVIpKD89XFxzKS9pbSxcbiAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICB9LFxuICAgIHN0cmluZzogLyhcInwnKSg/Oig/IVxcMSlbXlxcXFxcXHJcXG5dfFxcXFwoPzpcXHJcXG58W1xcc1xcU10pKSpcXDEvLFxuICAgIGNvbW1lbnQ6IC8jLiovLFxuICAgIHB1bmN0dWF0aW9uOiAvLS0tfFxcLlxcLlxcLnxbOltcXF17fVxcLSx8Pj9dL1xuICB9XG4gIFByaXNtLmxhbmd1YWdlcy5kb2NrZXJmaWxlID0gUHJpc20ubGFuZ3VhZ2VzLmRvY2tlclxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
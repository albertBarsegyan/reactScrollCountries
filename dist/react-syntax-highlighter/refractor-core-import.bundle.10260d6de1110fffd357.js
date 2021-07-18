(self["webpackChunkheaderproject"] = self["webpackChunkheaderproject"] || []).push([["react-syntax-highlighter/refractor-core-import"],{

/***/ "./node_modules/character-entities-legacy/index.json":
/*!***********************************************************!*\
  !*** ./node_modules/character-entities-legacy/index.json ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"AElig":"Æ","AMP":"&","Aacute":"Á","Acirc":"Â","Agrave":"À","Aring":"Å","Atilde":"Ã","Auml":"Ä","COPY":"©","Ccedil":"Ç","ETH":"Ð","Eacute":"É","Ecirc":"Ê","Egrave":"È","Euml":"Ë","GT":">","Iacute":"Í","Icirc":"Î","Igrave":"Ì","Iuml":"Ï","LT":"<","Ntilde":"Ñ","Oacute":"Ó","Ocirc":"Ô","Ograve":"Ò","Oslash":"Ø","Otilde":"Õ","Ouml":"Ö","QUOT":"\\"","REG":"®","THORN":"Þ","Uacute":"Ú","Ucirc":"Û","Ugrave":"Ù","Uuml":"Ü","Yacute":"Ý","aacute":"á","acirc":"â","acute":"´","aelig":"æ","agrave":"à","amp":"&","aring":"å","atilde":"ã","auml":"ä","brvbar":"¦","ccedil":"ç","cedil":"¸","cent":"¢","copy":"©","curren":"¤","deg":"°","divide":"÷","eacute":"é","ecirc":"ê","egrave":"è","eth":"ð","euml":"ë","frac12":"½","frac14":"¼","frac34":"¾","gt":">","iacute":"í","icirc":"î","iexcl":"¡","igrave":"ì","iquest":"¿","iuml":"ï","laquo":"«","lt":"<","macr":"¯","micro":"µ","middot":"·","nbsp":" ","not":"¬","ntilde":"ñ","oacute":"ó","ocirc":"ô","ograve":"ò","ordf":"ª","ordm":"º","oslash":"ø","otilde":"õ","ouml":"ö","para":"¶","plusmn":"±","pound":"£","quot":"\\"","raquo":"»","reg":"®","sect":"§","shy":"­","sup1":"¹","sup2":"²","sup3":"³","szlig":"ß","thorn":"þ","times":"×","uacute":"ú","ucirc":"û","ugrave":"ù","uml":"¨","uuml":"ü","yacute":"ý","yen":"¥","yuml":"ÿ"}');

/***/ }),

/***/ "./node_modules/character-reference-invalid/index.json":
/*!*************************************************************!*\
  !*** ./node_modules/character-reference-invalid/index.json ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"0":"�","128":"€","130":"‚","131":"ƒ","132":"„","133":"…","134":"†","135":"‡","136":"ˆ","137":"‰","138":"Š","139":"‹","140":"Œ","142":"Ž","145":"‘","146":"’","147":"“","148":"”","149":"•","150":"–","151":"—","152":"˜","153":"™","154":"š","155":"›","156":"œ","158":"ž","159":"Ÿ"}');

/***/ }),

/***/ "./node_modules/comma-separated-tokens/index.js":
/*!******************************************************!*\
  !*** ./node_modules/comma-separated-tokens/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.parse = parse
exports.stringify = stringify

var comma = ','
var space = ' '
var empty = ''

// Parse comma-separated tokens to an array.
function parse(value) {
  var values = []
  var input = String(value || empty)
  var index = input.indexOf(comma)
  var lastIndex = 0
  var end = false
  var val

  while (!end) {
    if (index === -1) {
      index = input.length
      end = true
    }

    val = input.slice(lastIndex, index).trim()

    if (val || !end) {
      values.push(val)
    }

    lastIndex = index + 1
    index = input.indexOf(comma, lastIndex)
  }

  return values
}

// Compile an array to comma-separated tokens.
// `options.padLeft` (default: `true`) pads a space left of each token, and
// `options.padRight` (default: `false`) pads a space to the right of each token.
function stringify(values, options) {
  var settings = options || {}
  var left = settings.padLeft === false ? empty : space
  var right = settings.padRight ? space : empty

  // Ensure the last empty entry is seen.
  if (values[values.length - 1] === empty) {
    values = values.concat(empty)
  }

  return values.join(right + comma + left).trim()
}


/***/ }),

/***/ "./node_modules/hast-util-parse-selector/index.js":
/*!********************************************************!*\
  !*** ./node_modules/hast-util-parse-selector/index.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = parse

var search = /[#.]/g

// Create a hast element from a simple CSS selector.
function parse(selector, defaultTagName) {
  var value = selector || ''
  var name = defaultTagName || 'div'
  var props = {}
  var start = 0
  var subvalue
  var previous
  var match

  while (start < value.length) {
    search.lastIndex = start
    match = search.exec(value)
    subvalue = value.slice(start, match ? match.index : value.length)

    if (subvalue) {
      if (!previous) {
        name = subvalue
      } else if (previous === '#') {
        props.id = subvalue
      } else if (props.className) {
        props.className.push(subvalue)
      } else {
        props.className = [subvalue]
      }

      start += subvalue.length
    }

    if (match) {
      previous = match[0]
      start++
    }
  }

  return {type: 'element', tagName: name, properties: props, children: []}
}


/***/ }),

/***/ "./node_modules/hastscript/factory.js":
/*!********************************************!*\
  !*** ./node_modules/hastscript/factory.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var find = __webpack_require__(/*! property-information/find */ "./node_modules/property-information/find.js")
var normalize = __webpack_require__(/*! property-information/normalize */ "./node_modules/property-information/normalize.js")
var parseSelector = __webpack_require__(/*! hast-util-parse-selector */ "./node_modules/hast-util-parse-selector/index.js")
var spaces = __webpack_require__(/*! space-separated-tokens */ "./node_modules/space-separated-tokens/index.js").parse
var commas = __webpack_require__(/*! comma-separated-tokens */ "./node_modules/comma-separated-tokens/index.js").parse

module.exports = factory

var own = {}.hasOwnProperty

function factory(schema, defaultTagName, caseSensitive) {
  var adjust = caseSensitive ? createAdjustMap(caseSensitive) : null

  return h

  // Hyperscript compatible DSL for creating virtual hast trees.
  function h(selector, properties) {
    var node = parseSelector(selector, defaultTagName)
    var children = Array.prototype.slice.call(arguments, 2)
    var name = node.tagName.toLowerCase()
    var property

    node.tagName = adjust && own.call(adjust, name) ? adjust[name] : name

    if (properties && isChildren(properties, node)) {
      children.unshift(properties)
      properties = null
    }

    if (properties) {
      for (property in properties) {
        addProperty(node.properties, property, properties[property])
      }
    }

    addChild(node.children, children)

    if (node.tagName === 'template') {
      node.content = {type: 'root', children: node.children}
      node.children = []
    }

    return node
  }

  function addProperty(properties, key, value) {
    var info
    var property
    var result

    // Ignore nully and NaN values.
    if (value === null || value === undefined || value !== value) {
      return
    }

    info = find(schema, key)
    property = info.property
    result = value

    // Handle list values.
    if (typeof result === 'string') {
      if (info.spaceSeparated) {
        result = spaces(result)
      } else if (info.commaSeparated) {
        result = commas(result)
      } else if (info.commaOrSpaceSeparated) {
        result = spaces(commas(result).join(' '))
      }
    }

    // Accept `object` on style.
    if (property === 'style' && typeof value !== 'string') {
      result = style(result)
    }

    // Class-names (which can be added both on the `selector` and here).
    if (property === 'className' && properties.className) {
      result = properties.className.concat(result)
    }

    properties[property] = parsePrimitives(info, property, result)
  }
}

function isChildren(value, node) {
  return (
    typeof value === 'string' ||
    'length' in value ||
    isNode(node.tagName, value)
  )
}

function isNode(tagName, value) {
  var type = value.type

  if (tagName === 'input' || !type || typeof type !== 'string') {
    return false
  }

  if (typeof value.children === 'object' && 'length' in value.children) {
    return true
  }

  type = type.toLowerCase()

  if (tagName === 'button') {
    return (
      type !== 'menu' &&
      type !== 'submit' &&
      type !== 'reset' &&
      type !== 'button'
    )
  }

  return 'value' in value
}

function addChild(nodes, value) {
  var index
  var length

  if (typeof value === 'string' || typeof value === 'number') {
    nodes.push({type: 'text', value: String(value)})
    return
  }

  if (typeof value === 'object' && 'length' in value) {
    index = -1
    length = value.length

    while (++index < length) {
      addChild(nodes, value[index])
    }

    return
  }

  if (typeof value !== 'object' || !('type' in value)) {
    throw new Error('Expected node, nodes, or string, got `' + value + '`')
  }

  nodes.push(value)
}

// Parse a (list of) primitives.
function parsePrimitives(info, name, value) {
  var index
  var length
  var result

  if (typeof value !== 'object' || !('length' in value)) {
    return parsePrimitive(info, name, value)
  }

  length = value.length
  index = -1
  result = []

  while (++index < length) {
    result[index] = parsePrimitive(info, name, value[index])
  }

  return result
}

// Parse a single primitives.
function parsePrimitive(info, name, value) {
  var result = value

  if (info.number || info.positiveNumber) {
    if (!isNaN(result) && result !== '') {
      result = Number(result)
    }
  } else if (info.boolean || info.overloadedBoolean) {
    // Accept `boolean` and `string`.
    if (
      typeof result === 'string' &&
      (result === '' || normalize(value) === normalize(name))
    ) {
      result = true
    }
  }

  return result
}

function style(value) {
  var result = []
  var key

  for (key in value) {
    result.push([key, value[key]].join(': '))
  }

  return result.join('; ')
}

function createAdjustMap(values) {
  var length = values.length
  var index = -1
  var result = {}
  var value

  while (++index < length) {
    value = values[index]
    result[value.toLowerCase()] = value
  }

  return result
}


/***/ }),

/***/ "./node_modules/hastscript/html.js":
/*!*****************************************!*\
  !*** ./node_modules/hastscript/html.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var schema = __webpack_require__(/*! property-information/html */ "./node_modules/property-information/html.js")
var factory = __webpack_require__(/*! ./factory */ "./node_modules/hastscript/factory.js")

var html = factory(schema, 'div')
html.displayName = 'html'

module.exports = html


/***/ }),

/***/ "./node_modules/hastscript/index.js":
/*!******************************************!*\
  !*** ./node_modules/hastscript/index.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = __webpack_require__(/*! ./html */ "./node_modules/hastscript/html.js")


/***/ }),

/***/ "./node_modules/is-alphabetical/index.js":
/*!***********************************************!*\
  !*** ./node_modules/is-alphabetical/index.js ***!
  \***********************************************/
/***/ ((module) => {

"use strict";


module.exports = alphabetical

// Check if the given character code, or the character code at the first
// character, is alphabetical.
function alphabetical(character) {
  var code = typeof character === 'string' ? character.charCodeAt(0) : character

  return (
    (code >= 97 && code <= 122) /* a-z */ ||
    (code >= 65 && code <= 90) /* A-Z */
  )
}


/***/ }),

/***/ "./node_modules/is-alphanumerical/index.js":
/*!*************************************************!*\
  !*** ./node_modules/is-alphanumerical/index.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var alphabetical = __webpack_require__(/*! is-alphabetical */ "./node_modules/is-alphabetical/index.js")
var decimal = __webpack_require__(/*! is-decimal */ "./node_modules/is-decimal/index.js")

module.exports = alphanumerical

// Check if the given character code, or the character code at the first
// character, is alphanumerical.
function alphanumerical(character) {
  return alphabetical(character) || decimal(character)
}


/***/ }),

/***/ "./node_modules/is-decimal/index.js":
/*!******************************************!*\
  !*** ./node_modules/is-decimal/index.js ***!
  \******************************************/
/***/ ((module) => {

"use strict";


module.exports = decimal

// Check if the given character code, or the character code at the first
// character, is decimal.
function decimal(character) {
  var code = typeof character === 'string' ? character.charCodeAt(0) : character

  return code >= 48 && code <= 57 /* 0-9 */
}


/***/ }),

/***/ "./node_modules/is-hexadecimal/index.js":
/*!**********************************************!*\
  !*** ./node_modules/is-hexadecimal/index.js ***!
  \**********************************************/
/***/ ((module) => {

"use strict";


module.exports = hexadecimal

// Check if the given character code, or the character code at the first
// character, is hexadecimal.
function hexadecimal(character) {
  var code = typeof character === 'string' ? character.charCodeAt(0) : character

  return (
    (code >= 97 /* a */ && code <= 102) /* z */ ||
    (code >= 65 /* A */ && code <= 70) /* Z */ ||
    (code >= 48 /* A */ && code <= 57) /* Z */
  )
}


/***/ }),

/***/ "./node_modules/parse-entities/decode-entity.browser.js":
/*!**************************************************************!*\
  !*** ./node_modules/parse-entities/decode-entity.browser.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";


/* eslint-env browser */

var el

var semicolon = 59 //  ';'

module.exports = decodeEntity

function decodeEntity(characters) {
  var entity = '&' + characters + ';'
  var char

  el = el || document.createElement('i')
  el.innerHTML = entity
  char = el.textContent

  // Some entities do not require the closing semicolon (`&not` - for instance),
  // which leads to situations where parsing the assumed entity of &notit; will
  // result in the string `¬it;`.  When we encounter a trailing semicolon after
  // parsing and the entity to decode was not a semicolon (`&semi;`), we can
  // assume that the matching was incomplete
  if (char.charCodeAt(char.length - 1) === semicolon && characters !== 'semi') {
    return false
  }

  // If the decoded string is equal to the input, the entity was not valid
  return char === entity ? false : char
}


/***/ }),

/***/ "./node_modules/parse-entities/index.js":
/*!**********************************************!*\
  !*** ./node_modules/parse-entities/index.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var legacy = __webpack_require__(/*! character-entities-legacy */ "./node_modules/character-entities-legacy/index.json")
var invalid = __webpack_require__(/*! character-reference-invalid */ "./node_modules/character-reference-invalid/index.json")
var decimal = __webpack_require__(/*! is-decimal */ "./node_modules/is-decimal/index.js")
var hexadecimal = __webpack_require__(/*! is-hexadecimal */ "./node_modules/is-hexadecimal/index.js")
var alphanumerical = __webpack_require__(/*! is-alphanumerical */ "./node_modules/is-alphanumerical/index.js")
var decodeEntity = __webpack_require__(/*! ./decode-entity */ "./node_modules/parse-entities/decode-entity.browser.js")

module.exports = parseEntities

var own = {}.hasOwnProperty
var fromCharCode = String.fromCharCode
var noop = Function.prototype

// Default settings.
var defaults = {
  warning: null,
  reference: null,
  text: null,
  warningContext: null,
  referenceContext: null,
  textContext: null,
  position: {},
  additional: null,
  attribute: false,
  nonTerminated: true
}

// Characters.
var tab = 9 // '\t'
var lineFeed = 10 // '\n'
var formFeed = 12 //  '\f'
var space = 32 // ' '
var ampersand = 38 //  '&'
var semicolon = 59 //  ';'
var lessThan = 60 //  '<'
var equalsTo = 61 //  '='
var numberSign = 35 //  '#'
var uppercaseX = 88 //  'X'
var lowercaseX = 120 //  'x'
var replacementCharacter = 65533 // '�'

// Reference types.
var name = 'named'
var hexa = 'hexadecimal'
var deci = 'decimal'

// Map of bases.
var bases = {}

bases[hexa] = 16
bases[deci] = 10

// Map of types to tests.
// Each type of character reference accepts different characters.
// This test is used to detect whether a reference has ended (as the semicolon
// is not strictly needed).
var tests = {}

tests[name] = alphanumerical
tests[deci] = decimal
tests[hexa] = hexadecimal

// Warning types.
var namedNotTerminated = 1
var numericNotTerminated = 2
var namedEmpty = 3
var numericEmpty = 4
var namedUnknown = 5
var numericDisallowed = 6
var numericProhibited = 7

// Warning messages.
var messages = {}

messages[namedNotTerminated] =
  'Named character references must be terminated by a semicolon'
messages[numericNotTerminated] =
  'Numeric character references must be terminated by a semicolon'
messages[namedEmpty] = 'Named character references cannot be empty'
messages[numericEmpty] = 'Numeric character references cannot be empty'
messages[namedUnknown] = 'Named character references must be known'
messages[numericDisallowed] =
  'Numeric character references cannot be disallowed'
messages[numericProhibited] =
  'Numeric character references cannot be outside the permissible Unicode range'

// Wrap to ensure clean parameters are given to `parse`.
function parseEntities(value, options) {
  var settings = {}
  var option
  var key

  if (!options) {
    options = {}
  }

  for (key in defaults) {
    option = options[key]
    settings[key] =
      option === null || option === undefined ? defaults[key] : option
  }

  if (settings.position.indent || settings.position.start) {
    settings.indent = settings.position.indent || []
    settings.position = settings.position.start
  }

  return parse(value, settings)
}

// Parse entities.
// eslint-disable-next-line complexity
function parse(value, settings) {
  var additional = settings.additional
  var nonTerminated = settings.nonTerminated
  var handleText = settings.text
  var handleReference = settings.reference
  var handleWarning = settings.warning
  var textContext = settings.textContext
  var referenceContext = settings.referenceContext
  var warningContext = settings.warningContext
  var pos = settings.position
  var indent = settings.indent || []
  var length = value.length
  var index = 0
  var lines = -1
  var column = pos.column || 1
  var line = pos.line || 1
  var queue = ''
  var result = []
  var entityCharacters
  var namedEntity
  var terminated
  var characters
  var character
  var reference
  var following
  var warning
  var reason
  var output
  var entity
  var begin
  var start
  var type
  var test
  var prev
  var next
  var diff
  var end

  if (typeof additional === 'string') {
    additional = additional.charCodeAt(0)
  }

  // Cache the current point.
  prev = now()

  // Wrap `handleWarning`.
  warning = handleWarning ? parseError : noop

  // Ensure the algorithm walks over the first character and the end (inclusive).
  index--
  length++

  while (++index < length) {
    // If the previous character was a newline.
    if (character === lineFeed) {
      column = indent[lines] || 1
    }

    character = value.charCodeAt(index)

    if (character === ampersand) {
      following = value.charCodeAt(index + 1)

      // The behaviour depends on the identity of the next character.
      if (
        following === tab ||
        following === lineFeed ||
        following === formFeed ||
        following === space ||
        following === ampersand ||
        following === lessThan ||
        following !== following ||
        (additional && following === additional)
      ) {
        // Not a character reference.
        // No characters are consumed, and nothing is returned.
        // This is not an error, either.
        queue += fromCharCode(character)
        column++

        continue
      }

      start = index + 1
      begin = start
      end = start

      if (following === numberSign) {
        // Numerical entity.
        end = ++begin

        // The behaviour further depends on the next character.
        following = value.charCodeAt(end)

        if (following === uppercaseX || following === lowercaseX) {
          // ASCII hex digits.
          type = hexa
          end = ++begin
        } else {
          // ASCII digits.
          type = deci
        }
      } else {
        // Named entity.
        type = name
      }

      entityCharacters = ''
      entity = ''
      characters = ''
      test = tests[type]
      end--

      while (++end < length) {
        following = value.charCodeAt(end)

        if (!test(following)) {
          break
        }

        characters += fromCharCode(following)

        // Check if we can match a legacy named reference.
        // If so, we cache that as the last viable named reference.
        // This ensures we do not need to walk backwards later.
        if (type === name && own.call(legacy, characters)) {
          entityCharacters = characters
          entity = legacy[characters]
        }
      }

      terminated = value.charCodeAt(end) === semicolon

      if (terminated) {
        end++

        namedEntity = type === name ? decodeEntity(characters) : false

        if (namedEntity) {
          entityCharacters = characters
          entity = namedEntity
        }
      }

      diff = 1 + end - start

      if (!terminated && !nonTerminated) {
        // Empty.
      } else if (!characters) {
        // An empty (possible) entity is valid, unless it’s numeric (thus an
        // ampersand followed by an octothorp).
        if (type !== name) {
          warning(numericEmpty, diff)
        }
      } else if (type === name) {
        // An ampersand followed by anything unknown, and not terminated, is
        // invalid.
        if (terminated && !entity) {
          warning(namedUnknown, 1)
        } else {
          // If theres something after an entity name which is not known, cap
          // the reference.
          if (entityCharacters !== characters) {
            end = begin + entityCharacters.length
            diff = 1 + end - begin
            terminated = false
          }

          // If the reference is not terminated, warn.
          if (!terminated) {
            reason = entityCharacters ? namedNotTerminated : namedEmpty

            if (settings.attribute) {
              following = value.charCodeAt(end)

              if (following === equalsTo) {
                warning(reason, diff)
                entity = null
              } else if (alphanumerical(following)) {
                entity = null
              } else {
                warning(reason, diff)
              }
            } else {
              warning(reason, diff)
            }
          }
        }

        reference = entity
      } else {
        if (!terminated) {
          // All non-terminated numeric entities are not rendered, and trigger a
          // warning.
          warning(numericNotTerminated, diff)
        }

        // When terminated and number, parse as either hexadecimal or decimal.
        reference = parseInt(characters, bases[type])

        // Trigger a warning when the parsed number is prohibited, and replace
        // with replacement character.
        if (prohibited(reference)) {
          warning(numericProhibited, diff)
          reference = fromCharCode(replacementCharacter)
        } else if (reference in invalid) {
          // Trigger a warning when the parsed number is disallowed, and replace
          // by an alternative.
          warning(numericDisallowed, diff)
          reference = invalid[reference]
        } else {
          // Parse the number.
          output = ''

          // Trigger a warning when the parsed number should not be used.
          if (disallowed(reference)) {
            warning(numericDisallowed, diff)
          }

          // Stringify the number.
          if (reference > 0xffff) {
            reference -= 0x10000
            output += fromCharCode((reference >>> (10 & 0x3ff)) | 0xd800)
            reference = 0xdc00 | (reference & 0x3ff)
          }

          reference = output + fromCharCode(reference)
        }
      }

      // Found it!
      // First eat the queued characters as normal text, then eat an entity.
      if (reference) {
        flush()

        prev = now()
        index = end - 1
        column += end - start + 1
        result.push(reference)
        next = now()
        next.offset++

        if (handleReference) {
          handleReference.call(
            referenceContext,
            reference,
            {start: prev, end: next},
            value.slice(start - 1, end)
          )
        }

        prev = next
      } else {
        // If we could not find a reference, queue the checked characters (as
        // normal characters), and move the pointer to their end.
        // This is possible because we can be certain neither newlines nor
        // ampersands are included.
        characters = value.slice(start - 1, end)
        queue += characters
        column += characters.length
        index = end - 1
      }
    } else {
      // Handle anything other than an ampersand, including newlines and EOF.
      if (
        character === 10 // Line feed
      ) {
        line++
        lines++
        column = 0
      }

      if (character === character) {
        queue += fromCharCode(character)
        column++
      } else {
        flush()
      }
    }
  }

  // Return the reduced nodes, and any possible warnings.
  return result.join('')

  // Get current position.
  function now() {
    return {
      line: line,
      column: column,
      offset: index + (pos.offset || 0)
    }
  }

  // “Throw” a parse-error: a warning.
  function parseError(code, offset) {
    var position = now()

    position.column += offset
    position.offset += offset

    handleWarning.call(warningContext, messages[code], position, code)
  }

  // Flush `queue` (normal text).
  // Macro invoked before each entity and at the end of `value`.
  // Does nothing when `queue` is empty.
  function flush() {
    if (queue) {
      result.push(queue)

      if (handleText) {
        handleText.call(textContext, queue, {start: prev, end: now()})
      }

      queue = ''
    }
  }
}

// Check if `character` is outside the permissible unicode range.
function prohibited(code) {
  return (code >= 0xd800 && code <= 0xdfff) || code > 0x10ffff
}

// Check if `character` is disallowed.
function disallowed(code) {
  return (
    (code >= 0x0001 && code <= 0x0008) ||
    code === 0x000b ||
    (code >= 0x000d && code <= 0x001f) ||
    (code >= 0x007f && code <= 0x009f) ||
    (code >= 0xfdd0 && code <= 0xfdef) ||
    (code & 0xffff) === 0xffff ||
    (code & 0xffff) === 0xfffe
  )
}


/***/ }),

/***/ "./node_modules/property-information/find.js":
/*!***************************************************!*\
  !*** ./node_modules/property-information/find.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var normalize = __webpack_require__(/*! ./normalize */ "./node_modules/property-information/normalize.js")
var DefinedInfo = __webpack_require__(/*! ./lib/util/defined-info */ "./node_modules/property-information/lib/util/defined-info.js")
var Info = __webpack_require__(/*! ./lib/util/info */ "./node_modules/property-information/lib/util/info.js")

var data = 'data'

module.exports = find

var valid = /^data[-\w.:]+$/i
var dash = /-[a-z]/g
var cap = /[A-Z]/g

function find(schema, value) {
  var normal = normalize(value)
  var prop = value
  var Type = Info

  if (normal in schema.normal) {
    return schema.property[schema.normal[normal]]
  }

  if (normal.length > 4 && normal.slice(0, 4) === data && valid.test(value)) {
    // Attribute or property.
    if (value.charAt(4) === '-') {
      prop = datasetToProperty(value)
    } else {
      value = datasetToAttribute(value)
    }

    Type = DefinedInfo
  }

  return new Type(prop, value)
}

function datasetToProperty(attribute) {
  var value = attribute.slice(5).replace(dash, camelcase)
  return data + value.charAt(0).toUpperCase() + value.slice(1)
}

function datasetToAttribute(property) {
  var value = property.slice(4)

  if (dash.test(value)) {
    return property
  }

  value = value.replace(cap, kebab)

  if (value.charAt(0) !== '-') {
    value = '-' + value
  }

  return data + value
}

function kebab($0) {
  return '-' + $0.toLowerCase()
}

function camelcase($0) {
  return $0.charAt(1).toUpperCase()
}


/***/ }),

/***/ "./node_modules/property-information/html.js":
/*!***************************************************!*\
  !*** ./node_modules/property-information/html.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var merge = __webpack_require__(/*! ./lib/util/merge */ "./node_modules/property-information/lib/util/merge.js")
var xlink = __webpack_require__(/*! ./lib/xlink */ "./node_modules/property-information/lib/xlink.js")
var xml = __webpack_require__(/*! ./lib/xml */ "./node_modules/property-information/lib/xml.js")
var xmlns = __webpack_require__(/*! ./lib/xmlns */ "./node_modules/property-information/lib/xmlns.js")
var aria = __webpack_require__(/*! ./lib/aria */ "./node_modules/property-information/lib/aria.js")
var html = __webpack_require__(/*! ./lib/html */ "./node_modules/property-information/lib/html.js")

module.exports = merge([xml, xlink, xmlns, aria, html])


/***/ }),

/***/ "./node_modules/property-information/lib/aria.js":
/*!*******************************************************!*\
  !*** ./node_modules/property-information/lib/aria.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var types = __webpack_require__(/*! ./util/types */ "./node_modules/property-information/lib/util/types.js")
var create = __webpack_require__(/*! ./util/create */ "./node_modules/property-information/lib/util/create.js")

var booleanish = types.booleanish
var number = types.number
var spaceSeparated = types.spaceSeparated

module.exports = create({
  transform: ariaTransform,
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: booleanish,
    ariaAutoComplete: null,
    ariaBusy: booleanish,
    ariaChecked: booleanish,
    ariaColCount: number,
    ariaColIndex: number,
    ariaColSpan: number,
    ariaControls: spaceSeparated,
    ariaCurrent: null,
    ariaDescribedBy: spaceSeparated,
    ariaDetails: null,
    ariaDisabled: booleanish,
    ariaDropEffect: spaceSeparated,
    ariaErrorMessage: null,
    ariaExpanded: booleanish,
    ariaFlowTo: spaceSeparated,
    ariaGrabbed: booleanish,
    ariaHasPopup: null,
    ariaHidden: booleanish,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: spaceSeparated,
    ariaLevel: number,
    ariaLive: null,
    ariaModal: booleanish,
    ariaMultiLine: booleanish,
    ariaMultiSelectable: booleanish,
    ariaOrientation: null,
    ariaOwns: spaceSeparated,
    ariaPlaceholder: null,
    ariaPosInSet: number,
    ariaPressed: booleanish,
    ariaReadOnly: booleanish,
    ariaRelevant: null,
    ariaRequired: booleanish,
    ariaRoleDescription: spaceSeparated,
    ariaRowCount: number,
    ariaRowIndex: number,
    ariaRowSpan: number,
    ariaSelected: booleanish,
    ariaSetSize: number,
    ariaSort: null,
    ariaValueMax: number,
    ariaValueMin: number,
    ariaValueNow: number,
    ariaValueText: null,
    role: null
  }
})

function ariaTransform(_, prop) {
  return prop === 'role' ? prop : 'aria-' + prop.slice(4).toLowerCase()
}


/***/ }),

/***/ "./node_modules/property-information/lib/html.js":
/*!*******************************************************!*\
  !*** ./node_modules/property-information/lib/html.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var types = __webpack_require__(/*! ./util/types */ "./node_modules/property-information/lib/util/types.js")
var create = __webpack_require__(/*! ./util/create */ "./node_modules/property-information/lib/util/create.js")
var caseInsensitiveTransform = __webpack_require__(/*! ./util/case-insensitive-transform */ "./node_modules/property-information/lib/util/case-insensitive-transform.js")

var boolean = types.boolean
var overloadedBoolean = types.overloadedBoolean
var booleanish = types.booleanish
var number = types.number
var spaceSeparated = types.spaceSeparated
var commaSeparated = types.commaSeparated

module.exports = create({
  space: 'html',
  attributes: {
    acceptcharset: 'accept-charset',
    classname: 'class',
    htmlfor: 'for',
    httpequiv: 'http-equiv'
  },
  transform: caseInsensitiveTransform,
  mustUseProperty: ['checked', 'multiple', 'muted', 'selected'],
  properties: {
    // Standard Properties.
    abbr: null,
    accept: commaSeparated,
    acceptCharset: spaceSeparated,
    accessKey: spaceSeparated,
    action: null,
    allow: null,
    allowFullScreen: boolean,
    allowPaymentRequest: boolean,
    allowUserMedia: boolean,
    alt: null,
    as: null,
    async: boolean,
    autoCapitalize: null,
    autoComplete: spaceSeparated,
    autoFocus: boolean,
    autoPlay: boolean,
    capture: boolean,
    charSet: null,
    checked: boolean,
    cite: null,
    className: spaceSeparated,
    cols: number,
    colSpan: null,
    content: null,
    contentEditable: booleanish,
    controls: boolean,
    controlsList: spaceSeparated,
    coords: number | commaSeparated,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: boolean,
    defer: boolean,
    dir: null,
    dirName: null,
    disabled: boolean,
    download: overloadedBoolean,
    draggable: booleanish,
    encType: null,
    enterKeyHint: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: boolean,
    formTarget: null,
    headers: spaceSeparated,
    height: number,
    hidden: boolean,
    high: number,
    href: null,
    hrefLang: null,
    htmlFor: spaceSeparated,
    httpEquiv: spaceSeparated,
    id: null,
    imageSizes: null,
    imageSrcSet: commaSeparated,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: boolean,
    itemId: null,
    itemProp: spaceSeparated,
    itemRef: spaceSeparated,
    itemScope: boolean,
    itemType: spaceSeparated,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: boolean,
    low: number,
    manifest: null,
    max: null,
    maxLength: number,
    media: null,
    method: null,
    min: null,
    minLength: number,
    multiple: boolean,
    muted: boolean,
    name: null,
    nonce: null,
    noModule: boolean,
    noValidate: boolean,
    onAbort: null,
    onAfterPrint: null,
    onAuxClick: null,
    onBeforePrint: null,
    onBeforeUnload: null,
    onBlur: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onContextMenu: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFormData: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLanguageChange: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadEnd: null,
    onLoadStart: null,
    onMessage: null,
    onMessageError: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRejectionHandled: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSecurityPolicyViolation: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onSlotChange: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnhandledRejection: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onWheel: null,
    open: boolean,
    optimum: number,
    pattern: null,
    ping: spaceSeparated,
    placeholder: null,
    playsInline: boolean,
    poster: null,
    preload: null,
    readOnly: boolean,
    referrerPolicy: null,
    rel: spaceSeparated,
    required: boolean,
    reversed: boolean,
    rows: number,
    rowSpan: number,
    sandbox: spaceSeparated,
    scope: null,
    scoped: boolean,
    seamless: boolean,
    selected: boolean,
    shape: null,
    size: number,
    sizes: null,
    slot: null,
    span: number,
    spellCheck: booleanish,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: commaSeparated,
    start: number,
    step: null,
    style: null,
    tabIndex: number,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: boolean,
    useMap: null,
    value: booleanish,
    width: number,
    wrap: null,

    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null, // Several. Use CSS `text-align` instead,
    aLink: null, // `<body>`. Use CSS `a:active {color}` instead
    archive: spaceSeparated, // `<object>`. List of URIs to archives
    axis: null, // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null, // `<body>`. Use CSS `background-image` instead
    bgColor: null, // `<body>` and table elements. Use CSS `background-color` instead
    border: number, // `<table>`. Use CSS `border-width` instead,
    borderColor: null, // `<table>`. Use CSS `border-color` instead,
    bottomMargin: number, // `<body>`
    cellPadding: null, // `<table>`
    cellSpacing: null, // `<table>`
    char: null, // Several table elements. When `align=char`, sets the character to align on
    charOff: null, // Several table elements. When `char`, offsets the alignment
    classId: null, // `<object>`
    clear: null, // `<br>`. Use CSS `clear` instead
    code: null, // `<object>`
    codeBase: null, // `<object>`
    codeType: null, // `<object>`
    color: null, // `<font>` and `<hr>`. Use CSS instead
    compact: boolean, // Lists. Use CSS to reduce space between items instead
    declare: boolean, // `<object>`
    event: null, // `<script>`
    face: null, // `<font>`. Use CSS instead
    frame: null, // `<table>`
    frameBorder: null, // `<iframe>`. Use CSS `border` instead
    hSpace: number, // `<img>` and `<object>`
    leftMargin: number, // `<body>`
    link: null, // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null, // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null, // `<img>`. Use a `<picture>`
    marginHeight: number, // `<body>`
    marginWidth: number, // `<body>`
    noResize: boolean, // `<frame>`
    noHref: boolean, // `<area>`. Use no href instead of an explicit `nohref`
    noShade: boolean, // `<hr>`. Use background-color and height instead of borders
    noWrap: boolean, // `<td>` and `<th>`
    object: null, // `<applet>`
    profile: null, // `<head>`
    prompt: null, // `<isindex>`
    rev: null, // `<link>`
    rightMargin: number, // `<body>`
    rules: null, // `<table>`
    scheme: null, // `<meta>`
    scrolling: booleanish, // `<frame>`. Use overflow in the child context
    standby: null, // `<object>`
    summary: null, // `<table>`
    text: null, // `<body>`. Use CSS `color` instead
    topMargin: number, // `<body>`
    valueType: null, // `<param>`
    version: null, // `<html>`. Use a doctype.
    vAlign: null, // Several. Use CSS `vertical-align` instead
    vLink: null, // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: number, // `<img>` and `<object>`

    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: boolean,
    disableRemotePlayback: boolean,
    prefix: null,
    property: null,
    results: number,
    security: null,
    unselectable: null
  }
})


/***/ }),

/***/ "./node_modules/property-information/lib/util/case-insensitive-transform.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/property-information/lib/util/case-insensitive-transform.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var caseSensitiveTransform = __webpack_require__(/*! ./case-sensitive-transform */ "./node_modules/property-information/lib/util/case-sensitive-transform.js")

module.exports = caseInsensitiveTransform

function caseInsensitiveTransform(attributes, property) {
  return caseSensitiveTransform(attributes, property.toLowerCase())
}


/***/ }),

/***/ "./node_modules/property-information/lib/util/case-sensitive-transform.js":
/*!********************************************************************************!*\
  !*** ./node_modules/property-information/lib/util/case-sensitive-transform.js ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";


module.exports = caseSensitiveTransform

function caseSensitiveTransform(attributes, attribute) {
  return attribute in attributes ? attributes[attribute] : attribute
}


/***/ }),

/***/ "./node_modules/property-information/lib/util/create.js":
/*!**************************************************************!*\
  !*** ./node_modules/property-information/lib/util/create.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var normalize = __webpack_require__(/*! ../../normalize */ "./node_modules/property-information/normalize.js")
var Schema = __webpack_require__(/*! ./schema */ "./node_modules/property-information/lib/util/schema.js")
var DefinedInfo = __webpack_require__(/*! ./defined-info */ "./node_modules/property-information/lib/util/defined-info.js")

module.exports = create

function create(definition) {
  var space = definition.space
  var mustUseProperty = definition.mustUseProperty || []
  var attributes = definition.attributes || {}
  var props = definition.properties
  var transform = definition.transform
  var property = {}
  var normal = {}
  var prop
  var info

  for (prop in props) {
    info = new DefinedInfo(
      prop,
      transform(attributes, prop),
      props[prop],
      space
    )

    if (mustUseProperty.indexOf(prop) !== -1) {
      info.mustUseProperty = true
    }

    property[prop] = info

    normal[normalize(prop)] = prop
    normal[normalize(info.attribute)] = prop
  }

  return new Schema(property, normal, space)
}


/***/ }),

/***/ "./node_modules/property-information/lib/util/defined-info.js":
/*!********************************************************************!*\
  !*** ./node_modules/property-information/lib/util/defined-info.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var Info = __webpack_require__(/*! ./info */ "./node_modules/property-information/lib/util/info.js")
var types = __webpack_require__(/*! ./types */ "./node_modules/property-information/lib/util/types.js")

module.exports = DefinedInfo

DefinedInfo.prototype = new Info()
DefinedInfo.prototype.defined = true

var checks = [
  'boolean',
  'booleanish',
  'overloadedBoolean',
  'number',
  'commaSeparated',
  'spaceSeparated',
  'commaOrSpaceSeparated'
]
var checksLength = checks.length

function DefinedInfo(property, attribute, mask, space) {
  var index = -1
  var check

  mark(this, 'space', space)

  Info.call(this, property, attribute)

  while (++index < checksLength) {
    check = checks[index]
    mark(this, check, (mask & types[check]) === types[check])
  }
}

function mark(values, key, value) {
  if (value) {
    values[key] = value
  }
}


/***/ }),

/***/ "./node_modules/property-information/lib/util/info.js":
/*!************************************************************!*\
  !*** ./node_modules/property-information/lib/util/info.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = Info

var proto = Info.prototype

proto.space = null
proto.attribute = null
proto.property = null
proto.boolean = false
proto.booleanish = false
proto.overloadedBoolean = false
proto.number = false
proto.commaSeparated = false
proto.spaceSeparated = false
proto.commaOrSpaceSeparated = false
proto.mustUseProperty = false
proto.defined = false

function Info(property, attribute) {
  this.property = property
  this.attribute = attribute
}


/***/ }),

/***/ "./node_modules/property-information/lib/util/merge.js":
/*!*************************************************************!*\
  !*** ./node_modules/property-information/lib/util/merge.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var xtend = __webpack_require__(/*! xtend */ "./node_modules/xtend/immutable.js")
var Schema = __webpack_require__(/*! ./schema */ "./node_modules/property-information/lib/util/schema.js")

module.exports = merge

function merge(definitions) {
  var length = definitions.length
  var property = []
  var normal = []
  var index = -1
  var info
  var space

  while (++index < length) {
    info = definitions[index]
    property.push(info.property)
    normal.push(info.normal)
    space = info.space
  }

  return new Schema(
    xtend.apply(null, property),
    xtend.apply(null, normal),
    space
  )
}


/***/ }),

/***/ "./node_modules/property-information/lib/util/schema.js":
/*!**************************************************************!*\
  !*** ./node_modules/property-information/lib/util/schema.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";


module.exports = Schema

var proto = Schema.prototype

proto.space = null
proto.normal = {}
proto.property = {}

function Schema(property, normal, space) {
  this.property = property
  this.normal = normal

  if (space) {
    this.space = space
  }
}


/***/ }),

/***/ "./node_modules/property-information/lib/util/types.js":
/*!*************************************************************!*\
  !*** ./node_modules/property-information/lib/util/types.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


var powers = 0

exports.boolean = increment()
exports.booleanish = increment()
exports.overloadedBoolean = increment()
exports.number = increment()
exports.spaceSeparated = increment()
exports.commaSeparated = increment()
exports.commaOrSpaceSeparated = increment()

function increment() {
  return Math.pow(2, ++powers)
}


/***/ }),

/***/ "./node_modules/property-information/lib/xlink.js":
/*!********************************************************!*\
  !*** ./node_modules/property-information/lib/xlink.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var create = __webpack_require__(/*! ./util/create */ "./node_modules/property-information/lib/util/create.js")

module.exports = create({
  space: 'xlink',
  transform: xlinkTransform,
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  }
})

function xlinkTransform(_, prop) {
  return 'xlink:' + prop.slice(5).toLowerCase()
}


/***/ }),

/***/ "./node_modules/property-information/lib/xml.js":
/*!******************************************************!*\
  !*** ./node_modules/property-information/lib/xml.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var create = __webpack_require__(/*! ./util/create */ "./node_modules/property-information/lib/util/create.js")

module.exports = create({
  space: 'xml',
  transform: xmlTransform,
  properties: {
    xmlLang: null,
    xmlBase: null,
    xmlSpace: null
  }
})

function xmlTransform(_, prop) {
  return 'xml:' + prop.slice(3).toLowerCase()
}


/***/ }),

/***/ "./node_modules/property-information/lib/xmlns.js":
/*!********************************************************!*\
  !*** ./node_modules/property-information/lib/xmlns.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var create = __webpack_require__(/*! ./util/create */ "./node_modules/property-information/lib/util/create.js")
var caseInsensitiveTransform = __webpack_require__(/*! ./util/case-insensitive-transform */ "./node_modules/property-information/lib/util/case-insensitive-transform.js")

module.exports = create({
  space: 'xmlns',
  attributes: {
    xmlnsxlink: 'xmlns:xlink'
  },
  transform: caseInsensitiveTransform,
  properties: {
    xmlns: null,
    xmlnsXLink: null
  }
})


/***/ }),

/***/ "./node_modules/property-information/normalize.js":
/*!********************************************************!*\
  !*** ./node_modules/property-information/normalize.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = normalize

function normalize(value) {
  return value.toLowerCase()
}


/***/ }),

/***/ "./node_modules/refractor/core.js":
/*!****************************************!*\
  !*** ./node_modules/refractor/core.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* global window, self */

var restore = capture()

// istanbul ignore next - Don't allow Prism to run on page load in browser or
// to start messaging from workers.
var ctx =
  typeof window === 'undefined'
    ? typeof self === 'undefined'
      ? {}
      : self
    : window

ctx.Prism = {manual: true, disableWorkerMessageHandler: true}

// Load all stuff in `prism.js` itself, except for `prism-file-highlight.js`.
// The wrapped non-leaky grammars are loaded instead of Prism’s originals.
var h = __webpack_require__(/*! hastscript */ "./node_modules/hastscript/index.js")
var decode = __webpack_require__(/*! parse-entities */ "./node_modules/parse-entities/index.js")
var Prism = __webpack_require__(/*! prismjs/components/prism-core */ "./node_modules/refractor/node_modules/prismjs/components/prism-core.js")
var markup = __webpack_require__(/*! ./lang/markup */ "./node_modules/refractor/lang/markup.js")
var css = __webpack_require__(/*! ./lang/css */ "./node_modules/refractor/lang/css.js")
var clike = __webpack_require__(/*! ./lang/clike */ "./node_modules/refractor/lang/clike.js")
var js = __webpack_require__(/*! ./lang/javascript */ "./node_modules/refractor/lang/javascript.js")

restore()

var own = {}.hasOwnProperty

// Inherit.
function Refractor() {}

Refractor.prototype = Prism

// Construct.
var refract = new Refractor()

// Expose.
module.exports = refract

// Create.
refract.highlight = highlight
refract.register = register
refract.alias = alias
refract.registered = registered
refract.listLanguages = listLanguages

// Register bundled grammars.
register(markup)
register(css)
register(clike)
register(js)

refract.util.encode = encode
refract.Token.stringify = stringify

function register(grammar) {
  if (typeof grammar !== 'function' || !grammar.displayName) {
    throw new Error('Expected `function` for `grammar`, got `' + grammar + '`')
  }

  // Do not duplicate registrations.
  if (refract.languages[grammar.displayName] === undefined) {
    grammar(refract)
  }
}

function alias(name, alias) {
  var languages = refract.languages
  var map = name
  var key
  var list
  var length
  var index

  if (alias) {
    map = {}
    map[name] = alias
  }

  for (key in map) {
    list = map[key]
    list = typeof list === 'string' ? [list] : list
    length = list.length
    index = -1

    while (++index < length) {
      languages[list[index]] = languages[key]
    }
  }
}

function highlight(value, name) {
  var sup = Prism.highlight
  var grammar

  if (typeof value !== 'string') {
    throw new Error('Expected `string` for `value`, got `' + value + '`')
  }

  // `name` is a grammar object.
  if (refract.util.type(name) === 'Object') {
    grammar = name
    name = null
  } else {
    if (typeof name !== 'string') {
      throw new Error('Expected `string` for `name`, got `' + name + '`')
    }

    if (own.call(refract.languages, name)) {
      grammar = refract.languages[name]
    } else {
      throw new Error('Unknown language: `' + name + '` is not registered')
    }
  }

  return sup.call(this, value, grammar, name)
}

function registered(language) {
  if (typeof language !== 'string') {
    throw new Error('Expected `string` for `language`, got `' + language + '`')
  }

  return own.call(refract.languages, language)
}

function listLanguages() {
  var languages = refract.languages
  var list = []
  var language

  for (language in languages) {
    if (
      own.call(languages, language) &&
      typeof languages[language] === 'object'
    ) {
      list.push(language)
    }
  }

  return list
}

function stringify(value, language, parent) {
  var env

  if (typeof value === 'string') {
    return {type: 'text', value: value}
  }

  if (refract.util.type(value) === 'Array') {
    return stringifyAll(value, language)
  }

  env = {
    type: value.type,
    content: refract.Token.stringify(value.content, language, parent),
    tag: 'span',
    classes: ['token', value.type],
    attributes: {},
    language: language,
    parent: parent
  }

  if (value.alias) {
    env.classes = env.classes.concat(value.alias)
  }

  refract.hooks.run('wrap', env)

  return h(
    env.tag + '.' + env.classes.join('.'),
    attributes(env.attributes),
    env.content
  )
}

function stringifyAll(values, language) {
  var result = []
  var length = values.length
  var index = -1
  var value

  while (++index < length) {
    value = values[index]

    if (value !== '' && value !== null && value !== undefined) {
      result.push(value)
    }
  }

  index = -1
  length = result.length

  while (++index < length) {
    value = result[index]
    result[index] = refract.Token.stringify(value, language, result)
  }

  return result
}

function encode(tokens) {
  return tokens
}

function attributes(attrs) {
  var key

  for (key in attrs) {
    attrs[key] = decode(attrs[key])
  }

  return attrs
}

function capture() {
  var defined = 'Prism' in __webpack_require__.g
  /* istanbul ignore next */
  var current = defined ? __webpack_require__.g.Prism : undefined

  return restore

  function restore() {
    /* istanbul ignore else - Clean leaks after Prism. */
    if (defined) {
      __webpack_require__.g.Prism = current
    } else {
      delete __webpack_require__.g.Prism
    }

    defined = undefined
    current = undefined
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/clike.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/clike.js ***!
  \**********************************************/
/***/ ((module) => {

"use strict";


module.exports = clike
clike.displayName = 'clike'
clike.aliases = []
function clike(Prism) {
  Prism.languages.clike = {
    comment: [
      {
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: true
      },
      {
        pattern: /(^|[^\\:])\/\/.*/,
        lookbehind: true,
        greedy: true
      }
    ],
    string: {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: true
    },
    'class-name': {
      pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
      lookbehind: true,
      inside: {
        punctuation: /[.\\]/
      }
    },
    keyword: /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
    boolean: /\b(?:true|false)\b/,
    function: /\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
    punctuation: /[{}[\];(),.:]/
  }
}


/***/ }),

/***/ "./node_modules/refractor/lang/css.js":
/*!********************************************!*\
  !*** ./node_modules/refractor/lang/css.js ***!
  \********************************************/
/***/ ((module) => {

"use strict";


module.exports = css
css.displayName = 'css'
css.aliases = []
function css(Prism) {
  ;(function(Prism) {
    var string = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/
    Prism.languages.css = {
      comment: /\/\*[\s\S]*?\*\//,
      atrule: {
        pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,
        inside: {
          rule: /@[\w-]+/ // See rest below
        }
      },
      url: {
        pattern: RegExp('url\\((?:' + string.source + '|[^\n\r()]*)\\)', 'i'),
        inside: {
          function: /^url/i,
          punctuation: /^\(|\)$/
        }
      },
      selector: RegExp(
        '[^{}\\s](?:[^{};"\']|' + string.source + ')*?(?=\\s*\\{)'
      ),
      string: {
        pattern: string,
        greedy: true
      },
      property: /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
      important: /!important\b/i,
      function: /[-a-z0-9]+(?=\()/i,
      punctuation: /[(){};:,]/
    }
    Prism.languages.css['atrule'].inside.rest = Prism.languages.css
    var markup = Prism.languages.markup
    if (markup) {
      markup.tag.addInlined('style', 'css')
      Prism.languages.insertBefore(
        'inside',
        'attr-value',
        {
          'style-attr': {
            pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
            inside: {
              'attr-name': {
                pattern: /^\s*style/i,
                inside: markup.tag.inside
              },
              punctuation: /^\s*=\s*['"]|['"]\s*$/,
              'attr-value': {
                pattern: /.+/i,
                inside: Prism.languages.css
              }
            },
            alias: 'language-css'
          }
        },
        markup.tag
      )
    }
  })(Prism)
}


/***/ }),

/***/ "./node_modules/refractor/lang/javascript.js":
/*!***************************************************!*\
  !*** ./node_modules/refractor/lang/javascript.js ***!
  \***************************************************/
/***/ ((module) => {

"use strict";


module.exports = javascript
javascript.displayName = 'javascript'
javascript.aliases = ['js']
function javascript(Prism) {
  Prism.languages.javascript = Prism.languages.extend('clike', {
    'class-name': [
      Prism.languages.clike['class-name'],
      {
        pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
        lookbehind: true
      }
    ],
    keyword: [
      {
        pattern: /((?:^|})\s*)(?:catch|finally)\b/,
        lookbehind: true
      },
      {
        pattern: /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: true
      }
    ],
    number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
    // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
    function: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    operator: /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
  })
  Prism.languages.javascript[
    'class-name'
  ][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/
  Prism.languages.insertBefore('javascript', 'keyword', {
    regex: {
      pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/,
      lookbehind: true,
      greedy: true
    },
    // This must be declared before keyword because we use "function" inside the look-forward
    'function-variable': {
      pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
      alias: 'function'
    },
    parameter: [
      {
        pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
        lookbehind: true,
        inside: Prism.languages.javascript
      },
      {
        pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
        inside: Prism.languages.javascript
      },
      {
        pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
        lookbehind: true,
        inside: Prism.languages.javascript
      },
      {
        pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
        lookbehind: true,
        inside: Prism.languages.javascript
      }
    ],
    constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
  })
  Prism.languages.insertBefore('javascript', 'string', {
    'template-string': {
      pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
      greedy: true,
      inside: {
        'template-punctuation': {
          pattern: /^`|`$/,
          alias: 'string'
        },
        interpolation: {
          pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
          lookbehind: true,
          inside: {
            'interpolation-punctuation': {
              pattern: /^\${|}$/,
              alias: 'punctuation'
            },
            rest: Prism.languages.javascript
          }
        },
        string: /[\s\S]+/
      }
    }
  })
  if (Prism.languages.markup) {
    Prism.languages.markup.tag.addInlined('script', 'javascript')
  }
  Prism.languages.js = Prism.languages.javascript
}


/***/ }),

/***/ "./node_modules/refractor/lang/markup.js":
/*!***********************************************!*\
  !*** ./node_modules/refractor/lang/markup.js ***!
  \***********************************************/
/***/ ((module) => {

"use strict";


module.exports = markup
markup.displayName = 'markup'
markup.aliases = ['xml', 'html', 'mathml', 'svg']
function markup(Prism) {
  Prism.languages.markup = {
    comment: /<!--[\s\S]*?-->/,
    prolog: /<\?[\s\S]+?\?>/,
    doctype: /<!DOCTYPE[\s\S]+?>/i,
    cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
    tag: {
      pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,
      greedy: true,
      inside: {
        tag: {
          pattern: /^<\/?[^\s>\/]+/i,
          inside: {
            punctuation: /^<\/?/,
            namespace: /^[^\s>\/:]+:/
          }
        },
        'attr-value': {
          pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,
          inside: {
            punctuation: [
              /^=/,
              {
                pattern: /^(\s*)["']|["']$/,
                lookbehind: true
              }
            ]
          }
        },
        punctuation: /\/?>/,
        'attr-name': {
          pattern: /[^\s>\/]+/,
          inside: {
            namespace: /^[^\s>\/:]+:/
          }
        }
      }
    },
    entity: /&#?[\da-z]{1,8};/i
  }
  Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] =
    Prism.languages.markup['entity'] // Plugin to make entity title show the real entity, idea by Roman Komarov
  Prism.hooks.add('wrap', function(env) {
    if (env.type === 'entity') {
      env.attributes['title'] = env.content.value.replace(/&amp;/, '&')
    }
  })
  Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
    /**
     * Adds an inlined language to markup.
     *
     * An example of an inlined language is CSS with `<style>` tags.
     *
     * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
     * case insensitive.
     * @param {string} lang The language key.
     * @example
     * addInlined('style', 'css');
     */
    value: function addInlined(tagName, lang) {
      var includedCdataInside = {}
      includedCdataInside['language-' + lang] = {
        pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
        lookbehind: true,
        inside: Prism.languages[lang]
      }
      includedCdataInside['cdata'] = /^<!\[CDATA\[|\]\]>$/i
      var inside = {
        'included-cdata': {
          pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
          inside: includedCdataInside
        }
      }
      inside['language-' + lang] = {
        pattern: /[\s\S]+/,
        inside: Prism.languages[lang]
      }
      var def = {}
      def[tagName] = {
        pattern: RegExp(
          /(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(
            /__/g,
            tagName
          ),
          'i'
        ),
        lookbehind: true,
        greedy: true,
        inside: inside
      }
      Prism.languages.insertBefore('markup', 'cdata', def)
    }
  })
  Prism.languages.xml = Prism.languages.extend('markup', {})
  Prism.languages.html = Prism.languages.markup
  Prism.languages.mathml = Prism.languages.markup
  Prism.languages.svg = Prism.languages.markup
}


/***/ }),

/***/ "./node_modules/refractor/node_modules/prismjs/components/prism-core.js":
/*!******************************************************************************!*\
  !*** ./node_modules/refractor/node_modules/prismjs/components/prism-core.js ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _self = (typeof window !== 'undefined')
	? window   // if in browser
	: (
		(typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope)
		? self // if in worker
		: {}   // if in node js
	);

/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 * MIT license http://www.opensource.org/licenses/mit-license.php/
 * @author Lea Verou http://lea.verou.me
 */

var Prism = (function (_self){

// Private helper vars
var lang = /\blang(?:uage)?-([\w-]+)\b/i;
var uniqueId = 0;

var _ = {
	manual: _self.Prism && _self.Prism.manual,
	disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,
	util: {
		encode: function (tokens) {
			if (tokens instanceof Token) {
				return new Token(tokens.type, _.util.encode(tokens.content), tokens.alias);
			} else if (Array.isArray(tokens)) {
				return tokens.map(_.util.encode);
			} else {
				return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
			}
		},

		type: function (o) {
			return Object.prototype.toString.call(o).slice(8, -1);
		},

		objId: function (obj) {
			if (!obj['__id']) {
				Object.defineProperty(obj, '__id', { value: ++uniqueId });
			}
			return obj['__id'];
		},

		// Deep clone a language definition (e.g. to extend it)
		clone: function deepClone(o, visited) {
			var clone, id, type = _.util.type(o);
			visited = visited || {};

			switch (type) {
				case 'Object':
					id = _.util.objId(o);
					if (visited[id]) {
						return visited[id];
					}
					clone = {};
					visited[id] = clone;

					for (var key in o) {
						if (o.hasOwnProperty(key)) {
							clone[key] = deepClone(o[key], visited);
						}
					}

					return clone;

				case 'Array':
					id = _.util.objId(o);
					if (visited[id]) {
						return visited[id];
					}
					clone = [];
					visited[id] = clone;

					o.forEach(function (v, i) {
						clone[i] = deepClone(v, visited);
					});

					return clone;

				default:
					return o;
			}
		}
	},

	languages: {
		extend: function (id, redef) {
			var lang = _.util.clone(_.languages[id]);

			for (var key in redef) {
				lang[key] = redef[key];
			}

			return lang;
		},

		/**
		 * Insert a token before another token in a language literal
		 * As this needs to recreate the object (we cannot actually insert before keys in object literals),
		 * we cannot just provide an object, we need an object and a key.
		 * @param inside The key (or language id) of the parent
		 * @param before The key to insert before.
		 * @param insert Object with the key/value pairs to insert
		 * @param root The object that contains `inside`. If equal to Prism.languages, it can be omitted.
		 */
		insertBefore: function (inside, before, insert, root) {
			root = root || _.languages;
			var grammar = root[inside];
			var ret = {};

			for (var token in grammar) {
				if (grammar.hasOwnProperty(token)) {

					if (token == before) {
						for (var newToken in insert) {
							if (insert.hasOwnProperty(newToken)) {
								ret[newToken] = insert[newToken];
							}
						}
					}

					// Do not insert token which also occur in insert. See #1525
					if (!insert.hasOwnProperty(token)) {
						ret[token] = grammar[token];
					}
				}
			}

			var old = root[inside];
			root[inside] = ret;

			// Update references in other language definitions
			_.languages.DFS(_.languages, function(key, value) {
				if (value === old && key != inside) {
					this[key] = ret;
				}
			});

			return ret;
		},

		// Traverse a language definition with Depth First Search
		DFS: function DFS(o, callback, type, visited) {
			visited = visited || {};

			var objId = _.util.objId;

			for (var i in o) {
				if (o.hasOwnProperty(i)) {
					callback.call(o, i, o[i], type || i);

					var property = o[i],
					    propertyType = _.util.type(property);

					if (propertyType === 'Object' && !visited[objId(property)]) {
						visited[objId(property)] = true;
						DFS(property, callback, null, visited);
					}
					else if (propertyType === 'Array' && !visited[objId(property)]) {
						visited[objId(property)] = true;
						DFS(property, callback, i, visited);
					}
				}
			}
		}
	},
	plugins: {},

	highlightAll: function(async, callback) {
		_.highlightAllUnder(document, async, callback);
	},

	highlightAllUnder: function(container, async, callback) {
		var env = {
			callback: callback,
			selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
		};

		_.hooks.run('before-highlightall', env);

		var elements = container.querySelectorAll(env.selector);

		for (var i=0, element; element = elements[i++];) {
			_.highlightElement(element, async === true, env.callback);
		}
	},

	highlightElement: function(element, async, callback) {
		// Find language
		var language = 'none', grammar, parent = element;

		while (parent && !lang.test(parent.className)) {
			parent = parent.parentNode;
		}

		if (parent) {
			language = (parent.className.match(lang) || [,'none'])[1].toLowerCase();
			grammar = _.languages[language];
		}

		// Set language on the element, if not present
		element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;

		if (element.parentNode) {
			// Set language on the parent, for styling
			parent = element.parentNode;

			if (/pre/i.test(parent.nodeName)) {
				parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
			}
		}

		var code = element.textContent;

		var env = {
			element: element,
			language: language,
			grammar: grammar,
			code: code
		};

		var insertHighlightedCode = function (highlightedCode) {
			env.highlightedCode = highlightedCode;

			_.hooks.run('before-insert', env);

			env.element.innerHTML = env.highlightedCode;

			_.hooks.run('after-highlight', env);
			_.hooks.run('complete', env);
			callback && callback.call(env.element);
		}

		_.hooks.run('before-sanity-check', env);

		if (!env.code) {
			_.hooks.run('complete', env);
			return;
		}

		_.hooks.run('before-highlight', env);

		if (!env.grammar) {
			insertHighlightedCode(_.util.encode(env.code));
			return;
		}

		if (async && _self.Worker) {
			var worker = new Worker(_.filename);

			worker.onmessage = function(evt) {
				insertHighlightedCode(evt.data);
			};

			worker.postMessage(JSON.stringify({
				language: env.language,
				code: env.code,
				immediateClose: true
			}));
		}
		else {
			insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
		}
	},

	highlight: function (text, grammar, language) {
		var env = {
			code: text,
			grammar: grammar,
			language: language
		};
		_.hooks.run('before-tokenize', env);
		env.tokens = _.tokenize(env.code, env.grammar);
		_.hooks.run('after-tokenize', env);
		return Token.stringify(_.util.encode(env.tokens), env.language);
	},

	matchGrammar: function (text, strarr, grammar, index, startPos, oneshot, target) {
		for (var token in grammar) {
			if(!grammar.hasOwnProperty(token) || !grammar[token]) {
				continue;
			}

			if (token == target) {
				return;
			}

			var patterns = grammar[token];
			patterns = (_.util.type(patterns) === "Array") ? patterns : [patterns];

			for (var j = 0; j < patterns.length; ++j) {
				var pattern = patterns[j],
					inside = pattern.inside,
					lookbehind = !!pattern.lookbehind,
					greedy = !!pattern.greedy,
					lookbehindLength = 0,
					alias = pattern.alias;

				if (greedy && !pattern.pattern.global) {
					// Without the global flag, lastIndex won't work
					var flags = pattern.pattern.toString().match(/[imuy]*$/)[0];
					pattern.pattern = RegExp(pattern.pattern.source, flags + "g");
				}

				pattern = pattern.pattern || pattern;

				// Don’t cache length as it changes during the loop
				for (var i = index, pos = startPos; i < strarr.length; pos += strarr[i].length, ++i) {

					var str = strarr[i];

					if (strarr.length > text.length) {
						// Something went terribly wrong, ABORT, ABORT!
						return;
					}

					if (str instanceof Token) {
						continue;
					}

					if (greedy && i != strarr.length - 1) {
						pattern.lastIndex = pos;
						var match = pattern.exec(text);
						if (!match) {
							break;
						}

						var from = match.index + (lookbehind ? match[1].length : 0),
						    to = match.index + match[0].length,
						    k = i,
						    p = pos;

						for (var len = strarr.length; k < len && (p < to || (!strarr[k].type && !strarr[k - 1].greedy)); ++k) {
							p += strarr[k].length;
							// Move the index i to the element in strarr that is closest to from
							if (from >= p) {
								++i;
								pos = p;
							}
						}

						// If strarr[i] is a Token, then the match starts inside another Token, which is invalid
						if (strarr[i] instanceof Token) {
							continue;
						}

						// Number of tokens to delete and replace with the new match
						delNum = k - i;
						str = text.slice(pos, p);
						match.index -= pos;
					} else {
						pattern.lastIndex = 0;

						var match = pattern.exec(str),
							delNum = 1;
					}

					if (!match) {
						if (oneshot) {
							break;
						}

						continue;
					}

					if(lookbehind) {
						lookbehindLength = match[1] ? match[1].length : 0;
					}

					var from = match.index + lookbehindLength,
					    match = match[0].slice(lookbehindLength),
					    to = from + match.length,
					    before = str.slice(0, from),
					    after = str.slice(to);

					var args = [i, delNum];

					if (before) {
						++i;
						pos += before.length;
						args.push(before);
					}

					var wrapped = new Token(token, inside? _.tokenize(match, inside) : match, alias, match, greedy);

					args.push(wrapped);

					if (after) {
						args.push(after);
					}

					Array.prototype.splice.apply(strarr, args);

					if (delNum != 1)
						_.matchGrammar(text, strarr, grammar, i, pos, true, token);

					if (oneshot)
						break;
				}
			}
		}
	},

	tokenize: function(text, grammar) {
		var strarr = [text];

		var rest = grammar.rest;

		if (rest) {
			for (var token in rest) {
				grammar[token] = rest[token];
			}

			delete grammar.rest;
		}

		_.matchGrammar(text, strarr, grammar, 0, 0, false);

		return strarr;
	},

	hooks: {
		all: {},

		add: function (name, callback) {
			var hooks = _.hooks.all;

			hooks[name] = hooks[name] || [];

			hooks[name].push(callback);
		},

		run: function (name, env) {
			var callbacks = _.hooks.all[name];

			if (!callbacks || !callbacks.length) {
				return;
			}

			for (var i=0, callback; callback = callbacks[i++];) {
				callback(env);
			}
		}
	},

	Token: Token
};

_self.Prism = _;

function Token(type, content, alias, matchedStr, greedy) {
	this.type = type;
	this.content = content;
	this.alias = alias;
	// Copy of the full string this token was created from
	this.length = (matchedStr || "").length|0;
	this.greedy = !!greedy;
}

Token.stringify = function(o, language) {
	if (typeof o == 'string') {
		return o;
	}

	if (Array.isArray(o)) {
		return o.map(function(element) {
			return Token.stringify(element, language);
		}).join('');
	}

	var env = {
		type: o.type,
		content: Token.stringify(o.content, language),
		tag: 'span',
		classes: ['token', o.type],
		attributes: {},
		language: language
	};

	if (o.alias) {
		var aliases = Array.isArray(o.alias) ? o.alias : [o.alias];
		Array.prototype.push.apply(env.classes, aliases);
	}

	_.hooks.run('wrap', env);

	var attributes = Object.keys(env.attributes).map(function(name) {
		return name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
	}).join(' ');

	return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + (attributes ? ' ' + attributes : '') + '>' + env.content + '</' + env.tag + '>';
};

if (!_self.document) {
	if (!_self.addEventListener) {
		// in Node.js
		return _;
	}

	if (!_.disableWorkerMessageHandler) {
		// In worker
		_self.addEventListener('message', function (evt) {
			var message = JSON.parse(evt.data),
				lang = message.language,
				code = message.code,
				immediateClose = message.immediateClose;

			_self.postMessage(_.highlight(code, _.languages[lang], lang));
			if (immediateClose) {
				_self.close();
			}
		}, false);
	}

	return _;
}

//Get current script and highlight
var script = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();

if (script) {
	_.filename = script.src;

	if (!_.manual && !script.hasAttribute('data-manual')) {
		if(document.readyState !== "loading") {
			if (window.requestAnimationFrame) {
				window.requestAnimationFrame(_.highlightAll);
			} else {
				window.setTimeout(_.highlightAll, 16);
			}
		}
		else {
			document.addEventListener('DOMContentLoaded', _.highlightAll);
		}
	}
}

return _;

})(_self);

if ( true && module.exports) {
	module.exports = Prism;
}

// hack for components to work correctly in node.js
if (typeof __webpack_require__.g !== 'undefined') {
	__webpack_require__.g.Prism = Prism;
}


/***/ }),

/***/ "./node_modules/space-separated-tokens/index.js":
/*!******************************************************!*\
  !*** ./node_modules/space-separated-tokens/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.parse = parse
exports.stringify = stringify

var empty = ''
var space = ' '
var whiteSpace = /[ \t\n\r\f]+/g

function parse(value) {
  var input = String(value || empty).trim()
  return input === empty ? [] : input.split(whiteSpace)
}

function stringify(values) {
  return values.join(space).trim()
}


/***/ }),

/***/ "./node_modules/xtend/immutable.js":
/*!*****************************************!*\
  !*** ./node_modules/xtend/immutable.js ***!
  \*****************************************/
/***/ ((module) => {

module.exports = extend

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
    var target = {}

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFkZXJwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2NvbW1hLXNlcGFyYXRlZC10b2tlbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaGVhZGVycHJvamVjdC8uL25vZGVfbW9kdWxlcy9oYXN0LXV0aWwtcGFyc2Utc2VsZWN0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaGVhZGVycHJvamVjdC8uL25vZGVfbW9kdWxlcy9oYXN0c2NyaXB0L2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vaGVhZGVycHJvamVjdC8uL25vZGVfbW9kdWxlcy9oYXN0c2NyaXB0L2h0bWwuanMiLCJ3ZWJwYWNrOi8vaGVhZGVycHJvamVjdC8uL25vZGVfbW9kdWxlcy9oYXN0c2NyaXB0L2luZGV4LmpzIiwid2VicGFjazovL2hlYWRlcnByb2plY3QvLi9ub2RlX21vZHVsZXMvaXMtYWxwaGFiZXRpY2FsL2luZGV4LmpzIiwid2VicGFjazovL2hlYWRlcnByb2plY3QvLi9ub2RlX21vZHVsZXMvaXMtYWxwaGFudW1lcmljYWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaGVhZGVycHJvamVjdC8uL25vZGVfbW9kdWxlcy9pcy1kZWNpbWFsL2luZGV4LmpzIiwid2VicGFjazovL2hlYWRlcnByb2plY3QvLi9ub2RlX21vZHVsZXMvaXMtaGV4YWRlY2ltYWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vaGVhZGVycHJvamVjdC8uL25vZGVfbW9kdWxlcy9wYXJzZS1lbnRpdGllcy9kZWNvZGUtZW50aXR5LmJyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vaGVhZGVycHJvamVjdC8uL25vZGVfbW9kdWxlcy9wYXJzZS1lbnRpdGllcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9oZWFkZXJwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3Byb3BlcnR5LWluZm9ybWF0aW9uL2ZpbmQuanMiLCJ3ZWJwYWNrOi8vaGVhZGVycHJvamVjdC8uL25vZGVfbW9kdWxlcy9wcm9wZXJ0eS1pbmZvcm1hdGlvbi9odG1sLmpzIiwid2VicGFjazovL2hlYWRlcnByb2plY3QvLi9ub2RlX21vZHVsZXMvcHJvcGVydHktaW5mb3JtYXRpb24vbGliL2FyaWEuanMiLCJ3ZWJwYWNrOi8vaGVhZGVycHJvamVjdC8uL25vZGVfbW9kdWxlcy9wcm9wZXJ0eS1pbmZvcm1hdGlvbi9saWIvaHRtbC5qcyIsIndlYnBhY2s6Ly9oZWFkZXJwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3Byb3BlcnR5LWluZm9ybWF0aW9uL2xpYi91dGlsL2Nhc2UtaW5zZW5zaXRpdmUtdHJhbnNmb3JtLmpzIiwid2VicGFjazovL2hlYWRlcnByb2plY3QvLi9ub2RlX21vZHVsZXMvcHJvcGVydHktaW5mb3JtYXRpb24vbGliL3V0aWwvY2FzZS1zZW5zaXRpdmUtdHJhbnNmb3JtLmpzIiwid2VicGFjazovL2hlYWRlcnByb2plY3QvLi9ub2RlX21vZHVsZXMvcHJvcGVydHktaW5mb3JtYXRpb24vbGliL3V0aWwvY3JlYXRlLmpzIiwid2VicGFjazovL2hlYWRlcnByb2plY3QvLi9ub2RlX21vZHVsZXMvcHJvcGVydHktaW5mb3JtYXRpb24vbGliL3V0aWwvZGVmaW5lZC1pbmZvLmpzIiwid2VicGFjazovL2hlYWRlcnByb2plY3QvLi9ub2RlX21vZHVsZXMvcHJvcGVydHktaW5mb3JtYXRpb24vbGliL3V0aWwvaW5mby5qcyIsIndlYnBhY2s6Ly9oZWFkZXJwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3Byb3BlcnR5LWluZm9ybWF0aW9uL2xpYi91dGlsL21lcmdlLmpzIiwid2VicGFjazovL2hlYWRlcnByb2plY3QvLi9ub2RlX21vZHVsZXMvcHJvcGVydHktaW5mb3JtYXRpb24vbGliL3V0aWwvc2NoZW1hLmpzIiwid2VicGFjazovL2hlYWRlcnByb2plY3QvLi9ub2RlX21vZHVsZXMvcHJvcGVydHktaW5mb3JtYXRpb24vbGliL3V0aWwvdHlwZXMuanMiLCJ3ZWJwYWNrOi8vaGVhZGVycHJvamVjdC8uL25vZGVfbW9kdWxlcy9wcm9wZXJ0eS1pbmZvcm1hdGlvbi9saWIveGxpbmsuanMiLCJ3ZWJwYWNrOi8vaGVhZGVycHJvamVjdC8uL25vZGVfbW9kdWxlcy9wcm9wZXJ0eS1pbmZvcm1hdGlvbi9saWIveG1sLmpzIiwid2VicGFjazovL2hlYWRlcnByb2plY3QvLi9ub2RlX21vZHVsZXMvcHJvcGVydHktaW5mb3JtYXRpb24vbGliL3htbG5zLmpzIiwid2VicGFjazovL2hlYWRlcnByb2plY3QvLi9ub2RlX21vZHVsZXMvcHJvcGVydHktaW5mb3JtYXRpb24vbm9ybWFsaXplLmpzIiwid2VicGFjazovL2hlYWRlcnByb2plY3QvLi9ub2RlX21vZHVsZXMvcmVmcmFjdG9yL2NvcmUuanMiLCJ3ZWJwYWNrOi8vaGVhZGVycHJvamVjdC8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy9jbGlrZS5qcyIsIndlYnBhY2s6Ly9oZWFkZXJwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL2Nzcy5qcyIsIndlYnBhY2s6Ly9oZWFkZXJwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL2phdmFzY3JpcHQuanMiLCJ3ZWJwYWNrOi8vaGVhZGVycHJvamVjdC8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3IvbGFuZy9tYXJrdXAuanMiLCJ3ZWJwYWNrOi8vaGVhZGVycHJvamVjdC8uL25vZGVfbW9kdWxlcy9yZWZyYWN0b3Ivbm9kZV9tb2R1bGVzL3ByaXNtanMvY29tcG9uZW50cy9wcmlzbS1jb3JlLmpzIiwid2VicGFjazovL2hlYWRlcnByb2plY3QvLi9ub2RlX21vZHVsZXMvc3BhY2Utc2VwYXJhdGVkLXRva2Vucy9pbmRleC5qcyIsIndlYnBhY2s6Ly9oZWFkZXJwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3h0ZW5kL2ltbXV0YWJsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVk7O0FBRVosYUFBYTtBQUNiLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFD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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0IscUJBQXFCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsdUNBQXVDLG1CQUFtQjs7QUFFMUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQ0FBbUMsbUVBQW1FO0FBQ3RHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsMEJBQTBCLDJCQUEyQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EseUVBQXlFO0FBQ3pFLEVBQUU7O0FBRUY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsQ0FBQzs7QUFFRCxJQUFJLEtBQTZCO0FBQ2pDO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLHFCQUFNO0FBQ2pCLENBQUMscUJBQU07QUFDUDs7Ozs7Ozs7Ozs7O0FDdGlCWTs7QUFFWixhQUFhO0FBQ2IsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2hCQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLG1CQUFtQixzQkFBc0I7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJmaWxlIjoicmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyL3JlZnJhY3Rvci1jb3JlLWltcG9ydC5idW5kbGUuMTAyNjBkNmRlMTExMGZmZmQzNTcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcblxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlXG5leHBvcnRzLnN0cmluZ2lmeSA9IHN0cmluZ2lmeVxuXG52YXIgY29tbWEgPSAnLCdcbnZhciBzcGFjZSA9ICcgJ1xudmFyIGVtcHR5ID0gJydcblxuLy8gUGFyc2UgY29tbWEtc2VwYXJhdGVkIHRva2VucyB0byBhbiBhcnJheS5cbmZ1bmN0aW9uIHBhcnNlKHZhbHVlKSB7XG4gIHZhciB2YWx1ZXMgPSBbXVxuICB2YXIgaW5wdXQgPSBTdHJpbmcodmFsdWUgfHwgZW1wdHkpXG4gIHZhciBpbmRleCA9IGlucHV0LmluZGV4T2YoY29tbWEpXG4gIHZhciBsYXN0SW5kZXggPSAwXG4gIHZhciBlbmQgPSBmYWxzZVxuICB2YXIgdmFsXG5cbiAgd2hpbGUgKCFlbmQpIHtcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICBpbmRleCA9IGlucHV0Lmxlbmd0aFxuICAgICAgZW5kID0gdHJ1ZVxuICAgIH1cblxuICAgIHZhbCA9IGlucHV0LnNsaWNlKGxhc3RJbmRleCwgaW5kZXgpLnRyaW0oKVxuXG4gICAgaWYgKHZhbCB8fCAhZW5kKSB7XG4gICAgICB2YWx1ZXMucHVzaCh2YWwpXG4gICAgfVxuXG4gICAgbGFzdEluZGV4ID0gaW5kZXggKyAxXG4gICAgaW5kZXggPSBpbnB1dC5pbmRleE9mKGNvbW1hLCBsYXN0SW5kZXgpXG4gIH1cblxuICByZXR1cm4gdmFsdWVzXG59XG5cbi8vIENvbXBpbGUgYW4gYXJyYXkgdG8gY29tbWEtc2VwYXJhdGVkIHRva2Vucy5cbi8vIGBvcHRpb25zLnBhZExlZnRgIChkZWZhdWx0OiBgdHJ1ZWApIHBhZHMgYSBzcGFjZSBsZWZ0IG9mIGVhY2ggdG9rZW4sIGFuZFxuLy8gYG9wdGlvbnMucGFkUmlnaHRgIChkZWZhdWx0OiBgZmFsc2VgKSBwYWRzIGEgc3BhY2UgdG8gdGhlIHJpZ2h0IG9mIGVhY2ggdG9rZW4uXG5mdW5jdGlvbiBzdHJpbmdpZnkodmFsdWVzLCBvcHRpb25zKSB7XG4gIHZhciBzZXR0aW5ncyA9IG9wdGlvbnMgfHwge31cbiAgdmFyIGxlZnQgPSBzZXR0aW5ncy5wYWRMZWZ0ID09PSBmYWxzZSA/IGVtcHR5IDogc3BhY2VcbiAgdmFyIHJpZ2h0ID0gc2V0dGluZ3MucGFkUmlnaHQgPyBzcGFjZSA6IGVtcHR5XG5cbiAgLy8gRW5zdXJlIHRoZSBsYXN0IGVtcHR5IGVudHJ5IGlzIHNlZW4uXG4gIGlmICh2YWx1ZXNbdmFsdWVzLmxlbmd0aCAtIDFdID09PSBlbXB0eSkge1xuICAgIHZhbHVlcyA9IHZhbHVlcy5jb25jYXQoZW1wdHkpXG4gIH1cblxuICByZXR1cm4gdmFsdWVzLmpvaW4ocmlnaHQgKyBjb21tYSArIGxlZnQpLnRyaW0oKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gcGFyc2VcblxudmFyIHNlYXJjaCA9IC9bIy5dL2dcblxuLy8gQ3JlYXRlIGEgaGFzdCBlbGVtZW50IGZyb20gYSBzaW1wbGUgQ1NTIHNlbGVjdG9yLlxuZnVuY3Rpb24gcGFyc2Uoc2VsZWN0b3IsIGRlZmF1bHRUYWdOYW1lKSB7XG4gIHZhciB2YWx1ZSA9IHNlbGVjdG9yIHx8ICcnXG4gIHZhciBuYW1lID0gZGVmYXVsdFRhZ05hbWUgfHwgJ2RpdidcbiAgdmFyIHByb3BzID0ge31cbiAgdmFyIHN0YXJ0ID0gMFxuICB2YXIgc3VidmFsdWVcbiAgdmFyIHByZXZpb3VzXG4gIHZhciBtYXRjaFxuXG4gIHdoaWxlIChzdGFydCA8IHZhbHVlLmxlbmd0aCkge1xuICAgIHNlYXJjaC5sYXN0SW5kZXggPSBzdGFydFxuICAgIG1hdGNoID0gc2VhcmNoLmV4ZWModmFsdWUpXG4gICAgc3VidmFsdWUgPSB2YWx1ZS5zbGljZShzdGFydCwgbWF0Y2ggPyBtYXRjaC5pbmRleCA6IHZhbHVlLmxlbmd0aClcblxuICAgIGlmIChzdWJ2YWx1ZSkge1xuICAgICAgaWYgKCFwcmV2aW91cykge1xuICAgICAgICBuYW1lID0gc3VidmFsdWVcbiAgICAgIH0gZWxzZSBpZiAocHJldmlvdXMgPT09ICcjJykge1xuICAgICAgICBwcm9wcy5pZCA9IHN1YnZhbHVlXG4gICAgICB9IGVsc2UgaWYgKHByb3BzLmNsYXNzTmFtZSkge1xuICAgICAgICBwcm9wcy5jbGFzc05hbWUucHVzaChzdWJ2YWx1ZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb3BzLmNsYXNzTmFtZSA9IFtzdWJ2YWx1ZV1cbiAgICAgIH1cblxuICAgICAgc3RhcnQgKz0gc3VidmFsdWUubGVuZ3RoXG4gICAgfVxuXG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICBwcmV2aW91cyA9IG1hdGNoWzBdXG4gICAgICBzdGFydCsrXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHt0eXBlOiAnZWxlbWVudCcsIHRhZ05hbWU6IG5hbWUsIHByb3BlcnRpZXM6IHByb3BzLCBjaGlsZHJlbjogW119XG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIGZpbmQgPSByZXF1aXJlKCdwcm9wZXJ0eS1pbmZvcm1hdGlvbi9maW5kJylcbnZhciBub3JtYWxpemUgPSByZXF1aXJlKCdwcm9wZXJ0eS1pbmZvcm1hdGlvbi9ub3JtYWxpemUnKVxudmFyIHBhcnNlU2VsZWN0b3IgPSByZXF1aXJlKCdoYXN0LXV0aWwtcGFyc2Utc2VsZWN0b3InKVxudmFyIHNwYWNlcyA9IHJlcXVpcmUoJ3NwYWNlLXNlcGFyYXRlZC10b2tlbnMnKS5wYXJzZVxudmFyIGNvbW1hcyA9IHJlcXVpcmUoJ2NvbW1hLXNlcGFyYXRlZC10b2tlbnMnKS5wYXJzZVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnlcblxudmFyIG93biA9IHt9Lmhhc093blByb3BlcnR5XG5cbmZ1bmN0aW9uIGZhY3Rvcnkoc2NoZW1hLCBkZWZhdWx0VGFnTmFtZSwgY2FzZVNlbnNpdGl2ZSkge1xuICB2YXIgYWRqdXN0ID0gY2FzZVNlbnNpdGl2ZSA/IGNyZWF0ZUFkanVzdE1hcChjYXNlU2Vuc2l0aXZlKSA6IG51bGxcblxuICByZXR1cm4gaFxuXG4gIC8vIEh5cGVyc2NyaXB0IGNvbXBhdGlibGUgRFNMIGZvciBjcmVhdGluZyB2aXJ0dWFsIGhhc3QgdHJlZXMuXG4gIGZ1bmN0aW9uIGgoc2VsZWN0b3IsIHByb3BlcnRpZXMpIHtcbiAgICB2YXIgbm9kZSA9IHBhcnNlU2VsZWN0b3Ioc2VsZWN0b3IsIGRlZmF1bHRUYWdOYW1lKVxuICAgIHZhciBjaGlsZHJlbiA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMilcbiAgICB2YXIgbmFtZSA9IG5vZGUudGFnTmFtZS50b0xvd2VyQ2FzZSgpXG4gICAgdmFyIHByb3BlcnR5XG5cbiAgICBub2RlLnRhZ05hbWUgPSBhZGp1c3QgJiYgb3duLmNhbGwoYWRqdXN0LCBuYW1lKSA/IGFkanVzdFtuYW1lXSA6IG5hbWVcblxuICAgIGlmIChwcm9wZXJ0aWVzICYmIGlzQ2hpbGRyZW4ocHJvcGVydGllcywgbm9kZSkpIHtcbiAgICAgIGNoaWxkcmVuLnVuc2hpZnQocHJvcGVydGllcylcbiAgICAgIHByb3BlcnRpZXMgPSBudWxsXG4gICAgfVxuXG4gICAgaWYgKHByb3BlcnRpZXMpIHtcbiAgICAgIGZvciAocHJvcGVydHkgaW4gcHJvcGVydGllcykge1xuICAgICAgICBhZGRQcm9wZXJ0eShub2RlLnByb3BlcnRpZXMsIHByb3BlcnR5LCBwcm9wZXJ0aWVzW3Byb3BlcnR5XSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhZGRDaGlsZChub2RlLmNoaWxkcmVuLCBjaGlsZHJlbilcblxuICAgIGlmIChub2RlLnRhZ05hbWUgPT09ICd0ZW1wbGF0ZScpIHtcbiAgICAgIG5vZGUuY29udGVudCA9IHt0eXBlOiAncm9vdCcsIGNoaWxkcmVuOiBub2RlLmNoaWxkcmVufVxuICAgICAgbm9kZS5jaGlsZHJlbiA9IFtdXG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGVcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZFByb3BlcnR5KHByb3BlcnRpZXMsIGtleSwgdmFsdWUpIHtcbiAgICB2YXIgaW5mb1xuICAgIHZhciBwcm9wZXJ0eVxuICAgIHZhciByZXN1bHRcblxuICAgIC8vIElnbm9yZSBudWxseSBhbmQgTmFOIHZhbHVlcy5cbiAgICBpZiAodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGluZm8gPSBmaW5kKHNjaGVtYSwga2V5KVxuICAgIHByb3BlcnR5ID0gaW5mby5wcm9wZXJ0eVxuICAgIHJlc3VsdCA9IHZhbHVlXG5cbiAgICAvLyBIYW5kbGUgbGlzdCB2YWx1ZXMuXG4gICAgaWYgKHR5cGVvZiByZXN1bHQgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpZiAoaW5mby5zcGFjZVNlcGFyYXRlZCkge1xuICAgICAgICByZXN1bHQgPSBzcGFjZXMocmVzdWx0KVxuICAgICAgfSBlbHNlIGlmIChpbmZvLmNvbW1hU2VwYXJhdGVkKSB7XG4gICAgICAgIHJlc3VsdCA9IGNvbW1hcyhyZXN1bHQpXG4gICAgICB9IGVsc2UgaWYgKGluZm8uY29tbWFPclNwYWNlU2VwYXJhdGVkKSB7XG4gICAgICAgIHJlc3VsdCA9IHNwYWNlcyhjb21tYXMocmVzdWx0KS5qb2luKCcgJykpXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWNjZXB0IGBvYmplY3RgIG9uIHN0eWxlLlxuICAgIGlmIChwcm9wZXJ0eSA9PT0gJ3N0eWxlJyAmJiB0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICByZXN1bHQgPSBzdHlsZShyZXN1bHQpXG4gICAgfVxuXG4gICAgLy8gQ2xhc3MtbmFtZXMgKHdoaWNoIGNhbiBiZSBhZGRlZCBib3RoIG9uIHRoZSBgc2VsZWN0b3JgIGFuZCBoZXJlKS5cbiAgICBpZiAocHJvcGVydHkgPT09ICdjbGFzc05hbWUnICYmIHByb3BlcnRpZXMuY2xhc3NOYW1lKSB7XG4gICAgICByZXN1bHQgPSBwcm9wZXJ0aWVzLmNsYXNzTmFtZS5jb25jYXQocmVzdWx0KVxuICAgIH1cblxuICAgIHByb3BlcnRpZXNbcHJvcGVydHldID0gcGFyc2VQcmltaXRpdmVzKGluZm8sIHByb3BlcnR5LCByZXN1bHQpXG4gIH1cbn1cblxuZnVuY3Rpb24gaXNDaGlsZHJlbih2YWx1ZSwgbm9kZSkge1xuICByZXR1cm4gKFxuICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgfHxcbiAgICAnbGVuZ3RoJyBpbiB2YWx1ZSB8fFxuICAgIGlzTm9kZShub2RlLnRhZ05hbWUsIHZhbHVlKVxuICApXG59XG5cbmZ1bmN0aW9uIGlzTm9kZSh0YWdOYW1lLCB2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHZhbHVlLnR5cGVcblxuICBpZiAodGFnTmFtZSA9PT0gJ2lucHV0JyB8fCAhdHlwZSB8fCB0eXBlb2YgdHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUuY2hpbGRyZW4gPT09ICdvYmplY3QnICYmICdsZW5ndGgnIGluIHZhbHVlLmNoaWxkcmVuKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIHR5cGUgPSB0eXBlLnRvTG93ZXJDYXNlKClcblxuICBpZiAodGFnTmFtZSA9PT0gJ2J1dHRvbicpIHtcbiAgICByZXR1cm4gKFxuICAgICAgdHlwZSAhPT0gJ21lbnUnICYmXG4gICAgICB0eXBlICE9PSAnc3VibWl0JyAmJlxuICAgICAgdHlwZSAhPT0gJ3Jlc2V0JyAmJlxuICAgICAgdHlwZSAhPT0gJ2J1dHRvbidcbiAgICApXG4gIH1cblxuICByZXR1cm4gJ3ZhbHVlJyBpbiB2YWx1ZVxufVxuXG5mdW5jdGlvbiBhZGRDaGlsZChub2RlcywgdmFsdWUpIHtcbiAgdmFyIGluZGV4XG4gIHZhciBsZW5ndGhcblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgbm9kZXMucHVzaCh7dHlwZTogJ3RleHQnLCB2YWx1ZTogU3RyaW5nKHZhbHVlKX0pXG4gICAgcmV0dXJuXG4gIH1cblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiAnbGVuZ3RoJyBpbiB2YWx1ZSkge1xuICAgIGluZGV4ID0gLTFcbiAgICBsZW5ndGggPSB2YWx1ZS5sZW5ndGhcblxuICAgIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgICBhZGRDaGlsZChub2RlcywgdmFsdWVbaW5kZXhdKVxuICAgIH1cblxuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ29iamVjdCcgfHwgISgndHlwZScgaW4gdmFsdWUpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBub2RlLCBub2Rlcywgb3Igc3RyaW5nLCBnb3QgYCcgKyB2YWx1ZSArICdgJylcbiAgfVxuXG4gIG5vZGVzLnB1c2godmFsdWUpXG59XG5cbi8vIFBhcnNlIGEgKGxpc3Qgb2YpIHByaW1pdGl2ZXMuXG5mdW5jdGlvbiBwYXJzZVByaW1pdGl2ZXMoaW5mbywgbmFtZSwgdmFsdWUpIHtcbiAgdmFyIGluZGV4XG4gIHZhciBsZW5ndGhcbiAgdmFyIHJlc3VsdFxuXG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnIHx8ICEoJ2xlbmd0aCcgaW4gdmFsdWUpKSB7XG4gICAgcmV0dXJuIHBhcnNlUHJpbWl0aXZlKGluZm8sIG5hbWUsIHZhbHVlKVxuICB9XG5cbiAgbGVuZ3RoID0gdmFsdWUubGVuZ3RoXG4gIGluZGV4ID0gLTFcbiAgcmVzdWx0ID0gW11cblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHJlc3VsdFtpbmRleF0gPSBwYXJzZVByaW1pdGl2ZShpbmZvLCBuYW1lLCB2YWx1ZVtpbmRleF0pXG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG5cbi8vIFBhcnNlIGEgc2luZ2xlIHByaW1pdGl2ZXMuXG5mdW5jdGlvbiBwYXJzZVByaW1pdGl2ZShpbmZvLCBuYW1lLCB2YWx1ZSkge1xuICB2YXIgcmVzdWx0ID0gdmFsdWVcblxuICBpZiAoaW5mby5udW1iZXIgfHwgaW5mby5wb3NpdGl2ZU51bWJlcikge1xuICAgIGlmICghaXNOYU4ocmVzdWx0KSAmJiByZXN1bHQgIT09ICcnKSB7XG4gICAgICByZXN1bHQgPSBOdW1iZXIocmVzdWx0KVxuICAgIH1cbiAgfSBlbHNlIGlmIChpbmZvLmJvb2xlYW4gfHwgaW5mby5vdmVybG9hZGVkQm9vbGVhbikge1xuICAgIC8vIEFjY2VwdCBgYm9vbGVhbmAgYW5kIGBzdHJpbmdgLlxuICAgIGlmIChcbiAgICAgIHR5cGVvZiByZXN1bHQgPT09ICdzdHJpbmcnICYmXG4gICAgICAocmVzdWx0ID09PSAnJyB8fCBub3JtYWxpemUodmFsdWUpID09PSBub3JtYWxpemUobmFtZSkpXG4gICAgKSB7XG4gICAgICByZXN1bHQgPSB0cnVlXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5mdW5jdGlvbiBzdHlsZSh2YWx1ZSkge1xuICB2YXIgcmVzdWx0ID0gW11cbiAgdmFyIGtleVxuXG4gIGZvciAoa2V5IGluIHZhbHVlKSB7XG4gICAgcmVzdWx0LnB1c2goW2tleSwgdmFsdWVba2V5XV0uam9pbignOiAnKSlcbiAgfVxuXG4gIHJldHVybiByZXN1bHQuam9pbignOyAnKVxufVxuXG5mdW5jdGlvbiBjcmVhdGVBZGp1c3RNYXAodmFsdWVzKSB7XG4gIHZhciBsZW5ndGggPSB2YWx1ZXMubGVuZ3RoXG4gIHZhciBpbmRleCA9IC0xXG4gIHZhciByZXN1bHQgPSB7fVxuICB2YXIgdmFsdWVcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhbHVlID0gdmFsdWVzW2luZGV4XVxuICAgIHJlc3VsdFt2YWx1ZS50b0xvd2VyQ2FzZSgpXSA9IHZhbHVlXG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHNjaGVtYSA9IHJlcXVpcmUoJ3Byb3BlcnR5LWluZm9ybWF0aW9uL2h0bWwnKVxudmFyIGZhY3RvcnkgPSByZXF1aXJlKCcuL2ZhY3RvcnknKVxuXG52YXIgaHRtbCA9IGZhY3Rvcnkoc2NoZW1hLCAnZGl2Jylcbmh0bWwuZGlzcGxheU5hbWUgPSAnaHRtbCdcblxubW9kdWxlLmV4cG9ydHMgPSBodG1sXG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2h0bWwnKVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gYWxwaGFiZXRpY2FsXG5cbi8vIENoZWNrIGlmIHRoZSBnaXZlbiBjaGFyYWN0ZXIgY29kZSwgb3IgdGhlIGNoYXJhY3RlciBjb2RlIGF0IHRoZSBmaXJzdFxuLy8gY2hhcmFjdGVyLCBpcyBhbHBoYWJldGljYWwuXG5mdW5jdGlvbiBhbHBoYWJldGljYWwoY2hhcmFjdGVyKSB7XG4gIHZhciBjb2RlID0gdHlwZW9mIGNoYXJhY3RlciA9PT0gJ3N0cmluZycgPyBjaGFyYWN0ZXIuY2hhckNvZGVBdCgwKSA6IGNoYXJhY3RlclxuXG4gIHJldHVybiAoXG4gICAgKGNvZGUgPj0gOTcgJiYgY29kZSA8PSAxMjIpIC8qIGEteiAqLyB8fFxuICAgIChjb2RlID49IDY1ICYmIGNvZGUgPD0gOTApIC8qIEEtWiAqL1xuICApXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIGFscGhhYmV0aWNhbCA9IHJlcXVpcmUoJ2lzLWFscGhhYmV0aWNhbCcpXG52YXIgZGVjaW1hbCA9IHJlcXVpcmUoJ2lzLWRlY2ltYWwnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFscGhhbnVtZXJpY2FsXG5cbi8vIENoZWNrIGlmIHRoZSBnaXZlbiBjaGFyYWN0ZXIgY29kZSwgb3IgdGhlIGNoYXJhY3RlciBjb2RlIGF0IHRoZSBmaXJzdFxuLy8gY2hhcmFjdGVyLCBpcyBhbHBoYW51bWVyaWNhbC5cbmZ1bmN0aW9uIGFscGhhbnVtZXJpY2FsKGNoYXJhY3Rlcikge1xuICByZXR1cm4gYWxwaGFiZXRpY2FsKGNoYXJhY3RlcikgfHwgZGVjaW1hbChjaGFyYWN0ZXIpXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBkZWNpbWFsXG5cbi8vIENoZWNrIGlmIHRoZSBnaXZlbiBjaGFyYWN0ZXIgY29kZSwgb3IgdGhlIGNoYXJhY3RlciBjb2RlIGF0IHRoZSBmaXJzdFxuLy8gY2hhcmFjdGVyLCBpcyBkZWNpbWFsLlxuZnVuY3Rpb24gZGVjaW1hbChjaGFyYWN0ZXIpIHtcbiAgdmFyIGNvZGUgPSB0eXBlb2YgY2hhcmFjdGVyID09PSAnc3RyaW5nJyA/IGNoYXJhY3Rlci5jaGFyQ29kZUF0KDApIDogY2hhcmFjdGVyXG5cbiAgcmV0dXJuIGNvZGUgPj0gNDggJiYgY29kZSA8PSA1NyAvKiAwLTkgKi9cbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGhleGFkZWNpbWFsXG5cbi8vIENoZWNrIGlmIHRoZSBnaXZlbiBjaGFyYWN0ZXIgY29kZSwgb3IgdGhlIGNoYXJhY3RlciBjb2RlIGF0IHRoZSBmaXJzdFxuLy8gY2hhcmFjdGVyLCBpcyBoZXhhZGVjaW1hbC5cbmZ1bmN0aW9uIGhleGFkZWNpbWFsKGNoYXJhY3Rlcikge1xuICB2YXIgY29kZSA9IHR5cGVvZiBjaGFyYWN0ZXIgPT09ICdzdHJpbmcnID8gY2hhcmFjdGVyLmNoYXJDb2RlQXQoMCkgOiBjaGFyYWN0ZXJcblxuICByZXR1cm4gKFxuICAgIChjb2RlID49IDk3IC8qIGEgKi8gJiYgY29kZSA8PSAxMDIpIC8qIHogKi8gfHxcbiAgICAoY29kZSA+PSA2NSAvKiBBICovICYmIGNvZGUgPD0gNzApIC8qIFogKi8gfHxcbiAgICAoY29kZSA+PSA0OCAvKiBBICovICYmIGNvZGUgPD0gNTcpIC8qIFogKi9cbiAgKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuXG52YXIgZWxcblxudmFyIHNlbWljb2xvbiA9IDU5IC8vICAnOydcblxubW9kdWxlLmV4cG9ydHMgPSBkZWNvZGVFbnRpdHlcblxuZnVuY3Rpb24gZGVjb2RlRW50aXR5KGNoYXJhY3RlcnMpIHtcbiAgdmFyIGVudGl0eSA9ICcmJyArIGNoYXJhY3RlcnMgKyAnOydcbiAgdmFyIGNoYXJcblxuICBlbCA9IGVsIHx8IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKVxuICBlbC5pbm5lckhUTUwgPSBlbnRpdHlcbiAgY2hhciA9IGVsLnRleHRDb250ZW50XG5cbiAgLy8gU29tZSBlbnRpdGllcyBkbyBub3QgcmVxdWlyZSB0aGUgY2xvc2luZyBzZW1pY29sb24gKGAmbm90YCAtIGZvciBpbnN0YW5jZSksXG4gIC8vIHdoaWNoIGxlYWRzIHRvIHNpdHVhdGlvbnMgd2hlcmUgcGFyc2luZyB0aGUgYXNzdW1lZCBlbnRpdHkgb2YgJm5vdGl0OyB3aWxsXG4gIC8vIHJlc3VsdCBpbiB0aGUgc3RyaW5nIGDCrGl0O2AuICBXaGVuIHdlIGVuY291bnRlciBhIHRyYWlsaW5nIHNlbWljb2xvbiBhZnRlclxuICAvLyBwYXJzaW5nIGFuZCB0aGUgZW50aXR5IHRvIGRlY29kZSB3YXMgbm90IGEgc2VtaWNvbG9uIChgJnNlbWk7YCksIHdlIGNhblxuICAvLyBhc3N1bWUgdGhhdCB0aGUgbWF0Y2hpbmcgd2FzIGluY29tcGxldGVcbiAgaWYgKGNoYXIuY2hhckNvZGVBdChjaGFyLmxlbmd0aCAtIDEpID09PSBzZW1pY29sb24gJiYgY2hhcmFjdGVycyAhPT0gJ3NlbWknKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICAvLyBJZiB0aGUgZGVjb2RlZCBzdHJpbmcgaXMgZXF1YWwgdG8gdGhlIGlucHV0LCB0aGUgZW50aXR5IHdhcyBub3QgdmFsaWRcbiAgcmV0dXJuIGNoYXIgPT09IGVudGl0eSA/IGZhbHNlIDogY2hhclxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBsZWdhY3kgPSByZXF1aXJlKCdjaGFyYWN0ZXItZW50aXRpZXMtbGVnYWN5JylcbnZhciBpbnZhbGlkID0gcmVxdWlyZSgnY2hhcmFjdGVyLXJlZmVyZW5jZS1pbnZhbGlkJylcbnZhciBkZWNpbWFsID0gcmVxdWlyZSgnaXMtZGVjaW1hbCcpXG52YXIgaGV4YWRlY2ltYWwgPSByZXF1aXJlKCdpcy1oZXhhZGVjaW1hbCcpXG52YXIgYWxwaGFudW1lcmljYWwgPSByZXF1aXJlKCdpcy1hbHBoYW51bWVyaWNhbCcpXG52YXIgZGVjb2RlRW50aXR5ID0gcmVxdWlyZSgnLi9kZWNvZGUtZW50aXR5JylcblxubW9kdWxlLmV4cG9ydHMgPSBwYXJzZUVudGl0aWVzXG5cbnZhciBvd24gPSB7fS5oYXNPd25Qcm9wZXJ0eVxudmFyIGZyb21DaGFyQ29kZSA9IFN0cmluZy5mcm9tQ2hhckNvZGVcbnZhciBub29wID0gRnVuY3Rpb24ucHJvdG90eXBlXG5cbi8vIERlZmF1bHQgc2V0dGluZ3MuXG52YXIgZGVmYXVsdHMgPSB7XG4gIHdhcm5pbmc6IG51bGwsXG4gIHJlZmVyZW5jZTogbnVsbCxcbiAgdGV4dDogbnVsbCxcbiAgd2FybmluZ0NvbnRleHQ6IG51bGwsXG4gIHJlZmVyZW5jZUNvbnRleHQ6IG51bGwsXG4gIHRleHRDb250ZXh0OiBudWxsLFxuICBwb3NpdGlvbjoge30sXG4gIGFkZGl0aW9uYWw6IG51bGwsXG4gIGF0dHJpYnV0ZTogZmFsc2UsXG4gIG5vblRlcm1pbmF0ZWQ6IHRydWVcbn1cblxuLy8gQ2hhcmFjdGVycy5cbnZhciB0YWIgPSA5IC8vICdcXHQnXG52YXIgbGluZUZlZWQgPSAxMCAvLyAnXFxuJ1xudmFyIGZvcm1GZWVkID0gMTIgLy8gICdcXGYnXG52YXIgc3BhY2UgPSAzMiAvLyAnICdcbnZhciBhbXBlcnNhbmQgPSAzOCAvLyAgJyYnXG52YXIgc2VtaWNvbG9uID0gNTkgLy8gICc7J1xudmFyIGxlc3NUaGFuID0gNjAgLy8gICc8J1xudmFyIGVxdWFsc1RvID0gNjEgLy8gICc9J1xudmFyIG51bWJlclNpZ24gPSAzNSAvLyAgJyMnXG52YXIgdXBwZXJjYXNlWCA9IDg4IC8vICAnWCdcbnZhciBsb3dlcmNhc2VYID0gMTIwIC8vICAneCdcbnZhciByZXBsYWNlbWVudENoYXJhY3RlciA9IDY1NTMzIC8vICfvv70nXG5cbi8vIFJlZmVyZW5jZSB0eXBlcy5cbnZhciBuYW1lID0gJ25hbWVkJ1xudmFyIGhleGEgPSAnaGV4YWRlY2ltYWwnXG52YXIgZGVjaSA9ICdkZWNpbWFsJ1xuXG4vLyBNYXAgb2YgYmFzZXMuXG52YXIgYmFzZXMgPSB7fVxuXG5iYXNlc1toZXhhXSA9IDE2XG5iYXNlc1tkZWNpXSA9IDEwXG5cbi8vIE1hcCBvZiB0eXBlcyB0byB0ZXN0cy5cbi8vIEVhY2ggdHlwZSBvZiBjaGFyYWN0ZXIgcmVmZXJlbmNlIGFjY2VwdHMgZGlmZmVyZW50IGNoYXJhY3RlcnMuXG4vLyBUaGlzIHRlc3QgaXMgdXNlZCB0byBkZXRlY3Qgd2hldGhlciBhIHJlZmVyZW5jZSBoYXMgZW5kZWQgKGFzIHRoZSBzZW1pY29sb25cbi8vIGlzIG5vdCBzdHJpY3RseSBuZWVkZWQpLlxudmFyIHRlc3RzID0ge31cblxudGVzdHNbbmFtZV0gPSBhbHBoYW51bWVyaWNhbFxudGVzdHNbZGVjaV0gPSBkZWNpbWFsXG50ZXN0c1toZXhhXSA9IGhleGFkZWNpbWFsXG5cbi8vIFdhcm5pbmcgdHlwZXMuXG52YXIgbmFtZWROb3RUZXJtaW5hdGVkID0gMVxudmFyIG51bWVyaWNOb3RUZXJtaW5hdGVkID0gMlxudmFyIG5hbWVkRW1wdHkgPSAzXG52YXIgbnVtZXJpY0VtcHR5ID0gNFxudmFyIG5hbWVkVW5rbm93biA9IDVcbnZhciBudW1lcmljRGlzYWxsb3dlZCA9IDZcbnZhciBudW1lcmljUHJvaGliaXRlZCA9IDdcblxuLy8gV2FybmluZyBtZXNzYWdlcy5cbnZhciBtZXNzYWdlcyA9IHt9XG5cbm1lc3NhZ2VzW25hbWVkTm90VGVybWluYXRlZF0gPVxuICAnTmFtZWQgY2hhcmFjdGVyIHJlZmVyZW5jZXMgbXVzdCBiZSB0ZXJtaW5hdGVkIGJ5IGEgc2VtaWNvbG9uJ1xubWVzc2FnZXNbbnVtZXJpY05vdFRlcm1pbmF0ZWRdID1cbiAgJ051bWVyaWMgY2hhcmFjdGVyIHJlZmVyZW5jZXMgbXVzdCBiZSB0ZXJtaW5hdGVkIGJ5IGEgc2VtaWNvbG9uJ1xubWVzc2FnZXNbbmFtZWRFbXB0eV0gPSAnTmFtZWQgY2hhcmFjdGVyIHJlZmVyZW5jZXMgY2Fubm90IGJlIGVtcHR5J1xubWVzc2FnZXNbbnVtZXJpY0VtcHR5XSA9ICdOdW1lcmljIGNoYXJhY3RlciByZWZlcmVuY2VzIGNhbm5vdCBiZSBlbXB0eSdcbm1lc3NhZ2VzW25hbWVkVW5rbm93bl0gPSAnTmFtZWQgY2hhcmFjdGVyIHJlZmVyZW5jZXMgbXVzdCBiZSBrbm93bidcbm1lc3NhZ2VzW251bWVyaWNEaXNhbGxvd2VkXSA9XG4gICdOdW1lcmljIGNoYXJhY3RlciByZWZlcmVuY2VzIGNhbm5vdCBiZSBkaXNhbGxvd2VkJ1xubWVzc2FnZXNbbnVtZXJpY1Byb2hpYml0ZWRdID1cbiAgJ051bWVyaWMgY2hhcmFjdGVyIHJlZmVyZW5jZXMgY2Fubm90IGJlIG91dHNpZGUgdGhlIHBlcm1pc3NpYmxlIFVuaWNvZGUgcmFuZ2UnXG5cbi8vIFdyYXAgdG8gZW5zdXJlIGNsZWFuIHBhcmFtZXRlcnMgYXJlIGdpdmVuIHRvIGBwYXJzZWAuXG5mdW5jdGlvbiBwYXJzZUVudGl0aWVzKHZhbHVlLCBvcHRpb25zKSB7XG4gIHZhciBzZXR0aW5ncyA9IHt9XG4gIHZhciBvcHRpb25cbiAgdmFyIGtleVxuXG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fVxuICB9XG5cbiAgZm9yIChrZXkgaW4gZGVmYXVsdHMpIHtcbiAgICBvcHRpb24gPSBvcHRpb25zW2tleV1cbiAgICBzZXR0aW5nc1trZXldID1cbiAgICAgIG9wdGlvbiA9PT0gbnVsbCB8fCBvcHRpb24gPT09IHVuZGVmaW5lZCA/IGRlZmF1bHRzW2tleV0gOiBvcHRpb25cbiAgfVxuXG4gIGlmIChzZXR0aW5ncy5wb3NpdGlvbi5pbmRlbnQgfHwgc2V0dGluZ3MucG9zaXRpb24uc3RhcnQpIHtcbiAgICBzZXR0aW5ncy5pbmRlbnQgPSBzZXR0aW5ncy5wb3NpdGlvbi5pbmRlbnQgfHwgW11cbiAgICBzZXR0aW5ncy5wb3NpdGlvbiA9IHNldHRpbmdzLnBvc2l0aW9uLnN0YXJ0XG4gIH1cblxuICByZXR1cm4gcGFyc2UodmFsdWUsIHNldHRpbmdzKVxufVxuXG4vLyBQYXJzZSBlbnRpdGllcy5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb21wbGV4aXR5XG5mdW5jdGlvbiBwYXJzZSh2YWx1ZSwgc2V0dGluZ3MpIHtcbiAgdmFyIGFkZGl0aW9uYWwgPSBzZXR0aW5ncy5hZGRpdGlvbmFsXG4gIHZhciBub25UZXJtaW5hdGVkID0gc2V0dGluZ3Mubm9uVGVybWluYXRlZFxuICB2YXIgaGFuZGxlVGV4dCA9IHNldHRpbmdzLnRleHRcbiAgdmFyIGhhbmRsZVJlZmVyZW5jZSA9IHNldHRpbmdzLnJlZmVyZW5jZVxuICB2YXIgaGFuZGxlV2FybmluZyA9IHNldHRpbmdzLndhcm5pbmdcbiAgdmFyIHRleHRDb250ZXh0ID0gc2V0dGluZ3MudGV4dENvbnRleHRcbiAgdmFyIHJlZmVyZW5jZUNvbnRleHQgPSBzZXR0aW5ncy5yZWZlcmVuY2VDb250ZXh0XG4gIHZhciB3YXJuaW5nQ29udGV4dCA9IHNldHRpbmdzLndhcm5pbmdDb250ZXh0XG4gIHZhciBwb3MgPSBzZXR0aW5ncy5wb3NpdGlvblxuICB2YXIgaW5kZW50ID0gc2V0dGluZ3MuaW5kZW50IHx8IFtdXG4gIHZhciBsZW5ndGggPSB2YWx1ZS5sZW5ndGhcbiAgdmFyIGluZGV4ID0gMFxuICB2YXIgbGluZXMgPSAtMVxuICB2YXIgY29sdW1uID0gcG9zLmNvbHVtbiB8fCAxXG4gIHZhciBsaW5lID0gcG9zLmxpbmUgfHwgMVxuICB2YXIgcXVldWUgPSAnJ1xuICB2YXIgcmVzdWx0ID0gW11cbiAgdmFyIGVudGl0eUNoYXJhY3RlcnNcbiAgdmFyIG5hbWVkRW50aXR5XG4gIHZhciB0ZXJtaW5hdGVkXG4gIHZhciBjaGFyYWN0ZXJzXG4gIHZhciBjaGFyYWN0ZXJcbiAgdmFyIHJlZmVyZW5jZVxuICB2YXIgZm9sbG93aW5nXG4gIHZhciB3YXJuaW5nXG4gIHZhciByZWFzb25cbiAgdmFyIG91dHB1dFxuICB2YXIgZW50aXR5XG4gIHZhciBiZWdpblxuICB2YXIgc3RhcnRcbiAgdmFyIHR5cGVcbiAgdmFyIHRlc3RcbiAgdmFyIHByZXZcbiAgdmFyIG5leHRcbiAgdmFyIGRpZmZcbiAgdmFyIGVuZFxuXG4gIGlmICh0eXBlb2YgYWRkaXRpb25hbCA9PT0gJ3N0cmluZycpIHtcbiAgICBhZGRpdGlvbmFsID0gYWRkaXRpb25hbC5jaGFyQ29kZUF0KDApXG4gIH1cblxuICAvLyBDYWNoZSB0aGUgY3VycmVudCBwb2ludC5cbiAgcHJldiA9IG5vdygpXG5cbiAgLy8gV3JhcCBgaGFuZGxlV2FybmluZ2AuXG4gIHdhcm5pbmcgPSBoYW5kbGVXYXJuaW5nID8gcGFyc2VFcnJvciA6IG5vb3BcblxuICAvLyBFbnN1cmUgdGhlIGFsZ29yaXRobSB3YWxrcyBvdmVyIHRoZSBmaXJzdCBjaGFyYWN0ZXIgYW5kIHRoZSBlbmQgKGluY2x1c2l2ZSkuXG4gIGluZGV4LS1cbiAgbGVuZ3RoKytcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIC8vIElmIHRoZSBwcmV2aW91cyBjaGFyYWN0ZXIgd2FzIGEgbmV3bGluZS5cbiAgICBpZiAoY2hhcmFjdGVyID09PSBsaW5lRmVlZCkge1xuICAgICAgY29sdW1uID0gaW5kZW50W2xpbmVzXSB8fCAxXG4gICAgfVxuXG4gICAgY2hhcmFjdGVyID0gdmFsdWUuY2hhckNvZGVBdChpbmRleClcblxuICAgIGlmIChjaGFyYWN0ZXIgPT09IGFtcGVyc2FuZCkge1xuICAgICAgZm9sbG93aW5nID0gdmFsdWUuY2hhckNvZGVBdChpbmRleCArIDEpXG5cbiAgICAgIC8vIFRoZSBiZWhhdmlvdXIgZGVwZW5kcyBvbiB0aGUgaWRlbnRpdHkgb2YgdGhlIG5leHQgY2hhcmFjdGVyLlxuICAgICAgaWYgKFxuICAgICAgICBmb2xsb3dpbmcgPT09IHRhYiB8fFxuICAgICAgICBmb2xsb3dpbmcgPT09IGxpbmVGZWVkIHx8XG4gICAgICAgIGZvbGxvd2luZyA9PT0gZm9ybUZlZWQgfHxcbiAgICAgICAgZm9sbG93aW5nID09PSBzcGFjZSB8fFxuICAgICAgICBmb2xsb3dpbmcgPT09IGFtcGVyc2FuZCB8fFxuICAgICAgICBmb2xsb3dpbmcgPT09IGxlc3NUaGFuIHx8XG4gICAgICAgIGZvbGxvd2luZyAhPT0gZm9sbG93aW5nIHx8XG4gICAgICAgIChhZGRpdGlvbmFsICYmIGZvbGxvd2luZyA9PT0gYWRkaXRpb25hbClcbiAgICAgICkge1xuICAgICAgICAvLyBOb3QgYSBjaGFyYWN0ZXIgcmVmZXJlbmNlLlxuICAgICAgICAvLyBObyBjaGFyYWN0ZXJzIGFyZSBjb25zdW1lZCwgYW5kIG5vdGhpbmcgaXMgcmV0dXJuZWQuXG4gICAgICAgIC8vIFRoaXMgaXMgbm90IGFuIGVycm9yLCBlaXRoZXIuXG4gICAgICAgIHF1ZXVlICs9IGZyb21DaGFyQ29kZShjaGFyYWN0ZXIpXG4gICAgICAgIGNvbHVtbisrXG5cbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgc3RhcnQgPSBpbmRleCArIDFcbiAgICAgIGJlZ2luID0gc3RhcnRcbiAgICAgIGVuZCA9IHN0YXJ0XG5cbiAgICAgIGlmIChmb2xsb3dpbmcgPT09IG51bWJlclNpZ24pIHtcbiAgICAgICAgLy8gTnVtZXJpY2FsIGVudGl0eS5cbiAgICAgICAgZW5kID0gKytiZWdpblxuXG4gICAgICAgIC8vIFRoZSBiZWhhdmlvdXIgZnVydGhlciBkZXBlbmRzIG9uIHRoZSBuZXh0IGNoYXJhY3Rlci5cbiAgICAgICAgZm9sbG93aW5nID0gdmFsdWUuY2hhckNvZGVBdChlbmQpXG5cbiAgICAgICAgaWYgKGZvbGxvd2luZyA9PT0gdXBwZXJjYXNlWCB8fCBmb2xsb3dpbmcgPT09IGxvd2VyY2FzZVgpIHtcbiAgICAgICAgICAvLyBBU0NJSSBoZXggZGlnaXRzLlxuICAgICAgICAgIHR5cGUgPSBoZXhhXG4gICAgICAgICAgZW5kID0gKytiZWdpblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIEFTQ0lJIGRpZ2l0cy5cbiAgICAgICAgICB0eXBlID0gZGVjaVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBOYW1lZCBlbnRpdHkuXG4gICAgICAgIHR5cGUgPSBuYW1lXG4gICAgICB9XG5cbiAgICAgIGVudGl0eUNoYXJhY3RlcnMgPSAnJ1xuICAgICAgZW50aXR5ID0gJydcbiAgICAgIGNoYXJhY3RlcnMgPSAnJ1xuICAgICAgdGVzdCA9IHRlc3RzW3R5cGVdXG4gICAgICBlbmQtLVxuXG4gICAgICB3aGlsZSAoKytlbmQgPCBsZW5ndGgpIHtcbiAgICAgICAgZm9sbG93aW5nID0gdmFsdWUuY2hhckNvZGVBdChlbmQpXG5cbiAgICAgICAgaWYgKCF0ZXN0KGZvbGxvd2luZykpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG5cbiAgICAgICAgY2hhcmFjdGVycyArPSBmcm9tQ2hhckNvZGUoZm9sbG93aW5nKVxuXG4gICAgICAgIC8vIENoZWNrIGlmIHdlIGNhbiBtYXRjaCBhIGxlZ2FjeSBuYW1lZCByZWZlcmVuY2UuXG4gICAgICAgIC8vIElmIHNvLCB3ZSBjYWNoZSB0aGF0IGFzIHRoZSBsYXN0IHZpYWJsZSBuYW1lZCByZWZlcmVuY2UuXG4gICAgICAgIC8vIFRoaXMgZW5zdXJlcyB3ZSBkbyBub3QgbmVlZCB0byB3YWxrIGJhY2t3YXJkcyBsYXRlci5cbiAgICAgICAgaWYgKHR5cGUgPT09IG5hbWUgJiYgb3duLmNhbGwobGVnYWN5LCBjaGFyYWN0ZXJzKSkge1xuICAgICAgICAgIGVudGl0eUNoYXJhY3RlcnMgPSBjaGFyYWN0ZXJzXG4gICAgICAgICAgZW50aXR5ID0gbGVnYWN5W2NoYXJhY3RlcnNdXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGVybWluYXRlZCA9IHZhbHVlLmNoYXJDb2RlQXQoZW5kKSA9PT0gc2VtaWNvbG9uXG5cbiAgICAgIGlmICh0ZXJtaW5hdGVkKSB7XG4gICAgICAgIGVuZCsrXG5cbiAgICAgICAgbmFtZWRFbnRpdHkgPSB0eXBlID09PSBuYW1lID8gZGVjb2RlRW50aXR5KGNoYXJhY3RlcnMpIDogZmFsc2VcblxuICAgICAgICBpZiAobmFtZWRFbnRpdHkpIHtcbiAgICAgICAgICBlbnRpdHlDaGFyYWN0ZXJzID0gY2hhcmFjdGVyc1xuICAgICAgICAgIGVudGl0eSA9IG5hbWVkRW50aXR5XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZGlmZiA9IDEgKyBlbmQgLSBzdGFydFxuXG4gICAgICBpZiAoIXRlcm1pbmF0ZWQgJiYgIW5vblRlcm1pbmF0ZWQpIHtcbiAgICAgICAgLy8gRW1wdHkuXG4gICAgICB9IGVsc2UgaWYgKCFjaGFyYWN0ZXJzKSB7XG4gICAgICAgIC8vIEFuIGVtcHR5IChwb3NzaWJsZSkgZW50aXR5IGlzIHZhbGlkLCB1bmxlc3MgaXTigJlzIG51bWVyaWMgKHRodXMgYW5cbiAgICAgICAgLy8gYW1wZXJzYW5kIGZvbGxvd2VkIGJ5IGFuIG9jdG90aG9ycCkuXG4gICAgICAgIGlmICh0eXBlICE9PSBuYW1lKSB7XG4gICAgICAgICAgd2FybmluZyhudW1lcmljRW1wdHksIGRpZmYpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gbmFtZSkge1xuICAgICAgICAvLyBBbiBhbXBlcnNhbmQgZm9sbG93ZWQgYnkgYW55dGhpbmcgdW5rbm93biwgYW5kIG5vdCB0ZXJtaW5hdGVkLCBpc1xuICAgICAgICAvLyBpbnZhbGlkLlxuICAgICAgICBpZiAodGVybWluYXRlZCAmJiAhZW50aXR5KSB7XG4gICAgICAgICAgd2FybmluZyhuYW1lZFVua25vd24sIDEpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gSWYgdGhlcmVzIHNvbWV0aGluZyBhZnRlciBhbiBlbnRpdHkgbmFtZSB3aGljaCBpcyBub3Qga25vd24sIGNhcFxuICAgICAgICAgIC8vIHRoZSByZWZlcmVuY2UuXG4gICAgICAgICAgaWYgKGVudGl0eUNoYXJhY3RlcnMgIT09IGNoYXJhY3RlcnMpIHtcbiAgICAgICAgICAgIGVuZCA9IGJlZ2luICsgZW50aXR5Q2hhcmFjdGVycy5sZW5ndGhcbiAgICAgICAgICAgIGRpZmYgPSAxICsgZW5kIC0gYmVnaW5cbiAgICAgICAgICAgIHRlcm1pbmF0ZWQgPSBmYWxzZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIElmIHRoZSByZWZlcmVuY2UgaXMgbm90IHRlcm1pbmF0ZWQsIHdhcm4uXG4gICAgICAgICAgaWYgKCF0ZXJtaW5hdGVkKSB7XG4gICAgICAgICAgICByZWFzb24gPSBlbnRpdHlDaGFyYWN0ZXJzID8gbmFtZWROb3RUZXJtaW5hdGVkIDogbmFtZWRFbXB0eVxuXG4gICAgICAgICAgICBpZiAoc2V0dGluZ3MuYXR0cmlidXRlKSB7XG4gICAgICAgICAgICAgIGZvbGxvd2luZyA9IHZhbHVlLmNoYXJDb2RlQXQoZW5kKVxuXG4gICAgICAgICAgICAgIGlmIChmb2xsb3dpbmcgPT09IGVxdWFsc1RvKSB7XG4gICAgICAgICAgICAgICAgd2FybmluZyhyZWFzb24sIGRpZmYpXG4gICAgICAgICAgICAgICAgZW50aXR5ID0gbnVsbFxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFscGhhbnVtZXJpY2FsKGZvbGxvd2luZykpIHtcbiAgICAgICAgICAgICAgICBlbnRpdHkgPSBudWxsXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgd2FybmluZyhyZWFzb24sIGRpZmYpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHdhcm5pbmcocmVhc29uLCBkaWZmKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJlZmVyZW5jZSA9IGVudGl0eVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCF0ZXJtaW5hdGVkKSB7XG4gICAgICAgICAgLy8gQWxsIG5vbi10ZXJtaW5hdGVkIG51bWVyaWMgZW50aXRpZXMgYXJlIG5vdCByZW5kZXJlZCwgYW5kIHRyaWdnZXIgYVxuICAgICAgICAgIC8vIHdhcm5pbmcuXG4gICAgICAgICAgd2FybmluZyhudW1lcmljTm90VGVybWluYXRlZCwgZGlmZilcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFdoZW4gdGVybWluYXRlZCBhbmQgbnVtYmVyLCBwYXJzZSBhcyBlaXRoZXIgaGV4YWRlY2ltYWwgb3IgZGVjaW1hbC5cbiAgICAgICAgcmVmZXJlbmNlID0gcGFyc2VJbnQoY2hhcmFjdGVycywgYmFzZXNbdHlwZV0pXG5cbiAgICAgICAgLy8gVHJpZ2dlciBhIHdhcm5pbmcgd2hlbiB0aGUgcGFyc2VkIG51bWJlciBpcyBwcm9oaWJpdGVkLCBhbmQgcmVwbGFjZVxuICAgICAgICAvLyB3aXRoIHJlcGxhY2VtZW50IGNoYXJhY3Rlci5cbiAgICAgICAgaWYgKHByb2hpYml0ZWQocmVmZXJlbmNlKSkge1xuICAgICAgICAgIHdhcm5pbmcobnVtZXJpY1Byb2hpYml0ZWQsIGRpZmYpXG4gICAgICAgICAgcmVmZXJlbmNlID0gZnJvbUNoYXJDb2RlKHJlcGxhY2VtZW50Q2hhcmFjdGVyKVxuICAgICAgICB9IGVsc2UgaWYgKHJlZmVyZW5jZSBpbiBpbnZhbGlkKSB7XG4gICAgICAgICAgLy8gVHJpZ2dlciBhIHdhcm5pbmcgd2hlbiB0aGUgcGFyc2VkIG51bWJlciBpcyBkaXNhbGxvd2VkLCBhbmQgcmVwbGFjZVxuICAgICAgICAgIC8vIGJ5IGFuIGFsdGVybmF0aXZlLlxuICAgICAgICAgIHdhcm5pbmcobnVtZXJpY0Rpc2FsbG93ZWQsIGRpZmYpXG4gICAgICAgICAgcmVmZXJlbmNlID0gaW52YWxpZFtyZWZlcmVuY2VdXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gUGFyc2UgdGhlIG51bWJlci5cbiAgICAgICAgICBvdXRwdXQgPSAnJ1xuXG4gICAgICAgICAgLy8gVHJpZ2dlciBhIHdhcm5pbmcgd2hlbiB0aGUgcGFyc2VkIG51bWJlciBzaG91bGQgbm90IGJlIHVzZWQuXG4gICAgICAgICAgaWYgKGRpc2FsbG93ZWQocmVmZXJlbmNlKSkge1xuICAgICAgICAgICAgd2FybmluZyhudW1lcmljRGlzYWxsb3dlZCwgZGlmZilcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBTdHJpbmdpZnkgdGhlIG51bWJlci5cbiAgICAgICAgICBpZiAocmVmZXJlbmNlID4gMHhmZmZmKSB7XG4gICAgICAgICAgICByZWZlcmVuY2UgLT0gMHgxMDAwMFxuICAgICAgICAgICAgb3V0cHV0ICs9IGZyb21DaGFyQ29kZSgocmVmZXJlbmNlID4+PiAoMTAgJiAweDNmZikpIHwgMHhkODAwKVxuICAgICAgICAgICAgcmVmZXJlbmNlID0gMHhkYzAwIHwgKHJlZmVyZW5jZSAmIDB4M2ZmKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJlZmVyZW5jZSA9IG91dHB1dCArIGZyb21DaGFyQ29kZShyZWZlcmVuY2UpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gRm91bmQgaXQhXG4gICAgICAvLyBGaXJzdCBlYXQgdGhlIHF1ZXVlZCBjaGFyYWN0ZXJzIGFzIG5vcm1hbCB0ZXh0LCB0aGVuIGVhdCBhbiBlbnRpdHkuXG4gICAgICBpZiAocmVmZXJlbmNlKSB7XG4gICAgICAgIGZsdXNoKClcblxuICAgICAgICBwcmV2ID0gbm93KClcbiAgICAgICAgaW5kZXggPSBlbmQgLSAxXG4gICAgICAgIGNvbHVtbiArPSBlbmQgLSBzdGFydCArIDFcbiAgICAgICAgcmVzdWx0LnB1c2gocmVmZXJlbmNlKVxuICAgICAgICBuZXh0ID0gbm93KClcbiAgICAgICAgbmV4dC5vZmZzZXQrK1xuXG4gICAgICAgIGlmIChoYW5kbGVSZWZlcmVuY2UpIHtcbiAgICAgICAgICBoYW5kbGVSZWZlcmVuY2UuY2FsbChcbiAgICAgICAgICAgIHJlZmVyZW5jZUNvbnRleHQsXG4gICAgICAgICAgICByZWZlcmVuY2UsXG4gICAgICAgICAgICB7c3RhcnQ6IHByZXYsIGVuZDogbmV4dH0sXG4gICAgICAgICAgICB2YWx1ZS5zbGljZShzdGFydCAtIDEsIGVuZClcbiAgICAgICAgICApXG4gICAgICAgIH1cblxuICAgICAgICBwcmV2ID0gbmV4dFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSWYgd2UgY291bGQgbm90IGZpbmQgYSByZWZlcmVuY2UsIHF1ZXVlIHRoZSBjaGVja2VkIGNoYXJhY3RlcnMgKGFzXG4gICAgICAgIC8vIG5vcm1hbCBjaGFyYWN0ZXJzKSwgYW5kIG1vdmUgdGhlIHBvaW50ZXIgdG8gdGhlaXIgZW5kLlxuICAgICAgICAvLyBUaGlzIGlzIHBvc3NpYmxlIGJlY2F1c2Ugd2UgY2FuIGJlIGNlcnRhaW4gbmVpdGhlciBuZXdsaW5lcyBub3JcbiAgICAgICAgLy8gYW1wZXJzYW5kcyBhcmUgaW5jbHVkZWQuXG4gICAgICAgIGNoYXJhY3RlcnMgPSB2YWx1ZS5zbGljZShzdGFydCAtIDEsIGVuZClcbiAgICAgICAgcXVldWUgKz0gY2hhcmFjdGVyc1xuICAgICAgICBjb2x1bW4gKz0gY2hhcmFjdGVycy5sZW5ndGhcbiAgICAgICAgaW5kZXggPSBlbmQgLSAxXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEhhbmRsZSBhbnl0aGluZyBvdGhlciB0aGFuIGFuIGFtcGVyc2FuZCwgaW5jbHVkaW5nIG5ld2xpbmVzIGFuZCBFT0YuXG4gICAgICBpZiAoXG4gICAgICAgIGNoYXJhY3RlciA9PT0gMTAgLy8gTGluZSBmZWVkXG4gICAgICApIHtcbiAgICAgICAgbGluZSsrXG4gICAgICAgIGxpbmVzKytcbiAgICAgICAgY29sdW1uID0gMFxuICAgICAgfVxuXG4gICAgICBpZiAoY2hhcmFjdGVyID09PSBjaGFyYWN0ZXIpIHtcbiAgICAgICAgcXVldWUgKz0gZnJvbUNoYXJDb2RlKGNoYXJhY3RlcilcbiAgICAgICAgY29sdW1uKytcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZsdXNoKClcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBSZXR1cm4gdGhlIHJlZHVjZWQgbm9kZXMsIGFuZCBhbnkgcG9zc2libGUgd2FybmluZ3MuXG4gIHJldHVybiByZXN1bHQuam9pbignJylcblxuICAvLyBHZXQgY3VycmVudCBwb3NpdGlvbi5cbiAgZnVuY3Rpb24gbm93KCkge1xuICAgIHJldHVybiB7XG4gICAgICBsaW5lOiBsaW5lLFxuICAgICAgY29sdW1uOiBjb2x1bW4sXG4gICAgICBvZmZzZXQ6IGluZGV4ICsgKHBvcy5vZmZzZXQgfHwgMClcbiAgICB9XG4gIH1cblxuICAvLyDigJxUaHJvd+KAnSBhIHBhcnNlLWVycm9yOiBhIHdhcm5pbmcuXG4gIGZ1bmN0aW9uIHBhcnNlRXJyb3IoY29kZSwgb2Zmc2V0KSB7XG4gICAgdmFyIHBvc2l0aW9uID0gbm93KClcblxuICAgIHBvc2l0aW9uLmNvbHVtbiArPSBvZmZzZXRcbiAgICBwb3NpdGlvbi5vZmZzZXQgKz0gb2Zmc2V0XG5cbiAgICBoYW5kbGVXYXJuaW5nLmNhbGwod2FybmluZ0NvbnRleHQsIG1lc3NhZ2VzW2NvZGVdLCBwb3NpdGlvbiwgY29kZSlcbiAgfVxuXG4gIC8vIEZsdXNoIGBxdWV1ZWAgKG5vcm1hbCB0ZXh0KS5cbiAgLy8gTWFjcm8gaW52b2tlZCBiZWZvcmUgZWFjaCBlbnRpdHkgYW5kIGF0IHRoZSBlbmQgb2YgYHZhbHVlYC5cbiAgLy8gRG9lcyBub3RoaW5nIHdoZW4gYHF1ZXVlYCBpcyBlbXB0eS5cbiAgZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgaWYgKHF1ZXVlKSB7XG4gICAgICByZXN1bHQucHVzaChxdWV1ZSlcblxuICAgICAgaWYgKGhhbmRsZVRleHQpIHtcbiAgICAgICAgaGFuZGxlVGV4dC5jYWxsKHRleHRDb250ZXh0LCBxdWV1ZSwge3N0YXJ0OiBwcmV2LCBlbmQ6IG5vdygpfSlcbiAgICAgIH1cblxuICAgICAgcXVldWUgPSAnJ1xuICAgIH1cbiAgfVxufVxuXG4vLyBDaGVjayBpZiBgY2hhcmFjdGVyYCBpcyBvdXRzaWRlIHRoZSBwZXJtaXNzaWJsZSB1bmljb2RlIHJhbmdlLlxuZnVuY3Rpb24gcHJvaGliaXRlZChjb2RlKSB7XG4gIHJldHVybiAoY29kZSA+PSAweGQ4MDAgJiYgY29kZSA8PSAweGRmZmYpIHx8IGNvZGUgPiAweDEwZmZmZlxufVxuXG4vLyBDaGVjayBpZiBgY2hhcmFjdGVyYCBpcyBkaXNhbGxvd2VkLlxuZnVuY3Rpb24gZGlzYWxsb3dlZChjb2RlKSB7XG4gIHJldHVybiAoXG4gICAgKGNvZGUgPj0gMHgwMDAxICYmIGNvZGUgPD0gMHgwMDA4KSB8fFxuICAgIGNvZGUgPT09IDB4MDAwYiB8fFxuICAgIChjb2RlID49IDB4MDAwZCAmJiBjb2RlIDw9IDB4MDAxZikgfHxcbiAgICAoY29kZSA+PSAweDAwN2YgJiYgY29kZSA8PSAweDAwOWYpIHx8XG4gICAgKGNvZGUgPj0gMHhmZGQwICYmIGNvZGUgPD0gMHhmZGVmKSB8fFxuICAgIChjb2RlICYgMHhmZmZmKSA9PT0gMHhmZmZmIHx8XG4gICAgKGNvZGUgJiAweGZmZmYpID09PSAweGZmZmVcbiAgKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBub3JtYWxpemUgPSByZXF1aXJlKCcuL25vcm1hbGl6ZScpXG52YXIgRGVmaW5lZEluZm8gPSByZXF1aXJlKCcuL2xpYi91dGlsL2RlZmluZWQtaW5mbycpXG52YXIgSW5mbyA9IHJlcXVpcmUoJy4vbGliL3V0aWwvaW5mbycpXG5cbnZhciBkYXRhID0gJ2RhdGEnXG5cbm1vZHVsZS5leHBvcnRzID0gZmluZFxuXG52YXIgdmFsaWQgPSAvXmRhdGFbLVxcdy46XSskL2lcbnZhciBkYXNoID0gLy1bYS16XS9nXG52YXIgY2FwID0gL1tBLVpdL2dcblxuZnVuY3Rpb24gZmluZChzY2hlbWEsIHZhbHVlKSB7XG4gIHZhciBub3JtYWwgPSBub3JtYWxpemUodmFsdWUpXG4gIHZhciBwcm9wID0gdmFsdWVcbiAgdmFyIFR5cGUgPSBJbmZvXG5cbiAgaWYgKG5vcm1hbCBpbiBzY2hlbWEubm9ybWFsKSB7XG4gICAgcmV0dXJuIHNjaGVtYS5wcm9wZXJ0eVtzY2hlbWEubm9ybWFsW25vcm1hbF1dXG4gIH1cblxuICBpZiAobm9ybWFsLmxlbmd0aCA+IDQgJiYgbm9ybWFsLnNsaWNlKDAsIDQpID09PSBkYXRhICYmIHZhbGlkLnRlc3QodmFsdWUpKSB7XG4gICAgLy8gQXR0cmlidXRlIG9yIHByb3BlcnR5LlxuICAgIGlmICh2YWx1ZS5jaGFyQXQoNCkgPT09ICctJykge1xuICAgICAgcHJvcCA9IGRhdGFzZXRUb1Byb3BlcnR5KHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSA9IGRhdGFzZXRUb0F0dHJpYnV0ZSh2YWx1ZSlcbiAgICB9XG5cbiAgICBUeXBlID0gRGVmaW5lZEluZm9cbiAgfVxuXG4gIHJldHVybiBuZXcgVHlwZShwcm9wLCB2YWx1ZSlcbn1cblxuZnVuY3Rpb24gZGF0YXNldFRvUHJvcGVydHkoYXR0cmlidXRlKSB7XG4gIHZhciB2YWx1ZSA9IGF0dHJpYnV0ZS5zbGljZSg1KS5yZXBsYWNlKGRhc2gsIGNhbWVsY2FzZSlcbiAgcmV0dXJuIGRhdGEgKyB2YWx1ZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHZhbHVlLnNsaWNlKDEpXG59XG5cbmZ1bmN0aW9uIGRhdGFzZXRUb0F0dHJpYnV0ZShwcm9wZXJ0eSkge1xuICB2YXIgdmFsdWUgPSBwcm9wZXJ0eS5zbGljZSg0KVxuXG4gIGlmIChkYXNoLnRlc3QodmFsdWUpKSB7XG4gICAgcmV0dXJuIHByb3BlcnR5XG4gIH1cblxuICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoY2FwLCBrZWJhYilcblxuICBpZiAodmFsdWUuY2hhckF0KDApICE9PSAnLScpIHtcbiAgICB2YWx1ZSA9ICctJyArIHZhbHVlXG4gIH1cblxuICByZXR1cm4gZGF0YSArIHZhbHVlXG59XG5cbmZ1bmN0aW9uIGtlYmFiKCQwKSB7XG4gIHJldHVybiAnLScgKyAkMC50b0xvd2VyQ2FzZSgpXG59XG5cbmZ1bmN0aW9uIGNhbWVsY2FzZSgkMCkge1xuICByZXR1cm4gJDAuY2hhckF0KDEpLnRvVXBwZXJDYXNlKClcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgbWVyZ2UgPSByZXF1aXJlKCcuL2xpYi91dGlsL21lcmdlJylcbnZhciB4bGluayA9IHJlcXVpcmUoJy4vbGliL3hsaW5rJylcbnZhciB4bWwgPSByZXF1aXJlKCcuL2xpYi94bWwnKVxudmFyIHhtbG5zID0gcmVxdWlyZSgnLi9saWIveG1sbnMnKVxudmFyIGFyaWEgPSByZXF1aXJlKCcuL2xpYi9hcmlhJylcbnZhciBodG1sID0gcmVxdWlyZSgnLi9saWIvaHRtbCcpXG5cbm1vZHVsZS5leHBvcnRzID0gbWVyZ2UoW3htbCwgeGxpbmssIHhtbG5zLCBhcmlhLCBodG1sXSlcbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgdHlwZXMgPSByZXF1aXJlKCcuL3V0aWwvdHlwZXMnKVxudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4vdXRpbC9jcmVhdGUnKVxuXG52YXIgYm9vbGVhbmlzaCA9IHR5cGVzLmJvb2xlYW5pc2hcbnZhciBudW1iZXIgPSB0eXBlcy5udW1iZXJcbnZhciBzcGFjZVNlcGFyYXRlZCA9IHR5cGVzLnNwYWNlU2VwYXJhdGVkXG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlKHtcbiAgdHJhbnNmb3JtOiBhcmlhVHJhbnNmb3JtLFxuICBwcm9wZXJ0aWVzOiB7XG4gICAgYXJpYUFjdGl2ZURlc2NlbmRhbnQ6IG51bGwsXG4gICAgYXJpYUF0b21pYzogYm9vbGVhbmlzaCxcbiAgICBhcmlhQXV0b0NvbXBsZXRlOiBudWxsLFxuICAgIGFyaWFCdXN5OiBib29sZWFuaXNoLFxuICAgIGFyaWFDaGVja2VkOiBib29sZWFuaXNoLFxuICAgIGFyaWFDb2xDb3VudDogbnVtYmVyLFxuICAgIGFyaWFDb2xJbmRleDogbnVtYmVyLFxuICAgIGFyaWFDb2xTcGFuOiBudW1iZXIsXG4gICAgYXJpYUNvbnRyb2xzOiBzcGFjZVNlcGFyYXRlZCxcbiAgICBhcmlhQ3VycmVudDogbnVsbCxcbiAgICBhcmlhRGVzY3JpYmVkQnk6IHNwYWNlU2VwYXJhdGVkLFxuICAgIGFyaWFEZXRhaWxzOiBudWxsLFxuICAgIGFyaWFEaXNhYmxlZDogYm9vbGVhbmlzaCxcbiAgICBhcmlhRHJvcEVmZmVjdDogc3BhY2VTZXBhcmF0ZWQsXG4gICAgYXJpYUVycm9yTWVzc2FnZTogbnVsbCxcbiAgICBhcmlhRXhwYW5kZWQ6IGJvb2xlYW5pc2gsXG4gICAgYXJpYUZsb3dUbzogc3BhY2VTZXBhcmF0ZWQsXG4gICAgYXJpYUdyYWJiZWQ6IGJvb2xlYW5pc2gsXG4gICAgYXJpYUhhc1BvcHVwOiBudWxsLFxuICAgIGFyaWFIaWRkZW46IGJvb2xlYW5pc2gsXG4gICAgYXJpYUludmFsaWQ6IG51bGwsXG4gICAgYXJpYUtleVNob3J0Y3V0czogbnVsbCxcbiAgICBhcmlhTGFiZWw6IG51bGwsXG4gICAgYXJpYUxhYmVsbGVkQnk6IHNwYWNlU2VwYXJhdGVkLFxuICAgIGFyaWFMZXZlbDogbnVtYmVyLFxuICAgIGFyaWFMaXZlOiBudWxsLFxuICAgIGFyaWFNb2RhbDogYm9vbGVhbmlzaCxcbiAgICBhcmlhTXVsdGlMaW5lOiBib29sZWFuaXNoLFxuICAgIGFyaWFNdWx0aVNlbGVjdGFibGU6IGJvb2xlYW5pc2gsXG4gICAgYXJpYU9yaWVudGF0aW9uOiBudWxsLFxuICAgIGFyaWFPd25zOiBzcGFjZVNlcGFyYXRlZCxcbiAgICBhcmlhUGxhY2Vob2xkZXI6IG51bGwsXG4gICAgYXJpYVBvc0luU2V0OiBudW1iZXIsXG4gICAgYXJpYVByZXNzZWQ6IGJvb2xlYW5pc2gsXG4gICAgYXJpYVJlYWRPbmx5OiBib29sZWFuaXNoLFxuICAgIGFyaWFSZWxldmFudDogbnVsbCxcbiAgICBhcmlhUmVxdWlyZWQ6IGJvb2xlYW5pc2gsXG4gICAgYXJpYVJvbGVEZXNjcmlwdGlvbjogc3BhY2VTZXBhcmF0ZWQsXG4gICAgYXJpYVJvd0NvdW50OiBudW1iZXIsXG4gICAgYXJpYVJvd0luZGV4OiBudW1iZXIsXG4gICAgYXJpYVJvd1NwYW46IG51bWJlcixcbiAgICBhcmlhU2VsZWN0ZWQ6IGJvb2xlYW5pc2gsXG4gICAgYXJpYVNldFNpemU6IG51bWJlcixcbiAgICBhcmlhU29ydDogbnVsbCxcbiAgICBhcmlhVmFsdWVNYXg6IG51bWJlcixcbiAgICBhcmlhVmFsdWVNaW46IG51bWJlcixcbiAgICBhcmlhVmFsdWVOb3c6IG51bWJlcixcbiAgICBhcmlhVmFsdWVUZXh0OiBudWxsLFxuICAgIHJvbGU6IG51bGxcbiAgfVxufSlcblxuZnVuY3Rpb24gYXJpYVRyYW5zZm9ybShfLCBwcm9wKSB7XG4gIHJldHVybiBwcm9wID09PSAncm9sZScgPyBwcm9wIDogJ2FyaWEtJyArIHByb3Auc2xpY2UoNCkudG9Mb3dlckNhc2UoKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciB0eXBlcyA9IHJlcXVpcmUoJy4vdXRpbC90eXBlcycpXG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi91dGlsL2NyZWF0ZScpXG52YXIgY2FzZUluc2Vuc2l0aXZlVHJhbnNmb3JtID0gcmVxdWlyZSgnLi91dGlsL2Nhc2UtaW5zZW5zaXRpdmUtdHJhbnNmb3JtJylcblxudmFyIGJvb2xlYW4gPSB0eXBlcy5ib29sZWFuXG52YXIgb3ZlcmxvYWRlZEJvb2xlYW4gPSB0eXBlcy5vdmVybG9hZGVkQm9vbGVhblxudmFyIGJvb2xlYW5pc2ggPSB0eXBlcy5ib29sZWFuaXNoXG52YXIgbnVtYmVyID0gdHlwZXMubnVtYmVyXG52YXIgc3BhY2VTZXBhcmF0ZWQgPSB0eXBlcy5zcGFjZVNlcGFyYXRlZFxudmFyIGNvbW1hU2VwYXJhdGVkID0gdHlwZXMuY29tbWFTZXBhcmF0ZWRcblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGUoe1xuICBzcGFjZTogJ2h0bWwnLFxuICBhdHRyaWJ1dGVzOiB7XG4gICAgYWNjZXB0Y2hhcnNldDogJ2FjY2VwdC1jaGFyc2V0JyxcbiAgICBjbGFzc25hbWU6ICdjbGFzcycsXG4gICAgaHRtbGZvcjogJ2ZvcicsXG4gICAgaHR0cGVxdWl2OiAnaHR0cC1lcXVpdidcbiAgfSxcbiAgdHJhbnNmb3JtOiBjYXNlSW5zZW5zaXRpdmVUcmFuc2Zvcm0sXG4gIG11c3RVc2VQcm9wZXJ0eTogWydjaGVja2VkJywgJ211bHRpcGxlJywgJ211dGVkJywgJ3NlbGVjdGVkJ10sXG4gIHByb3BlcnRpZXM6IHtcbiAgICAvLyBTdGFuZGFyZCBQcm9wZXJ0aWVzLlxuICAgIGFiYnI6IG51bGwsXG4gICAgYWNjZXB0OiBjb21tYVNlcGFyYXRlZCxcbiAgICBhY2NlcHRDaGFyc2V0OiBzcGFjZVNlcGFyYXRlZCxcbiAgICBhY2Nlc3NLZXk6IHNwYWNlU2VwYXJhdGVkLFxuICAgIGFjdGlvbjogbnVsbCxcbiAgICBhbGxvdzogbnVsbCxcbiAgICBhbGxvd0Z1bGxTY3JlZW46IGJvb2xlYW4sXG4gICAgYWxsb3dQYXltZW50UmVxdWVzdDogYm9vbGVhbixcbiAgICBhbGxvd1VzZXJNZWRpYTogYm9vbGVhbixcbiAgICBhbHQ6IG51bGwsXG4gICAgYXM6IG51bGwsXG4gICAgYXN5bmM6IGJvb2xlYW4sXG4gICAgYXV0b0NhcGl0YWxpemU6IG51bGwsXG4gICAgYXV0b0NvbXBsZXRlOiBzcGFjZVNlcGFyYXRlZCxcbiAgICBhdXRvRm9jdXM6IGJvb2xlYW4sXG4gICAgYXV0b1BsYXk6IGJvb2xlYW4sXG4gICAgY2FwdHVyZTogYm9vbGVhbixcbiAgICBjaGFyU2V0OiBudWxsLFxuICAgIGNoZWNrZWQ6IGJvb2xlYW4sXG4gICAgY2l0ZTogbnVsbCxcbiAgICBjbGFzc05hbWU6IHNwYWNlU2VwYXJhdGVkLFxuICAgIGNvbHM6IG51bWJlcixcbiAgICBjb2xTcGFuOiBudWxsLFxuICAgIGNvbnRlbnQ6IG51bGwsXG4gICAgY29udGVudEVkaXRhYmxlOiBib29sZWFuaXNoLFxuICAgIGNvbnRyb2xzOiBib29sZWFuLFxuICAgIGNvbnRyb2xzTGlzdDogc3BhY2VTZXBhcmF0ZWQsXG4gICAgY29vcmRzOiBudW1iZXIgfCBjb21tYVNlcGFyYXRlZCxcbiAgICBjcm9zc09yaWdpbjogbnVsbCxcbiAgICBkYXRhOiBudWxsLFxuICAgIGRhdGVUaW1lOiBudWxsLFxuICAgIGRlY29kaW5nOiBudWxsLFxuICAgIGRlZmF1bHQ6IGJvb2xlYW4sXG4gICAgZGVmZXI6IGJvb2xlYW4sXG4gICAgZGlyOiBudWxsLFxuICAgIGRpck5hbWU6IG51bGwsXG4gICAgZGlzYWJsZWQ6IGJvb2xlYW4sXG4gICAgZG93bmxvYWQ6IG92ZXJsb2FkZWRCb29sZWFuLFxuICAgIGRyYWdnYWJsZTogYm9vbGVhbmlzaCxcbiAgICBlbmNUeXBlOiBudWxsLFxuICAgIGVudGVyS2V5SGludDogbnVsbCxcbiAgICBmb3JtOiBudWxsLFxuICAgIGZvcm1BY3Rpb246IG51bGwsXG4gICAgZm9ybUVuY1R5cGU6IG51bGwsXG4gICAgZm9ybU1ldGhvZDogbnVsbCxcbiAgICBmb3JtTm9WYWxpZGF0ZTogYm9vbGVhbixcbiAgICBmb3JtVGFyZ2V0OiBudWxsLFxuICAgIGhlYWRlcnM6IHNwYWNlU2VwYXJhdGVkLFxuICAgIGhlaWdodDogbnVtYmVyLFxuICAgIGhpZGRlbjogYm9vbGVhbixcbiAgICBoaWdoOiBudW1iZXIsXG4gICAgaHJlZjogbnVsbCxcbiAgICBocmVmTGFuZzogbnVsbCxcbiAgICBodG1sRm9yOiBzcGFjZVNlcGFyYXRlZCxcbiAgICBodHRwRXF1aXY6IHNwYWNlU2VwYXJhdGVkLFxuICAgIGlkOiBudWxsLFxuICAgIGltYWdlU2l6ZXM6IG51bGwsXG4gICAgaW1hZ2VTcmNTZXQ6IGNvbW1hU2VwYXJhdGVkLFxuICAgIGlucHV0TW9kZTogbnVsbCxcbiAgICBpbnRlZ3JpdHk6IG51bGwsXG4gICAgaXM6IG51bGwsXG4gICAgaXNNYXA6IGJvb2xlYW4sXG4gICAgaXRlbUlkOiBudWxsLFxuICAgIGl0ZW1Qcm9wOiBzcGFjZVNlcGFyYXRlZCxcbiAgICBpdGVtUmVmOiBzcGFjZVNlcGFyYXRlZCxcbiAgICBpdGVtU2NvcGU6IGJvb2xlYW4sXG4gICAgaXRlbVR5cGU6IHNwYWNlU2VwYXJhdGVkLFxuICAgIGtpbmQ6IG51bGwsXG4gICAgbGFiZWw6IG51bGwsXG4gICAgbGFuZzogbnVsbCxcbiAgICBsYW5ndWFnZTogbnVsbCxcbiAgICBsaXN0OiBudWxsLFxuICAgIGxvYWRpbmc6IG51bGwsXG4gICAgbG9vcDogYm9vbGVhbixcbiAgICBsb3c6IG51bWJlcixcbiAgICBtYW5pZmVzdDogbnVsbCxcbiAgICBtYXg6IG51bGwsXG4gICAgbWF4TGVuZ3RoOiBudW1iZXIsXG4gICAgbWVkaWE6IG51bGwsXG4gICAgbWV0aG9kOiBudWxsLFxuICAgIG1pbjogbnVsbCxcbiAgICBtaW5MZW5ndGg6IG51bWJlcixcbiAgICBtdWx0aXBsZTogYm9vbGVhbixcbiAgICBtdXRlZDogYm9vbGVhbixcbiAgICBuYW1lOiBudWxsLFxuICAgIG5vbmNlOiBudWxsLFxuICAgIG5vTW9kdWxlOiBib29sZWFuLFxuICAgIG5vVmFsaWRhdGU6IGJvb2xlYW4sXG4gICAgb25BYm9ydDogbnVsbCxcbiAgICBvbkFmdGVyUHJpbnQ6IG51bGwsXG4gICAgb25BdXhDbGljazogbnVsbCxcbiAgICBvbkJlZm9yZVByaW50OiBudWxsLFxuICAgIG9uQmVmb3JlVW5sb2FkOiBudWxsLFxuICAgIG9uQmx1cjogbnVsbCxcbiAgICBvbkNhbmNlbDogbnVsbCxcbiAgICBvbkNhblBsYXk6IG51bGwsXG4gICAgb25DYW5QbGF5VGhyb3VnaDogbnVsbCxcbiAgICBvbkNoYW5nZTogbnVsbCxcbiAgICBvbkNsaWNrOiBudWxsLFxuICAgIG9uQ2xvc2U6IG51bGwsXG4gICAgb25Db250ZXh0TWVudTogbnVsbCxcbiAgICBvbkNvcHk6IG51bGwsXG4gICAgb25DdWVDaGFuZ2U6IG51bGwsXG4gICAgb25DdXQ6IG51bGwsXG4gICAgb25EYmxDbGljazogbnVsbCxcbiAgICBvbkRyYWc6IG51bGwsXG4gICAgb25EcmFnRW5kOiBudWxsLFxuICAgIG9uRHJhZ0VudGVyOiBudWxsLFxuICAgIG9uRHJhZ0V4aXQ6IG51bGwsXG4gICAgb25EcmFnTGVhdmU6IG51bGwsXG4gICAgb25EcmFnT3ZlcjogbnVsbCxcbiAgICBvbkRyYWdTdGFydDogbnVsbCxcbiAgICBvbkRyb3A6IG51bGwsXG4gICAgb25EdXJhdGlvbkNoYW5nZTogbnVsbCxcbiAgICBvbkVtcHRpZWQ6IG51bGwsXG4gICAgb25FbmRlZDogbnVsbCxcbiAgICBvbkVycm9yOiBudWxsLFxuICAgIG9uRm9jdXM6IG51bGwsXG4gICAgb25Gb3JtRGF0YTogbnVsbCxcbiAgICBvbkhhc2hDaGFuZ2U6IG51bGwsXG4gICAgb25JbnB1dDogbnVsbCxcbiAgICBvbkludmFsaWQ6IG51bGwsXG4gICAgb25LZXlEb3duOiBudWxsLFxuICAgIG9uS2V5UHJlc3M6IG51bGwsXG4gICAgb25LZXlVcDogbnVsbCxcbiAgICBvbkxhbmd1YWdlQ2hhbmdlOiBudWxsLFxuICAgIG9uTG9hZDogbnVsbCxcbiAgICBvbkxvYWRlZERhdGE6IG51bGwsXG4gICAgb25Mb2FkZWRNZXRhZGF0YTogbnVsbCxcbiAgICBvbkxvYWRFbmQ6IG51bGwsXG4gICAgb25Mb2FkU3RhcnQ6IG51bGwsXG4gICAgb25NZXNzYWdlOiBudWxsLFxuICAgIG9uTWVzc2FnZUVycm9yOiBudWxsLFxuICAgIG9uTW91c2VEb3duOiBudWxsLFxuICAgIG9uTW91c2VFbnRlcjogbnVsbCxcbiAgICBvbk1vdXNlTGVhdmU6IG51bGwsXG4gICAgb25Nb3VzZU1vdmU6IG51bGwsXG4gICAgb25Nb3VzZU91dDogbnVsbCxcbiAgICBvbk1vdXNlT3ZlcjogbnVsbCxcbiAgICBvbk1vdXNlVXA6IG51bGwsXG4gICAgb25PZmZsaW5lOiBudWxsLFxuICAgIG9uT25saW5lOiBudWxsLFxuICAgIG9uUGFnZUhpZGU6IG51bGwsXG4gICAgb25QYWdlU2hvdzogbnVsbCxcbiAgICBvblBhc3RlOiBudWxsLFxuICAgIG9uUGF1c2U6IG51bGwsXG4gICAgb25QbGF5OiBudWxsLFxuICAgIG9uUGxheWluZzogbnVsbCxcbiAgICBvblBvcFN0YXRlOiBudWxsLFxuICAgIG9uUHJvZ3Jlc3M6IG51bGwsXG4gICAgb25SYXRlQ2hhbmdlOiBudWxsLFxuICAgIG9uUmVqZWN0aW9uSGFuZGxlZDogbnVsbCxcbiAgICBvblJlc2V0OiBudWxsLFxuICAgIG9uUmVzaXplOiBudWxsLFxuICAgIG9uU2Nyb2xsOiBudWxsLFxuICAgIG9uU2VjdXJpdHlQb2xpY3lWaW9sYXRpb246IG51bGwsXG4gICAgb25TZWVrZWQ6IG51bGwsXG4gICAgb25TZWVraW5nOiBudWxsLFxuICAgIG9uU2VsZWN0OiBudWxsLFxuICAgIG9uU2xvdENoYW5nZTogbnVsbCxcbiAgICBvblN0YWxsZWQ6IG51bGwsXG4gICAgb25TdG9yYWdlOiBudWxsLFxuICAgIG9uU3VibWl0OiBudWxsLFxuICAgIG9uU3VzcGVuZDogbnVsbCxcbiAgICBvblRpbWVVcGRhdGU6IG51bGwsXG4gICAgb25Ub2dnbGU6IG51bGwsXG4gICAgb25VbmhhbmRsZWRSZWplY3Rpb246IG51bGwsXG4gICAgb25VbmxvYWQ6IG51bGwsXG4gICAgb25Wb2x1bWVDaGFuZ2U6IG51bGwsXG4gICAgb25XYWl0aW5nOiBudWxsLFxuICAgIG9uV2hlZWw6IG51bGwsXG4gICAgb3BlbjogYm9vbGVhbixcbiAgICBvcHRpbXVtOiBudW1iZXIsXG4gICAgcGF0dGVybjogbnVsbCxcbiAgICBwaW5nOiBzcGFjZVNlcGFyYXRlZCxcbiAgICBwbGFjZWhvbGRlcjogbnVsbCxcbiAgICBwbGF5c0lubGluZTogYm9vbGVhbixcbiAgICBwb3N0ZXI6IG51bGwsXG4gICAgcHJlbG9hZDogbnVsbCxcbiAgICByZWFkT25seTogYm9vbGVhbixcbiAgICByZWZlcnJlclBvbGljeTogbnVsbCxcbiAgICByZWw6IHNwYWNlU2VwYXJhdGVkLFxuICAgIHJlcXVpcmVkOiBib29sZWFuLFxuICAgIHJldmVyc2VkOiBib29sZWFuLFxuICAgIHJvd3M6IG51bWJlcixcbiAgICByb3dTcGFuOiBudW1iZXIsXG4gICAgc2FuZGJveDogc3BhY2VTZXBhcmF0ZWQsXG4gICAgc2NvcGU6IG51bGwsXG4gICAgc2NvcGVkOiBib29sZWFuLFxuICAgIHNlYW1sZXNzOiBib29sZWFuLFxuICAgIHNlbGVjdGVkOiBib29sZWFuLFxuICAgIHNoYXBlOiBudWxsLFxuICAgIHNpemU6IG51bWJlcixcbiAgICBzaXplczogbnVsbCxcbiAgICBzbG90OiBudWxsLFxuICAgIHNwYW46IG51bWJlcixcbiAgICBzcGVsbENoZWNrOiBib29sZWFuaXNoLFxuICAgIHNyYzogbnVsbCxcbiAgICBzcmNEb2M6IG51bGwsXG4gICAgc3JjTGFuZzogbnVsbCxcbiAgICBzcmNTZXQ6IGNvbW1hU2VwYXJhdGVkLFxuICAgIHN0YXJ0OiBudW1iZXIsXG4gICAgc3RlcDogbnVsbCxcbiAgICBzdHlsZTogbnVsbCxcbiAgICB0YWJJbmRleDogbnVtYmVyLFxuICAgIHRhcmdldDogbnVsbCxcbiAgICB0aXRsZTogbnVsbCxcbiAgICB0cmFuc2xhdGU6IG51bGwsXG4gICAgdHlwZTogbnVsbCxcbiAgICB0eXBlTXVzdE1hdGNoOiBib29sZWFuLFxuICAgIHVzZU1hcDogbnVsbCxcbiAgICB2YWx1ZTogYm9vbGVhbmlzaCxcbiAgICB3aWR0aDogbnVtYmVyLFxuICAgIHdyYXA6IG51bGwsXG5cbiAgICAvLyBMZWdhY3kuXG4gICAgLy8gU2VlOiBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnLyNvdGhlci1lbGVtZW50cywtYXR0cmlidXRlcy1hbmQtYXBpc1xuICAgIGFsaWduOiBudWxsLCAvLyBTZXZlcmFsLiBVc2UgQ1NTIGB0ZXh0LWFsaWduYCBpbnN0ZWFkLFxuICAgIGFMaW5rOiBudWxsLCAvLyBgPGJvZHk+YC4gVXNlIENTUyBgYTphY3RpdmUge2NvbG9yfWAgaW5zdGVhZFxuICAgIGFyY2hpdmU6IHNwYWNlU2VwYXJhdGVkLCAvLyBgPG9iamVjdD5gLiBMaXN0IG9mIFVSSXMgdG8gYXJjaGl2ZXNcbiAgICBheGlzOiBudWxsLCAvLyBgPHRkPmAgYW5kIGA8dGg+YC4gVXNlIGBzY29wZWAgb24gYDx0aD5gXG4gICAgYmFja2dyb3VuZDogbnVsbCwgLy8gYDxib2R5PmAuIFVzZSBDU1MgYGJhY2tncm91bmQtaW1hZ2VgIGluc3RlYWRcbiAgICBiZ0NvbG9yOiBudWxsLCAvLyBgPGJvZHk+YCBhbmQgdGFibGUgZWxlbWVudHMuIFVzZSBDU1MgYGJhY2tncm91bmQtY29sb3JgIGluc3RlYWRcbiAgICBib3JkZXI6IG51bWJlciwgLy8gYDx0YWJsZT5gLiBVc2UgQ1NTIGBib3JkZXItd2lkdGhgIGluc3RlYWQsXG4gICAgYm9yZGVyQ29sb3I6IG51bGwsIC8vIGA8dGFibGU+YC4gVXNlIENTUyBgYm9yZGVyLWNvbG9yYCBpbnN0ZWFkLFxuICAgIGJvdHRvbU1hcmdpbjogbnVtYmVyLCAvLyBgPGJvZHk+YFxuICAgIGNlbGxQYWRkaW5nOiBudWxsLCAvLyBgPHRhYmxlPmBcbiAgICBjZWxsU3BhY2luZzogbnVsbCwgLy8gYDx0YWJsZT5gXG4gICAgY2hhcjogbnVsbCwgLy8gU2V2ZXJhbCB0YWJsZSBlbGVtZW50cy4gV2hlbiBgYWxpZ249Y2hhcmAsIHNldHMgdGhlIGNoYXJhY3RlciB0byBhbGlnbiBvblxuICAgIGNoYXJPZmY6IG51bGwsIC8vIFNldmVyYWwgdGFibGUgZWxlbWVudHMuIFdoZW4gYGNoYXJgLCBvZmZzZXRzIHRoZSBhbGlnbm1lbnRcbiAgICBjbGFzc0lkOiBudWxsLCAvLyBgPG9iamVjdD5gXG4gICAgY2xlYXI6IG51bGwsIC8vIGA8YnI+YC4gVXNlIENTUyBgY2xlYXJgIGluc3RlYWRcbiAgICBjb2RlOiBudWxsLCAvLyBgPG9iamVjdD5gXG4gICAgY29kZUJhc2U6IG51bGwsIC8vIGA8b2JqZWN0PmBcbiAgICBjb2RlVHlwZTogbnVsbCwgLy8gYDxvYmplY3Q+YFxuICAgIGNvbG9yOiBudWxsLCAvLyBgPGZvbnQ+YCBhbmQgYDxocj5gLiBVc2UgQ1NTIGluc3RlYWRcbiAgICBjb21wYWN0OiBib29sZWFuLCAvLyBMaXN0cy4gVXNlIENTUyB0byByZWR1Y2Ugc3BhY2UgYmV0d2VlbiBpdGVtcyBpbnN0ZWFkXG4gICAgZGVjbGFyZTogYm9vbGVhbiwgLy8gYDxvYmplY3Q+YFxuICAgIGV2ZW50OiBudWxsLCAvLyBgPHNjcmlwdD5gXG4gICAgZmFjZTogbnVsbCwgLy8gYDxmb250PmAuIFVzZSBDU1MgaW5zdGVhZFxuICAgIGZyYW1lOiBudWxsLCAvLyBgPHRhYmxlPmBcbiAgICBmcmFtZUJvcmRlcjogbnVsbCwgLy8gYDxpZnJhbWU+YC4gVXNlIENTUyBgYm9yZGVyYCBpbnN0ZWFkXG4gICAgaFNwYWNlOiBudW1iZXIsIC8vIGA8aW1nPmAgYW5kIGA8b2JqZWN0PmBcbiAgICBsZWZ0TWFyZ2luOiBudW1iZXIsIC8vIGA8Ym9keT5gXG4gICAgbGluazogbnVsbCwgLy8gYDxib2R5PmAuIFVzZSBDU1MgYGE6bGluayB7Y29sb3I6ICp9YCBpbnN0ZWFkXG4gICAgbG9uZ0Rlc2M6IG51bGwsIC8vIGA8ZnJhbWU+YCwgYDxpZnJhbWU+YCwgYW5kIGA8aW1nPmAuIFVzZSBhbiBgPGE+YFxuICAgIGxvd1NyYzogbnVsbCwgLy8gYDxpbWc+YC4gVXNlIGEgYDxwaWN0dXJlPmBcbiAgICBtYXJnaW5IZWlnaHQ6IG51bWJlciwgLy8gYDxib2R5PmBcbiAgICBtYXJnaW5XaWR0aDogbnVtYmVyLCAvLyBgPGJvZHk+YFxuICAgIG5vUmVzaXplOiBib29sZWFuLCAvLyBgPGZyYW1lPmBcbiAgICBub0hyZWY6IGJvb2xlYW4sIC8vIGA8YXJlYT5gLiBVc2Ugbm8gaHJlZiBpbnN0ZWFkIG9mIGFuIGV4cGxpY2l0IGBub2hyZWZgXG4gICAgbm9TaGFkZTogYm9vbGVhbiwgLy8gYDxocj5gLiBVc2UgYmFja2dyb3VuZC1jb2xvciBhbmQgaGVpZ2h0IGluc3RlYWQgb2YgYm9yZGVyc1xuICAgIG5vV3JhcDogYm9vbGVhbiwgLy8gYDx0ZD5gIGFuZCBgPHRoPmBcbiAgICBvYmplY3Q6IG51bGwsIC8vIGA8YXBwbGV0PmBcbiAgICBwcm9maWxlOiBudWxsLCAvLyBgPGhlYWQ+YFxuICAgIHByb21wdDogbnVsbCwgLy8gYDxpc2luZGV4PmBcbiAgICByZXY6IG51bGwsIC8vIGA8bGluaz5gXG4gICAgcmlnaHRNYXJnaW46IG51bWJlciwgLy8gYDxib2R5PmBcbiAgICBydWxlczogbnVsbCwgLy8gYDx0YWJsZT5gXG4gICAgc2NoZW1lOiBudWxsLCAvLyBgPG1ldGE+YFxuICAgIHNjcm9sbGluZzogYm9vbGVhbmlzaCwgLy8gYDxmcmFtZT5gLiBVc2Ugb3ZlcmZsb3cgaW4gdGhlIGNoaWxkIGNvbnRleHRcbiAgICBzdGFuZGJ5OiBudWxsLCAvLyBgPG9iamVjdD5gXG4gICAgc3VtbWFyeTogbnVsbCwgLy8gYDx0YWJsZT5gXG4gICAgdGV4dDogbnVsbCwgLy8gYDxib2R5PmAuIFVzZSBDU1MgYGNvbG9yYCBpbnN0ZWFkXG4gICAgdG9wTWFyZ2luOiBudW1iZXIsIC8vIGA8Ym9keT5gXG4gICAgdmFsdWVUeXBlOiBudWxsLCAvLyBgPHBhcmFtPmBcbiAgICB2ZXJzaW9uOiBudWxsLCAvLyBgPGh0bWw+YC4gVXNlIGEgZG9jdHlwZS5cbiAgICB2QWxpZ246IG51bGwsIC8vIFNldmVyYWwuIFVzZSBDU1MgYHZlcnRpY2FsLWFsaWduYCBpbnN0ZWFkXG4gICAgdkxpbms6IG51bGwsIC8vIGA8Ym9keT5gLiBVc2UgQ1NTIGBhOnZpc2l0ZWQge2NvbG9yfWAgaW5zdGVhZFxuICAgIHZTcGFjZTogbnVtYmVyLCAvLyBgPGltZz5gIGFuZCBgPG9iamVjdD5gXG5cbiAgICAvLyBOb24tc3RhbmRhcmQgUHJvcGVydGllcy5cbiAgICBhbGxvd1RyYW5zcGFyZW5jeTogbnVsbCxcbiAgICBhdXRvQ29ycmVjdDogbnVsbCxcbiAgICBhdXRvU2F2ZTogbnVsbCxcbiAgICBkaXNhYmxlUGljdHVyZUluUGljdHVyZTogYm9vbGVhbixcbiAgICBkaXNhYmxlUmVtb3RlUGxheWJhY2s6IGJvb2xlYW4sXG4gICAgcHJlZml4OiBudWxsLFxuICAgIHByb3BlcnR5OiBudWxsLFxuICAgIHJlc3VsdHM6IG51bWJlcixcbiAgICBzZWN1cml0eTogbnVsbCxcbiAgICB1bnNlbGVjdGFibGU6IG51bGxcbiAgfVxufSlcbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgY2FzZVNlbnNpdGl2ZVRyYW5zZm9ybSA9IHJlcXVpcmUoJy4vY2FzZS1zZW5zaXRpdmUtdHJhbnNmb3JtJylcblxubW9kdWxlLmV4cG9ydHMgPSBjYXNlSW5zZW5zaXRpdmVUcmFuc2Zvcm1cblxuZnVuY3Rpb24gY2FzZUluc2Vuc2l0aXZlVHJhbnNmb3JtKGF0dHJpYnV0ZXMsIHByb3BlcnR5KSB7XG4gIHJldHVybiBjYXNlU2Vuc2l0aXZlVHJhbnNmb3JtKGF0dHJpYnV0ZXMsIHByb3BlcnR5LnRvTG93ZXJDYXNlKCkpXG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBjYXNlU2Vuc2l0aXZlVHJhbnNmb3JtXG5cbmZ1bmN0aW9uIGNhc2VTZW5zaXRpdmVUcmFuc2Zvcm0oYXR0cmlidXRlcywgYXR0cmlidXRlKSB7XG4gIHJldHVybiBhdHRyaWJ1dGUgaW4gYXR0cmlidXRlcyA/IGF0dHJpYnV0ZXNbYXR0cmlidXRlXSA6IGF0dHJpYnV0ZVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBub3JtYWxpemUgPSByZXF1aXJlKCcuLi8uLi9ub3JtYWxpemUnKVxudmFyIFNjaGVtYSA9IHJlcXVpcmUoJy4vc2NoZW1hJylcbnZhciBEZWZpbmVkSW5mbyA9IHJlcXVpcmUoJy4vZGVmaW5lZC1pbmZvJylcblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVcblxuZnVuY3Rpb24gY3JlYXRlKGRlZmluaXRpb24pIHtcbiAgdmFyIHNwYWNlID0gZGVmaW5pdGlvbi5zcGFjZVxuICB2YXIgbXVzdFVzZVByb3BlcnR5ID0gZGVmaW5pdGlvbi5tdXN0VXNlUHJvcGVydHkgfHwgW11cbiAgdmFyIGF0dHJpYnV0ZXMgPSBkZWZpbml0aW9uLmF0dHJpYnV0ZXMgfHwge31cbiAgdmFyIHByb3BzID0gZGVmaW5pdGlvbi5wcm9wZXJ0aWVzXG4gIHZhciB0cmFuc2Zvcm0gPSBkZWZpbml0aW9uLnRyYW5zZm9ybVxuICB2YXIgcHJvcGVydHkgPSB7fVxuICB2YXIgbm9ybWFsID0ge31cbiAgdmFyIHByb3BcbiAgdmFyIGluZm9cblxuICBmb3IgKHByb3AgaW4gcHJvcHMpIHtcbiAgICBpbmZvID0gbmV3IERlZmluZWRJbmZvKFxuICAgICAgcHJvcCxcbiAgICAgIHRyYW5zZm9ybShhdHRyaWJ1dGVzLCBwcm9wKSxcbiAgICAgIHByb3BzW3Byb3BdLFxuICAgICAgc3BhY2VcbiAgICApXG5cbiAgICBpZiAobXVzdFVzZVByb3BlcnR5LmluZGV4T2YocHJvcCkgIT09IC0xKSB7XG4gICAgICBpbmZvLm11c3RVc2VQcm9wZXJ0eSA9IHRydWVcbiAgICB9XG5cbiAgICBwcm9wZXJ0eVtwcm9wXSA9IGluZm9cblxuICAgIG5vcm1hbFtub3JtYWxpemUocHJvcCldID0gcHJvcFxuICAgIG5vcm1hbFtub3JtYWxpemUoaW5mby5hdHRyaWJ1dGUpXSA9IHByb3BcbiAgfVxuXG4gIHJldHVybiBuZXcgU2NoZW1hKHByb3BlcnR5LCBub3JtYWwsIHNwYWNlKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBJbmZvID0gcmVxdWlyZSgnLi9pbmZvJylcbnZhciB0eXBlcyA9IHJlcXVpcmUoJy4vdHlwZXMnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IERlZmluZWRJbmZvXG5cbkRlZmluZWRJbmZvLnByb3RvdHlwZSA9IG5ldyBJbmZvKClcbkRlZmluZWRJbmZvLnByb3RvdHlwZS5kZWZpbmVkID0gdHJ1ZVxuXG52YXIgY2hlY2tzID0gW1xuICAnYm9vbGVhbicsXG4gICdib29sZWFuaXNoJyxcbiAgJ292ZXJsb2FkZWRCb29sZWFuJyxcbiAgJ251bWJlcicsXG4gICdjb21tYVNlcGFyYXRlZCcsXG4gICdzcGFjZVNlcGFyYXRlZCcsXG4gICdjb21tYU9yU3BhY2VTZXBhcmF0ZWQnXG5dXG52YXIgY2hlY2tzTGVuZ3RoID0gY2hlY2tzLmxlbmd0aFxuXG5mdW5jdGlvbiBEZWZpbmVkSW5mbyhwcm9wZXJ0eSwgYXR0cmlidXRlLCBtYXNrLCBzcGFjZSkge1xuICB2YXIgaW5kZXggPSAtMVxuICB2YXIgY2hlY2tcblxuICBtYXJrKHRoaXMsICdzcGFjZScsIHNwYWNlKVxuXG4gIEluZm8uY2FsbCh0aGlzLCBwcm9wZXJ0eSwgYXR0cmlidXRlKVxuXG4gIHdoaWxlICgrK2luZGV4IDwgY2hlY2tzTGVuZ3RoKSB7XG4gICAgY2hlY2sgPSBjaGVja3NbaW5kZXhdXG4gICAgbWFyayh0aGlzLCBjaGVjaywgKG1hc2sgJiB0eXBlc1tjaGVja10pID09PSB0eXBlc1tjaGVja10pXG4gIH1cbn1cblxuZnVuY3Rpb24gbWFyayh2YWx1ZXMsIGtleSwgdmFsdWUpIHtcbiAgaWYgKHZhbHVlKSB7XG4gICAgdmFsdWVzW2tleV0gPSB2YWx1ZVxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBJbmZvXG5cbnZhciBwcm90byA9IEluZm8ucHJvdG90eXBlXG5cbnByb3RvLnNwYWNlID0gbnVsbFxucHJvdG8uYXR0cmlidXRlID0gbnVsbFxucHJvdG8ucHJvcGVydHkgPSBudWxsXG5wcm90by5ib29sZWFuID0gZmFsc2VcbnByb3RvLmJvb2xlYW5pc2ggPSBmYWxzZVxucHJvdG8ub3ZlcmxvYWRlZEJvb2xlYW4gPSBmYWxzZVxucHJvdG8ubnVtYmVyID0gZmFsc2VcbnByb3RvLmNvbW1hU2VwYXJhdGVkID0gZmFsc2VcbnByb3RvLnNwYWNlU2VwYXJhdGVkID0gZmFsc2VcbnByb3RvLmNvbW1hT3JTcGFjZVNlcGFyYXRlZCA9IGZhbHNlXG5wcm90by5tdXN0VXNlUHJvcGVydHkgPSBmYWxzZVxucHJvdG8uZGVmaW5lZCA9IGZhbHNlXG5cbmZ1bmN0aW9uIEluZm8ocHJvcGVydHksIGF0dHJpYnV0ZSkge1xuICB0aGlzLnByb3BlcnR5ID0gcHJvcGVydHlcbiAgdGhpcy5hdHRyaWJ1dGUgPSBhdHRyaWJ1dGVcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgeHRlbmQgPSByZXF1aXJlKCd4dGVuZCcpXG52YXIgU2NoZW1hID0gcmVxdWlyZSgnLi9zY2hlbWEnKVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1lcmdlXG5cbmZ1bmN0aW9uIG1lcmdlKGRlZmluaXRpb25zKSB7XG4gIHZhciBsZW5ndGggPSBkZWZpbml0aW9ucy5sZW5ndGhcbiAgdmFyIHByb3BlcnR5ID0gW11cbiAgdmFyIG5vcm1hbCA9IFtdXG4gIHZhciBpbmRleCA9IC0xXG4gIHZhciBpbmZvXG4gIHZhciBzcGFjZVxuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaW5mbyA9IGRlZmluaXRpb25zW2luZGV4XVxuICAgIHByb3BlcnR5LnB1c2goaW5mby5wcm9wZXJ0eSlcbiAgICBub3JtYWwucHVzaChpbmZvLm5vcm1hbClcbiAgICBzcGFjZSA9IGluZm8uc3BhY2VcbiAgfVxuXG4gIHJldHVybiBuZXcgU2NoZW1hKFxuICAgIHh0ZW5kLmFwcGx5KG51bGwsIHByb3BlcnR5KSxcbiAgICB4dGVuZC5hcHBseShudWxsLCBub3JtYWwpLFxuICAgIHNwYWNlXG4gIClcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNjaGVtYVxuXG52YXIgcHJvdG8gPSBTY2hlbWEucHJvdG90eXBlXG5cbnByb3RvLnNwYWNlID0gbnVsbFxucHJvdG8ubm9ybWFsID0ge31cbnByb3RvLnByb3BlcnR5ID0ge31cblxuZnVuY3Rpb24gU2NoZW1hKHByb3BlcnR5LCBub3JtYWwsIHNwYWNlKSB7XG4gIHRoaXMucHJvcGVydHkgPSBwcm9wZXJ0eVxuICB0aGlzLm5vcm1hbCA9IG5vcm1hbFxuXG4gIGlmIChzcGFjZSkge1xuICAgIHRoaXMuc3BhY2UgPSBzcGFjZVxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHBvd2VycyA9IDBcblxuZXhwb3J0cy5ib29sZWFuID0gaW5jcmVtZW50KClcbmV4cG9ydHMuYm9vbGVhbmlzaCA9IGluY3JlbWVudCgpXG5leHBvcnRzLm92ZXJsb2FkZWRCb29sZWFuID0gaW5jcmVtZW50KClcbmV4cG9ydHMubnVtYmVyID0gaW5jcmVtZW50KClcbmV4cG9ydHMuc3BhY2VTZXBhcmF0ZWQgPSBpbmNyZW1lbnQoKVxuZXhwb3J0cy5jb21tYVNlcGFyYXRlZCA9IGluY3JlbWVudCgpXG5leHBvcnRzLmNvbW1hT3JTcGFjZVNlcGFyYXRlZCA9IGluY3JlbWVudCgpXG5cbmZ1bmN0aW9uIGluY3JlbWVudCgpIHtcbiAgcmV0dXJuIE1hdGgucG93KDIsICsrcG93ZXJzKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuL3V0aWwvY3JlYXRlJylcblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGUoe1xuICBzcGFjZTogJ3hsaW5rJyxcbiAgdHJhbnNmb3JtOiB4bGlua1RyYW5zZm9ybSxcbiAgcHJvcGVydGllczoge1xuICAgIHhMaW5rQWN0dWF0ZTogbnVsbCxcbiAgICB4TGlua0FyY1JvbGU6IG51bGwsXG4gICAgeExpbmtIcmVmOiBudWxsLFxuICAgIHhMaW5rUm9sZTogbnVsbCxcbiAgICB4TGlua1Nob3c6IG51bGwsXG4gICAgeExpbmtUaXRsZTogbnVsbCxcbiAgICB4TGlua1R5cGU6IG51bGxcbiAgfVxufSlcblxuZnVuY3Rpb24geGxpbmtUcmFuc2Zvcm0oXywgcHJvcCkge1xuICByZXR1cm4gJ3hsaW5rOicgKyBwcm9wLnNsaWNlKDUpLnRvTG93ZXJDYXNlKClcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi91dGlsL2NyZWF0ZScpXG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlKHtcbiAgc3BhY2U6ICd4bWwnLFxuICB0cmFuc2Zvcm06IHhtbFRyYW5zZm9ybSxcbiAgcHJvcGVydGllczoge1xuICAgIHhtbExhbmc6IG51bGwsXG4gICAgeG1sQmFzZTogbnVsbCxcbiAgICB4bWxTcGFjZTogbnVsbFxuICB9XG59KVxuXG5mdW5jdGlvbiB4bWxUcmFuc2Zvcm0oXywgcHJvcCkge1xuICByZXR1cm4gJ3htbDonICsgcHJvcC5zbGljZSgzKS50b0xvd2VyQ2FzZSgpXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4vdXRpbC9jcmVhdGUnKVxudmFyIGNhc2VJbnNlbnNpdGl2ZVRyYW5zZm9ybSA9IHJlcXVpcmUoJy4vdXRpbC9jYXNlLWluc2Vuc2l0aXZlLXRyYW5zZm9ybScpXG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlKHtcbiAgc3BhY2U6ICd4bWxucycsXG4gIGF0dHJpYnV0ZXM6IHtcbiAgICB4bWxuc3hsaW5rOiAneG1sbnM6eGxpbmsnXG4gIH0sXG4gIHRyYW5zZm9ybTogY2FzZUluc2Vuc2l0aXZlVHJhbnNmb3JtLFxuICBwcm9wZXJ0aWVzOiB7XG4gICAgeG1sbnM6IG51bGwsXG4gICAgeG1sbnNYTGluazogbnVsbFxuICB9XG59KVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gbm9ybWFsaXplXG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUudG9Mb3dlckNhc2UoKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbi8qIGdsb2JhbCB3aW5kb3csIHNlbGYgKi9cblxudmFyIHJlc3RvcmUgPSBjYXB0dXJlKClcblxuLy8gaXN0YW5idWwgaWdub3JlIG5leHQgLSBEb24ndCBhbGxvdyBQcmlzbSB0byBydW4gb24gcGFnZSBsb2FkIGluIGJyb3dzZXIgb3Jcbi8vIHRvIHN0YXJ0IG1lc3NhZ2luZyBmcm9tIHdvcmtlcnMuXG52YXIgY3R4ID1cbiAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCdcbiAgICA/IHR5cGVvZiBzZWxmID09PSAndW5kZWZpbmVkJ1xuICAgICAgPyB7fVxuICAgICAgOiBzZWxmXG4gICAgOiB3aW5kb3dcblxuY3R4LlByaXNtID0ge21hbnVhbDogdHJ1ZSwgZGlzYWJsZVdvcmtlck1lc3NhZ2VIYW5kbGVyOiB0cnVlfVxuXG4vLyBMb2FkIGFsbCBzdHVmZiBpbiBgcHJpc20uanNgIGl0c2VsZiwgZXhjZXB0IGZvciBgcHJpc20tZmlsZS1oaWdobGlnaHQuanNgLlxuLy8gVGhlIHdyYXBwZWQgbm9uLWxlYWt5IGdyYW1tYXJzIGFyZSBsb2FkZWQgaW5zdGVhZCBvZiBQcmlzbeKAmXMgb3JpZ2luYWxzLlxudmFyIGggPSByZXF1aXJlKCdoYXN0c2NyaXB0JylcbnZhciBkZWNvZGUgPSByZXF1aXJlKCdwYXJzZS1lbnRpdGllcycpXG52YXIgUHJpc20gPSByZXF1aXJlKCdwcmlzbWpzL2NvbXBvbmVudHMvcHJpc20tY29yZScpXG52YXIgbWFya3VwID0gcmVxdWlyZSgnLi9sYW5nL21hcmt1cCcpXG52YXIgY3NzID0gcmVxdWlyZSgnLi9sYW5nL2NzcycpXG52YXIgY2xpa2UgPSByZXF1aXJlKCcuL2xhbmcvY2xpa2UnKVxudmFyIGpzID0gcmVxdWlyZSgnLi9sYW5nL2phdmFzY3JpcHQnKVxuXG5yZXN0b3JlKClcblxudmFyIG93biA9IHt9Lmhhc093blByb3BlcnR5XG5cbi8vIEluaGVyaXQuXG5mdW5jdGlvbiBSZWZyYWN0b3IoKSB7fVxuXG5SZWZyYWN0b3IucHJvdG90eXBlID0gUHJpc21cblxuLy8gQ29uc3RydWN0LlxudmFyIHJlZnJhY3QgPSBuZXcgUmVmcmFjdG9yKClcblxuLy8gRXhwb3NlLlxubW9kdWxlLmV4cG9ydHMgPSByZWZyYWN0XG5cbi8vIENyZWF0ZS5cbnJlZnJhY3QuaGlnaGxpZ2h0ID0gaGlnaGxpZ2h0XG5yZWZyYWN0LnJlZ2lzdGVyID0gcmVnaXN0ZXJcbnJlZnJhY3QuYWxpYXMgPSBhbGlhc1xucmVmcmFjdC5yZWdpc3RlcmVkID0gcmVnaXN0ZXJlZFxucmVmcmFjdC5saXN0TGFuZ3VhZ2VzID0gbGlzdExhbmd1YWdlc1xuXG4vLyBSZWdpc3RlciBidW5kbGVkIGdyYW1tYXJzLlxucmVnaXN0ZXIobWFya3VwKVxucmVnaXN0ZXIoY3NzKVxucmVnaXN0ZXIoY2xpa2UpXG5yZWdpc3RlcihqcylcblxucmVmcmFjdC51dGlsLmVuY29kZSA9IGVuY29kZVxucmVmcmFjdC5Ub2tlbi5zdHJpbmdpZnkgPSBzdHJpbmdpZnlcblxuZnVuY3Rpb24gcmVnaXN0ZXIoZ3JhbW1hcikge1xuICBpZiAodHlwZW9mIGdyYW1tYXIgIT09ICdmdW5jdGlvbicgfHwgIWdyYW1tYXIuZGlzcGxheU5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIGBmdW5jdGlvbmAgZm9yIGBncmFtbWFyYCwgZ290IGAnICsgZ3JhbW1hciArICdgJylcbiAgfVxuXG4gIC8vIERvIG5vdCBkdXBsaWNhdGUgcmVnaXN0cmF0aW9ucy5cbiAgaWYgKHJlZnJhY3QubGFuZ3VhZ2VzW2dyYW1tYXIuZGlzcGxheU5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICBncmFtbWFyKHJlZnJhY3QpXG4gIH1cbn1cblxuZnVuY3Rpb24gYWxpYXMobmFtZSwgYWxpYXMpIHtcbiAgdmFyIGxhbmd1YWdlcyA9IHJlZnJhY3QubGFuZ3VhZ2VzXG4gIHZhciBtYXAgPSBuYW1lXG4gIHZhciBrZXlcbiAgdmFyIGxpc3RcbiAgdmFyIGxlbmd0aFxuICB2YXIgaW5kZXhcblxuICBpZiAoYWxpYXMpIHtcbiAgICBtYXAgPSB7fVxuICAgIG1hcFtuYW1lXSA9IGFsaWFzXG4gIH1cblxuICBmb3IgKGtleSBpbiBtYXApIHtcbiAgICBsaXN0ID0gbWFwW2tleV1cbiAgICBsaXN0ID0gdHlwZW9mIGxpc3QgPT09ICdzdHJpbmcnID8gW2xpc3RdIDogbGlzdFxuICAgIGxlbmd0aCA9IGxpc3QubGVuZ3RoXG4gICAgaW5kZXggPSAtMVxuXG4gICAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICAgIGxhbmd1YWdlc1tsaXN0W2luZGV4XV0gPSBsYW5ndWFnZXNba2V5XVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBoaWdobGlnaHQodmFsdWUsIG5hbWUpIHtcbiAgdmFyIHN1cCA9IFByaXNtLmhpZ2hsaWdodFxuICB2YXIgZ3JhbW1hclxuXG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCBgc3RyaW5nYCBmb3IgYHZhbHVlYCwgZ290IGAnICsgdmFsdWUgKyAnYCcpXG4gIH1cblxuICAvLyBgbmFtZWAgaXMgYSBncmFtbWFyIG9iamVjdC5cbiAgaWYgKHJlZnJhY3QudXRpbC50eXBlKG5hbWUpID09PSAnT2JqZWN0Jykge1xuICAgIGdyYW1tYXIgPSBuYW1lXG4gICAgbmFtZSA9IG51bGxcbiAgfSBlbHNlIHtcbiAgICBpZiAodHlwZW9mIG5hbWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIGBzdHJpbmdgIGZvciBgbmFtZWAsIGdvdCBgJyArIG5hbWUgKyAnYCcpXG4gICAgfVxuXG4gICAgaWYgKG93bi5jYWxsKHJlZnJhY3QubGFuZ3VhZ2VzLCBuYW1lKSkge1xuICAgICAgZ3JhbW1hciA9IHJlZnJhY3QubGFuZ3VhZ2VzW25hbWVdXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBsYW5ndWFnZTogYCcgKyBuYW1lICsgJ2AgaXMgbm90IHJlZ2lzdGVyZWQnKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdXAuY2FsbCh0aGlzLCB2YWx1ZSwgZ3JhbW1hciwgbmFtZSlcbn1cblxuZnVuY3Rpb24gcmVnaXN0ZXJlZChsYW5ndWFnZSkge1xuICBpZiAodHlwZW9mIGxhbmd1YWdlICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgYHN0cmluZ2AgZm9yIGBsYW5ndWFnZWAsIGdvdCBgJyArIGxhbmd1YWdlICsgJ2AnKVxuICB9XG5cbiAgcmV0dXJuIG93bi5jYWxsKHJlZnJhY3QubGFuZ3VhZ2VzLCBsYW5ndWFnZSlcbn1cblxuZnVuY3Rpb24gbGlzdExhbmd1YWdlcygpIHtcbiAgdmFyIGxhbmd1YWdlcyA9IHJlZnJhY3QubGFuZ3VhZ2VzXG4gIHZhciBsaXN0ID0gW11cbiAgdmFyIGxhbmd1YWdlXG5cbiAgZm9yIChsYW5ndWFnZSBpbiBsYW5ndWFnZXMpIHtcbiAgICBpZiAoXG4gICAgICBvd24uY2FsbChsYW5ndWFnZXMsIGxhbmd1YWdlKSAmJlxuICAgICAgdHlwZW9mIGxhbmd1YWdlc1tsYW5ndWFnZV0gPT09ICdvYmplY3QnXG4gICAgKSB7XG4gICAgICBsaXN0LnB1c2gobGFuZ3VhZ2UpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGxpc3Rcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5KHZhbHVlLCBsYW5ndWFnZSwgcGFyZW50KSB7XG4gIHZhciBlbnZcblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB7dHlwZTogJ3RleHQnLCB2YWx1ZTogdmFsdWV9XG4gIH1cblxuICBpZiAocmVmcmFjdC51dGlsLnR5cGUodmFsdWUpID09PSAnQXJyYXknKSB7XG4gICAgcmV0dXJuIHN0cmluZ2lmeUFsbCh2YWx1ZSwgbGFuZ3VhZ2UpXG4gIH1cblxuICBlbnYgPSB7XG4gICAgdHlwZTogdmFsdWUudHlwZSxcbiAgICBjb250ZW50OiByZWZyYWN0LlRva2VuLnN0cmluZ2lmeSh2YWx1ZS5jb250ZW50LCBsYW5ndWFnZSwgcGFyZW50KSxcbiAgICB0YWc6ICdzcGFuJyxcbiAgICBjbGFzc2VzOiBbJ3Rva2VuJywgdmFsdWUudHlwZV0sXG4gICAgYXR0cmlidXRlczoge30sXG4gICAgbGFuZ3VhZ2U6IGxhbmd1YWdlLFxuICAgIHBhcmVudDogcGFyZW50XG4gIH1cblxuICBpZiAodmFsdWUuYWxpYXMpIHtcbiAgICBlbnYuY2xhc3NlcyA9IGVudi5jbGFzc2VzLmNvbmNhdCh2YWx1ZS5hbGlhcylcbiAgfVxuXG4gIHJlZnJhY3QuaG9va3MucnVuKCd3cmFwJywgZW52KVxuXG4gIHJldHVybiBoKFxuICAgIGVudi50YWcgKyAnLicgKyBlbnYuY2xhc3Nlcy5qb2luKCcuJyksXG4gICAgYXR0cmlidXRlcyhlbnYuYXR0cmlidXRlcyksXG4gICAgZW52LmNvbnRlbnRcbiAgKVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlBbGwodmFsdWVzLCBsYW5ndWFnZSkge1xuICB2YXIgcmVzdWx0ID0gW11cbiAgdmFyIGxlbmd0aCA9IHZhbHVlcy5sZW5ndGhcbiAgdmFyIGluZGV4ID0gLTFcbiAgdmFyIHZhbHVlXG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YWx1ZSA9IHZhbHVlc1tpbmRleF1cblxuICAgIGlmICh2YWx1ZSAhPT0gJycgJiYgdmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmVzdWx0LnB1c2godmFsdWUpXG4gICAgfVxuICB9XG5cbiAgaW5kZXggPSAtMVxuICBsZW5ndGggPSByZXN1bHQubGVuZ3RoXG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICB2YWx1ZSA9IHJlc3VsdFtpbmRleF1cbiAgICByZXN1bHRbaW5kZXhdID0gcmVmcmFjdC5Ub2tlbi5zdHJpbmdpZnkodmFsdWUsIGxhbmd1YWdlLCByZXN1bHQpXG4gIH1cblxuICByZXR1cm4gcmVzdWx0XG59XG5cbmZ1bmN0aW9uIGVuY29kZSh0b2tlbnMpIHtcbiAgcmV0dXJuIHRva2Vuc1xufVxuXG5mdW5jdGlvbiBhdHRyaWJ1dGVzKGF0dHJzKSB7XG4gIHZhciBrZXlcblxuICBmb3IgKGtleSBpbiBhdHRycykge1xuICAgIGF0dHJzW2tleV0gPSBkZWNvZGUoYXR0cnNba2V5XSlcbiAgfVxuXG4gIHJldHVybiBhdHRyc1xufVxuXG5mdW5jdGlvbiBjYXB0dXJlKCkge1xuICB2YXIgZGVmaW5lZCA9ICdQcmlzbScgaW4gZ2xvYmFsXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIHZhciBjdXJyZW50ID0gZGVmaW5lZCA/IGdsb2JhbC5QcmlzbSA6IHVuZGVmaW5lZFxuXG4gIHJldHVybiByZXN0b3JlXG5cbiAgZnVuY3Rpb24gcmVzdG9yZSgpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAtIENsZWFuIGxlYWtzIGFmdGVyIFByaXNtLiAqL1xuICAgIGlmIChkZWZpbmVkKSB7XG4gICAgICBnbG9iYWwuUHJpc20gPSBjdXJyZW50XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSBnbG9iYWwuUHJpc21cbiAgICB9XG5cbiAgICBkZWZpbmVkID0gdW5kZWZpbmVkXG4gICAgY3VycmVudCA9IHVuZGVmaW5lZFxuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBjbGlrZVxuY2xpa2UuZGlzcGxheU5hbWUgPSAnY2xpa2UnXG5jbGlrZS5hbGlhc2VzID0gW11cbmZ1bmN0aW9uIGNsaWtlKFByaXNtKSB7XG4gIFByaXNtLmxhbmd1YWdlcy5jbGlrZSA9IHtcbiAgICBjb21tZW50OiBbXG4gICAgICB7XG4gICAgICAgIHBhdHRlcm46IC8oXnxbXlxcXFxdKVxcL1xcKltcXHNcXFNdKj8oPzpcXCpcXC98JCkvLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXR0ZXJuOiAvKF58W15cXFxcOl0pXFwvXFwvLiovLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlLFxuICAgICAgICBncmVlZHk6IHRydWVcbiAgICAgIH1cbiAgICBdLFxuICAgIHN0cmluZzoge1xuICAgICAgcGF0dGVybjogLyhbXCInXSkoPzpcXFxcKD86XFxyXFxufFtcXHNcXFNdKXwoPyFcXDEpW15cXFxcXFxyXFxuXSkqXFwxLyxcbiAgICAgIGdyZWVkeTogdHJ1ZVxuICAgIH0sXG4gICAgJ2NsYXNzLW5hbWUnOiB7XG4gICAgICBwYXR0ZXJuOiAvKCg/OlxcYig/OmNsYXNzfGludGVyZmFjZXxleHRlbmRzfGltcGxlbWVudHN8dHJhaXR8aW5zdGFuY2VvZnxuZXcpXFxzKyl8KD86Y2F0Y2hcXHMrXFwoKSlbXFx3LlxcXFxdKy9pLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgIGluc2lkZToge1xuICAgICAgICBwdW5jdHVhdGlvbjogL1suXFxcXF0vXG4gICAgICB9XG4gICAgfSxcbiAgICBrZXl3b3JkOiAvXFxiKD86aWZ8ZWxzZXx3aGlsZXxkb3xmb3J8cmV0dXJufGlufGluc3RhbmNlb2Z8ZnVuY3Rpb258bmV3fHRyeXx0aHJvd3xjYXRjaHxmaW5hbGx5fG51bGx8YnJlYWt8Y29udGludWUpXFxiLyxcbiAgICBib29sZWFuOiAvXFxiKD86dHJ1ZXxmYWxzZSlcXGIvLFxuICAgIGZ1bmN0aW9uOiAvXFx3Kyg/PVxcKCkvLFxuICAgIG51bWJlcjogL1xcYjB4W1xcZGEtZl0rXFxifCg/OlxcYlxcZCtcXC4/XFxkKnxcXEJcXC5cXGQrKSg/OmVbKy1dP1xcZCspPy9pLFxuICAgIG9wZXJhdG9yOiAvLS0/fFxcK1xcKz98IT0/PT98PD0/fD49P3w9PT89P3wmJj98XFx8XFx8P3xcXD98XFwqfFxcL3x+fFxcXnwlLyxcbiAgICBwdW5jdHVhdGlvbjogL1t7fVtcXF07KCksLjpdL1xuICB9XG59XG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBjc3NcbmNzcy5kaXNwbGF5TmFtZSA9ICdjc3MnXG5jc3MuYWxpYXNlcyA9IFtdXG5mdW5jdGlvbiBjc3MoUHJpc20pIHtcbiAgOyhmdW5jdGlvbihQcmlzbSkge1xuICAgIHZhciBzdHJpbmcgPSAvKFwifCcpKD86XFxcXCg/OlxcclxcbnxbXFxzXFxTXSl8KD8hXFwxKVteXFxcXFxcclxcbl0pKlxcMS9cbiAgICBQcmlzbS5sYW5ndWFnZXMuY3NzID0ge1xuICAgICAgY29tbWVudDogL1xcL1xcKltcXHNcXFNdKj9cXCpcXC8vLFxuICAgICAgYXRydWxlOiB7XG4gICAgICAgIHBhdHRlcm46IC9AW1xcdy1dK1tcXHNcXFNdKj8oPzo7fCg/PVxccypcXHspKS8sXG4gICAgICAgIGluc2lkZToge1xuICAgICAgICAgIHJ1bGU6IC9AW1xcdy1dKy8gLy8gU2VlIHJlc3QgYmVsb3dcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHVybDoge1xuICAgICAgICBwYXR0ZXJuOiBSZWdFeHAoJ3VybFxcXFwoKD86JyArIHN0cmluZy5zb3VyY2UgKyAnfFteXFxuXFxyKCldKilcXFxcKScsICdpJyksXG4gICAgICAgIGluc2lkZToge1xuICAgICAgICAgIGZ1bmN0aW9uOiAvXnVybC9pLFxuICAgICAgICAgIHB1bmN0dWF0aW9uOiAvXlxcKHxcXCkkL1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgc2VsZWN0b3I6IFJlZ0V4cChcbiAgICAgICAgJ1tee31cXFxcc10oPzpbXnt9O1wiXFwnXXwnICsgc3RyaW5nLnNvdXJjZSArICcpKj8oPz1cXFxccypcXFxceyknXG4gICAgICApLFxuICAgICAgc3RyaW5nOiB7XG4gICAgICAgIHBhdHRlcm46IHN0cmluZyxcbiAgICAgICAgZ3JlZWR5OiB0cnVlXG4gICAgICB9LFxuICAgICAgcHJvcGVydHk6IC9bLV9hLXpcXHhBMC1cXHVGRkZGXVstXFx3XFx4QTAtXFx1RkZGRl0qKD89XFxzKjopL2ksXG4gICAgICBpbXBvcnRhbnQ6IC8haW1wb3J0YW50XFxiL2ksXG4gICAgICBmdW5jdGlvbjogL1stYS16MC05XSsoPz1cXCgpL2ksXG4gICAgICBwdW5jdHVhdGlvbjogL1soKXt9OzosXS9cbiAgICB9XG4gICAgUHJpc20ubGFuZ3VhZ2VzLmNzc1snYXRydWxlJ10uaW5zaWRlLnJlc3QgPSBQcmlzbS5sYW5ndWFnZXMuY3NzXG4gICAgdmFyIG1hcmt1cCA9IFByaXNtLmxhbmd1YWdlcy5tYXJrdXBcbiAgICBpZiAobWFya3VwKSB7XG4gICAgICBtYXJrdXAudGFnLmFkZElubGluZWQoJ3N0eWxlJywgJ2NzcycpXG4gICAgICBQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKFxuICAgICAgICAnaW5zaWRlJyxcbiAgICAgICAgJ2F0dHItdmFsdWUnLFxuICAgICAgICB7XG4gICAgICAgICAgJ3N0eWxlLWF0dHInOiB7XG4gICAgICAgICAgICBwYXR0ZXJuOiAvXFxzKnN0eWxlPShcInwnKSg/OlxcXFxbXFxzXFxTXXwoPyFcXDEpW15cXFxcXSkqXFwxL2ksXG4gICAgICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICAgICAgJ2F0dHItbmFtZSc6IHtcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiAvXlxccypzdHlsZS9pLFxuICAgICAgICAgICAgICAgIGluc2lkZTogbWFya3VwLnRhZy5pbnNpZGVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgcHVuY3R1YXRpb246IC9eXFxzKj1cXHMqWydcIl18WydcIl1cXHMqJC8sXG4gICAgICAgICAgICAgICdhdHRyLXZhbHVlJzoge1xuICAgICAgICAgICAgICAgIHBhdHRlcm46IC8uKy9pLFxuICAgICAgICAgICAgICAgIGluc2lkZTogUHJpc20ubGFuZ3VhZ2VzLmNzc1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWxpYXM6ICdsYW5ndWFnZS1jc3MnXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtYXJrdXAudGFnXG4gICAgICApXG4gICAgfVxuICB9KShQcmlzbSlcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG5tb2R1bGUuZXhwb3J0cyA9IGphdmFzY3JpcHRcbmphdmFzY3JpcHQuZGlzcGxheU5hbWUgPSAnamF2YXNjcmlwdCdcbmphdmFzY3JpcHQuYWxpYXNlcyA9IFsnanMnXVxuZnVuY3Rpb24gamF2YXNjcmlwdChQcmlzbSkge1xuICBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdCA9IFByaXNtLmxhbmd1YWdlcy5leHRlbmQoJ2NsaWtlJywge1xuICAgICdjbGFzcy1uYW1lJzogW1xuICAgICAgUHJpc20ubGFuZ3VhZ2VzLmNsaWtlWydjbGFzcy1uYW1lJ10sXG4gICAgICB7XG4gICAgICAgIHBhdHRlcm46IC8oXnxbXiRcXHdcXHhBMC1cXHVGRkZGXSlbXyRBLVpcXHhBMC1cXHVGRkZGXVskXFx3XFx4QTAtXFx1RkZGRl0qKD89XFwuKD86cHJvdG90eXBlfGNvbnN0cnVjdG9yKSkvLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgICB9XG4gICAgXSxcbiAgICBrZXl3b3JkOiBbXG4gICAgICB7XG4gICAgICAgIHBhdHRlcm46IC8oKD86Xnx9KVxccyopKD86Y2F0Y2h8ZmluYWxseSlcXGIvLFxuICAgICAgICBsb29rYmVoaW5kOiB0cnVlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXR0ZXJuOiAvKF58W14uXSlcXGIoPzphc3xhc3luYyg/PVxccyooPzpmdW5jdGlvblxcYnxcXCh8WyRcXHdcXHhBMC1cXHVGRkZGXXwkKSl8YXdhaXR8YnJlYWt8Y2FzZXxjbGFzc3xjb25zdHxjb250aW51ZXxkZWJ1Z2dlcnxkZWZhdWx0fGRlbGV0ZXxkb3xlbHNlfGVudW18ZXhwb3J0fGV4dGVuZHN8Zm9yfGZyb218ZnVuY3Rpb258Z2V0fGlmfGltcGxlbWVudHN8aW1wb3J0fGlufGluc3RhbmNlb2Z8aW50ZXJmYWNlfGxldHxuZXd8bnVsbHxvZnxwYWNrYWdlfHByaXZhdGV8cHJvdGVjdGVkfHB1YmxpY3xyZXR1cm58c2V0fHN0YXRpY3xzdXBlcnxzd2l0Y2h8dGhpc3x0aHJvd3x0cnl8dHlwZW9mfHVuZGVmaW5lZHx2YXJ8dm9pZHx3aGlsZXx3aXRofHlpZWxkKVxcYi8sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWVcbiAgICAgIH1cbiAgICBdLFxuICAgIG51bWJlcjogL1xcYig/Oig/OjBbeFhdKD86W1xcZEEtRmEtZl0oPzpfW1xcZEEtRmEtZl0pPykrfDBbYkJdKD86WzAxXSg/Ol9bMDFdKT8pK3wwW29PXSg/OlswLTddKD86X1swLTddKT8pKyluP3woPzpcXGQoPzpfXFxkKT8pK258TmFOfEluZmluaXR5KVxcYnwoPzpcXGIoPzpcXGQoPzpfXFxkKT8pK1xcLj8oPzpcXGQoPzpfXFxkKT8pKnxcXEJcXC4oPzpcXGQoPzpfXFxkKT8pKykoPzpbRWVdWystXT8oPzpcXGQoPzpfXFxkKT8pKyk/LyxcbiAgICAvLyBBbGxvdyBmb3IgYWxsIG5vbi1BU0NJSSBjaGFyYWN0ZXJzIChTZWUgaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjAwODQ0NClcbiAgICBmdW5jdGlvbjogLyM/W18kYS16QS1aXFx4QTAtXFx1RkZGRl1bJFxcd1xceEEwLVxcdUZGRkZdKig/PVxccyooPzpcXC5cXHMqKD86YXBwbHl8YmluZHxjYWxsKVxccyopP1xcKCkvLFxuICAgIG9wZXJhdG9yOiAvLVstPV0/fFxcK1srPV0/fCE9Pz0/fDw8Pz0/fD4+Pz4/PT98PSg/Oj09P3w+KT98JlsmPV0/fFxcfFt8PV0/fFxcKlxcKj89P3xcXC89P3x+fFxcXj0/fCU9P3xcXD98XFwuezN9L1xuICB9KVxuICBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdFtcbiAgICAnY2xhc3MtbmFtZSdcbiAgXVswXS5wYXR0ZXJuID0gLyhcXGIoPzpjbGFzc3xpbnRlcmZhY2V8ZXh0ZW5kc3xpbXBsZW1lbnRzfGluc3RhbmNlb2Z8bmV3KVxccyspW1xcdy5cXFxcXSsvXG4gIFByaXNtLmxhbmd1YWdlcy5pbnNlcnRCZWZvcmUoJ2phdmFzY3JpcHQnLCAna2V5d29yZCcsIHtcbiAgICByZWdleDoge1xuICAgICAgcGF0dGVybjogLygoPzpefFteJFxcd1xceEEwLVxcdUZGRkYuXCInXFxdKVxcc10pXFxzKilcXC8oXFxbKD86W15cXF1cXFxcXFxyXFxuXXxcXFxcLikqXXxcXFxcLnxbXi9cXFxcXFxbXFxyXFxuXSkrXFwvW2dpbXl1c117MCw2fSg/PVxccyooJHxbXFxyXFxuLC47fSlcXF1dKSkvLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgIGdyZWVkeTogdHJ1ZVxuICAgIH0sXG4gICAgLy8gVGhpcyBtdXN0IGJlIGRlY2xhcmVkIGJlZm9yZSBrZXl3b3JkIGJlY2F1c2Ugd2UgdXNlIFwiZnVuY3Rpb25cIiBpbnNpZGUgdGhlIGxvb2stZm9yd2FyZFxuICAgICdmdW5jdGlvbi12YXJpYWJsZSc6IHtcbiAgICAgIHBhdHRlcm46IC8jP1tfJGEtekEtWlxceEEwLVxcdUZGRkZdWyRcXHdcXHhBMC1cXHVGRkZGXSooPz1cXHMqWz06XVxccyooPzphc3luY1xccyopPyg/OlxcYmZ1bmN0aW9uXFxifCg/OlxcKCg/OlteKCldfFxcKFteKCldKlxcKSkqXFwpfFtfJGEtekEtWlxceEEwLVxcdUZGRkZdWyRcXHdcXHhBMC1cXHVGRkZGXSopXFxzKj0+KSkvLFxuICAgICAgYWxpYXM6ICdmdW5jdGlvbidcbiAgICB9LFxuICAgIHBhcmFtZXRlcjogW1xuICAgICAge1xuICAgICAgICBwYXR0ZXJuOiAvKGZ1bmN0aW9uKD86XFxzK1tfJEEtWmEtelxceEEwLVxcdUZGRkZdWyRcXHdcXHhBMC1cXHVGRkZGXSopP1xccypcXChcXHMqKSg/IVxccykoPzpbXigpXXxcXChbXigpXSpcXCkpKz8oPz1cXHMqXFwpKS8sXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgIGluc2lkZTogUHJpc20ubGFuZ3VhZ2VzLmphdmFzY3JpcHRcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhdHRlcm46IC9bXyRhLXpcXHhBMC1cXHVGRkZGXVskXFx3XFx4QTAtXFx1RkZGRl0qKD89XFxzKj0+KS9pLFxuICAgICAgICBpbnNpZGU6IFByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXR0ZXJuOiAvKFxcKFxccyopKD8hXFxzKSg/OlteKCldfFxcKFteKCldKlxcKSkrPyg/PVxccypcXClcXHMqPT4pLyxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgaW5zaWRlOiBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGF0dGVybjogLygoPzpcXGJ8XFxzfF4pKD8hKD86YXN8YXN5bmN8YXdhaXR8YnJlYWt8Y2FzZXxjYXRjaHxjbGFzc3xjb25zdHxjb250aW51ZXxkZWJ1Z2dlcnxkZWZhdWx0fGRlbGV0ZXxkb3xlbHNlfGVudW18ZXhwb3J0fGV4dGVuZHN8ZmluYWxseXxmb3J8ZnJvbXxmdW5jdGlvbnxnZXR8aWZ8aW1wbGVtZW50c3xpbXBvcnR8aW58aW5zdGFuY2VvZnxpbnRlcmZhY2V8bGV0fG5ld3xudWxsfG9mfHBhY2thZ2V8cHJpdmF0ZXxwcm90ZWN0ZWR8cHVibGljfHJldHVybnxzZXR8c3RhdGljfHN1cGVyfHN3aXRjaHx0aGlzfHRocm93fHRyeXx0eXBlb2Z8dW5kZWZpbmVkfHZhcnx2b2lkfHdoaWxlfHdpdGh8eWllbGQpKD8hWyRcXHdcXHhBMC1cXHVGRkZGXSkpKD86W18kQS1aYS16XFx4QTAtXFx1RkZGRl1bJFxcd1xceEEwLVxcdUZGRkZdKlxccyopXFwoXFxzKikoPyFcXHMpKD86W14oKV18XFwoW14oKV0qXFwpKSs/KD89XFxzKlxcKVxccypcXHspLyxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgaW5zaWRlOiBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdFxuICAgICAgfVxuICAgIF0sXG4gICAgY29uc3RhbnQ6IC9cXGJbQS1aXSg/OltBLVpfXXxcXGR4PykqXFxiL1xuICB9KVxuICBQcmlzbS5sYW5ndWFnZXMuaW5zZXJ0QmVmb3JlKCdqYXZhc2NyaXB0JywgJ3N0cmluZycsIHtcbiAgICAndGVtcGxhdGUtc3RyaW5nJzoge1xuICAgICAgcGF0dGVybjogL2AoPzpcXFxcW1xcc1xcU118XFwkeyg/Oltee31dfHsoPzpbXnt9XXx7W159XSp9KSp9KSt9fCg/IVxcJHspW15cXFxcYF0pKmAvLFxuICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgaW5zaWRlOiB7XG4gICAgICAgICd0ZW1wbGF0ZS1wdW5jdHVhdGlvbic6IHtcbiAgICAgICAgICBwYXR0ZXJuOiAvXmB8YCQvLFxuICAgICAgICAgIGFsaWFzOiAnc3RyaW5nJ1xuICAgICAgICB9LFxuICAgICAgICBpbnRlcnBvbGF0aW9uOiB7XG4gICAgICAgICAgcGF0dGVybjogLygoPzpefFteXFxcXF0pKD86XFxcXHsyfSkqKVxcJHsoPzpbXnt9XXx7KD86W157fV18e1tefV0qfSkqfSkrfS8sXG4gICAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICAgICdpbnRlcnBvbGF0aW9uLXB1bmN0dWF0aW9uJzoge1xuICAgICAgICAgICAgICBwYXR0ZXJuOiAvXlxcJHt8fSQvLFxuICAgICAgICAgICAgICBhbGlhczogJ3B1bmN0dWF0aW9uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlc3Q6IFByaXNtLmxhbmd1YWdlcy5qYXZhc2NyaXB0XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBzdHJpbmc6IC9bXFxzXFxTXSsvXG4gICAgICB9XG4gICAgfVxuICB9KVxuICBpZiAoUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cCkge1xuICAgIFByaXNtLmxhbmd1YWdlcy5tYXJrdXAudGFnLmFkZElubGluZWQoJ3NjcmlwdCcsICdqYXZhc2NyaXB0JylcbiAgfVxuICBQcmlzbS5sYW5ndWFnZXMuanMgPSBQcmlzbS5sYW5ndWFnZXMuamF2YXNjcmlwdFxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gbWFya3VwXG5tYXJrdXAuZGlzcGxheU5hbWUgPSAnbWFya3VwJ1xubWFya3VwLmFsaWFzZXMgPSBbJ3htbCcsICdodG1sJywgJ21hdGhtbCcsICdzdmcnXVxuZnVuY3Rpb24gbWFya3VwKFByaXNtKSB7XG4gIFByaXNtLmxhbmd1YWdlcy5tYXJrdXAgPSB7XG4gICAgY29tbWVudDogLzwhLS1bXFxzXFxTXSo/LS0+LyxcbiAgICBwcm9sb2c6IC88XFw/W1xcc1xcU10rP1xcPz4vLFxuICAgIGRvY3R5cGU6IC88IURPQ1RZUEVbXFxzXFxTXSs/Pi9pLFxuICAgIGNkYXRhOiAvPCFcXFtDREFUQVxcW1tcXHNcXFNdKj9dXT4vaSxcbiAgICB0YWc6IHtcbiAgICAgIHBhdHRlcm46IC88XFwvPyg/IVxcZClbXlxccz5cXC89JDwlXSsoPzpcXHMoPzpcXHMqW15cXHM+XFwvPV0rKD86XFxzKj1cXHMqKD86XCJbXlwiXSpcInwnW14nXSonfFteXFxzJ1wiPj1dKyg/PVtcXHM+XSkpfCg/PVtcXHMvPl0pKSkrKT9cXHMqXFwvPz4vaSxcbiAgICAgIGdyZWVkeTogdHJ1ZSxcbiAgICAgIGluc2lkZToge1xuICAgICAgICB0YWc6IHtcbiAgICAgICAgICBwYXR0ZXJuOiAvXjxcXC8/W15cXHM+XFwvXSsvaSxcbiAgICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICAgIHB1bmN0dWF0aW9uOiAvXjxcXC8/LyxcbiAgICAgICAgICAgIG5hbWVzcGFjZTogL15bXlxccz5cXC86XSs6L1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJ2F0dHItdmFsdWUnOiB7XG4gICAgICAgICAgcGF0dGVybjogLz1cXHMqKD86XCJbXlwiXSpcInwnW14nXSonfFteXFxzJ1wiPj1dKykvaSxcbiAgICAgICAgICBpbnNpZGU6IHtcbiAgICAgICAgICAgIHB1bmN0dWF0aW9uOiBbXG4gICAgICAgICAgICAgIC9ePS8sXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiAvXihcXHMqKVtcIiddfFtcIiddJC8sXG4gICAgICAgICAgICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBwdW5jdHVhdGlvbjogL1xcLz8+LyxcbiAgICAgICAgJ2F0dHItbmFtZSc6IHtcbiAgICAgICAgICBwYXR0ZXJuOiAvW15cXHM+XFwvXSsvLFxuICAgICAgICAgIGluc2lkZToge1xuICAgICAgICAgICAgbmFtZXNwYWNlOiAvXlteXFxzPlxcLzpdKzovXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBlbnRpdHk6IC8mIz9bXFxkYS16XXsxLDh9Oy9pXG4gIH1cbiAgUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cFsndGFnJ10uaW5zaWRlWydhdHRyLXZhbHVlJ10uaW5zaWRlWydlbnRpdHknXSA9XG4gICAgUHJpc20ubGFuZ3VhZ2VzLm1hcmt1cFsnZW50aXR5J10gLy8gUGx1Z2luIHRvIG1ha2UgZW50aXR5IHRpdGxlIHNob3cgdGhlIHJlYWwgZW50aXR5LCBpZGVhIGJ5IFJvbWFuIEtvbWFyb3ZcbiAgUHJpc20uaG9va3MuYWRkKCd3cmFwJywgZnVuY3Rpb24oZW52KSB7XG4gICAgaWYgKGVudi50eXBlID09PSAnZW50aXR5Jykge1xuICAgICAgZW52LmF0dHJpYnV0ZXNbJ3RpdGxlJ10gPSBlbnYuY29udGVudC52YWx1ZS5yZXBsYWNlKC8mYW1wOy8sICcmJylcbiAgICB9XG4gIH0pXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShQcmlzbS5sYW5ndWFnZXMubWFya3VwLnRhZywgJ2FkZElubGluZWQnLCB7XG4gICAgLyoqXG4gICAgICogQWRkcyBhbiBpbmxpbmVkIGxhbmd1YWdlIHRvIG1hcmt1cC5cbiAgICAgKlxuICAgICAqIEFuIGV4YW1wbGUgb2YgYW4gaW5saW5lZCBsYW5ndWFnZSBpcyBDU1Mgd2l0aCBgPHN0eWxlPmAgdGFncy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0YWdOYW1lIFRoZSBuYW1lIG9mIHRoZSB0YWcgdGhhdCBjb250YWlucyB0aGUgaW5saW5lZCBsYW5ndWFnZS4gVGhpcyBuYW1lIHdpbGwgYmUgdHJlYXRlZCBhc1xuICAgICAqIGNhc2UgaW5zZW5zaXRpdmUuXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGxhbmcgVGhlIGxhbmd1YWdlIGtleS5cbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIGFkZElubGluZWQoJ3N0eWxlJywgJ2NzcycpO1xuICAgICAqL1xuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRJbmxpbmVkKHRhZ05hbWUsIGxhbmcpIHtcbiAgICAgIHZhciBpbmNsdWRlZENkYXRhSW5zaWRlID0ge31cbiAgICAgIGluY2x1ZGVkQ2RhdGFJbnNpZGVbJ2xhbmd1YWdlLScgKyBsYW5nXSA9IHtcbiAgICAgICAgcGF0dGVybjogLyhePCFcXFtDREFUQVxcWylbXFxzXFxTXSs/KD89XFxdXFxdPiQpL2ksXG4gICAgICAgIGxvb2tiZWhpbmQ6IHRydWUsXG4gICAgICAgIGluc2lkZTogUHJpc20ubGFuZ3VhZ2VzW2xhbmddXG4gICAgICB9XG4gICAgICBpbmNsdWRlZENkYXRhSW5zaWRlWydjZGF0YSddID0gL148IVxcW0NEQVRBXFxbfFxcXVxcXT4kL2lcbiAgICAgIHZhciBpbnNpZGUgPSB7XG4gICAgICAgICdpbmNsdWRlZC1jZGF0YSc6IHtcbiAgICAgICAgICBwYXR0ZXJuOiAvPCFcXFtDREFUQVxcW1tcXHNcXFNdKj9cXF1cXF0+L2ksXG4gICAgICAgICAgaW5zaWRlOiBpbmNsdWRlZENkYXRhSW5zaWRlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGluc2lkZVsnbGFuZ3VhZ2UtJyArIGxhbmddID0ge1xuICAgICAgICBwYXR0ZXJuOiAvW1xcc1xcU10rLyxcbiAgICAgICAgaW5zaWRlOiBQcmlzbS5sYW5ndWFnZXNbbGFuZ11cbiAgICAgIH1cbiAgICAgIHZhciBkZWYgPSB7fVxuICAgICAgZGVmW3RhZ05hbWVdID0ge1xuICAgICAgICBwYXR0ZXJuOiBSZWdFeHAoXG4gICAgICAgICAgLyg8X19bXFxzXFxTXSo/PikoPzo8IVxcW0NEQVRBXFxbW1xcc1xcU10qP1xcXVxcXT5cXHMqfFtcXHNcXFNdKSo/KD89PFxcL19fPikvLnNvdXJjZS5yZXBsYWNlKFxuICAgICAgICAgICAgL19fL2csXG4gICAgICAgICAgICB0YWdOYW1lXG4gICAgICAgICAgKSxcbiAgICAgICAgICAnaSdcbiAgICAgICAgKSxcbiAgICAgICAgbG9va2JlaGluZDogdHJ1ZSxcbiAgICAgICAgZ3JlZWR5OiB0cnVlLFxuICAgICAgICBpbnNpZGU6IGluc2lkZVxuICAgICAgfVxuICAgICAgUHJpc20ubGFuZ3VhZ2VzLmluc2VydEJlZm9yZSgnbWFya3VwJywgJ2NkYXRhJywgZGVmKVxuICAgIH1cbiAgfSlcbiAgUHJpc20ubGFuZ3VhZ2VzLnhtbCA9IFByaXNtLmxhbmd1YWdlcy5leHRlbmQoJ21hcmt1cCcsIHt9KVxuICBQcmlzbS5sYW5ndWFnZXMuaHRtbCA9IFByaXNtLmxhbmd1YWdlcy5tYXJrdXBcbiAgUHJpc20ubGFuZ3VhZ2VzLm1hdGhtbCA9IFByaXNtLmxhbmd1YWdlcy5tYXJrdXBcbiAgUHJpc20ubGFuZ3VhZ2VzLnN2ZyA9IFByaXNtLmxhbmd1YWdlcy5tYXJrdXBcbn1cbiIsInZhciBfc2VsZiA9ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJylcblx0PyB3aW5kb3cgICAvLyBpZiBpbiBicm93c2VyXG5cdDogKFxuXHRcdCh0eXBlb2YgV29ya2VyR2xvYmFsU2NvcGUgIT09ICd1bmRlZmluZWQnICYmIHNlbGYgaW5zdGFuY2VvZiBXb3JrZXJHbG9iYWxTY29wZSlcblx0XHQ/IHNlbGYgLy8gaWYgaW4gd29ya2VyXG5cdFx0OiB7fSAgIC8vIGlmIGluIG5vZGUganNcblx0KTtcblxuLyoqXG4gKiBQcmlzbTogTGlnaHR3ZWlnaHQsIHJvYnVzdCwgZWxlZ2FudCBzeW50YXggaGlnaGxpZ2h0aW5nXG4gKiBNSVQgbGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocC9cbiAqIEBhdXRob3IgTGVhIFZlcm91IGh0dHA6Ly9sZWEudmVyb3UubWVcbiAqL1xuXG52YXIgUHJpc20gPSAoZnVuY3Rpb24gKF9zZWxmKXtcblxuLy8gUHJpdmF0ZSBoZWxwZXIgdmFyc1xudmFyIGxhbmcgPSAvXFxibGFuZyg/OnVhZ2UpPy0oW1xcdy1dKylcXGIvaTtcbnZhciB1bmlxdWVJZCA9IDA7XG5cbnZhciBfID0ge1xuXHRtYW51YWw6IF9zZWxmLlByaXNtICYmIF9zZWxmLlByaXNtLm1hbnVhbCxcblx0ZGlzYWJsZVdvcmtlck1lc3NhZ2VIYW5kbGVyOiBfc2VsZi5QcmlzbSAmJiBfc2VsZi5QcmlzbS5kaXNhYmxlV29ya2VyTWVzc2FnZUhhbmRsZXIsXG5cdHV0aWw6IHtcblx0XHRlbmNvZGU6IGZ1bmN0aW9uICh0b2tlbnMpIHtcblx0XHRcdGlmICh0b2tlbnMgaW5zdGFuY2VvZiBUb2tlbikge1xuXHRcdFx0XHRyZXR1cm4gbmV3IFRva2VuKHRva2Vucy50eXBlLCBfLnV0aWwuZW5jb2RlKHRva2Vucy5jb250ZW50KSwgdG9rZW5zLmFsaWFzKTtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0b2tlbnMpKSB7XG5cdFx0XHRcdHJldHVybiB0b2tlbnMubWFwKF8udXRpbC5lbmNvZGUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIHRva2Vucy5yZXBsYWNlKC8mL2csICcmYW1wOycpLnJlcGxhY2UoLzwvZywgJyZsdDsnKS5yZXBsYWNlKC9cXHUwMGEwL2csICcgJyk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdHR5cGU6IGZ1bmN0aW9uIChvKSB7XG5cdFx0XHRyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcblx0XHR9LFxuXG5cdFx0b2JqSWQ6IGZ1bmN0aW9uIChvYmopIHtcblx0XHRcdGlmICghb2JqWydfX2lkJ10pIHtcblx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgJ19faWQnLCB7IHZhbHVlOiArK3VuaXF1ZUlkIH0pO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG9ialsnX19pZCddO1xuXHRcdH0sXG5cblx0XHQvLyBEZWVwIGNsb25lIGEgbGFuZ3VhZ2UgZGVmaW5pdGlvbiAoZS5nLiB0byBleHRlbmQgaXQpXG5cdFx0Y2xvbmU6IGZ1bmN0aW9uIGRlZXBDbG9uZShvLCB2aXNpdGVkKSB7XG5cdFx0XHR2YXIgY2xvbmUsIGlkLCB0eXBlID0gXy51dGlsLnR5cGUobyk7XG5cdFx0XHR2aXNpdGVkID0gdmlzaXRlZCB8fCB7fTtcblxuXHRcdFx0c3dpdGNoICh0eXBlKSB7XG5cdFx0XHRcdGNhc2UgJ09iamVjdCc6XG5cdFx0XHRcdFx0aWQgPSBfLnV0aWwub2JqSWQobyk7XG5cdFx0XHRcdFx0aWYgKHZpc2l0ZWRbaWRdKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdmlzaXRlZFtpZF07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNsb25lID0ge307XG5cdFx0XHRcdFx0dmlzaXRlZFtpZF0gPSBjbG9uZTtcblxuXHRcdFx0XHRcdGZvciAodmFyIGtleSBpbiBvKSB7XG5cdFx0XHRcdFx0XHRpZiAoby5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG5cdFx0XHRcdFx0XHRcdGNsb25lW2tleV0gPSBkZWVwQ2xvbmUob1trZXldLCB2aXNpdGVkKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRyZXR1cm4gY2xvbmU7XG5cblx0XHRcdFx0Y2FzZSAnQXJyYXknOlxuXHRcdFx0XHRcdGlkID0gXy51dGlsLm9iaklkKG8pO1xuXHRcdFx0XHRcdGlmICh2aXNpdGVkW2lkXSkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHZpc2l0ZWRbaWRdO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjbG9uZSA9IFtdO1xuXHRcdFx0XHRcdHZpc2l0ZWRbaWRdID0gY2xvbmU7XG5cblx0XHRcdFx0XHRvLmZvckVhY2goZnVuY3Rpb24gKHYsIGkpIHtcblx0XHRcdFx0XHRcdGNsb25lW2ldID0gZGVlcENsb25lKHYsIHZpc2l0ZWQpO1xuXHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0cmV0dXJuIGNsb25lO1xuXG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0cmV0dXJuIG87XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXG5cdGxhbmd1YWdlczoge1xuXHRcdGV4dGVuZDogZnVuY3Rpb24gKGlkLCByZWRlZikge1xuXHRcdFx0dmFyIGxhbmcgPSBfLnV0aWwuY2xvbmUoXy5sYW5ndWFnZXNbaWRdKTtcblxuXHRcdFx0Zm9yICh2YXIga2V5IGluIHJlZGVmKSB7XG5cdFx0XHRcdGxhbmdba2V5XSA9IHJlZGVmW2tleV07XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBsYW5nO1xuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBJbnNlcnQgYSB0b2tlbiBiZWZvcmUgYW5vdGhlciB0b2tlbiBpbiBhIGxhbmd1YWdlIGxpdGVyYWxcblx0XHQgKiBBcyB0aGlzIG5lZWRzIHRvIHJlY3JlYXRlIHRoZSBvYmplY3QgKHdlIGNhbm5vdCBhY3R1YWxseSBpbnNlcnQgYmVmb3JlIGtleXMgaW4gb2JqZWN0IGxpdGVyYWxzKSxcblx0XHQgKiB3ZSBjYW5ub3QganVzdCBwcm92aWRlIGFuIG9iamVjdCwgd2UgbmVlZCBhbiBvYmplY3QgYW5kIGEga2V5LlxuXHRcdCAqIEBwYXJhbSBpbnNpZGUgVGhlIGtleSAob3IgbGFuZ3VhZ2UgaWQpIG9mIHRoZSBwYXJlbnRcblx0XHQgKiBAcGFyYW0gYmVmb3JlIFRoZSBrZXkgdG8gaW5zZXJ0IGJlZm9yZS5cblx0XHQgKiBAcGFyYW0gaW5zZXJ0IE9iamVjdCB3aXRoIHRoZSBrZXkvdmFsdWUgcGFpcnMgdG8gaW5zZXJ0XG5cdFx0ICogQHBhcmFtIHJvb3QgVGhlIG9iamVjdCB0aGF0IGNvbnRhaW5zIGBpbnNpZGVgLiBJZiBlcXVhbCB0byBQcmlzbS5sYW5ndWFnZXMsIGl0IGNhbiBiZSBvbWl0dGVkLlxuXHRcdCAqL1xuXHRcdGluc2VydEJlZm9yZTogZnVuY3Rpb24gKGluc2lkZSwgYmVmb3JlLCBpbnNlcnQsIHJvb3QpIHtcblx0XHRcdHJvb3QgPSByb290IHx8IF8ubGFuZ3VhZ2VzO1xuXHRcdFx0dmFyIGdyYW1tYXIgPSByb290W2luc2lkZV07XG5cdFx0XHR2YXIgcmV0ID0ge307XG5cblx0XHRcdGZvciAodmFyIHRva2VuIGluIGdyYW1tYXIpIHtcblx0XHRcdFx0aWYgKGdyYW1tYXIuaGFzT3duUHJvcGVydHkodG9rZW4pKSB7XG5cblx0XHRcdFx0XHRpZiAodG9rZW4gPT0gYmVmb3JlKSB7XG5cdFx0XHRcdFx0XHRmb3IgKHZhciBuZXdUb2tlbiBpbiBpbnNlcnQpIHtcblx0XHRcdFx0XHRcdFx0aWYgKGluc2VydC5oYXNPd25Qcm9wZXJ0eShuZXdUb2tlbikpIHtcblx0XHRcdFx0XHRcdFx0XHRyZXRbbmV3VG9rZW5dID0gaW5zZXJ0W25ld1Rva2VuXTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIERvIG5vdCBpbnNlcnQgdG9rZW4gd2hpY2ggYWxzbyBvY2N1ciBpbiBpbnNlcnQuIFNlZSAjMTUyNVxuXHRcdFx0XHRcdGlmICghaW5zZXJ0Lmhhc093blByb3BlcnR5KHRva2VuKSkge1xuXHRcdFx0XHRcdFx0cmV0W3Rva2VuXSA9IGdyYW1tYXJbdG9rZW5dO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR2YXIgb2xkID0gcm9vdFtpbnNpZGVdO1xuXHRcdFx0cm9vdFtpbnNpZGVdID0gcmV0O1xuXG5cdFx0XHQvLyBVcGRhdGUgcmVmZXJlbmNlcyBpbiBvdGhlciBsYW5ndWFnZSBkZWZpbml0aW9uc1xuXHRcdFx0Xy5sYW5ndWFnZXMuREZTKF8ubGFuZ3VhZ2VzLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG5cdFx0XHRcdGlmICh2YWx1ZSA9PT0gb2xkICYmIGtleSAhPSBpbnNpZGUpIHtcblx0XHRcdFx0XHR0aGlzW2tleV0gPSByZXQ7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRyZXR1cm4gcmV0O1xuXHRcdH0sXG5cblx0XHQvLyBUcmF2ZXJzZSBhIGxhbmd1YWdlIGRlZmluaXRpb24gd2l0aCBEZXB0aCBGaXJzdCBTZWFyY2hcblx0XHRERlM6IGZ1bmN0aW9uIERGUyhvLCBjYWxsYmFjaywgdHlwZSwgdmlzaXRlZCkge1xuXHRcdFx0dmlzaXRlZCA9IHZpc2l0ZWQgfHwge307XG5cblx0XHRcdHZhciBvYmpJZCA9IF8udXRpbC5vYmpJZDtcblxuXHRcdFx0Zm9yICh2YXIgaSBpbiBvKSB7XG5cdFx0XHRcdGlmIChvLmhhc093blByb3BlcnR5KGkpKSB7XG5cdFx0XHRcdFx0Y2FsbGJhY2suY2FsbChvLCBpLCBvW2ldLCB0eXBlIHx8IGkpO1xuXG5cdFx0XHRcdFx0dmFyIHByb3BlcnR5ID0gb1tpXSxcblx0XHRcdFx0XHQgICAgcHJvcGVydHlUeXBlID0gXy51dGlsLnR5cGUocHJvcGVydHkpO1xuXG5cdFx0XHRcdFx0aWYgKHByb3BlcnR5VHlwZSA9PT0gJ09iamVjdCcgJiYgIXZpc2l0ZWRbb2JqSWQocHJvcGVydHkpXSkge1xuXHRcdFx0XHRcdFx0dmlzaXRlZFtvYmpJZChwcm9wZXJ0eSldID0gdHJ1ZTtcblx0XHRcdFx0XHRcdERGUyhwcm9wZXJ0eSwgY2FsbGJhY2ssIG51bGwsIHZpc2l0ZWQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlIGlmIChwcm9wZXJ0eVR5cGUgPT09ICdBcnJheScgJiYgIXZpc2l0ZWRbb2JqSWQocHJvcGVydHkpXSkge1xuXHRcdFx0XHRcdFx0dmlzaXRlZFtvYmpJZChwcm9wZXJ0eSldID0gdHJ1ZTtcblx0XHRcdFx0XHRcdERGUyhwcm9wZXJ0eSwgY2FsbGJhY2ssIGksIHZpc2l0ZWQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0cGx1Z2luczoge30sXG5cblx0aGlnaGxpZ2h0QWxsOiBmdW5jdGlvbihhc3luYywgY2FsbGJhY2spIHtcblx0XHRfLmhpZ2hsaWdodEFsbFVuZGVyKGRvY3VtZW50LCBhc3luYywgY2FsbGJhY2spO1xuXHR9LFxuXG5cdGhpZ2hsaWdodEFsbFVuZGVyOiBmdW5jdGlvbihjb250YWluZXIsIGFzeW5jLCBjYWxsYmFjaykge1xuXHRcdHZhciBlbnYgPSB7XG5cdFx0XHRjYWxsYmFjazogY2FsbGJhY2ssXG5cdFx0XHRzZWxlY3RvcjogJ2NvZGVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdLCBbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdIGNvZGUsIGNvZGVbY2xhc3MqPVwibGFuZy1cIl0sIFtjbGFzcyo9XCJsYW5nLVwiXSBjb2RlJ1xuXHRcdH07XG5cblx0XHRfLmhvb2tzLnJ1bignYmVmb3JlLWhpZ2hsaWdodGFsbCcsIGVudik7XG5cblx0XHR2YXIgZWxlbWVudHMgPSBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbChlbnYuc2VsZWN0b3IpO1xuXG5cdFx0Zm9yICh2YXIgaT0wLCBlbGVtZW50OyBlbGVtZW50ID0gZWxlbWVudHNbaSsrXTspIHtcblx0XHRcdF8uaGlnaGxpZ2h0RWxlbWVudChlbGVtZW50LCBhc3luYyA9PT0gdHJ1ZSwgZW52LmNhbGxiYWNrKTtcblx0XHR9XG5cdH0sXG5cblx0aGlnaGxpZ2h0RWxlbWVudDogZnVuY3Rpb24oZWxlbWVudCwgYXN5bmMsIGNhbGxiYWNrKSB7XG5cdFx0Ly8gRmluZCBsYW5ndWFnZVxuXHRcdHZhciBsYW5ndWFnZSA9ICdub25lJywgZ3JhbW1hciwgcGFyZW50ID0gZWxlbWVudDtcblxuXHRcdHdoaWxlIChwYXJlbnQgJiYgIWxhbmcudGVzdChwYXJlbnQuY2xhc3NOYW1lKSkge1xuXHRcdFx0cGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGU7XG5cdFx0fVxuXG5cdFx0aWYgKHBhcmVudCkge1xuXHRcdFx0bGFuZ3VhZ2UgPSAocGFyZW50LmNsYXNzTmFtZS5tYXRjaChsYW5nKSB8fCBbLCdub25lJ10pWzFdLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRncmFtbWFyID0gXy5sYW5ndWFnZXNbbGFuZ3VhZ2VdO1xuXHRcdH1cblxuXHRcdC8vIFNldCBsYW5ndWFnZSBvbiB0aGUgZWxlbWVudCwgaWYgbm90IHByZXNlbnRcblx0XHRlbGVtZW50LmNsYXNzTmFtZSA9IGVsZW1lbnQuY2xhc3NOYW1lLnJlcGxhY2UobGFuZywgJycpLnJlcGxhY2UoL1xccysvZywgJyAnKSArICcgbGFuZ3VhZ2UtJyArIGxhbmd1YWdlO1xuXG5cdFx0aWYgKGVsZW1lbnQucGFyZW50Tm9kZSkge1xuXHRcdFx0Ly8gU2V0IGxhbmd1YWdlIG9uIHRoZSBwYXJlbnQsIGZvciBzdHlsaW5nXG5cdFx0XHRwYXJlbnQgPSBlbGVtZW50LnBhcmVudE5vZGU7XG5cblx0XHRcdGlmICgvcHJlL2kudGVzdChwYXJlbnQubm9kZU5hbWUpKSB7XG5cdFx0XHRcdHBhcmVudC5jbGFzc05hbWUgPSBwYXJlbnQuY2xhc3NOYW1lLnJlcGxhY2UobGFuZywgJycpLnJlcGxhY2UoL1xccysvZywgJyAnKSArICcgbGFuZ3VhZ2UtJyArIGxhbmd1YWdlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHZhciBjb2RlID0gZWxlbWVudC50ZXh0Q29udGVudDtcblxuXHRcdHZhciBlbnYgPSB7XG5cdFx0XHRlbGVtZW50OiBlbGVtZW50LFxuXHRcdFx0bGFuZ3VhZ2U6IGxhbmd1YWdlLFxuXHRcdFx0Z3JhbW1hcjogZ3JhbW1hcixcblx0XHRcdGNvZGU6IGNvZGVcblx0XHR9O1xuXG5cdFx0dmFyIGluc2VydEhpZ2hsaWdodGVkQ29kZSA9IGZ1bmN0aW9uIChoaWdobGlnaHRlZENvZGUpIHtcblx0XHRcdGVudi5oaWdobGlnaHRlZENvZGUgPSBoaWdobGlnaHRlZENvZGU7XG5cblx0XHRcdF8uaG9va3MucnVuKCdiZWZvcmUtaW5zZXJ0JywgZW52KTtcblxuXHRcdFx0ZW52LmVsZW1lbnQuaW5uZXJIVE1MID0gZW52LmhpZ2hsaWdodGVkQ29kZTtcblxuXHRcdFx0Xy5ob29rcy5ydW4oJ2FmdGVyLWhpZ2hsaWdodCcsIGVudik7XG5cdFx0XHRfLmhvb2tzLnJ1bignY29tcGxldGUnLCBlbnYpO1xuXHRcdFx0Y2FsbGJhY2sgJiYgY2FsbGJhY2suY2FsbChlbnYuZWxlbWVudCk7XG5cdFx0fVxuXG5cdFx0Xy5ob29rcy5ydW4oJ2JlZm9yZS1zYW5pdHktY2hlY2snLCBlbnYpO1xuXG5cdFx0aWYgKCFlbnYuY29kZSkge1xuXHRcdFx0Xy5ob29rcy5ydW4oJ2NvbXBsZXRlJywgZW52KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRfLmhvb2tzLnJ1bignYmVmb3JlLWhpZ2hsaWdodCcsIGVudik7XG5cblx0XHRpZiAoIWVudi5ncmFtbWFyKSB7XG5cdFx0XHRpbnNlcnRIaWdobGlnaHRlZENvZGUoXy51dGlsLmVuY29kZShlbnYuY29kZSkpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmIChhc3luYyAmJiBfc2VsZi5Xb3JrZXIpIHtcblx0XHRcdHZhciB3b3JrZXIgPSBuZXcgV29ya2VyKF8uZmlsZW5hbWUpO1xuXG5cdFx0XHR3b3JrZXIub25tZXNzYWdlID0gZnVuY3Rpb24oZXZ0KSB7XG5cdFx0XHRcdGluc2VydEhpZ2hsaWdodGVkQ29kZShldnQuZGF0YSk7XG5cdFx0XHR9O1xuXG5cdFx0XHR3b3JrZXIucG9zdE1lc3NhZ2UoSlNPTi5zdHJpbmdpZnkoe1xuXHRcdFx0XHRsYW5ndWFnZTogZW52Lmxhbmd1YWdlLFxuXHRcdFx0XHRjb2RlOiBlbnYuY29kZSxcblx0XHRcdFx0aW1tZWRpYXRlQ2xvc2U6IHRydWVcblx0XHRcdH0pKTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRpbnNlcnRIaWdobGlnaHRlZENvZGUoXy5oaWdobGlnaHQoZW52LmNvZGUsIGVudi5ncmFtbWFyLCBlbnYubGFuZ3VhZ2UpKTtcblx0XHR9XG5cdH0sXG5cblx0aGlnaGxpZ2h0OiBmdW5jdGlvbiAodGV4dCwgZ3JhbW1hciwgbGFuZ3VhZ2UpIHtcblx0XHR2YXIgZW52ID0ge1xuXHRcdFx0Y29kZTogdGV4dCxcblx0XHRcdGdyYW1tYXI6IGdyYW1tYXIsXG5cdFx0XHRsYW5ndWFnZTogbGFuZ3VhZ2Vcblx0XHR9O1xuXHRcdF8uaG9va3MucnVuKCdiZWZvcmUtdG9rZW5pemUnLCBlbnYpO1xuXHRcdGVudi50b2tlbnMgPSBfLnRva2VuaXplKGVudi5jb2RlLCBlbnYuZ3JhbW1hcik7XG5cdFx0Xy5ob29rcy5ydW4oJ2FmdGVyLXRva2VuaXplJywgZW52KTtcblx0XHRyZXR1cm4gVG9rZW4uc3RyaW5naWZ5KF8udXRpbC5lbmNvZGUoZW52LnRva2VucyksIGVudi5sYW5ndWFnZSk7XG5cdH0sXG5cblx0bWF0Y2hHcmFtbWFyOiBmdW5jdGlvbiAodGV4dCwgc3RyYXJyLCBncmFtbWFyLCBpbmRleCwgc3RhcnRQb3MsIG9uZXNob3QsIHRhcmdldCkge1xuXHRcdGZvciAodmFyIHRva2VuIGluIGdyYW1tYXIpIHtcblx0XHRcdGlmKCFncmFtbWFyLmhhc093blByb3BlcnR5KHRva2VuKSB8fCAhZ3JhbW1hclt0b2tlbl0pIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0b2tlbiA9PSB0YXJnZXQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgcGF0dGVybnMgPSBncmFtbWFyW3Rva2VuXTtcblx0XHRcdHBhdHRlcm5zID0gKF8udXRpbC50eXBlKHBhdHRlcm5zKSA9PT0gXCJBcnJheVwiKSA/IHBhdHRlcm5zIDogW3BhdHRlcm5zXTtcblxuXHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBwYXR0ZXJucy5sZW5ndGg7ICsraikge1xuXHRcdFx0XHR2YXIgcGF0dGVybiA9IHBhdHRlcm5zW2pdLFxuXHRcdFx0XHRcdGluc2lkZSA9IHBhdHRlcm4uaW5zaWRlLFxuXHRcdFx0XHRcdGxvb2tiZWhpbmQgPSAhIXBhdHRlcm4ubG9va2JlaGluZCxcblx0XHRcdFx0XHRncmVlZHkgPSAhIXBhdHRlcm4uZ3JlZWR5LFxuXHRcdFx0XHRcdGxvb2tiZWhpbmRMZW5ndGggPSAwLFxuXHRcdFx0XHRcdGFsaWFzID0gcGF0dGVybi5hbGlhcztcblxuXHRcdFx0XHRpZiAoZ3JlZWR5ICYmICFwYXR0ZXJuLnBhdHRlcm4uZ2xvYmFsKSB7XG5cdFx0XHRcdFx0Ly8gV2l0aG91dCB0aGUgZ2xvYmFsIGZsYWcsIGxhc3RJbmRleCB3b24ndCB3b3JrXG5cdFx0XHRcdFx0dmFyIGZsYWdzID0gcGF0dGVybi5wYXR0ZXJuLnRvU3RyaW5nKCkubWF0Y2goL1tpbXV5XSokLylbMF07XG5cdFx0XHRcdFx0cGF0dGVybi5wYXR0ZXJuID0gUmVnRXhwKHBhdHRlcm4ucGF0dGVybi5zb3VyY2UsIGZsYWdzICsgXCJnXCIpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cGF0dGVybiA9IHBhdHRlcm4ucGF0dGVybiB8fCBwYXR0ZXJuO1xuXG5cdFx0XHRcdC8vIERvbuKAmXQgY2FjaGUgbGVuZ3RoIGFzIGl0IGNoYW5nZXMgZHVyaW5nIHRoZSBsb29wXG5cdFx0XHRcdGZvciAodmFyIGkgPSBpbmRleCwgcG9zID0gc3RhcnRQb3M7IGkgPCBzdHJhcnIubGVuZ3RoOyBwb3MgKz0gc3RyYXJyW2ldLmxlbmd0aCwgKytpKSB7XG5cblx0XHRcdFx0XHR2YXIgc3RyID0gc3RyYXJyW2ldO1xuXG5cdFx0XHRcdFx0aWYgKHN0cmFyci5sZW5ndGggPiB0ZXh0Lmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0Ly8gU29tZXRoaW5nIHdlbnQgdGVycmlibHkgd3JvbmcsIEFCT1JULCBBQk9SVCFcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoc3RyIGluc3RhbmNlb2YgVG9rZW4pIHtcblx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmIChncmVlZHkgJiYgaSAhPSBzdHJhcnIubGVuZ3RoIC0gMSkge1xuXHRcdFx0XHRcdFx0cGF0dGVybi5sYXN0SW5kZXggPSBwb3M7XG5cdFx0XHRcdFx0XHR2YXIgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWModGV4dCk7XG5cdFx0XHRcdFx0XHRpZiAoIW1hdGNoKSB7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHR2YXIgZnJvbSA9IG1hdGNoLmluZGV4ICsgKGxvb2tiZWhpbmQgPyBtYXRjaFsxXS5sZW5ndGggOiAwKSxcblx0XHRcdFx0XHRcdCAgICB0byA9IG1hdGNoLmluZGV4ICsgbWF0Y2hbMF0ubGVuZ3RoLFxuXHRcdFx0XHRcdFx0ICAgIGsgPSBpLFxuXHRcdFx0XHRcdFx0ICAgIHAgPSBwb3M7XG5cblx0XHRcdFx0XHRcdGZvciAodmFyIGxlbiA9IHN0cmFyci5sZW5ndGg7IGsgPCBsZW4gJiYgKHAgPCB0byB8fCAoIXN0cmFycltrXS50eXBlICYmICFzdHJhcnJbayAtIDFdLmdyZWVkeSkpOyArK2spIHtcblx0XHRcdFx0XHRcdFx0cCArPSBzdHJhcnJba10ubGVuZ3RoO1xuXHRcdFx0XHRcdFx0XHQvLyBNb3ZlIHRoZSBpbmRleCBpIHRvIHRoZSBlbGVtZW50IGluIHN0cmFyciB0aGF0IGlzIGNsb3Nlc3QgdG8gZnJvbVxuXHRcdFx0XHRcdFx0XHRpZiAoZnJvbSA+PSBwKSB7XG5cdFx0XHRcdFx0XHRcdFx0KytpO1xuXHRcdFx0XHRcdFx0XHRcdHBvcyA9IHA7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly8gSWYgc3RyYXJyW2ldIGlzIGEgVG9rZW4sIHRoZW4gdGhlIG1hdGNoIHN0YXJ0cyBpbnNpZGUgYW5vdGhlciBUb2tlbiwgd2hpY2ggaXMgaW52YWxpZFxuXHRcdFx0XHRcdFx0aWYgKHN0cmFycltpXSBpbnN0YW5jZW9mIFRva2VuKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvLyBOdW1iZXIgb2YgdG9rZW5zIHRvIGRlbGV0ZSBhbmQgcmVwbGFjZSB3aXRoIHRoZSBuZXcgbWF0Y2hcblx0XHRcdFx0XHRcdGRlbE51bSA9IGsgLSBpO1xuXHRcdFx0XHRcdFx0c3RyID0gdGV4dC5zbGljZShwb3MsIHApO1xuXHRcdFx0XHRcdFx0bWF0Y2guaW5kZXggLT0gcG9zO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRwYXR0ZXJuLmxhc3RJbmRleCA9IDA7XG5cblx0XHRcdFx0XHRcdHZhciBtYXRjaCA9IHBhdHRlcm4uZXhlYyhzdHIpLFxuXHRcdFx0XHRcdFx0XHRkZWxOdW0gPSAxO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmICghbWF0Y2gpIHtcblx0XHRcdFx0XHRcdGlmIChvbmVzaG90KSB7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZihsb29rYmVoaW5kKSB7XG5cdFx0XHRcdFx0XHRsb29rYmVoaW5kTGVuZ3RoID0gbWF0Y2hbMV0gPyBtYXRjaFsxXS5sZW5ndGggOiAwO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHZhciBmcm9tID0gbWF0Y2guaW5kZXggKyBsb29rYmVoaW5kTGVuZ3RoLFxuXHRcdFx0XHRcdCAgICBtYXRjaCA9IG1hdGNoWzBdLnNsaWNlKGxvb2tiZWhpbmRMZW5ndGgpLFxuXHRcdFx0XHRcdCAgICB0byA9IGZyb20gKyBtYXRjaC5sZW5ndGgsXG5cdFx0XHRcdFx0ICAgIGJlZm9yZSA9IHN0ci5zbGljZSgwLCBmcm9tKSxcblx0XHRcdFx0XHQgICAgYWZ0ZXIgPSBzdHIuc2xpY2UodG8pO1xuXG5cdFx0XHRcdFx0dmFyIGFyZ3MgPSBbaSwgZGVsTnVtXTtcblxuXHRcdFx0XHRcdGlmIChiZWZvcmUpIHtcblx0XHRcdFx0XHRcdCsraTtcblx0XHRcdFx0XHRcdHBvcyArPSBiZWZvcmUubGVuZ3RoO1xuXHRcdFx0XHRcdFx0YXJncy5wdXNoKGJlZm9yZSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dmFyIHdyYXBwZWQgPSBuZXcgVG9rZW4odG9rZW4sIGluc2lkZT8gXy50b2tlbml6ZShtYXRjaCwgaW5zaWRlKSA6IG1hdGNoLCBhbGlhcywgbWF0Y2gsIGdyZWVkeSk7XG5cblx0XHRcdFx0XHRhcmdzLnB1c2god3JhcHBlZCk7XG5cblx0XHRcdFx0XHRpZiAoYWZ0ZXIpIHtcblx0XHRcdFx0XHRcdGFyZ3MucHVzaChhZnRlcik7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0QXJyYXkucHJvdG90eXBlLnNwbGljZS5hcHBseShzdHJhcnIsIGFyZ3MpO1xuXG5cdFx0XHRcdFx0aWYgKGRlbE51bSAhPSAxKVxuXHRcdFx0XHRcdFx0Xy5tYXRjaEdyYW1tYXIodGV4dCwgc3RyYXJyLCBncmFtbWFyLCBpLCBwb3MsIHRydWUsIHRva2VuKTtcblxuXHRcdFx0XHRcdGlmIChvbmVzaG90KVxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cblx0dG9rZW5pemU6IGZ1bmN0aW9uKHRleHQsIGdyYW1tYXIpIHtcblx0XHR2YXIgc3RyYXJyID0gW3RleHRdO1xuXG5cdFx0dmFyIHJlc3QgPSBncmFtbWFyLnJlc3Q7XG5cblx0XHRpZiAocmVzdCkge1xuXHRcdFx0Zm9yICh2YXIgdG9rZW4gaW4gcmVzdCkge1xuXHRcdFx0XHRncmFtbWFyW3Rva2VuXSA9IHJlc3RbdG9rZW5dO1xuXHRcdFx0fVxuXG5cdFx0XHRkZWxldGUgZ3JhbW1hci5yZXN0O1xuXHRcdH1cblxuXHRcdF8ubWF0Y2hHcmFtbWFyKHRleHQsIHN0cmFyciwgZ3JhbW1hciwgMCwgMCwgZmFsc2UpO1xuXG5cdFx0cmV0dXJuIHN0cmFycjtcblx0fSxcblxuXHRob29rczoge1xuXHRcdGFsbDoge30sXG5cblx0XHRhZGQ6IGZ1bmN0aW9uIChuYW1lLCBjYWxsYmFjaykge1xuXHRcdFx0dmFyIGhvb2tzID0gXy5ob29rcy5hbGw7XG5cblx0XHRcdGhvb2tzW25hbWVdID0gaG9va3NbbmFtZV0gfHwgW107XG5cblx0XHRcdGhvb2tzW25hbWVdLnB1c2goY2FsbGJhY2spO1xuXHRcdH0sXG5cblx0XHRydW46IGZ1bmN0aW9uIChuYW1lLCBlbnYpIHtcblx0XHRcdHZhciBjYWxsYmFja3MgPSBfLmhvb2tzLmFsbFtuYW1lXTtcblxuXHRcdFx0aWYgKCFjYWxsYmFja3MgfHwgIWNhbGxiYWNrcy5sZW5ndGgpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IgKHZhciBpPTAsIGNhbGxiYWNrOyBjYWxsYmFjayA9IGNhbGxiYWNrc1tpKytdOykge1xuXHRcdFx0XHRjYWxsYmFjayhlbnYpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblxuXHRUb2tlbjogVG9rZW5cbn07XG5cbl9zZWxmLlByaXNtID0gXztcblxuZnVuY3Rpb24gVG9rZW4odHlwZSwgY29udGVudCwgYWxpYXMsIG1hdGNoZWRTdHIsIGdyZWVkeSkge1xuXHR0aGlzLnR5cGUgPSB0eXBlO1xuXHR0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuXHR0aGlzLmFsaWFzID0gYWxpYXM7XG5cdC8vIENvcHkgb2YgdGhlIGZ1bGwgc3RyaW5nIHRoaXMgdG9rZW4gd2FzIGNyZWF0ZWQgZnJvbVxuXHR0aGlzLmxlbmd0aCA9IChtYXRjaGVkU3RyIHx8IFwiXCIpLmxlbmd0aHwwO1xuXHR0aGlzLmdyZWVkeSA9ICEhZ3JlZWR5O1xufVxuXG5Ub2tlbi5zdHJpbmdpZnkgPSBmdW5jdGlvbihvLCBsYW5ndWFnZSkge1xuXHRpZiAodHlwZW9mIG8gPT0gJ3N0cmluZycpIHtcblx0XHRyZXR1cm4gbztcblx0fVxuXG5cdGlmIChBcnJheS5pc0FycmF5KG8pKSB7XG5cdFx0cmV0dXJuIG8ubWFwKGZ1bmN0aW9uKGVsZW1lbnQpIHtcblx0XHRcdHJldHVybiBUb2tlbi5zdHJpbmdpZnkoZWxlbWVudCwgbGFuZ3VhZ2UpO1xuXHRcdH0pLmpvaW4oJycpO1xuXHR9XG5cblx0dmFyIGVudiA9IHtcblx0XHR0eXBlOiBvLnR5cGUsXG5cdFx0Y29udGVudDogVG9rZW4uc3RyaW5naWZ5KG8uY29udGVudCwgbGFuZ3VhZ2UpLFxuXHRcdHRhZzogJ3NwYW4nLFxuXHRcdGNsYXNzZXM6IFsndG9rZW4nLCBvLnR5cGVdLFxuXHRcdGF0dHJpYnV0ZXM6IHt9LFxuXHRcdGxhbmd1YWdlOiBsYW5ndWFnZVxuXHR9O1xuXG5cdGlmIChvLmFsaWFzKSB7XG5cdFx0dmFyIGFsaWFzZXMgPSBBcnJheS5pc0FycmF5KG8uYWxpYXMpID8gby5hbGlhcyA6IFtvLmFsaWFzXTtcblx0XHRBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShlbnYuY2xhc3NlcywgYWxpYXNlcyk7XG5cdH1cblxuXHRfLmhvb2tzLnJ1bignd3JhcCcsIGVudik7XG5cblx0dmFyIGF0dHJpYnV0ZXMgPSBPYmplY3Qua2V5cyhlbnYuYXR0cmlidXRlcykubWFwKGZ1bmN0aW9uKG5hbWUpIHtcblx0XHRyZXR1cm4gbmFtZSArICc9XCInICsgKGVudi5hdHRyaWJ1dGVzW25hbWVdIHx8ICcnKS5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7JykgKyAnXCInO1xuXHR9KS5qb2luKCcgJyk7XG5cblx0cmV0dXJuICc8JyArIGVudi50YWcgKyAnIGNsYXNzPVwiJyArIGVudi5jbGFzc2VzLmpvaW4oJyAnKSArICdcIicgKyAoYXR0cmlidXRlcyA/ICcgJyArIGF0dHJpYnV0ZXMgOiAnJykgKyAnPicgKyBlbnYuY29udGVudCArICc8LycgKyBlbnYudGFnICsgJz4nO1xufTtcblxuaWYgKCFfc2VsZi5kb2N1bWVudCkge1xuXHRpZiAoIV9zZWxmLmFkZEV2ZW50TGlzdGVuZXIpIHtcblx0XHQvLyBpbiBOb2RlLmpzXG5cdFx0cmV0dXJuIF87XG5cdH1cblxuXHRpZiAoIV8uZGlzYWJsZVdvcmtlck1lc3NhZ2VIYW5kbGVyKSB7XG5cdFx0Ly8gSW4gd29ya2VyXG5cdFx0X3NlbGYuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGZ1bmN0aW9uIChldnQpIHtcblx0XHRcdHZhciBtZXNzYWdlID0gSlNPTi5wYXJzZShldnQuZGF0YSksXG5cdFx0XHRcdGxhbmcgPSBtZXNzYWdlLmxhbmd1YWdlLFxuXHRcdFx0XHRjb2RlID0gbWVzc2FnZS5jb2RlLFxuXHRcdFx0XHRpbW1lZGlhdGVDbG9zZSA9IG1lc3NhZ2UuaW1tZWRpYXRlQ2xvc2U7XG5cblx0XHRcdF9zZWxmLnBvc3RNZXNzYWdlKF8uaGlnaGxpZ2h0KGNvZGUsIF8ubGFuZ3VhZ2VzW2xhbmddLCBsYW5nKSk7XG5cdFx0XHRpZiAoaW1tZWRpYXRlQ2xvc2UpIHtcblx0XHRcdFx0X3NlbGYuY2xvc2UoKTtcblx0XHRcdH1cblx0XHR9LCBmYWxzZSk7XG5cdH1cblxuXHRyZXR1cm4gXztcbn1cblxuLy9HZXQgY3VycmVudCBzY3JpcHQgYW5kIGhpZ2hsaWdodFxudmFyIHNjcmlwdCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgfHwgW10uc2xpY2UuY2FsbChkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKSkucG9wKCk7XG5cbmlmIChzY3JpcHQpIHtcblx0Xy5maWxlbmFtZSA9IHNjcmlwdC5zcmM7XG5cblx0aWYgKCFfLm1hbnVhbCAmJiAhc2NyaXB0Lmhhc0F0dHJpYnV0ZSgnZGF0YS1tYW51YWwnKSkge1xuXHRcdGlmKGRvY3VtZW50LnJlYWR5U3RhdGUgIT09IFwibG9hZGluZ1wiKSB7XG5cdFx0XHRpZiAod2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSkge1xuXHRcdFx0XHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKF8uaGlnaGxpZ2h0QWxsKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHdpbmRvdy5zZXRUaW1lb3V0KF8uaGlnaGxpZ2h0QWxsLCAxNik7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIF8uaGlnaGxpZ2h0QWxsKTtcblx0XHR9XG5cdH1cbn1cblxucmV0dXJuIF87XG5cbn0pKF9zZWxmKTtcblxuaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSB7XG5cdG1vZHVsZS5leHBvcnRzID0gUHJpc207XG59XG5cbi8vIGhhY2sgZm9yIGNvbXBvbmVudHMgdG8gd29yayBjb3JyZWN0bHkgaW4gbm9kZS5qc1xuaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG5cdGdsb2JhbC5QcmlzbSA9IFByaXNtO1xufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbmV4cG9ydHMucGFyc2UgPSBwYXJzZVxuZXhwb3J0cy5zdHJpbmdpZnkgPSBzdHJpbmdpZnlcblxudmFyIGVtcHR5ID0gJydcbnZhciBzcGFjZSA9ICcgJ1xudmFyIHdoaXRlU3BhY2UgPSAvWyBcXHRcXG5cXHJcXGZdKy9nXG5cbmZ1bmN0aW9uIHBhcnNlKHZhbHVlKSB7XG4gIHZhciBpbnB1dCA9IFN0cmluZyh2YWx1ZSB8fCBlbXB0eSkudHJpbSgpXG4gIHJldHVybiBpbnB1dCA9PT0gZW1wdHkgPyBbXSA6IGlucHV0LnNwbGl0KHdoaXRlU3BhY2UpXG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeSh2YWx1ZXMpIHtcbiAgcmV0dXJuIHZhbHVlcy5qb2luKHNwYWNlKS50cmltKClcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gZXh0ZW5kXG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbmZ1bmN0aW9uIGV4dGVuZCgpIHtcbiAgICB2YXIgdGFyZ2V0ID0ge31cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV1cblxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0XG59XG4iXSwic291cmNlUm9vdCI6IiJ9
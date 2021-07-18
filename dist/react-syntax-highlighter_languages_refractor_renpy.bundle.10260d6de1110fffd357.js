(self["webpackChunkheaderproject"] = self["webpackChunkheaderproject"] || []).push([["react-syntax-highlighter_languages_refractor_renpy"],{

/***/ "./node_modules/refractor/lang/renpy.js":
/*!**********************************************!*\
  !*** ./node_modules/refractor/lang/renpy.js ***!
  \**********************************************/
/***/ ((module) => {

"use strict";


module.exports = renpy
renpy.displayName = 'renpy'
renpy.aliases = []
function renpy(Prism) {
  Prism.languages.renpy = {
    // TODO Write tests.
    comment: {
      pattern: /(^|[^\\])#.+/,
      lookbehind: true
    },
    string: {
      pattern: /("""|''')[\s\S]+?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2|(?:^#?(?:(?:[0-9a-fA-F]{2}){3}|(?:[0-9a-fA-F]){3})$)/m,
      greedy: true
    },
    function: /[a-z_]\w*(?=\()/i,
    property: /\b(?:insensitive|idle|hover|selected_idle|selected_hover|background|position|alt|xpos|ypos|pos|xanchor|yanchor|anchor|xalign|yalign|align|xcenter|ycenter|xofsset|yoffset|ymaximum|maximum|xmaximum|xminimum|yminimum|minimum|xsize|ysizexysize|xfill|yfill|area|antialias|black_color|bold|caret|color|first_indent|font|size|italic|justify|kerning|language|layout|line_leading|line_overlap_split|line_spacing|min_width|newline_indent|outlines|rest_indent|ruby_style|slow_cps|slow_cps_multiplier|strikethrough|text_align|underline|hyperlink_functions|vertical|hinting|foreground|left_margin|xmargin|top_margin|bottom_margin|ymargin|left_padding|right_padding|xpadding|top_padding|bottom_padding|ypadding|size_group|child|hover_sound|activate_sound|mouse|focus_mask|keyboard_focus|bar_vertical|bar_invert|bar_resizing|left_gutter|right_gutter|top_gutter|bottom_gutter|left_bar|right_bar|top_bar|bottom_bar|thumb|thumb_shadow|thumb_offset|unscrollable|spacing|first_spacing|box_reverse|box_wrap|order_reverse|fit_first|ysize|thumbnail_width|thumbnail_height|help|text_ypos|text_xpos|idle_color|hover_color|selected_idle_color|selected_hover_color|insensitive_color|alpha|insensitive_background|hover_background|zorder|value|width|xadjustment|xanchoraround|xaround|xinitial|xoffset|xzoom|yadjustment|yanchoraround|yaround|yinitial|yzoom|zoom|ground|height|text_style|text_y_fudge|selected_insensitive|has_sound|has_music|has_voice|focus|hovered|image_style|length|minwidth|mousewheel|offset|prefix|radius|range|right_margin|rotate|rotate_pad|developer|screen_width|screen_height|window_title|name|version|windows_icon|default_fullscreen|default_text_cps|default_afm_time|main_menu_music|sample_sound|enter_sound|exit_sound|save_directory|enter_transition|exit_transition|intra_transition|main_game_transition|game_main_transition|end_splash_transition|end_game_transition|after_load_transition|window_show_transition|window_hide_transition|adv_nvl_transition|nvl_adv_transition|enter_yesno_transition|exit_yesno_transition|enter_replay_transition|exit_replay_transition|say_attribute_transition|directory_name|executable_name|include_update|window_icon|modal|google_play_key|google_play_salt|drag_name|drag_handle|draggable|dragged|droppable|dropped|narrator_menu|action|default_afm_enable|version_name|version_tuple|inside|fadeout|fadein|layers|layer_clipping|linear|scrollbars|side_xpos|side_ypos|side_spacing|edgescroll|drag_joined|drag_raise|drop_shadow|drop_shadow_color|subpixel|easein|easeout|time|crop|auto|update|get_installed_packages|can_update|UpdateVersion|Update|overlay_functions|translations|window_left_padding|show_side_image|show_two_window)\b/,
    tag: /\b(?:label|image|menu|[hv]box|frame|text|imagemap|imagebutton|bar|vbar|screen|textbutton|buttoscreenn|fixed|grid|input|key|mousearea|side|timer|viewport|window|hotspot|hotbar|self|button|drag|draggroup|tag|mm_menu_frame|nvl|block|parallel)\b|\$/,
    keyword: /\b(?:as|assert|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|pass|print|raise|return|try|while|yield|adjustment|alignaround|allow|angle|around|box_layout|cache|changed|child_size|clicked|clipping|corner1|corner2|default|delay|exclude|scope|slow|slow_abortable|slow_done|sound|style_group|substitute|suffix|transform_anchor|transpose|unhovered|config|theme|mm_root|gm_root|rounded_window|build|disabled_text|disabled|widget_selected|widget_text|widget_hover|widget|updater|behind|call|expression|hide|init|jump|onlayer|python|renpy|scene|set|show|transform|play|queue|stop|pause|define|window|repeat|contains|choice|on|function|event|animation|clockwise|counterclockwise|circles|knot|null|None|random|has|add|use|fade|dissolve|style|store|id|voice|center|left|right|less_rounded|music|movie|clear|persistent|ui)\b/,
    boolean: /\b(?:[Tt]rue|[Ff]alse)\b/,
    number: /(?:\b(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*\.?\d*)|\B\.\d+)(?:e[+-]?\d+)?j?/i,
    operator: /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]|\b(?:or|and|not|with|at)\b/,
    punctuation: /[{}[\];(),.:]/
  }
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZWFkZXJwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3JlZnJhY3Rvci9sYW5nL3JlbnB5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLDRGQUE0RixFQUFFLEVBQUUsRUFBRSxpQkFBaUIsRUFBRTtBQUNySDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixJQUFJO0FBQ3pCO0FBQ0EiLCJmaWxlIjoicmVhY3Qtc3ludGF4LWhpZ2hsaWdodGVyX2xhbmd1YWdlc19yZWZyYWN0b3JfcmVucHkuYnVuZGxlLjEwMjYwZDZkZTExMTBmZmZkMzU3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gcmVucHlcbnJlbnB5LmRpc3BsYXlOYW1lID0gJ3JlbnB5J1xucmVucHkuYWxpYXNlcyA9IFtdXG5mdW5jdGlvbiByZW5weShQcmlzbSkge1xuICBQcmlzbS5sYW5ndWFnZXMucmVucHkgPSB7XG4gICAgLy8gVE9ETyBXcml0ZSB0ZXN0cy5cbiAgICBjb21tZW50OiB7XG4gICAgICBwYXR0ZXJuOiAvKF58W15cXFxcXSkjLisvLFxuICAgICAgbG9va2JlaGluZDogdHJ1ZVxuICAgIH0sXG4gICAgc3RyaW5nOiB7XG4gICAgICBwYXR0ZXJuOiAvKFwiXCJcInwnJycpW1xcc1xcU10rP1xcMXwoXCJ8JykoPzpcXFxcLnwoPyFcXDIpW15cXFxcXFxyXFxuXSkqXFwyfCg/Ol4jPyg/Oig/OlswLTlhLWZBLUZdezJ9KXszfXwoPzpbMC05YS1mQS1GXSl7M30pJCkvbSxcbiAgICAgIGdyZWVkeTogdHJ1ZVxuICAgIH0sXG4gICAgZnVuY3Rpb246IC9bYS16X11cXHcqKD89XFwoKS9pLFxuICAgIHByb3BlcnR5OiAvXFxiKD86aW5zZW5zaXRpdmV8aWRsZXxob3ZlcnxzZWxlY3RlZF9pZGxlfHNlbGVjdGVkX2hvdmVyfGJhY2tncm91bmR8cG9zaXRpb258YWx0fHhwb3N8eXBvc3xwb3N8eGFuY2hvcnx5YW5jaG9yfGFuY2hvcnx4YWxpZ258eWFsaWdufGFsaWdufHhjZW50ZXJ8eWNlbnRlcnx4b2Zzc2V0fHlvZmZzZXR8eW1heGltdW18bWF4aW11bXx4bWF4aW11bXx4bWluaW11bXx5bWluaW11bXxtaW5pbXVtfHhzaXplfHlzaXpleHlzaXplfHhmaWxsfHlmaWxsfGFyZWF8YW50aWFsaWFzfGJsYWNrX2NvbG9yfGJvbGR8Y2FyZXR8Y29sb3J8Zmlyc3RfaW5kZW50fGZvbnR8c2l6ZXxpdGFsaWN8anVzdGlmeXxrZXJuaW5nfGxhbmd1YWdlfGxheW91dHxsaW5lX2xlYWRpbmd8bGluZV9vdmVybGFwX3NwbGl0fGxpbmVfc3BhY2luZ3xtaW5fd2lkdGh8bmV3bGluZV9pbmRlbnR8b3V0bGluZXN8cmVzdF9pbmRlbnR8cnVieV9zdHlsZXxzbG93X2Nwc3xzbG93X2Nwc19tdWx0aXBsaWVyfHN0cmlrZXRocm91Z2h8dGV4dF9hbGlnbnx1bmRlcmxpbmV8aHlwZXJsaW5rX2Z1bmN0aW9uc3x2ZXJ0aWNhbHxoaW50aW5nfGZvcmVncm91bmR8bGVmdF9tYXJnaW58eG1hcmdpbnx0b3BfbWFyZ2lufGJvdHRvbV9tYXJnaW58eW1hcmdpbnxsZWZ0X3BhZGRpbmd8cmlnaHRfcGFkZGluZ3x4cGFkZGluZ3x0b3BfcGFkZGluZ3xib3R0b21fcGFkZGluZ3x5cGFkZGluZ3xzaXplX2dyb3VwfGNoaWxkfGhvdmVyX3NvdW5kfGFjdGl2YXRlX3NvdW5kfG1vdXNlfGZvY3VzX21hc2t8a2V5Ym9hcmRfZm9jdXN8YmFyX3ZlcnRpY2FsfGJhcl9pbnZlcnR8YmFyX3Jlc2l6aW5nfGxlZnRfZ3V0dGVyfHJpZ2h0X2d1dHRlcnx0b3BfZ3V0dGVyfGJvdHRvbV9ndXR0ZXJ8bGVmdF9iYXJ8cmlnaHRfYmFyfHRvcF9iYXJ8Ym90dG9tX2Jhcnx0aHVtYnx0aHVtYl9zaGFkb3d8dGh1bWJfb2Zmc2V0fHVuc2Nyb2xsYWJsZXxzcGFjaW5nfGZpcnN0X3NwYWNpbmd8Ym94X3JldmVyc2V8Ym94X3dyYXB8b3JkZXJfcmV2ZXJzZXxmaXRfZmlyc3R8eXNpemV8dGh1bWJuYWlsX3dpZHRofHRodW1ibmFpbF9oZWlnaHR8aGVscHx0ZXh0X3lwb3N8dGV4dF94cG9zfGlkbGVfY29sb3J8aG92ZXJfY29sb3J8c2VsZWN0ZWRfaWRsZV9jb2xvcnxzZWxlY3RlZF9ob3Zlcl9jb2xvcnxpbnNlbnNpdGl2ZV9jb2xvcnxhbHBoYXxpbnNlbnNpdGl2ZV9iYWNrZ3JvdW5kfGhvdmVyX2JhY2tncm91bmR8em9yZGVyfHZhbHVlfHdpZHRofHhhZGp1c3RtZW50fHhhbmNob3Jhcm91bmR8eGFyb3VuZHx4aW5pdGlhbHx4b2Zmc2V0fHh6b29tfHlhZGp1c3RtZW50fHlhbmNob3Jhcm91bmR8eWFyb3VuZHx5aW5pdGlhbHx5em9vbXx6b29tfGdyb3VuZHxoZWlnaHR8dGV4dF9zdHlsZXx0ZXh0X3lfZnVkZ2V8c2VsZWN0ZWRfaW5zZW5zaXRpdmV8aGFzX3NvdW5kfGhhc19tdXNpY3xoYXNfdm9pY2V8Zm9jdXN8aG92ZXJlZHxpbWFnZV9zdHlsZXxsZW5ndGh8bWlud2lkdGh8bW91c2V3aGVlbHxvZmZzZXR8cHJlZml4fHJhZGl1c3xyYW5nZXxyaWdodF9tYXJnaW58cm90YXRlfHJvdGF0ZV9wYWR8ZGV2ZWxvcGVyfHNjcmVlbl93aWR0aHxzY3JlZW5faGVpZ2h0fHdpbmRvd190aXRsZXxuYW1lfHZlcnNpb258d2luZG93c19pY29ufGRlZmF1bHRfZnVsbHNjcmVlbnxkZWZhdWx0X3RleHRfY3BzfGRlZmF1bHRfYWZtX3RpbWV8bWFpbl9tZW51X211c2ljfHNhbXBsZV9zb3VuZHxlbnRlcl9zb3VuZHxleGl0X3NvdW5kfHNhdmVfZGlyZWN0b3J5fGVudGVyX3RyYW5zaXRpb258ZXhpdF90cmFuc2l0aW9ufGludHJhX3RyYW5zaXRpb258bWFpbl9nYW1lX3RyYW5zaXRpb258Z2FtZV9tYWluX3RyYW5zaXRpb258ZW5kX3NwbGFzaF90cmFuc2l0aW9ufGVuZF9nYW1lX3RyYW5zaXRpb258YWZ0ZXJfbG9hZF90cmFuc2l0aW9ufHdpbmRvd19zaG93X3RyYW5zaXRpb258d2luZG93X2hpZGVfdHJhbnNpdGlvbnxhZHZfbnZsX3RyYW5zaXRpb258bnZsX2Fkdl90cmFuc2l0aW9ufGVudGVyX3llc25vX3RyYW5zaXRpb258ZXhpdF95ZXNub190cmFuc2l0aW9ufGVudGVyX3JlcGxheV90cmFuc2l0aW9ufGV4aXRfcmVwbGF5X3RyYW5zaXRpb258c2F5X2F0dHJpYnV0ZV90cmFuc2l0aW9ufGRpcmVjdG9yeV9uYW1lfGV4ZWN1dGFibGVfbmFtZXxpbmNsdWRlX3VwZGF0ZXx3aW5kb3dfaWNvbnxtb2RhbHxnb29nbGVfcGxheV9rZXl8Z29vZ2xlX3BsYXlfc2FsdHxkcmFnX25hbWV8ZHJhZ19oYW5kbGV8ZHJhZ2dhYmxlfGRyYWdnZWR8ZHJvcHBhYmxlfGRyb3BwZWR8bmFycmF0b3JfbWVudXxhY3Rpb258ZGVmYXVsdF9hZm1fZW5hYmxlfHZlcnNpb25fbmFtZXx2ZXJzaW9uX3R1cGxlfGluc2lkZXxmYWRlb3V0fGZhZGVpbnxsYXllcnN8bGF5ZXJfY2xpcHBpbmd8bGluZWFyfHNjcm9sbGJhcnN8c2lkZV94cG9zfHNpZGVfeXBvc3xzaWRlX3NwYWNpbmd8ZWRnZXNjcm9sbHxkcmFnX2pvaW5lZHxkcmFnX3JhaXNlfGRyb3Bfc2hhZG93fGRyb3Bfc2hhZG93X2NvbG9yfHN1YnBpeGVsfGVhc2VpbnxlYXNlb3V0fHRpbWV8Y3JvcHxhdXRvfHVwZGF0ZXxnZXRfaW5zdGFsbGVkX3BhY2thZ2VzfGNhbl91cGRhdGV8VXBkYXRlVmVyc2lvbnxVcGRhdGV8b3ZlcmxheV9mdW5jdGlvbnN8dHJhbnNsYXRpb25zfHdpbmRvd19sZWZ0X3BhZGRpbmd8c2hvd19zaWRlX2ltYWdlfHNob3dfdHdvX3dpbmRvdylcXGIvLFxuICAgIHRhZzogL1xcYig/OmxhYmVsfGltYWdlfG1lbnV8W2h2XWJveHxmcmFtZXx0ZXh0fGltYWdlbWFwfGltYWdlYnV0dG9ufGJhcnx2YmFyfHNjcmVlbnx0ZXh0YnV0dG9ufGJ1dHRvc2NyZWVubnxmaXhlZHxncmlkfGlucHV0fGtleXxtb3VzZWFyZWF8c2lkZXx0aW1lcnx2aWV3cG9ydHx3aW5kb3d8aG90c3BvdHxob3RiYXJ8c2VsZnxidXR0b258ZHJhZ3xkcmFnZ3JvdXB8dGFnfG1tX21lbnVfZnJhbWV8bnZsfGJsb2NrfHBhcmFsbGVsKVxcYnxcXCQvLFxuICAgIGtleXdvcmQ6IC9cXGIoPzphc3xhc3NlcnR8YnJlYWt8Y2xhc3N8Y29udGludWV8ZGVmfGRlbHxlbGlmfGVsc2V8ZXhjZXB0fGV4ZWN8ZmluYWxseXxmb3J8ZnJvbXxnbG9iYWx8aWZ8aW1wb3J0fGlufGlzfGxhbWJkYXxwYXNzfHByaW50fHJhaXNlfHJldHVybnx0cnl8d2hpbGV8eWllbGR8YWRqdXN0bWVudHxhbGlnbmFyb3VuZHxhbGxvd3xhbmdsZXxhcm91bmR8Ym94X2xheW91dHxjYWNoZXxjaGFuZ2VkfGNoaWxkX3NpemV8Y2xpY2tlZHxjbGlwcGluZ3xjb3JuZXIxfGNvcm5lcjJ8ZGVmYXVsdHxkZWxheXxleGNsdWRlfHNjb3BlfHNsb3d8c2xvd19hYm9ydGFibGV8c2xvd19kb25lfHNvdW5kfHN0eWxlX2dyb3VwfHN1YnN0aXR1dGV8c3VmZml4fHRyYW5zZm9ybV9hbmNob3J8dHJhbnNwb3NlfHVuaG92ZXJlZHxjb25maWd8dGhlbWV8bW1fcm9vdHxnbV9yb290fHJvdW5kZWRfd2luZG93fGJ1aWxkfGRpc2FibGVkX3RleHR8ZGlzYWJsZWR8d2lkZ2V0X3NlbGVjdGVkfHdpZGdldF90ZXh0fHdpZGdldF9ob3Zlcnx3aWRnZXR8dXBkYXRlcnxiZWhpbmR8Y2FsbHxleHByZXNzaW9ufGhpZGV8aW5pdHxqdW1wfG9ubGF5ZXJ8cHl0aG9ufHJlbnB5fHNjZW5lfHNldHxzaG93fHRyYW5zZm9ybXxwbGF5fHF1ZXVlfHN0b3B8cGF1c2V8ZGVmaW5lfHdpbmRvd3xyZXBlYXR8Y29udGFpbnN8Y2hvaWNlfG9ufGZ1bmN0aW9ufGV2ZW50fGFuaW1hdGlvbnxjbG9ja3dpc2V8Y291bnRlcmNsb2Nrd2lzZXxjaXJjbGVzfGtub3R8bnVsbHxOb25lfHJhbmRvbXxoYXN8YWRkfHVzZXxmYWRlfGRpc3NvbHZlfHN0eWxlfHN0b3JlfGlkfHZvaWNlfGNlbnRlcnxsZWZ0fHJpZ2h0fGxlc3Nfcm91bmRlZHxtdXNpY3xtb3ZpZXxjbGVhcnxwZXJzaXN0ZW50fHVpKVxcYi8sXG4gICAgYm9vbGVhbjogL1xcYig/OltUdF1ydWV8W0ZmXWFsc2UpXFxiLyxcbiAgICBudW1iZXI6IC8oPzpcXGIoPzowW2JvXSk/KD86KD86XFxkfDB4W1xcZGEtZl0pW1xcZGEtZl0qXFwuP1xcZCopfFxcQlxcLlxcZCspKD86ZVsrLV0/XFxkKyk/aj8vaSxcbiAgICBvcGVyYXRvcjogL1stKyU9XT0/fCE9fFxcKlxcKj89P3xcXC9cXC8/PT98PFs8PT5dP3w+Wz0+XT98WyZ8Xn5dfFxcYig/Om9yfGFuZHxub3R8d2l0aHxhdClcXGIvLFxuICAgIHB1bmN0dWF0aW9uOiAvW3t9W1xcXTsoKSwuOl0vXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=
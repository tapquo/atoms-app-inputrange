"use strict"

class Atoms.Atom.InputRange extends Atoms.Atom.Input

  @template: """
    <div>
      <div class="input">
        <div class="range"></div>
        <span class="min"></span>
        <span class="max"></span>
      </div>
      <label class="min"></label>
      <label class="max"></label>
    </div>
  """

  @events   : ["change"]

  @default:
    range: min: 0, max: 100
    value: min: 0, max: 100
    decimals: 0
    unit: undefined

  constructor: ->
    super
    @input_min = Atoms.$ "span.min"
    @input_max = Atoms.$ "span.max"
    @range = Atoms.$ "div.range"
    @label_min = Atoms.$ "label.min"
    @label_max = Atoms.$ "label.max"

    @value @attributes.value

    @_handleMove Atoms.$("span.min"), min = true
    @_handleMove Atoms.$("span.max"), min = false

  value: (value) ->
    if value
      @attributes.value.min = value.min
      @attributes.value.max = value.max
      @label_min.html @_parseLabel value.min
      @label_max.html @_parseLabel value.max

      range = @attributes.range.max - @attributes.range.min
      min_range = ((value.min - @attributes.range.min) * 100) / range
      min_range = 0 if min_range < 0
      max_range = ((value.max - @attributes.range.min) * 100) / range
      @input_min.css "left", "#{min_range}%"
      @input_max.css "left", "#{max_range}%"
      @range.css "left", "#{min_range}%"
      @range.css "right", "#{100 - max_range}%"
    else
      @attributes.value

  clear: ->
    @value @attributes.range

  _handleMove: (input, min = true) =>
    input_size = parseInt(input.offset().width)
    max_width = (parseInt(@el.offset().width) - input_size)
    input.bind "touchmove", (event) =>
      px = parseInt(event.touches?[0].pageX or event.pageX) - input_size
      # Limits
      px = 0 if px < 0
      px = max_width if px > max_width

      percent_px = (px * 100) / max_width
      percent_value = (percent_px / 100) * @attributes.range.max

      if (min and percent_value < @attributes.value.max) or (not min and percent_value > @attributes.value.min)
        @attributes.value.min = percent_value if min
        @attributes.value.max = percent_value unless min
        @bubble "change", event
        @value @attributes.value

  _parseLabel: (value) ->
    label = parseFloat(value).toFixed(@attributes.decimals).toString()
    label += "<small>#{@attributes.unit}</small>" if @attributes.unit
    label

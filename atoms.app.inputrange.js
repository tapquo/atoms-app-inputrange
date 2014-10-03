(function(){"use strict";var __bind=function(fn,me){return function(){return fn.apply(me,arguments)}},__hasProp={}.hasOwnProperty,__extends=function(child,parent){function ctor(){this.constructor=child}for(var key in parent)__hasProp.call(parent,key)&&(child[key]=parent[key]);return ctor.prototype=parent.prototype,child.prototype=new ctor,child.__super__=parent.prototype,child};Atoms.Atom.InputRange=function(_super){function InputRange(){this._handleMove=__bind(this._handleMove,this);var min;InputRange.__super__.constructor.apply(this,arguments),this.input_min=Atoms.$("span.min"),this.input_max=Atoms.$("span.max"),this.range=Atoms.$("div.range"),this.label_min=Atoms.$("label.min"),this.label_max=Atoms.$("label.max"),this.value(this.attributes.value),this._handleMove(Atoms.$("span.min"),min=!0),this._handleMove(Atoms.$("span.max"),min=!1)}return __extends(InputRange,_super),InputRange.template='<div>\n  <div class="input">\n    <div class="range"></div>\n    <span class="min"></span>\n    <span class="max"></span>\n  </div>\n  <label class="min"></label>\n  <label class="max"></label>\n</div>',InputRange.events=["change"],InputRange["default"]={range:{min:0,max:100},value:{min:0,max:100},decimals:0,unit:void 0},InputRange.prototype.value=function(value){var max_range,min_range,range;return value?(this.attributes.value.min=value.min,this.attributes.value.max=value.max,this.label_min.html(this._parseLabel(value.min)),this.label_max.html(this._parseLabel(value.max)),range=this.attributes.range.max-this.attributes.range.min,min_range=100*(value.min-this.attributes.range.min)/range,0>min_range&&(min_range=0),max_range=100*(value.max-this.attributes.range.min)/range,this.input_min.css("left",""+min_range+"%"),this.input_max.css("left",""+max_range+"%"),this.range.css("left",""+min_range+"%"),this.range.css("right",""+(100-max_range)+"%")):this.attributes.value},InputRange.prototype.clear=function(){return this.value(this.attributes.range)},InputRange.prototype._handleMove=function(input,min){var input_size,max_width;return null==min&&(min=!0),input_size=parseInt(input.offset().width),max_width=parseInt(this.el.offset().width)-input_size,input.bind("touchmove",function(_this){return function(event){var percent_px,percent_value,px,_ref;return px=parseInt((null!=(_ref=event.touches)?_ref[0].pageX:void 0)||event.pageX)-input_size,0>px&&(px=0),px>max_width&&(px=max_width),percent_px=100*px/max_width,percent_value=percent_px/100*_this.attributes.range.max,min&&percent_value<_this.attributes.value.max||!min&&percent_value>_this.attributes.value.min?(min&&(_this.attributes.value.min=percent_value),min||(_this.attributes.value.max=percent_value),_this.bubble("change",event),_this.value(_this.attributes.value)):void 0}}(this))},InputRange.prototype._parseLabel=function(value){var label;return label=parseFloat(value).toFixed(this.attributes.decimals).toString(),this.attributes.unit&&(label+="<small>"+this.attributes.unit+"</small>"),label},InputRange}(Atoms.Atom.Input)}).call(this);
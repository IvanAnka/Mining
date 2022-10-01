!function(e){"use strict";var t="Microsoft Internet Explorer"==window.navigator.appName,i=function(t,i){if(this.$element=e(t),this.$input=this.$element.find(":file"),0!==this.$input.length){this.name=this.$input.attr("name")||i.name,this.$hidden=this.$element.find('input[type=hidden][name="'+this.name+'"]'),0===this.$hidden.length&&(this.$hidden=e('<input type="hidden">').insertBefore(this.$input)),this.$preview=this.$element.find(".fileinput-preview");var n=this.$preview.css("height");"inline"!==this.$preview.css("display")&&"0px"!==n&&"none"!==n&&this.$preview.css("line-height",n),this.original={exists:this.$element.hasClass("fileinput-exists"),preview:this.$preview.html(),hiddenVal:this.$hidden.val()},this.listen()}};i.prototype.listen=function(){this.$input.on("change.bs.fileinput",e.proxy(this.change,this)),e(this.$input[0].form).on("reset.bs.fileinput",e.proxy(this.reset,this)),this.$element.find('[data-trigger="fileinput"]').on("click.bs.fileinput",e.proxy(this.trigger,this)),this.$element.find('[data-dismiss="fileinput"]').on("click.bs.fileinput",e.proxy(this.clear,this))},i.prototype.change=function(t){var i=void 0===t.target.files?t.target&&t.target.value?[{name:t.target.value.replace(/^.+\\/,"")}]:[]:t.target.files;if(t.stopPropagation(),0!==i.length){this.$hidden.val(""),this.$hidden.attr("name",""),this.$input.attr("name",this.name);var n=i[0];if(this.$preview.length>0&&(void 0!==n.type?n.type.match(/^image\/(gif|png|jpeg)$/):n.name.match(/\.(gif|png|jpe?g)$/i))&&"undefined"!=typeof FileReader){var s=new FileReader,a=this.$preview,l=this.$element;s.onload=function(t){var s=e("<img>");s[0].src=t.target.result,i[0].result=t.target.result,l.find(".fileinput-filename").text(n.name),"none"!=a.css("max-height")&&s.css("max-height",parseInt(a.css("max-height"),10)-parseInt(a.css("padding-top"),10)-parseInt(a.css("padding-bottom"),10)-parseInt(a.css("border-top"),10)-parseInt(a.css("border-bottom"),10)),a.html(s),l.addClass("fileinput-exists").removeClass("fileinput-new"),l.trigger("change.bs.fileinput",i)},s.readAsDataURL(n)}else this.$element.find(".fileinput-filename").text(n.name),this.$preview.text(n.name),this.$element.addClass("fileinput-exists").removeClass("fileinput-new"),this.$element.trigger("change.bs.fileinput")}else this.clear()},i.prototype.clear=function(e){if(e&&e.preventDefault(),this.$hidden.val(""),this.$hidden.attr("name",this.name),this.$input.attr("name",""),t){var i=this.$input.clone(!0);this.$input.after(i),this.$input.remove(),this.$input=i}else this.$input.val("");this.$preview.html(""),this.$element.find(".fileinput-filename").text(""),this.$element.addClass("fileinput-new").removeClass("fileinput-exists"),void 0!==e&&(this.$input.trigger("change"),this.$element.trigger("clear.bs.fileinput"))},i.prototype.reset=function(){this.clear(),this.$hidden.val(this.original.hiddenVal),this.$preview.html(this.original.preview),this.$element.find(".fileinput-filename").text(""),this.original.exists?this.$element.addClass("fileinput-exists").removeClass("fileinput-new"):this.$element.addClass("fileinput-new").removeClass("fileinput-exists"),this.$element.trigger("reset.bs.fileinput")},i.prototype.trigger=function(e){this.$input.trigger("click"),e.preventDefault()};var n=e.fn.fileinput;e.fn.fileinput=function(t){return this.each((function(){var n=e(this),s=n.data("bs.fileinput");s||n.data("bs.fileinput",s=new i(this,t)),"string"==typeof t&&s[t]()}))},e.fn.fileinput.Constructor=i,e.fn.fileinput.noConflict=function(){return e.fn.fileinput=n,this},e(document).on("click.fileinput.data-api",'[data-provides="fileinput"]',(function(t){var i=e(this);if(!i.data("bs.fileinput")){i.fileinput(i.data());var n=e(t.target).closest('[data-dismiss="fileinput"],[data-trigger="fileinput"]');n.length>0&&(t.preventDefault(),n.trigger("click.bs.fileinput"))}}))}(window.jQuery);
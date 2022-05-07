; (function wheel($, d3, window, document, undefined) {

  var pluginName = "wheel",
    defaults = {
      min: 0,
      max: 1,
      step: 0.1
    };

  function Plugin(element, options) {
    this._defaults = defaults;
    this._name = pluginName;
    this.arc;
    this.deg = 0;
    this.oldvalue = 0;
    this.chenk = 0;
    this.element = element;
    this.handle = element.querySelector("#handle");
    this.progress = element.querySelector(".progress");
    this.options = $.extend({}, defaults, options);
    this.progressFill;
    this.rad = -Math.PI / 2;
    this.svg;
    this.value;


    this.init();
  }

  Plugin.prototype.startDrag = function(event) {
    var self = this;

    $(window).on("mousemove touchmove", function(event) {
      event.preventDefault();
      self.drag(event);
    }).on("mouseup touchend", function(event) {
      event.preventDefault();
      self.stopDrag(event);
    });
  };

  Plugin.prototype.drag = function(event) {
    var self = this;
    var $element = $(self.element);

    var pageX = event.pageX;
    var pageY = event.pageY;
    var touches = event.originalEvent.touches;

    // Touch device
    if (touches && touches.length === 1) {
      pageX = touches[0].pageX;
      pageY = touches[0].pageY;
    }

    var offset = $element.offset();

    var deltaX = pageX - (offset.left + $element.width() / 2);
    var deltaY = pageY - (offset.top + $element.height() / 2);

    self.rad = Math.atan2(deltaY, deltaX);
    self.deg = self.rad * (180 / Math.PI);

    // Convert radians to degrees relative to positive y-axis
    if (self.deg <= 0 && self.deg >= -90) {
      self.deg = 90 + self.deg;

    } else if (self.deg < -90) {
      self.deg = 270 + 180 + self.deg;
    }
    else {
      self.deg += 90;
    }
    this.update();
  };
  Plugin.prototype.stopDrag = function() {
    $(window).off("mousemove mouseup");
    this.update();
  };

  Plugin.prototype.keyDown = function(event) {
    var self = this;
    var step = self.options.step || 1;

    switch (event.keyCode) {
      case 38:
        self.deg += step;
        if (self.deg > 360) {
          self.deg -= 360;

        }
        break;
      case 40:
        self.deg -= step;
        if (self.deg < 0) {
          self.deg += 360;

        }
        break;
      default:
        break;
    }

    // Convert degrees to radians relative to positive x-axis
    if (self.deg >= 0 && self.deg <= 270) {
      self.rad = (self.deg - 90) * (Math.PI / 180);

    } else {
      self.rad = (self.deg - 360 - 90) * (Math.PI / 180);

    }

    self.update();
  };

  Plugin.prototype.update = function() {

    var self = this;
    var $element = $(self.element);
    var $handle = $(self.handle);
    var progress = self.deg / 360;
    var radius = $element.width() / 2 - $handle.width() / 2;

    var left = Math.cos(self.rad) * radius + $element.width() / 2;
    var top = Math.sin(self.rad) * radius + $element.height() / 2;

    $handle.css({
      left: left,
      top: top
    });

    //deg text center
    self.value = ((self.options.max - self.options.min) / 360 * self.deg);

    if (180 >= self.value && self.value >= 150) {
      self.chenk = 1;
    }
    if ((50 >= self.value || self.value >= 300) && self.chenk == 1) {
      self.oldvalue += 1;
      self.chenk = 0;
    }
    // แสดงค่ามีถึงจุดที่กำหนด
    if (self.oldvalue === 20) {
      document.getElementById("cycling_star").innerHTML = "";
      var img = document.createElement("img");
      img.src = "images\\Star.png";
      var src = document.getElementById("cycling_star");
      src.appendChild(img)
    }
    else if (self.oldvalue === 50) {
      document.getElementById("cycling_star").innerHTML = "";
      for (let i = 0; i < 2; i++) {
        var img = document.createElement("img");
        img.src = "images\\Star.png";
        var src = document.getElementById("cycling_star");
        src.appendChild(img);
      }
    }
    else if (self.oldvalue === 70) {
      document.getElementById("cycling_star").innerHTML = "";
      for (let i = 0; i < 3; i++) {
        var img = document.createElement("img");
        img.src = "images\\Star.png";
        var src = document.getElementById("cycling_star");
        src.appendChild(img);
      }
        
    }

    if (typeof self.options.onChange === "function") {

      self.options.onChange(self.oldvalue);

    }

    // Draw progress bar
    //self.progressFill.attr("d", self.arc.endAngle(2 * Math.PI * progress));
  };

  Plugin.prototype.init = function() {
    // Place initialization logic here
    // You already have access to the DOM element and
    // the options via the instance, e.g. this.element 
    // and this.options
    var self = this;
    var $element = $(self.element);
    var $handle = $(self.handle);
    var width = $element.width();
    var height = $element.height();

    $handle.on("mousedown touchstart", function(event) {
      event.preventDefault();
      self.startDrag(event);
      $(this).focus();
    }).keydown(function(event) {
      event.preventDefault();
      self.keyDown(event);
    });

    self.arc = d3.svg.arc()
      .startAngle(0)
      .innerRadius(width / 2 - 20)
      .outerRadius(width / 2);

    self.svg = d3.select(this.progress)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    self.progressFill = self.svg.append("path")
      .attr("class", "progress-fill");

    self.update();
  };

  // A really lightweight plugin wrapper around the constructor, 
  // preventing against multiple instantiations
  $.fn[pluginName] = function(options) {
    return this.each(function() {
      if (!$.data(this, "plugin_" + pluginName)) {
        $.data(this, "plugin_" + pluginName,
          new Plugin(this, options));
      }
    });
  };

})(jQuery, d3, window, document);
$(function() {
  $(".wheel").wheel({
    min: 0,
    max: 360,
    step: 1,
    onChange: function(value) {
      $("#value_cycling").html(Math.round(value));
      ;
    }
  });
});

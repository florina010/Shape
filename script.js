"use strict";
function Shape (x, y, color) {
  this.x = x; 
  this.y = y;
  this.color = color;
};
Shape.prototype.position = function (x,y) {
  $("div").css({ marginLeft: x + "px", marginTop: y + "px" });
}
Shape.prototype.fill = function (color) {
  $("div").css({ backgroundColor: color});
}
Shape.prototype.area = function (area) {
  return area;
}

function Rectangle (width, height, color){
  var rectangle = $("<div></div>");
	$(rectangle).css({
    width: width + "px",
		height: height + "px",
    backgroundColor: color
  });
  $("body").append(rectangle);
  this.RgetArea = function () {
    return width * height;
  }
}

function Circle (r, color){
  var circle = $("<div></div>");
	$(circle).css({
		width : r + "px",
		height : r + "px",
		borderRadius : "50%",
    backgroundColor: color
  });
  $("body").append(circle);
  this.CgetArea = function () {
    return Math.PI * Math.pow(r, 2);
  }
}


Rectangle.prototype = new Shape();
Circle.prototype = new Shape();

$('select').on('change', function() {
  var width, height, radius, color, r, area;
  if (this.value == "rectangle"){
    $("label").css("display", "none");
    $("span").css("display", "inline");
    $("[name=width]").keyup( function(){ 
      $("div:last").remove();
      width =  parseInt($("[name=width]").val());
      height = parseInt($("[name=height]").val());
      color = $("[name=color]").val();
      r = new Rectangle(width, height, color);
      $("[name=area]").val(r.RgetArea());
    });
    $("[name=height]").change( function(){ 
      $("div:last").remove();
      width =  parseInt($("[name=width]").val());
      height = parseInt($("[name=height]").val());
      color = $("[name=color]").val();
      r = new Rectangle(width, height, color);
      $("[name=area]").val(parseInt(r.RgetArea()));
      console.log(r.RgetArea());
    });
    $("[name=x]").change( function () {
      r.position($(this).val(), $("[name=y]").val());
    });
    $("[name=y]").change( function () {
      r.position($("[name=x]").val(), $(this).val());
    });
    $("[name=color]").change( function () {
      r.fill($("[name=color]").val());
});
  }
  else if (this.value == "circle"){
    var c;
    $("span").css("display", "none");
    $("label").css("display", "inline");
    $("[name=radius]").change( function() {
      $("div:last").remove();
      radius = parseInt($("[name=radius]").val());
      color = $("[name=color]").val();
      c = new Circle(radius, color);
      $("[name=area]").val(parseInt(c.CgetArea()));
    });
    $("[name=x]").change( function () {
      c.position($(this).val(), $("[name=y]").val());
    });
    $("[name=y]").change( function () {
      c.position($("[name=x]").val(), $(this).val());
    });
    $("[name=color]").change( function () {
      c.fill($("[name=color]").val());
    });
  }
  else
    alert("Select");
});



var animate = function () {
  $("div").animate({height: 200 +'px', opacity: '0.4', backgroundColor: "#0018A8"}, "slow");
  $("div").animate({width: 300 + 'px', opacity: '0.8', backgroundColor: "#0247FE"}, "slow");
  $("div").animate({height: 150 + 'px', opacity: '0.4', backgroundColor: "#1F75FE"}, "slow");
  $("div").animate({width: 350 + 'px', opacity: '0.8', backgroundColor: "	#00B9FB"}, "slow");
  
};
var timer;
$("[type=checkbox]").click( function () {
  window.clearInterval(timer);
  window.timer = window.setInterval(animate,2000 );
  if (!$(this).is(':checked')){
    $("div").stop(true, false);
  window.clearInterval(timer);
  }
});
/*$("div").animate({height: 200 +'px', opacity: '0.4', backgroundColor: "#0018A8"}, "slow");
  $("div").animate({width: 300 + 'px', opacity: '0.8', backgroundColor: "#0247FE"}, "slow");
  $("div").animate({height: 150 + 'px', opacity: '0.4', backgroundColor: "#1F75FE"}, "slow");
  $("div").animate({width: 350 + 'px', opacity: '0.8', backgroundColor: "	#00B9FB"}, "slow");*/
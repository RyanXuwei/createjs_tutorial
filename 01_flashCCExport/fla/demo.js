(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/ic_launcher.png", id:"ic_launcher"}
	]
};



// symbols:



(lib.ic_launcher = function() {
	this.initialize(img.ic_launcher);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,96,96);


(lib.icon = function() {
	this.initialize();

	// 圖層 1
	this.instance = new lib.ic_launcher();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,96,96);


// stage content:
(lib.demo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var salf = this;
		this.stop();
		this.addEventListener("click",function(){
			salf.play();
		});
	}
	this.frame_19 = function() {
		this.stop();
	}
	this.frame_39 = function() {
		this.stop();
	}
	this.frame_59 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(19).call(this.frame_19).wait(20).call(this.frame_39).wait(20).call(this.frame_59).wait(21));

	// mc
	this.instance = new lib.icon();
	this.instance.setTransform(48,48,1,1,0,0,0,48,48);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:592},19).to({y:352},20).to({x:48},20).to({y:48},20).wait(1));

	// bg
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Egx/AfPMAAAg+eMBj+AAAMAAAA+eg");
	this.shape.setTransform(320,200);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(320,200,640,400);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
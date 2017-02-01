(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.box = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0066CC").s().p("Ak6E7IAAp1IJ1AAIAAJ1g");
	this.shape.setTransform(31.5,31.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.box, new cjs.Rectangle(0,0,63,63), null);


// stage content:
(lib.sample = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		var me = this;
		this.box.on("click" , function(){
			// this -----> 這裡的 this , 指的是 box 物件	
			//this.box.gotoAndPlay(0); 
			// 這樣寫是叫 box 元素從第一影(從0開始)格播放	
			// 但我想要的是目前的時間軸播放
			// 多寫個 me 變數，指向目前的時間軸元件
			me.gotoAndPlay(0);
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(25));

	// box
	this.box = new lib.box();
	this.box.parent = this;
	this.box.setTransform(91.5,119.6,1,1,0,0,0,31.5,31.5);

	this.timeline.addTween(cjs.Tween.get(this.box).wait(1).to({x:95.2},0).wait(1).to({x:98.9},0).wait(1).to({x:102.6},0).wait(1).to({x:106.3},0).wait(1).to({x:110},0).wait(1).to({x:113.8},0).wait(1).to({x:117.5},0).wait(1).to({x:121.2},0).wait(1).to({x:124.9},0).wait(1).to({x:128.6},0).wait(1).to({x:132.3},0).wait(1).to({x:136},0).wait(1).to({x:139.7},0).wait(1).to({x:143.4},0).wait(1).to({x:147.1},0).wait(1).to({x:150.8},0).wait(1).to({x:154.5},0).wait(1).to({x:158.3},0).wait(1).to({x:162},0).wait(1).to({x:165.7},0).wait(1).to({x:169.4},0).wait(1).to({x:173.1},0).wait(1).to({x:176.8},0).wait(1).to({x:180.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(335,288.1,63,63);
// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;
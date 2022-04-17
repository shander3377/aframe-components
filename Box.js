AFRAME.registerComponent("box", {
	schema: {
		moveX: { type: "number", default: 1 },
		moveY: { type: "number", default: 0 },
        moveZ: { type: "number", default: 0 },
        
	},
	tick: function () {
		this.data.moveX += 0.0001;
		this.data.moveY += 0.0004;
		this.data.moveZ -= 0.0003;
		//this.el means this.element
		var pos = this.el.getAttribute("position");
		var rot = this.el.getAttribute("rotation");
        var scale = this.el.getAttribute("scale")
		// console.log(pos);
		pos.x += this.data.moveX;
		pos.y += this.data.moveY;
        pos.z += this.data.moveZ;
        
        rot.x += 10;
        rot.y += 4;
        rot.z -= 5

        scale.x += 0.01;
        scale.y += 0.01;
        scale.z -= 0.1
		//update values
		this.el.setAttribute("position", {
			x: pos.x,
			y: pos.y,
			z: pos.z,
		});
		this.el.setAttribute("rotation", {
			x: rot.x,
			y: rot.y,
			z: rot.z,
        });
        this.el.setAttribute("scale", scale)
        console.log(rot)
	},
});

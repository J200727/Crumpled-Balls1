class paper
{
	constructor(alyssa,angela,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2
		}
		

			
		this.alyssa=alyssa;
		this.angela=angela;
		this.r=r
		this.body=Bodies.circle(this.alyssa, this.angela, this.r, options)
		World.add(world, this.body);
	}
	
	display()
	{

			var paperposition=this.body.position;	

			push()
			translate(paperposition.x, paperposition.y);
			rectMode(CENTER)
			strokeWeight(4);
			fill(255)
			fill(255,0,255)
			ellipse(0,0,this.r*2, this.r*2);
			pop()
    }
}

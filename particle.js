class Particle{
  constructor()
  {
    this.pos = createVector(width / 2, height / 2);
    this.rays = [];
    for(let a = 0; a < 360; a+=1)
      {
        this.rays.push(new Ray(this.pos, radians(a)));
      }
  }
  
  look(walls)
{
  for(let ray of this.rays)
    {
      let closet = null;
      let record = Infinity;
      for(let wall of walls)
        {
        const pt = ray.cast(wall)
        
        if(pt)
        {
          const d = p5.Vector.dist(this.pos, pt);
          if(d < record)
            {
             record = d;
              closet = pt;
            }
          
        }
        }
      if(closet)
        {
          line(this.pos.x, this.pos.y, closet.x, closet.y);
        }
    }
}
  
  update(x, y)
  {
    this.pos.set(x,y);
  }
  
  show()
  {
    fill(255);
    ellipse(this.pos.x, this.pos.y, 16);
    for(let ray of this.rays)
      {
        ray.show();
      }
  }
}
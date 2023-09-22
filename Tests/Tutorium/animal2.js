class Animal {
    constructor(name, weight) {
      this.name = name;
      this.weight = weight;
      this.alive = true;
    }
  
    feed(amount) {
      this.weight += amount;
    }
  }
  class Prey extends Animal{

  }
  class Predetaor extends Animal{
    constructor(name ,weight,dangerFactor){
        super(name,weight,)
        this.dangerFactor = dangerFactor
    }
  }
 
  const cat = new Animal("Rotzi", 4.5);
  console.log(cat.name);    
  console.log(cat.weight);  
  console.log(cat.alive);   
  
  cat.feed(0.5);
  console.log(cat.weight);  
  
 
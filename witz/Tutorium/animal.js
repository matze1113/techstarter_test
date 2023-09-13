class Animal {
    constructor(name, weight) {
      this.name = name;
      this.weight = weight;
      this.alive = true;
    }
  }
  
  // Beispielverwendung
  const cat = new Animal("Kitty", 5);
  console.log(cat.name);    // Ausgabe: Kitty
  console.log(cat.weight);  // Ausgabe: 5
  console.log(cat.alive);   // Ausgabe: true
  
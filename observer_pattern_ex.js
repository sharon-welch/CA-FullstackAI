class NewspaperFactory {
  subscribers = [];
  addSubscription(func){
    this.subscribers.push(func)
  }
  
  notify(){
    for(let func of this.subscribers){
      func();
    }
  }
}

const factory = new NewspaperFactory();

// pass functions into addSubscription
// not calling the function yet, just passing in 
factory.addSubscription(function(){
  console.log('Yannick')
});

factory.addSubscription(function(){
  console.log('Drink tea')
});

console.log(factory);

//this will run each function
factory.notify();
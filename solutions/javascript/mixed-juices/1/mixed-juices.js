// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch(name){
    case 'Pure Strawberry Joy':
      return .5
    case 'Energizer' :
    case 'Green Garden':
      return 1.5
    case 'Tropical Island':
      return 3
    case 'All or Nothing':
      return 5
    default:
      return 2.5
  }
}


export function limesToCut(wedgesNeeded, limes) {
  let wedgesCut = 0;
  let limesCut = 0;


  while (wedgesCut < wedgesNeeded && limes.length > 0) {
    const lime = limes.shift(); 

    switch (lime) {
      case 'small':
        wedgesCut += 6;
        break;
      case 'medium':
        wedgesCut += 8;
        break;
      case 'large':
        wedgesCut += 10;
        break;
    }

    limesCut++; 
  }

  return limesCut;
  
}

export function remainingOrders(timeLeft, orders) {
  do{
    if(orders.length=== 0) break;

    let currentOrder = orders[0];
    let timeNeeded = timeToMixJuice(currentOrder);
    if(timeLeft >0){
      timeLeft -= timeNeeded;
      orders.shift();
    }else{
      break;
    }
  }while(timeLeft > 0)
  return orders;

}


import foodData from './data.json' assert { type: "json" };

  
  // Task 1: List all the food items
  function listAllFoodItems(data) {
    return data.map(item => item.foodname);
  }
  
  // Task 2: List all the food items with category vegetables
  function listVegetables(data) {
    return data.filter(item => item.category === 'Vegetable').map(item => item.foodname);
  }
  
  // Task 3: List all the food items with category fruit
  function listFruits(data) {
    return data.filter(item => item.category === 'Fruit').map(item => item.foodname);
  }
  
  // Task 4: List all the food items with category protein
  function listProteins(data) {
    return data.filter(item => item.category === 'Protein').map(item => item.foodname);
  }
  
  // Task 5: List all the food items with category nuts
  function listNuts(data) {
    return data.filter(item => item.category === 'Nuts').map(item => item.foodname);
  }
  
  // Task 6: List all the food items with category grains
  function listGrains(data) {
    return data.filter(item => item.category === 'Grain').map(item => item.foodname);
  }
  
  // Task 7: List all the food items with category dairy
  function listDairy(data) {
    return data.filter(item => item.category === 'Dairy').map(item => item.foodname);
  }
  
  // Task 8: List all the food items with calorie above 100
  function listAbove100Calories(data,threshold) {
    return data.filter(item => item.calorie > threshold).map(item => item.foodname);
  }
  
  // Task 9: List all the food items with calorie below 100
  function listBelow100Calories(data,threshold) {
    return data.filter(item => item.calorie < threshold).map(item => item.foodname);
  }
  
  // Task 10: List all the food items with highest protein content to lowest
  function listSortedByProtein(data) {
    return data.slice().sort((a, b) => b.protiens - a.protiens).map(item => item.foodname);
  }
  
  // Task 11: List all the food items with lowest carb content to highest
  function listSortedByCarb(data) {
    return data.slice().sort((a, b) => a.cab - b.cab).map(item => item.foodname);
  }
  
  // Output
console.log("All Food Items:", listAllFoodItems(foodData));
console.log("Vegetables:", listVegetables(foodData, "Vegetable"));
console.log("Fruits:", listFruits(foodData, "Fruit"));
console.log("Protein:", listProteins(foodData, "Protein"));
console.log("Nuts:", listNuts(foodData, "Nuts"));
console.log("Grain:", listGrains(foodData, "Grain"));
console.log("Dairy:", listDairy(foodData, "Dairy"));
console.log("Above 100 Calories:", listAbove100Calories(foodData, 100));
console.log("Below 100 Calories:", listBelow100Calories(foodData, 100));
console.log("Sorted by Protein (Highest to Lowest):", listSortedByProtein(foodData));
console.log("Sorted by Carb (Lowest to Highest):", listSortedByCarb(foodData));
 
  
  

  
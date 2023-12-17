class FoodRatings {
   foods: string[];
   cuisines: string[];
   ratings: number[];
  constructor(foods: string[], cuisines: string[], ratings: number[]) {
    this.foods = foods;
    this.cuisines = cuisines;
    this.ratings = ratings;
  }

  changeRating(food: string, newRating: number): void {
    const index = this.foods.findIndex(el => el === food)
    if (index) {
      this.ratings[index] = newRating
    }

  }

  highestRated(cuisine: string): string {
    let high = 0
    let highIndex = 0
    for(let i = 0 ; i < this.cuisines.length ; i++){
      if(this.cuisines[i] == cuisine){
        if(this.ratings[i] > high) {
          high = this.ratings[i]
          highIndex = i
        }
        else if(this.ratings[i] == high) {
          if(this.foods[highIndex] > this.foods[i]) highIndex = i
        }
      }
    }
    return this.foods[highIndex]
  }
}


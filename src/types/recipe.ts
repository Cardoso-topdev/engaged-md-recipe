export interface RecipeType {
  id: Number,
  name: String,
  createdAt: Date,
  creatorName: String,
  cookingTime: Number,
  ingredients: Array<String>,
  instructions: Array<String>
}
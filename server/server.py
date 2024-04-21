import requests

url = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients"

querystring = {"ingredients":"apples,flour,sugar","number":"5","ignorePantry":"true","ranking":"2"}

headers = {
	"X-RapidAPI-Key": os.getenv('RAPID_API_KEY'),
	"X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
}

response = requests.get(url, headers=headers, params=querystring)

print(response.json())
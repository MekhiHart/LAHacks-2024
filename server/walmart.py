import google.generativeai as genai
from IPython.display import Image
from PIL import Image as image

import os
from dotenv import load_dotenv
load_dotenv()


genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

rec = genai.upload_file(path="./receipt2.png", display_name="receipt2.png")
model = genai.GenerativeModel(model_name="models/gemini-pro-vision")

response = model.generate_content(["parse the receipt and tell me what items did i buy and what quantity. return a string formatted as [['item_name', 'quantity'],['item_name', 'quantity'], ['item_name', 'quantity']]. make sure to use single quotes and avoid double quotes, do not return anything before [ or after ]", rec])
# print(response)
# print(response.text)

# the output is:
# ```
# [["TOMATO", "5"], ["EGG", "6"], ["FROZEN PIZZA", "2"], ["BANANAS", "12"], ["BROCOLLI", "3"]]
# ```
# create a json from the string where there is a array of 'ingredient', which has a 'name', 'expirationDate' and 'quantity' key

import ast
items = ast.literal_eval(response.text)
for i in items:
    print(f"Item: {i[0]}, Quantity: {i[1]}")
    # model = genai.GenerativeModel(model_name="models/gemini-1.5-pro-latest")
    model2 = genai.GenerativeModel(model_name="models/gemini-1.0-pro")
    expdate = model2.generate_content(f"if today is 4/20/24, estimate the date when {i[0]} will expire based on its general perishability. assume its generally being stored in room temperature unless everyone knows it is stored in a fridge. respond strictly as a string in 'mm/dd/yyyy' , strictly do not give any other text because we dont need it")
    print(expdate.text[:10])
    i.append(expdate.text[:10])



import json
data = []
for i in items:
    data.append({"name": i[0], "expirationDate": i[2], "quantity": i[1]})

out = json.dumps(data, indent=4)

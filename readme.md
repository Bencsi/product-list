# Create a filterable product list. 

The product list's product items show the product's name, price, rating and image. 
Above the product list there is a searchfield (textbox) and a checkbox:  
Typing in the search field filters the products by name (typing "ms" shows "Samsung" as well)
Selecting the "New" labeled checkbox filters the list to only show the products where the "IsNew" property is true

Clicking on a product shows a detail page of that product, where the product's description is also shown.


The server side returns an array of products:

## Product
+ name: string
+ price: decimal
+ rating: number (1-5)
+ isNew: boolean
+ image: url
+ offlineImage: base64 image (to test offline)
+ description: string


## Priority
1. The product list is shown
2. The product list is filterable
3. The product list is clickable, showing a detail of a product above or next to the product list
4. The detail of a product is shown on a separate route.


## Running the backend

1. Install npm dependencies `npm install` 
2. Run node backend `npm run serve` 
3. Open the site on <http://localhost:8080/>

## API Endpoints

2. <http://localhost:8080/api/product?id=1>

3. <http://localhost:8080/api/products>

## Deploy to use
```bash
npm install
grunt prod
```
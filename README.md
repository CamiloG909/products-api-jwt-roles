# Rest API with JWT - Roles

Products API - NodeJS and MongoDB

Deploy✨ https://products-api-jwt-roles-camilog90.up.railway.app/api/products

## Routes

```json
{
	"name": "Mouse XL Gamer",
	"category": "Peripherals",
	"price": 90000,
	"imgURL": "url"
}
```

The registration or login token must be used to add products with an "x-access-token" header having the role of moderator.

- GET PRODUCTS
	> /api/products
- POST PRODUCTS
	> /api/products
- PUT PRODUCTS
	> /api/products?id=:id
- DELETE PRODUCTS
	> /api/products?id=:id

- POST SIGNUP
	> /api/auth/signup
```json
{
    "username": "admin",
    "email": "admin@email.com",
    "password": "123456",
    "roles": ["user","moderator","admin"]
}
```

- POST LOGIN
	> /api/auth/login
```json
{
    "email": "admin@email.com",
    "password": "123456"
}
```

## Usage

### Install dependences

Use ``` yarn ``` or ``` npm install ``` to install all dependencies.

### Run

Use ``` yarn dev ``` or ``` npm run dev ``` to run project.

### Build

Use ``` yarn build ``` or ``` npm run build ``` to build the project.

### Test

Use ``` yarn test ``` or ``` npm run test ``` to test the complete project, you can also use ``` yarn test:watch ``` or ``` npm run test:watch ``` to keep monitoring the test files.

## Authenticate

### <span style="color: green">POST</span> Sign In

#### Route
```
{{baseUrl}}/auth/signin
```
#### Body
| PARAMETER  | DESCRIPTION                                   | TYPE   | REQUIRED    |
|------------|-----------------------------------------------|--------|-------------|
| username   | Admin username                                | String | True        |
| password   | Admin password                                | String | True        |
| rememberMe | With remember me, a refresh token is returned | String | False       |

#### Response

Without "rememberMe":
```json
{
	"success": true,
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjlhMmU2ZDkyLWY1YWEtNDNmNy1iMWZhLTg2ZmUxZmE0YTUyZCIsImlhdCI6MTY3MzQwMTg4OCwiZXhwIjoxNjczNDg4Mjg4LCJzdWIiOiI5YTJlNmQ5Mi1mNWFhLTQzZjctYjFmYS04NmZlMWZhNGE1MmQifQ.UfbKa0cg82IdO0eFfFnWC5j4OwGNTLXPMdGuSbtg0xs"
}
```

With "rememberMe":
```json
{
	"success": true,
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjlhMmU2ZDkyLWY1YWEtNDNmNy1iMWZhLTg2ZmUxZmE0YTUyZCIsImlhdCI6MTY3MzQwMTkyMSwiZXhwIjoxNjczNDg4MzIxLCJzdWIiOiI5YTJlNmQ5Mi1mNWFhLTQzZjctYjFmYS04NmZlMWZhNGE1MmQifQ.L-kYDdV_ebCLCdifbLbyIkGhp1P1aViT0hVUtuU6EYQ",
	"refreshToken": {
		"id": "eaf1ab6e-6668-4310-8815-7b2073cf6eeb",
		"expiresIn": 1675993921,
		"admId": "9a2e6d92-f5aa-43f7-b1fa-86fe1fa4a52d"
	}
}
```

### <span style="color: green">POST</span> Refresh Token

#### Route
```
{{ _.baseUrl }}/auth/refresh_token
```

#### Body
| PARAMETER    | DESCRIPTION      | TYPE   | REQUIRED |
|--------------|------------------|--------|----------|
| refreshToken | Refresh token id | String | True     |

#### Response

```json
{
	"success": true,
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjlhMmU2ZDkyLWY1YWEtNDNmNy1iMWZhLTg2ZmUxZmE0YTUyZCIsImlhdCI6MTY3MzQwNTM5MCwiZXhwIjoxNjczNDkxNzkwLCJzdWIiOiI5YTJlNmQ5Mi1mNWFhLTQzZjctYjFmYS04NmZlMWZhNGE1MmQifQ.wB--0EUOH3RZWl0VXRPfTI81Op975cByjSRigxQdm8o"
}
```

## Customers

#### Headers

These headers are required for all customers routes.

| Parameter     | Value            |
|---------------|------------------|
| authorization | Bearer {token}   |

### <span style="color: blue">GET</span> Get Customer

#### Route
```
{{ _.baseUrl }}/customers/{id}
```

#### Response

```json
{
	"success": true,
	"customer": {
		"id": "c28754fe-85f6-4cd1-b731-e3707ba62dc1",
		"fullName": "Pierre Torres Oliveira",
		"email": "pierre@gmail.com",
		"phoneNumber": "5577999999999",
		"cpf": "00000000000",
		"address": {
			"id": "af673db8-2c9b-434c-a814-7ba355c6f074",
			"street": "Rua do Desafio",
			"number": 174,
			"district": "Serra do Desafio",
			"city": "Barreiras",
			"state": "Bahia",
			"country": "Brasil",
			"zipCode": "4353453453",
			"complement": "Perto da vitória no desafio",
			"customerId": "c28754fe-85f6-4cd1-b731-e3707ba62dc1"
		}
	}
}
```

### <span style="color: blue">GET</span> Get All Customers

#### Headers

| Parameter     | Value            |
|---------------|------------------|
| authorization | Bearer {token}   |

#### Response

```json
{
	"success": true,
	"customers": [
		{
			"id": "c28754fe-85f6-4cd1-b731-e3707ba62dc1",
			"fullName": "Pierre Torres Oliveira",
			"email": "pierre@gmail.com",
			"phoneNumber": "5577999999999",
			"cpf": "00000000000",
			"address": {
				"id": "af673db8-2c9b-434c-a814-7ba355c6f074",
				"street": "Rua do Desafio",
				"number": 174,
				"district": "Serra do Desafio",
				"city": "Barreiras",
				"state": "Bahia",
				"country": "Brasil",
				"zipCode": "4353453453",
				"complement": "Perto da vitória no desafio",
				"customerId": "c28754fe-85f6-4cd1-b731-e3707ba62dc1"
			}
		}
	]
}
```

### <span style="color: green">POST</span> Create Customer

#### Route
```
{{ _.baseUrl }}/customers
```
#### Headers

| Parameter     | Value            |
|---------------|------------------|
| authorization | Bearer {token}   |

#### Body
| PARAMETER          | DESCRIPTION                   | TYPE   | REQUIRED |
|--------------------|-------------------------------|--------|----------|
| fullName           | Customer's full name          | String | True     |
| email              | Customer email                | String | True     |
| phoneNumber        | Customer's phone number       | String | True     |
| cpf                | Customer's cpf                | String | True     |
| address            | Customer's address            | Object | True     |
| address.street     | Customer's address street     | String | True     |
| address.number     | Customer's address number     | Number | True     |
| address.district   | Customer's address district   | String | True     |
| address.city       | Customer's address city       | String | True     |
| address.state      | Customer's address state      | String | True     |
| address.country    | Customer's address country    | String | True     |
| address.zipCode    | Customer's address zip code   | String | True     |
| address.complement | Customer's address complement | String | True     |

#### Response

```json
{
	"success": true,
	"message": "User created successfully",
	"customer": {
		"id": "ca1fa4e5-94f1-436b-85b0-3826a0fbe7e5",
		"fullName": "Pierre Torres Oliveira",
		"email": "pierre@gmail.com",
		"phoneNumber": "5577999999999",
		"cpf": "00000000000"
	}
}
```

### <span style="color: yellow">PATCH</span> Update Customer

#### Route
```
{{ _.baseUrl }}/customers/{id}
```
#### Headers

| Parameter     | Value            |
|---------------|------------------|
| authorization | Bearer {token}   |

#### Body
| PARAMETER          | DESCRIPTION                   | TYPE   | REQUIRED |
|--------------------|-------------------------------|--------|----------|
| fullName           | Customer's full name          | String | False    |
| email              | Customer email                | String | False    |
| phoneNumber        | Customer's phone number       | String | False    |
| cpf                | Customer's cpf                | String | False    |
| address            | Customer's address            | Object | False    |
| address.street     | Customer's address street     | String | False    |
| address.number     | Customer's address number     | Number | False    |
| address.district   | Customer's address district   | String | False    |
| address.city       | Customer's address city       | String | False    |
| address.state      | Customer's address state      | String | False    |
| address.country    | Customer's address country    | String | False    |
| address.zipCode    | Customer's address zip code   | String | False    |
| address.complement | Customer's address complement | String | False    |

#### Response

```json
{
	"success": true,
	"message": "Customer updated successfully"
}
```
### <span style="color: red">DELETE</span> Delete Customer

#### Route
```
{{ _.baseUrl }}/customers/{id}
```
#### Headers

| Parameter     | Value            |
|---------------|------------------|
| authorization | Bearer {token}   |

#### Response

```json
{
	"success": true,
	"message": "Customer deleted successfully"
}
```

## Authenticate

### <span style="color: green">POST</span> Sign In

#### Route
```
{{baseUrl}}/auth/signin
```
#### Body
| PARAMETER | DESCRIPTION    | TYPE   | REQUIRED    |
|-----------|----------------|--------|-------------|
| username  | Admin username | String | True        |
| password  | admin password | String | True        |

### <span style="color: green">POST</span> Refresh Token

#### Route
```
{{ _.baseUrl }}/auth/refresh_token
```

#### Body
| PARAMETER    | DESCRIPTION      | TYPE   | REQUIRED |
|--------------|------------------|--------|----------|
| refreshToken | Refresh token id | String | True     |

## Customers

### <span style="color: blue">GET</span> Get Customer

#### Route
```
{{ _.baseUrl }}/customers/{id}
```
#### Headers

| Parameter     | Value            |
|---------------|------------------|
| authorization | Bearer {token}   |

### <span style="color: blue">GET</span> Get All Customers

#### Headers

| Parameter     | Value            |
|---------------|------------------|
| authorization | Bearer {token}   |

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

### <span style="color: red">DELETE</span> Delete Customer

#### Route
```
{{ _.baseUrl }}/customers/{id}
```
#### Headers

| Parameter     | Value            |
|---------------|------------------|
| authorization | Bearer {token}   |

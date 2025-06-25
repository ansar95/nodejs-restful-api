# User API Spec

## Register User API
Endpoint : POST /api/users

Request Body :

```json
{
    "username" : "ansar",
    "password" : "rahasia",
    "name"     : "ansar sattu"
}
```

Response Body Success :

```json
{
    "data" : {
      "username" : "ansar",
      "name"     : "ansar sattu"
    }
}
```

Response Body error :

```json
{
    "errors" : "Username already registered"    
}
```

## Login User API
Endpoint : POST /api/users/login

Request Body :

```json
{
    "username" : "ansar",
    "password" : "rahasia"
}
```

Response Body Success :

```json
{
    "data" : {
      "token" : "uuid-unique-token"
    }
}
```

Response Body error :

```json
{
    "errors" : "Username or password wrong"    
}
```

## Update User API
Endpoint : PATCH /api/users/current

Headers : 
- Autorization : Token

Request Body :

```json
{
    "username" : "ansar", //optional
    "password" : "rahasia" //optional
}
```

Response Body Success :

```json
{
    "data" : {
      "username" : "ansar",
      "name"     : "ansar sattu"
    }
}
```

Response Body error :

```json
{
    "errors" : "Name Length max 100"    
}
```

## Get User API

Endpoint : GET /api/users/current

Headers : 
- Autorization : Token

Response Body Success :

```json
{
    "data" : {
      "username" : "ansar",
      "name"     : "ansar sattu"
    }
}
```

Response Body error :

```json
{
    "errors" : "Unauthorized"    
}
```

## Logout User API

Endpoint : DELETE /api/users/logout

Headers : 
- Autorization : Token

Response Body Success :

```json
{
    "data" : "BERHASIL LOGOUT"
}
```

Response Body error :

```json
{
    "errors" : "Unauthorized"    
}
```


# Contact API Spec

## Create Contact API

Endpoint : POST /api/contacts

Headers : 
- Autorization : Token

Request Body :

```json
{
    "first_name" : "Ansar",
    "last_name"  : "Sattu",
    "email"      : "ansar@gmail.com",
    "phone"      : "082399999999"
}
```

Response Body Success :

```json
{
    "data" : {
      "id"         : 1,
      "first_name" : "Ansar",
      "last_name"  : "Sattu",
      "email"      : "ansar@gmail.com",
      "phone"      : "082399999999"
    }
}
```

Response Body error :

```json
{
    "errors" : "Email is not valid format"    
}
```

## Update Contact API

Endpoint : PUT /api/contacts/:id

Headers : 
- Autorization : Token

Request Body :

```json
{
    "first_name" : "Ansar",
    "last_name"  : "Sattu",
    "email"      : "ansar@gmail.com",
    "phone"      : "082399999999"
}
```

Response Body Success :

```json
{
    "data" : {
      "id"         : 1,
      "first_name" : "Ansar",
      "last_name"  : "Sattu",
      "email"      : "ansar@gmail.com",
      "phone"      : "082399999999"
    }
}
```

Response Body error :

```json
{
    "errors" : "Email is not valid format"    
}
```

## Get Contact API

Endpoint : GET /api/contacts/:id

Headers : 
- Autorization : Token

Response Body Success :

```json
{
    "data" : {
      "id"         : 1,
      "first_name" : "Ansar",
      "last_name"  : "Sattu",
      "email"      : "ansar@gmail.com",
      "phone"      : "082399999999"
    }
}
```

Response Body error :

```json
{
    "errors" : "Contact is not found"    
}
```

## Search Contact API

Endpoint : GET /api/contacts

Headers : 
- Autorization : Token

Query params :
- name : Search by first_name or last_name, using like, optional
- email : Search by email using like, optional
- phone : Search by phone using like, optional
- page : number of page, default 1
- size : size per page, default 10

Response Body Success :

```json
{
    "data" : [
        {
      "id"         : 1,
      "first_name" : "Ansar",
      "last_name"  : "Sattu",
      "email"      : "ansar@gmail.com",
      "phone"      : "082399999999"
    },
    {
      "id"         : 2,
      "first_name" : "Ansar",
      "last_name"  : "Sattu",
      "email"      : "ansar@gmail.com",
      "phone"      : "082399999999"
    },
    {
      "id"         : 3,
      "first_name" : "Ansar",
      "last_name"  : "Sattu",
      "email"      : "ansar@gmail.com",
      "phone"      : "082399999999"
    }
    ],
    "paging" : {
        "page" : 1,
        "total_page" : 3,
        "total_item" : 30
    }
}
```

Response Body error :

## Remove Contact API

Endpoint : DELETE /api/contacts/:id

Headers : 
- Autorization : Token

Response Body Success :

```json
{
    "data" : "OK"
}
```

Response Body error :

```json
{
    "errors" : "Contact is not found"    
}
```



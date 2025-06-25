# Address API Spec

## Create Address API

Endpoint : POST /api/contacts/contactId/addresses

Headers : 
- Autorization : Token

Request Body :

```json
{
    "street" : "jalan",
    "city"  : "kota",
    "province" : "Provinsi",
    "country"   : "Negara",
    "postal_code" : "Kode pos"
}
```

Response Body Success :

```json
{
    "data" : {
      "id"         : 1,
      "street" : "jalan",
      "city"  : "kota",
      "province" : "Provinsi",
      "country"   : "Negara",
      "postal_code" : "Kode pos"
    }
}
```

Response Body error :

```json
{
    "errors" : "Country is required"    
}
```

## Update Address API
Endpoint : PUT /api/contacts/contactId/addresses/:addressId

Headers : 
- Autorization : Token

Request Body :

```json
{
    "street" : "jalan",
    "city"  : "kota",
    "province" : "Provinsi",
    "country"   : "Negara",
    "postal_code" : "Kode pos"
}
```

Response Body Success :

```json
{
    "data" : {
      "id"    : 1,
      "street" : "jalan",
      "city"  : "kota",
      "province" : "Provinsi",
      "country"   : "Negara",
      "postal_code" : "Kode pos"
    }
}
```

Response Body error :

```json
{
    "errors" : "Country is required"    
}
```

## Get Address API

Endpoint : GET /api/contacts/contactId/addresses/:addressId

Headers : 
- Autorization : Token

Response Body Success :

```json
{
    "data" : {
      "id"     : 1,
      "street" : "jalan",
      "city"  : "kota",
      "province" : "Provinsi",
      "country"   : "Negara",
      "postal_code" : "Kode pos"
    }
}
```

Response Body error :

```json
{
    "errors" : "Contact is not found"    
}
```

## List Addresses API

Endpoint : POST /api/contacts/contactId/addresses

Headers : 
- Autorization : Token

Response Body Success :

```json
{
    "data" : [
        {
      "id"         : 1,
      "street" : "jalan",
      "city"  : "kota",
      "province" : "Provinsi",
      "country"   : "Negara",
      "postal_code" : "Kode pos"
    },
    {
      "id"         : 2,
      "street" : "jalan",
      "city"  : "kota",
      "province" : "Provinsi",
      "country"   : "Negara",
      "postal_code" : "Kode pos"
    },
    {
      "id"         : 3,
      "street" : "jalan",
      "city"  : "kota",
      "province" : "Provinsi",
      "country"   : "Negara",
      "postal_code" : "Kode pos"
    }
    ]
}
```

Response Body error :

```json
{
    "errors" : "Contact is not found"    
}
```

## Remove Address API

Endpoint : POST /api/contacts/contactId/addresses

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
    "errors" : "Address is not found"    
}
```
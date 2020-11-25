[🔙 Back to readme](../readme.md)

# Samples

## Display data without headers

_Parameters_

```typescript
EasyCSV2JSON.convert({
  file: ab,
  charSep: ',',
  headers: false,
  metadata: false,
} as EasyCSV2JSONInput);
```

_data_

```json
[
  ["id", "name", "price", "stock"],
  [0, "YAM 1000g", 1.22, 1],
  [2, "GARLIC MESH 500g", 0.97, 1],
  [3, "BROCOLI 1000 g", 1.64, 1],
  [4, "SWEET POTATO 1000g", 1.47, 1],
  [5, "WHITE ONION 1000g", 1.16, 1],
  [6, "RED ONION 1000g", 3.01, 1],
  [7, "GINGER 1000g", 3.81, 1],
  [8, "CUCUMBER 1000 g", 0.49, 1]
]
```

## Display data with headers

_Parameters_

```typescript
EasyCSV2JSON.convert({
  file: ab,
  charSep: ',',
  headers: true,
  metadata: false,
} as EasyCSV2JSONInput);
```

_data_

```json
[
  { "id": 0, "name": "YAM 1000g", "price": 1.22, "stock": 1 },
  { "id": 2, "name": "GARLIC MESH 500g", "price": 0.97, "stock": 1 },
  { "id": 3, "name": "BROCOLI 1000 g", "price": 1.64, "stock": 1 },
  { "id": 4, "name": "SWEET POTATO 1000g", "price": 1.47, "stock": 1 },
  { "id": 5, "name": "WHITE ONION 1000g", "price": 1.16, "stock": 1 },
  { "id": 6, "name": "RED ONION 1000g", "price": 3.01, "stock": 1 },
  { "id": 7, "name": "GINGER 1000g", "price": 3.81, "stock": 1 },
  { "id": 8, "name": "CUCUMBER 1000 g", "price": 0.49, "stock": 1 }
]
```

## Display metadata without headers

_Parameters_

```typescript
EasyCSV2JSON.convert({
  file: ab,
  charSep: ',',
  headers: false,
  metadata: true,
} as EasyCSV2JSONInput);
```

_data_

```json
[
  [
    { "value": "id", "type": "string", "column": "A1" },
    { "value": "name", "type": "string", "column": "B1" },
    { "value": "price", "type": "string", "column": "C1" },
    { "value": "stock", "type": "string", "column": "D1" }
  ],
  [
    { "value": 0, "type": "number", "column": "A1" },
    { "value": "YAM 1000g", "type": "string", "column": "B1" },
    { "value": 1.22, "type": "number", "column": "C1" },
    { "value": 1, "type": "number", "column": "D1" }
  ],
  [
    { "value": 2, "type": "number", "column": "A1" },
    { "value": "GARLIC MESH 500g", "type": "string", "column": "B1" },
    { "value": 0.97, "type": "number", "column": "C1" },
    { "value": 1, "type": "number", "column": "D1" }
  ],
  [
    { "value": 3, "type": "number", "column": "A1" },
    { "value": "BROCOLI 1000 g", "type": "string", "column": "B1" },
    { "value": 1.64, "type": "number", "column": "C1" },
    { "value": 1, "type": "number", "column": "D1" }
  ],
  [
    { "value": 4, "type": "number", "column": "A1" },
    { "value": "SWEET POTATO 1000g", "type": "string", "column": "B1" },
    { "value": 1.47, "type": "number", "column": "C1" },
    { "value": 1, "type": "number", "column": "D1" }
  ],
  [
    { "value": 5, "type": "number", "column": "A1" },
    { "value": "WHITE ONION 1000g", "type": "string", "column": "B1" },
    { "value": 1.16, "type": "number", "column": "C1" },
    { "value": 1, "type": "number", "column": "D1" }
  ],
  [
    { "value": 6, "type": "number", "column": "A1" },
    { "value": "RED ONION 1000g", "type": "string", "column": "B1" },
    { "value": 3.01, "type": "number", "column": "C1" },
    { "value": 1, "type": "number", "column": "D1" }
  ],
  [
    { "value": 7, "type": "number", "column": "A1" },
    { "value": "GINGER 1000g", "type": "string", "column": "B1" },
    { "value": 3.81, "type": "number", "column": "C1" },
    { "value": 1, "type": "number", "column": "D1" }
  ],
  [
    { "value": 8, "type": "number", "column": "A1" },
    { "value": "CUCUMBER 1000 g", "type": "string", "column": "B1" },
    { "value": 0.49, "type": "number", "column": "C1" },
    { "value": 1, "type": "number", "column": "D1" }
  ]
]
```

## Display metadata with headers

_Parameters_

```typescript
EasyCSV2JSON.convert({
  file: ab,
  charSep: ',',
  headers: true,
  metadata: true,
} as EasyCSV2JSONInput);
```

_data_

```json
[
  {
    "id": { "value": 0, "type": "number", "column": "A1" },
    "name": { "value": "YAM 1000g", "type": "string", "column": "B1" },
    "price": { "value": 1.22, "type": "number", "column": "C1" },
    "stock": { "value": 1, "type": "number", "column": "D1" }
  },
  {
    "id": { "value": 2, "type": "number", "column": "A1" },
    "name": { "value": "GARLIC MESH 500g", "type": "string", "column": "B1" },
    "price": { "value": 0.97, "type": "number", "column": "C1" },
    "stock": { "value": 1, "type": "number", "column": "D1" }
  },
  {
    "id": { "value": 3, "type": "number", "column": "A1" },
    "name": { "value": "BROCOLI 1000 g", "type": "string", "column": "B1" },
    "price": { "value": 1.64, "type": "number", "column": "C1" },
    "stock": { "value": 1, "type": "number", "column": "D1" }
  },
  {
    "id": { "value": 4, "type": "number", "column": "A1" },
    "name": { "value": "SWEET POTATO 1000g", "type": "string", "column": "B1" },
    "price": { "value": 1.47, "type": "number", "column": "C1" },
    "stock": { "value": 1, "type": "number", "column": "D1" }
  },
  {
    "id": { "value": 5, "type": "number", "column": "A1" },
    "name": { "value": "WHITE ONION 1000g", "type": "string", "column": "B1" },
    "price": { "value": 1.16, "type": "number", "column": "C1" },
    "stock": { "value": 1, "type": "number", "column": "D1" }
  },
  {
    "id": { "value": 6, "type": "number", "column": "A1" },
    "name": { "value": "RED ONION 1000g", "type": "string", "column": "B1" },
    "price": { "value": 3.01, "type": "number", "column": "C1" },
    "stock": { "value": 1, "type": "number", "column": "D1" }
  },
  {
    "id": { "value": 7, "type": "number", "column": "A1" },
    "name": { "value": "GINGER 1000g", "type": "string", "column": "B1" },
    "price": { "value": 3.81, "type": "number", "column": "C1" },
    "stock": { "value": 1, "type": "number", "column": "D1" }
  },
  {
    "id": { "value": 8, "type": "number", "column": "A1" },
    "name": { "value": "CUCUMBER 1000 g", "type": "string", "column": "B1" },
    "price": { "value": 0.49, "type": "number", "column": "C1" },
    "stock": { "value": 1, "type": "number", "column": "D1" }
  }
]
```

# Sample file

```text
id,name,price,stock
0,YAM 1000g,1.22,1,
2,GARLIC MESH 500g,0.97,1,
3,BROCOLI 1000 g,1.64,1,
4,SWEET POTATO 1000g,1.47,1,
5,WHITE ONION 1000g,1.16,1,
6,RED ONION 1000g,3.01,1,
7,GINGER 1000g,3.81,1,
8,CUCUMBER 1000 g,0.49,1
```

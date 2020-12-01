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
    { "value": "id", "type": "string", "column": "A", "row": 1 },
    { "value": "name", "type": "string", "column": "B", "row": 1 },
    { "value": "price", "type": "string", "column": "C", "row": 1 },
    { "value": "stock", "type": "string", "column": "D", "row": 1 }
  ],
  [
    { "value": 0, "type": "number", "column": "A", "row": 2 },
    { "value": "YAM 1000g", "type": "string", "column": "B", "row": 2 },
    { "value": 1.22, "type": "number", "column": "C", "row": 2 },
    { "value": 1, "type": "number", "column": "D", "row": 2 }
  ],
  [
    { "value": 2, "type": "number", "column": "A", "row": 3 },
    { "value": "GARLIC MESH 500g", "type": "string", "column": "B", "row": 3 },
    { "value": 0.97, "type": "number", "column": "C", "row": 3 },
    { "value": 1, "type": "number", "column": "D", "row": 3 }
  ],
  [
    { "value": 3, "type": "number", "column": "A", "row": 4 },
    { "value": "BROCOLI 1000 g", "type": "string", "column": "B", "row": 4 },
    { "value": 1.64, "type": "number", "column": "C", "row": 4 },
    { "value": 1, "type": "number", "column": "D", "row": 4 }
  ],
  [
    { "value": 4, "type": "number", "column": "A", "row": 5 },
    {
      "value": "SWEET POTATO 1000g",
      "type": "string",
      "column": "B",
      "row": 5
    },
    { "value": 1.47, "type": "number", "column": "C", "row": 5 },
    { "value": 1, "type": "number", "column": "D", "row": 5 }
  ],
  [
    { "value": 5, "type": "number", "column": "A", "row": 6 },
    { "value": "WHITE ONION 1000g", "type": "string", "column": "B", "row": 6 },
    { "value": 1.16, "type": "number", "column": "C", "row": 6 },
    { "value": 1, "type": "number", "column": "D", "row": 6 }
  ],
  [
    { "value": 6, "type": "number", "column": "A", "row": 7 },
    { "value": "RED ONION 1000g", "type": "string", "column": "B", "row": 7 },
    { "value": 3.01, "type": "number", "column": "C", "row": 7 },
    { "value": 1, "type": "number", "column": "D", "row": 7 }
  ],
  [
    { "value": 7, "type": "number", "column": "A", "row": 8 },
    { "value": "GINGER 1000g", "type": "string", "column": "B", "row": 8 },
    { "value": 3.81, "type": "number", "column": "C", "row": 8 },
    { "value": 1, "type": "number", "column": "D", "row": 8 }
  ],
  [
    { "value": 8, "type": "number", "column": "A", "row": 9 },
    { "value": "CUCUMBER 1000 g", "type": "string", "column": "B", "row": 9 },
    { "value": 0.49, "type": "number", "column": "C", "row": 9 },
    { "value": 1, "type": "number", "column": "D", "row": 9 }
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
    "id": { "value": 0, "type": "number", "column": "A", "row": "1" },
    "name": {
      "value": "YAM 1000g",
      "type": "string",
      "column": "B",
      "row": "1"
    },
    "price": { "value": 1.22, "type": "number", "column": "C", "row": "1" },
    "stock": { "value": 1, "type": "number", "column": "D", "row": "1" }
  },
  {
    "id": { "value": 2, "type": "number", "column": "A", "row": "2" },
    "name": {
      "value": "GARLIC MESH 500g",
      "type": "string",
      "column": "B",
      "row": "2"
    },
    "price": { "value": 0.97, "type": "number", "column": "C", "row": "2" },
    "stock": { "value": 1, "type": "number", "column": "D", "row": "2" }
  },
  {
    "id": { "value": 3, "type": "number", "column": "A", "row": "3" },
    "name": {
      "value": "BROCOLI 1000 g",
      "type": "string",
      "column": "B",
      "row": "3"
    },
    "price": { "value": 1.64, "type": "number", "column": "C", "row": "3" },
    "stock": { "value": 1, "type": "number", "column": "D", "row": "3" }
  },
  {
    "id": { "value": 4, "type": "number", "column": "A", "row": "4" },
    "name": {
      "value": "SWEET POTATO 1000g",
      "type": "string",
      "column": "B",
      "row": "4"
    },
    "price": { "value": 1.47, "type": "number", "column": "C", "row": "4" },
    "stock": { "value": 1, "type": "number", "column": "D", "row": "4" }
  },
  {
    "id": { "value": 5, "type": "number", "column": "A", "row": "5" },
    "name": {
      "value": "WHITE ONION 1000g",
      "type": "string",
      "column": "B",
      "row": "5"
    },
    "price": { "value": 1.16, "type": "number", "column": "C", "row": "5" },
    "stock": { "value": 1, "type": "number", "column": "D", "row": "5" }
  },
  {
    "id": { "value": 6, "type": "number", "column": "A", "row": "6" },
    "name": {
      "value": "RED ONION 1000g",
      "type": "string",
      "column": "B",
      "row": "6"
    },
    "price": { "value": 3.01, "type": "number", "column": "C", "row": "6" },
    "stock": { "value": 1, "type": "number", "column": "D", "row": "6" }
  },
  {
    "id": { "value": 7, "type": "number", "column": "A", "row": "7" },
    "name": {
      "value": "GINGER 1000g",
      "type": "string",
      "column": "B",
      "row": "7"
    },
    "price": { "value": 3.81, "type": "number", "column": "C", "row": "7" },
    "stock": { "value": 1, "type": "number", "column": "D", "row": "7" }
  },
  {
    "id": { "value": 8, "type": "number", "column": "A", "row": "8" },
    "name": {
      "value": "CUCUMBER 1000 g",
      "type": "string",
      "column": "B",
      "row": "8"
    },
    "price": { "value": 0.49, "type": "number", "column": "C", "row": "8" },
    "stock": { "value": 1, "type": "number", "column": "D", "row": "8" }
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

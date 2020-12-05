## Methods

Specification of methods available in the class

### .init()

> Static: false
> Is async: true

**Description**
Initialize the object and transform the CSV file into a JSON Object

**Params**
`input: EasyCSV2JSONInput;` Options for conversion and process

**Example**

```typescript
const ecsv = new EasyCSV2JSON();
await ecsv.init({
  file: ab,
  charSep: ',',
  headers: false,
  metadata: false,
} as EasyCSV2JSONInput);
```

### .getTable()

> Static: false
> Is async: true

**Description**
Returns the JSON object with all metadata required for processing

**Params** `no prams`

**Return**
`[Array<Cell>]` Array containing arrays of `Cell` ( a table of cells )

**Example**

```typescript
const ecsv = new EasyCSV2JSON();
await ecsv.init({
  file: ab,
  charSep: ',',
  headers: false,
  metadata: false,
} as EasyCSV2JSONInput);

await ecsv.getTable();
```

### .convert()

> Static: false
> Is async: true

**Description**
Applies options { headers, metadata } and return the result set formatted and ready to use

**Params** `no prams`

**Return** `any`
Possible results

| headers | metadata | result                                                                                           |
| ------- | -------- | ------------------------------------------------------------------------------------------------ |
| false   | false    | Array containing lists of values                                                                 |
| true    | false    | Array containing a list of objects created using headers `(header - value) `                     |
| false   | true     | Array containing a list of `Cell` containing all metadata                                        |
| true    | true     | Array containing a list of objects created using headers and thorough metadata `(header - Cell)` |

**Example**

```typescript
const ecsv = new EasyCSV2JSON();
await ecsv.init({
  file: ab,
  charSep: ',',
  headers: false,
  metadata: false,
} as EasyCSV2JSONInput);

await ecsv.convert();
```

### .val()

> Static: false
> Is async: true

**Description**
Return the value of one specific cell using `column` and `row` to access it

**Params**
`cell: string` Column row to find the specific cell. Eg: `A1`

**Return** `any` the value of the cell

**Example**
`val('A1')` 👉 `GARLIC MESH 500g`

```typescript
const ecsv = new EasyCSV2JSON();
await ecsv.init({
  file: ab,
  charSep: ',',
  headers: false,
  metadata: false,
} as EasyCSV2JSONInput);

await ecsv.val('B8');
```

### .setVal()

> Static: false
> Is async: true

**Description**
Set new value to one specific cell

**Params**
`cell: string` Column row to find the specific cell. Eg: `A1`
`value: any` The new value for the cell

**Return** `void`

**Example**

```typescript
const ecsv = new EasyCSV2JSON();
await ecsv.init({
  file: ab,
  charSep: ',',
  headers: false,
  metadata: false,
} as EasyCSV2JSONInput);

await ecsv.setVal('b4', 'hello');
```

_Result_

```json
[
  ["id", "name", "price", "stock", "name"],
  [0, "YAM 1000g", 1.22, 1, "yam"],
  [2, "GARLIC MESH 500g", 0.97, 1, "garlic"],
  [3, "hello", 1.64, 1, "brocoli"], // 👈 This is the four row don't ge confuse by the first row
  [4, "SWEET POTATO 1000g", 1.47, 1, "potatoe"],
  [5, "WHITE ONION 1000g", 1.16, 1, "white onion"],
  [6, "RED ONION 1000g", 3.01, 1, "red onion"],
  [7, "GINGER 1000g", 3.81, 1, "ginger"],
  [8, "CUCUMBER 1000 g", 0.49, 1, "cucumber"]
]
```

### .cell()

> Static: false
> Is async: true

**Description**
Returns cell information with metadata eg `cell('B7')` 👉 `{ value: 'RED ONION 1000g', type: 'string', column: 'B', row: 7, header: 'name' },`

**Params**
`cell: string` Column row to find the specific cell. Eg: `A1`

**Return** `Cell` Object cell containing all metadata

**Example**

```typescript
const ecsv = new EasyCSV2JSON();
await ecsv.init({
  file: ab,
  charSep: ',',
  headers: false,
  metadata: true,
} as EasyCSV2JSONInput);

await ecsv.cell('a1');
```

### .applyFormula()

> Static: false
> Is async: true

**Description**
Apply a function to the value of the cell and allow to do calculations and modify the value

**Params**
` cell: string` Column row to find the specific cell. Eg: `A1`

```typescript
fn: (value: any, $this: EasyCSV2JSON) => Promise<any>
```

The second parameter is a function that receives as a parameters `value` the value of the cell and `$this` a reference to the complete csv json document and functions

**Return** `Cell` Object cell containing all metadata

**Example**

```typescript
const ecsv = new EasyCSV2JSON();
await ecsv.init({
  file: ab,
  charSep: ',',
  headers: false,
  metadata: false,
} as EasyCSV2JSONInput);

await ecsv.applyFormula('B3', async (value: any, csvObject: EasyCSV2JSON) => {
  console.log('lets apply some changes to ', value);
  return '🧄 ' + value; // 👈 new value for the cell
});
```

_Result_

```json
[
  ["id", "name", "price", "stock", "name"],
  [0, "YAM 1000g", 1.22, 1, "yam"],
  [2, "🧄 GARLIC MESH 500g", 0.97, 1, "garlic"],
  [3, "hello", 1.64, 1, "brocoli"],
  [4, "SWEET POTATO 1000g", 1.47, 1, "potatoe"],
  [5, "WHITE ONION 1000g", 1.16, 1, "white onion"],
  [6, "RED ONION 1000g", 3.01, 1, "red onion"],
  [7, "GINGER 1000g", 3.81, 1, "ginger"],
  [8, "CUCUMBER 1000 g", 0.49, 1, "cucumber"]
]
```

### .convert()

> Static: true
> Is async: true

**Description**
Initialize the JSON using the CSV and applies options like metadata and headers

**Params**
EasyCSV2JSONInput

**Return**
Possible results

| headers | metadata | result                                                                                           |
| ------- | -------- | ------------------------------------------------------------------------------------------------ |
| false   | false    | Array containing lists of values                                                                 |
| true    | false    | Array containing a list of objects created using headers `(header - value) `                     |
| false   | true     | Array containing a list of `Cell` containing all metadata                                        |
| true    | true     | Array containing a list of objects created using headers and thorough metadata `(header - Cell)` |

**Example**

```typescript
const ecsv = new EasyCSV2JSON();
await ecsv.init({
  file: ab,
  charSep: ',',
  headers: false,
  metadata: false,
} as EasyCSV2JSONInput);

await ecsv.convert();
```

_Result_

```json
[
  ["id", "name", "price", "stock", "name"],
  [0, "YAM 1000g", 1.22, 1, "yam"],
  [2, "🧄 GARLIC MESH 500g", 0.97, 1, "garlic"],
  [3, "hello", 1.64, 1, "brocoli"],
  [4, "SWEET POTATO 1000g", 1.47, 1, "potatoe"],
  [5, "WHITE ONION 1000g", 1.16, 1, "white onion"],
  [6, "RED ONION 1000g", 3.01, 1, "red onion"],
  [7, "GINGER 1000g", 3.81, 1, "ginger"],
  [8, "CUCUMBER 1000 g", 0.49, 1, "cucumber"]
]
```

### .inferType()

> Static: true
> Is async: true

**Description**
Infer the type for a value and return value and type inferred

**Params**
string

**Return** `Cell` Object cell containing metadata of the type only

**Example**

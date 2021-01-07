[🔙 Back to readme](../readme.md)

## Methods

Specification of methods available in the class

### ⚙️ .init()

> **Static:** false
> **Is async:** true

#### 🗂 Description

Initialize the object and transform the CSV file into a JSON Object

#### 📥 Params

##### `input: EasyCSV2JSONInput;`

Options for conversion and process

#### 📤 Return

VOID

#### 👁‍🗨 Example

```typescript
const ecsv = new EasyCSV2JSON();
await ecsv.init({
  file: ab,
  charSep: ',',
  headers: false,
  metadata: false,
} as EasyCSV2JSONInput);
```

### ⚙️ .getTable()

> **Static:** false
> **Is async:** true

#### 🗂 Description

Returns the JSON object with all metadata required for processing

#### 📥 Params

NO PARAMS

#### 📤 Return

`[Array<Cell>]`
Array containing arrays of `Cell` ( a table of cells )

#### 👁‍🗨 Example

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

### ⚙️ .convert()

> **Static:** false
> **Is async:** true

#### 🗂 Description

Applies options { headers, metadata } and return the result set formatted and ready to use

#### 📥 Params

`no prams`

#### 📤 Return

`any`
Possible results

| headers | metadata | result                                                                                           |
| ------- | -------- | ------------------------------------------------------------------------------------------------ |
| false   | false    | Array containing lists of values                                                                 |
| true    | false    | Array containing a list of objects created using headers `(header - value) `                     |
| false   | true     | Array containing a list of `Cell` containing all metadata                                        |
| true    | true     | Array containing a list of objects created using headers and thorough metadata `(header - Cell)` |

#### 👁‍🗨 Example

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

### ⚙️ .val()

> **Static:** false
> **Is async:** true

#### 🗂 Description

Return the value of one specific cell using `column` and `row` to access it

#### 📥 Params

##### `cell: string`

Column row to find the specific cell. Eg: `A1`

#### 📤 Return

`any` the value of the cell

#### 👁‍🗨 Example

```typescript
const ecsv = new EasyCSV2JSON();
await ecsv.init({
  file: ab,
  charSep: ',',
  headers: false,
  metadata: true,
} as EasyCSV2JSONInput);

await ecsv.val('a1');
```

_Result_

```text
GARLIC MESH 500g
```

### ⚙️ . setVal()

> **Static:** false
> **Is async:** true

#### 🗂 Description

Set new value to one specific cell

#### 📥 Params

##### `cell: string`

Column row to find the specific cell. Eg: `A1`

##### `value: any`

The new value for the cell

#### 📤 Return

VOID

#### 👁‍🗨 Example

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
  [3, "hello", 1.64, 1, "brocoli"], // 👈 This is the four row don't get confused by the first row
  [4, "SWEET POTATO 1000g", 1.47, 1, "potatoe"],
  [5, "WHITE ONION 1000g", 1.16, 1, "white onion"],
  [6, "RED ONION 1000g", 3.01, 1, "red onion"],
  [7, "GINGER 1000g", 3.81, 1, "ginger"],
  [8, "CUCUMBER 1000 g", 0.49, 1, "cucumber"]
]
```

### ⚙️ .cell()

> **Static:** false
> **Is async:** true

#### 🗂 Description

Returns cell information with all metadata eg

#### 📥 Params

##### `cell: string`

Column row to find the specific cell. Eg: `A1`

#### 📤 Return

`Cell` Object cell containing all metadata

#### 👁‍🗨 Example

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

_Result_

```json
{
  "value": "RED ONION 1000g",
  "type": "string",
  "column": "B",
  "row": 7,
  "header": "name"
},
```

### ⚙️ .applyFormula()

> **Static:** false
> **Is async:** true

#### 🗂 Description

Apply a function to the value of the cell and allow to do calculations and modify the value

#### 📥 Params

##### `cell: string`

Column row to find the specific cell. Eg: `A1`

##### fn() => {}

```typescript
fn: (value: any, $this: EasyCSV2JSON) => Promise<any>
```

Function that receives as a parameters `value` the value of the cell and `$this` a reference to the complete csv json document and functions

#### 📤 Return

`Cell` Object cell containing all metadata

#### 👁‍🗨 Example

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

### ⚙️ .filterVal()

> **Static:** false
> **Is async:** true

#### 🗂 Description

Filter all rows the containing the exact the value in the column sent by parameter

#### 📥 Params

##### ` column: string`

Column to filter. Eg: `B`

##### ` value: any`

Exact value to find on each cell Eg:`YAM 1000g`

##### ` options: { newRowNumbers: boolean }` (Optional).

- `newRowNumbers` fixes the row numbers in the result set, the default value is true.

#### 📤 Return

`EasyCSV2JSON` New object containing only rows with coincidences

#### 👁‍🗨 Example

```typescript
const ecsv = new EasyCSV2JSON();
await ecsv.init({
  file: ab,
  charSep: ',',
  headers: false,
  metadata: false,
} as EasyCSV2JSONInput);

await ecsv.filterVal('B', 'YAM 1000g');
```

_Result_

```json
[[0, "YAM 1000g", 1.22, 1]]
```

### ⚙️ .filterFn()

> **Static:** false
> **Is async:** true

#### 🗂 Description

Filter rows using a user defined function to make match values

#### 📥 Params

##### - `column: string`

Column to apply formula. Eg: `B`.

##### - `fn() => boolean`

```typescript
fn: (value: any) => boolean;
```

The second parameter is a function that receives as a parameters the value of the cell and returns a boolean indicating if there is a match

##### - `options: { newRowNumbers: boolean }` Optional.

- `newRowNumbers` fixes the row numbers in the result set, the default > value is true.

#### 📤 Return

`EasyCSV2JSON` Object containing all rows that makes match

#### 👁‍🗨 Example

```typescript
const ecsv = new EasyCSV2JSON();
await ecsv.init({
  file: ab,
  charSep: ',',
  headers: false,
  metadata: false,
} as EasyCSV2JSONInput);

const filteredData: EasyCSV2JSON = await eCsv.filterFn('B', (value) =>
  new RegExp(/onion/i).test(value),
);
```

_Result_

```json
[
  [5, "WHITE ONION 1000g", 1.16, 1],
  [6, "RED ONION 1000g", 3.01, 1]
]
```

### ⚙️ .convert()

> **Static:** true
> **Is async:** true

#### 🗂 Description

Initialize the JSON using the CSV and applies options like metadata and headers

#### 📥 Params

##### EasyCSV2JSONInput

Object containing configuration and byte array with file

#### 📤 Return

Possible results

| headers | metadata | result                                                                                           |
| ------- | -------- | ------------------------------------------------------------------------------------------------ |
| false   | false    | Array containing lists of values                                                                 |
| true    | false    | Array containing a list of objects created using headers `(header - value) `                     |
| false   | true     | Array containing a list of `Cell` containing all metadata                                        |
| true    | true     | Array containing a list of objects created using headers and thorough metadata `(header - Cell)` |

#### 👁‍🗨 Example

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

### ⚙ .inferType()

> **Static:** true
> **Is async:** true

#### 🗂 Description

Infer the type for a value and return value and type inferred

#### 📥 Params

`value:string`
Value you need to infer type

#### 📤 Return

`Cell` Object cell containing metadata of the type only

#### 👁‍🗨 Example

```typescript
console.log(await EasyCSV2JSON.inferType('true'));
// 👉 { value: true, type: 'boolean', column: '', row: 0 }

console.log(await EasyCSV2JSON.inferType('Tom'));
// 👉 { value: 'Tom', type: 'string', column: '', row: 0 }

console.log(await EasyCSV2JSON.inferType('1'));
// 👉 { value: 1, type: 'number', column: '', row: 0 }

console.log(await EasyCSV2JSON.inferType('false'));
// 👉 { value: false, type: 'boolean', column: '', row: 0 }

console.log(await EasyCSV2JSON.inferType('2020-12-25'));
// 👉 { value: 2020-12-25T00:00:00.000Z, type: 'date', column: '', row: 0 }
```

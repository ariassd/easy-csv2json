![](assets/csv2json.png)

# Easy CSV2JSON

### Do you need process CSV files like a PRO!

This NPM provides the best way to convert from simple CSV file to JSON and giving you some valuable and useful metadata for querying the results and functions that allows modify, filter, and sort data.

Currently available

- Modify data using custom functions colum-row pair `.setVal('b4', 'hello');`
- Formulas `.applyFormula('B3', function)`
- Filter data by column `.filterVal('B', function)`
- Sort data `.sort('B', 'ASC')`

Coming soon

- Apply formulas to row sets
- Save csv file
- Transform to excel datasheet

## How to install.

[see package on npmjs.com](https://www.npmjs.com/package/easy-csv2json)

```bash
npm i easy-csv2json
```

### Simple use of static method

**EasyCSV2JSON.convert**

```typescript
import { EasyCSV2JSON, EasyCSV2JSONInput } from 'easy-csv2json/lib';

// ...

const fs = require('fs');

const filePath = './my-file.csv';
fs.readFile(filePath, null, (err: any, nb: any) => {
  const ab = nb.buffer;
  EasyCSV2JSON.convert({
    file: ab,
    charSep: ',',
    headers: false,
    metadata: false,
  } as EasyCSV2JSONInput).then((data) => console.log(data));
});
```

_Result json_

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

### More output samples here

### [📤 See more to samples here](./docs/samples.md)

### Parameter options

| Parameter | type        | description                            |
| --------- | ----------- | -------------------------------------- |
| file      | ArrayBuffer | CSV file BufferArray                   |
| charSep   | string      | Char separator                         |
| headers   | boolean     | The file contains headers true / false |
| metadata  | boolean     | Show metadata in the output JSON       |

> **⚠️ IMPORTANT!**
>
> When you use headers, if a header name is repeated the second one is renamed using a numeric postfix.
> Eg: if there are two columns called price the second one becomes into price1

### Metadata provided.

| Meta   | Type                   | value                                     |
| ------ | ---------------------- | ----------------------------------------- |
| value  | string, number or date | Typed value of the cell                   |
| type   | string                 | Type of the value, string, number or date |
| column | string                 | Excel styled columns, eg: A, B, C         |
| row    | number                 | Reference to the number of row, eg: 1,2,3 |

## Methods

### [See methods documentation here](docs/methods.md)

EasyCSV2JSON used as a instanced class provide the following methods.

```typescript
const eCsv = new EasyCSV2JSON();
await eCsv.init(options):
await eCsv.getTable();
await eCsv.convert();
await eCsv.val('B8');
await eCsv.setVal('b4', 'hello');
await eCsv.cell('a1');
await eCsv.applyFormula('B3', fn: (value: any, $this: EasyCSV2JSON) => Promise<any>)
await eCsv.filterVal('B', 'BROCOLI 1000 g')
await eCsv.filterFn('B', value => new RegExp(/A/i).test(value)),
```

## Status

Project: _in progress_
Thank you for using this NPM

## Stay in touch

- Author - Luis Arias 2020 <<ariassd@gmail.com>>
  [GitHub profile](https://github.com/ariassd)

- Contributors
  - Fabricio Vargas - [Github](https://github.com/jfab91)

## License

This software is licensed under [MIT License](LICENSE)

![](assets/MIT.png) ![](assets/open-source.png)

November 2020

![](assets/csv2json.png)

# Easy CSV2JSON

Easy convert from CSV file to JSON

This NPM provides a way to convert from simple CSV file to JSON and give you some valuable and useful metadata for querying the results.

## How to install.

[see npmjs package](https://www.npmjs.com/package/easy-csv2json)

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

[📤 Go to samples](./docs/samples.md)

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

EasyCSV2JSON used as a instanced class provide the following methods.

```typescript
const eCsv = new EasyCSV2JSON();
await eCsv.init(options):
```

[See methods here](docs/methods.md)

## Status

Project: _in progress_
Thank you for using this NPM

## Stay in touch

- Author - Luis Arias 2020 <ariassd@gmail.com>
  [GitHub profile](https://github.com/ariassd)

## License

This software is licensed under [MIT License](LICENSE)

![](assets/MIT.png) ![](assets/open-source.png)

November 2020

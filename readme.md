![](assets/csv2json.png)

# Easy CSV2JSON

Easy convert from CSV file to JSON

This NPM provides a way to convert from simple CSV file to JSON and give you some valuable and useful metadata for querying the results.

## How to install.

```bash
npm i easy-csv2json
```

### Simple use

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

### More samples here

[📤 Go to samples](./docs/samples.md)

### Parameter options

| Parameter | type        | description                            |
| --------- | ----------- | -------------------------------------- |
| file      | ArrayBuffer | CSV file BufferArray                   |
| charSep   | string      | Char separator                         |
| headers   | boolean     | The file contains headers true / false |
| metadata  | boolean     | Show metadata in the output JSON       |

### Metadata provided.

| Meta   | value                                     |
| ------ | ----------------------------------------- |
| value  | Typed value of the cell                   |
| type   | Type of the value, string, number or date |
| column | Excel styled columns, eg: A1, B1, C1      |

## Status

Project is: _in progress_
Thank you for using this NPM

## Stay in touch

- Author - Luis Arias 2020 <ariassd@gmail.com> - [GitHub profile](https://github.com/ariassd)

## License

This software is licensed under [MIT License](LICENSE)

![](assets/MIT.png) ![](assets/open-source.png)

November 2020

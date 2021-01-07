import { OutOfRangeException } from '.';
import { Cell } from './cell';
import { EasyCSV2JSONInput } from './easy-csv-2-json-input';

export class EasyCSV2JSON {
  private $table: [Array<Cell>] = [[]];
  private $options: EasyCSV2JSONInput;
  constructor() {}

  /**
   * Transform an CSV file to JSON object
   *
   * @static
   * @param {*} $input
   * @returns {Promise<any>}
   * @memberof EasyCSV2JSON
   */
  static async convert($input: EasyCSV2JSONInput): Promise<any> {
    const eSCV = new EasyCSV2JSON();
    await eSCV.init($input);
    return eSCV.convert();
  }

  /**
   * Transform an CSV file to JSON object with metadata
   *
   * @param {EasyCSV2JSONInput} $input Input parameters containing the array buffer, charSep and headers indicator
   * @returns {Promise<[Array<Cell>]>} A table containing the data
   * @memberof EasyCSV2JSON
   */
  public async init($input: EasyCSV2JSONInput) {
    this.$options = $input;
    this.$table = [[]];
    const enc = new TextDecoder('utf-8');
    const arr = new Uint8Array($input.file);
    const csvContent = enc.decode(arr);

    if (csvContent) {
      const lines = csvContent.split(`\n`);
      let headers: string[] = [];
      let rowNumber: number = 0;
      for (const row in lines) {
        if ($input?.headers && row === '0') {
          headers = lines[row].split($input.charSep);
          // check repeated headers
          let headersTemp = [];
          for (const index in headers) {
            const count = headersTemp.filter((i) => i === headers[index])
              .length;
            headersTemp.push(headers[index]);
            headers[index] += count > 0 ? count : '';
          }
        } else {
          this.$table[rowNumber] = new Array();
          const columns = lines[row].split($input.charSep);
          for (const cell in columns) {
            if (columns[cell]) {
              const newCell: Cell = await EasyCSV2JSON.inferType(columns[cell]);
              newCell.headerName = headers[cell];
              newCell.column = await EasyCSV2JSON.getColum(+cell);
              newCell.row = rowNumber + 1;
              this.$table[rowNumber].push(newCell);
            }
          }
          rowNumber++;
        }
      }
    }
  }

  public async convert(): Promise<any> {
    let result: any = [];
    for (const row in this.$table) {
      result[row] = this.$options?.headers ? {} : [];
      for (const cell in this.$table[row]) {
        const { headerName, ...currentCell } = this.$table[row][cell];
        if (this.$options?.headers) {
          result[row][headerName] = this.$options.metadata
            ? currentCell
            : currentCell.value;
        } else {
          result[row].push(
            this.$options.metadata ? currentCell : currentCell.value,
          );
        }
      }
    }
    return result;
  }

  public async getTable(): Promise<[Array<Cell>]> {
    return this.$table;
  }

  public async val(cell: string): Promise<any> {
    return (await this.cell(cell))?.value;
  }

  public async setVal(cell: string, value: any) {
    var column = cell.slice(0, cell.search(/\d/))?.toUpperCase();
    var row = cell?.toUpperCase().replace(column, '');
    let result = this.$table[+row - 1]?.find((i) => i.column === column);
    if (!result) throw new OutOfRangeException(`Out of range '${cell}'`);
    result.value = value;
    return result;
  }

  public async cell(cell: string): Promise<Cell> {
    var column = cell.slice(0, cell.search(/\d/))?.toUpperCase();
    var row = cell?.toUpperCase().replace(column, '');
    const result = this.$table[+row - 1]?.find((i) => i.column === column);
    if (!result) throw new OutOfRangeException(`Out of range '${cell}'`);
    return result;
  }

  public async applyFormula(
    cell: string,
    fn: (value: any, $this: EasyCSV2JSON) => Promise<any>,
  ): Promise<Cell> {
    const cellObject = (await this.cell(cell)).value;
    const newValue = await fn(cellObject, this);
    this.setVal(cell, newValue);
    return this.cell(cell);
  }

  public async filterFn(
    column: string,
    fn: (value: any) => boolean,
    options: { newRowNumbers: boolean } = { newRowNumbers: true },
  ): Promise<EasyCSV2JSON> {
    let result = new EasyCSV2JSON();
    result.$options = this.$options;
    await result.emptyTable();

    let rowNumber = 1;
    for (const line of this.$table) {
      const coincidence = line.find((i) => i.column === column && fn(i.value));
      if (coincidence) {
        if (options.newRowNumbers) {
          for (const cell of line) {
            cell.row = rowNumber;
          }
        }
        result.$table.push(line);
        rowNumber++;
      }
    }
    return result;
  }

  public async filterVal(
    column: string,
    value: any,
    options: { newRowNumbers: boolean } = { newRowNumbers: true },
  ): Promise<EasyCSV2JSON> {
    return this.filterFn(column, (val) => val == value, options);
  }

  private static async getColum(colNumber: number): Promise<string> {
    const columns = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    let spin = 0;
    if (colNumber >= columns.length)
      spin = Math.floor(colNumber / columns.length);
    let result = `${columns[colNumber - columns.length * spin]}${
      spin > 0 ? await EasyCSV2JSON.getColum(spin - 1) : ''
    }`;
    return result;
  }

  private async emptyTable() {
    this.$table = [[]];
    while (this.$table.length >= 1) this.$table.pop();
  }

  static async inferType(value: string): Promise<Cell> {
    const doit = (fn: () => any) => {
      try {
        return fn();
      } catch (ex) {
        return undefined;
      }
    };
    let result: any = +value;
    let typeName: string = '';
    if (!result) {
      result = doit(() => JSON.parse(value));
    }
    if (result === undefined) {
      if (!isNaN(Date.parse(value))) {
        result = new Date(value);
        typeName = 'date';
      }
    }
    if (result === undefined) {
      result = value;
    }
    if (!typeName) {
      typeName = typeof result;
    }
    return { value: result, type: typeName, column: '', row: 0 } as Cell;
  }
}

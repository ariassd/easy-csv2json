import { MetadataType } from './metadata-type';
import { EasyCSV2JSONInput } from './easy-csv-2-json-input';
export class EasyCSV2JSON {
  /**
   * Transform an CSV file to JSON object
   *
   * @static
   * @param {*} $input
   * @returns {Promise<any>}
   * @memberof EasyCSV2JSON
   */
  static async convert($input: EasyCSV2JSONInput): Promise<any> {
    const enc = new TextDecoder('utf-8');
    const arr = new Uint8Array($input.file);
    const csvContent = enc.decode(arr);
    const table = [];
    if (csvContent) {
      const lines = csvContent.split(`\n`);
      let headers: string[] = [];
      for (const row in lines) {
        if ($input?.headers) {
          if (row === '0') {
            headers = lines[row].split($input.charSep);
          } else {
            const columns = lines[row].split($input.charSep);
            const $new: any = {};
            for (const cell in headers) {
              if (headers[cell]) {
                const metaValue: any = await this.inferType(columns[cell]);
                let repeatedHeader = '';
                // tslint:disable-next-line: no-string-literal
                metaValue['column'] = await EasyCSV2JSON.getColum(+cell);
                // tslint:disable-next-line: no-string-literal
                metaValue['row'] = row;
                if ($new[headers[cell]]) {
                  repeatedHeader =
                    Object.keys($new).filter((i) => i === headers[cell])
                      .length + '';
                }
                $new[`${headers[+cell]}${repeatedHeader}`] = $input.metadata
                  ? metaValue
                  : metaValue.value;
              }
            }
            table.push($new);
          }
        } else {
          table[row] = [];
          const columns = lines[row].split($input.charSep);
          for (const cell in columns) {
            if (columns[cell]) {
              const metaValue: any = await this.inferType(columns[cell]);
              // tslint:disable-next-line: no-string-literal
              metaValue['column'] = await EasyCSV2JSON.getColum(+cell);
              // tslint:disable-next-line: no-string-literal
              metaValue['row'] = +row + 1;
              table[row].push($input.metadata ? metaValue : metaValue.value);
            }
          }
        }
      }
    }
    return table;
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

  static async inferType(value: string): Promise<MetadataType> {
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
    return { value: result, type: typeName };
  }
}

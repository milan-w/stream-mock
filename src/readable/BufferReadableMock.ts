/**
 * @module readable
 */
import { Readable, ReadableOptions } from 'stream';

import { any2Buffer } from '../helpers/converters/any2Buffer';

import IReadableMock from './IReadableMock';

export default class BufferReadableMock extends Readable
  implements IReadableMock {
  public it: IterableIterator<any>;
  private encoding: string;

  constructor(
    source: Iterable<any> | ArrayLike<any>,
    options: ReadableOptions = {}
  ) {
    options.objectMode = false;
    super(options);
    this.encoding = options.encoding ? options.encoding : 'utf8';
    this.it = source[Symbol.iterator]();
  }

  // tslint:disable-next-line:function-name Not responsible of this function name
  public _read() {
    const next = this.it.next();
    if (next.done) {
      this.push(null);
    } else {
      this.push(any2Buffer(next.value, this.encoding));
    }
  }
}

export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size === 'number') {
      this._size = size;
    }
    if (typeof location === 'string') {
      this._location = location;
    }
    this._size = size;
    this._location = location;
  }

  get size() {
    return this._size;
  }

  set size(Size) {
    if (typeof Size === 'number') {
      this._size = Size;
    }
  }

  get location() {
    return this._location;
  }

  set location(Location) {
    if (typeof Location === 'string') {
      this._location = Location;
    }
  }

  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }
}

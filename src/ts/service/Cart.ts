import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        if (! this._items.some((el) => el.id === item.id)) {
        this._items.push(item);
        }
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }


    removeCart(id: number): void {
        this._items = this._items.filter((item: Buyable) => item.id !== id);
    }
}
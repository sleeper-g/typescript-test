import Buyable from "./Buyable";

export default class Movie implements Buyable {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly price: number,

        readonly year: number,
        readonly country: string,
        readonly tag: string,
        readonly genre: string[],
        readonly time: string,
        readonly author: string,

        readonly count = 1,
    ) {}
}
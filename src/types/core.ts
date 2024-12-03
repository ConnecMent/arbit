/**
 * A market (the class itself) is anything the allows swapping pairs, e.g.
 * Uniswap
 */
export abstract class Market {
  constructor(protected id: string) {}
  abstract x2y(amount: bigint): bigint;
  abstract y2x(amount: bigint): bigint;
}

/**
 * Mapping type of a market to the next one in an arbitrategy chain:
 * - xx: token X of this market is token X of the next market
 * - xy: token X of this market is token Y of the next market
 * - null: used for the last market, indicating chain tail
 */
export type Mapping = "xx" | "xy" | null;

/**
 * A link is a piece in the arbitrategy chain, containing market id (e.g. LP id)
 * and its mapping type
 */
export interface Link {
  mapping: Mapping;
  id: string;
}

/**
 * An arbitrategy chain is a complete set of markets that we manipulate to earn
 * profit
 */
export type ArbitrategyChain = Link[];

/**
 * Arbitrategy indicates a set of chains that we are going to manipulate
 */
export interface Arbitrategy {
  providersChain: (typeof Market)[];
  chains: ArbitrategyChain[];
}

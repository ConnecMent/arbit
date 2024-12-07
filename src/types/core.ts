interface AmountWithDecimal {
  amount: bigint;
  decimals: number;
}

/**
 * A provider is anything that have markets for swapping pairs (e.g. Uniswap is
 * a provider and its LPs are the markets)
 */
export interface Provider {
  x2y(marketId: string, amount: AmountWithDecimal): AmountWithDecimal;
  y2x(marketId: string, amount: AmountWithDecimal): AmountWithDecimal;
}

/**
 * Mapping type of a market to the next one in an arbitrategy chain:
 * - xx: token X of this market is token X of the next market
 * - xy: token X of this market is token Y of the next market
 * - yx: token Y of this market is token X of the next market
 * - yy: token Y of this market is token Y of the next market
 * - null: used for the last market, indicating chain tail
 *
 * @example
 * For this chain:
 * --ETH/BTC->ETH/USDT->USDT/USDC->BTC/USDC--
 * We have these mappings:
 * --xx->yx->yy->null--
 */
export type Mapping = 'xx' | 'xy' | 'yx' | 'yy' | null;

/**
 * A link is a piece in the arbitrategy chain, containing provider, market id
 * (e.g. LP id) and its mapping type
 *
 * @example
 * const link: Link = {
 *   providerId: 'uniswap',
 *   marketId: 'awesomeLP',
 *   mapping: 'xx',
 * }
 */
export interface Link {
  providerId: string;
  marketId: string;
  mapping: Mapping;
}

/**
 * An arbitrategy chain is a complete set of markets (possibly on different
 * providers) that we manipulate to earn profit
 */
export type ArbitrategyChain = Link[];

/**
 * Arbitrategy indicates a set of chains that we are going to manipulate
 */
export type Arbitrategy = ArbitrategyChain[];

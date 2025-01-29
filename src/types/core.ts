/**
 * A provider is anything that have markets for swapping pairs (e.g. Uniswap is
 * a provider and its LPs are the markets)
 */
export interface Provider {
  x2y(marketId: string, amounts: number[]): Promise<number[]>;
  y2x(marketId: string, amounts: number[]): Promise<number[]>;
}

/**
 * To link all markets in an arbit we use swap type:
 * - x2y: sell token X and buy token Y in this market
 * - y2x: sell token Y and buy token X in this market
 *
 * @example
 * For this arbit:
 * --ETH/BTC->ETH/USDT->USDT/USDC->BTC/USDC--
 * We have these swaps:
 * --y2x->x2y->x2y->y2x
 */
export type SwapType = 'x2y' | 'y2x';

/**
 * A link is a piece in the arbit, containing provider, market id (e.g. LP id)
 * and its mapping type
 *
 * @example
 * const link: Link = {
 *   providerId: 'uniswap',
 *   marketId: 'awesomeLP',
 *   mapping: 'xx',
 * }
 */
export interface AssetInfo {
  name: string;
  coingeckoId: string;
  decimals: number;
}

export interface Link {
  providerId: string;
  marketId: string;
  swapType: SwapType;
  x: AssetInfo;
  y: AssetInfo;
}

/**
 * An arbit is a complete set of markets (possibly on different
 * providers) that we manipulate to earn profit
 */
export type Arbit = Link[];
/**
 * Arbitrategy indicates a set of arbits that we are going to compute their
 * profit
 */
export type Arbitrategy = Arbit[];

/**
 * A single trade on a link (within an arbit)
 */
export interface TradeLink extends Link {
  input: number[];
  output: number[];
}

/**
 * A finalized trade link
 */
export interface FinalizedTradeLink extends Link {
  input: number;
  output: number;
}

/**
 * A sequence of trades executed within a single arbit
 * Each trade in the path contributes to the overall profit calculation
 */
export type TradePath = TradeLink[];

/**
 * A finalized trade path
 */
export type FinalizedTradePath = FinalizedTradeLink[];

export interface Profit {
  usd: number;
  percent: number;
}

/**
 * The final result of arbitrategy execution, including full trading history and
 * final profit
 */
export interface ArbitResult {
  tradePath: FinalizedTradePath;
  profit: Profit;
}

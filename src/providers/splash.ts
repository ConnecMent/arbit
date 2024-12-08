import { AmountWithDecimal, Provider } from "@/types/core";
import { AmmPool, makeNativePools, Pools } from "@ergolabs/ergo-dex-sdk";
import { AssetAmount, Explorer, RustModule } from "@ergolabs/ergo-sdk";

class Splash implements Provider {
  private baseUrl: string;

  constructor(url: string) {
    this.baseUrl = url;
  }

  async getOrderBook(marketId: string) {
    try {
      const response = await fetch(
        `${this.baseUrl}/platform-api/v1/trading-view/order-book?base=${marketId}&quote=.`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.json();
    } catch (error) {
      console.error("Error fetching order book:", error);
      throw new Error("Failed to fetch order book");
    }
  }

  async x2y(marketId: string, amount: AmountWithDecimal) {
    const orderBook = await this.getOrderBook(marketId);

    const ask = orderBook.asks[0].price;

    return {
      amount: ask.toFixed(amount.decimals),
      decimals: amount.decimals,
    };
  }

  async y2x(marketId: string, amount: AmountWithDecimal) {
    const orderBook = await this.getOrderBook(marketId);

    const spot = orderBook.bids[0].price;

    return {
      amount: spot.toFixed(amount.decimals),
      decimals: amount.decimals,
    };
  }
}

export default Splash;

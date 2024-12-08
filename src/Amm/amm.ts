import { makeNativePools } from "@ergolabs/ergo-dex-sdk";
import { Explorer, RustModule } from "@ergolabs/ergo-sdk";
import Image from "next/image";
import axios from "axios";

interface IData {
  timestamp: number;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

export class Amm {
  private network: Explorer;
  private apiUrl: string;

  constructor(api: string) {
    this.apiUrl = api;
    this.network = new Explorer(this.apiUrl);
  }

  async loadRustModule(): Promise<void> {
    await RustModule.load();
  }

  async getPoolOutput(addr: string): Promise<any> {
    await this.loadRustModule();
    const pools = makeNativePools(this.network);
    const ergRsnPool = await pools.get(addr);

    if (ergRsnPool) {
        const output = ergRsnPool.outputAmount({
          asset: ergRsnPool.assetX,
          amount 1000000000n,
        });
        console.log("@@@@@@@@@@", output);
        return output;
    } else {
      console.log("Pool not found.");
      return null;
    }
  }

  async fetchDataFromSplash(): Promise<IData | null> {
    try {
      const response = await axios.get<IData>(this.apiUrl);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}

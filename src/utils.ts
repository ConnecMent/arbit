import { AssetInfo } from './types/core';

const fetchPrice = async (coingeckoId: string) => {
  const response: {
    [key: string]: {
      usd: number;
    };
  } = await (
    await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${coingeckoId}&vs_currencies=usd`,
      { cache: 'force-cache', next: { revalidate: 60 } },
    )
  ).json();

  return response[coingeckoId].usd;
};

export const asset2usd = async (asset: AssetInfo, assetAmounts: number[]) => {
  const assetValue = await fetchPrice(asset.coingeckoId);

  return assetAmounts.map(
    (amount) => (assetValue * amount) / 10 ** asset.decimals,
  );
};

export const usd2asset = async (asset: AssetInfo, usdAmounts: number[]) => {
  const assetValue = await fetchPrice(asset.coingeckoId);

  return usdAmounts.map(
    (amount) => +((amount * 10 ** asset.decimals) / assetValue).toFixed(0),
  );
};

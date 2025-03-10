import { asset2usd } from '@/lib/utils';
import { getNodeById } from '@/repositories/node';
import { ArbitNodeId, Provider } from '@/types/core';

const RosenBridge: Provider = {
  id: 'rosenbridge',
  name: 'Rosen Bridge',
  type: 'abstract',
  url: 'https://app.rosen.tech',

  async getExplicitFee(nodeId: ArbitNodeId, amounts: number[]) {
    const node = getNodeById(nodeId);
    const asset = getNodeById(node.id);
    const assetPrices = await asset2usd(asset, amounts);
    return assetPrices.map((amount) => {
      return amount > 2000 ? amount * 0.005 : 10;
    });
  },

  async x2y(_: string, amounts: number[]) {
    return amounts;
  },

  async y2x(_: string, amounts: number[]) {
    return amounts;
  },
};

export default RosenBridge;

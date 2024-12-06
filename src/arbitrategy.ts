import { Arbitrategy } from "./types/core";

/**
 * ErgoDex: ERG/rsADA
 * Splash: ADA/rsERG
 */
const adaErgArbitrategy: Arbitrategy = [
  [
    {
      providerId: "ergodex",
      mapping: "yx",
      marketId:
        "ae97c5eccd59a065cd973a8d6afb8bb79f9cc70368a7dcdf73aaeab1cedf6f6b",
    },
    {
      providerId: "splash",
      mapping: null,
      marketId:
        "ececc92aeaaac1f5b665f567b01baec8bc2771804b4c21716a87a4e3.53504c415348",
    },
  ],
  [
    {
      providerId: "splash",
      mapping: "xy",
      marketId:
        "ececc92aeaaac1f5b665f567b01baec8bc2771804b4c21716a87a4e3.53504c415348",
    },
    {
      providerId: "ergodex",
      mapping: null,
      marketId:
        "ae97c5eccd59a065cd973a8d6afb8bb79f9cc70368a7dcdf73aaeab1cedf6f6b",
    },
  ],
];

/**
 * ErgoDex: RSN/rsADA
 * Splash: ADA/rsRSN
 */
const adaRsnArbitrategy: Arbitrategy = [
  [
    {
      providerId: "ergodex",
      mapping: "yx",
      marketId:
        "29f45df2736a7c7dd790b682fb15429961d7c1ae92e05c72a4f65d53fc0c47d7",
    },
    {
      providerId: "splash",
      mapping: null,
      marketId:
        "04b95368393c821f180deee8229fbd941baaf9bd748ebcdbf7adbb14.727352534e",
    },
  ],
  [
    {
      providerId: "splash",
      mapping: "xy",
      marketId:
        "04b95368393c821f180deee8229fbd941baaf9bd748ebcdbf7adbb14.727352534e",
    },
    {
      providerId: "ergodex",
      mapping: null,
      marketId:
        "29f45df2736a7c7dd790b682fb15429961d7c1ae92e05c72a4f65d53fc0c47d7",
    },
  ],
];

const simpleArbitrategy: Arbitrategy = [
  ...adaErgArbitrategy,
  ...adaRsnArbitrategy,
];

export default simpleArbitrategy;

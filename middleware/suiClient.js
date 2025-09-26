import { getFullnodeUrl, SuiClient } from "@mysten/sui.js/client";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";
import { fromB64 } from "@mysten/sui.js/utils";

const client = new SuiClient({ url: getFullnodeUrl("testnet") });

const PRIVATE_KEY_B64 = process.env.SUI_PRIVATE_KEY;
if (!PRIVATE_KEY_B64) {
    throw new Error("Missing SUI_PRIVATE_KEY in .env");
}

const keypair = Ed25519Keypair.fromSecretKey(fromB64(PRIVATE_KEY_B64));

export const suiClient = client;
export const signer = keypair;

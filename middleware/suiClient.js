import dotenv from "dotenv";
import { SuiClient, getFullnodeUrl } from "@mysten/sui.js/client";
import { decodeSuiPrivateKey } from "@mysten/sui.js/cryptography";
import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";

dotenv.config();

const client = new SuiClient({ url: getFullnodeUrl("testnet") });

const PRIVATE_KEY = process.env.SUI_PRIVATE_KEY;
if (!PRIVATE_KEY) {
    throw new Error("Missing SUI_PRIVATE_KEY in .env");
}

const { schema, secretKey } = decodeSuiPrivateKey(PRIVATE_KEY);
const keypair = Ed25519Keypair.fromSecretKey(secretKey);

export const suiClient = client;
export const signer = keypair;

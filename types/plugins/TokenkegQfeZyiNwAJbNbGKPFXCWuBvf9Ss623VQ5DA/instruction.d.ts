import BufferLayout from 'buffer-layout';
import { TransactionInstruction, PublicKey } from '@solana/web3.js';
export declare class TokenInstructionLayout {
    name: string;
    index: number;
    layout: BufferLayout.struct;
}
export declare function deocdeTokenInstructionType(instruction: TransactionInstruction): string;
export declare class InitMintParams {
    constructor(mint: PublicKey, rent: PublicKey, decimals: number, mintAuthority: PublicKey, option: number, freezeAuthority: PublicKey);
}
export declare function decodeInitMint(instruction: TransactionInstruction): InitMintParams;
export declare class InitAccountParmas {
    constructor(account: PublicKey, mint: PublicKey, owner: PublicKey, rent: PublicKey);
}
export declare function decodeInitAccount(instruction: TransactionInstruction): InitAccountParmas;

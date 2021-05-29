import { TransactionInstruction, PublicKey } from '@solana/web3.js';
export declare class InitMintParams {
    mint: PublicKey;
    rent: PublicKey;
    decimals: number;
    mintAuthority: PublicKey;
    option: number;
    freezeAuthority: PublicKey;
    constructor(mint: PublicKey, rent: PublicKey, decimals: number, mintAuthority: PublicKey, option: number, freezeAuthority: PublicKey);
}
export declare class InitAccountParmas {
    account: PublicKey;
    mint: PublicKey;
    owner: PublicKey;
    rent: PublicKey;
    constructor(account: PublicKey, mint: PublicKey, owner: PublicKey, rent: PublicKey);
}
export declare class TransferParams {
    source: PublicKey;
    destination: PublicKey;
    amount: number;
    constructor(source: PublicKey, destination: PublicKey, amount: number);
}
export declare class ApproveParams {
    account: PublicKey;
    delegate: PublicKey;
    amount: number;
    constructor(account: PublicKey, delegate: PublicKey, amount: number);
}
export declare class RevokeParams {
    account: PublicKey;
    owner: PublicKey;
    constructor(account: PublicKey, owner: PublicKey);
}
export declare class SetAuthorityParams {
    account: PublicKey;
    currentAuthority: PublicKey;
    authorityType: number;
    option: number;
    newAuthority: PublicKey;
    constructor(account: PublicKey, currentAuthority: PublicKey, authorityType: number, option: number, newAuthority: PublicKey);
}
export declare class MintToParams {
    mint: PublicKey;
    dest: PublicKey;
    authority: PublicKey;
    amount: number;
    constructor(mint: PublicKey, dest: PublicKey, authority: PublicKey, amount: number);
}
export declare class BurnParams {
    account: PublicKey;
    mint: PublicKey;
    owner: PublicKey;
    amount: number;
    constructor(account: PublicKey, mint: PublicKey, owner: PublicKey, amount: number);
}
export declare class CloseAccountParams {
    account: PublicKey;
    dest: PublicKey;
    owner: PublicKey;
    constructor(account: PublicKey, dest: PublicKey, owner: PublicKey);
}
export declare class FreezeAccountParams {
    account: PublicKey;
    dest: PublicKey;
    authority: PublicKey;
    constructor(account: PublicKey, dest: PublicKey, authority: PublicKey);
}
export declare class ThawAccountParams {
    account: PublicKey;
    dest: PublicKey;
    authority: PublicKey;
    constructor(account: PublicKey, dest: PublicKey, authority: PublicKey);
}
export declare class TransferCheckedParams {
    source: PublicKey;
    mint: PublicKey;
    destination: PublicKey;
    owner: PublicKey;
    amount: number;
    decimals: number;
    constructor(source: PublicKey, mint: PublicKey, destination: PublicKey, owner: PublicKey, amount: number, decimals: number);
}
export declare class ApproveCheckedParams {
    account: PublicKey;
    mint: PublicKey;
    delegate: PublicKey;
    owner: PublicKey;
    amount: number;
    decimals: number;
    constructor(account: PublicKey, mint: PublicKey, delegate: PublicKey, owner: PublicKey, amount: number, decimals: number);
}
export declare class MintToCheckedParams {
    mint: PublicKey;
    dest: PublicKey;
    authority: PublicKey;
    amount: number;
    decimals: number;
    constructor(mint: PublicKey, dest: PublicKey, authority: PublicKey, amount: number, decimals: number);
}
export declare class BurnCheckedParams {
    account: PublicKey;
    mint: PublicKey;
    owner: PublicKey;
    amount: number;
    decimals: number;
    constructor(account: PublicKey, mint: PublicKey, owner: PublicKey, amount: number, decimals: number);
}
export declare class TokenInstruction {
    static deocdeTokenInstructionType(instruction: TransactionInstruction): string;
    static decodeInitMint(instruction: TransactionInstruction): InitMintParams;
    static decodeInitAccount(instruction: TransactionInstruction): InitAccountParmas;
    static decodeTransfer(instruction: TransactionInstruction): TransferParams;
    static decodeApprove(instruction: TransactionInstruction): ApproveParams;
    static decodeRevoke(instruction: TransactionInstruction): RevokeParams;
    static decodeSetAuthority(instruction: TransactionInstruction): SetAuthorityParams;
    static decodeMintTo(instruction: TransactionInstruction): MintToParams;
    static decodeBurn(instruction: TransactionInstruction): BurnParams;
    static decodeCloseAccount(instruction: TransactionInstruction): CloseAccountParams;
    static decodeFreezeAccount(instruction: TransactionInstruction): FreezeAccountParams;
    static decodeThawAccount(instruction: TransactionInstruction): ThawAccountParams;
    static decodeTransferChecked(instruction: TransactionInstruction): TransferCheckedParams;
    static decodeApproveChecked(instruction: TransactionInstruction): ApproveCheckedParams;
    static decodeMintToChecked(instruction: TransactionInstruction): MintToCheckedParams;
    static decodeBurnChecked(instruction: TransactionInstruction): BurnCheckedParams;
}

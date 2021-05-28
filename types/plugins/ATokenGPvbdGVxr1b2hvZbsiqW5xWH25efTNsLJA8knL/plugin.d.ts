import { IParserPlugin, Message } from 'src/iparserPlugin';
import { TransactionInstruction } from '@solana/web3.js';
export declare class ATokenAProgram implements IParserPlugin {
    programID: string;
    parseInstruction(instruction: TransactionInstruction): Message;
}
export declare const plugin: ATokenAProgram;

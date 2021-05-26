import { IParserPlugin, Message } from 'src/iparserPlugin';
import { TransactionInstruction } from '@solana/web3.js';

export class ATokenAProgram implements IParserPlugin {
  programID: string = 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
  parseInstruction(instruction: TransactionInstruction): Message {
    throw new Error('Method not implemented.');
  }
}

export const plugin: ATokenAProgram = new ATokenAProgram();

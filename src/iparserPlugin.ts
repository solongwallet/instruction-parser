import { TransactionInstruction } from '@solana/web3.js';

export class Message {
  type: string;
  name: string;
  program: string;
  inputs: Map<string, string>;
}

export interface IParserPlugin {
  readonly programID: string;

  parseInstruction(instruction: TransactionInstruction): Message;
}

import { IParserPlugin,Message } from "src/iparserPlugin";
import {TransactionInstruction} from '@solana/web3.js'


export class TokenProgram implements IParserPlugin {
    programID: string = "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA";
    parseInstruction(instruct:TransactionInstruction): Message {
        throw new Error("Method not implemented.");
    }
}

export const  plugin : TokenProgram  = new TokenProgram();
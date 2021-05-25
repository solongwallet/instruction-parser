import { IParserPlugin,Message } from "src/iparserPlugin";
import {TransactionInstruction} from '@solana/web3.js'


export class SystemProgram implements IParserPlugin {
    programID: string = "11111111111111111111111111111111";
    parseInstruction(instruct:TransactionInstruction): Message {
        throw new Error("Method not implemented.");
    }
}

export const  plugin : SystemProgram  = new SystemProgram();
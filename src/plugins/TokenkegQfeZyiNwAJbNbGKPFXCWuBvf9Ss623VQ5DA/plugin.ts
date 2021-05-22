import { IParserPlugin,Message } from "src/iparserPlugin";


export class TokenProgram implements IParserPlugin {
    programID: string = "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA";
    parseInstruction(data: string): Message {
        throw new Error("Method not implemented.");
    }
}

export const  plugin : TokenProgram  = new TokenProgram();
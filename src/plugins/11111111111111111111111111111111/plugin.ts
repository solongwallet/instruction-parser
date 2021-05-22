import { IParserPlugin,Message } from "src/iparserPlugin";


export class SystemProgram implements IParserPlugin {
    programID: string = "11111111111111111111111111111111";
    parseInstruction(data: string): Message {
        throw new Error("Method not implemented.");
    }
}

export const  plugin : SystemProgram  = new SystemProgram();
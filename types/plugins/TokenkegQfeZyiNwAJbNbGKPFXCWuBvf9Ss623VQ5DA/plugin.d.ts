import { IParserPlugin, Message } from "src/iparserPlugin";
export declare class TokenProgram implements IParserPlugin {
    programID: string;
    parseInstruction(data: string): Message;
}
export declare const plugin: TokenProgram;

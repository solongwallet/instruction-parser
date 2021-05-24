import { IParserPlugin, Message } from "src/iparserPlugin";
export declare class SystemProgram implements IParserPlugin {
    programID: string;
    parseInstruction(data: string): Message;
}
export declare const plugin: SystemProgram;

export declare class Message {
    type: string;
    name: string;
    program: string;
    inputs: Map<string, string>;
}
export interface IParserPlugin {
    readonly programID: string;
    parseInstruction(data: string): Message;
}

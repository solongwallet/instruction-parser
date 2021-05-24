import { Message } from './iparserPlugin';
export declare class IParserManager {
    private plugins;
    private static _instance;
    private constructor();
    static instance(): IParserManager;
    loadPlugins(): void;
    parseInstruction(programID: string, data: string): Message;
}

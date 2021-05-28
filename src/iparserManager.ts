import { TransactionInstruction } from '@solana/web3.js';
import { IParserPlugin, Message } from './iparserPlugin';
import {configPlugins} from './config';

export class IParserManager {

    private plugins: Map<string, IParserPlugin>

    private static _instance: IParserManager;

    private constructor() {

    }

    public static instance() {
        if (!IParserManager._instance) {
            IParserManager._instance = new IParserManager();
        }

        return IParserManager._instance;
    }

    public loadPlugins() {
        for (const p of configPlugins) {
            this.plugins.set(p.programID, p);
        } 
    }

    public parseInstruction(programID: string,instruction : TransactionInstruction): Message {
        if (!this.plugins.has(programID)) {
            throw("no such program's instruction paster");
        }
        let plugin = this.plugins.get(programID);
        return plugin.parseInstruction(instruction);
    }

}
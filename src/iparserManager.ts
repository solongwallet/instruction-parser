import { TransactionInstruction } from '@solana/web3.js';
import { IParserPlugin, Message } from './iparserPlugin';
import { configPlugins } from './config';

export class IParserManager {
  private plugins: Map<string, IParserPlugin>;

  private static _instance: IParserManager;

  private constructor() {
    this.plugins = new Map();
  }

  public static instance() {
    if (!IParserManager._instance) {
      IParserManager._instance = new IParserManager();
    }

    return IParserManager._instance;
  }

  public loadPlugins() {
    for (const p of configPlugins) {
      //console.log("IPaser load plugin for ", p.programID)
      this.plugins.set(p.programID, p);
    }
  }

  public parseInstruction(
    programID: string,
    instruction: TransactionInstruction
  ): Message {
    if (!this.plugins.has(programID)) {
      throw Error("no such program's instruction paster");
    }
    const plugin = this.plugins.get(programID);
    console.log('plugin:', plugin);
    return plugin.parseInstruction(instruction);
  }
}

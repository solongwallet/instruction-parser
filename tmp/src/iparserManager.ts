
class IParserManager{

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

    }

    public registPlugin() {

    }

    public parseInstruction(programID:string, data:string): Object {
        return null
    }
    
}
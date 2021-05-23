import { configPlugins } from './config';
var IParserManager = /** @class */ (function () {
    function IParserManager() {
    }
    IParserManager.instance = function () {
        if (!IParserManager._instance) {
            IParserManager._instance = new IParserManager();
        }
        return IParserManager._instance;
    };
    IParserManager.prototype.loadPlugins = function () {
        for (var _i = 0, configPlugins_1 = configPlugins; _i < configPlugins_1.length; _i++) {
            var p = configPlugins_1[_i];
            this.plugins.set(p.programID, p);
        }
    };
    IParserManager.prototype.parseInstruction = function (programID, data) {
        if (!this.plugins.has(programID)) {
            throw ("no such program's instruction paster");
        }
        var plugin = this.plugins.get(programID);
        return plugin.parseInstruction(data);
    };
    return IParserManager;
}());
export { IParserManager };

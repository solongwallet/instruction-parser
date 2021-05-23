var SystemProgram = /** @class */ (function () {
    function SystemProgram() {
        this.programID = "11111111111111111111111111111111";
    }
    SystemProgram.prototype.parseInstruction = function (data) {
        throw new Error("Method not implemented.");
    };
    return SystemProgram;
}());
export { SystemProgram };
export var plugin = new SystemProgram();

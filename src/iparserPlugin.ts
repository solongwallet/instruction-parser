export interface IParserPlugin {
    readonly programID: string

    parseInstruction(data:string) : Object
}
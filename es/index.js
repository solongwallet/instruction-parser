import { SystemInstruction } from '@solana/web3.js';

var TokenProgram =
/** @class */
function () {
  function TokenProgram() {
    this.programID = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
  }

  TokenProgram.prototype.parseInstruction = function (instruction) {
    throw new Error('Method not implemented.');
  };

  return TokenProgram;
}();
var plugin$2 = new TokenProgram();

var Message =
/** @class */
function () {
  function Message() {}

  return Message;
}();

var SystemProgram =
/** @class */
function () {
  function SystemProgram() {
    this.programID = '11111111111111111111111111111111';
  }

  SystemProgram.prototype.parseInstruction = function (instruction) {
    var msg = new Message();
    var it = SystemInstruction.decodeInstructionType(instruction);
    msg.program = this.programID;
    msg.type = "instruction";

    switch (it) {
      case 'AdvanceNonceAccount':
        {
          msg.name = "AdvanceNonceAccount";
          var param = SystemInstruction.decodeNonceAdvance(instruction);
          msg.inputs.set("authorizedPubkey", param.authorizedPubkey.toBase58());
          msg.inputs.set("noncePubkey", param.noncePubkey.toBase58());
          break;
        }

      case 'Allocate':
        {
          msg.name = "Allocate";
          var param = SystemInstruction.decodeAllocate(instruction);
          msg.inputs.set("accountPubkey", param.accountPubkey.toBase58());
          msg.inputs.set("space", param.space.toString());
          break;
        }

      case 'AllocateWithSeed':
        {
          msg.name = "AllocateWithSeed";
          var param = SystemInstruction.decodeAllocateWithSeed(instruction);
          msg.inputs.set("accountPubkey", param.accountPubkey.toBase58());
          msg.inputs.set("basePubkey", param.basePubkey.toBase58());
          msg.inputs.set("seed", param.seed);
          msg.inputs.set("space", param.space.toString());
          msg.inputs.set("programId", param.programId.toString());
          break;
        }

      case 'Assign':
        {
          msg.name = "Assign";
          var param = SystemInstruction.decodeAssign(instruction);
          msg.inputs.set("accountPubkey", param.accountPubkey.toBase58());
          msg.inputs.set("programId", param.programId.toBase58());
          break;
        }

      case 'AssignWithSeed':
        {
          msg.name = "AssignWithSeed";
          var param = SystemInstruction.decodeAssignWithSeed(instruction);
          msg.inputs.set("accountPubkey", param.accountPubkey.toBase58());
          msg.inputs.set("basePubkey", param.basePubkey.toBase58());
          msg.inputs.set("seed", param.seed);
          msg.inputs.set("programId", param.programId.toBase58());
          break;
        }

      case 'AuthorizeNonceAccount':
        {
          msg.name = "AuthorizeNonceAccount";
          var param = SystemInstruction.decodeNonceAuthorize(instruction);
          msg.inputs.set("noncePubkey", param.noncePubkey.toBase58());
          msg.inputs.set("authorizedPubkey", param.authorizedPubkey.toBase58());
          msg.inputs.set("newAuthorizedPubkey", param.newAuthorizedPubkey.toBase58());
          break;
        }

      case 'Create':
        {
          msg.name = "Create";
          var param = SystemInstruction.decodeCreateAccount(instruction);
          msg.inputs.set("fromPubkey", param.fromPubkey.toBase58());
          msg.inputs.set("newAccountPubkey", param.newAccountPubkey.toBase58());
          msg.inputs.set("lamports", param.lamports.toString());
          msg.inputs.set("space", param.space.toString());
          msg.inputs.set("programId", param.programId.toBase58());
          break;
        }

      case 'CreateWithSeed':
        {
          msg.name = "CreateWithSeed";
          var param = SystemInstruction.decodeCreateWithSeed(instruction);
          msg.inputs.set("fromPubkey", param.fromPubkey.toBase58());
          msg.inputs.set("newAccountPubkey", param.newAccountPubkey.toBase58());
          msg.inputs.set("basePubkey", param.basePubkey.toBase58());
          msg.inputs.set("seed", param.seed);
          msg.inputs.set("lamports", param.lamports.toString());
          msg.inputs.set("space", param.space.toString());
          msg.inputs.set("programId", param.programId.toBase58());
          break;
        }

      case 'InitializeNonceAccount':
        {
          msg.name = "InitializeNonceAccount";
          var param = SystemInstruction.decodeNonceInitialize(instruction);
          msg.inputs.set("noncePubkey", param.noncePubkey.toBase58());
          msg.inputs.set("authorizedPubkey", param.authorizedPubkey.toBase58());
          break;
        }

      case 'Transfer':
        {
          msg.name = "Transfer";
          var param = SystemInstruction.decodeTransfer(instruction);
          msg.inputs.set("fromPubkey", param.fromPubkey.toBase58());
          msg.inputs.set("toPubkey", param.toPubkey.toBase58());
          msg.inputs.set("lamports", param.lamports.toString());
          break;
        }

      case 'TransferWithSeed':
        {
          msg.name = "TransferWithSeed";
          var param = SystemInstruction.decodeTransferWithSeed(instruction);
          msg.inputs.set("fromPubkey", param.fromPubkey.toBase58());
          msg.inputs.set("basePubkey", param.basePubkey.toBase58());
          msg.inputs.set("toPubkey", param.toPubkey.toBase58());
          msg.inputs.set("lamports", param.lamports.toString());
          msg.inputs.set("seed", param.seed);
          msg.inputs.set("programId", param.programId.toBase58());
          break;
        }

      case 'WithdrawNonceAccount':
        {
          msg.name = "WithdrawNonceAccount";
          var param = SystemInstruction.decodeNonceWithdraw(instruction);
          msg.inputs.set("noncePubkey", param.noncePubkey.toBase58());
          msg.inputs.set("authorizedPubkey", param.authorizedPubkey.toBase58());
          msg.inputs.set("toPubkey", param.toPubkey.toBase58());
          msg.inputs.set("lamports", param.lamports.toString());
          break;
        }

      default:
        {
          msg.name = "UNKNOWN";
          break;
        }
    }

    return msg;
  };

  return SystemProgram;
}();
var plugin$1 = new SystemProgram();

var ATokenAProgram =
/** @class */
function () {
  function ATokenAProgram() {
    this.programID = 'ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL';
  }

  ATokenAProgram.prototype.parseInstruction = function (instruction) {
    throw new Error('Method not implemented.');
  };

  return ATokenAProgram;
}();
var plugin = new ATokenAProgram();

// generated by  compile script
var configPlugins = [plugin$2, plugin$1, plugin];

var IParserManager =
/** @class */
function () {
  function IParserManager() {}

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

  IParserManager.prototype.parseInstruction = function (programID, instruction) {
    if (!this.plugins.has(programID)) {
      throw "no such program's instruction paster";
    }

    var plugin = this.plugins.get(programID);
    return plugin.parseInstruction(instruction);
  };

  return IParserManager;
}();

export { IParserManager, Message };

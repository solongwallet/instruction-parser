import BufferLayout from 'buffer-layout';
import { PublicKey, SystemInstruction } from '@solana/web3.js';

var Message =
/** @class */
function () {
  function Message() {}

  return Message;
}();

// @flow
/**
 * Layout for a public key
 */

var publicKey = function (property) {
  if (property === void 0) {
    property = 'publicKey';
  }

  return BufferLayout.blob(32, property);
};
/**
 * Layout for a 64bit unsigned value
 */

var uint64 = function (property) {
  if (property === void 0) {
    property = 'uint64';
  }

  return BufferLayout.blob(8, property);
};

// @ts-ignore

var InitMintParams =
/** @class */
function () {
  function InitMintParams(mint, rent, decimals, mintAuthority, option, freezeAuthority) {
    this.mint = mint;
    this.rent = rent;
    this.decimals = decimals;
    this.mintAuthority = mintAuthority;
    this.option = option;
    this.freezeAuthority = freezeAuthority;
    console.log('todo: ', mint, rent, decimals, mintAuthority, option, freezeAuthority);
  }

  return InitMintParams;
}();

var InitAccountParmas =
/** @class */
function () {
  function InitAccountParmas(account, mint, owner, rent) {
    this.account = account;
    this.mint = mint;
    this.owner = owner;
    this.rent = rent;
    console.log('todo: ', account, mint, owner, rent);
  }

  return InitAccountParmas;
}();

var TransferParams =
/** @class */
function () {
  function TransferParams(source, destination, amount) {
    this.source = source;
    this.destination = destination;
    this.amount = amount;
    console.log("todo");
  }

  return TransferParams;
}();

var ApproveParams =
/** @class */
function () {
  function ApproveParams(account, delegate, amount) {
    this.account = account;
    this.delegate = delegate;
    this.amount = amount;
    console.log("todo");
  }

  return ApproveParams;
}();

var RevokeParams =
/** @class */
function () {
  function RevokeParams(account, owner) {
    this.account = account;
    this.owner = owner;
    console.log("todo");
  }

  return RevokeParams;
}();

var SetAuthorityParams =
/** @class */
function () {
  function SetAuthorityParams(account, currentAuthority, authorityType, option, newAuthority) {
    this.account = account;
    this.currentAuthority = currentAuthority;
    this.authorityType = authorityType;
    this.option = option;
    this.newAuthority = newAuthority;
    console.log('todo');
  }

  return SetAuthorityParams;
}();

var MintToParams =
/** @class */
function () {
  function MintToParams(mint, dest, authority, amount) {
    this.mint = mint;
    this.dest = dest;
    this.authority = authority;
    this.amount = amount;
    console.log("todo");
  }

  return MintToParams;
}();

var BurnParams =
/** @class */
function () {
  function BurnParams(account, mint, owner, amount) {
    this.account = account;
    this.mint = mint;
    this.owner = owner;
    this.amount = amount;
    console.log("todo");
  }

  return BurnParams;
}();

var CloseAccountParams =
/** @class */
function () {
  function CloseAccountParams(account, dest, owner) {
    this.account = account;
    this.dest = dest;
    this.owner = owner;
    console.log("todo");
  }

  return CloseAccountParams;
}();

var FreezeAccountParams =
/** @class */
function () {
  function FreezeAccountParams(account, dest, authority) {
    this.account = account;
    this.dest = dest;
    this.authority = authority;
    console.log("todo");
  }

  return FreezeAccountParams;
}();

var ThawAccountParams =
/** @class */
function () {
  function ThawAccountParams(account, dest, authority) {
    this.account = account;
    this.dest = dest;
    this.authority = authority;
    console.log("todo");
  }

  return ThawAccountParams;
}();

var TransferCheckedParams =
/** @class */
function () {
  function TransferCheckedParams(source, mint, destination, owner, amount, decimals) {
    this.source = source;
    this.mint = mint;
    this.destination = destination;
    this.owner = owner;
    this.amount = amount;
    this.decimals = decimals;
    console.log("todo");
  }

  return TransferCheckedParams;
}();

var ApproveCheckedParams =
/** @class */
function () {
  function ApproveCheckedParams(account, mint, delegate, owner, amount, decimals) {
    this.account = account;
    this.mint = mint;
    this.delegate = delegate;
    this.owner = owner;
    this.amount = amount;
    this.decimals = decimals;
    console.log("todo");
  }

  return ApproveCheckedParams;
}();

var MintToCheckedParams =
/** @class */
function () {
  function MintToCheckedParams(mint, dest, authority, amount, decimals) {
    this.mint = mint;
    this.dest = dest;
    this.authority = authority;
    this.amount = amount;
    this.decimals = decimals;
    console.log("todo");
  }

  return MintToCheckedParams;
}();

var BurnCheckedParams =
/** @class */
function () {
  function BurnCheckedParams(account, mint, owner, amount, decimals) {
    this.account = account;
    this.mint = mint;
    this.owner = owner;
    this.amount = amount;
    this.decimals = decimals;
    console.log("todo");
  }

  return BurnCheckedParams;
}();

var TokenInstruction =
/** @class */
function () {
  function TokenInstruction() {}

  TokenInstruction.deocdeTokenInstructionType = function (instruction) {
    var layout = BufferLayout.struct([BufferLayout.u8('cmd')]);
    var data;

    try {
      data = layout.decode(instruction.data);
    } catch (err) {
      throw new Error('invalid instruction; ' + err);
    }

    var cmd = data.cmd;

    switch (cmd) {
      case 0:
        return 'InitMint';

      case 1:
        return 'InitAccount';

      case 3:
        return 'Transfer';

      case 4:
        return 'Approve';

      case 5:
        return 'Revoke';

      case 6:
        return 'SetAuthority';

      case 7:
        return 'MintTo';

      case 8:
        return 'Burn';

      case 9:
        return 'CloseAccount';

      case 10:
        return 'FreezeAccount';

      case 11:
        return 'ThawAccount';

      case 12:
        return 'TransferChecked';

      case 13:
        return 'ApproveChecked';

      case 14:
        return 'MintToChecked';

      case 15:
        return 'BurnChecked';
    }

    return '';
  };

  TokenInstruction.decodeInitMint = function (instruction) {
    var layout = BufferLayout.struct([BufferLayout.u8('instruction'), BufferLayout.u8('decimals'), publicKey('mintAuthority'), BufferLayout.u8('option'), publicKey('freezeAuthority')]);
    var data;

    try {
      data = layout.decode(instruction.data);
    } catch (err) {
      throw new Error('invalid instruction; ' + err);
    }

    var decimals = data.decimals,
        mintAuthority = data.mintAuthority,
        option = data.option,
        freezeAuthority = data.freezeAuthority;
    return new InitMintParams(instruction.keys[0].pubkey, instruction.keys[1].pubkey, decimals, new PublicKey(mintAuthority), option, new PublicKey(freezeAuthority));
  };

  TokenInstruction.decodeInitAccount = function (instruction) {
    return new InitAccountParmas(instruction.keys[0].pubkey, instruction.keys[1].pubkey, instruction.keys[2].pubkey, instruction.keys[3].pubkey);
  };

  TokenInstruction.decodeTransfer = function (instruction) {
    var layout = BufferLayout.struct([BufferLayout.u8('instruction'), uint64('amount')]);
    var data;

    try {
      data = layout.decode(instruction.data);
    } catch (err) {
      throw new Error('invalid instruction; ' + err);
    }

    var amount = data.amount;
    return new TransferParams(instruction.keys[0].pubkey, instruction.keys[1].pubkey, amount);
  };

  TokenInstruction.decodeApprove = function (instruction) {
    var layout = BufferLayout.struct([BufferLayout.u8('instruction'), uint64('amount')]);
    var data;

    try {
      data = layout.decode(instruction.data);
    } catch (err) {
      throw new Error('invalid instruction; ' + err);
    }

    var amount = data.amount;
    return new ApproveParams(instruction.keys[0].pubkey, instruction.keys[1].pubkey, amount);
  };

  TokenInstruction.decodeRevoke = function (instruction) {
    return new RevokeParams(instruction.keys[0].pubkey, instruction.keys[1].pubkey);
  };

  TokenInstruction.decodeSetAuthority = function (instruction) {
    var layout = BufferLayout.struct([BufferLayout.u8('instruction'), BufferLayout.u8('authorityType'), BufferLayout.u8('option'), publicKey('newAuthority')]);
    var data;

    try {
      data = layout.decode(instruction.data);
    } catch (err) {
      throw new Error('invalid instruction; ' + err);
    }

    var authorityType = data.authorityType,
        option = data.option,
        newAuthority = data.newAuthority;
    return new SetAuthorityParams(instruction.keys[0].pubkey, instruction.keys[1].pubkey, authorityType, option, newAuthority);
  };

  TokenInstruction.decodeMintTo = function (instruction) {
    var layout = BufferLayout.struct([BufferLayout.u8('instruction'), uint64('amount')]);
    var data;

    try {
      data = layout.decode(instruction.data);
    } catch (err) {
      throw new Error('invalid instruction; ' + err);
    }

    var amount = data.amount;
    return new MintToParams(instruction.keys[0].pubkey, instruction.keys[1].pubkey, instruction.keys[2].pubkey, amount);
  };

  TokenInstruction.decodeBurn = function (instruction) {
    var layout = BufferLayout.struct([BufferLayout.u8('instruction'), uint64('amount')]);
    var data;

    try {
      data = layout.decode(instruction.data);
    } catch (err) {
      throw new Error('invalid instruction; ' + err);
    }

    var amount = data.amount;
    return new BurnParams(instruction.keys[0].pubkey, instruction.keys[1].pubkey, instruction.keys[2].pubkey, amount);
  };

  TokenInstruction.decodeCloseAccount = function (instruction) {
    return new CloseAccountParams(instruction.keys[0].pubkey, instruction.keys[1].pubkey, instruction.keys[2].pubkey);
  };

  TokenInstruction.decodeFreezeAccount = function (instruction) {
    return new FreezeAccountParams(instruction.keys[0].pubkey, instruction.keys[1].pubkey, instruction.keys[2].pubkey);
  };

  TokenInstruction.decodeThawAccount = function (instruction) {
    return new ThawAccountParams(instruction.keys[0].pubkey, instruction.keys[1].pubkey, instruction.keys[2].pubkey);
  };

  TokenInstruction.decodeTransferChecked = function (instruction) {
    var layout = BufferLayout.struct([BufferLayout.u8('instruction'), uint64('amount'), BufferLayout.u8('decimals'),,]);
    var data;

    try {
      data = layout.decode(instruction.data);
    } catch (err) {
      throw new Error('invalid instruction; ' + err);
    }

    var amount = data.amount,
        decimals = data.decimals;
    return new TransferCheckedParams(instruction.keys[0].pubkey, instruction.keys[1].pubkey, instruction.keys[2].pubkey, instruction.keys[3].pubkey, amount, decimals);
  };

  TokenInstruction.decodeApproveChecked = function (instruction) {
    var layout = BufferLayout.struct([BufferLayout.u8('instruction'), uint64('amount'), BufferLayout.u8('decimals'),,]);
    var data;

    try {
      data = layout.decode(instruction.data);
    } catch (err) {
      throw new Error('invalid instruction; ' + err);
    }

    var amount = data.amount,
        decimals = data.decimals;
    return new ApproveCheckedParams(instruction.keys[0].pubkey, instruction.keys[1].pubkey, instruction.keys[2].pubkey, instruction.keys[3].pubkey, amount, decimals);
  };

  TokenInstruction.decodeMintToChecked = function (instruction) {
    var layout = BufferLayout.struct([BufferLayout.u8('instruction'), uint64('amount'), BufferLayout.u8('decimals'),,]);
    var data;

    try {
      data = layout.decode(instruction.data);
    } catch (err) {
      throw new Error('invalid instruction; ' + err);
    }

    var amount = data.amount,
        decimals = data.decimals;
    return new MintToCheckedParams(instruction.keys[0].pubkey, instruction.keys[1].pubkey, instruction.keys[2].pubkey, amount, decimals);
  };

  TokenInstruction.decodeBurnChecked = function (instruction) {
    var layout = BufferLayout.struct([BufferLayout.u8('instruction'), uint64('amount'), BufferLayout.u8('decimals'),,]);
    var data;

    try {
      data = layout.decode(instruction.data);
    } catch (err) {
      throw new Error('invalid instruction; ' + err);
    }

    var amount = data.amount,
        decimals = data.decimals;
    return new BurnCheckedParams(instruction.keys[0].pubkey, instruction.keys[1].pubkey, instruction.keys[2].pubkey, amount, decimals);
  };

  return TokenInstruction;
}();

var TokenProgram =
/** @class */
function () {
  function TokenProgram() {
    this.programID = 'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA';
  }

  TokenProgram.prototype.parseInstruction = function (instruction) {
    var msg = new Message();
    var it = TokenInstruction.deocdeTokenInstructionType(instruction);
    msg.program = this.programID;
    msg.type = 'instruction';
    msg.inputs = new Map();

    switch (it) {
      case 'InitMint':
        {
          msg.name = 'InitMint';
          var param = TokenInstruction.decodeInitMint(instruction);
          msg.inputs.set('mint', param.mint.toBase58());
          msg.inputs.set('rent', param.rent.toBase58());
          msg.inputs.set('decimals', param.decimals.toString());
          msg.inputs.set('mintAuthority', param.mintAuthority.toBase58());
          msg.inputs.set('option', param.option.toString());
          msg.inputs.set('freezeAuthority', param.freezeAuthority.toBase58());
          break;
        }

      case 'InitAccount':
        {
          msg.name = 'InitAccount';
          var param = TokenInstruction.decodeInitAccount(instruction);
          msg.inputs.set('account', param.account.toBase58());
          msg.inputs.set('mint', param.mint.toBase58());
          msg.inputs.set('owner', param.owner.toBase58());
          msg.inputs.set('rent', param.rent.toBase58());
          break;
        }

      case 'Transfer':
        {
          msg.name = 'Transfer';
          var param = TokenInstruction.decodeTransfer(instruction);
          msg.inputs.set('source', param.source.toBase58());
          msg.inputs.set('destination', param.destination.toBase58());
          msg.inputs.set('amount', param.amount.toString());
          break;
        }

      case 'Approve':
        {
          msg.name = 'Approve';
          var param = TokenInstruction.decodeApprove(instruction);
          msg.inputs.set('account', param.account.toBase58());
          msg.inputs.set('delegate', param.delegate.toBase58());
          msg.inputs.set('amount', param.amount.toString());
          break;
        }

      case 'Revoke':
        {
          msg.name = 'Revoke';
          var param = TokenInstruction.decodeRevoke(instruction);
          msg.inputs.set('account', param.account.toBase58());
          msg.inputs.set('owner', param.owner.toBase58());
          break;
        }

      case 'SetAuthority':
        {
          msg.name = 'SetAuthority';
          var param = TokenInstruction.decodeSetAuthority(instruction);
          msg.inputs.set('account', param.account.toBase58());
          msg.inputs.set('currentAuthority', param.currentAuthority.toBase58());
          msg.inputs.set('authorityType', param.authorityType.toString());
          msg.inputs.set('option', param.option.toString());
          msg.inputs.set('newAuthority', param.newAuthority.toBase58());
          break;
        }

      case 'MintTo':
        {
          msg.name = 'MintTo';
          var param = TokenInstruction.decodeMintTo(instruction);
          msg.inputs.set('mint', param.mint.toBase58());
          msg.inputs.set('dest', param.dest.toBase58());
          msg.inputs.set('authority', param.authority.toBase58());
          msg.inputs.set('amount', param.amount.toString());
          break;
        }

      case 'Burn':
        {
          msg.name = 'Burn';
          var param = TokenInstruction.decodeBurn(instruction);
          msg.inputs.set('account', param.account.toBase58());
          msg.inputs.set('mint', param.mint.toBase58());
          msg.inputs.set('owner', param.owner.toBase58());
          msg.inputs.set('amount', param.amount.toString());
          break;
        }

      case 'CloseAccount':
        {
          msg.name = 'CloseAccount';
          var param = TokenInstruction.decodeCloseAccount(instruction);
          msg.inputs.set('account', param.account.toBase58());
          msg.inputs.set('dest', param.dest.toBase58());
          msg.inputs.set('owner', param.owner.toBase58());
          break;
        }

      case 'FreezeAccount':
        {
          msg.name = 'FreezeAccount';
          var param = TokenInstruction.decodeFreezeAccount(instruction);
          msg.inputs.set('account', param.account.toBase58());
          msg.inputs.set('dest', param.dest.toBase58());
          msg.inputs.set('authority', param.authority.toBase58());
          break;
        }

      case 'ThawAccount':
        {
          msg.name = 'ThawAccount';
          var param = TokenInstruction.decodeThawAccount(instruction);
          msg.inputs.set('account', param.account.toBase58());
          msg.inputs.set('dest', param.dest.toBase58());
          msg.inputs.set('authority', param.authority.toBase58());
          break;
        }

      case 'TransferChecked':
        {
          msg.name = 'TransferChecked';
          var param = TokenInstruction.decodeTransferChecked(instruction);
          msg.inputs.set('source', param.source.toBase58());
          msg.inputs.set('mint', param.mint.toBase58());
          msg.inputs.set('destination', param.destination.toBase58());
          msg.inputs.set('owner', param.owner.toBase58());
          msg.inputs.set('amount', param.amount.toString());
          msg.inputs.set('decimals', param.decimals.toString());
          break;
        }

      case 'ApproveChecked':
        {
          msg.name = 'ApproveChecked';
          var param = TokenInstruction.decodeApproveChecked(instruction);
          msg.inputs.set('account', param.account.toBase58());
          msg.inputs.set('mint', param.mint.toBase58());
          msg.inputs.set('delegate', param.delegate.toBase58());
          msg.inputs.set('owner', param.owner.toBase58());
          msg.inputs.set('amount', param.amount.toString());
          msg.inputs.set('decimals', param.decimals.toString());
          break;
        }

      case 'MintToChecked':
        {
          msg.name = 'MintToChecked';
          var param = TokenInstruction.decodeMintToChecked(instruction);
          msg.inputs.set('mint', param.mint.toBase58());
          msg.inputs.set('dest', param.dest.toBase58());
          msg.inputs.set('authority', param.authority.toBase58());
          msg.inputs.set('amount', param.amount.toString());
          msg.inputs.set('decimals', param.decimals.toString());
          break;
        }

      case 'BurnChecked':
        {
          msg.name = 'BurnChecked';
          var param = TokenInstruction.decodeBurnChecked(instruction);
          msg.inputs.set('account', param.account.toBase58());
          msg.inputs.set('mint', param.mint.toBase58());
          msg.inputs.set('owner', param.owner.toBase58());
          msg.inputs.set('amount', param.amount.toString());
          msg.inputs.set('decimals', param.decimals.toString());
          break;
        }

      default:
        {
          msg.name = "unknown";
          break;
        }
    }

    return msg;
  };

  return TokenProgram;
}();
var plugin$2 = new TokenProgram();

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
    msg.type = 'instruction';
    msg.inputs = new Map();

    switch (it) {
      case 'AdvanceNonceAccount':
        {
          msg.name = 'AdvanceNonceAccount';
          var param = SystemInstruction.decodeNonceAdvance(instruction);
          msg.inputs.set('authorizedPubkey', param.authorizedPubkey.toBase58());
          msg.inputs.set('noncePubkey', param.noncePubkey.toBase58());
          break;
        }

      case 'Allocate':
        {
          msg.name = 'Allocate';
          var param = SystemInstruction.decodeAllocate(instruction);
          msg.inputs.set('accountPubkey', param.accountPubkey.toBase58());
          msg.inputs.set('space', param.space.toString());
          break;
        }

      case 'AllocateWithSeed':
        {
          msg.name = 'AllocateWithSeed';
          var param = SystemInstruction.decodeAllocateWithSeed(instruction);
          msg.inputs.set('accountPubkey', param.accountPubkey.toBase58());
          msg.inputs.set('basePubkey', param.basePubkey.toBase58());
          msg.inputs.set('seed', param.seed);
          msg.inputs.set('space', param.space.toString());
          msg.inputs.set('programId', param.programId.toString());
          break;
        }

      case 'Assign':
        {
          msg.name = 'Assign';
          var param = SystemInstruction.decodeAssign(instruction);
          msg.inputs.set('accountPubkey', param.accountPubkey.toBase58());
          msg.inputs.set('programId', param.programId.toBase58());
          break;
        }

      case 'AssignWithSeed':
        {
          msg.name = 'AssignWithSeed';
          var param = SystemInstruction.decodeAssignWithSeed(instruction);
          msg.inputs.set('accountPubkey', param.accountPubkey.toBase58());
          msg.inputs.set('basePubkey', param.basePubkey.toBase58());
          msg.inputs.set('seed', param.seed);
          msg.inputs.set('programId', param.programId.toBase58());
          break;
        }

      case 'AuthorizeNonceAccount':
        {
          msg.name = 'AuthorizeNonceAccount';
          var param = SystemInstruction.decodeNonceAuthorize(instruction);
          msg.inputs.set('noncePubkey', param.noncePubkey.toBase58());
          msg.inputs.set('authorizedPubkey', param.authorizedPubkey.toBase58());
          msg.inputs.set('newAuthorizedPubkey', param.newAuthorizedPubkey.toBase58());
          break;
        }

      case 'Create':
        {
          msg.name = 'Create';
          var param = SystemInstruction.decodeCreateAccount(instruction);
          msg.inputs.set('fromPubkey', param.fromPubkey.toBase58());
          msg.inputs.set('newAccountPubkey', param.newAccountPubkey.toBase58());
          msg.inputs.set('lamports', param.lamports.toString());
          msg.inputs.set('space', param.space.toString());
          msg.inputs.set('programId', param.programId.toBase58());
          break;
        }

      case 'CreateWithSeed':
        {
          msg.name = 'CreateWithSeed';
          var param = SystemInstruction.decodeCreateWithSeed(instruction);
          msg.inputs.set('fromPubkey', param.fromPubkey.toBase58());
          msg.inputs.set('newAccountPubkey', param.newAccountPubkey.toBase58());
          msg.inputs.set('basePubkey', param.basePubkey.toBase58());
          msg.inputs.set('seed', param.seed);
          msg.inputs.set('lamports', param.lamports.toString());
          msg.inputs.set('space', param.space.toString());
          msg.inputs.set('programId', param.programId.toBase58());
          break;
        }

      case 'InitializeNonceAccount':
        {
          msg.name = 'InitializeNonceAccount';
          var param = SystemInstruction.decodeNonceInitialize(instruction);
          msg.inputs.set('noncePubkey', param.noncePubkey.toBase58());
          msg.inputs.set('authorizedPubkey', param.authorizedPubkey.toBase58());
          break;
        }

      case 'Transfer':
        {
          msg.name = 'Transfer';
          var param = SystemInstruction.decodeTransfer(instruction);
          msg.inputs.set('fromPubkey', param.fromPubkey.toBase58());
          msg.inputs.set('toPubkey', param.toPubkey.toBase58());
          msg.inputs.set('lamports', param.lamports.toString());
          break;
        }

      case 'TransferWithSeed':
        {
          msg.name = 'TransferWithSeed';
          var param = SystemInstruction.decodeTransferWithSeed(instruction);
          msg.inputs.set('fromPubkey', param.fromPubkey.toBase58());
          msg.inputs.set('basePubkey', param.basePubkey.toBase58());
          msg.inputs.set('toPubkey', param.toPubkey.toBase58());
          msg.inputs.set('lamports', param.lamports.toString());
          msg.inputs.set('seed', param.seed);
          msg.inputs.set('programId', param.programId.toBase58());
          break;
        }

      case 'WithdrawNonceAccount':
        {
          msg.name = 'WithdrawNonceAccount';
          var param = SystemInstruction.decodeNonceWithdraw(instruction);
          msg.inputs.set('noncePubkey', param.noncePubkey.toBase58());
          msg.inputs.set('authorizedPubkey', param.authorizedPubkey.toBase58());
          msg.inputs.set('toPubkey', param.toPubkey.toBase58());
          msg.inputs.set('lamports', param.lamports.toString());
          break;
        }

      default:
        {
          msg.name = 'UNKNOWN';
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
  function IParserManager() {
    this.plugins = new Map();
  }

  IParserManager.instance = function () {
    if (!IParserManager._instance) {
      IParserManager._instance = new IParserManager();
    }

    return IParserManager._instance;
  };

  IParserManager.prototype.loadPlugins = function () {
    for (var _i = 0, configPlugins_1 = configPlugins; _i < configPlugins_1.length; _i++) {
      var p = configPlugins_1[_i]; //console.log("IPaser load plugin for ", p.programID)

      this.plugins.set(p.programID, p);
    }
  };

  IParserManager.prototype.parseInstruction = function (programID, instruction) {
    if (!this.plugins.has(programID)) {
      throw Error("no such program's instruction paster");
    }

    var plugin = this.plugins.get(programID);
    console.log('plugin:', plugin);
    return plugin.parseInstruction(instruction);
  };

  return IParserManager;
}();

export { IParserManager, Message };

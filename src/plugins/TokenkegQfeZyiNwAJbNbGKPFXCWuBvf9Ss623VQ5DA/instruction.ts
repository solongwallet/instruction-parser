// @ts-ignore
import BufferLayout from 'buffer-layout';
import * as Layout from './layout';
import { TransactionInstruction, PublicKey } from '@solana/web3.js';


type TodoObject = {
  [index: string]: any;
};

export class InitMintParams {
  constructor(
    public mint: PublicKey,
    public rent: PublicKey,
    public decimals: number,
    public mintAuthority: PublicKey,
    public option: number,
    public freezeAuthority: PublicKey
  ) {
    console.log(
      'todo: ',
      mint,
      rent,
      decimals,
      mintAuthority,
      option,
      freezeAuthority
    );
  }
}

export class InitAccountParmas {
  constructor(
    public account: PublicKey,
    public mint: PublicKey,
    public owner: PublicKey,
    public rent: PublicKey
  ) {
    console.log('todo: ', account, mint, owner, rent);
  }
}

export class TransferParams {
  constructor(
    public source: PublicKey,
    public destination: PublicKey,
    public amount: number,
  ) {
    console.log("todo")
  }
}

export class ApproveParams {
  constructor(
    public account: PublicKey,
    public delegate: PublicKey,
    public amount: number,
  ) {
    console.log("todo")
  }
}

export class RevokeParams {
  constructor(
    public account:PublicKey,
    public owner: PublicKey,
  ) {
    console.log("todo")
  }
}

export class SetAuthorityParams {
  constructor(
    public account: PublicKey,
    public currentAuthority: PublicKey,
    public authorityType: number,
    public option: number,
    public newAuthority: PublicKey,
  ) {
    console.log('todo')
  }
}

export class MintToParams {
  constructor(
   public mint: PublicKey,
   public dest: PublicKey, 
   public authority: PublicKey,
   public amount: number,
  ) {
    console.log("todo")
  }
}

export class BurnParams {
  constructor(
    public account: PublicKey,
    public mint : PublicKey,
    public owner: PublicKey,
    public amount: number,
  ) {
    console.log("todo")
  }
}

export class CloseAccountParams {
  constructor(
    public account: PublicKey,
    public dest: PublicKey,
    public owner: PublicKey,
  ) {
    console.log("todo")
  }
}

export class FreezeAccountParams {
  constructor(
    public account: PublicKey,
    public dest: PublicKey,
    public authority: PublicKey,
  ) {
    console.log("todo")
  }
}

export class ThawAccountParams {
  constructor(
    public account: PublicKey,
    public dest: PublicKey,
    public authority: PublicKey, 
  ) {
    console.log("todo")
  }
}

export class TransferCheckedParams {
  constructor(
    public source:PublicKey,
    public mint: PublicKey,
    public destination: PublicKey,
    public owner: PublicKey,
    public amount: number,
    public decimals: number,
  ) {
    console.log("todo")
  }
}

export class ApproveCheckedParams {
  constructor(
    public account: PublicKey,
    public mint: PublicKey,
    public delegate:PublicKey,
    public owner: PublicKey,
    public amount: number,
    public decimals: number, 
  ) {
    console.log("todo")
  }
}

export class MintToCheckedParams {
  constructor(
    public mint: PublicKey,
    public dest: PublicKey,
    public authority: PublicKey,
    public amount: number,
    public decimals: number,  
  ) {
    console.log("todo")
  }
}

export class BurnCheckedParams {
  constructor(
    public account: PublicKey,
    public mint: PublicKey,
    public owner: PublicKey,
    public amount: number,
    public decimals: number,  
  ) {
    console.log("todo")
  }
}

export class TokenInstruction {
  static deocdeTokenInstructionType(
    instruction: TransactionInstruction
  ): string {
    const layout = BufferLayout.struct([BufferLayout.u8('cmd')]);
    let data: TodoObject;
    try {
      data = layout.decode(instruction.data);
    } catch (err) {
      throw new Error('invalid instruction; ' + err);
    }
    const { cmd } = data;
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
  }

  static decodeInitMint(instruction: TransactionInstruction): InitMintParams {
    const layout = BufferLayout.struct([
      BufferLayout.u8('instruction'),
      BufferLayout.u8('decimals'),
      Layout.publicKey('mintAuthority'),
      BufferLayout.u8('option'),
      Layout.publicKey('freezeAuthority')
    ]);
    let data: TodoObject;
    try {
      data = layout.decode(instruction.data);
    } catch (err) {
      throw new Error('invalid instruction; ' + err);
    }
    const { decimals, mintAuthority, option, freezeAuthority } = data;
    return new InitMintParams(
      instruction.keys[0].pubkey,
      instruction.keys[1].pubkey,
      decimals,
      new PublicKey(mintAuthority),
      option,
      new PublicKey(freezeAuthority)
    );
  }

  static decodeInitAccount(
    instruction: TransactionInstruction
  ): InitAccountParmas {
    return new InitAccountParmas(
      instruction.keys[0].pubkey,
      instruction.keys[1].pubkey,
      instruction.keys[2].pubkey,
      instruction.keys[3].pubkey
    );
  }


  static decodeTransfer(
    instruction: TransactionInstruction
  ):TransferParams  {
    const layout = BufferLayout.struct([
      BufferLayout.u8('instruction'),
      Layout.uint64('amount'),
    ]);
    let data: TodoObject;
    try {
      data = layout.decode(instruction.data);
    } catch (err) {
      throw new Error('invalid instruction; ' + err);
    }
    const { amount} = data; 

    return new TransferParams(
      instruction.keys[0].pubkey,
      instruction.keys[1].pubkey,
      amount);
  }

  static decodeApprove(
    instruction: TransactionInstruction
  ): ApproveParams {
    const layout = BufferLayout.struct([
      BufferLayout.u8('instruction'),
      Layout.uint64('amount'),
    ]);
    let data: TodoObject;
    try {
      data = layout.decode(instruction.data);
    } catch (err) {
      throw new Error('invalid instruction; ' + err);
    }
    const { amount} = data; 

    return new ApproveParams(
      instruction.keys[0].pubkey,
      instruction.keys[1].pubkey,
      amount); 
  }

  static decodeRevoke(
    instruction: TransactionInstruction
  ): RevokeParams {

    return new RevokeParams(
      instruction.keys[0].pubkey,
      instruction.keys[1].pubkey,
    );  
  }

  static decodeSetAuthority(
    instruction: TransactionInstruction
  ): SetAuthorityParams {
    const layout = BufferLayout.struct([
      BufferLayout.u8('instruction'),
      BufferLayout.u8('authorityType'),
      BufferLayout.u8('option'),
      Layout.publicKey('newAuthority'),
    ]);
    let data: TodoObject;
    try {
      data = layout.decode(instruction.data);
    } catch (err) {
      throw new Error('invalid instruction; ' + err);
    }
    const {authorityType,option,newAuthority} = data; 

    return new SetAuthorityParams(
      instruction.keys[0].pubkey,
      instruction.keys[1].pubkey,
      authorityType,
      option,
      newAuthority);  
  }

  static decodeMintTo(
    instruction: TransactionInstruction
  ): MintToParams {
    const layout = BufferLayout.struct([
      BufferLayout.u8('instruction'),
      Layout.uint64('amount'),
    ]);
    let data: TodoObject;
    try {
      data = layout.decode(instruction.data);
    } catch (err) {
      throw new Error('invalid instruction; ' + err);
    }
    const {amount} = data; 

    return new MintToParams(
      instruction.keys[0].pubkey,
      instruction.keys[1].pubkey,
      instruction.keys[2].pubkey,
      amount);   
  }

  static decodeBurn(
    instruction: TransactionInstruction
  ): BurnParams {
    const layout = BufferLayout.struct([
      BufferLayout.u8('instruction'),
      Layout.uint64('amount'),
    ]);
    let data: TodoObject;
    try {
      data = layout.decode(instruction.data);
    } catch (err) {
      throw new Error('invalid instruction; ' + err);
    }
    const {amount} = data; 

    return new BurnParams(
      instruction.keys[0].pubkey,
      instruction.keys[1].pubkey,
      instruction.keys[2].pubkey,
      amount);      
  }


  static decodeCloseAccount(
    instruction: TransactionInstruction
  ):CloseAccountParams  {

    return new CloseAccountParams(
      instruction.keys[0].pubkey,
      instruction.keys[1].pubkey,
      instruction.keys[2].pubkey);   
  }

  static decodeFreezeAccount(
    instruction: TransactionInstruction
  ): FreezeAccountParams {
    return new FreezeAccountParams(
      instruction.keys[0].pubkey,
      instruction.keys[1].pubkey,
      instruction.keys[2].pubkey);   
  }  
  
  static decodeThawAccount(
    instruction: TransactionInstruction
  ): ThawAccountParams  {
    return new ThawAccountParams(
      instruction.keys[0].pubkey,
      instruction.keys[1].pubkey,
      instruction.keys[2].pubkey);    
  }

  static decodeTransferChecked(
    instruction: TransactionInstruction
  ): TransferCheckedParams {
    const layout = BufferLayout.struct([
      BufferLayout.u8('instruction'),
      Layout.uint64('amount'),
      BufferLayout.u8('decimals'),,
    ]);
    let data: TodoObject;
    try {
      data = layout.decode(instruction.data);
    } catch (err) {
      throw new Error('invalid instruction; ' + err);
    }
    const {amount,decimals} = data; 

    return new TransferCheckedParams(
      instruction.keys[0].pubkey,
      instruction.keys[1].pubkey,
      instruction.keys[2].pubkey,
      instruction.keys[3].pubkey,
      amount,
      decimals);   
  }

  static decodeApproveChecked(
    instruction: TransactionInstruction
  ): ApproveCheckedParams {
    const layout = BufferLayout.struct([
      BufferLayout.u8('instruction'),
      Layout.uint64('amount'),
      BufferLayout.u8('decimals'),,
    ]);
    let data: TodoObject;
    try {
      data = layout.decode(instruction.data);
    } catch (err) {
      throw new Error('invalid instruction; ' + err);
    }
    const {amount,decimals} = data; 

    return new ApproveCheckedParams(
      instruction.keys[0].pubkey,
      instruction.keys[1].pubkey,
      instruction.keys[2].pubkey,
      instruction.keys[3].pubkey,
      amount,
      decimals);    
  }

  static decodeMintToChecked(
    instruction: TransactionInstruction
  ): MintToCheckedParams {
    const layout = BufferLayout.struct([
      BufferLayout.u8('instruction'),
      Layout.uint64('amount'),
      BufferLayout.u8('decimals'),,
    ]);
    let data: TodoObject;
    try {
      data = layout.decode(instruction.data);
    } catch (err) {
      throw new Error('invalid instruction; ' + err);
    }
    const {amount,decimals} = data; 

    return new MintToCheckedParams(
      instruction.keys[0].pubkey,
      instruction.keys[1].pubkey,
      instruction.keys[2].pubkey,
      amount,
      decimals);  
  }

  static decodeBurnChecked(
    instruction: TransactionInstruction
  ): BurnCheckedParams {
    const layout = BufferLayout.struct([
      BufferLayout.u8('instruction'),
      Layout.uint64('amount'),
      BufferLayout.u8('decimals'),,
    ]);
    let data: TodoObject;
    try {
      data = layout.decode(instruction.data);
    } catch (err) {
      throw new Error('invalid instruction; ' + err);
    }
    const {amount,decimals} = data; 

    return new BurnCheckedParams(
      instruction.keys[0].pubkey,
      instruction.keys[1].pubkey,
      instruction.keys[2].pubkey,
      amount,
      decimals);   
  }

}
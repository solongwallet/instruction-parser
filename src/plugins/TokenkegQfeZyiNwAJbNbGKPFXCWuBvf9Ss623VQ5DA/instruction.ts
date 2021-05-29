import BufferLayout from 'buffer-layout';
import * as Layout from './layout';
import { TransactionInstruction, PublicKey } from '@solana/web3.js';

export interface TokenInstructionLayout {
  name: string;
  index: number;
  layout: BufferLayout.struct;
}

type TodoObject = {
  [index: string]: any;
};

export function deocdeTokenInstructionType(
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
  }
  return '';
}

export class InitMintParams {
  constructor(
    mint: PublicKey,
    rent: PublicKey,
    decimals: number,
    mintAuthority: PublicKey,
    option: number,
    freezeAuthority: PublicKey
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

export function decodeInitMint(
  instruction: TransactionInstruction
): InitMintParams {
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

export class InitAccountParmas {
  constructor(
    account: PublicKey,
    mint: PublicKey,
    owner: PublicKey,
    rent: PublicKey
  ) {
    console.log('todo: ', account, mint, owner, rent);
  }
}

export function decodeInitAccount(
  instruction: TransactionInstruction
): InitAccountParmas {
  return new InitAccountParmas(
    instruction.keys[0].pubkey,
    instruction.keys[1].pubkey,
    instruction.keys[2].pubkey,
    instruction.keys[3].pubkey
  );
}

// export const TOKEN_INSTRUCTION_LAYOUTS : Map<string, TokenInstructionLayout> =
// {
//   "InitMint":TokenInstructionLayout(
//     index: 0,
//     layout: BufferLayout.struct([
//       BufferLayout.u8('instruction'),
//       BufferLayout.u8('decimals'),
//       Layout.publicKey('mintAuthority'),
//       BufferLayout.u8('option'),
//       Layout.publicKey('freezeAuthority')
//     ])
//   ),
//   InitAccount: {
//     index: 1,
//     layout: BufferLayout.struct([BufferLayout.u8('instruction')])
//   },
//   Transfer: {
//     index: 3,
//     layout: BufferLayout.struct([
//       BufferLayout.u8('instruction'),
//       Layout.uint64('amount')
//     ])
//   },
//   Approve: {
//     index: 4,
//     layout: BufferLayout.struct([
//       BufferLayout.u8('instruction'),
//       Layout.uint64('amount')
//     ])
//   },
//   Revoke: {
//     index: 5,
//     layout: BufferLayout.struct([BufferLayout.u8('instruction')])
//   },
//   SetAuthority: {
//     index: 6,
//     layout: BufferLayout.struct([
//       BufferLayout.u8('instruction'),
//       BufferLayout.u8('authorityType'),
//       BufferLayout.u8('option'),
//       Layout.publicKey('newAuthority')
//     ])
//   },
//   MintTo: {
//     index: 7,
//     layout: BufferLayout.struct([
//       BufferLayout.u8('instruction'),
//       Layout.uint64('amount')
//     ])
//   },
//   Burn: {
//     index: 8,
//     layout: BufferLayout.struct([
//       BufferLayout.u8('instruction'),
//       Layout.uint64('amount')
//     ])
//   },
//   CloseAccount: {
//     index: 9,
//     layout: BufferLayout.struct([BufferLayout.u8('instruction')])
//   },
//   FreezeAccount: {
//     index: 10,
//     layout: BufferLayout.struct([BufferLayout.u8('instruction')])
//   },
//   ThawAccount: {
//     index: 11,
//     layout: BufferLayout.struct([BufferLayout.u8('instruction')])
//   },
//   TransferChecked: {
//     index: 12,
//     layout: BufferLayout.struct([
//       BufferLayout.u8('instruction'),
//       Layout.uint64('amount'),
//       BufferLayout.u8('decimals')
//     ])
//   },
//   ApproveChecked: {
//     index: 13,
//     layout: BufferLayout.struct([
//       BufferLayout.u8('instruction'),
//       Layout.uint64('amount'),
//       BufferLayout.u8('decimals')
//     ])
//   },
//   MintToChecked: {
//     index: 14,
//     layout: BufferLayout.struct([
//       BufferLayout.u8('instruction'),
//       Layout.uint64('amount'),
//       BufferLayout.u8('decimals')
//     ])
//   },
//   BurnChecked: {
//     index: 15,
//     layout: BufferLayout.struct([
//       BufferLayout.u8('instruction'),
//       Layout.uint64('amount'),
//       BufferLayout.u8('decimals')
//     ])
//   }
// };

# 接入教程

假设项目A，已经完成了合约开发，DApp的开发，此时希望在第三方钱包签名的时候，将instuction很明白
的呈现给用户。那么他首先需要fork我们的IParser项目：

[https://github.com/solongwallet/instruction-parser](https://github.com/solongwallet/instruction-parser)

然后clone到本地。会看到项目目录如下：

    ➜  instruction-parser git:(master) ✗ tree -L 1
    .
    ├── CHANGELOG.md
    ├── README.md
    ├── images
    ├── node_modules
    ├── package.json
    ├── rollup.config.dev.js
    ├── rollup.config.js
    ├── scripts
    ├── src
    ├── test
    ├── tsconfig.json
    ├── tutorial.md
    └── yarn.lock

其中只要关注src目录就可以了：

    ➜  src git:(master) ✗ tree -L 2
    .
    ├── config.ts
    ├── index.ts
    ├── iparser.ts
    ├── iparserManager.ts
    ├── iparserPlugin.ts
    └── plugins
        ├── 11111111111111111111111111111111
        ├── 4ckmDgGdxQoPDLUkDT3vHgSAkzA3QRdNq5ywwY4sUSJn
        ├── 9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin
        ├── ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL
        ├── BJ3jrUzddfuSrZHXSCxMUUQsjKEyLmuuyZebkcaFp2fg
        ├── EUqojwWA2rd19FZrzeBncJsm38Jm1hEhE3zsmX3bRc2o
        └── TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA

这里项目方只需要关注plugins目录就可以了。在这个目录下建立一个以自己合约地址为目录名的目录。
然后编写一个"iparserPlugin"中定义的接口就可以了。然后向源项目提交PR请求，待IParser合入后，
其他接入了IParser的钱包或者浏览器就可以正常的显示这个合约的所有动作了。

## IParserPlugin
首先来看需要实现的接口：

    export interface IParserPlugin {
        readonly programID: string;

        parseInstruction(instruction: TransactionInstruction): Message;
    }

其实只要实现一个方法就可以了，就是` parseInstruction(instruction: TransactionInstruction): Message;`
传入的是Web3.js里面的"TransactionInstruction",解析得到的是：

    export class Message {
        type: string;
        name: string;
        program: string;
        inputs: Map<string, string>;
    }

这个结果就对应了前面"README.md"中的JSON结构体：


    {
        "type": "instruction", 
        "name": "CreateAccount", 
        "program": "11111111111111111111111111111111", 
        "inputs": [
            {
                "name": "fromPubkey", 
                "value": "EBA5RN8pZuGnTGfUiKcLoU7Vzf8kyXurmpRTu5k7jb7x"
            }, 
            {
                "name": "newAccountPubkey", 
                "value": "EBA5RN8pZuGnTGfUiKcLoU7Vzf8kyXurmpRTu5k7jb7x"
            }, 
            {
                "name": "lamports", 
                "value": "128"
            }, 
            {
                "name": "space", 
                "value": "128"
            }
        ]
    }

类似这样的JSON表达。所以也就是需要项目方这边将instruction中的data和keys部分转换成你希望
展示的K-V的结构。

## 实现方式
具体在实现的时候，在plugins目录下，建立一个以自己合约地址为目录名的目录。比如System合约
"11111111111111111111111111111111"目录，然后我们再里面建立一个plugin.ts的文件。这里
需要注意的是，文件名必须得是plugin.ts，后续会有脚本从这个文件中import一个"plugin"的变量，
这个变量就是实现了上面IParserPlugin的一个对象实例。

所以首先在这个目录下写一个plugin.ts文件，然后在这个文件中定义一个实现了IParserPlugin的类：

    export class SystemProgram implements IParserPlugin {
        programID = '11111111111111111111111111111111';
        parseInstruction(instruction: TransactionInstruction): Message {
            const msg = new Message();
            ...
            return msg;
        }
    }

这里需要将programID设置为和你的合约地址一样的值，也就是目录的名字。

然后就是实现 `parseInstruction(instruction: TransactionInstruction): Message;`方法。

在最后，需要实例化一个这个类的对象，并export出来，export的变量必须为plgin：

    export const plugin: SystemProgram = new SystemProgram()

所以总结起来几个简单的步骤就可以了：

* S1: 在plugin目录下添加一个文件夹，名字为合约地址
* S2: 在这个目录下，添加一个plugin.ts的文件，并定义好项目的实现 IParserPlugin的类
* S3: 实例化该对象，并exprot出plugin变量

这样就可以了

## 瞬间接入System合约
这里我们以System合约为例（IParser已经内置了System/Token/Serum合约，可以一一查看当做示例）
因为System的JS SDK，已经提供了`decodeXxxx`的接口，所以我们可以直接用这些接口。
在项目方，为了展示给自己用户看一些信息的时候，也会自己实现一些decode如同System合约一样，或者
可能使用了Anchor这样的工具，那么可以直接使用这些工具：

    const it = SystemInstruction.decodeInstructionType(instruction);
    msg.program = this.programID;
    msg.type = 'instruction';
    msg.inputs = new Map<string, string>();
    switch (it) {
      case 'AdvanceNonceAccount': {
        msg.name = 'AdvanceNonceAccount';
        const param = SystemInstruction.decodeNonceAdvance(instruction);
        msg.inputs.set('authorizedPubkey', param.authorizedPubkey.toBase58());
        msg.inputs.set('noncePubkey', param.noncePubkey.toBase58());
        break;
      }
      ...
    }

首先通过System SDK提供的`SystemInstruction.decodeInstructionType`得到这是哪个Instruction，
根据类型，再做对应的解析，比如 `SystemInstruction.decodeNonceAdvance(instruction)`解析
一个nonceAdvance的指令。

然后我们定义一个Message对象,并设置其inputs:

    msg.inputs = new Map<string, string>();

然后将要展示的字段通过map的set的接口一一设置进去：

    msg.inputs.set('noncePubkey', param.noncePubkey.toBase58());

这样就完成了功能了。

可以将这个流程当成一个模板。然后只要针对自己的项目来实现各种Decode方法就好了。实现过程
可以参考plugins/TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA目录下的instruction.ts
的示例。
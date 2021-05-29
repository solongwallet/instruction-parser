// Jest 测试工具：https://www.jestjs.cn/

// @ts-ignore
import { getBlockFlow, getEqualQueueArgsCompared } from '../src/helper/equal';
// @ts-ignore
import { getFlattenTree } from '../src/helper/xmlStreamHandle';
// @ts-ignore
import { muti_value_args, muti_statement_1, muti_statement_2, muti_statement_3 } from './_mock_/block_tobe_flatten';

import {
    diff_args_1,
    diff_args_2,
    diff_args_3,
    diff_args_4
    // @ts-ignore
} from './_mock_/arg_tobe_judge';

// 构造模拟数据
const testCase_getBlockFlow = [
    {
        desc: '测试执行流：包含一个 statement',
        block: muti_value_args,
        expect: [5, 2],
        log: false,
    },
    {
        desc: '测试执行流：包含多个 statement + if',
        block: muti_statement_1,
        expect: [2, 4, 1],
        log: false,
    },
    {
        desc: '测试执行流：包含多个 statement + if_else',
        block: muti_statement_2,
        expect: [2, 1, 2],
        log: false,
    },
    {
        desc: '测试执行流：包含多层级 statement + if_else',
        block: muti_statement_3,
        expect: [3,3,1,1, 2,1],
        log: false
    }
];

describe('测试集 1', function () {
    testCase_getBlockFlow.forEach(tc => {
        it(`测试用例: getBlockFlow ${tc}`, () => {
            const flow = getFlattenTree(tc.block);
            const result = getBlockFlow(flow);
            tc.log && console.warn(result);
            const received = result.map(arr => arr.length);
            expect(JSON.stringify(received)).toBe(JSON.stringify(tc.expect));
        })        
    })
});


describe('测试集 2', function () {
    const args_tobe_judge = [
        diff_args_1, 
        diff_args_2, 
        diff_args_3, 
        diff_args_4
    ];
    args_tobe_judge.forEach(tree => {
        it(`测试用例: xml 基于 block 扁平化 getEqualQueueArgsCompared ==> ${tree.desc}:`, () => {
            // @ts-ignore
            const result = getEqualQueueArgsCompared(tree.expect, tree.actual, tree.ignoreArgs);
            if (tree.log) {
                // console.log(JSON.stringify(result));
                // console.log(result);
            }
            expect(JSON.stringify(result)).toBe(JSON.stringify(tree.result));
        })
    })
});
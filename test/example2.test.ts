
// @ts-ignore
import AssertEngine from '../src/index';
import {
    flag_2_bund_compose,
    flag_2_disorder_compose
    // @ts-ignore
} from './_mock_/xml_flag_2';

describe('测试集', () => {
    const AE = new AssertEngine();
    // 静态判定 mimeType: 'xml'
    AE.setConfig({ flag: 2, mimeType: 'xml' });
    for(const tc of flag_2_bund_compose) {
        it(`测试用例: assert xml ${tc.desc}`, async () => {
            const res = await AE.assert([tc.expect], tc.actual);
            if(tc.log) {
                console.warn(tc.desc, '==>', res);
                console.warn('\n expectAt ==>', res.msg.expectAt);
            }
            expect(res.result).toBe(tc.isPass);
        })
    }

    for (const tc of flag_2_disorder_compose) {
        it(`测试用例: assert xml ${tc.desc}`, async () => {
            const res = await AE.assert([tc.expect], tc.actual);
            tc.log && console.warn(tc.desc, '==>', res);
            expect(res.result).toBe(tc.isPass);
        })
    }
});
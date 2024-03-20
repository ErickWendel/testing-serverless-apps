import {
    describe,
    it,
    expect,
    jest
} from '@jest/globals'

import { S3 } from './../../src/factory.js'
import { main } from './../../src/index.js'

describe('Unit Tests', () => {

    it('it should return an array with a S3 Bucket', async () => {
        const myBuckets = [
            {
                Name: "dvds-piratas001",
                CreationDate: '2024-03-20T20:32:13.000Z'
            },
            {
                Name: "foto-de-familia001",
                CreationDate: '2024-03-20T20:32:13.000Z'
            },
        ]


        jest.spyOn(S3, 'listBuckets').mockResolvedValue({
            Buckets: myBuckets
        })

        const response = await main()
        const { allBuckets: { Buckets } } = JSON.parse(response.body)

        expect(S3.listBuckets).toBeCalledTimes(1)

        expect(Buckets).toStrictEqual(myBuckets)
        expect(response.statusCode).toStrictEqual(200)
    })
})
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

        const S3Mock = {
            listBuckets: jest.fn().mockReturnThis(),
            promise: jest.fn().mockResolvedValue({
                Buckets: myBuckets
            })
        }

        jest.spyOn(S3, 'listBuckets').mockReturnValue(S3Mock)


        const response = await main()
        const { allBuckets: { Buckets } } = JSON.parse(response.body)

        expect(S3.listBuckets).toBeCalledTimes(1)
        expect(S3.listBuckets().promise).toBeCalledTimes(1)

        expect(Buckets).toStrictEqual(myBuckets)
        expect(response.statusCode).toStrictEqual(201)
    })
})
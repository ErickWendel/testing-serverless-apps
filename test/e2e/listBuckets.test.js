import {
  describe,
  it,
  expect,
  beforeAll,
  afterAll
} from '@jest/globals'

import { S3 } from './../../src/factory.js'
import { main } from './../../src/index.js'

describe('Testing AWS Servicess offline with LocalStack', () => {
  const bucketConfig = {
    Bucket: "test2"
  }

  beforeAll(async () => {
    await S3.createBucket(bucketConfig)
  })

  afterAll(async () => {
    await S3.deleteBucket(bucketConfig)
  })

  it('it should return an array with a S3 Bucket', async () => {
    const expected = bucketConfig.Bucket
    const response = await main()
    const { allBuckets: { Buckets } } = JSON.parse(response.body)
    const { Name } = Buckets.find(({ Name }) => Name === expected)
    expect(Name).toStrictEqual(expected)
    expect(response.statusCode).toStrictEqual(200)
  })
})
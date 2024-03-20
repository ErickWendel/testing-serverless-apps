import { S3Client, CreateBucketCommand, ListBucketsCommand, DeleteBucketCommand } from '@aws-sdk/client-s3'

const s3config = {
  forcePathStyle: true,
  region: "us-east-1",
}
const isLocal = process.env.IS_OFFLINE

if (isLocal) {
  const host = process.env.LOCALSTACK_HOST || "localhost"
  s3config.endpoint = `http://${host}:4566`
}

const s3Client = new S3Client(s3config)
const S3 = {
  /** @param {ListBucketsCommandInput} args */
  listBuckets: (args) => {
    return s3Client.send(new ListBucketsCommand(args))
  },
  createBucket: (args) => {
    return s3Client.send(new CreateBucketCommand(args))
  },

  deleteBucket: (args) => {
    return s3Client.send(new DeleteBucketCommand(args))
  }
}

export {
  S3
}

import AWS from 'aws-sdk'

const s3config = {
  s3ForcePathStyle: true
}
const isLocal = process.env.IS_OFFLINE


if(isLocal) {
  const host = process.env.LOCALSTACK_HOST || "localhost"
  s3config.endpoint = new AWS.Endpoint(
    `http://${host}:4566`
  )
}

const S3 = new AWS.S3(s3config)

export {
  S3
}

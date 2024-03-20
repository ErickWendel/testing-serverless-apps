"use strict";

import { S3 } from "./factory.js"
 async function main(event) {
  const allBuckets = await S3.listBuckets()
  console.log('found', allBuckets)

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        allBuckets
      },
      null,
      2
    ),
  };
};
export { main }
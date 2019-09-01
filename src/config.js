export default {
  MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "us-east-2",
      BUCKET: "notes-app-uploads-prac"
    },
    apiGateway: {
      REGION: "us-east-2",
      URL: "https://5700az62ee.execute-api.us-east-2.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-2",
      USER_POOL_ID: "us-east-2_9cUlIcteh",
      APP_CLIENT_ID: "7ppkblqgpkt1bbr4si9dec9oqj",
      IDENTITY_POOL_ID: "us-east-2:48efcf81-6dc8-42cd-ad0e-52f0879ee5cd"
    }
  };
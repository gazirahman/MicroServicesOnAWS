const cognitoSettings = {
  REGION: "us-east-1",
  USER_POOL_ID: "us-east-1_WIe3qsWEA",
  APP_CLIENT_ID: "1tsljmr746rp8iqf5peunbi8es",
  IDENTITY_POOL_ID: "us-east-1:b867be39-ae3e-4d97-a4c5-1d85c9a59b7d",
}

const dev = {
  cognito: cognitoSettings,
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://hnh4krmcki.execute-api.us-east-1.amazonaws.com/dev"
  },
  s3: {
    BUCKET: "gaziphotosapp-dev",
    REGION: "us-east-1",
  }
}

const prod =  {
  cognito: cognitoSettings,
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://ktpak548f2.execute-api.us-east-1.amazonaws.com/prod",
  },
  s3: {
    BUCKET: "gaziphotosapp",
    REGION: "us-east-1",
  }
}

export const APINAME="photos"

export default process.env.NODE_ENV === "development" ? dev : prod;

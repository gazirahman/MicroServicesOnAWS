
# Put in your profile name here.  It might be that you want to use the "default" profile.
# see your profiles in ~/.aws/credentials
# if you don't have credentials set in ~/.aws/credentials you can also put in 
# access_key = "...."
# secret_key = "...."
# you can also use environment variables: AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_DEFAULT_REGION
# more details are found here: 
# https://www.terraform.io/docs/providers/aws/index.html
# select the region you want to perform this operation in. 
provider "aws" {
  profile = "photos" 
  region = "us-east-1"
}

resource "aws_dynamodb_table" "dynamoUsers" {
  name = "photoUsers"
  read_capacity = 5
  write_capacity = 5
  hash_key = "id"
  
  attribute {
    name = "id"
    type = "S"
  }
}

resource "aws_dynamodb_table" "devDynamoUsers" {
  name = "devPhotoUsers"
  read_capacity = 5
  write_capacity = 5
  hash_key = "id"
  
  attribute {
    name = "id"
    type = "S"
  }
}

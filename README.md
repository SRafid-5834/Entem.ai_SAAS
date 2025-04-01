# Entem.ai

> Entem.ai is a full-stack SAAS web application using its pre-trained AI model boasting multiple modalities, to accept a video as input and detect the sentiments and emotions in it. Entem will parse the video file and go through all video and audio frames, effectively extracting every single utterance. It will then run inference on the data and produce the sentiment and emotions for the user's video.

![entem main](https://github.com/user-attachments/assets/3b3a0ee2-55f6-497d-bf36-0a79d7bdc7a0)

## Setup

Follow these steps to install and set up the project:

### Installation

1. Clone the repository

```bash
git clone https://github.com/SRafid-5834/Entem.ai_SaaS.git
cd Entem.ai_SaaS
```

2. Install dependencies

```
npm install
```

3. Configure environment variables in .env:

```
DATABASE_URL="file:./db.sqlite"

AUTH_SECRET="your-auth-secret"
AWS_REGION="your-aws-region"
AWS_ACCESS_KEY_ID="your-access-key"
AWS_SECRET_ACCESS_KEY="your-secret-key"
AWS_INFERENCE_BUCKET="your-bucket-arn"
AWS_ENDPOINT_NAME="your-endpoint-name"
```

4. Initialize the database:

```
npm run db:generate
npm run db:push
```

## Running the app

### Development

```
npm run dev
```

### Production

```
npm run build
npm start
```

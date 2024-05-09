# PDF-GPT: Vector Search for Documents

## Description

PDF-GPT is an interactive application that leverages the power of AI to search through PDF documents. The application uses a chat interface, allowing users to ask questions about the content of the PDFs. The AI model then retrieves relevant documents from a Pinecone vector store, providing users with accurate and contextually relevant responses.

The application also includes features for user feedback, with like/dislike buttons for each AI response and a feedback window for users to provide more detailed input. This feedback is used to continuously improve the AI's performance.

Built with React and Next.js, this application showcases the potential of AI in enhancing information retrieval and user interaction.

## Challenges and Difficulties

While developing this application, I faced several challenges and difficulties:

1. **Planning and Architecture:** Figuring out the architecture of the application was the first challenge. I researched various methodologies and drew a framework for the application.

![D2DA421B-0D1A-46D9-AFE5-1BD26E04E75C](https://github.com/Kamran433/PDF-GPT/assets/102954239/9bf657dd-7db4-48e2-ac29-00d8795a9c85)


2. **Getting API Keys:** Getting the API keys for ChatGPT and Pinecone was another challenge. While it was relatively easy to get access to Pinecone's index names, environment name, and API key, getting free tokens or credits to use the ChatGPT API was difficult. I could only test with a limited amount of credit left in my original ChatGPT account.

3. **Choosing Libraries:** Deciding on which libraries to use was another task. I decided to use Langchain and OpenAI's ChatGPT to make the website more interactive.

4. **Designing the UI:** I wanted to create a good user interface, so I researched designs and patterns and came up with a UI design.

![1A277FF0-08CF-4ACB-9FD6-86AF3ECA4282](https://github.com/Kamran433/PDF-GPT/assets/102954239/ee4017cd-adea-47d0-a9fb-87b41dbeb05f)


5. **Implementing Features:** Implementing the like/dislike and copy buttons for the prompts was a bit difficult.

6. **Time Management:** My exams were going on at the same time, so managing time was a real challenge. Due to time constraints, I couldn't completely develop a method for the model to learn from feedbacks, and I couldn't install voice overs for transcribing text from voices.

Despite these challenges, I was able to create this application and learned a lot in the process.

**If you run into errors, please review the troubleshooting section further down this page.**

Prelude: Please make sure you have already downloaded node on your system and the version is 18 or greater.

## Development

1. Install packages

First run `npm install yarn -g` to install yarn globally (if you haven't already).

Then run:

```
npm install yarn
```

After installation, you should now see a `node_modules` folder.

2. Set up your `.env` file

Your `.env` file should look like this:

```
OPENAI_API_KEY=

PINECONE_API_KEY=
PINECONE_ENVIRONMENT=

PINECONE_INDEX_NAME=

```

- Visit [openai](https://help.openai.com/en/articles/4936850-where-do-i-find-my-secret-api-key) to retrieve API keys and insert into your `.env` file.
- Visit [pinecone](https://pinecone.io/) to create and retrieve your API keys, and also retrieve your environment and index name from the dashboard.

3. In the `config` folder, replace the `PINECONE_NAME_SPACE` with a `namespace` where you'd like to store your embeddings on Pinecone when you run `npm run ingest`. This namespace will later be used for queries and retrieval.

4. In `utils/makechain.ts` chain change the `QA_PROMPT` for your own usecase. Change `modelName` in `new OpenAI` to `gpt-4`, if you have access to `gpt-4` api. Please verify outside this repo that you have access to `gpt-4` api, otherwise the application will not work.

## Convert your PDF files to embeddings

**This repo can load multiple PDF files**

1. Inside `docs` folder, add your pdf files or folders that contain pdf files.

2. Run the script `npm run ingest` to 'ingest' and embed your docs. If you run into errors troubleshoot below.

3. Check Pinecone dashboard to verify your namespace and vectors have been added.

## Run the app

Once you've verified that the embeddings and content have been successfully added to your Pinecone, you can run the app `npm run dev` to launch the local dev environment, and then type a question in the chat interface.

## Troubleshooting

In general, keep an eye out in the `issues` and `discussions` section of this repo for solutions.

**General errors**

- Make sure you're running the latest Node version. Run `node -v`
- Try a different PDF or convert your PDF to text first. It's possible your PDF is corrupted, scanned, or requires OCR to convert to text.
- `Console.log` the `env` variables and make sure they are exposed.
- Make sure you're using the same versions of LangChain and Pinecone as this repo.
- Check that you've created an `.env` file that contains your valid (and working) API keys, environment and index name.
- If you change `modelName` in `OpenAI`, make sure you have access to the api for the appropriate model.
- Make sure you have enough OpenAI credits and a valid card on your billings account.
- Check that you don't have multiple OPENAPI keys in your global environment. If you do, the local `env` file from the project will be overwritten by systems `env` variable.
- Try to hard code your API keys into the `process.env` variables if there are still issues.

**Pinecone errors**

- Make sure your pinecone dashboard `environment` and `index` matches the one in the `pinecone.ts` and `.env` files.
- Check that you've set the vector dimensions to `1536`.
- Make sure your pinecone namespace is in lowercase.
- Pinecone indexes of users on the Starter(free) plan are deleted after 7 days of inactivity. To prevent this, send an API request to Pinecone to reset the counter before 7 days.
- Retry from scratch with a new Pinecone project, index, and cloned repo.

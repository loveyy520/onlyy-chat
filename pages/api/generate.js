import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
    console.log(req.body)
    if (!configuration.apiKey) {
      res.status(500).json({
        error: {
          message:
            'OpenAI API key not configured, please follow instructions in README.md'
        }
      })
      return
    }

    try {
      // const completion = await openai.createCompletion(
      const completion = await openai.createChatCompletion(
        {
          model: 'gpt-3.5-turbo',
          // prompt: generatePrompt(animal),
          // temperature: 0.6
          messages: [
            {
              role: 'system',
              content: process.env.CHARACTER_DESIGN
            },
            // {"role": "user", "content": "Who won the world series in 2020?"},
            // {"role": "assistant", "content": "The Los Angeles Dodgers won the World Series in 2020."},
            // { role: 'user', content: req.body.animal }
            ...req.body
          ]
        }
        // {
        //   proxy: {
        //     host: '127.0.0.1',
        //     port: 7890
        //   }
        // }
      )
      console.log('comp:', completion.data.choices[0].message.content)
      res
        .status(200)
        .json({ result: completion.data.choices[0].message.content })
    } catch (error) {
      // Consider adjusting the error handling logic for your use case
      if (error.response) {
        console.error(error.response.status, error.response.data)
        res.status(error.response.status).json(error.response.data)
      } else {
        console.error(`Error with OpenAI API request: ${error.message}`)
        res.status(500).json({
          error: {
            message: 'An error occurred during your request.'
          }
        })
      }
    }
}

function generatePrompt(animal) {
  const capitalizedAnimal =
    animal[0].toUpperCase() + animal.slice(1).toLowerCase();
  return `Suggest three names for an animal that is a superhero.

Animal: Cat
Names: Captain Sharpclaw, Agent Fluffball, The Incredible Feline
Animal: Dog
Names: Ruff the Protector, Wonder Canine, Sir Barks-a-Lot
Animal: ${capitalizedAnimal}
Names:`;
}

import { FlashCard } from '@/types/flashcard';

export const flashcards = [
  {
    question: 'What is Supervised Learning?',
    answer:
      'A type of machine learning where the model is trained on labeled data.',
    category: 'Core AI Concepts',
  },
  {
    question: 'What is Unsupervised Learning?',
    answer:
      'A type of machine learning that deals with unlabeled data to find hidden patterns.',
    category: 'Core AI Concepts',
  },
  {
    question: 'What is Reinforcement Learning?',
    answer:
      'A type of learning where an agent learns to make decisions by performing actions and receiving rewards.',
    category: 'Core AI Concepts',
  },
  {
    question: 'What is Transfer Learning?',
    answer:
      'Applying knowledge gained in one domain to different but related domains.',
    category: 'Core AI Concepts',
  },
  {
    question: 'What is Semi-supervised Learning?',
    answer:
      'Combines a small amount of labeled data with a large amount of unlabeled data.',
    category: 'Core AI Concepts',
  },
  {
    question: 'What are Generative Adversarial Networks (GANs)?',
    answer:
      'A type of neural network architecture where two networks (generator and discriminator) are trained together.',
    category: 'Core AI Concepts',
  },
  {
    question: 'What are Convolutional Neural Networks (CNNs)?',
    answer: 'A type of deep neural network commonly used in image recognition.',
    category: 'Core AI Concepts',
  },
  {
    question: 'What are Recurrent Neural Networks (RNNs)?',
    answer:
      'A class of neural networks that are particularly effective for sequential data.',
    category: 'Core AI Concepts',
  },
  {
    question: 'What is Long Short-Term Memory (LSTM)?',
    answer:
      'A type of RNN that can learn order dependence in sequence prediction problems.',
    category: 'Core AI Concepts',
  },
  {
    question: 'What are Autoencoders?',
    answer: 'A type of neural network used to learn efficient codings of data.',
    category: 'Core AI Concepts',
  },
  {
    question: 'What is Support Vector Machines (SVM)?',
    answer:
      'A supervised learning model used for classification and regression analysis.',
    category: 'Core AI Concepts',
  },
  {
    question: 'What is K-Nearest Neighbors (KNN)?',
    answer: 'A simple, instance-based learning algorithm.',
    category: 'Core AI Concepts',
  },
  {
    question: 'What are Decision Trees?',
    answer:
      'A model that makes decisions based on asking a series of yes/no questions.',
    category: 'Core AI Concepts',
  },
  {
    question: 'What is Random Forest?',
    answer:
      'An ensemble learning method that constructs a multitude of decision trees.',
    category: 'Core AI Concepts',
  },
  {
    question: 'What is Gradient Boosting?',
    answer:
      'An ensemble technique that builds models sequentially to correct errors from previous models.',
    category: 'Core AI Concepts',
  },
  {
    question: 'What is Dimensionality Reduction?',
    answer:
      'Techniques like PCA or t-SNE that reduce the number of random variables under consideration.',
    category: 'Core AI Concepts',
  },
  {
    question: 'What is Feature Engineering?',
    answer:
      'The process of using domain knowledge to select input variables that make machine learning algorithms work better.',
    category: 'Core AI Concepts',
  },
  {
    question: 'What is Overfitting?',
    answer:
      'When a model performs well on training data but poorly on unseen data due to being too complex.',
    category: 'Core AI Concepts',
  },
  {
    question: 'What is Underfitting?',
    answer:
      'When a model is too simple and fails to capture the underlying trend in the data.',
    category: 'Core AI Concepts',
  },
  {
    question: 'What is the Bias-Variance Tradeoff?',
    answer:
      'A property of models where increasing bias reduces variance and vice versa.',
    category: 'Core AI Concepts',
  },
  {
    question: 'What is Data Augmentation?',
    answer:
      'Techniques to increase the size of the training dataset without actually collecting new data.',
    category: 'AI in Data Handling',
  },
  {
    question: 'What is Data Normalization?',
    answer:
      'The process of organizing data to reduce redundancy and improve data integrity.',
    category: 'AI in Data Handling',
  },
  {
    question: 'What is Feature Scaling?',
    answer:
      'A method used to normalize the range of independent variables or features of data.',
    category: 'AI in Data Handling',
  },
  {
    question: 'What is Synthetic Data?',
    answer:
      'Data that is artificially generated rather than obtained by direct measurement.',
    category: 'AI in Data Handling',
  },
  {
    question: 'What is Data Wrangling?',
    answer:
      'The process of cleaning and unifying complex data sets for easy access and analysis.',
    category: 'AI in Data Handling',
  },
  {
    question: 'What is a Data Lake?',
    answer:
      'A centralized repository to store all structured and unstructured data at any scale.',
    category: 'AI in Data Handling',
  },
  {
    question: 'What is a Data Warehouse?',
    answer:
      'A system used for reporting and data analysis, acting as a central repository of integrated data.',
    category: 'AI in Data Handling',
  },
  {
    question: 'What is Data Governance?',
    answer:
      'The management of the availability, usability, integrity, and security of data.',
    category: 'AI in Data Handling',
  },
  {
    question: 'What is Data Integrity?',
    answer:
      'The accuracy, consistency, and reliability of data over its lifecycle.',
    category: 'AI in Data Handling',
  },
  {
    question: 'What is Data Fusion?',
    answer:
      'The integration of multiple data sources to produce more consistent, accurate, and useful information.',
    category: 'AI in Data Handling',
  },
  {
    question: 'What are Word Embeddings?',
    answer:
      'A type of word representation that allows words to be represented as vectors in a continuous vector space.',
    category: 'AI in Natural Language',
  },
  {
    question:
      'What is BERT (Bidirectional Encoder Representations from Transformers)?',
    answer:
      'A transformer-based model designed to understand the context of a word in search queries.',
    category: 'AI in Natural Language',
  },
  {
    question: 'What is GPT (Generative Pre-trained Transformer)?',
    answer: 'A type of transformer model used for generating text.',
    category: 'AI in Natural Language',
  },
  {
    question: 'What is Tokenization?',
    answer:
      'The process of breaking text into smaller pieces, such as words or phrases.',
    category: 'AI in Natural Language',
  },
  {
    question: 'What is Text Classification?',
    answer: 'The process of assigning categories to text.',
    category: 'AI in Natural Language',
  },
  {
    question: 'What is Named Entity Recognition (NER)?',
    answer:
      'The process of locating and classifying named entities mentioned in unstructured text into predefined categories.',
    category: 'AI in Natural Language',
  },
  {
    question: 'What is Sentiment Analysis?',
    answer:
      'The use of NLP to determine whether data is positive, negative, or neutral.',
    category: 'AI in Natural Language',
  },
  {
    question: 'What is Speech Recognition?',
    answer: 'The process of converting spoken language into text.',
    category: 'AI in Natural Language',
  },
  {
    question: 'What are Language Models?',
    answer:
      'Models that can predict the next word in a sequence, used in applications like text generation.',
    category: 'AI in Natural Language',
  },
  {
    question: 'What is Machine Translation?',
    answer:
      'The process of using software to translate text or speech from one language to another.',
    category: 'AI in Natural Language',
  },
  {
    question: 'What is Robotics?',
    answer: 'The design, construction, operation, and use of robots.',
    category: 'AI in Robotics and Automation',
  },
  {
    question: 'What are Autonomous Systems?',
    answer: 'Systems that can perform tasks without human intervention.',
    category: 'AI in Robotics and Automation',
  },
  {
    question: 'What is Swarm Intelligence?',
    answer:
      'The collective behavior of decentralized, self-organized systems, typically made up of simple agents.',
    category: 'AI in Robotics and Automation',
  },
  {
    question: 'What is Industrial Automation?',
    answer:
      'The use of control systems, such as computers or robots, to handle different processes in an industry.',
    category: 'AI in Robotics and Automation',
  },
  {
    question: 'What is Process Automation?',
    answer: 'The use of technology to automate complex business processes.',
    category: 'AI in Robotics and Automation',
  },
  {
    question: 'What are Self-driving Cars?',
    answer:
      'Autonomous vehicles that are capable of sensing their environment and moving safely with little or no human input.',
    category: 'AI in Robotics and Automation',
  },
  {
    question: 'What are Collaborative Robots (Cobots)?',
    answer:
      'Robots intended to physically interact with humans in a shared workspace.',
    category: 'AI in Robotics and Automation',
  },
  {
    question: 'What are Drones (UAVs)?',
    answer:
      'Unmanned aerial vehicles used in various applications, from military to commercial uses.',
    category: 'AI in Robotics and Automation',
  },
  {
    question: 'What are Drones For? (UAVs)?',
    answer:
      'Unmanned aerial vehicles used in various applications, from military to commercial uses.',
    category: 'AI in Robotics and Automation',
  },
  {
    question: 'Why do we use are Drones? (UAVs)?',
    answer:
      'Unmanned aerial vehicles used in various applications, from military to commercial uses.',
    category: 'AI in Robotics and Automation',
  },
];

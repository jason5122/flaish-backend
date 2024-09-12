import { FlashCard } from "@/types/flashcard";

export const flashcards: FlashCard[] = [
  {
    category: "Machine Learning",
    question: "What is supervised learning?",
    answer:
      "Supervised learning is a type of machine learning where the model is trained on labeled data. The model learns to predict the output from the input based on this labeled data.",
  },
  {
    category: "Machine Learning",
    question: "What is a neural network?",
    answer:
      "A neural network is a computational model inspired by the human brain. It consists of layers of interconnected nodes (neurons) that can learn from data through backpropagation.",
  },
  {
    category: "Machine Learning",
    question: "What is overfitting in machine learning?",
    answer:
      "Overfitting occurs when a machine learning model learns not only the underlying pattern but also the noise in the training data, leading to poor generalization on unseen data.",
  },
  {
    category: "Natural Language Processing",
    question: "What is tokenization in NLP?",
    answer:
      "Tokenization is the process of breaking text into smaller units, called tokens, such as words, subwords, or characters, that are used as input for NLP models.",
  },
  {
    category: "Natural Language Processing",
    question: "What is word embedding?",
    answer:
      "Word embedding is a representation of text where words with similar meanings have a similar representation in a vector space. Popular methods include Word2Vec and GloVe.",
  },
  {
    category: "Natural Language Processing",
    question: "What is BERT in NLP?",
    answer:
      "BERT (Bidirectional Encoder Representations from Transformers) is a pre-trained transformer model designed for a wide variety of NLP tasks such as text classification, translation, and question answering.",
  },
  {
    category: "Computer Vision",
    question: "What is convolution in the context of CNNs?",
    answer:
      "In a Convolutional Neural Network (CNN), convolution is the process of applying filters to the input image to extract features such as edges, textures, and patterns.",
  },
  {
    category: "Computer Vision",
    question: "What is the purpose of pooling layers in CNNs?",
    answer:
      "Pooling layers reduce the spatial dimensions of the input, helping the network become less sensitive to variations in the input and reducing computational cost.",
  },
  {
    category: "Computer Vision",
    question:
      "What is the difference between object detection and image classification?",
    answer:
      "Image classification assigns a single label to an image, while object detection identifies and localizes multiple objects within the image, providing bounding boxes for each.",
  },
];

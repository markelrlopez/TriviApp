export type QuestionType = 'multiple-choice' | 'text';

export type QuestionCategory = 'Geografía' | 'Entretenimiento' | 'Historia' | 'Arte' | 'Ciencias' | 'Deporte';

export interface QuestionOption {
  answer: string;
  isCorrect: boolean;
}

export interface Question {
  questionId: number;
  questionType: QuestionType;
  question: string;
  options?: QuestionOption[]; // Opcional para preguntas de tipo "text"
  correctAnswer?: string; // Opcional, usado solo para preguntas de respuesta escrita
  createdAt: string; // Fecha en formato ISO (string)
  category: QuestionCategory; // Categoría obligatoria con valores específicos
  timesCorrect: number;
  timesIncorrect: number;
}

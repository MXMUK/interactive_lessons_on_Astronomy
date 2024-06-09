interface Lesson {
  id: string;
  title: string;
  description: string;
  author_id: number;
  created_at: Date;
  rating: number;
  video: string;
  selectedModels: string[];
  priority: number;
  explanation: string;
}

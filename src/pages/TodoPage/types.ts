export interface ITodo {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

export interface ITodoForm {
  getTodos: () => void;
}

export interface ITodoItem {
  todo: ITodo;
  getTodos: () => void;
}

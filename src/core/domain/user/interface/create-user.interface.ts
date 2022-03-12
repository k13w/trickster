export interface CreateUserRequest {
  name: string;
  lastName: string;
}

export type User = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  lastName: string;
};

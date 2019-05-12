import { Repository } from "typeorm";

export type MockType<T> = {
    [P in keyof T]: jest.Mock<{}>;
};
  // @ts-ignore
export const repositoryMockFactory: () => MockType<Repository<any>> = jest.fn(() => ({
    find: jest.fn(entity => entity),
    create: jest.fn(entity => entity),
    save: jest.fn(entity => entity),
    insert: jest.fn(entity => entity),
}));
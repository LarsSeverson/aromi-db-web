import { type User } from '@/generated/graphql'

export interface IUserSummary extends Omit<User, ''> {}

import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    users: <T = Array<User | null>>(args: { where?: UserWhereInput | null, orderBy?: UserOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    userRoles: <T = Array<UserRole | null>>(args: { where?: UserRoleWhereInput | null, orderBy?: UserRoleOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    userRole: <T = UserRole | null>(args: { where: UserRoleWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput | null, orderBy?: UserOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    userRolesConnection: <T = UserRoleConnection>(args: { where?: UserRoleWhereInput | null, orderBy?: UserRoleOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> 
  }

export interface Mutation {
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUserRole: <T = UserRole>(args: { data: UserRoleCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateUserRole: <T = UserRole | null>(args: { data: UserRoleUpdateInput, where: UserRoleWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteUserRole: <T = UserRole | null>(args: { where: UserRoleWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUserRole: <T = UserRole>(args: { where: UserRoleWhereUniqueInput, create: UserRoleCreateInput, update: UserRoleUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateManyMutationInput, where?: UserWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUserRoles: <T = BatchPayload>(args: { data: UserRoleUpdateManyMutationInput, where?: UserRoleWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUserRoles: <T = BatchPayload>(args: { where?: UserRoleWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    userRole: <T = UserRoleSubscriptionPayload | null>(args: { where?: UserRoleSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> 
  }

export interface Exists {
  User: (where?: UserWhereInput) => Promise<boolean>
  UserRole: (where?: UserRoleWhereInput) => Promise<boolean>
}

export interface Prisma {
  query: Query
  mutation: Mutation
  subscription: Subscription
  exists: Exists
  request: <T = any>(query: string, variables?: {[key: string]: any}) => Promise<T>
  delegate(operation: 'query' | 'mutation', fieldName: string, args: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<any>;
delegateSubscription(fieldName: string, args?: {
    [key: string]: any;
}, infoOrQuery?: GraphQLResolveInfo | string, options?: Options): Promise<AsyncIterator<any>>;
getAbstractResolvers(filterSchema?: GraphQLSchema | string): IResolvers;
}

export interface BindingConstructor<T> {
  new(options: BasePrismaOptions): T
}
/**
 * Type Defs
*/

const typeDefs = `type AggregateUser {
  count: Int!
}

type AggregateUserRole {
  count: Int!
}

type BatchPayload {
  """The number of nodes that have been affected by the Batch operation."""
  count: Long!
}

scalar DateTime

"""
The \`Long\` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
"""
scalar Long

type Mutation {
  createUser(data: UserCreateInput!): User!
  createUserRole(data: UserRoleCreateInput!): UserRole!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateUserRole(data: UserRoleUpdateInput!, where: UserRoleWhereUniqueInput!): UserRole
  deleteUser(where: UserWhereUniqueInput!): User
  deleteUserRole(where: UserRoleWhereUniqueInput!): UserRole
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  upsertUserRole(where: UserRoleWhereUniqueInput!, create: UserRoleCreateInput!, update: UserRoleUpdateInput!): UserRole!
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  updateManyUserRoles(data: UserRoleUpdateManyMutationInput!, where: UserRoleWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  deleteManyUserRoles(where: UserRoleWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

"""An object with an ID"""
interface Node {
  """The id of the object."""
  id: ID!
}

"""Information about pagination in a connection."""
type PageInfo {
  """When paginating forwards, are there more items?"""
  hasNextPage: Boolean!

  """When paginating backwards, are there more items?"""
  hasPreviousPage: Boolean!

  """When paginating backwards, the cursor to continue."""
  startCursor: String

  """When paginating forwards, the cursor to continue."""
  endCursor: String
}

type Query {
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  userRoles(where: UserRoleWhereInput, orderBy: UserRoleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UserRole]!
  user(where: UserWhereUniqueInput!): User
  userRole(where: UserRoleWhereUniqueInput!): UserRole
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  userRolesConnection(where: UserRoleWhereInput, orderBy: UserRoleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserRoleConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Subscription {
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  userRole(where: UserRoleSubscriptionWhereInput): UserRoleSubscriptionPayload
}

type User implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  email: String!
  username: String
  password: String!
  name: String
  country: String
  city: String
  bio: String
  avatarUrl: String
  coverUrl: String
  reputation: Int
  facebookId: String
  googleId: String
  roles(where: UserRoleWhereInput, orderBy: UserRoleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UserRole!]
}

"""A connection to a list of items."""
type UserConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  username: String
  password: String!
  name: String
  country: String
  city: String
  bio: String
  avatarUrl: String
  coverUrl: String
  reputation: Int
  facebookId: String
  googleId: String
  roles: UserRoleCreateManyWithoutUserInput
}

input UserCreateOneWithoutRolesInput {
  create: UserCreateWithoutRolesInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutRolesInput {
  email: String!
  username: String
  password: String!
  name: String
  country: String
  city: String
  bio: String
  avatarUrl: String
  coverUrl: String
  reputation: Int
  facebookId: String
  googleId: String
}

"""An edge in a connection."""
type UserEdge {
  """The item at the end of the edge."""
  node: User!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  email_ASC
  email_DESC
  username_ASC
  username_DESC
  password_ASC
  password_DESC
  name_ASC
  name_DESC
  country_ASC
  country_DESC
  city_ASC
  city_DESC
  bio_ASC
  bio_DESC
  avatarUrl_ASC
  avatarUrl_DESC
  coverUrl_ASC
  coverUrl_DESC
  reputation_ASC
  reputation_DESC
  facebookId_ASC
  facebookId_DESC
  googleId_ASC
  googleId_DESC
}

type UserPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  email: String!
  username: String
  password: String!
  name: String
  country: String
  city: String
  bio: String
  avatarUrl: String
  coverUrl: String
  reputation: Int
  facebookId: String
  googleId: String
}

type UserRole implements Node {
  id: ID!
  role: UserRoleEnum!
  stationId: String
  user: User!
}

"""A connection to a list of items."""
type UserRoleConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [UserRoleEdge]!
  aggregate: AggregateUserRole!
}

input UserRoleCreateInput {
  role: UserRoleEnum!
  stationId: String
  user: UserCreateOneWithoutRolesInput!
}

input UserRoleCreateManyWithoutUserInput {
  create: [UserRoleCreateWithoutUserInput!]
  connect: [UserRoleWhereUniqueInput!]
}

input UserRoleCreateWithoutUserInput {
  role: UserRoleEnum!
  stationId: String
}

"""An edge in a connection."""
type UserRoleEdge {
  """The item at the end of the edge."""
  node: UserRole!

  """A cursor for use in pagination."""
  cursor: String!
}

enum UserRoleEnum {
  ADMIN
  STATION_OWNER
}

enum UserRoleOrderByInput {
  id_ASC
  id_DESC
  role_ASC
  role_DESC
  stationId_ASC
  stationId_DESC
}

type UserRolePreviousValues {
  id: ID!
  role: UserRoleEnum!
  stationId: String
}

input UserRoleScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [UserRoleScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserRoleScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserRoleScalarWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  role: UserRoleEnum

  """All values that are not equal to given value."""
  role_not: UserRoleEnum

  """All values that are contained in given list."""
  role_in: [UserRoleEnum!]

  """All values that are not contained in given list."""
  role_not_in: [UserRoleEnum!]
  stationId: String

  """All values that are not equal to given value."""
  stationId_not: String

  """All values that are contained in given list."""
  stationId_in: [String!]

  """All values that are not contained in given list."""
  stationId_not_in: [String!]

  """All values less than the given value."""
  stationId_lt: String

  """All values less than or equal the given value."""
  stationId_lte: String

  """All values greater than the given value."""
  stationId_gt: String

  """All values greater than or equal the given value."""
  stationId_gte: String

  """All values containing the given string."""
  stationId_contains: String

  """All values not containing the given string."""
  stationId_not_contains: String

  """All values starting with the given string."""
  stationId_starts_with: String

  """All values not starting with the given string."""
  stationId_not_starts_with: String

  """All values ending with the given string."""
  stationId_ends_with: String

  """All values not ending with the given string."""
  stationId_not_ends_with: String
}

type UserRoleSubscriptionPayload {
  mutation: MutationType!
  node: UserRole
  updatedFields: [String!]
  previousValues: UserRolePreviousValues
}

input UserRoleSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserRoleSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserRoleWhereInput
}

input UserRoleUpdateInput {
  role: UserRoleEnum
  stationId: String
  user: UserUpdateOneRequiredWithoutRolesInput
}

input UserRoleUpdateManyDataInput {
  role: UserRoleEnum
  stationId: String
}

input UserRoleUpdateManyMutationInput {
  role: UserRoleEnum
  stationId: String
}

input UserRoleUpdateManyWithoutUserInput {
  create: [UserRoleCreateWithoutUserInput!]
  connect: [UserRoleWhereUniqueInput!]
  set: [UserRoleWhereUniqueInput!]
  disconnect: [UserRoleWhereUniqueInput!]
  delete: [UserRoleWhereUniqueInput!]
  update: [UserRoleUpdateWithWhereUniqueWithoutUserInput!]
  updateMany: [UserRoleUpdateManyWithWhereNestedInput!]
  deleteMany: [UserRoleScalarWhereInput!]
  upsert: [UserRoleUpsertWithWhereUniqueWithoutUserInput!]
}

input UserRoleUpdateManyWithWhereNestedInput {
  where: UserRoleScalarWhereInput!
  data: UserRoleUpdateManyDataInput!
}

input UserRoleUpdateWithoutUserDataInput {
  role: UserRoleEnum
  stationId: String
}

input UserRoleUpdateWithWhereUniqueWithoutUserInput {
  where: UserRoleWhereUniqueInput!
  data: UserRoleUpdateWithoutUserDataInput!
}

input UserRoleUpsertWithWhereUniqueWithoutUserInput {
  where: UserRoleWhereUniqueInput!
  update: UserRoleUpdateWithoutUserDataInput!
  create: UserRoleCreateWithoutUserInput!
}

input UserRoleWhereInput {
  """Logical AND on all given filters."""
  AND: [UserRoleWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  role: UserRoleEnum

  """All values that are not equal to given value."""
  role_not: UserRoleEnum

  """All values that are contained in given list."""
  role_in: [UserRoleEnum!]

  """All values that are not contained in given list."""
  role_not_in: [UserRoleEnum!]
  stationId: String

  """All values that are not equal to given value."""
  stationId_not: String

  """All values that are contained in given list."""
  stationId_in: [String!]

  """All values that are not contained in given list."""
  stationId_not_in: [String!]

  """All values less than the given value."""
  stationId_lt: String

  """All values less than or equal the given value."""
  stationId_lte: String

  """All values greater than the given value."""
  stationId_gt: String

  """All values greater than or equal the given value."""
  stationId_gte: String

  """All values containing the given string."""
  stationId_contains: String

  """All values not containing the given string."""
  stationId_not_contains: String

  """All values starting with the given string."""
  stationId_starts_with: String

  """All values not starting with the given string."""
  stationId_not_starts_with: String

  """All values ending with the given string."""
  stationId_ends_with: String

  """All values not ending with the given string."""
  stationId_not_ends_with: String
  user: UserWhereInput
}

input UserRoleWhereUniqueInput {
  id: ID
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [UserSubscriptionWhereInput!]

  """
  The subscription event gets dispatched when it's listed in mutation_in
  """
  mutation_in: [MutationType!]

  """
  The subscription event gets only dispatched when one of the updated fields names is included in this list
  """
  updatedFields_contains: String

  """
  The subscription event gets only dispatched when all of the field names included in this list have been updated
  """
  updatedFields_contains_every: [String!]

  """
  The subscription event gets only dispatched when some of the field names included in this list have been updated
  """
  updatedFields_contains_some: [String!]
  node: UserWhereInput
}

input UserUpdateInput {
  email: String
  username: String
  password: String
  name: String
  country: String
  city: String
  bio: String
  avatarUrl: String
  coverUrl: String
  reputation: Int
  facebookId: String
  googleId: String
  roles: UserRoleUpdateManyWithoutUserInput
}

input UserUpdateManyMutationInput {
  email: String
  username: String
  password: String
  name: String
  country: String
  city: String
  bio: String
  avatarUrl: String
  coverUrl: String
  reputation: Int
  facebookId: String
  googleId: String
}

input UserUpdateOneRequiredWithoutRolesInput {
  create: UserCreateWithoutRolesInput
  connect: UserWhereUniqueInput
  update: UserUpdateWithoutRolesDataInput
  upsert: UserUpsertWithoutRolesInput
}

input UserUpdateWithoutRolesDataInput {
  email: String
  username: String
  password: String
  name: String
  country: String
  city: String
  bio: String
  avatarUrl: String
  coverUrl: String
  reputation: Int
  facebookId: String
  googleId: String
}

input UserUpsertWithoutRolesInput {
  update: UserUpdateWithoutRolesDataInput!
  create: UserCreateWithoutRolesInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]
  id: ID

  """All values that are not equal to given value."""
  id_not: ID

  """All values that are contained in given list."""
  id_in: [ID!]

  """All values that are not contained in given list."""
  id_not_in: [ID!]

  """All values less than the given value."""
  id_lt: ID

  """All values less than or equal the given value."""
  id_lte: ID

  """All values greater than the given value."""
  id_gt: ID

  """All values greater than or equal the given value."""
  id_gte: ID

  """All values containing the given string."""
  id_contains: ID

  """All values not containing the given string."""
  id_not_contains: ID

  """All values starting with the given string."""
  id_starts_with: ID

  """All values not starting with the given string."""
  id_not_starts_with: ID

  """All values ending with the given string."""
  id_ends_with: ID

  """All values not ending with the given string."""
  id_not_ends_with: ID
  createdAt: DateTime

  """All values that are not equal to given value."""
  createdAt_not: DateTime

  """All values that are contained in given list."""
  createdAt_in: [DateTime!]

  """All values that are not contained in given list."""
  createdAt_not_in: [DateTime!]

  """All values less than the given value."""
  createdAt_lt: DateTime

  """All values less than or equal the given value."""
  createdAt_lte: DateTime

  """All values greater than the given value."""
  createdAt_gt: DateTime

  """All values greater than or equal the given value."""
  createdAt_gte: DateTime
  updatedAt: DateTime

  """All values that are not equal to given value."""
  updatedAt_not: DateTime

  """All values that are contained in given list."""
  updatedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  updatedAt_not_in: [DateTime!]

  """All values less than the given value."""
  updatedAt_lt: DateTime

  """All values less than or equal the given value."""
  updatedAt_lte: DateTime

  """All values greater than the given value."""
  updatedAt_gt: DateTime

  """All values greater than or equal the given value."""
  updatedAt_gte: DateTime
  email: String

  """All values that are not equal to given value."""
  email_not: String

  """All values that are contained in given list."""
  email_in: [String!]

  """All values that are not contained in given list."""
  email_not_in: [String!]

  """All values less than the given value."""
  email_lt: String

  """All values less than or equal the given value."""
  email_lte: String

  """All values greater than the given value."""
  email_gt: String

  """All values greater than or equal the given value."""
  email_gte: String

  """All values containing the given string."""
  email_contains: String

  """All values not containing the given string."""
  email_not_contains: String

  """All values starting with the given string."""
  email_starts_with: String

  """All values not starting with the given string."""
  email_not_starts_with: String

  """All values ending with the given string."""
  email_ends_with: String

  """All values not ending with the given string."""
  email_not_ends_with: String
  username: String

  """All values that are not equal to given value."""
  username_not: String

  """All values that are contained in given list."""
  username_in: [String!]

  """All values that are not contained in given list."""
  username_not_in: [String!]

  """All values less than the given value."""
  username_lt: String

  """All values less than or equal the given value."""
  username_lte: String

  """All values greater than the given value."""
  username_gt: String

  """All values greater than or equal the given value."""
  username_gte: String

  """All values containing the given string."""
  username_contains: String

  """All values not containing the given string."""
  username_not_contains: String

  """All values starting with the given string."""
  username_starts_with: String

  """All values not starting with the given string."""
  username_not_starts_with: String

  """All values ending with the given string."""
  username_ends_with: String

  """All values not ending with the given string."""
  username_not_ends_with: String
  password: String

  """All values that are not equal to given value."""
  password_not: String

  """All values that are contained in given list."""
  password_in: [String!]

  """All values that are not contained in given list."""
  password_not_in: [String!]

  """All values less than the given value."""
  password_lt: String

  """All values less than or equal the given value."""
  password_lte: String

  """All values greater than the given value."""
  password_gt: String

  """All values greater than or equal the given value."""
  password_gte: String

  """All values containing the given string."""
  password_contains: String

  """All values not containing the given string."""
  password_not_contains: String

  """All values starting with the given string."""
  password_starts_with: String

  """All values not starting with the given string."""
  password_not_starts_with: String

  """All values ending with the given string."""
  password_ends_with: String

  """All values not ending with the given string."""
  password_not_ends_with: String
  name: String

  """All values that are not equal to given value."""
  name_not: String

  """All values that are contained in given list."""
  name_in: [String!]

  """All values that are not contained in given list."""
  name_not_in: [String!]

  """All values less than the given value."""
  name_lt: String

  """All values less than or equal the given value."""
  name_lte: String

  """All values greater than the given value."""
  name_gt: String

  """All values greater than or equal the given value."""
  name_gte: String

  """All values containing the given string."""
  name_contains: String

  """All values not containing the given string."""
  name_not_contains: String

  """All values starting with the given string."""
  name_starts_with: String

  """All values not starting with the given string."""
  name_not_starts_with: String

  """All values ending with the given string."""
  name_ends_with: String

  """All values not ending with the given string."""
  name_not_ends_with: String
  country: String

  """All values that are not equal to given value."""
  country_not: String

  """All values that are contained in given list."""
  country_in: [String!]

  """All values that are not contained in given list."""
  country_not_in: [String!]

  """All values less than the given value."""
  country_lt: String

  """All values less than or equal the given value."""
  country_lte: String

  """All values greater than the given value."""
  country_gt: String

  """All values greater than or equal the given value."""
  country_gte: String

  """All values containing the given string."""
  country_contains: String

  """All values not containing the given string."""
  country_not_contains: String

  """All values starting with the given string."""
  country_starts_with: String

  """All values not starting with the given string."""
  country_not_starts_with: String

  """All values ending with the given string."""
  country_ends_with: String

  """All values not ending with the given string."""
  country_not_ends_with: String
  city: String

  """All values that are not equal to given value."""
  city_not: String

  """All values that are contained in given list."""
  city_in: [String!]

  """All values that are not contained in given list."""
  city_not_in: [String!]

  """All values less than the given value."""
  city_lt: String

  """All values less than or equal the given value."""
  city_lte: String

  """All values greater than the given value."""
  city_gt: String

  """All values greater than or equal the given value."""
  city_gte: String

  """All values containing the given string."""
  city_contains: String

  """All values not containing the given string."""
  city_not_contains: String

  """All values starting with the given string."""
  city_starts_with: String

  """All values not starting with the given string."""
  city_not_starts_with: String

  """All values ending with the given string."""
  city_ends_with: String

  """All values not ending with the given string."""
  city_not_ends_with: String
  bio: String

  """All values that are not equal to given value."""
  bio_not: String

  """All values that are contained in given list."""
  bio_in: [String!]

  """All values that are not contained in given list."""
  bio_not_in: [String!]

  """All values less than the given value."""
  bio_lt: String

  """All values less than or equal the given value."""
  bio_lte: String

  """All values greater than the given value."""
  bio_gt: String

  """All values greater than or equal the given value."""
  bio_gte: String

  """All values containing the given string."""
  bio_contains: String

  """All values not containing the given string."""
  bio_not_contains: String

  """All values starting with the given string."""
  bio_starts_with: String

  """All values not starting with the given string."""
  bio_not_starts_with: String

  """All values ending with the given string."""
  bio_ends_with: String

  """All values not ending with the given string."""
  bio_not_ends_with: String
  avatarUrl: String

  """All values that are not equal to given value."""
  avatarUrl_not: String

  """All values that are contained in given list."""
  avatarUrl_in: [String!]

  """All values that are not contained in given list."""
  avatarUrl_not_in: [String!]

  """All values less than the given value."""
  avatarUrl_lt: String

  """All values less than or equal the given value."""
  avatarUrl_lte: String

  """All values greater than the given value."""
  avatarUrl_gt: String

  """All values greater than or equal the given value."""
  avatarUrl_gte: String

  """All values containing the given string."""
  avatarUrl_contains: String

  """All values not containing the given string."""
  avatarUrl_not_contains: String

  """All values starting with the given string."""
  avatarUrl_starts_with: String

  """All values not starting with the given string."""
  avatarUrl_not_starts_with: String

  """All values ending with the given string."""
  avatarUrl_ends_with: String

  """All values not ending with the given string."""
  avatarUrl_not_ends_with: String
  coverUrl: String

  """All values that are not equal to given value."""
  coverUrl_not: String

  """All values that are contained in given list."""
  coverUrl_in: [String!]

  """All values that are not contained in given list."""
  coverUrl_not_in: [String!]

  """All values less than the given value."""
  coverUrl_lt: String

  """All values less than or equal the given value."""
  coverUrl_lte: String

  """All values greater than the given value."""
  coverUrl_gt: String

  """All values greater than or equal the given value."""
  coverUrl_gte: String

  """All values containing the given string."""
  coverUrl_contains: String

  """All values not containing the given string."""
  coverUrl_not_contains: String

  """All values starting with the given string."""
  coverUrl_starts_with: String

  """All values not starting with the given string."""
  coverUrl_not_starts_with: String

  """All values ending with the given string."""
  coverUrl_ends_with: String

  """All values not ending with the given string."""
  coverUrl_not_ends_with: String
  reputation: Int

  """All values that are not equal to given value."""
  reputation_not: Int

  """All values that are contained in given list."""
  reputation_in: [Int!]

  """All values that are not contained in given list."""
  reputation_not_in: [Int!]

  """All values less than the given value."""
  reputation_lt: Int

  """All values less than or equal the given value."""
  reputation_lte: Int

  """All values greater than the given value."""
  reputation_gt: Int

  """All values greater than or equal the given value."""
  reputation_gte: Int
  facebookId: String

  """All values that are not equal to given value."""
  facebookId_not: String

  """All values that are contained in given list."""
  facebookId_in: [String!]

  """All values that are not contained in given list."""
  facebookId_not_in: [String!]

  """All values less than the given value."""
  facebookId_lt: String

  """All values less than or equal the given value."""
  facebookId_lte: String

  """All values greater than the given value."""
  facebookId_gt: String

  """All values greater than or equal the given value."""
  facebookId_gte: String

  """All values containing the given string."""
  facebookId_contains: String

  """All values not containing the given string."""
  facebookId_not_contains: String

  """All values starting with the given string."""
  facebookId_starts_with: String

  """All values not starting with the given string."""
  facebookId_not_starts_with: String

  """All values ending with the given string."""
  facebookId_ends_with: String

  """All values not ending with the given string."""
  facebookId_not_ends_with: String
  googleId: String

  """All values that are not equal to given value."""
  googleId_not: String

  """All values that are contained in given list."""
  googleId_in: [String!]

  """All values that are not contained in given list."""
  googleId_not_in: [String!]

  """All values less than the given value."""
  googleId_lt: String

  """All values less than or equal the given value."""
  googleId_lte: String

  """All values greater than the given value."""
  googleId_gt: String

  """All values greater than or equal the given value."""
  googleId_gte: String

  """All values containing the given string."""
  googleId_contains: String

  """All values not containing the given string."""
  googleId_not_contains: String

  """All values starting with the given string."""
  googleId_starts_with: String

  """All values not starting with the given string."""
  googleId_not_starts_with: String

  """All values ending with the given string."""
  googleId_ends_with: String

  """All values not ending with the given string."""
  googleId_not_ends_with: String
  roles_some: UserRoleWhereInput
}

input UserWhereUniqueInput {
  id: ID
  email: String
  username: String
}
`

export const Prisma = makePrismaBindingClass<BindingConstructor<Prisma>>({typeDefs})

/**
 * Types
*/

export type MutationType =   'CREATED' |
  'UPDATED' |
  'DELETED'

export type UserOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'email_ASC' |
  'email_DESC' |
  'username_ASC' |
  'username_DESC' |
  'password_ASC' |
  'password_DESC' |
  'name_ASC' |
  'name_DESC' |
  'country_ASC' |
  'country_DESC' |
  'city_ASC' |
  'city_DESC' |
  'bio_ASC' |
  'bio_DESC' |
  'avatarUrl_ASC' |
  'avatarUrl_DESC' |
  'coverUrl_ASC' |
  'coverUrl_DESC' |
  'reputation_ASC' |
  'reputation_DESC' |
  'facebookId_ASC' |
  'facebookId_DESC' |
  'googleId_ASC' |
  'googleId_DESC'

export type UserRoleEnum =   'ADMIN' |
  'STATION_OWNER'

export type UserRoleOrderByInput =   'id_ASC' |
  'id_DESC' |
  'role_ASC' |
  'role_DESC' |
  'stationId_ASC' |
  'stationId_DESC'

export interface UserCreateInput {
  email: String
  username?: String | null
  password: String
  name?: String | null
  country?: String | null
  city?: String | null
  bio?: String | null
  avatarUrl?: String | null
  coverUrl?: String | null
  reputation?: Int | null
  facebookId?: String | null
  googleId?: String | null
  roles?: UserRoleCreateManyWithoutUserInput | null
}

export interface UserCreateOneWithoutRolesInput {
  create?: UserCreateWithoutRolesInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateWithoutRolesInput {
  email: String
  username?: String | null
  password: String
  name?: String | null
  country?: String | null
  city?: String | null
  bio?: String | null
  avatarUrl?: String | null
  coverUrl?: String | null
  reputation?: Int | null
  facebookId?: String | null
  googleId?: String | null
}

export interface UserRoleCreateInput {
  role: UserRoleEnum
  stationId?: String | null
  user: UserCreateOneWithoutRolesInput
}

export interface UserRoleCreateManyWithoutUserInput {
  create?: UserRoleCreateWithoutUserInput[] | UserRoleCreateWithoutUserInput | null
  connect?: UserRoleWhereUniqueInput[] | UserRoleWhereUniqueInput | null
}

export interface UserRoleCreateWithoutUserInput {
  role: UserRoleEnum
  stationId?: String | null
}

export interface UserRoleScalarWhereInput {
  AND?: UserRoleScalarWhereInput[] | UserRoleScalarWhereInput | null
  OR?: UserRoleScalarWhereInput[] | UserRoleScalarWhereInput | null
  NOT?: UserRoleScalarWhereInput[] | UserRoleScalarWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  role?: UserRoleEnum | null
  role_not?: UserRoleEnum | null
  role_in?: UserRoleEnum[] | UserRoleEnum | null
  role_not_in?: UserRoleEnum[] | UserRoleEnum | null
  stationId?: String | null
  stationId_not?: String | null
  stationId_in?: String[] | String | null
  stationId_not_in?: String[] | String | null
  stationId_lt?: String | null
  stationId_lte?: String | null
  stationId_gt?: String | null
  stationId_gte?: String | null
  stationId_contains?: String | null
  stationId_not_contains?: String | null
  stationId_starts_with?: String | null
  stationId_not_starts_with?: String | null
  stationId_ends_with?: String | null
  stationId_not_ends_with?: String | null
}

export interface UserRoleSubscriptionWhereInput {
  AND?: UserRoleSubscriptionWhereInput[] | UserRoleSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: UserRoleWhereInput | null
}

export interface UserRoleUpdateInput {
  role?: UserRoleEnum | null
  stationId?: String | null
  user?: UserUpdateOneRequiredWithoutRolesInput | null
}

export interface UserRoleUpdateManyDataInput {
  role?: UserRoleEnum | null
  stationId?: String | null
}

export interface UserRoleUpdateManyMutationInput {
  role?: UserRoleEnum | null
  stationId?: String | null
}

export interface UserRoleUpdateManyWithoutUserInput {
  create?: UserRoleCreateWithoutUserInput[] | UserRoleCreateWithoutUserInput | null
  connect?: UserRoleWhereUniqueInput[] | UserRoleWhereUniqueInput | null
  set?: UserRoleWhereUniqueInput[] | UserRoleWhereUniqueInput | null
  disconnect?: UserRoleWhereUniqueInput[] | UserRoleWhereUniqueInput | null
  delete?: UserRoleWhereUniqueInput[] | UserRoleWhereUniqueInput | null
  update?: UserRoleUpdateWithWhereUniqueWithoutUserInput[] | UserRoleUpdateWithWhereUniqueWithoutUserInput | null
  updateMany?: UserRoleUpdateManyWithWhereNestedInput[] | UserRoleUpdateManyWithWhereNestedInput | null
  deleteMany?: UserRoleScalarWhereInput[] | UserRoleScalarWhereInput | null
  upsert?: UserRoleUpsertWithWhereUniqueWithoutUserInput[] | UserRoleUpsertWithWhereUniqueWithoutUserInput | null
}

export interface UserRoleUpdateManyWithWhereNestedInput {
  where: UserRoleScalarWhereInput
  data: UserRoleUpdateManyDataInput
}

export interface UserRoleUpdateWithoutUserDataInput {
  role?: UserRoleEnum | null
  stationId?: String | null
}

export interface UserRoleUpdateWithWhereUniqueWithoutUserInput {
  where: UserRoleWhereUniqueInput
  data: UserRoleUpdateWithoutUserDataInput
}

export interface UserRoleUpsertWithWhereUniqueWithoutUserInput {
  where: UserRoleWhereUniqueInput
  update: UserRoleUpdateWithoutUserDataInput
  create: UserRoleCreateWithoutUserInput
}

export interface UserRoleWhereInput {
  AND?: UserRoleWhereInput[] | UserRoleWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  role?: UserRoleEnum | null
  role_not?: UserRoleEnum | null
  role_in?: UserRoleEnum[] | UserRoleEnum | null
  role_not_in?: UserRoleEnum[] | UserRoleEnum | null
  stationId?: String | null
  stationId_not?: String | null
  stationId_in?: String[] | String | null
  stationId_not_in?: String[] | String | null
  stationId_lt?: String | null
  stationId_lte?: String | null
  stationId_gt?: String | null
  stationId_gte?: String | null
  stationId_contains?: String | null
  stationId_not_contains?: String | null
  stationId_starts_with?: String | null
  stationId_not_starts_with?: String | null
  stationId_ends_with?: String | null
  stationId_not_ends_with?: String | null
  user?: UserWhereInput | null
}

export interface UserRoleWhereUniqueInput {
  id?: ID_Input | null
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: UserWhereInput | null
}

export interface UserUpdateInput {
  email?: String | null
  username?: String | null
  password?: String | null
  name?: String | null
  country?: String | null
  city?: String | null
  bio?: String | null
  avatarUrl?: String | null
  coverUrl?: String | null
  reputation?: Int | null
  facebookId?: String | null
  googleId?: String | null
  roles?: UserRoleUpdateManyWithoutUserInput | null
}

export interface UserUpdateManyMutationInput {
  email?: String | null
  username?: String | null
  password?: String | null
  name?: String | null
  country?: String | null
  city?: String | null
  bio?: String | null
  avatarUrl?: String | null
  coverUrl?: String | null
  reputation?: Int | null
  facebookId?: String | null
  googleId?: String | null
}

export interface UserUpdateOneRequiredWithoutRolesInput {
  create?: UserCreateWithoutRolesInput | null
  connect?: UserWhereUniqueInput | null
  update?: UserUpdateWithoutRolesDataInput | null
  upsert?: UserUpsertWithoutRolesInput | null
}

export interface UserUpdateWithoutRolesDataInput {
  email?: String | null
  username?: String | null
  password?: String | null
  name?: String | null
  country?: String | null
  city?: String | null
  bio?: String | null
  avatarUrl?: String | null
  coverUrl?: String | null
  reputation?: Int | null
  facebookId?: String | null
  googleId?: String | null
}

export interface UserUpsertWithoutRolesInput {
  update: UserUpdateWithoutRolesDataInput
  create: UserCreateWithoutRolesInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput | null
  id?: ID_Input | null
  id_not?: ID_Input | null
  id_in?: ID_Output[] | ID_Output | null
  id_not_in?: ID_Output[] | ID_Output | null
  id_lt?: ID_Input | null
  id_lte?: ID_Input | null
  id_gt?: ID_Input | null
  id_gte?: ID_Input | null
  id_contains?: ID_Input | null
  id_not_contains?: ID_Input | null
  id_starts_with?: ID_Input | null
  id_not_starts_with?: ID_Input | null
  id_ends_with?: ID_Input | null
  id_not_ends_with?: ID_Input | null
  createdAt?: DateTime | null
  createdAt_not?: DateTime | null
  createdAt_in?: DateTime[] | DateTime | null
  createdAt_not_in?: DateTime[] | DateTime | null
  createdAt_lt?: DateTime | null
  createdAt_lte?: DateTime | null
  createdAt_gt?: DateTime | null
  createdAt_gte?: DateTime | null
  updatedAt?: DateTime | null
  updatedAt_not?: DateTime | null
  updatedAt_in?: DateTime[] | DateTime | null
  updatedAt_not_in?: DateTime[] | DateTime | null
  updatedAt_lt?: DateTime | null
  updatedAt_lte?: DateTime | null
  updatedAt_gt?: DateTime | null
  updatedAt_gte?: DateTime | null
  email?: String | null
  email_not?: String | null
  email_in?: String[] | String | null
  email_not_in?: String[] | String | null
  email_lt?: String | null
  email_lte?: String | null
  email_gt?: String | null
  email_gte?: String | null
  email_contains?: String | null
  email_not_contains?: String | null
  email_starts_with?: String | null
  email_not_starts_with?: String | null
  email_ends_with?: String | null
  email_not_ends_with?: String | null
  username?: String | null
  username_not?: String | null
  username_in?: String[] | String | null
  username_not_in?: String[] | String | null
  username_lt?: String | null
  username_lte?: String | null
  username_gt?: String | null
  username_gte?: String | null
  username_contains?: String | null
  username_not_contains?: String | null
  username_starts_with?: String | null
  username_not_starts_with?: String | null
  username_ends_with?: String | null
  username_not_ends_with?: String | null
  password?: String | null
  password_not?: String | null
  password_in?: String[] | String | null
  password_not_in?: String[] | String | null
  password_lt?: String | null
  password_lte?: String | null
  password_gt?: String | null
  password_gte?: String | null
  password_contains?: String | null
  password_not_contains?: String | null
  password_starts_with?: String | null
  password_not_starts_with?: String | null
  password_ends_with?: String | null
  password_not_ends_with?: String | null
  name?: String | null
  name_not?: String | null
  name_in?: String[] | String | null
  name_not_in?: String[] | String | null
  name_lt?: String | null
  name_lte?: String | null
  name_gt?: String | null
  name_gte?: String | null
  name_contains?: String | null
  name_not_contains?: String | null
  name_starts_with?: String | null
  name_not_starts_with?: String | null
  name_ends_with?: String | null
  name_not_ends_with?: String | null
  country?: String | null
  country_not?: String | null
  country_in?: String[] | String | null
  country_not_in?: String[] | String | null
  country_lt?: String | null
  country_lte?: String | null
  country_gt?: String | null
  country_gte?: String | null
  country_contains?: String | null
  country_not_contains?: String | null
  country_starts_with?: String | null
  country_not_starts_with?: String | null
  country_ends_with?: String | null
  country_not_ends_with?: String | null
  city?: String | null
  city_not?: String | null
  city_in?: String[] | String | null
  city_not_in?: String[] | String | null
  city_lt?: String | null
  city_lte?: String | null
  city_gt?: String | null
  city_gte?: String | null
  city_contains?: String | null
  city_not_contains?: String | null
  city_starts_with?: String | null
  city_not_starts_with?: String | null
  city_ends_with?: String | null
  city_not_ends_with?: String | null
  bio?: String | null
  bio_not?: String | null
  bio_in?: String[] | String | null
  bio_not_in?: String[] | String | null
  bio_lt?: String | null
  bio_lte?: String | null
  bio_gt?: String | null
  bio_gte?: String | null
  bio_contains?: String | null
  bio_not_contains?: String | null
  bio_starts_with?: String | null
  bio_not_starts_with?: String | null
  bio_ends_with?: String | null
  bio_not_ends_with?: String | null
  avatarUrl?: String | null
  avatarUrl_not?: String | null
  avatarUrl_in?: String[] | String | null
  avatarUrl_not_in?: String[] | String | null
  avatarUrl_lt?: String | null
  avatarUrl_lte?: String | null
  avatarUrl_gt?: String | null
  avatarUrl_gte?: String | null
  avatarUrl_contains?: String | null
  avatarUrl_not_contains?: String | null
  avatarUrl_starts_with?: String | null
  avatarUrl_not_starts_with?: String | null
  avatarUrl_ends_with?: String | null
  avatarUrl_not_ends_with?: String | null
  coverUrl?: String | null
  coverUrl_not?: String | null
  coverUrl_in?: String[] | String | null
  coverUrl_not_in?: String[] | String | null
  coverUrl_lt?: String | null
  coverUrl_lte?: String | null
  coverUrl_gt?: String | null
  coverUrl_gte?: String | null
  coverUrl_contains?: String | null
  coverUrl_not_contains?: String | null
  coverUrl_starts_with?: String | null
  coverUrl_not_starts_with?: String | null
  coverUrl_ends_with?: String | null
  coverUrl_not_ends_with?: String | null
  reputation?: Int | null
  reputation_not?: Int | null
  reputation_in?: Int[] | Int | null
  reputation_not_in?: Int[] | Int | null
  reputation_lt?: Int | null
  reputation_lte?: Int | null
  reputation_gt?: Int | null
  reputation_gte?: Int | null
  facebookId?: String | null
  facebookId_not?: String | null
  facebookId_in?: String[] | String | null
  facebookId_not_in?: String[] | String | null
  facebookId_lt?: String | null
  facebookId_lte?: String | null
  facebookId_gt?: String | null
  facebookId_gte?: String | null
  facebookId_contains?: String | null
  facebookId_not_contains?: String | null
  facebookId_starts_with?: String | null
  facebookId_not_starts_with?: String | null
  facebookId_ends_with?: String | null
  facebookId_not_ends_with?: String | null
  googleId?: String | null
  googleId_not?: String | null
  googleId_in?: String[] | String | null
  googleId_not_in?: String[] | String | null
  googleId_lt?: String | null
  googleId_lte?: String | null
  googleId_gt?: String | null
  googleId_gte?: String | null
  googleId_contains?: String | null
  googleId_not_contains?: String | null
  googleId_starts_with?: String | null
  googleId_not_starts_with?: String | null
  googleId_ends_with?: String | null
  googleId_not_ends_with?: String | null
  roles_some?: UserRoleWhereInput | null
}

export interface UserWhereUniqueInput {
  id?: ID_Input | null
  email?: String | null
  username?: String | null
}

/*
 * An object with an ID

 */
export interface Node {
  id: ID_Output
}

export interface AggregateUser {
  count: Int
}

export interface AggregateUserRole {
  count: Int
}

export interface BatchPayload {
  count: Long
}

/*
 * Information about pagination in a connection.

 */
export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: String | null
  endCursor?: String | null
}

export interface User extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  email: String
  username?: String | null
  password: String
  name?: String | null
  country?: String | null
  city?: String | null
  bio?: String | null
  avatarUrl?: String | null
  coverUrl?: String | null
  reputation?: Int | null
  facebookId?: String | null
  googleId?: String | null
  roles?: Array<UserRole> | null
}

/*
 * A connection to a list of items.

 */
export interface UserConnection {
  pageInfo: PageInfo
  edges: Array<UserEdge | null>
  aggregate: AggregateUser
}

/*
 * An edge in a connection.

 */
export interface UserEdge {
  node: User
  cursor: String
}

export interface UserPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  email: String
  username?: String | null
  password: String
  name?: String | null
  country?: String | null
  city?: String | null
  bio?: String | null
  avatarUrl?: String | null
  coverUrl?: String | null
  reputation?: Int | null
  facebookId?: String | null
  googleId?: String | null
}

export interface UserRole extends Node {
  id: ID_Output
  role: UserRoleEnum
  stationId?: String | null
  user: User
}

/*
 * A connection to a list of items.

 */
export interface UserRoleConnection {
  pageInfo: PageInfo
  edges: Array<UserRoleEdge | null>
  aggregate: AggregateUserRole
}

/*
 * An edge in a connection.

 */
export interface UserRoleEdge {
  node: UserRole
  cursor: String
}

export interface UserRolePreviousValues {
  id: ID_Output
  role: UserRoleEnum
  stationId?: String | null
}

export interface UserRoleSubscriptionPayload {
  mutation: MutationType
  node?: UserRole | null
  updatedFields?: Array<String> | null
  previousValues?: UserRolePreviousValues | null
}

export interface UserSubscriptionPayload {
  mutation: MutationType
  node?: User | null
  updatedFields?: Array<String> | null
  previousValues?: UserPreviousValues | null
}

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean

export type DateTime = Date | string

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number
export type ID_Output = string

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number

/*
The `Long` scalar type represents non-fractional signed whole numeric values.
Long can represent values between -(2^63) and 2^63 - 1.
*/
export type Long = string

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string
import { GraphQLResolveInfo, GraphQLSchema } from 'graphql'
import { IResolvers } from 'graphql-tools/dist/Interfaces'
import { Options } from 'graphql-binding'
import { makePrismaBindingClass, BasePrismaOptions } from 'prisma-binding'

export interface Query {
    userRoles: <T = Array<UserRole | null>>(args: { where?: UserRoleWhereInput | null, orderBy?: UserRoleOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    stations: <T = Array<Station | null>>(args: { where?: StationWhereInput | null, orderBy?: StationOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    stationTags: <T = Array<StationTag | null>>(args: { where?: StationTagWhereInput | null, orderBy?: StationTagOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    songs: <T = Array<Song | null>>(args: { where?: SongWhereInput | null, orderBy?: SongOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    users: <T = Array<User | null>>(args: { where?: UserWhereInput | null, orderBy?: UserOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    userRole: <T = UserRole | null>(args: { where: UserRoleWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    station: <T = Station | null>(args: { where: StationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    stationTag: <T = StationTag | null>(args: { where: StationTagWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    song: <T = Song | null>(args: { where: SongWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    user: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    userRolesConnection: <T = UserRoleConnection>(args: { where?: UserRoleWhereInput | null, orderBy?: UserRoleOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    stationsConnection: <T = StationConnection>(args: { where?: StationWhereInput | null, orderBy?: StationOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    stationTagsConnection: <T = StationTagConnection>(args: { where?: StationTagWhereInput | null, orderBy?: StationTagOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    songsConnection: <T = SongConnection>(args: { where?: SongWhereInput | null, orderBy?: SongOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    usersConnection: <T = UserConnection>(args: { where?: UserWhereInput | null, orderBy?: UserOrderByInput | null, skip?: Int | null, after?: String | null, before?: String | null, first?: Int | null, last?: Int | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    node: <T = Node | null>(args: { id: ID_Output }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> 
  }

export interface Mutation {
    createUserRole: <T = UserRole>(args: { data: UserRoleCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createStation: <T = Station>(args: { data: StationCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createStationTag: <T = StationTag>(args: { data: StationTagCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createSong: <T = Song>(args: { data: SongCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    createUser: <T = User>(args: { data: UserCreateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateUserRole: <T = UserRole | null>(args: { data: UserRoleUpdateInput, where: UserRoleWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateStation: <T = Station | null>(args: { data: StationUpdateInput, where: StationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateStationTag: <T = StationTag | null>(args: { data: StationTagUpdateInput, where: StationTagWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateSong: <T = Song | null>(args: { data: SongUpdateInput, where: SongWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    updateUser: <T = User | null>(args: { data: UserUpdateInput, where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteUserRole: <T = UserRole | null>(args: { where: UserRoleWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteStation: <T = Station | null>(args: { where: StationWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteStationTag: <T = StationTag | null>(args: { where: StationTagWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteSong: <T = Song | null>(args: { where: SongWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    deleteUser: <T = User | null>(args: { where: UserWhereUniqueInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T | null> ,
    upsertUserRole: <T = UserRole>(args: { where: UserRoleWhereUniqueInput, create: UserRoleCreateInput, update: UserRoleUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertStation: <T = Station>(args: { where: StationWhereUniqueInput, create: StationCreateInput, update: StationUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertStationTag: <T = StationTag>(args: { where: StationTagWhereUniqueInput, create: StationTagCreateInput, update: StationTagUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertSong: <T = Song>(args: { where: SongWhereUniqueInput, create: SongCreateInput, update: SongUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    upsertUser: <T = User>(args: { where: UserWhereUniqueInput, create: UserCreateInput, update: UserUpdateInput }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUserRoles: <T = BatchPayload>(args: { data: UserRoleUpdateManyMutationInput, where?: UserRoleWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyStations: <T = BatchPayload>(args: { data: StationUpdateManyMutationInput, where?: StationWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyStationTags: <T = BatchPayload>(args: { data: StationTagUpdateManyMutationInput, where?: StationTagWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManySongs: <T = BatchPayload>(args: { data: SongUpdateManyMutationInput, where?: SongWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    updateManyUsers: <T = BatchPayload>(args: { data: UserUpdateManyMutationInput, where?: UserWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUserRoles: <T = BatchPayload>(args: { where?: UserRoleWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyStations: <T = BatchPayload>(args: { where?: StationWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyStationTags: <T = BatchPayload>(args: { where?: StationTagWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManySongs: <T = BatchPayload>(args: { where?: SongWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> ,
    deleteManyUsers: <T = BatchPayload>(args: { where?: UserWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<T> 
  }

export interface Subscription {
    userRole: <T = UserRoleSubscriptionPayload | null>(args: { where?: UserRoleSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    station: <T = StationSubscriptionPayload | null>(args: { where?: StationSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    stationTag: <T = StationTagSubscriptionPayload | null>(args: { where?: StationTagSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    song: <T = SongSubscriptionPayload | null>(args: { where?: SongSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> ,
    user: <T = UserSubscriptionPayload | null>(args: { where?: UserSubscriptionWhereInput | null }, info?: GraphQLResolveInfo | string, options?: Options) => Promise<AsyncIterator<T | null>> 
  }

export interface Exists {
  UserRole: (where?: UserRoleWhereInput) => Promise<boolean>
  Station: (where?: StationWhereInput) => Promise<boolean>
  StationTag: (where?: StationTagWhereInput) => Promise<boolean>
  Song: (where?: SongWhereInput) => Promise<boolean>
  User: (where?: UserWhereInput) => Promise<boolean>
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

const typeDefs = `type AggregateSong {
  count: Int!
}

type AggregateStation {
  count: Int!
}

type AggregateStationTag {
  count: Int!
}

type AggregateUser {
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
  createUserRole(data: UserRoleCreateInput!): UserRole!
  createStation(data: StationCreateInput!): Station!
  createStationTag(data: StationTagCreateInput!): StationTag!
  createSong(data: SongCreateInput!): Song!
  createUser(data: UserCreateInput!): User!
  updateUserRole(data: UserRoleUpdateInput!, where: UserRoleWhereUniqueInput!): UserRole
  updateStation(data: StationUpdateInput!, where: StationWhereUniqueInput!): Station
  updateStationTag(data: StationTagUpdateInput!, where: StationTagWhereUniqueInput!): StationTag
  updateSong(data: SongUpdateInput!, where: SongWhereUniqueInput!): Song
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  deleteUserRole(where: UserRoleWhereUniqueInput!): UserRole
  deleteStation(where: StationWhereUniqueInput!): Station
  deleteStationTag(where: StationTagWhereUniqueInput!): StationTag
  deleteSong(where: SongWhereUniqueInput!): Song
  deleteUser(where: UserWhereUniqueInput!): User
  upsertUserRole(where: UserRoleWhereUniqueInput!, create: UserRoleCreateInput!, update: UserRoleUpdateInput!): UserRole!
  upsertStation(where: StationWhereUniqueInput!, create: StationCreateInput!, update: StationUpdateInput!): Station!
  upsertStationTag(where: StationTagWhereUniqueInput!, create: StationTagCreateInput!, update: StationTagUpdateInput!): StationTag!
  upsertSong(where: SongWhereUniqueInput!, create: SongCreateInput!, update: SongUpdateInput!): Song!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  updateManyUserRoles(data: UserRoleUpdateManyMutationInput!, where: UserRoleWhereInput): BatchPayload!
  updateManyStations(data: StationUpdateManyMutationInput!, where: StationWhereInput): BatchPayload!
  updateManyStationTags(data: StationTagUpdateManyMutationInput!, where: StationTagWhereInput): BatchPayload!
  updateManySongs(data: SongUpdateManyMutationInput!, where: SongWhereInput): BatchPayload!
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  deleteManyUserRoles(where: UserRoleWhereInput): BatchPayload!
  deleteManyStations(where: StationWhereInput): BatchPayload!
  deleteManyStationTags(where: StationTagWhereInput): BatchPayload!
  deleteManySongs(where: SongWhereInput): BatchPayload!
  deleteManyUsers(where: UserWhereInput): BatchPayload!
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
  userRoles(where: UserRoleWhereInput, orderBy: UserRoleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UserRole]!
  stations(where: StationWhereInput, orderBy: StationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Station]!
  stationTags(where: StationTagWhereInput, orderBy: StationTagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [StationTag]!
  songs(where: SongWhereInput, orderBy: SongOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Song]!
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  userRole(where: UserRoleWhereUniqueInput!): UserRole
  station(where: StationWhereUniqueInput!): Station
  stationTag(where: StationTagWhereUniqueInput!): StationTag
  song(where: SongWhereUniqueInput!): Song
  user(where: UserWhereUniqueInput!): User
  userRolesConnection(where: UserRoleWhereInput, orderBy: UserRoleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserRoleConnection!
  stationsConnection(where: StationWhereInput, orderBy: StationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): StationConnection!
  stationTagsConnection(where: StationTagWhereInput, orderBy: StationTagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): StationTagConnection!
  songsConnection(where: SongWhereInput, orderBy: SongOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SongConnection!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!

  """Fetches an object given its ID"""
  node(
    """The ID of an object"""
    id: ID!
  ): Node
}

type Song implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  title: String!
  url: String!
  thumbnail: String!
  duration: Int!
  creator: User!
  station: Station!
  status: SongStatusEnum!
  startedAt: DateTime
  upVotes(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  downVotes(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
}

"""A connection to a list of items."""
type SongConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [SongEdge]!
  aggregate: AggregateSong!
}

input SongCreateInput {
  id: ID
  title: String!
  url: String!
  thumbnail: String!
  duration: Int!
  status: SongStatusEnum!
  startedAt: DateTime
  creator: UserCreateOneInput!
  station: StationCreateOneWithoutSongsInput!
  upVotes: UserCreateManyInput
  downVotes: UserCreateManyInput
}

input SongCreateManyWithoutStationInput {
  create: [SongCreateWithoutStationInput!]
  connect: [SongWhereUniqueInput!]
}

input SongCreateWithoutStationInput {
  id: ID
  title: String!
  url: String!
  thumbnail: String!
  duration: Int!
  status: SongStatusEnum!
  startedAt: DateTime
  creator: UserCreateOneInput!
  upVotes: UserCreateManyInput
  downVotes: UserCreateManyInput
}

"""An edge in a connection."""
type SongEdge {
  """The item at the end of the edge."""
  node: Song!

  """A cursor for use in pagination."""
  cursor: String!
}

enum SongOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  title_ASC
  title_DESC
  url_ASC
  url_DESC
  thumbnail_ASC
  thumbnail_DESC
  duration_ASC
  duration_DESC
  status_ASC
  status_DESC
  startedAt_ASC
  startedAt_DESC
}

type SongPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  title: String!
  url: String!
  thumbnail: String!
  duration: Int!
  status: SongStatusEnum!
  startedAt: DateTime
}

input SongScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [SongScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [SongScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [SongScalarWhereInput!]
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
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
  url: String

  """All values that are not equal to given value."""
  url_not: String

  """All values that are contained in given list."""
  url_in: [String!]

  """All values that are not contained in given list."""
  url_not_in: [String!]

  """All values less than the given value."""
  url_lt: String

  """All values less than or equal the given value."""
  url_lte: String

  """All values greater than the given value."""
  url_gt: String

  """All values greater than or equal the given value."""
  url_gte: String

  """All values containing the given string."""
  url_contains: String

  """All values not containing the given string."""
  url_not_contains: String

  """All values starting with the given string."""
  url_starts_with: String

  """All values not starting with the given string."""
  url_not_starts_with: String

  """All values ending with the given string."""
  url_ends_with: String

  """All values not ending with the given string."""
  url_not_ends_with: String
  thumbnail: String

  """All values that are not equal to given value."""
  thumbnail_not: String

  """All values that are contained in given list."""
  thumbnail_in: [String!]

  """All values that are not contained in given list."""
  thumbnail_not_in: [String!]

  """All values less than the given value."""
  thumbnail_lt: String

  """All values less than or equal the given value."""
  thumbnail_lte: String

  """All values greater than the given value."""
  thumbnail_gt: String

  """All values greater than or equal the given value."""
  thumbnail_gte: String

  """All values containing the given string."""
  thumbnail_contains: String

  """All values not containing the given string."""
  thumbnail_not_contains: String

  """All values starting with the given string."""
  thumbnail_starts_with: String

  """All values not starting with the given string."""
  thumbnail_not_starts_with: String

  """All values ending with the given string."""
  thumbnail_ends_with: String

  """All values not ending with the given string."""
  thumbnail_not_ends_with: String
  duration: Int

  """All values that are not equal to given value."""
  duration_not: Int

  """All values that are contained in given list."""
  duration_in: [Int!]

  """All values that are not contained in given list."""
  duration_not_in: [Int!]

  """All values less than the given value."""
  duration_lt: Int

  """All values less than or equal the given value."""
  duration_lte: Int

  """All values greater than the given value."""
  duration_gt: Int

  """All values greater than or equal the given value."""
  duration_gte: Int
  status: SongStatusEnum

  """All values that are not equal to given value."""
  status_not: SongStatusEnum

  """All values that are contained in given list."""
  status_in: [SongStatusEnum!]

  """All values that are not contained in given list."""
  status_not_in: [SongStatusEnum!]
  startedAt: DateTime

  """All values that are not equal to given value."""
  startedAt_not: DateTime

  """All values that are contained in given list."""
  startedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  startedAt_not_in: [DateTime!]

  """All values less than the given value."""
  startedAt_lt: DateTime

  """All values less than or equal the given value."""
  startedAt_lte: DateTime

  """All values greater than the given value."""
  startedAt_gt: DateTime

  """All values greater than or equal the given value."""
  startedAt_gte: DateTime
}

enum SongStatusEnum {
  PENDING
  PLAYING
  PLAYED
  SKIPPED
}

type SongSubscriptionPayload {
  mutation: MutationType!
  node: Song
  updatedFields: [String!]
  previousValues: SongPreviousValues
}

input SongSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [SongSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [SongSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [SongSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
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
  node: SongWhereInput
}

input SongUpdateInput {
  title: String
  url: String
  thumbnail: String
  duration: Int
  status: SongStatusEnum
  startedAt: DateTime
  creator: UserUpdateOneRequiredInput
  station: StationUpdateOneRequiredWithoutSongsInput
  upVotes: UserUpdateManyInput
  downVotes: UserUpdateManyInput
}

input SongUpdateManyDataInput {
  title: String
  url: String
  thumbnail: String
  duration: Int
  status: SongStatusEnum
  startedAt: DateTime
}

input SongUpdateManyMutationInput {
  title: String
  url: String
  thumbnail: String
  duration: Int
  status: SongStatusEnum
  startedAt: DateTime
}

input SongUpdateManyWithoutStationInput {
  create: [SongCreateWithoutStationInput!]
  connect: [SongWhereUniqueInput!]
  set: [SongWhereUniqueInput!]
  disconnect: [SongWhereUniqueInput!]
  delete: [SongWhereUniqueInput!]
  update: [SongUpdateWithWhereUniqueWithoutStationInput!]
  updateMany: [SongUpdateManyWithWhereNestedInput!]
  deleteMany: [SongScalarWhereInput!]
  upsert: [SongUpsertWithWhereUniqueWithoutStationInput!]
}

input SongUpdateManyWithWhereNestedInput {
  where: SongScalarWhereInput!
  data: SongUpdateManyDataInput!
}

input SongUpdateWithoutStationDataInput {
  title: String
  url: String
  thumbnail: String
  duration: Int
  status: SongStatusEnum
  startedAt: DateTime
  creator: UserUpdateOneRequiredInput
  upVotes: UserUpdateManyInput
  downVotes: UserUpdateManyInput
}

input SongUpdateWithWhereUniqueWithoutStationInput {
  where: SongWhereUniqueInput!
  data: SongUpdateWithoutStationDataInput!
}

input SongUpsertWithWhereUniqueWithoutStationInput {
  where: SongWhereUniqueInput!
  update: SongUpdateWithoutStationDataInput!
  create: SongCreateWithoutStationInput!
}

input SongWhereInput {
  """Logical AND on all given filters."""
  AND: [SongWhereInput!]

  """Logical OR on all given filters."""
  OR: [SongWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [SongWhereInput!]
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
  title: String

  """All values that are not equal to given value."""
  title_not: String

  """All values that are contained in given list."""
  title_in: [String!]

  """All values that are not contained in given list."""
  title_not_in: [String!]

  """All values less than the given value."""
  title_lt: String

  """All values less than or equal the given value."""
  title_lte: String

  """All values greater than the given value."""
  title_gt: String

  """All values greater than or equal the given value."""
  title_gte: String

  """All values containing the given string."""
  title_contains: String

  """All values not containing the given string."""
  title_not_contains: String

  """All values starting with the given string."""
  title_starts_with: String

  """All values not starting with the given string."""
  title_not_starts_with: String

  """All values ending with the given string."""
  title_ends_with: String

  """All values not ending with the given string."""
  title_not_ends_with: String
  url: String

  """All values that are not equal to given value."""
  url_not: String

  """All values that are contained in given list."""
  url_in: [String!]

  """All values that are not contained in given list."""
  url_not_in: [String!]

  """All values less than the given value."""
  url_lt: String

  """All values less than or equal the given value."""
  url_lte: String

  """All values greater than the given value."""
  url_gt: String

  """All values greater than or equal the given value."""
  url_gte: String

  """All values containing the given string."""
  url_contains: String

  """All values not containing the given string."""
  url_not_contains: String

  """All values starting with the given string."""
  url_starts_with: String

  """All values not starting with the given string."""
  url_not_starts_with: String

  """All values ending with the given string."""
  url_ends_with: String

  """All values not ending with the given string."""
  url_not_ends_with: String
  thumbnail: String

  """All values that are not equal to given value."""
  thumbnail_not: String

  """All values that are contained in given list."""
  thumbnail_in: [String!]

  """All values that are not contained in given list."""
  thumbnail_not_in: [String!]

  """All values less than the given value."""
  thumbnail_lt: String

  """All values less than or equal the given value."""
  thumbnail_lte: String

  """All values greater than the given value."""
  thumbnail_gt: String

  """All values greater than or equal the given value."""
  thumbnail_gte: String

  """All values containing the given string."""
  thumbnail_contains: String

  """All values not containing the given string."""
  thumbnail_not_contains: String

  """All values starting with the given string."""
  thumbnail_starts_with: String

  """All values not starting with the given string."""
  thumbnail_not_starts_with: String

  """All values ending with the given string."""
  thumbnail_ends_with: String

  """All values not ending with the given string."""
  thumbnail_not_ends_with: String
  duration: Int

  """All values that are not equal to given value."""
  duration_not: Int

  """All values that are contained in given list."""
  duration_in: [Int!]

  """All values that are not contained in given list."""
  duration_not_in: [Int!]

  """All values less than the given value."""
  duration_lt: Int

  """All values less than or equal the given value."""
  duration_lte: Int

  """All values greater than the given value."""
  duration_gt: Int

  """All values greater than or equal the given value."""
  duration_gte: Int
  status: SongStatusEnum

  """All values that are not equal to given value."""
  status_not: SongStatusEnum

  """All values that are contained in given list."""
  status_in: [SongStatusEnum!]

  """All values that are not contained in given list."""
  status_not_in: [SongStatusEnum!]
  startedAt: DateTime

  """All values that are not equal to given value."""
  startedAt_not: DateTime

  """All values that are contained in given list."""
  startedAt_in: [DateTime!]

  """All values that are not contained in given list."""
  startedAt_not_in: [DateTime!]

  """All values less than the given value."""
  startedAt_lt: DateTime

  """All values less than or equal the given value."""
  startedAt_lte: DateTime

  """All values greater than the given value."""
  startedAt_gt: DateTime

  """All values greater than or equal the given value."""
  startedAt_gte: DateTime
  creator: UserWhereInput
  station: StationWhereInput
  upVotes_every: UserWhereInput
  upVotes_some: UserWhereInput
  upVotes_none: UserWhereInput
  downVotes_every: UserWhereInput
  downVotes_some: UserWhereInput
  downVotes_none: UserWhereInput
}

input SongWhereUniqueInput {
  id: ID
}

type Station implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  slug: String!
  description: String
  userRoles(where: UserRoleWhereInput, orderBy: UserRoleOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [UserRole!]
  tags(where: StationTagWhereInput, orderBy: StationTagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [StationTag!]
  onlineUsers(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  songs(where: SongWhereInput, orderBy: SongOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Song!]
}

"""A connection to a list of items."""
type StationConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [StationEdge]!
  aggregate: AggregateStation!
}

input StationCreateInput {
  id: ID
  name: String!
  slug: String!
  description: String
  userRoles: UserRoleCreateManyWithoutStationInput
  tags: StationTagCreateManyWithoutStationsInput
  onlineUsers: UserCreateManyInput
  songs: SongCreateManyWithoutStationInput
}

input StationCreateManyWithoutTagsInput {
  create: [StationCreateWithoutTagsInput!]
  connect: [StationWhereUniqueInput!]
}

input StationCreateOneWithoutSongsInput {
  create: StationCreateWithoutSongsInput
  connect: StationWhereUniqueInput
}

input StationCreateOneWithoutUserRolesInput {
  create: StationCreateWithoutUserRolesInput
  connect: StationWhereUniqueInput
}

input StationCreateWithoutSongsInput {
  id: ID
  name: String!
  slug: String!
  description: String
  userRoles: UserRoleCreateManyWithoutStationInput
  tags: StationTagCreateManyWithoutStationsInput
  onlineUsers: UserCreateManyInput
}

input StationCreateWithoutTagsInput {
  id: ID
  name: String!
  slug: String!
  description: String
  userRoles: UserRoleCreateManyWithoutStationInput
  onlineUsers: UserCreateManyInput
  songs: SongCreateManyWithoutStationInput
}

input StationCreateWithoutUserRolesInput {
  id: ID
  name: String!
  slug: String!
  description: String
  tags: StationTagCreateManyWithoutStationsInput
  onlineUsers: UserCreateManyInput
  songs: SongCreateManyWithoutStationInput
}

"""An edge in a connection."""
type StationEdge {
  """The item at the end of the edge."""
  node: Station!

  """A cursor for use in pagination."""
  cursor: String!
}

enum StationOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  name_ASC
  name_DESC
  slug_ASC
  slug_DESC
  description_ASC
  description_DESC
}

type StationPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  slug: String!
  description: String
}

input StationScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [StationScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [StationScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [StationScalarWhereInput!]
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
  slug: String

  """All values that are not equal to given value."""
  slug_not: String

  """All values that are contained in given list."""
  slug_in: [String!]

  """All values that are not contained in given list."""
  slug_not_in: [String!]

  """All values less than the given value."""
  slug_lt: String

  """All values less than or equal the given value."""
  slug_lte: String

  """All values greater than the given value."""
  slug_gt: String

  """All values greater than or equal the given value."""
  slug_gte: String

  """All values containing the given string."""
  slug_contains: String

  """All values not containing the given string."""
  slug_not_contains: String

  """All values starting with the given string."""
  slug_starts_with: String

  """All values not starting with the given string."""
  slug_not_starts_with: String

  """All values ending with the given string."""
  slug_ends_with: String

  """All values not ending with the given string."""
  slug_not_ends_with: String
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
}

type StationSubscriptionPayload {
  mutation: MutationType!
  node: Station
  updatedFields: [String!]
  previousValues: StationPreviousValues
}

input StationSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [StationSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [StationSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [StationSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
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
  node: StationWhereInput
}

type StationTag implements Node {
  id: ID!
  name: String!
  stations(where: StationWhereInput, orderBy: StationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Station!]
}

"""A connection to a list of items."""
type StationTagConnection {
  """Information to aid in pagination."""
  pageInfo: PageInfo!

  """A list of edges."""
  edges: [StationTagEdge]!
  aggregate: AggregateStationTag!
}

input StationTagCreateInput {
  id: ID
  name: String!
  stations: StationCreateManyWithoutTagsInput
}

input StationTagCreateManyWithoutStationsInput {
  create: [StationTagCreateWithoutStationsInput!]
  connect: [StationTagWhereUniqueInput!]
}

input StationTagCreateWithoutStationsInput {
  id: ID
  name: String!
}

"""An edge in a connection."""
type StationTagEdge {
  """The item at the end of the edge."""
  node: StationTag!

  """A cursor for use in pagination."""
  cursor: String!
}

enum StationTagOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
}

type StationTagPreviousValues {
  id: ID!
  name: String!
}

input StationTagScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [StationTagScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [StationTagScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [StationTagScalarWhereInput!]
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
}

type StationTagSubscriptionPayload {
  mutation: MutationType!
  node: StationTag
  updatedFields: [String!]
  previousValues: StationTagPreviousValues
}

input StationTagSubscriptionWhereInput {
  """Logical AND on all given filters."""
  AND: [StationTagSubscriptionWhereInput!]

  """Logical OR on all given filters."""
  OR: [StationTagSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [StationTagSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
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
  node: StationTagWhereInput
}

input StationTagUpdateInput {
  name: String
  stations: StationUpdateManyWithoutTagsInput
}

input StationTagUpdateManyDataInput {
  name: String
}

input StationTagUpdateManyMutationInput {
  name: String
}

input StationTagUpdateManyWithoutStationsInput {
  create: [StationTagCreateWithoutStationsInput!]
  connect: [StationTagWhereUniqueInput!]
  set: [StationTagWhereUniqueInput!]
  disconnect: [StationTagWhereUniqueInput!]
  delete: [StationTagWhereUniqueInput!]
  update: [StationTagUpdateWithWhereUniqueWithoutStationsInput!]
  updateMany: [StationTagUpdateManyWithWhereNestedInput!]
  deleteMany: [StationTagScalarWhereInput!]
  upsert: [StationTagUpsertWithWhereUniqueWithoutStationsInput!]
}

input StationTagUpdateManyWithWhereNestedInput {
  where: StationTagScalarWhereInput!
  data: StationTagUpdateManyDataInput!
}

input StationTagUpdateWithoutStationsDataInput {
  name: String
}

input StationTagUpdateWithWhereUniqueWithoutStationsInput {
  where: StationTagWhereUniqueInput!
  data: StationTagUpdateWithoutStationsDataInput!
}

input StationTagUpsertWithWhereUniqueWithoutStationsInput {
  where: StationTagWhereUniqueInput!
  update: StationTagUpdateWithoutStationsDataInput!
  create: StationTagCreateWithoutStationsInput!
}

input StationTagWhereInput {
  """Logical AND on all given filters."""
  AND: [StationTagWhereInput!]

  """Logical OR on all given filters."""
  OR: [StationTagWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [StationTagWhereInput!]
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
  stations_every: StationWhereInput
  stations_some: StationWhereInput
  stations_none: StationWhereInput
}

input StationTagWhereUniqueInput {
  id: ID
}

input StationUpdateInput {
  name: String
  slug: String
  description: String
  userRoles: UserRoleUpdateManyWithoutStationInput
  tags: StationTagUpdateManyWithoutStationsInput
  onlineUsers: UserUpdateManyInput
  songs: SongUpdateManyWithoutStationInput
}

input StationUpdateManyDataInput {
  name: String
  slug: String
  description: String
}

input StationUpdateManyMutationInput {
  name: String
  slug: String
  description: String
}

input StationUpdateManyWithoutTagsInput {
  create: [StationCreateWithoutTagsInput!]
  connect: [StationWhereUniqueInput!]
  set: [StationWhereUniqueInput!]
  disconnect: [StationWhereUniqueInput!]
  delete: [StationWhereUniqueInput!]
  update: [StationUpdateWithWhereUniqueWithoutTagsInput!]
  updateMany: [StationUpdateManyWithWhereNestedInput!]
  deleteMany: [StationScalarWhereInput!]
  upsert: [StationUpsertWithWhereUniqueWithoutTagsInput!]
}

input StationUpdateManyWithWhereNestedInput {
  where: StationScalarWhereInput!
  data: StationUpdateManyDataInput!
}

input StationUpdateOneRequiredWithoutSongsInput {
  create: StationCreateWithoutSongsInput
  connect: StationWhereUniqueInput
  update: StationUpdateWithoutSongsDataInput
  upsert: StationUpsertWithoutSongsInput
}

input StationUpdateOneWithoutUserRolesInput {
  create: StationCreateWithoutUserRolesInput
  connect: StationWhereUniqueInput
  disconnect: Boolean
  delete: Boolean
  update: StationUpdateWithoutUserRolesDataInput
  upsert: StationUpsertWithoutUserRolesInput
}

input StationUpdateWithoutSongsDataInput {
  name: String
  slug: String
  description: String
  userRoles: UserRoleUpdateManyWithoutStationInput
  tags: StationTagUpdateManyWithoutStationsInput
  onlineUsers: UserUpdateManyInput
}

input StationUpdateWithoutTagsDataInput {
  name: String
  slug: String
  description: String
  userRoles: UserRoleUpdateManyWithoutStationInput
  onlineUsers: UserUpdateManyInput
  songs: SongUpdateManyWithoutStationInput
}

input StationUpdateWithoutUserRolesDataInput {
  name: String
  slug: String
  description: String
  tags: StationTagUpdateManyWithoutStationsInput
  onlineUsers: UserUpdateManyInput
  songs: SongUpdateManyWithoutStationInput
}

input StationUpdateWithWhereUniqueWithoutTagsInput {
  where: StationWhereUniqueInput!
  data: StationUpdateWithoutTagsDataInput!
}

input StationUpsertWithoutSongsInput {
  update: StationUpdateWithoutSongsDataInput!
  create: StationCreateWithoutSongsInput!
}

input StationUpsertWithoutUserRolesInput {
  update: StationUpdateWithoutUserRolesDataInput!
  create: StationCreateWithoutUserRolesInput!
}

input StationUpsertWithWhereUniqueWithoutTagsInput {
  where: StationWhereUniqueInput!
  update: StationUpdateWithoutTagsDataInput!
  create: StationCreateWithoutTagsInput!
}

input StationWhereInput {
  """Logical AND on all given filters."""
  AND: [StationWhereInput!]

  """Logical OR on all given filters."""
  OR: [StationWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [StationWhereInput!]
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
  slug: String

  """All values that are not equal to given value."""
  slug_not: String

  """All values that are contained in given list."""
  slug_in: [String!]

  """All values that are not contained in given list."""
  slug_not_in: [String!]

  """All values less than the given value."""
  slug_lt: String

  """All values less than or equal the given value."""
  slug_lte: String

  """All values greater than the given value."""
  slug_gt: String

  """All values greater than or equal the given value."""
  slug_gte: String

  """All values containing the given string."""
  slug_contains: String

  """All values not containing the given string."""
  slug_not_contains: String

  """All values starting with the given string."""
  slug_starts_with: String

  """All values not starting with the given string."""
  slug_not_starts_with: String

  """All values ending with the given string."""
  slug_ends_with: String

  """All values not ending with the given string."""
  slug_not_ends_with: String
  description: String

  """All values that are not equal to given value."""
  description_not: String

  """All values that are contained in given list."""
  description_in: [String!]

  """All values that are not contained in given list."""
  description_not_in: [String!]

  """All values less than the given value."""
  description_lt: String

  """All values less than or equal the given value."""
  description_lte: String

  """All values greater than the given value."""
  description_gt: String

  """All values greater than or equal the given value."""
  description_gte: String

  """All values containing the given string."""
  description_contains: String

  """All values not containing the given string."""
  description_not_contains: String

  """All values starting with the given string."""
  description_starts_with: String

  """All values not starting with the given string."""
  description_not_starts_with: String

  """All values ending with the given string."""
  description_ends_with: String

  """All values not ending with the given string."""
  description_not_ends_with: String
  userRoles_every: UserRoleWhereInput
  userRoles_some: UserRoleWhereInput
  userRoles_none: UserRoleWhereInput
  tags_every: StationTagWhereInput
  tags_some: StationTagWhereInput
  tags_none: StationTagWhereInput
  onlineUsers_every: UserWhereInput
  onlineUsers_some: UserWhereInput
  onlineUsers_none: UserWhereInput
  songs_every: SongWhereInput
  songs_some: SongWhereInput
  songs_none: SongWhereInput
}

input StationWhereUniqueInput {
  id: ID
  name: String
  slug: String
}

type Subscription {
  userRole(where: UserRoleSubscriptionWhereInput): UserRoleSubscriptionPayload
  station(where: StationSubscriptionWhereInput): StationSubscriptionPayload
  stationTag(where: StationTagSubscriptionWhereInput): StationTagSubscriptionPayload
  song(where: SongSubscriptionWhereInput): SongSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User implements Node {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  email: String!
  username: String!
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
  id: ID
  email: String!
  username: String!
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

input UserCreateManyInput {
  create: [UserCreateInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutRolesInput {
  create: UserCreateWithoutRolesInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutRolesInput {
  id: ID
  email: String!
  username: String!
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
  username: String!
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
  user: User!
  role: UserRoleEnum!
  station: Station
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
  id: ID
  role: UserRoleEnum!
  user: UserCreateOneWithoutRolesInput!
  station: StationCreateOneWithoutUserRolesInput
}

input UserRoleCreateManyWithoutStationInput {
  create: [UserRoleCreateWithoutStationInput!]
  connect: [UserRoleWhereUniqueInput!]
}

input UserRoleCreateManyWithoutUserInput {
  create: [UserRoleCreateWithoutUserInput!]
  connect: [UserRoleWhereUniqueInput!]
}

input UserRoleCreateWithoutStationInput {
  id: ID
  role: UserRoleEnum!
  user: UserCreateOneWithoutRolesInput!
}

input UserRoleCreateWithoutUserInput {
  id: ID
  role: UserRoleEnum!
  station: StationCreateOneWithoutUserRolesInput
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
  STATION_ADMIN
}

enum UserRoleOrderByInput {
  id_ASC
  id_DESC
  role_ASC
  role_DESC
}

type UserRolePreviousValues {
  id: ID!
  role: UserRoleEnum!
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

  """Logical OR on all given filters."""
  OR: [UserRoleSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserRoleSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
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
  user: UserUpdateOneRequiredWithoutRolesInput
  station: StationUpdateOneWithoutUserRolesInput
}

input UserRoleUpdateManyDataInput {
  role: UserRoleEnum
}

input UserRoleUpdateManyMutationInput {
  role: UserRoleEnum
}

input UserRoleUpdateManyWithoutStationInput {
  create: [UserRoleCreateWithoutStationInput!]
  connect: [UserRoleWhereUniqueInput!]
  set: [UserRoleWhereUniqueInput!]
  disconnect: [UserRoleWhereUniqueInput!]
  delete: [UserRoleWhereUniqueInput!]
  update: [UserRoleUpdateWithWhereUniqueWithoutStationInput!]
  updateMany: [UserRoleUpdateManyWithWhereNestedInput!]
  deleteMany: [UserRoleScalarWhereInput!]
  upsert: [UserRoleUpsertWithWhereUniqueWithoutStationInput!]
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

input UserRoleUpdateWithoutStationDataInput {
  role: UserRoleEnum
  user: UserUpdateOneRequiredWithoutRolesInput
}

input UserRoleUpdateWithoutUserDataInput {
  role: UserRoleEnum
  station: StationUpdateOneWithoutUserRolesInput
}

input UserRoleUpdateWithWhereUniqueWithoutStationInput {
  where: UserRoleWhereUniqueInput!
  data: UserRoleUpdateWithoutStationDataInput!
}

input UserRoleUpdateWithWhereUniqueWithoutUserInput {
  where: UserRoleWhereUniqueInput!
  data: UserRoleUpdateWithoutUserDataInput!
}

input UserRoleUpsertWithWhereUniqueWithoutStationInput {
  where: UserRoleWhereUniqueInput!
  update: UserRoleUpdateWithoutStationDataInput!
  create: UserRoleCreateWithoutStationInput!
}

input UserRoleUpsertWithWhereUniqueWithoutUserInput {
  where: UserRoleWhereUniqueInput!
  update: UserRoleUpdateWithoutUserDataInput!
  create: UserRoleCreateWithoutUserInput!
}

input UserRoleWhereInput {
  """Logical AND on all given filters."""
  AND: [UserRoleWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserRoleWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserRoleWhereInput!]
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
  user: UserWhereInput
  station: StationWhereInput
}

input UserRoleWhereUniqueInput {
  id: ID
}

input UserScalarWhereInput {
  """Logical AND on all given filters."""
  AND: [UserScalarWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserScalarWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserScalarWhereInput!]
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

  """Logical OR on all given filters."""
  OR: [UserSubscriptionWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserSubscriptionWhereInput!]

  """The subscription event gets dispatched when it's listed in mutation_in"""
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

input UserUpdateDataInput {
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

input UserUpdateManyDataInput {
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

input UserUpdateManyInput {
  create: [UserCreateInput!]
  connect: [UserWhereUniqueInput!]
  set: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  delete: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueNestedInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
  deleteMany: [UserScalarWhereInput!]
  upsert: [UserUpsertWithWhereUniqueNestedInput!]
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

input UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput!
  data: UserUpdateManyDataInput!
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
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

input UserUpdateWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput!
  data: UserUpdateDataInput!
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithoutRolesInput {
  update: UserUpdateWithoutRolesDataInput!
  create: UserCreateWithoutRolesInput!
}

input UserUpsertWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput!
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserWhereInput {
  """Logical AND on all given filters."""
  AND: [UserWhereInput!]

  """Logical OR on all given filters."""
  OR: [UserWhereInput!]

  """Logical NOT on all given filters combined by AND."""
  NOT: [UserWhereInput!]
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
  roles_every: UserRoleWhereInput
  roles_some: UserRoleWhereInput
  roles_none: UserRoleWhereInput
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

export type SongOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'title_ASC' |
  'title_DESC' |
  'url_ASC' |
  'url_DESC' |
  'thumbnail_ASC' |
  'thumbnail_DESC' |
  'duration_ASC' |
  'duration_DESC' |
  'status_ASC' |
  'status_DESC' |
  'startedAt_ASC' |
  'startedAt_DESC'

export type SongStatusEnum =   'PENDING' |
  'PLAYING' |
  'PLAYED' |
  'SKIPPED'

export type StationOrderByInput =   'id_ASC' |
  'id_DESC' |
  'createdAt_ASC' |
  'createdAt_DESC' |
  'updatedAt_ASC' |
  'updatedAt_DESC' |
  'name_ASC' |
  'name_DESC' |
  'slug_ASC' |
  'slug_DESC' |
  'description_ASC' |
  'description_DESC'

export type StationTagOrderByInput =   'id_ASC' |
  'id_DESC' |
  'name_ASC' |
  'name_DESC'

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
  'STATION_OWNER' |
  'STATION_ADMIN'

export type UserRoleOrderByInput =   'id_ASC' |
  'id_DESC' |
  'role_ASC' |
  'role_DESC'

export interface SongCreateInput {
  id?: ID_Input | null
  title: String
  url: String
  thumbnail: String
  duration: Int
  status: SongStatusEnum
  startedAt?: DateTime | null
  creator: UserCreateOneInput
  station: StationCreateOneWithoutSongsInput
  upVotes?: UserCreateManyInput | null
  downVotes?: UserCreateManyInput | null
}

export interface SongCreateManyWithoutStationInput {
  create?: SongCreateWithoutStationInput[] | SongCreateWithoutStationInput | null
  connect?: SongWhereUniqueInput[] | SongWhereUniqueInput | null
}

export interface SongCreateWithoutStationInput {
  id?: ID_Input | null
  title: String
  url: String
  thumbnail: String
  duration: Int
  status: SongStatusEnum
  startedAt?: DateTime | null
  creator: UserCreateOneInput
  upVotes?: UserCreateManyInput | null
  downVotes?: UserCreateManyInput | null
}

export interface SongScalarWhereInput {
  AND?: SongScalarWhereInput[] | SongScalarWhereInput | null
  OR?: SongScalarWhereInput[] | SongScalarWhereInput | null
  NOT?: SongScalarWhereInput[] | SongScalarWhereInput | null
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
  title?: String | null
  title_not?: String | null
  title_in?: String[] | String | null
  title_not_in?: String[] | String | null
  title_lt?: String | null
  title_lte?: String | null
  title_gt?: String | null
  title_gte?: String | null
  title_contains?: String | null
  title_not_contains?: String | null
  title_starts_with?: String | null
  title_not_starts_with?: String | null
  title_ends_with?: String | null
  title_not_ends_with?: String | null
  url?: String | null
  url_not?: String | null
  url_in?: String[] | String | null
  url_not_in?: String[] | String | null
  url_lt?: String | null
  url_lte?: String | null
  url_gt?: String | null
  url_gte?: String | null
  url_contains?: String | null
  url_not_contains?: String | null
  url_starts_with?: String | null
  url_not_starts_with?: String | null
  url_ends_with?: String | null
  url_not_ends_with?: String | null
  thumbnail?: String | null
  thumbnail_not?: String | null
  thumbnail_in?: String[] | String | null
  thumbnail_not_in?: String[] | String | null
  thumbnail_lt?: String | null
  thumbnail_lte?: String | null
  thumbnail_gt?: String | null
  thumbnail_gte?: String | null
  thumbnail_contains?: String | null
  thumbnail_not_contains?: String | null
  thumbnail_starts_with?: String | null
  thumbnail_not_starts_with?: String | null
  thumbnail_ends_with?: String | null
  thumbnail_not_ends_with?: String | null
  duration?: Int | null
  duration_not?: Int | null
  duration_in?: Int[] | Int | null
  duration_not_in?: Int[] | Int | null
  duration_lt?: Int | null
  duration_lte?: Int | null
  duration_gt?: Int | null
  duration_gte?: Int | null
  status?: SongStatusEnum | null
  status_not?: SongStatusEnum | null
  status_in?: SongStatusEnum[] | SongStatusEnum | null
  status_not_in?: SongStatusEnum[] | SongStatusEnum | null
  startedAt?: DateTime | null
  startedAt_not?: DateTime | null
  startedAt_in?: DateTime[] | DateTime | null
  startedAt_not_in?: DateTime[] | DateTime | null
  startedAt_lt?: DateTime | null
  startedAt_lte?: DateTime | null
  startedAt_gt?: DateTime | null
  startedAt_gte?: DateTime | null
}

export interface SongSubscriptionWhereInput {
  AND?: SongSubscriptionWhereInput[] | SongSubscriptionWhereInput | null
  OR?: SongSubscriptionWhereInput[] | SongSubscriptionWhereInput | null
  NOT?: SongSubscriptionWhereInput[] | SongSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: SongWhereInput | null
}

export interface SongUpdateInput {
  title?: String | null
  url?: String | null
  thumbnail?: String | null
  duration?: Int | null
  status?: SongStatusEnum | null
  startedAt?: DateTime | null
  creator?: UserUpdateOneRequiredInput | null
  station?: StationUpdateOneRequiredWithoutSongsInput | null
  upVotes?: UserUpdateManyInput | null
  downVotes?: UserUpdateManyInput | null
}

export interface SongUpdateManyDataInput {
  title?: String | null
  url?: String | null
  thumbnail?: String | null
  duration?: Int | null
  status?: SongStatusEnum | null
  startedAt?: DateTime | null
}

export interface SongUpdateManyMutationInput {
  title?: String | null
  url?: String | null
  thumbnail?: String | null
  duration?: Int | null
  status?: SongStatusEnum | null
  startedAt?: DateTime | null
}

export interface SongUpdateManyWithoutStationInput {
  create?: SongCreateWithoutStationInput[] | SongCreateWithoutStationInput | null
  connect?: SongWhereUniqueInput[] | SongWhereUniqueInput | null
  set?: SongWhereUniqueInput[] | SongWhereUniqueInput | null
  disconnect?: SongWhereUniqueInput[] | SongWhereUniqueInput | null
  delete?: SongWhereUniqueInput[] | SongWhereUniqueInput | null
  update?: SongUpdateWithWhereUniqueWithoutStationInput[] | SongUpdateWithWhereUniqueWithoutStationInput | null
  updateMany?: SongUpdateManyWithWhereNestedInput[] | SongUpdateManyWithWhereNestedInput | null
  deleteMany?: SongScalarWhereInput[] | SongScalarWhereInput | null
  upsert?: SongUpsertWithWhereUniqueWithoutStationInput[] | SongUpsertWithWhereUniqueWithoutStationInput | null
}

export interface SongUpdateManyWithWhereNestedInput {
  where: SongScalarWhereInput
  data: SongUpdateManyDataInput
}

export interface SongUpdateWithoutStationDataInput {
  title?: String | null
  url?: String | null
  thumbnail?: String | null
  duration?: Int | null
  status?: SongStatusEnum | null
  startedAt?: DateTime | null
  creator?: UserUpdateOneRequiredInput | null
  upVotes?: UserUpdateManyInput | null
  downVotes?: UserUpdateManyInput | null
}

export interface SongUpdateWithWhereUniqueWithoutStationInput {
  where: SongWhereUniqueInput
  data: SongUpdateWithoutStationDataInput
}

export interface SongUpsertWithWhereUniqueWithoutStationInput {
  where: SongWhereUniqueInput
  update: SongUpdateWithoutStationDataInput
  create: SongCreateWithoutStationInput
}

export interface SongWhereInput {
  AND?: SongWhereInput[] | SongWhereInput | null
  OR?: SongWhereInput[] | SongWhereInput | null
  NOT?: SongWhereInput[] | SongWhereInput | null
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
  title?: String | null
  title_not?: String | null
  title_in?: String[] | String | null
  title_not_in?: String[] | String | null
  title_lt?: String | null
  title_lte?: String | null
  title_gt?: String | null
  title_gte?: String | null
  title_contains?: String | null
  title_not_contains?: String | null
  title_starts_with?: String | null
  title_not_starts_with?: String | null
  title_ends_with?: String | null
  title_not_ends_with?: String | null
  url?: String | null
  url_not?: String | null
  url_in?: String[] | String | null
  url_not_in?: String[] | String | null
  url_lt?: String | null
  url_lte?: String | null
  url_gt?: String | null
  url_gte?: String | null
  url_contains?: String | null
  url_not_contains?: String | null
  url_starts_with?: String | null
  url_not_starts_with?: String | null
  url_ends_with?: String | null
  url_not_ends_with?: String | null
  thumbnail?: String | null
  thumbnail_not?: String | null
  thumbnail_in?: String[] | String | null
  thumbnail_not_in?: String[] | String | null
  thumbnail_lt?: String | null
  thumbnail_lte?: String | null
  thumbnail_gt?: String | null
  thumbnail_gte?: String | null
  thumbnail_contains?: String | null
  thumbnail_not_contains?: String | null
  thumbnail_starts_with?: String | null
  thumbnail_not_starts_with?: String | null
  thumbnail_ends_with?: String | null
  thumbnail_not_ends_with?: String | null
  duration?: Int | null
  duration_not?: Int | null
  duration_in?: Int[] | Int | null
  duration_not_in?: Int[] | Int | null
  duration_lt?: Int | null
  duration_lte?: Int | null
  duration_gt?: Int | null
  duration_gte?: Int | null
  status?: SongStatusEnum | null
  status_not?: SongStatusEnum | null
  status_in?: SongStatusEnum[] | SongStatusEnum | null
  status_not_in?: SongStatusEnum[] | SongStatusEnum | null
  startedAt?: DateTime | null
  startedAt_not?: DateTime | null
  startedAt_in?: DateTime[] | DateTime | null
  startedAt_not_in?: DateTime[] | DateTime | null
  startedAt_lt?: DateTime | null
  startedAt_lte?: DateTime | null
  startedAt_gt?: DateTime | null
  startedAt_gte?: DateTime | null
  creator?: UserWhereInput | null
  station?: StationWhereInput | null
  upVotes_every?: UserWhereInput | null
  upVotes_some?: UserWhereInput | null
  upVotes_none?: UserWhereInput | null
  downVotes_every?: UserWhereInput | null
  downVotes_some?: UserWhereInput | null
  downVotes_none?: UserWhereInput | null
}

export interface SongWhereUniqueInput {
  id?: ID_Input | null
}

export interface StationCreateInput {
  id?: ID_Input | null
  name: String
  slug: String
  description?: String | null
  userRoles?: UserRoleCreateManyWithoutStationInput | null
  tags?: StationTagCreateManyWithoutStationsInput | null
  onlineUsers?: UserCreateManyInput | null
  songs?: SongCreateManyWithoutStationInput | null
}

export interface StationCreateManyWithoutTagsInput {
  create?: StationCreateWithoutTagsInput[] | StationCreateWithoutTagsInput | null
  connect?: StationWhereUniqueInput[] | StationWhereUniqueInput | null
}

export interface StationCreateOneWithoutSongsInput {
  create?: StationCreateWithoutSongsInput | null
  connect?: StationWhereUniqueInput | null
}

export interface StationCreateOneWithoutUserRolesInput {
  create?: StationCreateWithoutUserRolesInput | null
  connect?: StationWhereUniqueInput | null
}

export interface StationCreateWithoutSongsInput {
  id?: ID_Input | null
  name: String
  slug: String
  description?: String | null
  userRoles?: UserRoleCreateManyWithoutStationInput | null
  tags?: StationTagCreateManyWithoutStationsInput | null
  onlineUsers?: UserCreateManyInput | null
}

export interface StationCreateWithoutTagsInput {
  id?: ID_Input | null
  name: String
  slug: String
  description?: String | null
  userRoles?: UserRoleCreateManyWithoutStationInput | null
  onlineUsers?: UserCreateManyInput | null
  songs?: SongCreateManyWithoutStationInput | null
}

export interface StationCreateWithoutUserRolesInput {
  id?: ID_Input | null
  name: String
  slug: String
  description?: String | null
  tags?: StationTagCreateManyWithoutStationsInput | null
  onlineUsers?: UserCreateManyInput | null
  songs?: SongCreateManyWithoutStationInput | null
}

export interface StationScalarWhereInput {
  AND?: StationScalarWhereInput[] | StationScalarWhereInput | null
  OR?: StationScalarWhereInput[] | StationScalarWhereInput | null
  NOT?: StationScalarWhereInput[] | StationScalarWhereInput | null
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
  slug?: String | null
  slug_not?: String | null
  slug_in?: String[] | String | null
  slug_not_in?: String[] | String | null
  slug_lt?: String | null
  slug_lte?: String | null
  slug_gt?: String | null
  slug_gte?: String | null
  slug_contains?: String | null
  slug_not_contains?: String | null
  slug_starts_with?: String | null
  slug_not_starts_with?: String | null
  slug_ends_with?: String | null
  slug_not_ends_with?: String | null
  description?: String | null
  description_not?: String | null
  description_in?: String[] | String | null
  description_not_in?: String[] | String | null
  description_lt?: String | null
  description_lte?: String | null
  description_gt?: String | null
  description_gte?: String | null
  description_contains?: String | null
  description_not_contains?: String | null
  description_starts_with?: String | null
  description_not_starts_with?: String | null
  description_ends_with?: String | null
  description_not_ends_with?: String | null
}

export interface StationSubscriptionWhereInput {
  AND?: StationSubscriptionWhereInput[] | StationSubscriptionWhereInput | null
  OR?: StationSubscriptionWhereInput[] | StationSubscriptionWhereInput | null
  NOT?: StationSubscriptionWhereInput[] | StationSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: StationWhereInput | null
}

export interface StationTagCreateInput {
  id?: ID_Input | null
  name: String
  stations?: StationCreateManyWithoutTagsInput | null
}

export interface StationTagCreateManyWithoutStationsInput {
  create?: StationTagCreateWithoutStationsInput[] | StationTagCreateWithoutStationsInput | null
  connect?: StationTagWhereUniqueInput[] | StationTagWhereUniqueInput | null
}

export interface StationTagCreateWithoutStationsInput {
  id?: ID_Input | null
  name: String
}

export interface StationTagScalarWhereInput {
  AND?: StationTagScalarWhereInput[] | StationTagScalarWhereInput | null
  OR?: StationTagScalarWhereInput[] | StationTagScalarWhereInput | null
  NOT?: StationTagScalarWhereInput[] | StationTagScalarWhereInput | null
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
}

export interface StationTagSubscriptionWhereInput {
  AND?: StationTagSubscriptionWhereInput[] | StationTagSubscriptionWhereInput | null
  OR?: StationTagSubscriptionWhereInput[] | StationTagSubscriptionWhereInput | null
  NOT?: StationTagSubscriptionWhereInput[] | StationTagSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: StationTagWhereInput | null
}

export interface StationTagUpdateInput {
  name?: String | null
  stations?: StationUpdateManyWithoutTagsInput | null
}

export interface StationTagUpdateManyDataInput {
  name?: String | null
}

export interface StationTagUpdateManyMutationInput {
  name?: String | null
}

export interface StationTagUpdateManyWithoutStationsInput {
  create?: StationTagCreateWithoutStationsInput[] | StationTagCreateWithoutStationsInput | null
  connect?: StationTagWhereUniqueInput[] | StationTagWhereUniqueInput | null
  set?: StationTagWhereUniqueInput[] | StationTagWhereUniqueInput | null
  disconnect?: StationTagWhereUniqueInput[] | StationTagWhereUniqueInput | null
  delete?: StationTagWhereUniqueInput[] | StationTagWhereUniqueInput | null
  update?: StationTagUpdateWithWhereUniqueWithoutStationsInput[] | StationTagUpdateWithWhereUniqueWithoutStationsInput | null
  updateMany?: StationTagUpdateManyWithWhereNestedInput[] | StationTagUpdateManyWithWhereNestedInput | null
  deleteMany?: StationTagScalarWhereInput[] | StationTagScalarWhereInput | null
  upsert?: StationTagUpsertWithWhereUniqueWithoutStationsInput[] | StationTagUpsertWithWhereUniqueWithoutStationsInput | null
}

export interface StationTagUpdateManyWithWhereNestedInput {
  where: StationTagScalarWhereInput
  data: StationTagUpdateManyDataInput
}

export interface StationTagUpdateWithoutStationsDataInput {
  name?: String | null
}

export interface StationTagUpdateWithWhereUniqueWithoutStationsInput {
  where: StationTagWhereUniqueInput
  data: StationTagUpdateWithoutStationsDataInput
}

export interface StationTagUpsertWithWhereUniqueWithoutStationsInput {
  where: StationTagWhereUniqueInput
  update: StationTagUpdateWithoutStationsDataInput
  create: StationTagCreateWithoutStationsInput
}

export interface StationTagWhereInput {
  AND?: StationTagWhereInput[] | StationTagWhereInput | null
  OR?: StationTagWhereInput[] | StationTagWhereInput | null
  NOT?: StationTagWhereInput[] | StationTagWhereInput | null
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
  stations_every?: StationWhereInput | null
  stations_some?: StationWhereInput | null
  stations_none?: StationWhereInput | null
}

export interface StationTagWhereUniqueInput {
  id?: ID_Input | null
}

export interface StationUpdateInput {
  name?: String | null
  slug?: String | null
  description?: String | null
  userRoles?: UserRoleUpdateManyWithoutStationInput | null
  tags?: StationTagUpdateManyWithoutStationsInput | null
  onlineUsers?: UserUpdateManyInput | null
  songs?: SongUpdateManyWithoutStationInput | null
}

export interface StationUpdateManyDataInput {
  name?: String | null
  slug?: String | null
  description?: String | null
}

export interface StationUpdateManyMutationInput {
  name?: String | null
  slug?: String | null
  description?: String | null
}

export interface StationUpdateManyWithoutTagsInput {
  create?: StationCreateWithoutTagsInput[] | StationCreateWithoutTagsInput | null
  connect?: StationWhereUniqueInput[] | StationWhereUniqueInput | null
  set?: StationWhereUniqueInput[] | StationWhereUniqueInput | null
  disconnect?: StationWhereUniqueInput[] | StationWhereUniqueInput | null
  delete?: StationWhereUniqueInput[] | StationWhereUniqueInput | null
  update?: StationUpdateWithWhereUniqueWithoutTagsInput[] | StationUpdateWithWhereUniqueWithoutTagsInput | null
  updateMany?: StationUpdateManyWithWhereNestedInput[] | StationUpdateManyWithWhereNestedInput | null
  deleteMany?: StationScalarWhereInput[] | StationScalarWhereInput | null
  upsert?: StationUpsertWithWhereUniqueWithoutTagsInput[] | StationUpsertWithWhereUniqueWithoutTagsInput | null
}

export interface StationUpdateManyWithWhereNestedInput {
  where: StationScalarWhereInput
  data: StationUpdateManyDataInput
}

export interface StationUpdateOneRequiredWithoutSongsInput {
  create?: StationCreateWithoutSongsInput | null
  connect?: StationWhereUniqueInput | null
  update?: StationUpdateWithoutSongsDataInput | null
  upsert?: StationUpsertWithoutSongsInput | null
}

export interface StationUpdateOneWithoutUserRolesInput {
  create?: StationCreateWithoutUserRolesInput | null
  connect?: StationWhereUniqueInput | null
  disconnect?: Boolean | null
  delete?: Boolean | null
  update?: StationUpdateWithoutUserRolesDataInput | null
  upsert?: StationUpsertWithoutUserRolesInput | null
}

export interface StationUpdateWithoutSongsDataInput {
  name?: String | null
  slug?: String | null
  description?: String | null
  userRoles?: UserRoleUpdateManyWithoutStationInput | null
  tags?: StationTagUpdateManyWithoutStationsInput | null
  onlineUsers?: UserUpdateManyInput | null
}

export interface StationUpdateWithoutTagsDataInput {
  name?: String | null
  slug?: String | null
  description?: String | null
  userRoles?: UserRoleUpdateManyWithoutStationInput | null
  onlineUsers?: UserUpdateManyInput | null
  songs?: SongUpdateManyWithoutStationInput | null
}

export interface StationUpdateWithoutUserRolesDataInput {
  name?: String | null
  slug?: String | null
  description?: String | null
  tags?: StationTagUpdateManyWithoutStationsInput | null
  onlineUsers?: UserUpdateManyInput | null
  songs?: SongUpdateManyWithoutStationInput | null
}

export interface StationUpdateWithWhereUniqueWithoutTagsInput {
  where: StationWhereUniqueInput
  data: StationUpdateWithoutTagsDataInput
}

export interface StationUpsertWithoutSongsInput {
  update: StationUpdateWithoutSongsDataInput
  create: StationCreateWithoutSongsInput
}

export interface StationUpsertWithoutUserRolesInput {
  update: StationUpdateWithoutUserRolesDataInput
  create: StationCreateWithoutUserRolesInput
}

export interface StationUpsertWithWhereUniqueWithoutTagsInput {
  where: StationWhereUniqueInput
  update: StationUpdateWithoutTagsDataInput
  create: StationCreateWithoutTagsInput
}

export interface StationWhereInput {
  AND?: StationWhereInput[] | StationWhereInput | null
  OR?: StationWhereInput[] | StationWhereInput | null
  NOT?: StationWhereInput[] | StationWhereInput | null
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
  slug?: String | null
  slug_not?: String | null
  slug_in?: String[] | String | null
  slug_not_in?: String[] | String | null
  slug_lt?: String | null
  slug_lte?: String | null
  slug_gt?: String | null
  slug_gte?: String | null
  slug_contains?: String | null
  slug_not_contains?: String | null
  slug_starts_with?: String | null
  slug_not_starts_with?: String | null
  slug_ends_with?: String | null
  slug_not_ends_with?: String | null
  description?: String | null
  description_not?: String | null
  description_in?: String[] | String | null
  description_not_in?: String[] | String | null
  description_lt?: String | null
  description_lte?: String | null
  description_gt?: String | null
  description_gte?: String | null
  description_contains?: String | null
  description_not_contains?: String | null
  description_starts_with?: String | null
  description_not_starts_with?: String | null
  description_ends_with?: String | null
  description_not_ends_with?: String | null
  userRoles_every?: UserRoleWhereInput | null
  userRoles_some?: UserRoleWhereInput | null
  userRoles_none?: UserRoleWhereInput | null
  tags_every?: StationTagWhereInput | null
  tags_some?: StationTagWhereInput | null
  tags_none?: StationTagWhereInput | null
  onlineUsers_every?: UserWhereInput | null
  onlineUsers_some?: UserWhereInput | null
  onlineUsers_none?: UserWhereInput | null
  songs_every?: SongWhereInput | null
  songs_some?: SongWhereInput | null
  songs_none?: SongWhereInput | null
}

export interface StationWhereUniqueInput {
  id?: ID_Input | null
  name?: String | null
  slug?: String | null
}

export interface UserCreateInput {
  id?: ID_Input | null
  email: String
  username: String
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

export interface UserCreateManyInput {
  create?: UserCreateInput[] | UserCreateInput | null
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
}

export interface UserCreateOneInput {
  create?: UserCreateInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateOneWithoutRolesInput {
  create?: UserCreateWithoutRolesInput | null
  connect?: UserWhereUniqueInput | null
}

export interface UserCreateWithoutRolesInput {
  id?: ID_Input | null
  email: String
  username: String
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
  id?: ID_Input | null
  role: UserRoleEnum
  user: UserCreateOneWithoutRolesInput
  station?: StationCreateOneWithoutUserRolesInput | null
}

export interface UserRoleCreateManyWithoutStationInput {
  create?: UserRoleCreateWithoutStationInput[] | UserRoleCreateWithoutStationInput | null
  connect?: UserRoleWhereUniqueInput[] | UserRoleWhereUniqueInput | null
}

export interface UserRoleCreateManyWithoutUserInput {
  create?: UserRoleCreateWithoutUserInput[] | UserRoleCreateWithoutUserInput | null
  connect?: UserRoleWhereUniqueInput[] | UserRoleWhereUniqueInput | null
}

export interface UserRoleCreateWithoutStationInput {
  id?: ID_Input | null
  role: UserRoleEnum
  user: UserCreateOneWithoutRolesInput
}

export interface UserRoleCreateWithoutUserInput {
  id?: ID_Input | null
  role: UserRoleEnum
  station?: StationCreateOneWithoutUserRolesInput | null
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
}

export interface UserRoleSubscriptionWhereInput {
  AND?: UserRoleSubscriptionWhereInput[] | UserRoleSubscriptionWhereInput | null
  OR?: UserRoleSubscriptionWhereInput[] | UserRoleSubscriptionWhereInput | null
  NOT?: UserRoleSubscriptionWhereInput[] | UserRoleSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: UserRoleWhereInput | null
}

export interface UserRoleUpdateInput {
  role?: UserRoleEnum | null
  user?: UserUpdateOneRequiredWithoutRolesInput | null
  station?: StationUpdateOneWithoutUserRolesInput | null
}

export interface UserRoleUpdateManyDataInput {
  role?: UserRoleEnum | null
}

export interface UserRoleUpdateManyMutationInput {
  role?: UserRoleEnum | null
}

export interface UserRoleUpdateManyWithoutStationInput {
  create?: UserRoleCreateWithoutStationInput[] | UserRoleCreateWithoutStationInput | null
  connect?: UserRoleWhereUniqueInput[] | UserRoleWhereUniqueInput | null
  set?: UserRoleWhereUniqueInput[] | UserRoleWhereUniqueInput | null
  disconnect?: UserRoleWhereUniqueInput[] | UserRoleWhereUniqueInput | null
  delete?: UserRoleWhereUniqueInput[] | UserRoleWhereUniqueInput | null
  update?: UserRoleUpdateWithWhereUniqueWithoutStationInput[] | UserRoleUpdateWithWhereUniqueWithoutStationInput | null
  updateMany?: UserRoleUpdateManyWithWhereNestedInput[] | UserRoleUpdateManyWithWhereNestedInput | null
  deleteMany?: UserRoleScalarWhereInput[] | UserRoleScalarWhereInput | null
  upsert?: UserRoleUpsertWithWhereUniqueWithoutStationInput[] | UserRoleUpsertWithWhereUniqueWithoutStationInput | null
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

export interface UserRoleUpdateWithoutStationDataInput {
  role?: UserRoleEnum | null
  user?: UserUpdateOneRequiredWithoutRolesInput | null
}

export interface UserRoleUpdateWithoutUserDataInput {
  role?: UserRoleEnum | null
  station?: StationUpdateOneWithoutUserRolesInput | null
}

export interface UserRoleUpdateWithWhereUniqueWithoutStationInput {
  where: UserRoleWhereUniqueInput
  data: UserRoleUpdateWithoutStationDataInput
}

export interface UserRoleUpdateWithWhereUniqueWithoutUserInput {
  where: UserRoleWhereUniqueInput
  data: UserRoleUpdateWithoutUserDataInput
}

export interface UserRoleUpsertWithWhereUniqueWithoutStationInput {
  where: UserRoleWhereUniqueInput
  update: UserRoleUpdateWithoutStationDataInput
  create: UserRoleCreateWithoutStationInput
}

export interface UserRoleUpsertWithWhereUniqueWithoutUserInput {
  where: UserRoleWhereUniqueInput
  update: UserRoleUpdateWithoutUserDataInput
  create: UserRoleCreateWithoutUserInput
}

export interface UserRoleWhereInput {
  AND?: UserRoleWhereInput[] | UserRoleWhereInput | null
  OR?: UserRoleWhereInput[] | UserRoleWhereInput | null
  NOT?: UserRoleWhereInput[] | UserRoleWhereInput | null
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
  user?: UserWhereInput | null
  station?: StationWhereInput | null
}

export interface UserRoleWhereUniqueInput {
  id?: ID_Input | null
}

export interface UserScalarWhereInput {
  AND?: UserScalarWhereInput[] | UserScalarWhereInput | null
  OR?: UserScalarWhereInput[] | UserScalarWhereInput | null
  NOT?: UserScalarWhereInput[] | UserScalarWhereInput | null
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
}

export interface UserSubscriptionWhereInput {
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput | null
  mutation_in?: MutationType[] | MutationType | null
  updatedFields_contains?: String | null
  updatedFields_contains_every?: String[] | String | null
  updatedFields_contains_some?: String[] | String | null
  node?: UserWhereInput | null
}

export interface UserUpdateDataInput {
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

export interface UserUpdateManyDataInput {
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

export interface UserUpdateManyInput {
  create?: UserCreateInput[] | UserCreateInput | null
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  set?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput | null
  update?: UserUpdateWithWhereUniqueNestedInput[] | UserUpdateWithWhereUniqueNestedInput | null
  updateMany?: UserUpdateManyWithWhereNestedInput[] | UserUpdateManyWithWhereNestedInput | null
  deleteMany?: UserScalarWhereInput[] | UserScalarWhereInput | null
  upsert?: UserUpsertWithWhereUniqueNestedInput[] | UserUpsertWithWhereUniqueNestedInput | null
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

export interface UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput
  data: UserUpdateManyDataInput
}

export interface UserUpdateOneRequiredInput {
  create?: UserCreateInput | null
  connect?: UserWhereUniqueInput | null
  update?: UserUpdateDataInput | null
  upsert?: UserUpsertNestedInput | null
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

export interface UserUpdateWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput
  data: UserUpdateDataInput
}

export interface UserUpsertNestedInput {
  update: UserUpdateDataInput
  create: UserCreateInput
}

export interface UserUpsertWithoutRolesInput {
  update: UserUpdateWithoutRolesDataInput
  create: UserCreateWithoutRolesInput
}

export interface UserUpsertWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput
  update: UserUpdateDataInput
  create: UserCreateInput
}

export interface UserWhereInput {
  AND?: UserWhereInput[] | UserWhereInput | null
  OR?: UserWhereInput[] | UserWhereInput | null
  NOT?: UserWhereInput[] | UserWhereInput | null
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
  roles_every?: UserRoleWhereInput | null
  roles_some?: UserRoleWhereInput | null
  roles_none?: UserRoleWhereInput | null
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

export interface AggregateSong {
  count: Int
}

export interface AggregateStation {
  count: Int
}

export interface AggregateStationTag {
  count: Int
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

export interface Song extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  title: String
  url: String
  thumbnail: String
  duration: Int
  creator: User
  station: Station
  status: SongStatusEnum
  startedAt?: DateTime | null
  upVotes?: Array<User> | null
  downVotes?: Array<User> | null
}

/*
 * A connection to a list of items.

 */
export interface SongConnection {
  pageInfo: PageInfo
  edges: Array<SongEdge | null>
  aggregate: AggregateSong
}

/*
 * An edge in a connection.

 */
export interface SongEdge {
  node: Song
  cursor: String
}

export interface SongPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  title: String
  url: String
  thumbnail: String
  duration: Int
  status: SongStatusEnum
  startedAt?: DateTime | null
}

export interface SongSubscriptionPayload {
  mutation: MutationType
  node?: Song | null
  updatedFields?: Array<String> | null
  previousValues?: SongPreviousValues | null
}

export interface Station extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
  slug: String
  description?: String | null
  userRoles?: Array<UserRole> | null
  tags?: Array<StationTag> | null
  onlineUsers?: Array<User> | null
  songs?: Array<Song> | null
}

/*
 * A connection to a list of items.

 */
export interface StationConnection {
  pageInfo: PageInfo
  edges: Array<StationEdge | null>
  aggregate: AggregateStation
}

/*
 * An edge in a connection.

 */
export interface StationEdge {
  node: Station
  cursor: String
}

export interface StationPreviousValues {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  name: String
  slug: String
  description?: String | null
}

export interface StationSubscriptionPayload {
  mutation: MutationType
  node?: Station | null
  updatedFields?: Array<String> | null
  previousValues?: StationPreviousValues | null
}

export interface StationTag extends Node {
  id: ID_Output
  name: String
  stations?: Array<Station> | null
}

/*
 * A connection to a list of items.

 */
export interface StationTagConnection {
  pageInfo: PageInfo
  edges: Array<StationTagEdge | null>
  aggregate: AggregateStationTag
}

/*
 * An edge in a connection.

 */
export interface StationTagEdge {
  node: StationTag
  cursor: String
}

export interface StationTagPreviousValues {
  id: ID_Output
  name: String
}

export interface StationTagSubscriptionPayload {
  mutation: MutationType
  node?: StationTag | null
  updatedFields?: Array<String> | null
  previousValues?: StationTagPreviousValues | null
}

export interface User extends Node {
  id: ID_Output
  createdAt: DateTime
  updatedAt: DateTime
  email: String
  username: String
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
  username: String
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
  user: User
  role: UserRoleEnum
  station?: Station | null
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
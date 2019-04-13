/* tslint:disable */

type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  /** The `Long` scalar type represents non-fractional signed whole numeric values.
   * Long can represent values between -(2^63) and 2^63 - 1.
   */
  Long: any;
};

export type AggregateSong = {
  readonly count: Scalars['Int'];
};

export type AggregateStation = {
  readonly count: Scalars['Int'];
};

export type AggregateStationTag = {
  readonly count: Scalars['Int'];
};

export type AggregateUser = {
  readonly count: Scalars['Int'];
};

export type AggregateUserRole = {
  readonly count: Scalars['Int'];
};

export type BatchPayload = {
  /** The number of nodes that have been affected by the Batch operation. */
  readonly count: Scalars['Long'];
};

export type ContentDetail = {
  readonly duration: Scalars['Int'];
  readonly dimension: Scalars['String'];
  readonly definition: Scalars['String'];
  readonly caption: Scalars['String'];
  readonly licensedContent: Scalars['Boolean'];
};

export type LoginInput = {
  readonly username?: Maybe<Scalars['String']>;
  readonly email?: Maybe<Scalars['String']>;
  readonly password: Scalars['String'];
};

export type LoginOrRegisterReturnType = {
  readonly token?: Maybe<Scalars['String']>;
};

export type MiniSnippet = {
  readonly publishedAt: Scalars['DateTime'];
  readonly channelId: Scalars['String'];
  readonly title: Scalars['String'];
  readonly description: Scalars['String'];
  readonly thumbnails: Thumbnails;
  readonly channelTitle: Scalars['String'];
};

export type MiniSongExplorer = {
  readonly id: MiniSongExplorerId;
  readonly snippet: Snippet;
};

export type MiniSongExplorerId = {
  readonly kind: Scalars['String'];
  readonly videoId: Scalars['String'];
};

export type Mutation = {
  readonly createUserRole: UserRole;
  readonly createStationTag: StationTag;
  readonly createSong: Song;
  readonly createStation: Station;
  readonly createUser: User;
  readonly updateUserRole?: Maybe<UserRole>;
  readonly updateStationTag?: Maybe<StationTag>;
  readonly updateSong?: Maybe<Song>;
  readonly updateStation?: Maybe<Station>;
  readonly updateUser?: Maybe<User>;
  readonly deleteUserRole?: Maybe<UserRole>;
  readonly deleteStationTag?: Maybe<StationTag>;
  readonly deleteSong?: Maybe<Song>;
  readonly deleteStation?: Maybe<Station>;
  readonly deleteUser?: Maybe<User>;
  readonly upsertUserRole: UserRole;
  readonly upsertStationTag: StationTag;
  readonly upsertSong: Song;
  readonly upsertStation: Station;
  readonly upsertUser: User;
  readonly updateManyUserRoles: BatchPayload;
  readonly updateManyStationTags: BatchPayload;
  readonly updateManySongs: BatchPayload;
  readonly updateManyStations: BatchPayload;
  readonly updateManyUsers: BatchPayload;
  readonly deleteManyUserRoles: BatchPayload;
  readonly deleteManyStationTags: BatchPayload;
  readonly deleteManySongs: BatchPayload;
  readonly deleteManyStations: BatchPayload;
  readonly deleteManyUsers: BatchPayload;
  readonly login: LoginOrRegisterReturnType;
  readonly register: LoginOrRegisterReturnType;
};

export type MutationCreateUserRoleArgs = {
  data: UserRoleCreateInput;
};

export type MutationCreateStationTagArgs = {
  data: StationTagCreateInput;
};

export type MutationCreateSongArgs = {
  data: SongCreateInput;
};

export type MutationCreateStationArgs = {
  data: StationCreateInput;
};

export type MutationCreateUserArgs = {
  data: UserCreateInput;
};

export type MutationUpdateUserRoleArgs = {
  data: UserRoleUpdateInput;
  where: UserRoleWhereUniqueInput;
};

export type MutationUpdateStationTagArgs = {
  data: StationTagUpdateInput;
  where: StationTagWhereUniqueInput;
};

export type MutationUpdateSongArgs = {
  data: SongUpdateInput;
  where: SongWhereUniqueInput;
};

export type MutationUpdateStationArgs = {
  data: StationUpdateInput;
  where: StationWhereUniqueInput;
};

export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type MutationDeleteUserRoleArgs = {
  where: UserRoleWhereUniqueInput;
};

export type MutationDeleteStationTagArgs = {
  where: StationTagWhereUniqueInput;
};

export type MutationDeleteSongArgs = {
  where: SongWhereUniqueInput;
};

export type MutationDeleteStationArgs = {
  where: StationWhereUniqueInput;
};

export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};

export type MutationUpsertUserRoleArgs = {
  where: UserRoleWhereUniqueInput;
  create: UserRoleCreateInput;
  update: UserRoleUpdateInput;
};

export type MutationUpsertStationTagArgs = {
  where: StationTagWhereUniqueInput;
  create: StationTagCreateInput;
  update: StationTagUpdateInput;
};

export type MutationUpsertSongArgs = {
  where: SongWhereUniqueInput;
  create: SongCreateInput;
  update: SongUpdateInput;
};

export type MutationUpsertStationArgs = {
  where: StationWhereUniqueInput;
  create: StationCreateInput;
  update: StationUpdateInput;
};

export type MutationUpsertUserArgs = {
  where: UserWhereUniqueInput;
  create: UserCreateInput;
  update: UserUpdateInput;
};

export type MutationUpdateManyUserRolesArgs = {
  data: UserRoleUpdateManyMutationInput;
  where?: Maybe<UserRoleWhereInput>;
};

export type MutationUpdateManyStationTagsArgs = {
  data: StationTagUpdateManyMutationInput;
  where?: Maybe<StationTagWhereInput>;
};

export type MutationUpdateManySongsArgs = {
  data: SongUpdateManyMutationInput;
  where?: Maybe<SongWhereInput>;
};

export type MutationUpdateManyStationsArgs = {
  data: StationUpdateManyMutationInput;
  where?: Maybe<StationWhereInput>;
};

export type MutationUpdateManyUsersArgs = {
  data: UserUpdateManyMutationInput;
  where?: Maybe<UserWhereInput>;
};

export type MutationDeleteManyUserRolesArgs = {
  where?: Maybe<UserRoleWhereInput>;
};

export type MutationDeleteManyStationTagsArgs = {
  where?: Maybe<StationTagWhereInput>;
};

export type MutationDeleteManySongsArgs = {
  where?: Maybe<SongWhereInput>;
};

export type MutationDeleteManyStationsArgs = {
  where?: Maybe<StationWhereInput>;
};

export type MutationDeleteManyUsersArgs = {
  where?: Maybe<UserWhereInput>;
};

export type MutationLoginArgs = {
  data: LoginInput;
};

export type MutationRegisterArgs = {
  data: RegisterInput;
};

export enum MutationType {
  Created = 'CREATED',
  Updated = 'UPDATED',
  Deleted = 'DELETED',
}

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  readonly id: Scalars['ID'];
};

export enum Order {
  Date = 'date',
  Rating = 'rating',
  Relevance = 'relevance',
  Title = 'title',
  ViewCount = 'viewCount',
  VideoCount = 'videoCount',
}

/** Information about pagination in a connection. */
export type PageInfo = {
  /** When paginating forwards, are there more items? */
  readonly hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  readonly hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  readonly startCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  readonly endCursor?: Maybe<Scalars['String']>;
};

export type Query = {
  readonly userRoles: ReadonlyArray<Maybe<UserRole>>;
  readonly stationTags: ReadonlyArray<Maybe<StationTag>>;
  readonly songs: ReadonlyArray<Maybe<Song>>;
  readonly stations: ReadonlyArray<Maybe<Station>>;
  readonly users: ReadonlyArray<Maybe<User>>;
  readonly userRole?: Maybe<UserRole>;
  readonly stationTag?: Maybe<StationTag>;
  readonly song?: Maybe<Song>;
  readonly station?: Maybe<Station>;
  readonly user?: Maybe<User>;
  readonly userRolesConnection: UserRoleConnection;
  readonly stationTagsConnection: StationTagConnection;
  readonly songsConnection: SongConnection;
  readonly stationsConnection: StationConnection;
  readonly usersConnection: UserConnection;
  /** Fetches an object given its ID */
  readonly node?: Maybe<Node>;
  readonly currentUser: User;
  readonly songExplorer: SongExplorer;
  readonly songExplorers: ReadonlyArray<MiniSongExplorer>;
  readonly temp__?: Maybe<Scalars['Boolean']>;
};

export type QueryUserRolesArgs = {
  where?: Maybe<UserRoleWhereInput>;
  orderBy?: Maybe<UserRoleOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type QueryStationTagsArgs = {
  where?: Maybe<StationTagWhereInput>;
  orderBy?: Maybe<StationTagOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type QuerySongsArgs = {
  where?: Maybe<SongWhereInput>;
  orderBy?: Maybe<SongOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type QueryStationsArgs = {
  where?: Maybe<StationWhereInput>;
  orderBy?: Maybe<StationOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type QueryUsersArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type QueryUserRoleArgs = {
  where: UserRoleWhereUniqueInput;
};

export type QueryStationTagArgs = {
  where: StationTagWhereUniqueInput;
};

export type QuerySongArgs = {
  where: SongWhereUniqueInput;
};

export type QueryStationArgs = {
  where: StationWhereUniqueInput;
};

export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};

export type QueryUserRolesConnectionArgs = {
  where?: Maybe<UserRoleWhereInput>;
  orderBy?: Maybe<UserRoleOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type QueryStationTagsConnectionArgs = {
  where?: Maybe<StationTagWhereInput>;
  orderBy?: Maybe<StationTagOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type QuerySongsConnectionArgs = {
  where?: Maybe<SongWhereInput>;
  orderBy?: Maybe<SongOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type QueryStationsConnectionArgs = {
  where?: Maybe<StationWhereInput>;
  orderBy?: Maybe<StationOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type QueryUsersConnectionArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type QueryNodeArgs = {
  id: Scalars['ID'];
};

export type QuerySongExplorerArgs = {
  where: SongExplorerInput;
};

export type QuerySongExplorersArgs = {
  where: SongExplorersInput;
};

export type RegisterInput = {
  readonly username?: Maybe<Scalars['String']>;
  readonly email: Scalars['String'];
  readonly password: Scalars['String'];
};

export type Snippet = {
  readonly publishedAt: Scalars['DateTime'];
  readonly channelId: Scalars['String'];
  readonly title: Scalars['String'];
  readonly description: Scalars['String'];
  readonly thumbnails: Thumbnails;
  readonly channelTitle: Scalars['String'];
  readonly tags: ReadonlyArray<Scalars['String']>;
  readonly categoryId: Scalars['String'];
  readonly defaultAudioLanguage?: Maybe<Scalars['String']>;
  readonly liveBroadcastContent?: Maybe<Scalars['String']>;
};

export type Song = Node & {
  readonly id: Scalars['ID'];
  readonly createdAt: Scalars['DateTime'];
  readonly updatedAt: Scalars['DateTime'];
  readonly title: Scalars['String'];
  readonly url: Scalars['String'];
  readonly thumbnail: Scalars['String'];
  readonly duration: Scalars['Int'];
  readonly creator: User;
  readonly station: Station;
  readonly status: SongStatusEnum;
  readonly startedAt?: Maybe<Scalars['DateTime']>;
  readonly upVotes?: Maybe<ReadonlyArray<User>>;
  readonly downVotes?: Maybe<ReadonlyArray<User>>;
};

export type SongUpVotesArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type SongDownVotesArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export type SongConnection = {
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** A list of edges. */
  readonly edges: ReadonlyArray<Maybe<SongEdge>>;
  readonly aggregate: AggregateSong;
};

export type SongCreateInput = {
  readonly title: Scalars['String'];
  readonly url: Scalars['String'];
  readonly thumbnail: Scalars['String'];
  readonly duration: Scalars['Int'];
  readonly status: SongStatusEnum;
  readonly startedAt?: Maybe<Scalars['DateTime']>;
  readonly creator: UserCreateOneInput;
  readonly station: StationCreateOneWithoutSongsInput;
  readonly upVotes?: Maybe<UserCreateManyInput>;
  readonly downVotes?: Maybe<UserCreateManyInput>;
};

export type SongCreateManyWithoutStationInput = {
  readonly create?: Maybe<ReadonlyArray<SongCreateWithoutStationInput>>;
  readonly connect?: Maybe<ReadonlyArray<SongWhereUniqueInput>>;
};

export type SongCreateWithoutStationInput = {
  readonly title: Scalars['String'];
  readonly url: Scalars['String'];
  readonly thumbnail: Scalars['String'];
  readonly duration: Scalars['Int'];
  readonly status: SongStatusEnum;
  readonly startedAt?: Maybe<Scalars['DateTime']>;
  readonly creator: UserCreateOneInput;
  readonly upVotes?: Maybe<UserCreateManyInput>;
  readonly downVotes?: Maybe<UserCreateManyInput>;
};

/** An edge in a connection. */
export type SongEdge = {
  /** The item at the end of the edge. */
  readonly node: Song;
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
};

export type SongExplorer = {
  readonly id: Scalars['String'];
  readonly snippet: Snippet;
  readonly contentDetails: ContentDetail;
};

export type SongExplorerInput = {
  readonly url?: Maybe<Scalars['String']>;
  readonly videoId?: Maybe<Scalars['String']>;
};

export type SongExplorersInput = {
  readonly q: Scalars['String'];
  readonly maxResults?: Maybe<Scalars['Int']>;
  readonly order?: Maybe<Order>;
};

export enum SongOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  ThumbnailAsc = 'thumbnail_ASC',
  ThumbnailDesc = 'thumbnail_DESC',
  DurationAsc = 'duration_ASC',
  DurationDesc = 'duration_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  StartedAtAsc = 'startedAt_ASC',
  StartedAtDesc = 'startedAt_DESC',
}

export type SongPreviousValues = {
  readonly id: Scalars['ID'];
  readonly createdAt: Scalars['DateTime'];
  readonly updatedAt: Scalars['DateTime'];
  readonly title: Scalars['String'];
  readonly url: Scalars['String'];
  readonly thumbnail: Scalars['String'];
  readonly duration: Scalars['Int'];
  readonly status: SongStatusEnum;
  readonly startedAt?: Maybe<Scalars['DateTime']>;
};

export type SongScalarWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: Maybe<ReadonlyArray<SongScalarWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: Maybe<ReadonlyArray<SongScalarWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: Maybe<ReadonlyArray<SongScalarWhereInput>>;
  readonly id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  readonly id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values less than the given value. */
  readonly id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  readonly id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  readonly id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  readonly id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  readonly id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  readonly id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  readonly id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  readonly id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  readonly id_not_ends_with?: Maybe<Scalars['ID']>;
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: Maybe<Scalars['DateTime']>;
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: Maybe<Scalars['DateTime']>;
  readonly title?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly title_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly title_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly title_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values less than the given value. */
  readonly title_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  readonly title_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  readonly title_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  readonly title_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly title_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly title_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly title_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly title_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  readonly title_not_ends_with?: Maybe<Scalars['String']>;
  readonly url?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly url_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly url_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly url_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values less than the given value. */
  readonly url_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  readonly url_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  readonly url_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  readonly url_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly url_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly url_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly url_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly url_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly url_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  readonly url_not_ends_with?: Maybe<Scalars['String']>;
  readonly thumbnail?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly thumbnail_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly thumbnail_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly thumbnail_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values less than the given value. */
  readonly thumbnail_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  readonly thumbnail_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  readonly thumbnail_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  readonly thumbnail_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly thumbnail_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly thumbnail_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly thumbnail_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly thumbnail_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly thumbnail_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  readonly thumbnail_not_ends_with?: Maybe<Scalars['String']>;
  readonly duration?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  readonly duration_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  readonly duration_in?: Maybe<ReadonlyArray<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  readonly duration_not_in?: Maybe<ReadonlyArray<Scalars['Int']>>;
  /** All values less than the given value. */
  readonly duration_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  readonly duration_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  readonly duration_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  readonly duration_gte?: Maybe<Scalars['Int']>;
  readonly status?: Maybe<SongStatusEnum>;
  /** All values that are not equal to given value. */
  readonly status_not?: Maybe<SongStatusEnum>;
  /** All values that are contained in given list. */
  readonly status_in?: Maybe<ReadonlyArray<SongStatusEnum>>;
  /** All values that are not contained in given list. */
  readonly status_not_in?: Maybe<ReadonlyArray<SongStatusEnum>>;
  readonly startedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly startedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly startedAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  readonly startedAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values less than the given value. */
  readonly startedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly startedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly startedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly startedAt_gte?: Maybe<Scalars['DateTime']>;
};

export enum SongStatusEnum {
  Pending = 'PENDING',
  Playing = 'PLAYING',
  Played = 'PLAYED',
  Skipped = 'SKIPPED',
}

export type SongSubscriptionPayload = {
  readonly mutation: MutationType;
  readonly node?: Maybe<Song>;
  readonly updatedFields?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly previousValues?: Maybe<SongPreviousValues>;
};

export type SongSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: Maybe<ReadonlyArray<SongSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: Maybe<ReadonlyArray<SongSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: Maybe<ReadonlyArray<SongSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  readonly mutation_in?: Maybe<ReadonlyArray<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  readonly updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  readonly updatedFields_contains_every?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  readonly updatedFields_contains_some?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly node?: Maybe<SongWhereInput>;
};

export type SongUpdateInput = {
  readonly title?: Maybe<Scalars['String']>;
  readonly url?: Maybe<Scalars['String']>;
  readonly thumbnail?: Maybe<Scalars['String']>;
  readonly duration?: Maybe<Scalars['Int']>;
  readonly status?: Maybe<SongStatusEnum>;
  readonly startedAt?: Maybe<Scalars['DateTime']>;
  readonly creator?: Maybe<UserUpdateOneRequiredInput>;
  readonly station?: Maybe<StationUpdateOneRequiredWithoutSongsInput>;
  readonly upVotes?: Maybe<UserUpdateManyInput>;
  readonly downVotes?: Maybe<UserUpdateManyInput>;
};

export type SongUpdateManyDataInput = {
  readonly title?: Maybe<Scalars['String']>;
  readonly url?: Maybe<Scalars['String']>;
  readonly thumbnail?: Maybe<Scalars['String']>;
  readonly duration?: Maybe<Scalars['Int']>;
  readonly status?: Maybe<SongStatusEnum>;
  readonly startedAt?: Maybe<Scalars['DateTime']>;
};

export type SongUpdateManyMutationInput = {
  readonly title?: Maybe<Scalars['String']>;
  readonly url?: Maybe<Scalars['String']>;
  readonly thumbnail?: Maybe<Scalars['String']>;
  readonly duration?: Maybe<Scalars['Int']>;
  readonly status?: Maybe<SongStatusEnum>;
  readonly startedAt?: Maybe<Scalars['DateTime']>;
};

export type SongUpdateManyWithoutStationInput = {
  readonly create?: Maybe<ReadonlyArray<SongCreateWithoutStationInput>>;
  readonly connect?: Maybe<ReadonlyArray<SongWhereUniqueInput>>;
  readonly set?: Maybe<ReadonlyArray<SongWhereUniqueInput>>;
  readonly disconnect?: Maybe<ReadonlyArray<SongWhereUniqueInput>>;
  readonly delete?: Maybe<ReadonlyArray<SongWhereUniqueInput>>;
  readonly update?: Maybe<ReadonlyArray<SongUpdateWithWhereUniqueWithoutStationInput>>;
  readonly updateMany?: Maybe<ReadonlyArray<SongUpdateManyWithWhereNestedInput>>;
  readonly deleteMany?: Maybe<ReadonlyArray<SongScalarWhereInput>>;
  readonly upsert?: Maybe<ReadonlyArray<SongUpsertWithWhereUniqueWithoutStationInput>>;
};

export type SongUpdateManyWithWhereNestedInput = {
  readonly where: SongScalarWhereInput;
  readonly data: SongUpdateManyDataInput;
};

export type SongUpdateWithoutStationDataInput = {
  readonly title?: Maybe<Scalars['String']>;
  readonly url?: Maybe<Scalars['String']>;
  readonly thumbnail?: Maybe<Scalars['String']>;
  readonly duration?: Maybe<Scalars['Int']>;
  readonly status?: Maybe<SongStatusEnum>;
  readonly startedAt?: Maybe<Scalars['DateTime']>;
  readonly creator?: Maybe<UserUpdateOneRequiredInput>;
  readonly upVotes?: Maybe<UserUpdateManyInput>;
  readonly downVotes?: Maybe<UserUpdateManyInput>;
};

export type SongUpdateWithWhereUniqueWithoutStationInput = {
  readonly where: SongWhereUniqueInput;
  readonly data: SongUpdateWithoutStationDataInput;
};

export type SongUpsertWithWhereUniqueWithoutStationInput = {
  readonly where: SongWhereUniqueInput;
  readonly update: SongUpdateWithoutStationDataInput;
  readonly create: SongCreateWithoutStationInput;
};

export type SongWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: Maybe<ReadonlyArray<SongWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: Maybe<ReadonlyArray<SongWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: Maybe<ReadonlyArray<SongWhereInput>>;
  readonly id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  readonly id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values less than the given value. */
  readonly id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  readonly id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  readonly id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  readonly id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  readonly id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  readonly id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  readonly id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  readonly id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  readonly id_not_ends_with?: Maybe<Scalars['ID']>;
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: Maybe<Scalars['DateTime']>;
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: Maybe<Scalars['DateTime']>;
  readonly title?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly title_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly title_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly title_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values less than the given value. */
  readonly title_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  readonly title_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  readonly title_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  readonly title_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly title_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly title_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly title_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly title_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly title_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  readonly title_not_ends_with?: Maybe<Scalars['String']>;
  readonly url?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly url_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly url_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly url_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values less than the given value. */
  readonly url_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  readonly url_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  readonly url_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  readonly url_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly url_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly url_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly url_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly url_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly url_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  readonly url_not_ends_with?: Maybe<Scalars['String']>;
  readonly thumbnail?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly thumbnail_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly thumbnail_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly thumbnail_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values less than the given value. */
  readonly thumbnail_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  readonly thumbnail_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  readonly thumbnail_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  readonly thumbnail_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly thumbnail_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly thumbnail_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly thumbnail_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly thumbnail_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly thumbnail_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  readonly thumbnail_not_ends_with?: Maybe<Scalars['String']>;
  readonly duration?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  readonly duration_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  readonly duration_in?: Maybe<ReadonlyArray<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  readonly duration_not_in?: Maybe<ReadonlyArray<Scalars['Int']>>;
  /** All values less than the given value. */
  readonly duration_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  readonly duration_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  readonly duration_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  readonly duration_gte?: Maybe<Scalars['Int']>;
  readonly status?: Maybe<SongStatusEnum>;
  /** All values that are not equal to given value. */
  readonly status_not?: Maybe<SongStatusEnum>;
  /** All values that are contained in given list. */
  readonly status_in?: Maybe<ReadonlyArray<SongStatusEnum>>;
  /** All values that are not contained in given list. */
  readonly status_not_in?: Maybe<ReadonlyArray<SongStatusEnum>>;
  readonly startedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly startedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly startedAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  readonly startedAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values less than the given value. */
  readonly startedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly startedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly startedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly startedAt_gte?: Maybe<Scalars['DateTime']>;
  readonly creator?: Maybe<UserWhereInput>;
  readonly station?: Maybe<StationWhereInput>;
  readonly upVotes_every?: Maybe<UserWhereInput>;
  readonly upVotes_some?: Maybe<UserWhereInput>;
  readonly upVotes_none?: Maybe<UserWhereInput>;
  readonly downVotes_every?: Maybe<UserWhereInput>;
  readonly downVotes_some?: Maybe<UserWhereInput>;
  readonly downVotes_none?: Maybe<UserWhereInput>;
};

export type SongWhereUniqueInput = {
  readonly id?: Maybe<Scalars['ID']>;
};

export type Station = Node & {
  readonly id: Scalars['ID'];
  readonly createdAt: Scalars['DateTime'];
  readonly updatedAt: Scalars['DateTime'];
  readonly name: Scalars['String'];
  readonly slug: Scalars['String'];
  readonly description?: Maybe<Scalars['String']>;
  readonly owner: User;
  readonly tags?: Maybe<ReadonlyArray<StationTag>>;
  readonly onlineUsers?: Maybe<ReadonlyArray<User>>;
  readonly songs?: Maybe<ReadonlyArray<Song>>;
};

export type StationTagsArgs = {
  where?: Maybe<StationTagWhereInput>;
  orderBy?: Maybe<StationTagOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type StationOnlineUsersArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type StationSongsArgs = {
  where?: Maybe<SongWhereInput>;
  orderBy?: Maybe<SongOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export type StationConnection = {
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** A list of edges. */
  readonly edges: ReadonlyArray<Maybe<StationEdge>>;
  readonly aggregate: AggregateStation;
};

export type StationCreateInput = {
  readonly name: Scalars['String'];
  readonly slug: Scalars['String'];
  readonly description?: Maybe<Scalars['String']>;
  readonly owner: UserCreateOneWithoutStationsInput;
  readonly tags?: Maybe<StationTagCreateManyWithoutStationsInput>;
  readonly onlineUsers?: Maybe<UserCreateManyInput>;
  readonly songs?: Maybe<SongCreateManyWithoutStationInput>;
};

export type StationCreateManyWithoutOwnerInput = {
  readonly create?: Maybe<ReadonlyArray<StationCreateWithoutOwnerInput>>;
  readonly connect?: Maybe<ReadonlyArray<StationWhereUniqueInput>>;
};

export type StationCreateManyWithoutTagsInput = {
  readonly create?: Maybe<ReadonlyArray<StationCreateWithoutTagsInput>>;
  readonly connect?: Maybe<ReadonlyArray<StationWhereUniqueInput>>;
};

export type StationCreateOneInput = {
  readonly create?: Maybe<StationCreateInput>;
  readonly connect?: Maybe<StationWhereUniqueInput>;
};

export type StationCreateOneWithoutSongsInput = {
  readonly create?: Maybe<StationCreateWithoutSongsInput>;
  readonly connect?: Maybe<StationWhereUniqueInput>;
};

export type StationCreateWithoutOwnerInput = {
  readonly name: Scalars['String'];
  readonly slug: Scalars['String'];
  readonly description?: Maybe<Scalars['String']>;
  readonly tags?: Maybe<StationTagCreateManyWithoutStationsInput>;
  readonly onlineUsers?: Maybe<UserCreateManyInput>;
  readonly songs?: Maybe<SongCreateManyWithoutStationInput>;
};

export type StationCreateWithoutSongsInput = {
  readonly name: Scalars['String'];
  readonly slug: Scalars['String'];
  readonly description?: Maybe<Scalars['String']>;
  readonly owner: UserCreateOneWithoutStationsInput;
  readonly tags?: Maybe<StationTagCreateManyWithoutStationsInput>;
  readonly onlineUsers?: Maybe<UserCreateManyInput>;
};

export type StationCreateWithoutTagsInput = {
  readonly name: Scalars['String'];
  readonly slug: Scalars['String'];
  readonly description?: Maybe<Scalars['String']>;
  readonly owner: UserCreateOneWithoutStationsInput;
  readonly onlineUsers?: Maybe<UserCreateManyInput>;
  readonly songs?: Maybe<SongCreateManyWithoutStationInput>;
};

/** An edge in a connection. */
export type StationEdge = {
  /** The item at the end of the edge. */
  readonly node: Station;
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
};

export enum StationOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
}

export type StationPreviousValues = {
  readonly id: Scalars['ID'];
  readonly createdAt: Scalars['DateTime'];
  readonly updatedAt: Scalars['DateTime'];
  readonly name: Scalars['String'];
  readonly slug: Scalars['String'];
  readonly description?: Maybe<Scalars['String']>;
};

export type StationScalarWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: Maybe<ReadonlyArray<StationScalarWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: Maybe<ReadonlyArray<StationScalarWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: Maybe<ReadonlyArray<StationScalarWhereInput>>;
  readonly id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  readonly id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values less than the given value. */
  readonly id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  readonly id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  readonly id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  readonly id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  readonly id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  readonly id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  readonly id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  readonly id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  readonly id_not_ends_with?: Maybe<Scalars['ID']>;
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: Maybe<Scalars['DateTime']>;
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: Maybe<Scalars['DateTime']>;
  readonly name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly name_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly name_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values less than the given value. */
  readonly name_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  readonly name_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  readonly name_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  readonly name_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  readonly name_not_ends_with?: Maybe<Scalars['String']>;
  readonly slug?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly slug_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly slug_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly slug_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values less than the given value. */
  readonly slug_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  readonly slug_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  readonly slug_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  readonly slug_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly slug_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly slug_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly slug_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly slug_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly slug_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  readonly slug_not_ends_with?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly description_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly description_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly description_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values less than the given value. */
  readonly description_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  readonly description_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  readonly description_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  readonly description_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly description_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly description_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly description_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly description_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  readonly description_not_ends_with?: Maybe<Scalars['String']>;
};

export type StationSubscriptionPayload = {
  readonly mutation: MutationType;
  readonly node?: Maybe<Station>;
  readonly updatedFields?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly previousValues?: Maybe<StationPreviousValues>;
};

export type StationSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: Maybe<ReadonlyArray<StationSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: Maybe<ReadonlyArray<StationSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: Maybe<ReadonlyArray<StationSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  readonly mutation_in?: Maybe<ReadonlyArray<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  readonly updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  readonly updatedFields_contains_every?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  readonly updatedFields_contains_some?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly node?: Maybe<StationWhereInput>;
};

export type StationTag = Node & {
  readonly id: Scalars['ID'];
  readonly name: Scalars['String'];
  readonly stations?: Maybe<ReadonlyArray<Station>>;
};

export type StationTagStationsArgs = {
  where?: Maybe<StationWhereInput>;
  orderBy?: Maybe<StationOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export type StationTagConnection = {
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** A list of edges. */
  readonly edges: ReadonlyArray<Maybe<StationTagEdge>>;
  readonly aggregate: AggregateStationTag;
};

export type StationTagCreateInput = {
  readonly name: Scalars['String'];
  readonly stations?: Maybe<StationCreateManyWithoutTagsInput>;
};

export type StationTagCreateManyWithoutStationsInput = {
  readonly create?: Maybe<ReadonlyArray<StationTagCreateWithoutStationsInput>>;
  readonly connect?: Maybe<ReadonlyArray<StationTagWhereUniqueInput>>;
};

export type StationTagCreateWithoutStationsInput = {
  readonly name: Scalars['String'];
};

/** An edge in a connection. */
export type StationTagEdge = {
  /** The item at the end of the edge. */
  readonly node: StationTag;
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
};

export enum StationTagOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
}

export type StationTagPreviousValues = {
  readonly id: Scalars['ID'];
  readonly name: Scalars['String'];
};

export type StationTagScalarWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: Maybe<ReadonlyArray<StationTagScalarWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: Maybe<ReadonlyArray<StationTagScalarWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: Maybe<ReadonlyArray<StationTagScalarWhereInput>>;
  readonly id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  readonly id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values less than the given value. */
  readonly id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  readonly id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  readonly id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  readonly id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  readonly id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  readonly id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  readonly id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  readonly id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  readonly id_not_ends_with?: Maybe<Scalars['ID']>;
  readonly name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly name_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly name_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values less than the given value. */
  readonly name_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  readonly name_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  readonly name_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  readonly name_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  readonly name_not_ends_with?: Maybe<Scalars['String']>;
};

export type StationTagSubscriptionPayload = {
  readonly mutation: MutationType;
  readonly node?: Maybe<StationTag>;
  readonly updatedFields?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly previousValues?: Maybe<StationTagPreviousValues>;
};

export type StationTagSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: Maybe<ReadonlyArray<StationTagSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: Maybe<ReadonlyArray<StationTagSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: Maybe<ReadonlyArray<StationTagSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  readonly mutation_in?: Maybe<ReadonlyArray<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  readonly updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  readonly updatedFields_contains_every?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  readonly updatedFields_contains_some?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly node?: Maybe<StationTagWhereInput>;
};

export type StationTagUpdateInput = {
  readonly name?: Maybe<Scalars['String']>;
  readonly stations?: Maybe<StationUpdateManyWithoutTagsInput>;
};

export type StationTagUpdateManyDataInput = {
  readonly name?: Maybe<Scalars['String']>;
};

export type StationTagUpdateManyMutationInput = {
  readonly name?: Maybe<Scalars['String']>;
};

export type StationTagUpdateManyWithoutStationsInput = {
  readonly create?: Maybe<ReadonlyArray<StationTagCreateWithoutStationsInput>>;
  readonly connect?: Maybe<ReadonlyArray<StationTagWhereUniqueInput>>;
  readonly set?: Maybe<ReadonlyArray<StationTagWhereUniqueInput>>;
  readonly disconnect?: Maybe<ReadonlyArray<StationTagWhereUniqueInput>>;
  readonly delete?: Maybe<ReadonlyArray<StationTagWhereUniqueInput>>;
  readonly update?: Maybe<ReadonlyArray<StationTagUpdateWithWhereUniqueWithoutStationsInput>>;
  readonly updateMany?: Maybe<ReadonlyArray<StationTagUpdateManyWithWhereNestedInput>>;
  readonly deleteMany?: Maybe<ReadonlyArray<StationTagScalarWhereInput>>;
  readonly upsert?: Maybe<ReadonlyArray<StationTagUpsertWithWhereUniqueWithoutStationsInput>>;
};

export type StationTagUpdateManyWithWhereNestedInput = {
  readonly where: StationTagScalarWhereInput;
  readonly data: StationTagUpdateManyDataInput;
};

export type StationTagUpdateWithoutStationsDataInput = {
  readonly name?: Maybe<Scalars['String']>;
};

export type StationTagUpdateWithWhereUniqueWithoutStationsInput = {
  readonly where: StationTagWhereUniqueInput;
  readonly data: StationTagUpdateWithoutStationsDataInput;
};

export type StationTagUpsertWithWhereUniqueWithoutStationsInput = {
  readonly where: StationTagWhereUniqueInput;
  readonly update: StationTagUpdateWithoutStationsDataInput;
  readonly create: StationTagCreateWithoutStationsInput;
};

export type StationTagWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: Maybe<ReadonlyArray<StationTagWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: Maybe<ReadonlyArray<StationTagWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: Maybe<ReadonlyArray<StationTagWhereInput>>;
  readonly id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  readonly id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values less than the given value. */
  readonly id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  readonly id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  readonly id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  readonly id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  readonly id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  readonly id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  readonly id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  readonly id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  readonly id_not_ends_with?: Maybe<Scalars['ID']>;
  readonly name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly name_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly name_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values less than the given value. */
  readonly name_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  readonly name_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  readonly name_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  readonly name_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  readonly name_not_ends_with?: Maybe<Scalars['String']>;
  readonly stations_every?: Maybe<StationWhereInput>;
  readonly stations_some?: Maybe<StationWhereInput>;
  readonly stations_none?: Maybe<StationWhereInput>;
};

export type StationTagWhereUniqueInput = {
  readonly id?: Maybe<Scalars['ID']>;
};

export type StationUpdateDataInput = {
  readonly name?: Maybe<Scalars['String']>;
  readonly slug?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly owner?: Maybe<UserUpdateOneRequiredWithoutStationsInput>;
  readonly tags?: Maybe<StationTagUpdateManyWithoutStationsInput>;
  readonly onlineUsers?: Maybe<UserUpdateManyInput>;
  readonly songs?: Maybe<SongUpdateManyWithoutStationInput>;
};

export type StationUpdateInput = {
  readonly name?: Maybe<Scalars['String']>;
  readonly slug?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly owner?: Maybe<UserUpdateOneRequiredWithoutStationsInput>;
  readonly tags?: Maybe<StationTagUpdateManyWithoutStationsInput>;
  readonly onlineUsers?: Maybe<UserUpdateManyInput>;
  readonly songs?: Maybe<SongUpdateManyWithoutStationInput>;
};

export type StationUpdateManyDataInput = {
  readonly name?: Maybe<Scalars['String']>;
  readonly slug?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
};

export type StationUpdateManyMutationInput = {
  readonly name?: Maybe<Scalars['String']>;
  readonly slug?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
};

export type StationUpdateManyWithoutOwnerInput = {
  readonly create?: Maybe<ReadonlyArray<StationCreateWithoutOwnerInput>>;
  readonly connect?: Maybe<ReadonlyArray<StationWhereUniqueInput>>;
  readonly set?: Maybe<ReadonlyArray<StationWhereUniqueInput>>;
  readonly disconnect?: Maybe<ReadonlyArray<StationWhereUniqueInput>>;
  readonly delete?: Maybe<ReadonlyArray<StationWhereUniqueInput>>;
  readonly update?: Maybe<ReadonlyArray<StationUpdateWithWhereUniqueWithoutOwnerInput>>;
  readonly updateMany?: Maybe<ReadonlyArray<StationUpdateManyWithWhereNestedInput>>;
  readonly deleteMany?: Maybe<ReadonlyArray<StationScalarWhereInput>>;
  readonly upsert?: Maybe<ReadonlyArray<StationUpsertWithWhereUniqueWithoutOwnerInput>>;
};

export type StationUpdateManyWithoutTagsInput = {
  readonly create?: Maybe<ReadonlyArray<StationCreateWithoutTagsInput>>;
  readonly connect?: Maybe<ReadonlyArray<StationWhereUniqueInput>>;
  readonly set?: Maybe<ReadonlyArray<StationWhereUniqueInput>>;
  readonly disconnect?: Maybe<ReadonlyArray<StationWhereUniqueInput>>;
  readonly delete?: Maybe<ReadonlyArray<StationWhereUniqueInput>>;
  readonly update?: Maybe<ReadonlyArray<StationUpdateWithWhereUniqueWithoutTagsInput>>;
  readonly updateMany?: Maybe<ReadonlyArray<StationUpdateManyWithWhereNestedInput>>;
  readonly deleteMany?: Maybe<ReadonlyArray<StationScalarWhereInput>>;
  readonly upsert?: Maybe<ReadonlyArray<StationUpsertWithWhereUniqueWithoutTagsInput>>;
};

export type StationUpdateManyWithWhereNestedInput = {
  readonly where: StationScalarWhereInput;
  readonly data: StationUpdateManyDataInput;
};

export type StationUpdateOneInput = {
  readonly create?: Maybe<StationCreateInput>;
  readonly connect?: Maybe<StationWhereUniqueInput>;
  readonly disconnect?: Maybe<Scalars['Boolean']>;
  readonly delete?: Maybe<Scalars['Boolean']>;
  readonly update?: Maybe<StationUpdateDataInput>;
  readonly upsert?: Maybe<StationUpsertNestedInput>;
};

export type StationUpdateOneRequiredWithoutSongsInput = {
  readonly create?: Maybe<StationCreateWithoutSongsInput>;
  readonly connect?: Maybe<StationWhereUniqueInput>;
  readonly update?: Maybe<StationUpdateWithoutSongsDataInput>;
  readonly upsert?: Maybe<StationUpsertWithoutSongsInput>;
};

export type StationUpdateWithoutOwnerDataInput = {
  readonly name?: Maybe<Scalars['String']>;
  readonly slug?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly tags?: Maybe<StationTagUpdateManyWithoutStationsInput>;
  readonly onlineUsers?: Maybe<UserUpdateManyInput>;
  readonly songs?: Maybe<SongUpdateManyWithoutStationInput>;
};

export type StationUpdateWithoutSongsDataInput = {
  readonly name?: Maybe<Scalars['String']>;
  readonly slug?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly owner?: Maybe<UserUpdateOneRequiredWithoutStationsInput>;
  readonly tags?: Maybe<StationTagUpdateManyWithoutStationsInput>;
  readonly onlineUsers?: Maybe<UserUpdateManyInput>;
};

export type StationUpdateWithoutTagsDataInput = {
  readonly name?: Maybe<Scalars['String']>;
  readonly slug?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly owner?: Maybe<UserUpdateOneRequiredWithoutStationsInput>;
  readonly onlineUsers?: Maybe<UserUpdateManyInput>;
  readonly songs?: Maybe<SongUpdateManyWithoutStationInput>;
};

export type StationUpdateWithWhereUniqueWithoutOwnerInput = {
  readonly where: StationWhereUniqueInput;
  readonly data: StationUpdateWithoutOwnerDataInput;
};

export type StationUpdateWithWhereUniqueWithoutTagsInput = {
  readonly where: StationWhereUniqueInput;
  readonly data: StationUpdateWithoutTagsDataInput;
};

export type StationUpsertNestedInput = {
  readonly update: StationUpdateDataInput;
  readonly create: StationCreateInput;
};

export type StationUpsertWithoutSongsInput = {
  readonly update: StationUpdateWithoutSongsDataInput;
  readonly create: StationCreateWithoutSongsInput;
};

export type StationUpsertWithWhereUniqueWithoutOwnerInput = {
  readonly where: StationWhereUniqueInput;
  readonly update: StationUpdateWithoutOwnerDataInput;
  readonly create: StationCreateWithoutOwnerInput;
};

export type StationUpsertWithWhereUniqueWithoutTagsInput = {
  readonly where: StationWhereUniqueInput;
  readonly update: StationUpdateWithoutTagsDataInput;
  readonly create: StationCreateWithoutTagsInput;
};

export type StationWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: Maybe<ReadonlyArray<StationWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: Maybe<ReadonlyArray<StationWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: Maybe<ReadonlyArray<StationWhereInput>>;
  readonly id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  readonly id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values less than the given value. */
  readonly id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  readonly id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  readonly id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  readonly id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  readonly id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  readonly id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  readonly id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  readonly id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  readonly id_not_ends_with?: Maybe<Scalars['ID']>;
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: Maybe<Scalars['DateTime']>;
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: Maybe<Scalars['DateTime']>;
  readonly name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly name_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly name_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values less than the given value. */
  readonly name_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  readonly name_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  readonly name_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  readonly name_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  readonly name_not_ends_with?: Maybe<Scalars['String']>;
  readonly slug?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly slug_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly slug_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly slug_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values less than the given value. */
  readonly slug_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  readonly slug_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  readonly slug_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  readonly slug_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly slug_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly slug_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly slug_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly slug_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly slug_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  readonly slug_not_ends_with?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly description_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly description_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly description_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values less than the given value. */
  readonly description_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  readonly description_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  readonly description_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  readonly description_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly description_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly description_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly description_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly description_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly description_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  readonly description_not_ends_with?: Maybe<Scalars['String']>;
  readonly owner?: Maybe<UserWhereInput>;
  readonly tags_every?: Maybe<StationTagWhereInput>;
  readonly tags_some?: Maybe<StationTagWhereInput>;
  readonly tags_none?: Maybe<StationTagWhereInput>;
  readonly onlineUsers_every?: Maybe<UserWhereInput>;
  readonly onlineUsers_some?: Maybe<UserWhereInput>;
  readonly onlineUsers_none?: Maybe<UserWhereInput>;
  readonly songs_every?: Maybe<SongWhereInput>;
  readonly songs_some?: Maybe<SongWhereInput>;
  readonly songs_none?: Maybe<SongWhereInput>;
};

export type StationWhereUniqueInput = {
  readonly id?: Maybe<Scalars['ID']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly slug?: Maybe<Scalars['String']>;
};

export type Subscription = {
  readonly userRole?: Maybe<UserRoleSubscriptionPayload>;
  readonly stationTag?: Maybe<StationTagSubscriptionPayload>;
  readonly song?: Maybe<SongSubscriptionPayload>;
  readonly station?: Maybe<StationSubscriptionPayload>;
  readonly user?: Maybe<UserSubscriptionPayload>;
};

export type SubscriptionUserRoleArgs = {
  where?: Maybe<UserRoleSubscriptionWhereInput>;
};

export type SubscriptionStationTagArgs = {
  where?: Maybe<StationTagSubscriptionWhereInput>;
};

export type SubscriptionSongArgs = {
  where?: Maybe<SongSubscriptionWhereInput>;
};

export type SubscriptionStationArgs = {
  where?: Maybe<StationSubscriptionWhereInput>;
};

export type SubscriptionUserArgs = {
  where?: Maybe<UserSubscriptionWhereInput>;
};

export type Thumbnail = {
  readonly url: Scalars['String'];
  readonly width: Scalars['Int'];
  readonly height: Scalars['Int'];
};

export type Thumbnails = {
  readonly default: Thumbnail;
  readonly medium?: Maybe<Thumbnail>;
  readonly high?: Maybe<Thumbnail>;
  readonly standard?: Maybe<Thumbnail>;
  readonly maxres?: Maybe<Thumbnail>;
};

export type User = Node & {
  readonly id: Scalars['ID'];
  readonly createdAt: Scalars['DateTime'];
  readonly updatedAt: Scalars['DateTime'];
  readonly email: Scalars['String'];
  readonly username: Scalars['String'];
  readonly password: Scalars['String'];
  readonly name?: Maybe<Scalars['String']>;
  readonly country?: Maybe<Scalars['String']>;
  readonly city?: Maybe<Scalars['String']>;
  readonly bio?: Maybe<Scalars['String']>;
  readonly avatarUrl?: Maybe<Scalars['String']>;
  readonly coverUrl?: Maybe<Scalars['String']>;
  readonly reputation?: Maybe<Scalars['Int']>;
  readonly facebookId?: Maybe<Scalars['String']>;
  readonly googleId?: Maybe<Scalars['String']>;
  readonly roles?: Maybe<ReadonlyArray<UserRole>>;
  readonly stations?: Maybe<ReadonlyArray<Station>>;
};

export type UserRolesArgs = {
  where?: Maybe<UserRoleWhereInput>;
  orderBy?: Maybe<UserRoleOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type UserStationsArgs = {
  where?: Maybe<StationWhereInput>;
  orderBy?: Maybe<StationOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export type UserConnection = {
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** A list of edges. */
  readonly edges: ReadonlyArray<Maybe<UserEdge>>;
  readonly aggregate: AggregateUser;
};

export type UserCreateInput = {
  readonly email: Scalars['String'];
  readonly username: Scalars['String'];
  readonly password: Scalars['String'];
  readonly name?: Maybe<Scalars['String']>;
  readonly country?: Maybe<Scalars['String']>;
  readonly city?: Maybe<Scalars['String']>;
  readonly bio?: Maybe<Scalars['String']>;
  readonly avatarUrl?: Maybe<Scalars['String']>;
  readonly coverUrl?: Maybe<Scalars['String']>;
  readonly reputation?: Maybe<Scalars['Int']>;
  readonly facebookId?: Maybe<Scalars['String']>;
  readonly googleId?: Maybe<Scalars['String']>;
  readonly roles?: Maybe<UserRoleCreateManyWithoutUserInput>;
  readonly stations?: Maybe<StationCreateManyWithoutOwnerInput>;
};

export type UserCreateManyInput = {
  readonly create?: Maybe<ReadonlyArray<UserCreateInput>>;
  readonly connect?: Maybe<ReadonlyArray<UserWhereUniqueInput>>;
};

export type UserCreateOneInput = {
  readonly create?: Maybe<UserCreateInput>;
  readonly connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateOneWithoutRolesInput = {
  readonly create?: Maybe<UserCreateWithoutRolesInput>;
  readonly connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateOneWithoutStationsInput = {
  readonly create?: Maybe<UserCreateWithoutStationsInput>;
  readonly connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateWithoutRolesInput = {
  readonly email: Scalars['String'];
  readonly username: Scalars['String'];
  readonly password: Scalars['String'];
  readonly name?: Maybe<Scalars['String']>;
  readonly country?: Maybe<Scalars['String']>;
  readonly city?: Maybe<Scalars['String']>;
  readonly bio?: Maybe<Scalars['String']>;
  readonly avatarUrl?: Maybe<Scalars['String']>;
  readonly coverUrl?: Maybe<Scalars['String']>;
  readonly reputation?: Maybe<Scalars['Int']>;
  readonly facebookId?: Maybe<Scalars['String']>;
  readonly googleId?: Maybe<Scalars['String']>;
  readonly stations?: Maybe<StationCreateManyWithoutOwnerInput>;
};

export type UserCreateWithoutStationsInput = {
  readonly email: Scalars['String'];
  readonly username: Scalars['String'];
  readonly password: Scalars['String'];
  readonly name?: Maybe<Scalars['String']>;
  readonly country?: Maybe<Scalars['String']>;
  readonly city?: Maybe<Scalars['String']>;
  readonly bio?: Maybe<Scalars['String']>;
  readonly avatarUrl?: Maybe<Scalars['String']>;
  readonly coverUrl?: Maybe<Scalars['String']>;
  readonly reputation?: Maybe<Scalars['Int']>;
  readonly facebookId?: Maybe<Scalars['String']>;
  readonly googleId?: Maybe<Scalars['String']>;
  readonly roles?: Maybe<UserRoleCreateManyWithoutUserInput>;
};

/** An edge in a connection. */
export type UserEdge = {
  /** The item at the end of the edge. */
  readonly node: User;
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
};

export enum UserOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  UsernameAsc = 'username_ASC',
  UsernameDesc = 'username_DESC',
  PasswordAsc = 'password_ASC',
  PasswordDesc = 'password_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  CountryAsc = 'country_ASC',
  CountryDesc = 'country_DESC',
  CityAsc = 'city_ASC',
  CityDesc = 'city_DESC',
  BioAsc = 'bio_ASC',
  BioDesc = 'bio_DESC',
  AvatarUrlAsc = 'avatarUrl_ASC',
  AvatarUrlDesc = 'avatarUrl_DESC',
  CoverUrlAsc = 'coverUrl_ASC',
  CoverUrlDesc = 'coverUrl_DESC',
  ReputationAsc = 'reputation_ASC',
  ReputationDesc = 'reputation_DESC',
  FacebookIdAsc = 'facebookId_ASC',
  FacebookIdDesc = 'facebookId_DESC',
  GoogleIdAsc = 'googleId_ASC',
  GoogleIdDesc = 'googleId_DESC',
}

export type UserPreviousValues = {
  readonly id: Scalars['ID'];
  readonly createdAt: Scalars['DateTime'];
  readonly updatedAt: Scalars['DateTime'];
  readonly email: Scalars['String'];
  readonly username: Scalars['String'];
  readonly password: Scalars['String'];
  readonly name?: Maybe<Scalars['String']>;
  readonly country?: Maybe<Scalars['String']>;
  readonly city?: Maybe<Scalars['String']>;
  readonly bio?: Maybe<Scalars['String']>;
  readonly avatarUrl?: Maybe<Scalars['String']>;
  readonly coverUrl?: Maybe<Scalars['String']>;
  readonly reputation?: Maybe<Scalars['Int']>;
  readonly facebookId?: Maybe<Scalars['String']>;
  readonly googleId?: Maybe<Scalars['String']>;
};

export type UserRole = Node & {
  readonly id: Scalars['ID'];
  readonly role: UserRoleEnum;
  readonly user: User;
  readonly station?: Maybe<Station>;
};

/** A connection to a list of items. */
export type UserRoleConnection = {
  /** Information to aid in pagination. */
  readonly pageInfo: PageInfo;
  /** A list of edges. */
  readonly edges: ReadonlyArray<Maybe<UserRoleEdge>>;
  readonly aggregate: AggregateUserRole;
};

export type UserRoleCreateInput = {
  readonly role: UserRoleEnum;
  readonly user: UserCreateOneWithoutRolesInput;
  readonly station?: Maybe<StationCreateOneInput>;
};

export type UserRoleCreateManyWithoutUserInput = {
  readonly create?: Maybe<ReadonlyArray<UserRoleCreateWithoutUserInput>>;
  readonly connect?: Maybe<ReadonlyArray<UserRoleWhereUniqueInput>>;
};

export type UserRoleCreateWithoutUserInput = {
  readonly role: UserRoleEnum;
  readonly station?: Maybe<StationCreateOneInput>;
};

/** An edge in a connection. */
export type UserRoleEdge = {
  /** The item at the end of the edge. */
  readonly node: UserRole;
  /** A cursor for use in pagination. */
  readonly cursor: Scalars['String'];
};

export enum UserRoleEnum {
  Admin = 'ADMIN',
  StationOwner = 'STATION_OWNER',
}

export enum UserRoleOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  RoleAsc = 'role_ASC',
  RoleDesc = 'role_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
}

export type UserRolePreviousValues = {
  readonly id: Scalars['ID'];
  readonly role: UserRoleEnum;
};

export type UserRoleScalarWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: Maybe<ReadonlyArray<UserRoleScalarWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: Maybe<ReadonlyArray<UserRoleScalarWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: Maybe<ReadonlyArray<UserRoleScalarWhereInput>>;
  readonly id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  readonly id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values less than the given value. */
  readonly id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  readonly id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  readonly id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  readonly id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  readonly id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  readonly id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  readonly id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  readonly id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  readonly id_not_ends_with?: Maybe<Scalars['ID']>;
  readonly role?: Maybe<UserRoleEnum>;
  /** All values that are not equal to given value. */
  readonly role_not?: Maybe<UserRoleEnum>;
  /** All values that are contained in given list. */
  readonly role_in?: Maybe<ReadonlyArray<UserRoleEnum>>;
  /** All values that are not contained in given list. */
  readonly role_not_in?: Maybe<ReadonlyArray<UserRoleEnum>>;
};

export type UserRoleSubscriptionPayload = {
  readonly mutation: MutationType;
  readonly node?: Maybe<UserRole>;
  readonly updatedFields?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly previousValues?: Maybe<UserRolePreviousValues>;
};

export type UserRoleSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: Maybe<ReadonlyArray<UserRoleSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: Maybe<ReadonlyArray<UserRoleSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: Maybe<ReadonlyArray<UserRoleSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  readonly mutation_in?: Maybe<ReadonlyArray<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  readonly updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  readonly updatedFields_contains_every?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  readonly updatedFields_contains_some?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly node?: Maybe<UserRoleWhereInput>;
};

export type UserRoleUpdateInput = {
  readonly role?: Maybe<UserRoleEnum>;
  readonly user?: Maybe<UserUpdateOneRequiredWithoutRolesInput>;
  readonly station?: Maybe<StationUpdateOneInput>;
};

export type UserRoleUpdateManyDataInput = {
  readonly role?: Maybe<UserRoleEnum>;
};

export type UserRoleUpdateManyMutationInput = {
  readonly role?: Maybe<UserRoleEnum>;
};

export type UserRoleUpdateManyWithoutUserInput = {
  readonly create?: Maybe<ReadonlyArray<UserRoleCreateWithoutUserInput>>;
  readonly connect?: Maybe<ReadonlyArray<UserRoleWhereUniqueInput>>;
  readonly set?: Maybe<ReadonlyArray<UserRoleWhereUniqueInput>>;
  readonly disconnect?: Maybe<ReadonlyArray<UserRoleWhereUniqueInput>>;
  readonly delete?: Maybe<ReadonlyArray<UserRoleWhereUniqueInput>>;
  readonly update?: Maybe<ReadonlyArray<UserRoleUpdateWithWhereUniqueWithoutUserInput>>;
  readonly updateMany?: Maybe<ReadonlyArray<UserRoleUpdateManyWithWhereNestedInput>>;
  readonly deleteMany?: Maybe<ReadonlyArray<UserRoleScalarWhereInput>>;
  readonly upsert?: Maybe<ReadonlyArray<UserRoleUpsertWithWhereUniqueWithoutUserInput>>;
};

export type UserRoleUpdateManyWithWhereNestedInput = {
  readonly where: UserRoleScalarWhereInput;
  readonly data: UserRoleUpdateManyDataInput;
};

export type UserRoleUpdateWithoutUserDataInput = {
  readonly role?: Maybe<UserRoleEnum>;
  readonly station?: Maybe<StationUpdateOneInput>;
};

export type UserRoleUpdateWithWhereUniqueWithoutUserInput = {
  readonly where: UserRoleWhereUniqueInput;
  readonly data: UserRoleUpdateWithoutUserDataInput;
};

export type UserRoleUpsertWithWhereUniqueWithoutUserInput = {
  readonly where: UserRoleWhereUniqueInput;
  readonly update: UserRoleUpdateWithoutUserDataInput;
  readonly create: UserRoleCreateWithoutUserInput;
};

export type UserRoleWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: Maybe<ReadonlyArray<UserRoleWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: Maybe<ReadonlyArray<UserRoleWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: Maybe<ReadonlyArray<UserRoleWhereInput>>;
  readonly id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  readonly id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values less than the given value. */
  readonly id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  readonly id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  readonly id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  readonly id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  readonly id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  readonly id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  readonly id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  readonly id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  readonly id_not_ends_with?: Maybe<Scalars['ID']>;
  readonly role?: Maybe<UserRoleEnum>;
  /** All values that are not equal to given value. */
  readonly role_not?: Maybe<UserRoleEnum>;
  /** All values that are contained in given list. */
  readonly role_in?: Maybe<ReadonlyArray<UserRoleEnum>>;
  /** All values that are not contained in given list. */
  readonly role_not_in?: Maybe<ReadonlyArray<UserRoleEnum>>;
  readonly user?: Maybe<UserWhereInput>;
  readonly station?: Maybe<StationWhereInput>;
};

export type UserRoleWhereUniqueInput = {
  readonly id?: Maybe<Scalars['ID']>;
};

export type UserScalarWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: Maybe<ReadonlyArray<UserScalarWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: Maybe<ReadonlyArray<UserScalarWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: Maybe<ReadonlyArray<UserScalarWhereInput>>;
  readonly id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  readonly id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values less than the given value. */
  readonly id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  readonly id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  readonly id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  readonly id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  readonly id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  readonly id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  readonly id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  readonly id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  readonly id_not_ends_with?: Maybe<Scalars['ID']>;
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: Maybe<Scalars['DateTime']>;
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: Maybe<Scalars['DateTime']>;
  readonly email?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly email_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly email_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly email_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values less than the given value. */
  readonly email_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  readonly email_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  readonly email_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  readonly email_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly email_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly email_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly email_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly email_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly email_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  readonly email_not_ends_with?: Maybe<Scalars['String']>;
  readonly username?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly username_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly username_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly username_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values less than the given value. */
  readonly username_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  readonly username_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  readonly username_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  readonly username_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly username_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly username_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly username_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly username_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly username_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  readonly username_not_ends_with?: Maybe<Scalars['String']>;
  readonly password?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly password_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly password_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly password_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values less than the given value. */
  readonly password_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  readonly password_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  readonly password_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  readonly password_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly password_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly password_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly password_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly password_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly password_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  readonly password_not_ends_with?: Maybe<Scalars['String']>;
  readonly name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly name_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly name_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values less than the given value. */
  readonly name_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  readonly name_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  readonly name_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  readonly name_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  readonly name_not_ends_with?: Maybe<Scalars['String']>;
  readonly country?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly country_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly country_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly country_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values less than the given value. */
  readonly country_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  readonly country_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  readonly country_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  readonly country_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly country_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly country_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly country_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly country_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly country_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  readonly country_not_ends_with?: Maybe<Scalars['String']>;
  readonly city?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly city_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly city_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly city_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values less than the given value. */
  readonly city_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  readonly city_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  readonly city_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  readonly city_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly city_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly city_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly city_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly city_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly city_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  readonly city_not_ends_with?: Maybe<Scalars['String']>;
  readonly bio?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly bio_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly bio_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly bio_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values less than the given value. */
  readonly bio_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  readonly bio_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  readonly bio_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  readonly bio_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly bio_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly bio_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly bio_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly bio_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly bio_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  readonly bio_not_ends_with?: Maybe<Scalars['String']>;
  readonly avatarUrl?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly avatarUrl_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly avatarUrl_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly avatarUrl_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values less than the given value. */
  readonly avatarUrl_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  readonly avatarUrl_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  readonly avatarUrl_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  readonly avatarUrl_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly avatarUrl_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly avatarUrl_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly avatarUrl_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly avatarUrl_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly avatarUrl_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  readonly avatarUrl_not_ends_with?: Maybe<Scalars['String']>;
  readonly coverUrl?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly coverUrl_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly coverUrl_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly coverUrl_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values less than the given value. */
  readonly coverUrl_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  readonly coverUrl_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  readonly coverUrl_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  readonly coverUrl_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly coverUrl_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly coverUrl_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly coverUrl_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly coverUrl_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly coverUrl_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  readonly coverUrl_not_ends_with?: Maybe<Scalars['String']>;
  readonly reputation?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  readonly reputation_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  readonly reputation_in?: Maybe<ReadonlyArray<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  readonly reputation_not_in?: Maybe<ReadonlyArray<Scalars['Int']>>;
  /** All values less than the given value. */
  readonly reputation_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  readonly reputation_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  readonly reputation_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  readonly reputation_gte?: Maybe<Scalars['Int']>;
  readonly facebookId?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly facebookId_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly facebookId_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly facebookId_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values less than the given value. */
  readonly facebookId_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  readonly facebookId_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  readonly facebookId_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  readonly facebookId_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly facebookId_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly facebookId_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly facebookId_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly facebookId_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly facebookId_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  readonly facebookId_not_ends_with?: Maybe<Scalars['String']>;
  readonly googleId?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly googleId_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly googleId_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly googleId_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values less than the given value. */
  readonly googleId_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  readonly googleId_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  readonly googleId_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  readonly googleId_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly googleId_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly googleId_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly googleId_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly googleId_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly googleId_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  readonly googleId_not_ends_with?: Maybe<Scalars['String']>;
};

export type UserSubscriptionPayload = {
  readonly mutation: MutationType;
  readonly node?: Maybe<User>;
  readonly updatedFields?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly previousValues?: Maybe<UserPreviousValues>;
};

export type UserSubscriptionWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: Maybe<ReadonlyArray<UserSubscriptionWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: Maybe<ReadonlyArray<UserSubscriptionWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: Maybe<ReadonlyArray<UserSubscriptionWhereInput>>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  readonly mutation_in?: Maybe<ReadonlyArray<MutationType>>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  readonly updatedFields_contains?: Maybe<Scalars['String']>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  readonly updatedFields_contains_every?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  readonly updatedFields_contains_some?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly node?: Maybe<UserWhereInput>;
};

export type UserUpdateDataInput = {
  readonly email?: Maybe<Scalars['String']>;
  readonly username?: Maybe<Scalars['String']>;
  readonly password?: Maybe<Scalars['String']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly country?: Maybe<Scalars['String']>;
  readonly city?: Maybe<Scalars['String']>;
  readonly bio?: Maybe<Scalars['String']>;
  readonly avatarUrl?: Maybe<Scalars['String']>;
  readonly coverUrl?: Maybe<Scalars['String']>;
  readonly reputation?: Maybe<Scalars['Int']>;
  readonly facebookId?: Maybe<Scalars['String']>;
  readonly googleId?: Maybe<Scalars['String']>;
  readonly roles?: Maybe<UserRoleUpdateManyWithoutUserInput>;
  readonly stations?: Maybe<StationUpdateManyWithoutOwnerInput>;
};

export type UserUpdateInput = {
  readonly email?: Maybe<Scalars['String']>;
  readonly username?: Maybe<Scalars['String']>;
  readonly password?: Maybe<Scalars['String']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly country?: Maybe<Scalars['String']>;
  readonly city?: Maybe<Scalars['String']>;
  readonly bio?: Maybe<Scalars['String']>;
  readonly avatarUrl?: Maybe<Scalars['String']>;
  readonly coverUrl?: Maybe<Scalars['String']>;
  readonly reputation?: Maybe<Scalars['Int']>;
  readonly facebookId?: Maybe<Scalars['String']>;
  readonly googleId?: Maybe<Scalars['String']>;
  readonly roles?: Maybe<UserRoleUpdateManyWithoutUserInput>;
  readonly stations?: Maybe<StationUpdateManyWithoutOwnerInput>;
};

export type UserUpdateManyDataInput = {
  readonly email?: Maybe<Scalars['String']>;
  readonly username?: Maybe<Scalars['String']>;
  readonly password?: Maybe<Scalars['String']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly country?: Maybe<Scalars['String']>;
  readonly city?: Maybe<Scalars['String']>;
  readonly bio?: Maybe<Scalars['String']>;
  readonly avatarUrl?: Maybe<Scalars['String']>;
  readonly coverUrl?: Maybe<Scalars['String']>;
  readonly reputation?: Maybe<Scalars['Int']>;
  readonly facebookId?: Maybe<Scalars['String']>;
  readonly googleId?: Maybe<Scalars['String']>;
};

export type UserUpdateManyInput = {
  readonly create?: Maybe<ReadonlyArray<UserCreateInput>>;
  readonly connect?: Maybe<ReadonlyArray<UserWhereUniqueInput>>;
  readonly set?: Maybe<ReadonlyArray<UserWhereUniqueInput>>;
  readonly disconnect?: Maybe<ReadonlyArray<UserWhereUniqueInput>>;
  readonly delete?: Maybe<ReadonlyArray<UserWhereUniqueInput>>;
  readonly update?: Maybe<ReadonlyArray<UserUpdateWithWhereUniqueNestedInput>>;
  readonly updateMany?: Maybe<ReadonlyArray<UserUpdateManyWithWhereNestedInput>>;
  readonly deleteMany?: Maybe<ReadonlyArray<UserScalarWhereInput>>;
  readonly upsert?: Maybe<ReadonlyArray<UserUpsertWithWhereUniqueNestedInput>>;
};

export type UserUpdateManyMutationInput = {
  readonly email?: Maybe<Scalars['String']>;
  readonly username?: Maybe<Scalars['String']>;
  readonly password?: Maybe<Scalars['String']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly country?: Maybe<Scalars['String']>;
  readonly city?: Maybe<Scalars['String']>;
  readonly bio?: Maybe<Scalars['String']>;
  readonly avatarUrl?: Maybe<Scalars['String']>;
  readonly coverUrl?: Maybe<Scalars['String']>;
  readonly reputation?: Maybe<Scalars['Int']>;
  readonly facebookId?: Maybe<Scalars['String']>;
  readonly googleId?: Maybe<Scalars['String']>;
};

export type UserUpdateManyWithWhereNestedInput = {
  readonly where: UserScalarWhereInput;
  readonly data: UserUpdateManyDataInput;
};

export type UserUpdateOneRequiredInput = {
  readonly create?: Maybe<UserCreateInput>;
  readonly connect?: Maybe<UserWhereUniqueInput>;
  readonly update?: Maybe<UserUpdateDataInput>;
  readonly upsert?: Maybe<UserUpsertNestedInput>;
};

export type UserUpdateOneRequiredWithoutRolesInput = {
  readonly create?: Maybe<UserCreateWithoutRolesInput>;
  readonly connect?: Maybe<UserWhereUniqueInput>;
  readonly update?: Maybe<UserUpdateWithoutRolesDataInput>;
  readonly upsert?: Maybe<UserUpsertWithoutRolesInput>;
};

export type UserUpdateOneRequiredWithoutStationsInput = {
  readonly create?: Maybe<UserCreateWithoutStationsInput>;
  readonly connect?: Maybe<UserWhereUniqueInput>;
  readonly update?: Maybe<UserUpdateWithoutStationsDataInput>;
  readonly upsert?: Maybe<UserUpsertWithoutStationsInput>;
};

export type UserUpdateWithoutRolesDataInput = {
  readonly email?: Maybe<Scalars['String']>;
  readonly username?: Maybe<Scalars['String']>;
  readonly password?: Maybe<Scalars['String']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly country?: Maybe<Scalars['String']>;
  readonly city?: Maybe<Scalars['String']>;
  readonly bio?: Maybe<Scalars['String']>;
  readonly avatarUrl?: Maybe<Scalars['String']>;
  readonly coverUrl?: Maybe<Scalars['String']>;
  readonly reputation?: Maybe<Scalars['Int']>;
  readonly facebookId?: Maybe<Scalars['String']>;
  readonly googleId?: Maybe<Scalars['String']>;
  readonly stations?: Maybe<StationUpdateManyWithoutOwnerInput>;
};

export type UserUpdateWithoutStationsDataInput = {
  readonly email?: Maybe<Scalars['String']>;
  readonly username?: Maybe<Scalars['String']>;
  readonly password?: Maybe<Scalars['String']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly country?: Maybe<Scalars['String']>;
  readonly city?: Maybe<Scalars['String']>;
  readonly bio?: Maybe<Scalars['String']>;
  readonly avatarUrl?: Maybe<Scalars['String']>;
  readonly coverUrl?: Maybe<Scalars['String']>;
  readonly reputation?: Maybe<Scalars['Int']>;
  readonly facebookId?: Maybe<Scalars['String']>;
  readonly googleId?: Maybe<Scalars['String']>;
  readonly roles?: Maybe<UserRoleUpdateManyWithoutUserInput>;
};

export type UserUpdateWithWhereUniqueNestedInput = {
  readonly where: UserWhereUniqueInput;
  readonly data: UserUpdateDataInput;
};

export type UserUpsertNestedInput = {
  readonly update: UserUpdateDataInput;
  readonly create: UserCreateInput;
};

export type UserUpsertWithoutRolesInput = {
  readonly update: UserUpdateWithoutRolesDataInput;
  readonly create: UserCreateWithoutRolesInput;
};

export type UserUpsertWithoutStationsInput = {
  readonly update: UserUpdateWithoutStationsDataInput;
  readonly create: UserCreateWithoutStationsInput;
};

export type UserUpsertWithWhereUniqueNestedInput = {
  readonly where: UserWhereUniqueInput;
  readonly update: UserUpdateDataInput;
  readonly create: UserCreateInput;
};

export type UserWhereInput = {
  /** Logical AND on all given filters. */
  readonly AND?: Maybe<ReadonlyArray<UserWhereInput>>;
  /** Logical OR on all given filters. */
  readonly OR?: Maybe<ReadonlyArray<UserWhereInput>>;
  /** Logical NOT on all given filters combined by AND. */
  readonly NOT?: Maybe<ReadonlyArray<UserWhereInput>>;
  readonly id?: Maybe<Scalars['ID']>;
  /** All values that are not equal to given value. */
  readonly id_not?: Maybe<Scalars['ID']>;
  /** All values that are contained in given list. */
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values that are not contained in given list. */
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  /** All values less than the given value. */
  readonly id_lt?: Maybe<Scalars['ID']>;
  /** All values less than or equal the given value. */
  readonly id_lte?: Maybe<Scalars['ID']>;
  /** All values greater than the given value. */
  readonly id_gt?: Maybe<Scalars['ID']>;
  /** All values greater than or equal the given value. */
  readonly id_gte?: Maybe<Scalars['ID']>;
  /** All values containing the given string. */
  readonly id_contains?: Maybe<Scalars['ID']>;
  /** All values not containing the given string. */
  readonly id_not_contains?: Maybe<Scalars['ID']>;
  /** All values starting with the given string. */
  readonly id_starts_with?: Maybe<Scalars['ID']>;
  /** All values not starting with the given string. */
  readonly id_not_starts_with?: Maybe<Scalars['ID']>;
  /** All values ending with the given string. */
  readonly id_ends_with?: Maybe<Scalars['ID']>;
  /** All values not ending with the given string. */
  readonly id_not_ends_with?: Maybe<Scalars['ID']>;
  readonly createdAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly createdAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly createdAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  readonly createdAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values less than the given value. */
  readonly createdAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly createdAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly createdAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly createdAt_gte?: Maybe<Scalars['DateTime']>;
  readonly updatedAt?: Maybe<Scalars['DateTime']>;
  /** All values that are not equal to given value. */
  readonly updatedAt_not?: Maybe<Scalars['DateTime']>;
  /** All values that are contained in given list. */
  readonly updatedAt_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values that are not contained in given list. */
  readonly updatedAt_not_in?: Maybe<ReadonlyArray<Scalars['DateTime']>>;
  /** All values less than the given value. */
  readonly updatedAt_lt?: Maybe<Scalars['DateTime']>;
  /** All values less than or equal the given value. */
  readonly updatedAt_lte?: Maybe<Scalars['DateTime']>;
  /** All values greater than the given value. */
  readonly updatedAt_gt?: Maybe<Scalars['DateTime']>;
  /** All values greater than or equal the given value. */
  readonly updatedAt_gte?: Maybe<Scalars['DateTime']>;
  readonly email?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly email_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly email_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly email_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values less than the given value. */
  readonly email_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  readonly email_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  readonly email_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  readonly email_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly email_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly email_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly email_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly email_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly email_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  readonly email_not_ends_with?: Maybe<Scalars['String']>;
  readonly username?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly username_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly username_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly username_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values less than the given value. */
  readonly username_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  readonly username_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  readonly username_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  readonly username_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly username_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly username_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly username_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly username_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly username_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  readonly username_not_ends_with?: Maybe<Scalars['String']>;
  readonly password?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly password_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly password_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly password_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values less than the given value. */
  readonly password_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  readonly password_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  readonly password_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  readonly password_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly password_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly password_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly password_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly password_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly password_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  readonly password_not_ends_with?: Maybe<Scalars['String']>;
  readonly name?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly name_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly name_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly name_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values less than the given value. */
  readonly name_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  readonly name_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  readonly name_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  readonly name_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly name_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly name_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly name_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly name_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly name_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  readonly name_not_ends_with?: Maybe<Scalars['String']>;
  readonly country?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly country_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly country_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly country_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values less than the given value. */
  readonly country_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  readonly country_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  readonly country_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  readonly country_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly country_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly country_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly country_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly country_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly country_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  readonly country_not_ends_with?: Maybe<Scalars['String']>;
  readonly city?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly city_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly city_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly city_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values less than the given value. */
  readonly city_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  readonly city_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  readonly city_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  readonly city_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly city_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly city_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly city_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly city_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly city_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  readonly city_not_ends_with?: Maybe<Scalars['String']>;
  readonly bio?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly bio_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly bio_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly bio_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values less than the given value. */
  readonly bio_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  readonly bio_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  readonly bio_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  readonly bio_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly bio_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly bio_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly bio_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly bio_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly bio_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  readonly bio_not_ends_with?: Maybe<Scalars['String']>;
  readonly avatarUrl?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly avatarUrl_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly avatarUrl_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly avatarUrl_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values less than the given value. */
  readonly avatarUrl_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  readonly avatarUrl_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  readonly avatarUrl_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  readonly avatarUrl_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly avatarUrl_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly avatarUrl_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly avatarUrl_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly avatarUrl_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly avatarUrl_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  readonly avatarUrl_not_ends_with?: Maybe<Scalars['String']>;
  readonly coverUrl?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly coverUrl_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly coverUrl_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly coverUrl_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values less than the given value. */
  readonly coverUrl_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  readonly coverUrl_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  readonly coverUrl_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  readonly coverUrl_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly coverUrl_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly coverUrl_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly coverUrl_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly coverUrl_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly coverUrl_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  readonly coverUrl_not_ends_with?: Maybe<Scalars['String']>;
  readonly reputation?: Maybe<Scalars['Int']>;
  /** All values that are not equal to given value. */
  readonly reputation_not?: Maybe<Scalars['Int']>;
  /** All values that are contained in given list. */
  readonly reputation_in?: Maybe<ReadonlyArray<Scalars['Int']>>;
  /** All values that are not contained in given list. */
  readonly reputation_not_in?: Maybe<ReadonlyArray<Scalars['Int']>>;
  /** All values less than the given value. */
  readonly reputation_lt?: Maybe<Scalars['Int']>;
  /** All values less than or equal the given value. */
  readonly reputation_lte?: Maybe<Scalars['Int']>;
  /** All values greater than the given value. */
  readonly reputation_gt?: Maybe<Scalars['Int']>;
  /** All values greater than or equal the given value. */
  readonly reputation_gte?: Maybe<Scalars['Int']>;
  readonly facebookId?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly facebookId_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly facebookId_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly facebookId_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values less than the given value. */
  readonly facebookId_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  readonly facebookId_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  readonly facebookId_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  readonly facebookId_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly facebookId_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly facebookId_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly facebookId_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly facebookId_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly facebookId_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  readonly facebookId_not_ends_with?: Maybe<Scalars['String']>;
  readonly googleId?: Maybe<Scalars['String']>;
  /** All values that are not equal to given value. */
  readonly googleId_not?: Maybe<Scalars['String']>;
  /** All values that are contained in given list. */
  readonly googleId_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values that are not contained in given list. */
  readonly googleId_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  /** All values less than the given value. */
  readonly googleId_lt?: Maybe<Scalars['String']>;
  /** All values less than or equal the given value. */
  readonly googleId_lte?: Maybe<Scalars['String']>;
  /** All values greater than the given value. */
  readonly googleId_gt?: Maybe<Scalars['String']>;
  /** All values greater than or equal the given value. */
  readonly googleId_gte?: Maybe<Scalars['String']>;
  /** All values containing the given string. */
  readonly googleId_contains?: Maybe<Scalars['String']>;
  /** All values not containing the given string. */
  readonly googleId_not_contains?: Maybe<Scalars['String']>;
  /** All values starting with the given string. */
  readonly googleId_starts_with?: Maybe<Scalars['String']>;
  /** All values not starting with the given string. */
  readonly googleId_not_starts_with?: Maybe<Scalars['String']>;
  /** All values ending with the given string. */
  readonly googleId_ends_with?: Maybe<Scalars['String']>;
  /** All values not ending with the given string. */
  readonly googleId_not_ends_with?: Maybe<Scalars['String']>;
  readonly roles_every?: Maybe<UserRoleWhereInput>;
  readonly roles_some?: Maybe<UserRoleWhereInput>;
  readonly roles_none?: Maybe<UserRoleWhereInput>;
  readonly stations_every?: Maybe<StationWhereInput>;
  readonly stations_some?: Maybe<StationWhereInput>;
  readonly stations_none?: Maybe<StationWhereInput>;
};

export type UserWhereUniqueInput = {
  readonly id?: Maybe<Scalars['ID']>;
  readonly email?: Maybe<Scalars['String']>;
  readonly username?: Maybe<Scalars['String']>;
};
export type RegisterMutationVariables = {
  data: RegisterInput;
};

export type RegisterMutation = { readonly __typename?: 'Mutation' } & {
  readonly register: { readonly __typename?: 'LoginOrRegisterReturnType' } & Pick<LoginOrRegisterReturnType, 'token'>;
};

export type SongExplorerQueryVariables = {
  where: SongExplorerInput;
};

export type SongExplorerQuery = { readonly __typename?: 'Query' } & {
  readonly songExplorer: { readonly __typename?: 'SongExplorer' } & Pick<SongExplorer, 'id'> & {
      readonly snippet: { readonly __typename?: 'Snippet' } & Pick<
        Snippet,
        | 'publishedAt'
        | 'channelId'
        | 'title'
        | 'description'
        | 'liveBroadcastContent'
        | 'channelTitle'
        | 'tags'
        | 'categoryId'
        | 'defaultAudioLanguage'
      > & {
          readonly thumbnails: { readonly __typename?: 'Thumbnails' } & {
            readonly default: { readonly __typename?: 'Thumbnail' } & Pick<Thumbnail, 'url' | 'width' | 'height'>;
            readonly medium: Maybe<{ readonly __typename?: 'Thumbnail' } & Pick<Thumbnail, 'url' | 'width' | 'height'>>;
            readonly high: Maybe<{ readonly __typename?: 'Thumbnail' } & Pick<Thumbnail, 'url' | 'width' | 'height'>>;
            readonly standard: Maybe<
              { readonly __typename?: 'Thumbnail' } & Pick<Thumbnail, 'url' | 'width' | 'height'>
            >;
            readonly maxres: Maybe<{ readonly __typename?: 'Thumbnail' } & Pick<Thumbnail, 'url' | 'width' | 'height'>>;
          };
        };
      readonly contentDetails: { readonly __typename?: 'ContentDetail' } & Pick<
        ContentDetail,
        'duration' | 'dimension' | 'caption' | 'licensedContent'
      >;
    };
};

export type SongExplorersQueryVariables = {
  where: SongExplorersInput;
};

export type SongExplorersQuery = { readonly __typename?: 'Query' } & {
  readonly songExplorers: ReadonlyArray<
    { readonly __typename?: 'MiniSongExplorer' } & {
      readonly id: { readonly __typename?: 'MiniSongExplorerId' } & Pick<MiniSongExplorerId, 'kind' | 'videoId'>;
      readonly snippet: { readonly __typename?: 'Snippet' } & Pick<
        Snippet,
        'publishedAt' | 'channelId' | 'title' | 'description' | 'channelTitle'
      > & {
          readonly thumbnails: { readonly __typename?: 'Thumbnails' } & {
            readonly default: { readonly __typename?: 'Thumbnail' } & Pick<Thumbnail, 'url' | 'width' | 'height'>;
            readonly medium: Maybe<{ readonly __typename?: 'Thumbnail' } & Pick<Thumbnail, 'url' | 'width' | 'height'>>;
            readonly high: Maybe<{ readonly __typename?: 'Thumbnail' } & Pick<Thumbnail, 'url' | 'width' | 'height'>>;
            readonly standard: Maybe<
              { readonly __typename?: 'Thumbnail' } & Pick<Thumbnail, 'url' | 'width' | 'height'>
            >;
            readonly maxres: Maybe<{ readonly __typename?: 'Thumbnail' } & Pick<Thumbnail, 'url' | 'width' | 'height'>>;
          };
        };
    }
  >;
};

export type StationsQueryVariables = {
  first?: Maybe<Scalars['Int']>;
  skip?: Maybe<Scalars['Int']>;
  where?: Maybe<StationWhereInput>;
  orderBy?: Maybe<StationOrderByInput>;
};

export type StationsQuery = { readonly __typename?: 'Query' } & {
  readonly stations: ReadonlyArray<
    Maybe<
      { readonly __typename?: 'Station' } & Pick<Station, 'id' | 'name' | 'slug'> & {
          readonly tags: Maybe<ReadonlyArray<{ readonly __typename?: 'StationTag' } & Pick<StationTag, 'id' | 'name'>>>;
          readonly owner: { readonly __typename?: 'User' } & Pick<User, 'id'>;
        }
    >
  >;
};

import gql from 'graphql-tag';
import * as ReactApollo from 'react-apollo';
import * as ReactApolloHooks from 'react-apollo-hooks';

export const RegisterDocument = gql`
  mutation Register($data: RegisterInput!) {
    register(data: $data) {
      token
    }
  }
`;
export type RegisterProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<RegisterMutation, RegisterMutationVariables>
> &
  TChildProps;
export type RegisterMutationFn = ReactApollo.MutationFn<RegisterMutation, RegisterMutationVariables>;
export function withRegister<TProps, TChildProps = {}>(
  operationOptions:
    | ReactApollo.OperationOption<TProps, RegisterMutation, RegisterMutationVariables, RegisterProps<TChildProps>>
    | undefined,
) {
  return ReactApollo.withMutation<TProps, RegisterMutation, RegisterMutationVariables, RegisterProps<TChildProps>>(
    RegisterDocument,
    operationOptions,
  );
}

export function useRegisterMutation(
  baseOptions?: ReactApolloHooks.MutationHookOptions<RegisterMutation, RegisterMutationVariables>,
) {
  return ReactApolloHooks.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, baseOptions);
}
export const SongExplorerDocument = gql`
  query songExplorer($where: SongExplorerInput!) {
    songExplorer(where: $where) {
      id
      snippet {
        publishedAt
        channelId
        title
        description
        thumbnails {
          default {
            url
            width
            height
          }
          medium {
            url
            width
            height
          }
          high {
            url
            width
            height
          }
          standard {
            url
            width
            height
          }
          maxres {
            url
            width
            height
          }
        }
        liveBroadcastContent
        channelTitle
        tags
        categoryId
        defaultAudioLanguage
      }
      contentDetails {
        duration
        dimension
        caption
        licensedContent
      }
    }
  }
`;
export type SongExplorerProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<SongExplorerQuery, SongExplorerQueryVariables>
> &
  TChildProps;
export function withSongExplorer<TProps, TChildProps = {}>(
  operationOptions:
    | ReactApollo.OperationOption<TProps, SongExplorerQuery, SongExplorerQueryVariables, SongExplorerProps<TChildProps>>
    | undefined,
) {
  return ReactApollo.withQuery<TProps, SongExplorerQuery, SongExplorerQueryVariables, SongExplorerProps<TChildProps>>(
    SongExplorerDocument,
    operationOptions,
  );
}

export function useSongExplorerQuery(baseOptions?: ReactApolloHooks.QueryHookOptions<SongExplorerQueryVariables>) {
  return ReactApolloHooks.useQuery<SongExplorerQuery, SongExplorerQueryVariables>(SongExplorerDocument, baseOptions);
}
export const SongExplorersDocument = gql`
  query songExplorers($where: SongExplorersInput!) {
    songExplorers(where: $where) {
      id {
        kind
        videoId
      }
      snippet {
        publishedAt
        channelId
        title
        description
        thumbnails {
          default {
            url
            width
            height
          }
          medium {
            url
            width
            height
          }
          high {
            url
            width
            height
          }
          standard {
            url
            width
            height
          }
          maxres {
            url
            width
            height
          }
        }
        channelTitle
      }
    }
  }
`;
export type SongExplorersProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<SongExplorersQuery, SongExplorersQueryVariables>
> &
  TChildProps;
export function withSongExplorers<TProps, TChildProps = {}>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        SongExplorersQuery,
        SongExplorersQueryVariables,
        SongExplorersProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.withQuery<
    TProps,
    SongExplorersQuery,
    SongExplorersQueryVariables,
    SongExplorersProps<TChildProps>
  >(SongExplorersDocument, operationOptions);
}

export function useSongExplorersQuery(baseOptions?: ReactApolloHooks.QueryHookOptions<SongExplorersQueryVariables>) {
  return ReactApolloHooks.useQuery<SongExplorersQuery, SongExplorersQueryVariables>(SongExplorersDocument, baseOptions);
}
export const StationsDocument = gql`
  query Stations($first: Int, $skip: Int, $where: StationWhereInput, $orderBy: StationOrderByInput) {
    stations(first: $first, skip: $skip, where: $where, orderBy: $orderBy) {
      id
      name
      slug
      tags {
        id
        name
      }
      owner {
        id
      }
    }
  }
`;
export type StationsProps<TChildProps = {}> = Partial<ReactApollo.DataProps<StationsQuery, StationsQueryVariables>> &
  TChildProps;
export function withStations<TProps, TChildProps = {}>(
  operationOptions:
    | ReactApollo.OperationOption<TProps, StationsQuery, StationsQueryVariables, StationsProps<TChildProps>>
    | undefined,
) {
  return ReactApollo.withQuery<TProps, StationsQuery, StationsQueryVariables, StationsProps<TChildProps>>(
    StationsDocument,
    operationOptions,
  );
}

export function useStationsQuery(baseOptions?: ReactApolloHooks.QueryHookOptions<StationsQueryVariables>) {
  return ReactApolloHooks.useQuery<StationsQuery, StationsQueryVariables>(StationsDocument, baseOptions);
}

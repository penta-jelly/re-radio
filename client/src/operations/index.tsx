/* eslint-disable */
import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** `Date` type as integer. Type represents date and time as number of milliseconds from start of UNIX epoch. */
  Timestamp: any;
};

export type UserRole = {
  readonly __typename?: 'UserRole';
  readonly id: Scalars['Int'];
  readonly role: UserRoleEnum;
  readonly user: User;
  readonly station?: Maybe<Station>;
};

export enum UserRoleEnum {
  Admin = 'ADMIN',
  StationOwner = 'STATION_OWNER',
  StationAdmin = 'STATION_ADMIN'
}

export type User = {
  readonly __typename?: 'User';
  readonly id: Scalars['Int'];
  readonly createdAt: Scalars['Timestamp'];
  readonly updatedAt: Scalars['Timestamp'];
  readonly email: Scalars['String'];
  readonly username: Scalars['String'];
  readonly name?: Maybe<Scalars['String']>;
  readonly country?: Maybe<Scalars['String']>;
  readonly city?: Maybe<Scalars['String']>;
  readonly bio?: Maybe<Scalars['String']>;
  readonly avatarUrl?: Maybe<Scalars['String']>;
  readonly coverUrl?: Maybe<Scalars['String']>;
  readonly reputation?: Maybe<Scalars['Int']>;
  readonly facebookId?: Maybe<Scalars['String']>;
  readonly googleId?: Maybe<Scalars['String']>;
  readonly roles: ReadonlyArray<UserRole>;
  readonly currentStationId?: Maybe<Scalars['Float']>;
};


export type Song = {
  readonly __typename?: 'Song';
  readonly id: Scalars['Int'];
  readonly createdAt: Scalars['Timestamp'];
  readonly updatedAt: Scalars['Timestamp'];
  readonly startedAt?: Maybe<Scalars['Timestamp']>;
  readonly title: Scalars['String'];
  readonly url: Scalars['String'];
  readonly thumbnail: Scalars['String'];
  readonly duration: Scalars['Int'];
  readonly status: SongStatusEnum;
  readonly creator: User;
  readonly station: Station;
  readonly stationSlug: Scalars['String'];
  readonly upVoteUserIds: ReadonlyArray<Scalars['Int']>;
  readonly downVoteUserIds: ReadonlyArray<Scalars['Int']>;
};

export enum SongStatusEnum {
  Pending = 'PENDING',
  Playing = 'PLAYING',
  Played = 'PLAYED',
  Skipped = 'SKIPPED'
}

export type HistorySong = {
  readonly __typename?: 'HistorySong';
  readonly id: Scalars['String'];
  readonly title: Scalars['String'];
  readonly url: Scalars['String'];
  readonly thumbnail: Scalars['String'];
  readonly duration: Scalars['Int'];
  readonly station: Station;
  readonly stationSlug: Scalars['String'];
  readonly creatorIds: ReadonlyArray<Scalars['Int']>;
  readonly playedTimes: Scalars['Int'];
};

export type StationTag = {
  readonly __typename?: 'StationTag';
  readonly id: Scalars['Int'];
  readonly name: Scalars['String'];
  readonly stations: ReadonlyArray<Station>;
};

export type Station = {
  readonly __typename?: 'Station';
  readonly id: Scalars['Int'];
  readonly createdAt: Scalars['Timestamp'];
  readonly updatedAt: Scalars['Timestamp'];
  readonly name: Scalars['String'];
  readonly slug: Scalars['String'];
  readonly description?: Maybe<Scalars['String']>;
  readonly playingSong?: Maybe<Song>;
  readonly userRoles: ReadonlyArray<UserRole>;
  readonly tags: ReadonlyArray<StationTag>;
  readonly onlineUserIds: ReadonlyArray<Scalars['Int']>;
};

export type StationSubscription = {
  readonly __typename?: 'StationSubscription';
  readonly mutation: MutationEnum;
  readonly entity: Station;
};

export enum MutationEnum {
  Created = 'CREATED',
  Updated = 'UPDATED',
  Deleted = 'DELETED'
}

export type UserStationSetting = {
  readonly __typename?: 'UserStationSetting';
  readonly outOfSongsBehavior: StationRunningOutOfSongsBehaviorEnum;
  readonly notifyOnlineUser: Scalars['Boolean'];
};

export enum StationRunningOutOfSongsBehaviorEnum {
  PlayRandomSongFromHistorySongs = 'PLAY_RANDOM_SONG_FROM_HISTORY_SONGS',
  PlayFirstSongFromRelatedSongs = 'PLAY_FIRST_SONG_FROM_RELATED_SONGS'
}

export type StationSharedSetting = {
  readonly __typename?: 'StationSharedSetting';
  readonly outOfSongsBehavior: StationRunningOutOfSongsBehaviorEnum;
};

export type StationSetting = {
  readonly __typename?: 'StationSetting';
  readonly id: Scalars['String'];
  readonly user?: Maybe<UserStationSetting>;
  readonly station: StationSharedSetting;
};

export type UserSubscription = {
  readonly __typename?: 'UserSubscription';
  readonly mutation: MutationEnum;
  readonly entity: User;
};

export type Authentication = {
  readonly __typename?: 'Authentication';
  readonly token: Scalars['String'];
};

export type SongSubscription = {
  readonly __typename?: 'SongSubscription';
  readonly mutation: MutationEnum;
  readonly entity: Song;
};

export type Thumbnail = {
  readonly __typename?: 'Thumbnail';
  readonly url: Scalars['String'];
  readonly width: Scalars['Float'];
  readonly height: Scalars['Float'];
};

export type Thumbnails = {
  readonly __typename?: 'Thumbnails';
  readonly default: Thumbnail;
  readonly medium?: Maybe<Thumbnail>;
  readonly high?: Maybe<Thumbnail>;
  readonly standard?: Maybe<Thumbnail>;
  readonly maxres?: Maybe<Thumbnail>;
};

export type Snippet = {
  readonly __typename?: 'Snippet';
  readonly publishedAt: Scalars['String'];
  readonly channelId: Scalars['String'];
  readonly title: Scalars['String'];
  readonly description: Scalars['String'];
  readonly thumbnails: Thumbnails;
  readonly channelTitle: Scalars['String'];
};

export type ContentDetails = {
  readonly __typename?: 'ContentDetails';
  readonly duration: Scalars['Float'];
  readonly dimension: Scalars['String'];
  readonly definition: Scalars['String'];
  readonly caption: Scalars['String'];
};

export type YoutubeVideoDetail = {
  readonly __typename?: 'YoutubeVideoDetail';
  readonly id: Scalars['String'];
  readonly snippet: Snippet;
  readonly contentDetails: ContentDetails;
};

export type YoutubeVideo = {
  readonly __typename?: 'YoutubeVideo';
  readonly id: Scalars['String'];
  readonly snippet: Snippet;
};

export type Query = {
  readonly __typename?: 'Query';
  readonly stations: ReadonlyArray<Station>;
  readonly station: Station;
  readonly stationSetting: StationSetting;
  readonly users: ReadonlyArray<User>;
  readonly user: User;
  readonly currentUser: User;
  readonly historySongs: ReadonlyArray<HistorySong>;
  readonly countHistorySongs: Scalars['Int'];
  readonly songs: ReadonlyArray<Song>;
  readonly song: Song;
  readonly youtubeVideo: YoutubeVideoDetail;
  readonly youtubeVideos: ReadonlyArray<YoutubeVideo>;
  readonly youtubeTrendingVideos: ReadonlyArray<YoutubeVideo>;
  readonly preferredRegion: Scalars['String'];
};


export type QueryStationsArgs = {
  order?: Maybe<StationFindAllOrderInput>;
  where?: Maybe<ReadonlyArray<Maybe<StationFindAllWhereInput>>>;
  pagination?: Maybe<PaginationInput>;
};


export type QueryStationArgs = {
  where: StationFindOneWhereInput;
};


export type QueryStationSettingArgs = {
  where: StationSettingFindInput;
};


export type QueryUsersArgs = {
  order?: Maybe<UserFindAllOrderInput>;
  where?: Maybe<UserFindAllWhereInput>;
  pagination?: Maybe<PaginationInput>;
};


export type QueryUserArgs = {
  where: UserFindOneWhereInput;
};


export type QueryHistorySongsArgs = {
  where: HistorySongFindAllWhereInput;
  pagination?: Maybe<PaginationInput>;
};


export type QueryCountHistorySongsArgs = {
  where: HistorySongFindAllWhereInput;
};


export type QuerySongsArgs = {
  order?: Maybe<SongFindAllOrderInput>;
  where?: Maybe<ReadonlyArray<Maybe<SongFindAllWhereInput>>>;
  pagination?: Maybe<PaginationInput>;
};


export type QuerySongArgs = {
  where: SongFindOneWhereInput;
};


export type QueryYoutubeVideoArgs = {
  where: YoutubeVideoFindOneInput;
};


export type QueryYoutubeVideosArgs = {
  where: YoutubeVideoFindAllInput;
};


export type QueryYoutubeTrendingVideosArgs = {
  where: YoutubeTrendingVideoFindAllInput;
};

export type StationFindAllOrderInput = {
  readonly id?: Maybe<OrderEnum>;
  readonly name?: Maybe<OrderEnum>;
  readonly slug?: Maybe<OrderEnum>;
  readonly createdAt?: Maybe<OrderEnum>;
  readonly updatedAt?: Maybe<OrderEnum>;
};

export enum OrderEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StationFindAllWhereInput = {
  readonly name?: Maybe<Scalars['String']>;
  readonly slug?: Maybe<Scalars['String']>;
};

export type PaginationInput = {
  /** Offset (paginated) where from entities should be taken. Default: 0 */
  readonly skip?: Maybe<Scalars['Int']>;
  /** Limit (paginated) - max number of entities should be taken. Default: 10 */
  readonly take?: Maybe<Scalars['Int']>;
};

export type StationFindOneWhereInput = {
  readonly id?: Maybe<Scalars['Int']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly slug?: Maybe<Scalars['String']>;
};

export type StationSettingFindInput = {
  readonly stationId: Scalars['Int'];
  readonly userId?: Maybe<Scalars['Int']>;
};

export type UserFindAllOrderInput = {
  readonly id?: Maybe<OrderEnum>;
  readonly username?: Maybe<OrderEnum>;
  readonly email?: Maybe<OrderEnum>;
  readonly createdAt?: Maybe<OrderEnum>;
  readonly updatedAt?: Maybe<OrderEnum>;
  readonly name?: Maybe<OrderEnum>;
  readonly country?: Maybe<OrderEnum>;
  readonly city?: Maybe<OrderEnum>;
  readonly reputation?: Maybe<OrderEnum>;
};

export type UserFindAllWhereInput = {
  readonly email?: Maybe<Scalars['String']>;
  readonly username?: Maybe<Scalars['String']>;
};

export type UserFindOneWhereInput = {
  readonly id?: Maybe<Scalars['Int']>;
  readonly email?: Maybe<Scalars['String']>;
  readonly username?: Maybe<Scalars['String']>;
};

export type HistorySongFindAllWhereInput = {
  readonly stationSlug: Scalars['String'];
};

export type SongFindAllOrderInput = {
  readonly id?: Maybe<OrderEnum>;
  readonly createdAt?: Maybe<OrderEnum>;
  readonly updatedAt?: Maybe<OrderEnum>;
  readonly title?: Maybe<OrderEnum>;
  readonly url?: Maybe<OrderEnum>;
  readonly thumbnail?: Maybe<OrderEnum>;
  readonly duration?: Maybe<OrderEnum>;
};

export type SongFindAllWhereInput = {
  readonly stationSlug?: Maybe<Scalars['String']>;
  readonly title?: Maybe<Scalars['String']>;
  readonly url?: Maybe<Scalars['String']>;
  readonly thumbnail?: Maybe<Scalars['String']>;
  readonly duration?: Maybe<Scalars['Int']>;
  readonly status?: Maybe<SongStatusEnum>;
};

export type SongFindOneWhereInput = {
  readonly id: Scalars['Int'];
};

export type YoutubeVideoFindOneInput = {
  readonly videoId?: Maybe<Scalars['String']>;
  readonly url?: Maybe<Scalars['String']>;
};

export type YoutubeVideoFindAllInput = {
  readonly q?: Maybe<Scalars['String']>;
  readonly maxResults?: Maybe<Scalars['Float']>;
  readonly order?: Maybe<SongExplorerOrderEnum>;
  readonly relatedToVideoUrl?: Maybe<Scalars['String']>;
};

export enum SongExplorerOrderEnum {
  Date = 'DATE',
  Rating = 'RATING',
  Relevance = 'RELEVANCE',
  Title = 'TITLE',
  ViewCount = 'VIEW_COUNT',
  VideoCount = 'VIDEO_COUNT'
}

export type YoutubeTrendingVideoFindAllInput = {
  readonly maxResults?: Maybe<Scalars['Float']>;
  readonly regionCode?: Maybe<Scalars['String']>;
};

export type Mutation = {
  readonly __typename?: 'Mutation';
  readonly createStation: Station;
  readonly deleteStation: Scalars['Boolean'];
  readonly joinStation: Scalars['Boolean'];
  readonly leaveStation: Scalars['Boolean'];
  readonly createUser: User;
  readonly updateUser: Scalars['Boolean'];
  readonly deleteUser: Scalars['Boolean'];
  readonly login: Authentication;
  readonly register: Authentication;
  readonly createSong: Song;
  readonly deleteSong: Scalars['Boolean'];
};


export type MutationCreateStationArgs = {
  data: StationCreateInput;
};


export type MutationDeleteStationArgs = {
  where: StationFindOneWhereInput;
};


export type MutationJoinStationArgs = {
  where: StationFindOneWhereInput;
};


export type MutationLeaveStationArgs = {
  where: StationFindOneWhereInput;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserFindOneWhereInput;
};


export type MutationDeleteUserArgs = {
  where: UserFindOneWhereInput;
};


export type MutationLoginArgs = {
  data: LoginInput;
};


export type MutationRegisterArgs = {
  data: RegisterInput;
};


export type MutationCreateSongArgs = {
  data: SongCreateInput;
};


export type MutationDeleteSongArgs = {
  where: SongFindOneWhereInput;
};

export type StationCreateInput = {
  readonly name: Scalars['String'];
  readonly slug: Scalars['String'];
  readonly description?: Maybe<Scalars['String']>;
  readonly tags?: Maybe<ReadonlyArray<StationTagCreateInput>>;
};

export type StationTagCreateInput = {
  readonly name: Scalars['String'];
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
  readonly facebookId?: Maybe<Scalars['String']>;
  readonly googleId?: Maybe<Scalars['String']>;
};

export type UserUpdateInput = {
  readonly email?: Maybe<Scalars['String']>;
  readonly username?: Maybe<Scalars['String']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly country?: Maybe<Scalars['String']>;
  readonly city?: Maybe<Scalars['String']>;
  readonly bio?: Maybe<Scalars['String']>;
  readonly avatarUrl?: Maybe<Scalars['String']>;
  readonly coverUrl?: Maybe<Scalars['String']>;
  readonly facebookId?: Maybe<Scalars['String']>;
  readonly googleId?: Maybe<Scalars['String']>;
};

export type LoginInput = {
  readonly password: Scalars['String'];
  readonly email?: Maybe<Scalars['String']>;
  readonly username?: Maybe<Scalars['String']>;
};

export type RegisterInput = {
  readonly password: Scalars['String'];
  readonly email?: Maybe<Scalars['String']>;
  readonly username?: Maybe<Scalars['String']>;
};

export type SongCreateInput = {
  readonly title: Scalars['String'];
  readonly url: Scalars['String'];
  readonly thumbnail: Scalars['String'];
  /** Duration of a song in milliseconds(ms). Minimum is 10000ms (10 seconds), maximum is 86400000ms (a day) */
  readonly duration: Scalars['Int'];
  readonly status?: Maybe<SongStatusEnum>;
  readonly stationSlug?: Maybe<Scalars['String']>;
};

export type Subscription = {
  readonly __typename?: 'Subscription';
  readonly station: StationSubscription;
  readonly user: UserSubscription;
  readonly song: SongSubscription;
};


export type SubscriptionStationArgs = {
  where?: Maybe<StationFindOneWhereInput>;
};


export type SubscriptionUserArgs = {
  where: UserFindOneWhereInput;
};


export type SubscriptionSongArgs = {
  where?: Maybe<SongFindAllWhereInput>;
};

export type CreateSongMutationVariables = Exact<{
  data: SongCreateInput;
}>;


export type CreateSongMutation = (
  { readonly __typename?: 'Mutation' }
  & { readonly createSong: (
    { readonly __typename?: 'Song' }
    & Pick<Song, 'id'>
  ) }
);

export type CreateStationMutationVariables = Exact<{
  data: StationCreateInput;
}>;


export type CreateStationMutation = (
  { readonly __typename?: 'Mutation' }
  & { readonly createStation: (
    { readonly __typename?: 'Station' }
    & Pick<Station, 'id' | 'slug' | 'name'>
  ) }
);

export type JoinStationMutationVariables = Exact<{
  where: StationFindOneWhereInput;
}>;


export type JoinStationMutation = (
  { readonly __typename?: 'Mutation' }
  & Pick<Mutation, 'joinStation'>
);

export type LeaveStationMutationVariables = Exact<{
  where: StationFindOneWhereInput;
}>;


export type LeaveStationMutation = (
  { readonly __typename?: 'Mutation' }
  & Pick<Mutation, 'leaveStation'>
);

export type LoginMutationVariables = Exact<{
  data: LoginInput;
}>;


export type LoginMutation = (
  { readonly __typename?: 'Mutation' }
  & { readonly login: (
    { readonly __typename?: 'Authentication' }
    & Pick<Authentication, 'token'>
  ) }
);

export type RegisterMutationVariables = Exact<{
  data: RegisterInput;
}>;


export type RegisterMutation = (
  { readonly __typename?: 'Mutation' }
  & { readonly register: (
    { readonly __typename?: 'Authentication' }
    & Pick<Authentication, 'token'>
  ) }
);

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = (
  { readonly __typename?: 'Query' }
  & { readonly user: (
    { readonly __typename?: 'User' }
    & UserBaseInformationFragment
  ) }
);

export type UserBaseInformationFragment = (
  { readonly __typename?: 'User' }
  & Pick<User, 'id' | 'email' | 'username' | 'avatarUrl' | 'coverUrl' | 'reputation'>
);

export type HistorySongsQueryVariables = Exact<{
  stationSlug: Scalars['String'];
  pagination?: Maybe<PaginationInput>;
}>;


export type HistorySongsQuery = (
  { readonly __typename?: 'Query' }
  & { count: Query['countHistorySongs'] }
  & { readonly songs: ReadonlyArray<(
    { readonly __typename?: 'HistorySong' }
    & Pick<HistorySong, 'id' | 'title' | 'url' | 'thumbnail' | 'duration' | 'creatorIds' | 'playedTimes'>
  )> }
);

export type MiniUserQueryVariables = Exact<{
  where: UserFindOneWhereInput;
}>;


export type MiniUserQuery = (
  { readonly __typename?: 'Query' }
  & { readonly user: (
    { readonly __typename?: 'User' }
    & Pick<User, 'id' | 'email' | 'username' | 'avatarUrl' | 'coverUrl' | 'reputation'>
  ) }
);

export type StationQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type StationQuery = (
  { readonly __typename?: 'Query' }
  & { readonly station: (
    { readonly __typename?: 'Station' }
    & Pick<Station, 'id' | 'name' | 'slug' | 'onlineUserIds'>
    & { readonly tags: ReadonlyArray<(
      { readonly __typename?: 'StationTag' }
      & Pick<StationTag, 'id' | 'name'>
    )>, readonly userRoles: ReadonlyArray<(
      { readonly __typename?: 'UserRole' }
      & Pick<UserRole, 'role'>
      & { readonly user: (
        { readonly __typename?: 'User' }
        & UserBaseInformationFragment
      ) }
    )>, readonly playingSong?: Maybe<(
      { readonly __typename?: 'Song' }
      & Pick<Song, 'id' | 'title' | 'thumbnail' | 'startedAt'>
    )> }
  ) }
);

export type StationPlayerQueryVariables = Exact<{
  stationSlug: Scalars['String'];
}>;


export type StationPlayerQuery = (
  { readonly __typename?: 'Query' }
  & { readonly playingSongs: ReadonlyArray<(
    { readonly __typename?: 'Song' }
    & Pick<Song, 'id' | 'title' | 'url' | 'thumbnail' | 'duration' | 'createdAt' | 'startedAt' | 'status' | 'upVoteUserIds' | 'downVoteUserIds'>
  )> }
);

export type OnStationPlayerChangedSubscriptionVariables = Exact<{
  stationSlug: Scalars['String'];
}>;


export type OnStationPlayerChangedSubscription = (
  { readonly __typename?: 'Subscription' }
  & { readonly onPlayingSongChanged: (
    { readonly __typename?: 'SongSubscription' }
    & Pick<SongSubscription, 'mutation'>
    & { readonly entity: (
      { readonly __typename?: 'Song' }
      & Pick<Song, 'id' | 'title' | 'url' | 'thumbnail' | 'duration' | 'createdAt' | 'startedAt' | 'status' | 'upVoteUserIds' | 'downVoteUserIds'>
    ) }
  ) }
);

export type StationPlaylistQueryVariables = Exact<{
  stationSlug: Scalars['String'];
}>;


export type StationPlaylistQuery = (
  { readonly __typename?: 'Query' }
  & { readonly playlist: ReadonlyArray<(
    { readonly __typename?: 'Song' }
    & Pick<Song, 'id' | 'title' | 'url' | 'thumbnail' | 'duration' | 'createdAt' | 'startedAt' | 'status' | 'upVoteUserIds' | 'downVoteUserIds'>
    & { readonly creator: (
      { readonly __typename?: 'User' }
      & UserBaseInformationFragment
    ) }
  )> }
);

export type OnStationPlaylistChangedSubscriptionVariables = Exact<{
  stationSlug: Scalars['String'];
}>;


export type OnStationPlaylistChangedSubscription = (
  { readonly __typename?: 'Subscription' }
  & { readonly onPlaylistSongChanged: (
    { readonly __typename?: 'SongSubscription' }
    & Pick<SongSubscription, 'mutation'>
    & { readonly entity: (
      { readonly __typename?: 'Song' }
      & Pick<Song, 'id' | 'title' | 'url' | 'thumbnail' | 'duration' | 'createdAt' | 'startedAt' | 'status' | 'upVoteUserIds' | 'downVoteUserIds'>
      & { readonly creator: (
        { readonly __typename?: 'User' }
        & UserBaseInformationFragment
      ) }
    ) }
  ) }
);

export type StationSettingQueryVariables = Exact<{
  stationId: Scalars['Int'];
  userId?: Maybe<Scalars['Int']>;
}>;


export type StationSettingQuery = (
  { readonly __typename?: 'Query' }
  & { readonly stationSetting: (
    { readonly __typename?: 'StationSetting' }
    & Pick<StationSetting, 'id'>
    & { readonly user?: Maybe<(
      { readonly __typename?: 'UserStationSetting' }
      & Pick<UserStationSetting, 'outOfSongsBehavior' | 'notifyOnlineUser'>
    )>, readonly station: (
      { readonly __typename?: 'StationSharedSetting' }
      & Pick<StationSharedSetting, 'outOfSongsBehavior'>
    ) }
  ) }
);

export type StationsQueryVariables = Exact<{
  pagination?: Maybe<PaginationInput>;
  order?: Maybe<StationFindAllOrderInput>;
  where?: Maybe<ReadonlyArray<Maybe<StationFindAllWhereInput>>>;
}>;


export type StationsQuery = (
  { readonly __typename?: 'Query' }
  & { readonly stations: ReadonlyArray<(
    { readonly __typename?: 'Station' }
    & Pick<Station, 'id' | 'name' | 'slug' | 'onlineUserIds'>
    & { readonly tags: ReadonlyArray<(
      { readonly __typename?: 'StationTag' }
      & Pick<StationTag, 'id' | 'name'>
    )>, readonly userRoles: ReadonlyArray<(
      { readonly __typename?: 'UserRole' }
      & Pick<UserRole, 'role'>
      & { readonly user: (
        { readonly __typename?: 'User' }
        & UserBaseInformationFragment
      ) }
    )>, readonly playingSong?: Maybe<(
      { readonly __typename?: 'Song' }
      & Pick<Song, 'id' | 'title' | 'thumbnail' | 'startedAt'>
    )> }
  )> }
);

export type OnStationChangedSubscriptionVariables = Exact<{
  where?: Maybe<StationFindOneWhereInput>;
}>;


export type OnStationChangedSubscription = (
  { readonly __typename?: 'Subscription' }
  & { readonly onStationChanged: (
    { readonly __typename?: 'StationSubscription' }
    & Pick<StationSubscription, 'mutation'>
    & { readonly entity: (
      { readonly __typename?: 'Station' }
      & Pick<Station, 'id' | 'name' | 'slug' | 'onlineUserIds'>
      & { readonly playingSong?: Maybe<(
        { readonly __typename?: 'Song' }
        & Pick<Song, 'id' | 'title' | 'thumbnail' | 'startedAt'>
      )> }
    ) }
  ) }
);

export type UserProfileQueryVariables = Exact<{
  where: UserFindOneWhereInput;
}>;


export type UserProfileQuery = (
  { readonly __typename?: 'Query' }
  & { readonly user: (
    { readonly __typename?: 'User' }
    & Pick<User, 'id' | 'email' | 'username' | 'avatarUrl' | 'coverUrl' | 'reputation' | 'bio' | 'city' | 'country' | 'googleId' | 'facebookId'>
    & { readonly roles: ReadonlyArray<(
      { readonly __typename?: 'UserRole' }
      & Pick<UserRole, 'role'>
      & { readonly station?: Maybe<(
        { readonly __typename?: 'Station' }
        & Pick<Station, 'name' | 'slug' | 'description'>
        & { readonly tags: ReadonlyArray<(
          { readonly __typename?: 'StationTag' }
          & Pick<StationTag, 'id' | 'name'>
        )> }
      )> }
    )> }
  ) }
);

export type YoutubeTrendingVideosQueryVariables = Exact<{
  where: YoutubeTrendingVideoFindAllInput;
}>;


export type YoutubeTrendingVideosQuery = (
  { readonly __typename?: 'Query' }
  & Pick<Query, 'preferredRegion'>
  & { readonly youtubeTrendingVideos: ReadonlyArray<(
    { readonly __typename?: 'YoutubeVideo' }
    & Pick<YoutubeVideo, 'id'>
    & { readonly snippet: (
      { readonly __typename?: 'Snippet' }
      & Pick<Snippet, 'publishedAt' | 'channelId' | 'title' | 'description' | 'channelTitle'>
      & { readonly thumbnails: (
        { readonly __typename?: 'Thumbnails' }
        & { readonly default: (
          { readonly __typename?: 'Thumbnail' }
          & Pick<Thumbnail, 'url' | 'width' | 'height'>
        ), readonly medium?: Maybe<(
          { readonly __typename?: 'Thumbnail' }
          & Pick<Thumbnail, 'url' | 'width' | 'height'>
        )>, readonly high?: Maybe<(
          { readonly __typename?: 'Thumbnail' }
          & Pick<Thumbnail, 'url' | 'width' | 'height'>
        )>, readonly standard?: Maybe<(
          { readonly __typename?: 'Thumbnail' }
          & Pick<Thumbnail, 'url' | 'width' | 'height'>
        )>, readonly maxres?: Maybe<(
          { readonly __typename?: 'Thumbnail' }
          & Pick<Thumbnail, 'url' | 'width' | 'height'>
        )> }
      ) }
    ) }
  )> }
);

export type YoutubeVideoQueryVariables = Exact<{
  where: YoutubeVideoFindOneInput;
}>;


export type YoutubeVideoQuery = (
  { readonly __typename?: 'Query' }
  & { readonly youtubeVideo: (
    { readonly __typename?: 'YoutubeVideoDetail' }
    & Pick<YoutubeVideoDetail, 'id'>
    & { readonly snippet: (
      { readonly __typename?: 'Snippet' }
      & Pick<Snippet, 'publishedAt' | 'channelId' | 'title' | 'description' | 'channelTitle'>
      & { readonly thumbnails: (
        { readonly __typename?: 'Thumbnails' }
        & { readonly default: (
          { readonly __typename?: 'Thumbnail' }
          & Pick<Thumbnail, 'url' | 'width' | 'height'>
        ), readonly medium?: Maybe<(
          { readonly __typename?: 'Thumbnail' }
          & Pick<Thumbnail, 'url' | 'width' | 'height'>
        )>, readonly high?: Maybe<(
          { readonly __typename?: 'Thumbnail' }
          & Pick<Thumbnail, 'url' | 'width' | 'height'>
        )>, readonly standard?: Maybe<(
          { readonly __typename?: 'Thumbnail' }
          & Pick<Thumbnail, 'url' | 'width' | 'height'>
        )>, readonly maxres?: Maybe<(
          { readonly __typename?: 'Thumbnail' }
          & Pick<Thumbnail, 'url' | 'width' | 'height'>
        )> }
      ) }
    ), readonly contentDetails: (
      { readonly __typename?: 'ContentDetails' }
      & Pick<ContentDetails, 'duration' | 'dimension' | 'caption'>
    ) }
  ) }
);

export type YoutubeVideosQueryVariables = Exact<{
  where: YoutubeVideoFindAllInput;
}>;


export type YoutubeVideosQuery = (
  { readonly __typename?: 'Query' }
  & { readonly youtubeVideos: ReadonlyArray<(
    { readonly __typename?: 'YoutubeVideo' }
    & Pick<YoutubeVideo, 'id'>
    & { readonly snippet: (
      { readonly __typename?: 'Snippet' }
      & Pick<Snippet, 'publishedAt' | 'channelId' | 'title' | 'description' | 'channelTitle'>
      & { readonly thumbnails: (
        { readonly __typename?: 'Thumbnails' }
        & { readonly default: (
          { readonly __typename?: 'Thumbnail' }
          & Pick<Thumbnail, 'url' | 'width' | 'height'>
        ), readonly medium?: Maybe<(
          { readonly __typename?: 'Thumbnail' }
          & Pick<Thumbnail, 'url' | 'width' | 'height'>
        )>, readonly high?: Maybe<(
          { readonly __typename?: 'Thumbnail' }
          & Pick<Thumbnail, 'url' | 'width' | 'height'>
        )>, readonly standard?: Maybe<(
          { readonly __typename?: 'Thumbnail' }
          & Pick<Thumbnail, 'url' | 'width' | 'height'>
        )>, readonly maxres?: Maybe<(
          { readonly __typename?: 'Thumbnail' }
          & Pick<Thumbnail, 'url' | 'width' | 'height'>
        )> }
      ) }
    ) }
  )> }
);

export const UserBaseInformationFragmentDoc = gql`
    fragment UserBaseInformation on User {
  id
  email
  username
  avatarUrl
  coverUrl
  reputation
}
    `;
export const CreateSongDocument = gql`
    mutation CreateSong($data: SongCreateInput!) {
  createSong(data: $data) {
    id
  }
}
    `;
export type CreateSongMutationFn = ApolloReactCommon.MutationFunction<CreateSongMutation, CreateSongMutationVariables>;

/**
 * __useCreateSongMutation__
 *
 * To run a mutation, you first call `useCreateSongMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSongMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSongMutation, { data, loading, error }] = useCreateSongMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateSongMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateSongMutation, CreateSongMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateSongMutation, CreateSongMutationVariables>(CreateSongDocument, baseOptions);
      }
export type CreateSongMutationHookResult = ReturnType<typeof useCreateSongMutation>;
export type CreateSongMutationResult = ApolloReactCommon.MutationResult<CreateSongMutation>;
export type CreateSongMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateSongMutation, CreateSongMutationVariables>;
export const CreateStationDocument = gql`
    mutation CreateStation($data: StationCreateInput!) {
  createStation(data: $data) {
    id
    slug
    name
  }
}
    `;
export type CreateStationMutationFn = ApolloReactCommon.MutationFunction<CreateStationMutation, CreateStationMutationVariables>;

/**
 * __useCreateStationMutation__
 *
 * To run a mutation, you first call `useCreateStationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateStationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createStationMutation, { data, loading, error }] = useCreateStationMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateStationMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateStationMutation, CreateStationMutationVariables>) {
        return ApolloReactHooks.useMutation<CreateStationMutation, CreateStationMutationVariables>(CreateStationDocument, baseOptions);
      }
export type CreateStationMutationHookResult = ReturnType<typeof useCreateStationMutation>;
export type CreateStationMutationResult = ApolloReactCommon.MutationResult<CreateStationMutation>;
export type CreateStationMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateStationMutation, CreateStationMutationVariables>;
export const JoinStationDocument = gql`
    mutation JoinStation($where: StationFindOneWhereInput!) {
  joinStation(where: $where)
}
    `;
export type JoinStationMutationFn = ApolloReactCommon.MutationFunction<JoinStationMutation, JoinStationMutationVariables>;

/**
 * __useJoinStationMutation__
 *
 * To run a mutation, you first call `useJoinStationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useJoinStationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [joinStationMutation, { data, loading, error }] = useJoinStationMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useJoinStationMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<JoinStationMutation, JoinStationMutationVariables>) {
        return ApolloReactHooks.useMutation<JoinStationMutation, JoinStationMutationVariables>(JoinStationDocument, baseOptions);
      }
export type JoinStationMutationHookResult = ReturnType<typeof useJoinStationMutation>;
export type JoinStationMutationResult = ApolloReactCommon.MutationResult<JoinStationMutation>;
export type JoinStationMutationOptions = ApolloReactCommon.BaseMutationOptions<JoinStationMutation, JoinStationMutationVariables>;
export const LeaveStationDocument = gql`
    mutation LeaveStation($where: StationFindOneWhereInput!) {
  leaveStation(where: $where)
}
    `;
export type LeaveStationMutationFn = ApolloReactCommon.MutationFunction<LeaveStationMutation, LeaveStationMutationVariables>;

/**
 * __useLeaveStationMutation__
 *
 * To run a mutation, you first call `useLeaveStationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLeaveStationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [leaveStationMutation, { data, loading, error }] = useLeaveStationMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useLeaveStationMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LeaveStationMutation, LeaveStationMutationVariables>) {
        return ApolloReactHooks.useMutation<LeaveStationMutation, LeaveStationMutationVariables>(LeaveStationDocument, baseOptions);
      }
export type LeaveStationMutationHookResult = ReturnType<typeof useLeaveStationMutation>;
export type LeaveStationMutationResult = ApolloReactCommon.MutationResult<LeaveStationMutation>;
export type LeaveStationMutationOptions = ApolloReactCommon.BaseMutationOptions<LeaveStationMutation, LeaveStationMutationVariables>;
export const LoginDocument = gql`
    mutation login($data: LoginInput!) {
  login(data: $data) {
    token
  }
}
    `;
export type LoginMutationFn = ApolloReactCommon.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = ApolloReactCommon.MutationResult<LoginMutation>;
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($data: RegisterInput!) {
  register(data: $data) {
    token
  }
}
    `;
export type RegisterMutationFn = ApolloReactCommon.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        return ApolloReactHooks.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, baseOptions);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = ApolloReactCommon.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = ApolloReactCommon.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const CurrentUserDocument = gql`
    query CurrentUser {
  user: currentUser {
    ...UserBaseInformation
  }
}
    ${UserBaseInformationFragmentDoc}`;

/**
 * __useCurrentUserQuery__
 *
 * To run a query within a React component, call `useCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentUserQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
        return ApolloReactHooks.useQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, baseOptions);
      }
export function useCurrentUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, baseOptions);
        }
export type CurrentUserQueryHookResult = ReturnType<typeof useCurrentUserQuery>;
export type CurrentUserLazyQueryHookResult = ReturnType<typeof useCurrentUserLazyQuery>;
export type CurrentUserQueryResult = ApolloReactCommon.QueryResult<CurrentUserQuery, CurrentUserQueryVariables>;
export const HistorySongsDocument = gql`
    query HistorySongs($stationSlug: String!, $pagination: PaginationInput) {
  songs: historySongs(where: {stationSlug: $stationSlug}, pagination: $pagination) {
    id
    title
    url
    thumbnail
    duration
    creatorIds
    playedTimes
  }
  count: countHistorySongs(where: {stationSlug: $stationSlug})
}
    `;

/**
 * __useHistorySongsQuery__
 *
 * To run a query within a React component, call `useHistorySongsQuery` and pass it any options that fit your needs.
 * When your component renders, `useHistorySongsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHistorySongsQuery({
 *   variables: {
 *      stationSlug: // value for 'stationSlug'
 *      pagination: // value for 'pagination'
 *   },
 * });
 */
export function useHistorySongsQuery(baseOptions: ApolloReactHooks.QueryHookOptions<HistorySongsQuery, HistorySongsQueryVariables>) {
        return ApolloReactHooks.useQuery<HistorySongsQuery, HistorySongsQueryVariables>(HistorySongsDocument, baseOptions);
      }
export function useHistorySongsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<HistorySongsQuery, HistorySongsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<HistorySongsQuery, HistorySongsQueryVariables>(HistorySongsDocument, baseOptions);
        }
export type HistorySongsQueryHookResult = ReturnType<typeof useHistorySongsQuery>;
export type HistorySongsLazyQueryHookResult = ReturnType<typeof useHistorySongsLazyQuery>;
export type HistorySongsQueryResult = ApolloReactCommon.QueryResult<HistorySongsQuery, HistorySongsQueryVariables>;
export const MiniUserDocument = gql`
    query MiniUser($where: UserFindOneWhereInput!) {
  user(where: $where) {
    id
    email
    username
    avatarUrl
    coverUrl
    reputation
  }
}
    `;

/**
 * __useMiniUserQuery__
 *
 * To run a query within a React component, call `useMiniUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useMiniUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMiniUserQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useMiniUserQuery(baseOptions: ApolloReactHooks.QueryHookOptions<MiniUserQuery, MiniUserQueryVariables>) {
        return ApolloReactHooks.useQuery<MiniUserQuery, MiniUserQueryVariables>(MiniUserDocument, baseOptions);
      }
export function useMiniUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<MiniUserQuery, MiniUserQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<MiniUserQuery, MiniUserQueryVariables>(MiniUserDocument, baseOptions);
        }
export type MiniUserQueryHookResult = ReturnType<typeof useMiniUserQuery>;
export type MiniUserLazyQueryHookResult = ReturnType<typeof useMiniUserLazyQuery>;
export type MiniUserQueryResult = ApolloReactCommon.QueryResult<MiniUserQuery, MiniUserQueryVariables>;
export const StationDocument = gql`
    query Station($slug: String!) {
  station(where: {slug: $slug}) {
    id
    name
    slug
    tags {
      id
      name
    }
    userRoles {
      role
      user {
        ...UserBaseInformation
      }
    }
    playingSong {
      id
      title
      thumbnail
      startedAt
    }
    onlineUserIds
  }
}
    ${UserBaseInformationFragmentDoc}`;

/**
 * __useStationQuery__
 *
 * To run a query within a React component, call `useStationQuery` and pass it any options that fit your needs.
 * When your component renders, `useStationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStationQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useStationQuery(baseOptions: ApolloReactHooks.QueryHookOptions<StationQuery, StationQueryVariables>) {
        return ApolloReactHooks.useQuery<StationQuery, StationQueryVariables>(StationDocument, baseOptions);
      }
export function useStationLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<StationQuery, StationQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<StationQuery, StationQueryVariables>(StationDocument, baseOptions);
        }
export type StationQueryHookResult = ReturnType<typeof useStationQuery>;
export type StationLazyQueryHookResult = ReturnType<typeof useStationLazyQuery>;
export type StationQueryResult = ApolloReactCommon.QueryResult<StationQuery, StationQueryVariables>;
export const StationPlayerDocument = gql`
    query StationPlayer($stationSlug: String!) {
  playingSongs: songs(where: {stationSlug: $stationSlug, status: PLAYING}) {
    id
    title
    url
    thumbnail
    duration
    createdAt
    startedAt
    status
    upVoteUserIds
    downVoteUserIds
  }
}
    `;

/**
 * __useStationPlayerQuery__
 *
 * To run a query within a React component, call `useStationPlayerQuery` and pass it any options that fit your needs.
 * When your component renders, `useStationPlayerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStationPlayerQuery({
 *   variables: {
 *      stationSlug: // value for 'stationSlug'
 *   },
 * });
 */
export function useStationPlayerQuery(baseOptions: ApolloReactHooks.QueryHookOptions<StationPlayerQuery, StationPlayerQueryVariables>) {
        return ApolloReactHooks.useQuery<StationPlayerQuery, StationPlayerQueryVariables>(StationPlayerDocument, baseOptions);
      }
export function useStationPlayerLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<StationPlayerQuery, StationPlayerQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<StationPlayerQuery, StationPlayerQueryVariables>(StationPlayerDocument, baseOptions);
        }
export type StationPlayerQueryHookResult = ReturnType<typeof useStationPlayerQuery>;
export type StationPlayerLazyQueryHookResult = ReturnType<typeof useStationPlayerLazyQuery>;
export type StationPlayerQueryResult = ApolloReactCommon.QueryResult<StationPlayerQuery, StationPlayerQueryVariables>;
export const OnStationPlayerChangedDocument = gql`
    subscription OnStationPlayerChanged($stationSlug: String!) {
  onPlayingSongChanged: song(where: {stationSlug: $stationSlug}) {
    mutation
    entity {
      id
      title
      url
      thumbnail
      duration
      createdAt
      startedAt
      status
      upVoteUserIds
      downVoteUserIds
    }
  }
}
    `;

/**
 * __useOnStationPlayerChangedSubscription__
 *
 * To run a query within a React component, call `useOnStationPlayerChangedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnStationPlayerChangedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnStationPlayerChangedSubscription({
 *   variables: {
 *      stationSlug: // value for 'stationSlug'
 *   },
 * });
 */
export function useOnStationPlayerChangedSubscription(baseOptions: ApolloReactHooks.SubscriptionHookOptions<OnStationPlayerChangedSubscription, OnStationPlayerChangedSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<OnStationPlayerChangedSubscription, OnStationPlayerChangedSubscriptionVariables>(OnStationPlayerChangedDocument, baseOptions);
      }
export type OnStationPlayerChangedSubscriptionHookResult = ReturnType<typeof useOnStationPlayerChangedSubscription>;
export type OnStationPlayerChangedSubscriptionResult = ApolloReactCommon.SubscriptionResult<OnStationPlayerChangedSubscription>;
export const StationPlaylistDocument = gql`
    query StationPlaylist($stationSlug: String!) {
  playlist: songs(where: [{stationSlug: $stationSlug, status: PENDING}, {stationSlug: $stationSlug, status: PLAYING}], pagination: {take: 99}) {
    id
    title
    url
    thumbnail
    duration
    createdAt
    startedAt
    status
    upVoteUserIds
    downVoteUserIds
    creator {
      ...UserBaseInformation
    }
  }
}
    ${UserBaseInformationFragmentDoc}`;

/**
 * __useStationPlaylistQuery__
 *
 * To run a query within a React component, call `useStationPlaylistQuery` and pass it any options that fit your needs.
 * When your component renders, `useStationPlaylistQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStationPlaylistQuery({
 *   variables: {
 *      stationSlug: // value for 'stationSlug'
 *   },
 * });
 */
export function useStationPlaylistQuery(baseOptions: ApolloReactHooks.QueryHookOptions<StationPlaylistQuery, StationPlaylistQueryVariables>) {
        return ApolloReactHooks.useQuery<StationPlaylistQuery, StationPlaylistQueryVariables>(StationPlaylistDocument, baseOptions);
      }
export function useStationPlaylistLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<StationPlaylistQuery, StationPlaylistQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<StationPlaylistQuery, StationPlaylistQueryVariables>(StationPlaylistDocument, baseOptions);
        }
export type StationPlaylistQueryHookResult = ReturnType<typeof useStationPlaylistQuery>;
export type StationPlaylistLazyQueryHookResult = ReturnType<typeof useStationPlaylistLazyQuery>;
export type StationPlaylistQueryResult = ApolloReactCommon.QueryResult<StationPlaylistQuery, StationPlaylistQueryVariables>;
export const OnStationPlaylistChangedDocument = gql`
    subscription OnStationPlaylistChanged($stationSlug: String!) {
  onPlaylistSongChanged: song(where: {stationSlug: $stationSlug}) {
    mutation
    entity {
      id
      title
      url
      thumbnail
      duration
      createdAt
      startedAt
      status
      upVoteUserIds
      downVoteUserIds
      creator {
        ...UserBaseInformation
      }
    }
  }
}
    ${UserBaseInformationFragmentDoc}`;

/**
 * __useOnStationPlaylistChangedSubscription__
 *
 * To run a query within a React component, call `useOnStationPlaylistChangedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnStationPlaylistChangedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnStationPlaylistChangedSubscription({
 *   variables: {
 *      stationSlug: // value for 'stationSlug'
 *   },
 * });
 */
export function useOnStationPlaylistChangedSubscription(baseOptions: ApolloReactHooks.SubscriptionHookOptions<OnStationPlaylistChangedSubscription, OnStationPlaylistChangedSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<OnStationPlaylistChangedSubscription, OnStationPlaylistChangedSubscriptionVariables>(OnStationPlaylistChangedDocument, baseOptions);
      }
export type OnStationPlaylistChangedSubscriptionHookResult = ReturnType<typeof useOnStationPlaylistChangedSubscription>;
export type OnStationPlaylistChangedSubscriptionResult = ApolloReactCommon.SubscriptionResult<OnStationPlaylistChangedSubscription>;
export const StationSettingDocument = gql`
    query StationSetting($stationId: Int!, $userId: Int) {
  stationSetting(where: {stationId: $stationId, userId: $userId}) {
    id
    user {
      outOfSongsBehavior
      notifyOnlineUser
    }
    station {
      outOfSongsBehavior
    }
  }
}
    `;

/**
 * __useStationSettingQuery__
 *
 * To run a query within a React component, call `useStationSettingQuery` and pass it any options that fit your needs.
 * When your component renders, `useStationSettingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStationSettingQuery({
 *   variables: {
 *      stationId: // value for 'stationId'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useStationSettingQuery(baseOptions: ApolloReactHooks.QueryHookOptions<StationSettingQuery, StationSettingQueryVariables>) {
        return ApolloReactHooks.useQuery<StationSettingQuery, StationSettingQueryVariables>(StationSettingDocument, baseOptions);
      }
export function useStationSettingLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<StationSettingQuery, StationSettingQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<StationSettingQuery, StationSettingQueryVariables>(StationSettingDocument, baseOptions);
        }
export type StationSettingQueryHookResult = ReturnType<typeof useStationSettingQuery>;
export type StationSettingLazyQueryHookResult = ReturnType<typeof useStationSettingLazyQuery>;
export type StationSettingQueryResult = ApolloReactCommon.QueryResult<StationSettingQuery, StationSettingQueryVariables>;
export const StationsDocument = gql`
    query Stations($pagination: PaginationInput, $order: StationFindAllOrderInput, $where: [StationFindAllWhereInput]) {
  stations(pagination: $pagination, order: $order, where: $where) {
    id
    name
    slug
    tags {
      id
      name
    }
    userRoles {
      role
      user {
        ...UserBaseInformation
      }
    }
    playingSong {
      id
      title
      thumbnail
      startedAt
    }
    onlineUserIds
  }
}
    ${UserBaseInformationFragmentDoc}`;

/**
 * __useStationsQuery__
 *
 * To run a query within a React component, call `useStationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useStationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStationsQuery({
 *   variables: {
 *      pagination: // value for 'pagination'
 *      order: // value for 'order'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useStationsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<StationsQuery, StationsQueryVariables>) {
        return ApolloReactHooks.useQuery<StationsQuery, StationsQueryVariables>(StationsDocument, baseOptions);
      }
export function useStationsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<StationsQuery, StationsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<StationsQuery, StationsQueryVariables>(StationsDocument, baseOptions);
        }
export type StationsQueryHookResult = ReturnType<typeof useStationsQuery>;
export type StationsLazyQueryHookResult = ReturnType<typeof useStationsLazyQuery>;
export type StationsQueryResult = ApolloReactCommon.QueryResult<StationsQuery, StationsQueryVariables>;
export const OnStationChangedDocument = gql`
    subscription OnStationChanged($where: StationFindOneWhereInput) {
  onStationChanged: station(where: $where) {
    mutation
    entity {
      id
      name
      slug
      playingSong {
        id
        title
        thumbnail
        startedAt
      }
      onlineUserIds
    }
  }
}
    `;

/**
 * __useOnStationChangedSubscription__
 *
 * To run a query within a React component, call `useOnStationChangedSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnStationChangedSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnStationChangedSubscription({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useOnStationChangedSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<OnStationChangedSubscription, OnStationChangedSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<OnStationChangedSubscription, OnStationChangedSubscriptionVariables>(OnStationChangedDocument, baseOptions);
      }
export type OnStationChangedSubscriptionHookResult = ReturnType<typeof useOnStationChangedSubscription>;
export type OnStationChangedSubscriptionResult = ApolloReactCommon.SubscriptionResult<OnStationChangedSubscription>;
export const UserProfileDocument = gql`
    query UserProfile($where: UserFindOneWhereInput!) {
  user(where: $where) {
    id
    email
    username
    avatarUrl
    coverUrl
    reputation
    bio
    city
    country
    googleId
    facebookId
    roles {
      role
      station {
        name
        slug
        description
        tags {
          id
          name
        }
      }
    }
  }
}
    `;

/**
 * __useUserProfileQuery__
 *
 * To run a query within a React component, call `useUserProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserProfileQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUserProfileQuery(baseOptions: ApolloReactHooks.QueryHookOptions<UserProfileQuery, UserProfileQueryVariables>) {
        return ApolloReactHooks.useQuery<UserProfileQuery, UserProfileQueryVariables>(UserProfileDocument, baseOptions);
      }
export function useUserProfileLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UserProfileQuery, UserProfileQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<UserProfileQuery, UserProfileQueryVariables>(UserProfileDocument, baseOptions);
        }
export type UserProfileQueryHookResult = ReturnType<typeof useUserProfileQuery>;
export type UserProfileLazyQueryHookResult = ReturnType<typeof useUserProfileLazyQuery>;
export type UserProfileQueryResult = ApolloReactCommon.QueryResult<UserProfileQuery, UserProfileQueryVariables>;
export const YoutubeTrendingVideosDocument = gql`
    query YoutubeTrendingVideos($where: YoutubeTrendingVideoFindAllInput!) {
  youtubeTrendingVideos(where: $where) {
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
      channelTitle
    }
  }
  preferredRegion
}
    `;

/**
 * __useYoutubeTrendingVideosQuery__
 *
 * To run a query within a React component, call `useYoutubeTrendingVideosQuery` and pass it any options that fit your needs.
 * When your component renders, `useYoutubeTrendingVideosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useYoutubeTrendingVideosQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useYoutubeTrendingVideosQuery(baseOptions: ApolloReactHooks.QueryHookOptions<YoutubeTrendingVideosQuery, YoutubeTrendingVideosQueryVariables>) {
        return ApolloReactHooks.useQuery<YoutubeTrendingVideosQuery, YoutubeTrendingVideosQueryVariables>(YoutubeTrendingVideosDocument, baseOptions);
      }
export function useYoutubeTrendingVideosLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<YoutubeTrendingVideosQuery, YoutubeTrendingVideosQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<YoutubeTrendingVideosQuery, YoutubeTrendingVideosQueryVariables>(YoutubeTrendingVideosDocument, baseOptions);
        }
export type YoutubeTrendingVideosQueryHookResult = ReturnType<typeof useYoutubeTrendingVideosQuery>;
export type YoutubeTrendingVideosLazyQueryHookResult = ReturnType<typeof useYoutubeTrendingVideosLazyQuery>;
export type YoutubeTrendingVideosQueryResult = ApolloReactCommon.QueryResult<YoutubeTrendingVideosQuery, YoutubeTrendingVideosQueryVariables>;
export const YoutubeVideoDocument = gql`
    query YoutubeVideo($where: YoutubeVideoFindOneInput!) {
  youtubeVideo(where: $where) {
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
      channelTitle
    }
    contentDetails {
      duration
      dimension
      caption
    }
  }
}
    `;

/**
 * __useYoutubeVideoQuery__
 *
 * To run a query within a React component, call `useYoutubeVideoQuery` and pass it any options that fit your needs.
 * When your component renders, `useYoutubeVideoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useYoutubeVideoQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useYoutubeVideoQuery(baseOptions: ApolloReactHooks.QueryHookOptions<YoutubeVideoQuery, YoutubeVideoQueryVariables>) {
        return ApolloReactHooks.useQuery<YoutubeVideoQuery, YoutubeVideoQueryVariables>(YoutubeVideoDocument, baseOptions);
      }
export function useYoutubeVideoLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<YoutubeVideoQuery, YoutubeVideoQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<YoutubeVideoQuery, YoutubeVideoQueryVariables>(YoutubeVideoDocument, baseOptions);
        }
export type YoutubeVideoQueryHookResult = ReturnType<typeof useYoutubeVideoQuery>;
export type YoutubeVideoLazyQueryHookResult = ReturnType<typeof useYoutubeVideoLazyQuery>;
export type YoutubeVideoQueryResult = ApolloReactCommon.QueryResult<YoutubeVideoQuery, YoutubeVideoQueryVariables>;
export const YoutubeVideosDocument = gql`
    query YoutubeVideos($where: YoutubeVideoFindAllInput!) {
  youtubeVideos(where: $where) {
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
      channelTitle
    }
  }
}
    `;

/**
 * __useYoutubeVideosQuery__
 *
 * To run a query within a React component, call `useYoutubeVideosQuery` and pass it any options that fit your needs.
 * When your component renders, `useYoutubeVideosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useYoutubeVideosQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useYoutubeVideosQuery(baseOptions: ApolloReactHooks.QueryHookOptions<YoutubeVideosQuery, YoutubeVideosQueryVariables>) {
        return ApolloReactHooks.useQuery<YoutubeVideosQuery, YoutubeVideosQueryVariables>(YoutubeVideosDocument, baseOptions);
      }
export function useYoutubeVideosLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<YoutubeVideosQuery, YoutubeVideosQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<YoutubeVideosQuery, YoutubeVideosQueryVariables>(YoutubeVideosDocument, baseOptions);
        }
export type YoutubeVideosQueryHookResult = ReturnType<typeof useYoutubeVideosQuery>;
export type YoutubeVideosLazyQueryHookResult = ReturnType<typeof useYoutubeVideosLazyQuery>;
export type YoutubeVideosQueryResult = ApolloReactCommon.QueryResult<YoutubeVideosQuery, YoutubeVideosQueryVariables>;
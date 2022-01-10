/* eslint-disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
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

export type Authentication = {
  readonly __typename?: 'Authentication';
  readonly token: Scalars['String'];
};

export type ContentDetails = {
  readonly __typename?: 'ContentDetails';
  readonly caption: Scalars['String'];
  readonly definition: Scalars['String'];
  readonly dimension: Scalars['String'];
  readonly duration: Scalars['Float'];
};

export type HistorySong = {
  readonly __typename?: 'HistorySong';
  readonly creatorIds: ReadonlyArray<Scalars['Int']>;
  readonly duration: Scalars['Int'];
  readonly id: Scalars['String'];
  readonly playedTimes: Scalars['Int'];
  readonly station: Station;
  readonly stationSlug: Scalars['String'];
  readonly thumbnail: Scalars['String'];
  readonly title: Scalars['String'];
  readonly url: Scalars['String'];
};

export type HistorySongFindAllWhereInput = {
  readonly stationSlug: Scalars['String'];
};

export type LoginInput = {
  readonly email?: InputMaybe<Scalars['String']>;
  readonly password: Scalars['String'];
  readonly username?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  readonly __typename?: 'Mutation';
  readonly createSong: Song;
  readonly createStation: Station;
  readonly createUser: User;
  readonly deleteSong: Scalars['Boolean'];
  readonly deleteStation: Scalars['Boolean'];
  readonly deleteUser: Scalars['Boolean'];
  readonly joinStation: Scalars['Boolean'];
  readonly leaveStation: Scalars['Boolean'];
  readonly login: Authentication;
  readonly register: Authentication;
  readonly updateUser: Scalars['Boolean'];
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


export type MutationDeleteSongArgs = {
  where: SongFindOneWhereInput;
};


export type MutationDeleteStationArgs = {
  where: StationFindOneWhereInput;
};


export type MutationDeleteUserArgs = {
  where: UserFindOneWhereInput;
};


export type MutationJoinStationArgs = {
  where: StationFindOneWhereInput;
};


export type MutationLeaveStationArgs = {
  where: StationFindOneWhereInput;
};


export type MutationLoginArgs = {
  data: LoginInput;
};


export type MutationRegisterArgs = {
  data: RegisterInput;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserFindOneWhereInput;
};

export enum MutationEnum {
  Created = 'CREATED',
  Deleted = 'DELETED',
  Updated = 'UPDATED'
}

export enum OrderEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type PaginationInput = {
  /** Offset (paginated) where from entities should be taken. Default: 0 */
  readonly skip?: InputMaybe<Scalars['Int']>;
  /** Limit (paginated) - max number of entities should be taken. Default: 10 */
  readonly take?: InputMaybe<Scalars['Int']>;
};

export type Query = {
  readonly __typename?: 'Query';
  readonly countHistorySongs: Scalars['Int'];
  readonly currentUser: User;
  readonly historySongs: ReadonlyArray<HistorySong>;
  readonly preferredRegion: Scalars['String'];
  readonly song: Song;
  readonly songs: ReadonlyArray<Song>;
  readonly station: Station;
  readonly stationSetting: StationSetting;
  readonly stations: ReadonlyArray<Station>;
  readonly user: User;
  readonly users: ReadonlyArray<User>;
  readonly youtubeTrendingVideos: ReadonlyArray<YoutubeVideo>;
  readonly youtubeVideo: YoutubeVideoDetail;
  readonly youtubeVideos: ReadonlyArray<YoutubeVideo>;
};


export type QueryCountHistorySongsArgs = {
  where: HistorySongFindAllWhereInput;
};


export type QueryHistorySongsArgs = {
  pagination?: InputMaybe<PaginationInput>;
  where: HistorySongFindAllWhereInput;
};


export type QuerySongArgs = {
  where: SongFindOneWhereInput;
};


export type QuerySongsArgs = {
  order?: InputMaybe<SongFindAllOrderInput>;
  pagination?: InputMaybe<PaginationInput>;
  where?: InputMaybe<ReadonlyArray<InputMaybe<SongFindAllWhereInput>>>;
};


export type QueryStationArgs = {
  where: StationFindOneWhereInput;
};


export type QueryStationSettingArgs = {
  where: StationSettingFindInput;
};


export type QueryStationsArgs = {
  order?: InputMaybe<StationFindAllOrderInput>;
  pagination?: InputMaybe<PaginationInput>;
  where?: InputMaybe<ReadonlyArray<InputMaybe<StationFindAllWhereInput>>>;
};


export type QueryUserArgs = {
  where: UserFindOneWhereInput;
};


export type QueryUsersArgs = {
  order?: InputMaybe<UserFindAllOrderInput>;
  pagination?: InputMaybe<PaginationInput>;
  where?: InputMaybe<UserFindAllWhereInput>;
};


export type QueryYoutubeTrendingVideosArgs = {
  where: YoutubeTrendingVideoFindAllInput;
};


export type QueryYoutubeVideoArgs = {
  where: YoutubeVideoFindOneInput;
};


export type QueryYoutubeVideosArgs = {
  where: YoutubeVideoFindAllInput;
};

export type RegisterInput = {
  readonly email?: InputMaybe<Scalars['String']>;
  readonly password: Scalars['String'];
  readonly username?: InputMaybe<Scalars['String']>;
};

export type Snippet = {
  readonly __typename?: 'Snippet';
  readonly channelId: Scalars['String'];
  readonly channelTitle: Scalars['String'];
  readonly description: Scalars['String'];
  readonly publishedAt: Scalars['String'];
  readonly thumbnails: Thumbnails;
  readonly title: Scalars['String'];
};

export type Song = {
  readonly __typename?: 'Song';
  readonly createdAt: Scalars['Timestamp'];
  readonly creator: User;
  readonly downVoteUserIds: ReadonlyArray<Scalars['Int']>;
  readonly duration: Scalars['Int'];
  readonly id: Scalars['Int'];
  readonly startedAt?: Maybe<Scalars['Timestamp']>;
  readonly station: Station;
  readonly stationSlug: Scalars['String'];
  readonly status: SongStatusEnum;
  readonly thumbnail: Scalars['String'];
  readonly title: Scalars['String'];
  readonly upVoteUserIds: ReadonlyArray<Scalars['Int']>;
  readonly updatedAt: Scalars['Timestamp'];
  readonly url: Scalars['String'];
};

export type SongCreateInput = {
  /** Duration of a song in milliseconds(ms). Minimum is 10000ms (10 seconds), maximum is 86400000ms (a day) */
  readonly duration: Scalars['Int'];
  readonly stationSlug?: InputMaybe<Scalars['String']>;
  readonly status?: InputMaybe<SongStatusEnum>;
  readonly thumbnail: Scalars['String'];
  readonly title: Scalars['String'];
  readonly url: Scalars['String'];
};

export enum SongExplorerOrderEnum {
  Date = 'DATE',
  Rating = 'RATING',
  Relevance = 'RELEVANCE',
  Title = 'TITLE',
  VideoCount = 'VIDEO_COUNT',
  ViewCount = 'VIEW_COUNT'
}

export type SongFindAllOrderInput = {
  readonly createdAt?: InputMaybe<OrderEnum>;
  readonly duration?: InputMaybe<OrderEnum>;
  readonly id?: InputMaybe<OrderEnum>;
  readonly thumbnail?: InputMaybe<OrderEnum>;
  readonly title?: InputMaybe<OrderEnum>;
  readonly updatedAt?: InputMaybe<OrderEnum>;
  readonly url?: InputMaybe<OrderEnum>;
};

export type SongFindAllWhereInput = {
  readonly duration?: InputMaybe<Scalars['Int']>;
  readonly stationSlug?: InputMaybe<Scalars['String']>;
  readonly status?: InputMaybe<SongStatusEnum>;
  readonly thumbnail?: InputMaybe<Scalars['String']>;
  readonly title?: InputMaybe<Scalars['String']>;
  readonly url?: InputMaybe<Scalars['String']>;
};

export type SongFindOneWhereInput = {
  readonly id: Scalars['Int'];
};

export enum SongStatusEnum {
  Pending = 'PENDING',
  Played = 'PLAYED',
  Playing = 'PLAYING',
  Skipped = 'SKIPPED'
}

export type SongSubscription = {
  readonly __typename?: 'SongSubscription';
  readonly entity: Song;
  readonly mutation: MutationEnum;
};

export type Station = {
  readonly __typename?: 'Station';
  readonly createdAt: Scalars['Timestamp'];
  readonly description?: Maybe<Scalars['String']>;
  readonly id: Scalars['Int'];
  readonly name: Scalars['String'];
  readonly onlineUserIds: ReadonlyArray<Scalars['Int']>;
  readonly playingSong?: Maybe<Song>;
  readonly slug: Scalars['String'];
  readonly tags: ReadonlyArray<StationTag>;
  readonly updatedAt: Scalars['Timestamp'];
  readonly userRoles: ReadonlyArray<UserRole>;
};

export type StationCreateInput = {
  readonly description?: InputMaybe<Scalars['String']>;
  readonly name: Scalars['String'];
  readonly slug: Scalars['String'];
  readonly tags?: InputMaybe<ReadonlyArray<StationTagCreateInput>>;
};

export type StationFindAllOrderInput = {
  readonly createdAt?: InputMaybe<OrderEnum>;
  readonly id?: InputMaybe<OrderEnum>;
  readonly name?: InputMaybe<OrderEnum>;
  readonly slug?: InputMaybe<OrderEnum>;
  readonly updatedAt?: InputMaybe<OrderEnum>;
};

export type StationFindAllWhereInput = {
  readonly name?: InputMaybe<Scalars['String']>;
  readonly slug?: InputMaybe<Scalars['String']>;
};

export type StationFindOneWhereInput = {
  readonly id?: InputMaybe<Scalars['Int']>;
  readonly name?: InputMaybe<Scalars['String']>;
  readonly slug?: InputMaybe<Scalars['String']>;
};

export enum StationRunningOutOfSongsBehaviorEnum {
  PlayFirstSongFromRelatedSongs = 'PLAY_FIRST_SONG_FROM_RELATED_SONGS',
  PlayRandomSongFromHistorySongs = 'PLAY_RANDOM_SONG_FROM_HISTORY_SONGS'
}

export type StationSetting = {
  readonly __typename?: 'StationSetting';
  readonly id: Scalars['String'];
  readonly station: StationSharedSetting;
  readonly user?: Maybe<UserStationSetting>;
};

export type StationSettingFindInput = {
  readonly stationId: Scalars['Int'];
  readonly userId?: InputMaybe<Scalars['Int']>;
};

export type StationSharedSetting = {
  readonly __typename?: 'StationSharedSetting';
  readonly outOfSongsBehavior: StationRunningOutOfSongsBehaviorEnum;
};

export type StationSubscription = {
  readonly __typename?: 'StationSubscription';
  readonly entity: Station;
  readonly mutation: MutationEnum;
};

export type StationTag = {
  readonly __typename?: 'StationTag';
  readonly id: Scalars['Int'];
  readonly name: Scalars['String'];
  readonly stations: ReadonlyArray<Station>;
};

export type StationTagCreateInput = {
  readonly name: Scalars['String'];
};

export type Subscription = {
  readonly __typename?: 'Subscription';
  readonly song: SongSubscription;
  readonly station: StationSubscription;
  readonly user: UserSubscription;
};


export type SubscriptionSongArgs = {
  where?: InputMaybe<SongFindAllWhereInput>;
};


export type SubscriptionStationArgs = {
  where?: InputMaybe<StationFindOneWhereInput>;
};


export type SubscriptionUserArgs = {
  where: UserFindOneWhereInput;
};

export type Thumbnail = {
  readonly __typename?: 'Thumbnail';
  readonly height: Scalars['Float'];
  readonly url: Scalars['String'];
  readonly width: Scalars['Float'];
};

export type Thumbnails = {
  readonly __typename?: 'Thumbnails';
  readonly default: Thumbnail;
  readonly high?: Maybe<Thumbnail>;
  readonly maxres?: Maybe<Thumbnail>;
  readonly medium?: Maybe<Thumbnail>;
  readonly standard?: Maybe<Thumbnail>;
};

export type User = {
  readonly __typename?: 'User';
  readonly avatarUrl?: Maybe<Scalars['String']>;
  readonly bio?: Maybe<Scalars['String']>;
  readonly city?: Maybe<Scalars['String']>;
  readonly country?: Maybe<Scalars['String']>;
  readonly coverUrl?: Maybe<Scalars['String']>;
  readonly createdAt: Scalars['Timestamp'];
  readonly currentStationId?: Maybe<Scalars['Float']>;
  readonly email: Scalars['String'];
  readonly facebookId?: Maybe<Scalars['String']>;
  readonly googleId?: Maybe<Scalars['String']>;
  readonly id: Scalars['Int'];
  readonly name?: Maybe<Scalars['String']>;
  readonly reputation?: Maybe<Scalars['Int']>;
  readonly roles: ReadonlyArray<UserRole>;
  readonly updatedAt: Scalars['Timestamp'];
  readonly username: Scalars['String'];
};

export type UserCreateInput = {
  readonly avatarUrl?: InputMaybe<Scalars['String']>;
  readonly bio?: InputMaybe<Scalars['String']>;
  readonly city?: InputMaybe<Scalars['String']>;
  readonly country?: InputMaybe<Scalars['String']>;
  readonly coverUrl?: InputMaybe<Scalars['String']>;
  readonly email: Scalars['String'];
  readonly facebookId?: InputMaybe<Scalars['String']>;
  readonly googleId?: InputMaybe<Scalars['String']>;
  readonly name?: InputMaybe<Scalars['String']>;
  readonly password: Scalars['String'];
  readonly username: Scalars['String'];
};

export type UserFindAllOrderInput = {
  readonly city?: InputMaybe<OrderEnum>;
  readonly country?: InputMaybe<OrderEnum>;
  readonly createdAt?: InputMaybe<OrderEnum>;
  readonly email?: InputMaybe<OrderEnum>;
  readonly id?: InputMaybe<OrderEnum>;
  readonly name?: InputMaybe<OrderEnum>;
  readonly reputation?: InputMaybe<OrderEnum>;
  readonly updatedAt?: InputMaybe<OrderEnum>;
  readonly username?: InputMaybe<OrderEnum>;
};

export type UserFindAllWhereInput = {
  readonly email?: InputMaybe<Scalars['String']>;
  readonly username?: InputMaybe<Scalars['String']>;
};

export type UserFindOneWhereInput = {
  readonly email?: InputMaybe<Scalars['String']>;
  readonly id?: InputMaybe<Scalars['Int']>;
  readonly username?: InputMaybe<Scalars['String']>;
};

export type UserRole = {
  readonly __typename?: 'UserRole';
  readonly id: Scalars['Int'];
  readonly role: UserRoleEnum;
  readonly station?: Maybe<Station>;
  readonly user: User;
};

export enum UserRoleEnum {
  Admin = 'ADMIN',
  StationAdmin = 'STATION_ADMIN',
  StationOwner = 'STATION_OWNER'
}

export type UserStationSetting = {
  readonly __typename?: 'UserStationSetting';
  readonly notifyOnlineUser: Scalars['Boolean'];
  readonly outOfSongsBehavior: StationRunningOutOfSongsBehaviorEnum;
};

export type UserSubscription = {
  readonly __typename?: 'UserSubscription';
  readonly entity: User;
  readonly mutation: MutationEnum;
};

export type UserUpdateInput = {
  readonly avatarUrl?: InputMaybe<Scalars['String']>;
  readonly bio?: InputMaybe<Scalars['String']>;
  readonly city?: InputMaybe<Scalars['String']>;
  readonly country?: InputMaybe<Scalars['String']>;
  readonly coverUrl?: InputMaybe<Scalars['String']>;
  readonly email?: InputMaybe<Scalars['String']>;
  readonly facebookId?: InputMaybe<Scalars['String']>;
  readonly googleId?: InputMaybe<Scalars['String']>;
  readonly name?: InputMaybe<Scalars['String']>;
  readonly username?: InputMaybe<Scalars['String']>;
};

export type YoutubeTrendingVideoFindAllInput = {
  readonly maxResults?: InputMaybe<Scalars['Float']>;
  readonly regionCode?: InputMaybe<Scalars['String']>;
};

export type YoutubeVideo = {
  readonly __typename?: 'YoutubeVideo';
  readonly id: Scalars['String'];
  readonly snippet: Snippet;
};

export type YoutubeVideoDetail = {
  readonly __typename?: 'YoutubeVideoDetail';
  readonly contentDetails: ContentDetails;
  readonly id: Scalars['String'];
  readonly snippet: Snippet;
};

export type YoutubeVideoFindAllInput = {
  readonly maxResults?: InputMaybe<Scalars['Float']>;
  readonly order?: InputMaybe<SongExplorerOrderEnum>;
  readonly q?: InputMaybe<Scalars['String']>;
  readonly relatedToVideoUrl?: InputMaybe<Scalars['String']>;
};

export type YoutubeVideoFindOneInput = {
  readonly url?: InputMaybe<Scalars['String']>;
  readonly videoId?: InputMaybe<Scalars['String']>;
};

export type CreateSongMutationVariables = Exact<{
  data: SongCreateInput;
}>;


export type CreateSongMutation = { readonly __typename?: 'Mutation', readonly createSong: { readonly __typename?: 'Song', readonly id: number } };

export type CreateStationMutationVariables = Exact<{
  data: StationCreateInput;
}>;


export type CreateStationMutation = { readonly __typename?: 'Mutation', readonly createStation: { readonly __typename?: 'Station', readonly id: number, readonly slug: string, readonly name: string } };

export type JoinStationMutationVariables = Exact<{
  where: StationFindOneWhereInput;
}>;


export type JoinStationMutation = { readonly __typename?: 'Mutation', readonly joinStation: boolean };

export type LeaveStationMutationVariables = Exact<{
  where: StationFindOneWhereInput;
}>;


export type LeaveStationMutation = { readonly __typename?: 'Mutation', readonly leaveStation: boolean };

export type LoginMutationVariables = Exact<{
  data: LoginInput;
}>;


export type LoginMutation = { readonly __typename?: 'Mutation', readonly login: { readonly __typename?: 'Authentication', readonly token: string } };

export type RegisterMutationVariables = Exact<{
  data: RegisterInput;
}>;


export type RegisterMutation = { readonly __typename?: 'Mutation', readonly register: { readonly __typename?: 'Authentication', readonly token: string } };

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = { readonly __typename?: 'Query', readonly user: { readonly __typename?: 'User', readonly id: number, readonly email: string, readonly username: string, readonly avatarUrl?: string | null | undefined, readonly coverUrl?: string | null | undefined, readonly reputation?: number | null | undefined } };

export type UserBaseInformationFragment = { readonly __typename?: 'User', readonly id: number, readonly email: string, readonly username: string, readonly avatarUrl?: string | null | undefined, readonly coverUrl?: string | null | undefined, readonly reputation?: number | null | undefined };

export type HistorySongsQueryVariables = Exact<{
  stationSlug: Scalars['String'];
  pagination?: InputMaybe<PaginationInput>;
}>;


export type HistorySongsQuery = { readonly __typename?: 'Query', readonly count: number, readonly songs: ReadonlyArray<{ readonly __typename?: 'HistorySong', readonly id: string, readonly title: string, readonly url: string, readonly thumbnail: string, readonly duration: number, readonly creatorIds: ReadonlyArray<number>, readonly playedTimes: number }> };

export type MiniUserQueryVariables = Exact<{
  where: UserFindOneWhereInput;
}>;


export type MiniUserQuery = { readonly __typename?: 'Query', readonly user: { readonly __typename?: 'User', readonly id: number, readonly email: string, readonly username: string, readonly avatarUrl?: string | null | undefined, readonly coverUrl?: string | null | undefined, readonly reputation?: number | null | undefined } };

export type StationQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type StationQuery = { readonly __typename?: 'Query', readonly station: { readonly __typename?: 'Station', readonly id: number, readonly name: string, readonly slug: string, readonly onlineUserIds: ReadonlyArray<number>, readonly tags: ReadonlyArray<{ readonly __typename?: 'StationTag', readonly id: number, readonly name: string }>, readonly userRoles: ReadonlyArray<{ readonly __typename?: 'UserRole', readonly role: UserRoleEnum, readonly user: { readonly __typename?: 'User', readonly id: number, readonly email: string, readonly username: string, readonly avatarUrl?: string | null | undefined, readonly coverUrl?: string | null | undefined, readonly reputation?: number | null | undefined } }>, readonly playingSong?: { readonly __typename?: 'Song', readonly id: number, readonly title: string, readonly thumbnail: string, readonly startedAt?: any | null | undefined } | null | undefined } };

export type StationPlayerQueryVariables = Exact<{
  stationSlug: Scalars['String'];
}>;


export type StationPlayerQuery = { readonly __typename?: 'Query', readonly playingSongs: ReadonlyArray<{ readonly __typename?: 'Song', readonly id: number, readonly title: string, readonly url: string, readonly thumbnail: string, readonly duration: number, readonly createdAt: any, readonly startedAt?: any | null | undefined, readonly status: SongStatusEnum, readonly upVoteUserIds: ReadonlyArray<number>, readonly downVoteUserIds: ReadonlyArray<number> }> };

export type OnStationPlayerChangedSubscriptionVariables = Exact<{
  stationSlug: Scalars['String'];
}>;


export type OnStationPlayerChangedSubscription = { readonly __typename?: 'Subscription', readonly onPlayingSongChanged: { readonly __typename?: 'SongSubscription', readonly mutation: MutationEnum, readonly entity: { readonly __typename?: 'Song', readonly id: number } } };

export type StationPlaylistQueryVariables = Exact<{
  stationSlug: Scalars['String'];
}>;


export type StationPlaylistQuery = { readonly __typename?: 'Query', readonly playlist: ReadonlyArray<{ readonly __typename?: 'Song', readonly id: number, readonly title: string, readonly url: string, readonly thumbnail: string, readonly duration: number, readonly createdAt: any, readonly startedAt?: any | null | undefined, readonly status: SongStatusEnum, readonly upVoteUserIds: ReadonlyArray<number>, readonly downVoteUserIds: ReadonlyArray<number>, readonly creator: { readonly __typename?: 'User', readonly id: number, readonly email: string, readonly username: string, readonly avatarUrl?: string | null | undefined, readonly coverUrl?: string | null | undefined, readonly reputation?: number | null | undefined } }> };

export type OnStationPlaylistChangedSubscriptionVariables = Exact<{
  stationSlug: Scalars['String'];
}>;


export type OnStationPlaylistChangedSubscription = { readonly __typename?: 'Subscription', readonly onPlaylistSongChanged: { readonly __typename?: 'SongSubscription', readonly mutation: MutationEnum, readonly entity: { readonly __typename?: 'Song', readonly id: number } } };

export type StationSettingQueryVariables = Exact<{
  stationId: Scalars['Int'];
  userId?: InputMaybe<Scalars['Int']>;
}>;


export type StationSettingQuery = { readonly __typename?: 'Query', readonly stationSetting: { readonly __typename?: 'StationSetting', readonly id: string, readonly user?: { readonly __typename?: 'UserStationSetting', readonly outOfSongsBehavior: StationRunningOutOfSongsBehaviorEnum, readonly notifyOnlineUser: boolean } | null | undefined, readonly station: { readonly __typename?: 'StationSharedSetting', readonly outOfSongsBehavior: StationRunningOutOfSongsBehaviorEnum } } };

export type StationsQueryVariables = Exact<{
  pagination?: InputMaybe<PaginationInput>;
  order?: InputMaybe<StationFindAllOrderInput>;
  where?: InputMaybe<ReadonlyArray<InputMaybe<StationFindAllWhereInput>> | InputMaybe<StationFindAllWhereInput>>;
}>;


export type StationsQuery = { readonly __typename?: 'Query', readonly stations: ReadonlyArray<{ readonly __typename?: 'Station', readonly id: number, readonly name: string, readonly slug: string, readonly onlineUserIds: ReadonlyArray<number>, readonly tags: ReadonlyArray<{ readonly __typename?: 'StationTag', readonly id: number, readonly name: string }>, readonly userRoles: ReadonlyArray<{ readonly __typename?: 'UserRole', readonly role: UserRoleEnum, readonly user: { readonly __typename?: 'User', readonly id: number, readonly email: string, readonly username: string, readonly avatarUrl?: string | null | undefined, readonly coverUrl?: string | null | undefined, readonly reputation?: number | null | undefined } }>, readonly playingSong?: { readonly __typename?: 'Song', readonly id: number, readonly title: string, readonly thumbnail: string, readonly startedAt?: any | null | undefined } | null | undefined }> };

export type OnStationChangedSubscriptionVariables = Exact<{
  where?: InputMaybe<StationFindOneWhereInput>;
}>;


export type OnStationChangedSubscription = { readonly __typename?: 'Subscription', readonly onStationChanged: { readonly __typename?: 'StationSubscription', readonly mutation: MutationEnum, readonly entity: { readonly __typename?: 'Station', readonly id: number } } };

export type UserProfileQueryVariables = Exact<{
  where: UserFindOneWhereInput;
}>;


export type UserProfileQuery = { readonly __typename?: 'Query', readonly user: { readonly __typename?: 'User', readonly id: number, readonly email: string, readonly username: string, readonly avatarUrl?: string | null | undefined, readonly coverUrl?: string | null | undefined, readonly reputation?: number | null | undefined, readonly bio?: string | null | undefined, readonly city?: string | null | undefined, readonly country?: string | null | undefined, readonly googleId?: string | null | undefined, readonly facebookId?: string | null | undefined, readonly roles: ReadonlyArray<{ readonly __typename?: 'UserRole', readonly role: UserRoleEnum, readonly station?: { readonly __typename?: 'Station', readonly name: string, readonly slug: string, readonly description?: string | null | undefined, readonly tags: ReadonlyArray<{ readonly __typename?: 'StationTag', readonly id: number, readonly name: string }> } | null | undefined }> } };

export type YoutubeTrendingVideosQueryVariables = Exact<{
  where: YoutubeTrendingVideoFindAllInput;
}>;


export type YoutubeTrendingVideosQuery = { readonly __typename?: 'Query', readonly preferredRegion: string, readonly youtubeTrendingVideos: ReadonlyArray<{ readonly __typename?: 'YoutubeVideo', readonly id: string, readonly snippet: { readonly __typename?: 'Snippet', readonly publishedAt: string, readonly channelId: string, readonly title: string, readonly description: string, readonly channelTitle: string, readonly thumbnails: { readonly __typename?: 'Thumbnails', readonly default: { readonly __typename?: 'Thumbnail', readonly url: string, readonly width: number, readonly height: number }, readonly medium?: { readonly __typename?: 'Thumbnail', readonly url: string, readonly width: number, readonly height: number } | null | undefined, readonly high?: { readonly __typename?: 'Thumbnail', readonly url: string, readonly width: number, readonly height: number } | null | undefined, readonly standard?: { readonly __typename?: 'Thumbnail', readonly url: string, readonly width: number, readonly height: number } | null | undefined, readonly maxres?: { readonly __typename?: 'Thumbnail', readonly url: string, readonly width: number, readonly height: number } | null | undefined } } }> };

export type YoutubeVideoQueryVariables = Exact<{
  where: YoutubeVideoFindOneInput;
}>;


export type YoutubeVideoQuery = { readonly __typename?: 'Query', readonly youtubeVideo: { readonly __typename?: 'YoutubeVideoDetail', readonly id: string, readonly snippet: { readonly __typename?: 'Snippet', readonly publishedAt: string, readonly channelId: string, readonly title: string, readonly description: string, readonly channelTitle: string, readonly thumbnails: { readonly __typename?: 'Thumbnails', readonly default: { readonly __typename?: 'Thumbnail', readonly url: string, readonly width: number, readonly height: number }, readonly medium?: { readonly __typename?: 'Thumbnail', readonly url: string, readonly width: number, readonly height: number } | null | undefined, readonly high?: { readonly __typename?: 'Thumbnail', readonly url: string, readonly width: number, readonly height: number } | null | undefined, readonly standard?: { readonly __typename?: 'Thumbnail', readonly url: string, readonly width: number, readonly height: number } | null | undefined, readonly maxres?: { readonly __typename?: 'Thumbnail', readonly url: string, readonly width: number, readonly height: number } | null | undefined } }, readonly contentDetails: { readonly __typename?: 'ContentDetails', readonly duration: number, readonly dimension: string, readonly caption: string } } };

export type YoutubeVideosQueryVariables = Exact<{
  where: YoutubeVideoFindAllInput;
}>;


export type YoutubeVideosQuery = { readonly __typename?: 'Query', readonly youtubeVideos: ReadonlyArray<{ readonly __typename?: 'YoutubeVideo', readonly id: string, readonly snippet: { readonly __typename?: 'Snippet', readonly publishedAt: string, readonly channelId: string, readonly title: string, readonly description: string, readonly channelTitle: string, readonly thumbnails: { readonly __typename?: 'Thumbnails', readonly default: { readonly __typename?: 'Thumbnail', readonly url: string, readonly width: number, readonly height: number }, readonly medium?: { readonly __typename?: 'Thumbnail', readonly url: string, readonly width: number, readonly height: number } | null | undefined, readonly high?: { readonly __typename?: 'Thumbnail', readonly url: string, readonly width: number, readonly height: number } | null | undefined, readonly standard?: { readonly __typename?: 'Thumbnail', readonly url: string, readonly width: number, readonly height: number } | null | undefined, readonly maxres?: { readonly __typename?: 'Thumbnail', readonly url: string, readonly width: number, readonly height: number } | null | undefined } } }> };

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
export type CreateSongMutationFn = Apollo.MutationFunction<CreateSongMutation, CreateSongMutationVariables>;

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
export function useCreateSongMutation(baseOptions?: Apollo.MutationHookOptions<CreateSongMutation, CreateSongMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSongMutation, CreateSongMutationVariables>(CreateSongDocument, options);
      }
export type CreateSongMutationHookResult = ReturnType<typeof useCreateSongMutation>;
export type CreateSongMutationResult = Apollo.MutationResult<CreateSongMutation>;
export type CreateSongMutationOptions = Apollo.BaseMutationOptions<CreateSongMutation, CreateSongMutationVariables>;
export const CreateStationDocument = gql`
    mutation CreateStation($data: StationCreateInput!) {
  createStation(data: $data) {
    id
    slug
    name
  }
}
    `;
export type CreateStationMutationFn = Apollo.MutationFunction<CreateStationMutation, CreateStationMutationVariables>;

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
export function useCreateStationMutation(baseOptions?: Apollo.MutationHookOptions<CreateStationMutation, CreateStationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateStationMutation, CreateStationMutationVariables>(CreateStationDocument, options);
      }
export type CreateStationMutationHookResult = ReturnType<typeof useCreateStationMutation>;
export type CreateStationMutationResult = Apollo.MutationResult<CreateStationMutation>;
export type CreateStationMutationOptions = Apollo.BaseMutationOptions<CreateStationMutation, CreateStationMutationVariables>;
export const JoinStationDocument = gql`
    mutation JoinStation($where: StationFindOneWhereInput!) {
  joinStation(where: $where)
}
    `;
export type JoinStationMutationFn = Apollo.MutationFunction<JoinStationMutation, JoinStationMutationVariables>;

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
export function useJoinStationMutation(baseOptions?: Apollo.MutationHookOptions<JoinStationMutation, JoinStationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<JoinStationMutation, JoinStationMutationVariables>(JoinStationDocument, options);
      }
export type JoinStationMutationHookResult = ReturnType<typeof useJoinStationMutation>;
export type JoinStationMutationResult = Apollo.MutationResult<JoinStationMutation>;
export type JoinStationMutationOptions = Apollo.BaseMutationOptions<JoinStationMutation, JoinStationMutationVariables>;
export const LeaveStationDocument = gql`
    mutation LeaveStation($where: StationFindOneWhereInput!) {
  leaveStation(where: $where)
}
    `;
export type LeaveStationMutationFn = Apollo.MutationFunction<LeaveStationMutation, LeaveStationMutationVariables>;

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
export function useLeaveStationMutation(baseOptions?: Apollo.MutationHookOptions<LeaveStationMutation, LeaveStationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LeaveStationMutation, LeaveStationMutationVariables>(LeaveStationDocument, options);
      }
export type LeaveStationMutationHookResult = ReturnType<typeof useLeaveStationMutation>;
export type LeaveStationMutationResult = Apollo.MutationResult<LeaveStationMutation>;
export type LeaveStationMutationOptions = Apollo.BaseMutationOptions<LeaveStationMutation, LeaveStationMutationVariables>;
export const LoginDocument = gql`
    mutation login($data: LoginInput!) {
  login(data: $data) {
    token
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

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
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($data: RegisterInput!) {
  register(data: $data) {
    token
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

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
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
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
export function useCurrentUserQuery(baseOptions?: Apollo.QueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, options);
      }
export function useCurrentUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, options);
        }
export type CurrentUserQueryHookResult = ReturnType<typeof useCurrentUserQuery>;
export type CurrentUserLazyQueryHookResult = ReturnType<typeof useCurrentUserLazyQuery>;
export type CurrentUserQueryResult = Apollo.QueryResult<CurrentUserQuery, CurrentUserQueryVariables>;
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
export function useHistorySongsQuery(baseOptions: Apollo.QueryHookOptions<HistorySongsQuery, HistorySongsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HistorySongsQuery, HistorySongsQueryVariables>(HistorySongsDocument, options);
      }
export function useHistorySongsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HistorySongsQuery, HistorySongsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HistorySongsQuery, HistorySongsQueryVariables>(HistorySongsDocument, options);
        }
export type HistorySongsQueryHookResult = ReturnType<typeof useHistorySongsQuery>;
export type HistorySongsLazyQueryHookResult = ReturnType<typeof useHistorySongsLazyQuery>;
export type HistorySongsQueryResult = Apollo.QueryResult<HistorySongsQuery, HistorySongsQueryVariables>;
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
export function useMiniUserQuery(baseOptions: Apollo.QueryHookOptions<MiniUserQuery, MiniUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MiniUserQuery, MiniUserQueryVariables>(MiniUserDocument, options);
      }
export function useMiniUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MiniUserQuery, MiniUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MiniUserQuery, MiniUserQueryVariables>(MiniUserDocument, options);
        }
export type MiniUserQueryHookResult = ReturnType<typeof useMiniUserQuery>;
export type MiniUserLazyQueryHookResult = ReturnType<typeof useMiniUserLazyQuery>;
export type MiniUserQueryResult = Apollo.QueryResult<MiniUserQuery, MiniUserQueryVariables>;
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
export function useStationQuery(baseOptions: Apollo.QueryHookOptions<StationQuery, StationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<StationQuery, StationQueryVariables>(StationDocument, options);
      }
export function useStationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StationQuery, StationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<StationQuery, StationQueryVariables>(StationDocument, options);
        }
export type StationQueryHookResult = ReturnType<typeof useStationQuery>;
export type StationLazyQueryHookResult = ReturnType<typeof useStationLazyQuery>;
export type StationQueryResult = Apollo.QueryResult<StationQuery, StationQueryVariables>;
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
export function useStationPlayerQuery(baseOptions: Apollo.QueryHookOptions<StationPlayerQuery, StationPlayerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<StationPlayerQuery, StationPlayerQueryVariables>(StationPlayerDocument, options);
      }
export function useStationPlayerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StationPlayerQuery, StationPlayerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<StationPlayerQuery, StationPlayerQueryVariables>(StationPlayerDocument, options);
        }
export type StationPlayerQueryHookResult = ReturnType<typeof useStationPlayerQuery>;
export type StationPlayerLazyQueryHookResult = ReturnType<typeof useStationPlayerLazyQuery>;
export type StationPlayerQueryResult = Apollo.QueryResult<StationPlayerQuery, StationPlayerQueryVariables>;
export const OnStationPlayerChangedDocument = gql`
    subscription OnStationPlayerChanged($stationSlug: String!) {
  onPlayingSongChanged: song(where: {stationSlug: $stationSlug}) {
    mutation
    entity {
      id
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
export function useOnStationPlayerChangedSubscription(baseOptions: Apollo.SubscriptionHookOptions<OnStationPlayerChangedSubscription, OnStationPlayerChangedSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<OnStationPlayerChangedSubscription, OnStationPlayerChangedSubscriptionVariables>(OnStationPlayerChangedDocument, options);
      }
export type OnStationPlayerChangedSubscriptionHookResult = ReturnType<typeof useOnStationPlayerChangedSubscription>;
export type OnStationPlayerChangedSubscriptionResult = Apollo.SubscriptionResult<OnStationPlayerChangedSubscription>;
export const StationPlaylistDocument = gql`
    query StationPlaylist($stationSlug: String!) {
  playlist: songs(
    where: [{stationSlug: $stationSlug, status: PENDING}, {stationSlug: $stationSlug, status: PLAYING}]
    pagination: {take: 99}
  ) {
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
export function useStationPlaylistQuery(baseOptions: Apollo.QueryHookOptions<StationPlaylistQuery, StationPlaylistQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<StationPlaylistQuery, StationPlaylistQueryVariables>(StationPlaylistDocument, options);
      }
export function useStationPlaylistLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StationPlaylistQuery, StationPlaylistQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<StationPlaylistQuery, StationPlaylistQueryVariables>(StationPlaylistDocument, options);
        }
export type StationPlaylistQueryHookResult = ReturnType<typeof useStationPlaylistQuery>;
export type StationPlaylistLazyQueryHookResult = ReturnType<typeof useStationPlaylistLazyQuery>;
export type StationPlaylistQueryResult = Apollo.QueryResult<StationPlaylistQuery, StationPlaylistQueryVariables>;
export const OnStationPlaylistChangedDocument = gql`
    subscription OnStationPlaylistChanged($stationSlug: String!) {
  onPlaylistSongChanged: song(where: {stationSlug: $stationSlug}) {
    mutation
    entity {
      id
    }
  }
}
    `;

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
export function useOnStationPlaylistChangedSubscription(baseOptions: Apollo.SubscriptionHookOptions<OnStationPlaylistChangedSubscription, OnStationPlaylistChangedSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<OnStationPlaylistChangedSubscription, OnStationPlaylistChangedSubscriptionVariables>(OnStationPlaylistChangedDocument, options);
      }
export type OnStationPlaylistChangedSubscriptionHookResult = ReturnType<typeof useOnStationPlaylistChangedSubscription>;
export type OnStationPlaylistChangedSubscriptionResult = Apollo.SubscriptionResult<OnStationPlaylistChangedSubscription>;
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
export function useStationSettingQuery(baseOptions: Apollo.QueryHookOptions<StationSettingQuery, StationSettingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<StationSettingQuery, StationSettingQueryVariables>(StationSettingDocument, options);
      }
export function useStationSettingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StationSettingQuery, StationSettingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<StationSettingQuery, StationSettingQueryVariables>(StationSettingDocument, options);
        }
export type StationSettingQueryHookResult = ReturnType<typeof useStationSettingQuery>;
export type StationSettingLazyQueryHookResult = ReturnType<typeof useStationSettingLazyQuery>;
export type StationSettingQueryResult = Apollo.QueryResult<StationSettingQuery, StationSettingQueryVariables>;
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
export function useStationsQuery(baseOptions?: Apollo.QueryHookOptions<StationsQuery, StationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<StationsQuery, StationsQueryVariables>(StationsDocument, options);
      }
export function useStationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StationsQuery, StationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<StationsQuery, StationsQueryVariables>(StationsDocument, options);
        }
export type StationsQueryHookResult = ReturnType<typeof useStationsQuery>;
export type StationsLazyQueryHookResult = ReturnType<typeof useStationsLazyQuery>;
export type StationsQueryResult = Apollo.QueryResult<StationsQuery, StationsQueryVariables>;
export const OnStationChangedDocument = gql`
    subscription OnStationChanged($where: StationFindOneWhereInput) {
  onStationChanged: station(where: $where) {
    mutation
    entity {
      id
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
export function useOnStationChangedSubscription(baseOptions?: Apollo.SubscriptionHookOptions<OnStationChangedSubscription, OnStationChangedSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<OnStationChangedSubscription, OnStationChangedSubscriptionVariables>(OnStationChangedDocument, options);
      }
export type OnStationChangedSubscriptionHookResult = ReturnType<typeof useOnStationChangedSubscription>;
export type OnStationChangedSubscriptionResult = Apollo.SubscriptionResult<OnStationChangedSubscription>;
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
export function useUserProfileQuery(baseOptions: Apollo.QueryHookOptions<UserProfileQuery, UserProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserProfileQuery, UserProfileQueryVariables>(UserProfileDocument, options);
      }
export function useUserProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserProfileQuery, UserProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserProfileQuery, UserProfileQueryVariables>(UserProfileDocument, options);
        }
export type UserProfileQueryHookResult = ReturnType<typeof useUserProfileQuery>;
export type UserProfileLazyQueryHookResult = ReturnType<typeof useUserProfileLazyQuery>;
export type UserProfileQueryResult = Apollo.QueryResult<UserProfileQuery, UserProfileQueryVariables>;
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
export function useYoutubeTrendingVideosQuery(baseOptions: Apollo.QueryHookOptions<YoutubeTrendingVideosQuery, YoutubeTrendingVideosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<YoutubeTrendingVideosQuery, YoutubeTrendingVideosQueryVariables>(YoutubeTrendingVideosDocument, options);
      }
export function useYoutubeTrendingVideosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<YoutubeTrendingVideosQuery, YoutubeTrendingVideosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<YoutubeTrendingVideosQuery, YoutubeTrendingVideosQueryVariables>(YoutubeTrendingVideosDocument, options);
        }
export type YoutubeTrendingVideosQueryHookResult = ReturnType<typeof useYoutubeTrendingVideosQuery>;
export type YoutubeTrendingVideosLazyQueryHookResult = ReturnType<typeof useYoutubeTrendingVideosLazyQuery>;
export type YoutubeTrendingVideosQueryResult = Apollo.QueryResult<YoutubeTrendingVideosQuery, YoutubeTrendingVideosQueryVariables>;
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
export function useYoutubeVideoQuery(baseOptions: Apollo.QueryHookOptions<YoutubeVideoQuery, YoutubeVideoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<YoutubeVideoQuery, YoutubeVideoQueryVariables>(YoutubeVideoDocument, options);
      }
export function useYoutubeVideoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<YoutubeVideoQuery, YoutubeVideoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<YoutubeVideoQuery, YoutubeVideoQueryVariables>(YoutubeVideoDocument, options);
        }
export type YoutubeVideoQueryHookResult = ReturnType<typeof useYoutubeVideoQuery>;
export type YoutubeVideoLazyQueryHookResult = ReturnType<typeof useYoutubeVideoLazyQuery>;
export type YoutubeVideoQueryResult = Apollo.QueryResult<YoutubeVideoQuery, YoutubeVideoQueryVariables>;
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
export function useYoutubeVideosQuery(baseOptions: Apollo.QueryHookOptions<YoutubeVideosQuery, YoutubeVideosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<YoutubeVideosQuery, YoutubeVideosQueryVariables>(YoutubeVideosDocument, options);
      }
export function useYoutubeVideosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<YoutubeVideosQuery, YoutubeVideosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<YoutubeVideosQuery, YoutubeVideosQueryVariables>(YoutubeVideosDocument, options);
        }
export type YoutubeVideosQueryHookResult = ReturnType<typeof useYoutubeVideosQuery>;
export type YoutubeVideosLazyQueryHookResult = ReturnType<typeof useYoutubeVideosLazyQuery>;
export type YoutubeVideosQueryResult = Apollo.QueryResult<YoutubeVideosQuery, YoutubeVideosQueryVariables>;
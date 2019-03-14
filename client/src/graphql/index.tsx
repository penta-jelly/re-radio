/* tslint:disable */
export type Maybe<T> = T | null;

export interface UserWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<UserWhereInput[]>;

  id?: Maybe<string>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<string>;
  /** All values that are contained in given list. */
  id_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<string>;
  /** All values greater than the given value. */
  id_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<string>;
  /** All values containing the given string. */
  id_contains?: Maybe<string>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<string>;

  createdAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  createdAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  createdAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  createdAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  createdAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  createdAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  createdAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  createdAt_gte?: Maybe<DateTime>;

  updatedAt?: Maybe<DateTime>;
  /** All values that are not equal to given value. */
  updatedAt_not?: Maybe<DateTime>;
  /** All values that are contained in given list. */
  updatedAt_in?: Maybe<DateTime[]>;
  /** All values that are not contained in given list. */
  updatedAt_not_in?: Maybe<DateTime[]>;
  /** All values less than the given value. */
  updatedAt_lt?: Maybe<DateTime>;
  /** All values less than or equal the given value. */
  updatedAt_lte?: Maybe<DateTime>;
  /** All values greater than the given value. */
  updatedAt_gt?: Maybe<DateTime>;
  /** All values greater than or equal the given value. */
  updatedAt_gte?: Maybe<DateTime>;

  email?: Maybe<string>;
  /** All values that are not equal to given value. */
  email_not?: Maybe<string>;
  /** All values that are contained in given list. */
  email_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  email_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  email_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  email_lte?: Maybe<string>;
  /** All values greater than the given value. */
  email_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  email_gte?: Maybe<string>;
  /** All values containing the given string. */
  email_contains?: Maybe<string>;
  /** All values not containing the given string. */
  email_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  email_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  email_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  email_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  email_not_ends_with?: Maybe<string>;

  username?: Maybe<string>;
  /** All values that are not equal to given value. */
  username_not?: Maybe<string>;
  /** All values that are contained in given list. */
  username_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  username_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  username_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  username_lte?: Maybe<string>;
  /** All values greater than the given value. */
  username_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  username_gte?: Maybe<string>;
  /** All values containing the given string. */
  username_contains?: Maybe<string>;
  /** All values not containing the given string. */
  username_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  username_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  username_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  username_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  username_not_ends_with?: Maybe<string>;

  password?: Maybe<string>;
  /** All values that are not equal to given value. */
  password_not?: Maybe<string>;
  /** All values that are contained in given list. */
  password_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  password_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  password_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  password_lte?: Maybe<string>;
  /** All values greater than the given value. */
  password_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  password_gte?: Maybe<string>;
  /** All values containing the given string. */
  password_contains?: Maybe<string>;
  /** All values not containing the given string. */
  password_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  password_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  password_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  password_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  password_not_ends_with?: Maybe<string>;

  name?: Maybe<string>;
  /** All values that are not equal to given value. */
  name_not?: Maybe<string>;
  /** All values that are contained in given list. */
  name_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  name_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  name_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  name_lte?: Maybe<string>;
  /** All values greater than the given value. */
  name_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  name_gte?: Maybe<string>;
  /** All values containing the given string. */
  name_contains?: Maybe<string>;
  /** All values not containing the given string. */
  name_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  name_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  name_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  name_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  name_not_ends_with?: Maybe<string>;

  country?: Maybe<string>;
  /** All values that are not equal to given value. */
  country_not?: Maybe<string>;
  /** All values that are contained in given list. */
  country_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  country_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  country_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  country_lte?: Maybe<string>;
  /** All values greater than the given value. */
  country_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  country_gte?: Maybe<string>;
  /** All values containing the given string. */
  country_contains?: Maybe<string>;
  /** All values not containing the given string. */
  country_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  country_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  country_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  country_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  country_not_ends_with?: Maybe<string>;

  city?: Maybe<string>;
  /** All values that are not equal to given value. */
  city_not?: Maybe<string>;
  /** All values that are contained in given list. */
  city_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  city_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  city_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  city_lte?: Maybe<string>;
  /** All values greater than the given value. */
  city_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  city_gte?: Maybe<string>;
  /** All values containing the given string. */
  city_contains?: Maybe<string>;
  /** All values not containing the given string. */
  city_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  city_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  city_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  city_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  city_not_ends_with?: Maybe<string>;

  bio?: Maybe<string>;
  /** All values that are not equal to given value. */
  bio_not?: Maybe<string>;
  /** All values that are contained in given list. */
  bio_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  bio_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  bio_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  bio_lte?: Maybe<string>;
  /** All values greater than the given value. */
  bio_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  bio_gte?: Maybe<string>;
  /** All values containing the given string. */
  bio_contains?: Maybe<string>;
  /** All values not containing the given string. */
  bio_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  bio_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  bio_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  bio_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  bio_not_ends_with?: Maybe<string>;

  avatarUrl?: Maybe<string>;
  /** All values that are not equal to given value. */
  avatarUrl_not?: Maybe<string>;
  /** All values that are contained in given list. */
  avatarUrl_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  avatarUrl_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  avatarUrl_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  avatarUrl_lte?: Maybe<string>;
  /** All values greater than the given value. */
  avatarUrl_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  avatarUrl_gte?: Maybe<string>;
  /** All values containing the given string. */
  avatarUrl_contains?: Maybe<string>;
  /** All values not containing the given string. */
  avatarUrl_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  avatarUrl_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  avatarUrl_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  avatarUrl_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  avatarUrl_not_ends_with?: Maybe<string>;

  coverUrl?: Maybe<string>;
  /** All values that are not equal to given value. */
  coverUrl_not?: Maybe<string>;
  /** All values that are contained in given list. */
  coverUrl_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  coverUrl_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  coverUrl_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  coverUrl_lte?: Maybe<string>;
  /** All values greater than the given value. */
  coverUrl_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  coverUrl_gte?: Maybe<string>;
  /** All values containing the given string. */
  coverUrl_contains?: Maybe<string>;
  /** All values not containing the given string. */
  coverUrl_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  coverUrl_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  coverUrl_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  coverUrl_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  coverUrl_not_ends_with?: Maybe<string>;

  reputation?: Maybe<number>;
  /** All values that are not equal to given value. */
  reputation_not?: Maybe<number>;
  /** All values that are contained in given list. */
  reputation_in?: Maybe<number[]>;
  /** All values that are not contained in given list. */
  reputation_not_in?: Maybe<number[]>;
  /** All values less than the given value. */
  reputation_lt?: Maybe<number>;
  /** All values less than or equal the given value. */
  reputation_lte?: Maybe<number>;
  /** All values greater than the given value. */
  reputation_gt?: Maybe<number>;
  /** All values greater than or equal the given value. */
  reputation_gte?: Maybe<number>;

  facebookId?: Maybe<string>;
  /** All values that are not equal to given value. */
  facebookId_not?: Maybe<string>;
  /** All values that are contained in given list. */
  facebookId_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  facebookId_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  facebookId_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  facebookId_lte?: Maybe<string>;
  /** All values greater than the given value. */
  facebookId_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  facebookId_gte?: Maybe<string>;
  /** All values containing the given string. */
  facebookId_contains?: Maybe<string>;
  /** All values not containing the given string. */
  facebookId_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  facebookId_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  facebookId_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  facebookId_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  facebookId_not_ends_with?: Maybe<string>;

  googleId?: Maybe<string>;
  /** All values that are not equal to given value. */
  googleId_not?: Maybe<string>;
  /** All values that are contained in given list. */
  googleId_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  googleId_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  googleId_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  googleId_lte?: Maybe<string>;
  /** All values greater than the given value. */
  googleId_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  googleId_gte?: Maybe<string>;
  /** All values containing the given string. */
  googleId_contains?: Maybe<string>;
  /** All values not containing the given string. */
  googleId_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  googleId_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  googleId_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  googleId_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  googleId_not_ends_with?: Maybe<string>;

  roles_some?: Maybe<UserRoleWhereInput>;
}

export interface UserRoleWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<UserRoleWhereInput[]>;

  id?: Maybe<string>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<string>;
  /** All values that are contained in given list. */
  id_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<string>;
  /** All values greater than the given value. */
  id_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<string>;
  /** All values containing the given string. */
  id_contains?: Maybe<string>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<string>;

  role?: Maybe<UserRoleEnum>;
  /** All values that are not equal to given value. */
  role_not?: Maybe<UserRoleEnum>;
  /** All values that are contained in given list. */
  role_in?: Maybe<UserRoleEnum[]>;
  /** All values that are not contained in given list. */
  role_not_in?: Maybe<UserRoleEnum[]>;

  stationId?: Maybe<string>;
  /** All values that are not equal to given value. */
  stationId_not?: Maybe<string>;
  /** All values that are contained in given list. */
  stationId_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  stationId_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  stationId_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  stationId_lte?: Maybe<string>;
  /** All values greater than the given value. */
  stationId_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  stationId_gte?: Maybe<string>;
  /** All values containing the given string. */
  stationId_contains?: Maybe<string>;
  /** All values not containing the given string. */
  stationId_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  stationId_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  stationId_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  stationId_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  stationId_not_ends_with?: Maybe<string>;

  user?: Maybe<UserWhereInput>;
}

export interface UserWhereUniqueInput {
  id?: Maybe<string>;

  email?: Maybe<string>;

  username?: Maybe<string>;
}

export interface UserRoleWhereUniqueInput {
  id?: Maybe<string>;
}

export interface UserCreateInput {
  email: string;

  username?: Maybe<string>;

  password: string;

  name?: Maybe<string>;

  country?: Maybe<string>;

  city?: Maybe<string>;

  bio?: Maybe<string>;

  avatarUrl?: Maybe<string>;

  coverUrl?: Maybe<string>;

  reputation?: Maybe<number>;

  facebookId?: Maybe<string>;

  googleId?: Maybe<string>;

  roles?: Maybe<UserRoleCreateManyWithoutUserInput>;
}

export interface UserRoleCreateManyWithoutUserInput {
  create?: Maybe<UserRoleCreateWithoutUserInput[]>;

  connect?: Maybe<UserRoleWhereUniqueInput[]>;
}

export interface UserRoleCreateWithoutUserInput {
  role: UserRoleEnum;

  stationId?: Maybe<string>;
}

export interface UserRoleCreateInput {
  role: UserRoleEnum;

  stationId?: Maybe<string>;

  user: UserCreateOneWithoutRolesInput;
}

export interface UserCreateOneWithoutRolesInput {
  create?: Maybe<UserCreateWithoutRolesInput>;

  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserCreateWithoutRolesInput {
  email: string;

  username?: Maybe<string>;

  password: string;

  name?: Maybe<string>;

  country?: Maybe<string>;

  city?: Maybe<string>;

  bio?: Maybe<string>;

  avatarUrl?: Maybe<string>;

  coverUrl?: Maybe<string>;

  reputation?: Maybe<number>;

  facebookId?: Maybe<string>;

  googleId?: Maybe<string>;
}

export interface UserUpdateInput {
  email?: Maybe<string>;

  username?: Maybe<string>;

  password?: Maybe<string>;

  name?: Maybe<string>;

  country?: Maybe<string>;

  city?: Maybe<string>;

  bio?: Maybe<string>;

  avatarUrl?: Maybe<string>;

  coverUrl?: Maybe<string>;

  reputation?: Maybe<number>;

  facebookId?: Maybe<string>;

  googleId?: Maybe<string>;

  roles?: Maybe<UserRoleUpdateManyWithoutUserInput>;
}

export interface UserRoleUpdateManyWithoutUserInput {
  create?: Maybe<UserRoleCreateWithoutUserInput[]>;

  connect?: Maybe<UserRoleWhereUniqueInput[]>;

  set?: Maybe<UserRoleWhereUniqueInput[]>;

  disconnect?: Maybe<UserRoleWhereUniqueInput[]>;

  delete?: Maybe<UserRoleWhereUniqueInput[]>;

  update?: Maybe<UserRoleUpdateWithWhereUniqueWithoutUserInput[]>;

  updateMany?: Maybe<UserRoleUpdateManyWithWhereNestedInput[]>;

  deleteMany?: Maybe<UserRoleScalarWhereInput[]>;

  upsert?: Maybe<UserRoleUpsertWithWhereUniqueWithoutUserInput[]>;
}

export interface UserRoleUpdateWithWhereUniqueWithoutUserInput {
  where: UserRoleWhereUniqueInput;

  data: UserRoleUpdateWithoutUserDataInput;
}

export interface UserRoleUpdateWithoutUserDataInput {
  role?: Maybe<UserRoleEnum>;

  stationId?: Maybe<string>;
}

export interface UserRoleUpdateManyWithWhereNestedInput {
  where: UserRoleScalarWhereInput;

  data: UserRoleUpdateManyDataInput;
}

export interface UserRoleScalarWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<UserRoleScalarWhereInput[]>;
  /** Logical OR on all given filters. */
  OR?: Maybe<UserRoleScalarWhereInput[]>;
  /** Logical NOT on all given filters combined by AND. */
  NOT?: Maybe<UserRoleScalarWhereInput[]>;

  id?: Maybe<string>;
  /** All values that are not equal to given value. */
  id_not?: Maybe<string>;
  /** All values that are contained in given list. */
  id_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  id_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  id_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  id_lte?: Maybe<string>;
  /** All values greater than the given value. */
  id_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  id_gte?: Maybe<string>;
  /** All values containing the given string. */
  id_contains?: Maybe<string>;
  /** All values not containing the given string. */
  id_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  id_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  id_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  id_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  id_not_ends_with?: Maybe<string>;

  role?: Maybe<UserRoleEnum>;
  /** All values that are not equal to given value. */
  role_not?: Maybe<UserRoleEnum>;
  /** All values that are contained in given list. */
  role_in?: Maybe<UserRoleEnum[]>;
  /** All values that are not contained in given list. */
  role_not_in?: Maybe<UserRoleEnum[]>;

  stationId?: Maybe<string>;
  /** All values that are not equal to given value. */
  stationId_not?: Maybe<string>;
  /** All values that are contained in given list. */
  stationId_in?: Maybe<string[]>;
  /** All values that are not contained in given list. */
  stationId_not_in?: Maybe<string[]>;
  /** All values less than the given value. */
  stationId_lt?: Maybe<string>;
  /** All values less than or equal the given value. */
  stationId_lte?: Maybe<string>;
  /** All values greater than the given value. */
  stationId_gt?: Maybe<string>;
  /** All values greater than or equal the given value. */
  stationId_gte?: Maybe<string>;
  /** All values containing the given string. */
  stationId_contains?: Maybe<string>;
  /** All values not containing the given string. */
  stationId_not_contains?: Maybe<string>;
  /** All values starting with the given string. */
  stationId_starts_with?: Maybe<string>;
  /** All values not starting with the given string. */
  stationId_not_starts_with?: Maybe<string>;
  /** All values ending with the given string. */
  stationId_ends_with?: Maybe<string>;
  /** All values not ending with the given string. */
  stationId_not_ends_with?: Maybe<string>;
}

export interface UserRoleUpdateManyDataInput {
  role?: Maybe<UserRoleEnum>;

  stationId?: Maybe<string>;
}

export interface UserRoleUpsertWithWhereUniqueWithoutUserInput {
  where: UserRoleWhereUniqueInput;

  update: UserRoleUpdateWithoutUserDataInput;

  create: UserRoleCreateWithoutUserInput;
}

export interface UserRoleUpdateInput {
  role?: Maybe<UserRoleEnum>;

  stationId?: Maybe<string>;

  user?: Maybe<UserUpdateOneRequiredWithoutRolesInput>;
}

export interface UserUpdateOneRequiredWithoutRolesInput {
  create?: Maybe<UserCreateWithoutRolesInput>;

  connect?: Maybe<UserWhereUniqueInput>;

  update?: Maybe<UserUpdateWithoutRolesDataInput>;

  upsert?: Maybe<UserUpsertWithoutRolesInput>;
}

export interface UserUpdateWithoutRolesDataInput {
  email?: Maybe<string>;

  username?: Maybe<string>;

  password?: Maybe<string>;

  name?: Maybe<string>;

  country?: Maybe<string>;

  city?: Maybe<string>;

  bio?: Maybe<string>;

  avatarUrl?: Maybe<string>;

  coverUrl?: Maybe<string>;

  reputation?: Maybe<number>;

  facebookId?: Maybe<string>;

  googleId?: Maybe<string>;
}

export interface UserUpsertWithoutRolesInput {
  update: UserUpdateWithoutRolesDataInput;

  create: UserCreateWithoutRolesInput;
}

export interface UserUpdateManyMutationInput {
  email?: Maybe<string>;

  username?: Maybe<string>;

  password?: Maybe<string>;

  name?: Maybe<string>;

  country?: Maybe<string>;

  city?: Maybe<string>;

  bio?: Maybe<string>;

  avatarUrl?: Maybe<string>;

  coverUrl?: Maybe<string>;

  reputation?: Maybe<number>;

  facebookId?: Maybe<string>;

  googleId?: Maybe<string>;
}

export interface UserRoleUpdateManyMutationInput {
  role?: Maybe<UserRoleEnum>;

  stationId?: Maybe<string>;
}

export interface LoginInput {
  username?: Maybe<string>;

  email?: Maybe<string>;

  password: string;
}

export interface RegisterInput {
  username?: Maybe<string>;

  email: string;

  password: string;
}

export interface UserSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<UserSubscriptionWhereInput[]>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<MutationType[]>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<string>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<string[]>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<string[]>;

  node?: Maybe<UserWhereInput>;
}

export interface UserRoleSubscriptionWhereInput {
  /** Logical AND on all given filters. */
  AND?: Maybe<UserRoleSubscriptionWhereInput[]>;
  /** The subscription event gets dispatched when it's listed in mutation_in */
  mutation_in?: Maybe<MutationType[]>;
  /** The subscription event gets only dispatched when one of the updated fields names is included in this list */
  updatedFields_contains?: Maybe<string>;
  /** The subscription event gets only dispatched when all of the field names included in this list have been updated */
  updatedFields_contains_every?: Maybe<string[]>;
  /** The subscription event gets only dispatched when some of the field names included in this list have been updated */
  updatedFields_contains_some?: Maybe<string[]>;

  node?: Maybe<UserRoleWhereInput>;
}

export enum UserRoleEnum {
  Admin = 'ADMIN',
  StationOwner = 'STATION_OWNER',
}

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

export enum UserRoleOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  RoleAsc = 'role_ASC',
  RoleDesc = 'role_DESC',
  StationIdAsc = 'stationId_ASC',
  StationIdDesc = 'stationId_DESC',
}

export enum MutationType {
  Created = 'CREATED',
  Updated = 'UPDATED',
  Deleted = 'DELETED',
}

export type DateTime = any;

/** The `Long` scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
export type Long = any;

// ====================================================
// Documents
// ====================================================

export type RegisterVariables = {
  data: RegisterInput;
};

export type RegisterMutation = {
  __typename?: 'Mutation';

  register: RegisterRegister;
};

export type RegisterRegister = {
  __typename?: 'LoginOrRegisterReturnType';

  token: Maybe<string>;
};

import gql from 'graphql-tag';
import * as React from 'react';
import * as ReactApollo from 'react-apollo';

// ====================================================
// Components
// ====================================================

export const RegisterDocument = gql`
  mutation Register($data: RegisterInput!) {
    register(data: $data) {
      token
    }
  }
`;
export class RegisterComponent extends React.Component<
  Partial<ReactApollo.MutationProps<RegisterMutation, RegisterVariables>>
> {
  render() {
    return (
      <ReactApollo.Mutation<RegisterMutation, RegisterVariables>
        mutation={RegisterDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type RegisterProps<TChildProps = any> = Partial<ReactApollo.MutateProps<RegisterMutation, RegisterVariables>> &
  TChildProps;
export type RegisterMutationFn = ReactApollo.MutationFn<RegisterMutation, RegisterVariables>;
export function RegisterHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<TProps, RegisterMutation, RegisterVariables, RegisterProps<TChildProps>>
    | undefined,
) {
  return ReactApollo.graphql<TProps, RegisterMutation, RegisterVariables, RegisterProps<TChildProps>>(
    RegisterDocument,
    operationOptions,
  );
}

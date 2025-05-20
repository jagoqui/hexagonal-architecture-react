import type { ExtendedServices } from '../../../shared/domain/schemas/services.schema';
import type { UserWithPassword, User } from '../schemas/user.schema';

export interface FetchUserCreateBodyService {
  body: UserWithPassword;
}

export type FetchUserCreateService = (
  args: FetchUserCreateBodyService
) => Promise<User>;

export type FetchUserGet = (args: Pick<User, 'id'>) => Promise<User>;

export type FetchUserUpdate = (
  args: Pick<User, 'id'> & FetchUserCreateBodyService
) => Promise<User>;

export type FetchUserDelete = (args: Pick<User, 'id'>) => Promise<User>;

export type FetchUsersList = () => Promise<Array<User>>;

export interface FetchUsersServices extends ExtendedServices{
  fetchUserCreateService: FetchUserCreateService;
  fetchUserGetService: FetchUserGet;
  fetchUserUpdateService: FetchUserUpdate;
  fetchUserDeleteService: FetchUserDelete;
  fetchUsersListService: FetchUsersList;
}

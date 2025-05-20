
import { ServicesProvider } from '../../../shared/presentation/contexts/services/sevicesContext';
import type { FetchUsersServices } from '../../domain/services/user.services';
import { fetchUserCreateRequest } from '../requests/userCreate/userCreate.request';
import { fetchUserGetRequest } from '../requests/useGet/userGet.request';
import { fetchUserUpdateRequest } from '../requests/userUpdate/userUpdate.request';
import { fetchUserDeleteRequest } from '../requests/userDelete/userDelete.request';
import { fetchUsersListRequest } from '../requests/usersLists/usersLists.request';
import type { RouteObject } from 'react-router';
import { Users } from '../../presentation/containers/Users/Users.container';

export const usersRouter: RouteObject = {
	element: (
		<ServicesProvider<FetchUsersServices>
					services={{
						fetchUserCreateService: fetchUserCreateRequest,
                        fetchUserGetService: fetchUserGetRequest,
                        fetchUserUpdateService: fetchUserUpdateRequest,
                        fetchUserDeleteService: fetchUserDeleteRequest,
                        fetchUsersListService: fetchUsersListRequest
					}}
				>
					<Users/>
				</ServicesProvider>
	),
	index: true,
};

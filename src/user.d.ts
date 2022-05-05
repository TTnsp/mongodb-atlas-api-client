import {KeyValuePairDocumentArray, AtlasResultsResponse, AtlasClientOptions, AtlasError} from ".";

// UserClient
export type Username = string;
export interface GetUserResponse {
    databaseName: string;
    deleteAfterDate: string;
    labels: KeyValuePairDocumentArray;
    ldapAuthType: string;
    x509Type: string;
    groupId: string;
    roles: UserRoleConfig[];
    scopes: UserScopeConfig[];
    username: string;
    awsIAMType: string;
}
export type GetAllUsersResponse = AtlasResultsResponse<GetUserResponse>;
export interface CreateUserRequest {
    databaseName: string;
    deleteAfterDate?: string;
    labels?: KeyValuePairDocumentArray;
    ldapAuthType?: string;
    x509Type?: string;
    groupId: string;
    roles: UserRoleConfig[];
    scopes?: UserScopeConfig[];
    username: string;
}
export type CreateUserResponse = GetUserResponse;
export interface UpdateUserRequest {
    deleteAfterDate?: string;
    labels?: KeyValuePairDocumentArray;
    roles: UserRoleConfig[];
    scopes?: UserScopeConfig[];
    password?: string;
}
export type UpdateUserResponse = GetUserResponse;
export interface UserRoleConfig {
    collectionName?: string;
    databaseName?: string;
    roleName: string;
}
export interface UserScopeConfig {
    name: string;
    type: string;
}


export interface User {
    get(username: Username, options?: AtlasClientOptions): Promise<GetUserResponse | AtlasError>;
    getAll(options?: AtlasClientOptions): Promise<GetAllUsersResponse | AtlasError>;
    delete(username: Username, options?: AtlasClientOptions): Promise<void | AtlasError>;
    create(user: CreateUserRequest, options?: AtlasClientOptions): Promise<CreateUserResponse | AtlasError>;
    update(username: Username, user: UpdateUserRequest, options?: AtlasClientOptions): Promise<UpdateUserResponse | AtlasError>;
}

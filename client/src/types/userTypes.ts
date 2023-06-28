export type UserType = {
    id: number;
    name: string;
    email: string;
};


export type FetchingUserType = {
    status: 'pending';
}

export type FetchedUserType = {
    status: 'success';
    data: UserType;
}

export type FailedUserType = {
    status: 'guest';
};

export type UserSingUpType = {
    name: string;
    email: string;
    password: string;
};

export type UserSingInType = Omit<UserSingUpType, 'name'>;

export type UserStateType = FetchingUserType | FetchedUserType | FailedUserType;
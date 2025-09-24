export type User = {
    // 콤마, 세미콜론 혼용 가능, 안써도 되긴 함
    // ? : 있어도 되고 없어도 되는 속성, 전달하지 않으면 undefined(default 아님)
    id?: number,
    name: string,
    email: string,
    profileImage?: string,
    isActive?: boolean,
}

export type GreetingProps = {
    user: User,
    age?: number,
}

export interface LoginFormValues{
    email: string,
    password: string,
}
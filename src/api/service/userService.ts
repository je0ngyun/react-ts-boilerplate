export interface UserService {
  getUserInfo(): Promise<LoginUser>
}

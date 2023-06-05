export default interface LoginContext {
  isLogged: boolean;
  login: (token: string) => void;
  logout: () => void;
};
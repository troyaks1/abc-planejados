export default interface LoginContextI {
  isLogged: boolean;
  login: (token: string) => void;
  logout: () => void;
};
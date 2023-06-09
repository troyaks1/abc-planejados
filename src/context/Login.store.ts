import LoginContext from '@/interfaces/frontend/LoginAuth.context'
import { proxy } from 'valtio'

const LoginContext = proxy<LoginContext>({
  isLogged: false,
  login: () => {},
  logout: () => {}
});

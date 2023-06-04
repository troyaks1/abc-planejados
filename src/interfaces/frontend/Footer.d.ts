import LoginContextI from "./LoginAuth.context"

export default interface Footer {
  style: {
    color: Color
  }
  action: {
    auth: LoginContextI
  }
}
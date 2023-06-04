import LoginContextI from "./LoginAuth.context"

export default interface Header {
  style: {
    color: Color
  }
  action: {
    auth: LoginContextI
  }
}
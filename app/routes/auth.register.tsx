import {redirect} from "react-router";

export const action = async () => {
  console.log("register")

  return redirect("/login")
}

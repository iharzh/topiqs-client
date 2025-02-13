import {redirect} from "react-router";
import {login} from "~/services/api/auth/login";

export const action = async () => {

  const result = await login('admin@topiqs.com', 'password')

  if (result) {
    console.log('Successfully logged in', result)

    return redirect("/")
  }

  return redirect('/login')
}

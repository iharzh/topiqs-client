export const login = async (email: string, password: string) => {
  try {

    const resp = await fetch(
      'http://localhost:3000/auth/login',
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          email,
          password
        })
      }
    );

    if (resp.status !== 200) {
      return;
    }

    return await resp.json();
  } catch(error) {
    console.error(error);
  }
}

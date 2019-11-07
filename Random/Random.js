let character = "c";
let timesToRepeat = 5;

const onSubmit = e => {
  e.preventDefault();
  const user = {
    email: this.state.credentials.email,
    password: this.state.credentials.password
  };
  if (
    this.state.credentials.password === this.state.credentials.passwordCheck
  ) {
    if (this.state.credentials.password.length > 5) {
      console.log("password", this.state.credentials.password);
      function loginUser({ email, password }) {
        axios.defaults.withCredentials = true;
        const request = axios
          .post(
            `${"(https://infinite-meadow-87721.herokuapp.com)"}/,auth/register`,
            {
              email,
              password,
              withCredentials: true,
              headers: { crossDomain: true, "Content-Type": "application/json" }
            }
          )
          .then(response => response.data);
        console.log("DATA", response.data);
        return {
          type: "USER_LOGIN",
          payload: request
        };
      }
    }
  }
};

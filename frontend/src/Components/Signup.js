import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Signup() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: { Username: "", Email: "", Password: "" },
    onSubmit: (values) => {
      axios
        .post(
          `http://localhost:3001/signup`,
          {
            Username: values.Username,
            Email: values.Email,
            Password: values.Password,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: localStorage.getItem("User"),
            },
          }
        )
        .then((res) => console.log(res.data));
      navigate("/signin");
    },
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <ul></ul>
        <div class="row">
          <div class="col-6 offset-3">
            <input
              type="text"
              class="form-control mt-1"
              value={formik.values.Username}
              name="Username"
              placeholder="Username"
              onChange={formik.handleChange}
            />
          </div>
          <div class="col-6 offset-3">
            <input
              type="email"
              class="form-control mt-1"
              value={formik.values.Email}
              name="Email"
              placeholder="Email"
              onChange={formik.handleChange}
            />
          </div>
          <div class="col-6 offset-3">
            <input
              type="password"
              class="form-control mt-1"
              name="Password"
              value={formik.values.Password}
              placeholder="Password"
              onChange={formik.handleChange}
            />
          </div>
          <div class="col-6 offset-3">
            <input
              type="submit"
              class="form-control mt-1 btn-info"
              value="submit"
            />
          </div>
        </div>
      </form>
    </>
  );
}
export default Signup;

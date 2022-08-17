import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Signin() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: { Username: "", Password: "" },
    onSubmit: (values) => {
      axios
        .post(`http://localhost:3001/signin`, {
          Username: values.Username,
          Password: values.Password,
        })
        .then((res) => {
          localStorage.setItem("User", res.data);
          navigate("/userdata");
        });
    },
  });
  return (
    <>
      <form class="form mt-5" onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="col-6 offset-3">
            <input
              type="text"
              className="form-control mt-1"
              name="Username"
              value={formik.values.Username}
              placeholder="Username:"
              onChange={formik.handleChange}
            />
          </div>
          <div className="col-6 offset-3">
            <input
              type="password"
              className="form-control mt-1"
              name="Password"
              value={formik.values.Password}
              placeholder="Password:"
              onChange={formik.handleChange}
            />
          </div>
          <div className="col-6 offset-3">
            <input
              type="submit"
              className="form-control mt-1 btn-success"
              value="Login"
            />
          </div>
        </div>
      </form>
    </>
  );
}
export default Signin;

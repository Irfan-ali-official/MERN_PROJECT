import { useFormik } from "formik";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Update() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { Username: "N", Email: "N", Password: "N" },
    onSubmit: (values) => {
      axios
        .post(
          `http://localhost:3001/update/${id}`,
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
  useEffect(() => {
    axios
      .get(`http://localhost:3001/find/${id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("User"),
        },
      })
      .then((res) => setData(res.data));
    setCount(count + 1);
  }, [id]);
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div class="row mt-5">
          <div class="col-6 offset-3">
            <input
              type="text"
              class="form-control"
              name="Username"
              value={
                formik.values.Username !== "N"
                  ? formik.values.Username
                  : data.Username
              }
              placeholder="Username"
              onChange={formik.handleChange}
            />
          </div>
          <div class="col-6 offset-3">
            <input
              type="email"
              class="form-control"
              name="Email"
              value={
                formik.values.Email !== "N" ? formik.values.Email : data.Email
              }
              placeholder="Email"
              onChange={formik.handleChange}
            />
          </div>
          <div class="col-6 offset-3">
            <input
              type="password"
              class="form-control"
              name="Password"
              placeholder="Password"
              onChange={formik.handleChange}
            />
          </div>
          <div class="col-6 offset-3">
            <input type="submit" class="form-control btn-info" value="submit" />
          </div>
        </div>
      </form>
    </>
  );
}
export default Update;

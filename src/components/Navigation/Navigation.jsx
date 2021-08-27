import { NavLink } from "react-router-dom";
import { getLoggedIn } from "../../redux/auth/auth-selectors";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "../../redux/auth/auth-operations";
import Button from "@material-ui/core/Button";

const styles = {
  container: {
    borderRadius: "10px",
    backgroundColor: "rgba(0, 170, 238, 0.8)",
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 30px",
    marginBottom: "30px",
  },
  link: {
    textDecoration: "none",
    display: "inline-block",
    marginRight: "20px",
  },
};

function Navigation() {
  const isLoggedIn = useSelector(getLoggedIn);

  const dispatch = useDispatch();

  return (
    <header style={styles.container}>
      <div>
        <NavLink style={styles.link} to="/">
          <Button variant="contained" color="primary">
            Главная
          </Button>
        </NavLink>

        {isLoggedIn && (
          <NavLink style={styles.link} to="/contacts">
            <Button variant="contained" color="primary">
              Контакты
            </Button>
          </NavLink>
        )}
      </div>

      {isLoggedIn ? (
        <Button
          onClick={() => dispatch(logOut())}
          variant="contained"
          color="primary"
        >
          Logout
        </Button>
      ) : (
        <div>
          <NavLink style={styles.link} to="/login">
            <Button variant="contained" color="primary">
              Логин
            </Button>
          </NavLink>

          <NavLink style={styles.link} to="/register">
            <Button variant="contained" color="primary">
              Регистрация
            </Button>
          </NavLink>
        </div>
      )}
    </header>
  );
}

export default Navigation;

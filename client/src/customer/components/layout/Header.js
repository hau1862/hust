import { useContext } from "react";
import { Link } from "react-router-dom";
import headerStyle from "../../styles/layout/Header.module.css";
import logoImage from "../../images/logo.png";
import { serverHost } from "../../data/constants";
import { AppContext } from "../../App";

export default function Header() {
  const { account } = useContext(AppContext);
  const handleSubmitSearchForm = async function (event) {
    const searchForm = event.target;
    const content = searchForm.content.value;

    if (content) {
      const apiUrl = serverHost + "/api/products/search";
      console.log(apiUrl);
    }

    searchForm.reset();
  };
  const handleLogout = async function () {

  };

  return (
    <div className={headerStyle.header}>
      <Link to="/" className={headerStyle.logoLink}>
        <img src={logoImage} alt="logo" className={headerStyle.logoImage} />
      </Link>
      <form className={headerStyle.searchForm} onSubmit={handleSubmitSearchForm}>
        <input type="text" className={headerStyle.searchInput} name="content" placeholder="Enter content to search products" />
        <input type="submit" value="Search" className={headerStyle.searchSubmit} />
      </form>
      <div className={headerStyle.shortcutList}>
        <Link to="/" className={headerStyle.shortcutItem}>item</Link>
        <Link to="/" className={headerStyle.shortcutItem}>item</Link>
        <Link to="/" className={headerStyle.shortcutItem}>item</Link>
        {account ?
          <Link to="/" className={headerStyle.shortcutItem} onClick={handleLogout}>Logout</Link> :
          <Link to="/accounts/login" className={headerStyle.shortcutItem}>Login</Link>
        }
      </div>
    </div>
  );
}

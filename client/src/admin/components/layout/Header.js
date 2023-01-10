import headerStyle from "../../styles/layout/Header.module.css";

export default function Header() {
  const handleSubmitSearchForm = function (event) {};
  const imageSource =
    "https://salt.tikicdn.com/ts/upload/e4/49/6c/270be9859abd5f5ec5071da65fab0a94.png";
  return (
    <div className={headerStyle.header}>
      <div className={headerStyle.logoContainer}>
        <img src={imageSource} alt="logo" className={headerStyle.logoImage} />
      </div>
      <div className={headerStyle.searchContainer}>
        <form
          className={headerStyle.searchForm}
          onSubmit={handleSubmitSearchForm}
        >
          <input
            type="text"
            className={headerStyle.searchInput}
            placeholder="Enter content to search products"
          />
          <input
            type="submit"
            value="Search"
            className={headerStyle.searchSubmit}
          />
        </form>
      </div>
      <div className={headerStyle.shortcutContainer}>
        <div className={headerStyle.shortcutItem}>item</div>
        <div className={headerStyle.shortcutItem}>item</div>
        <div className={headerStyle.shortcutItem}>item</div>
        <div className={headerStyle.shortcutItem}>item</div>
      </div>
    </div>
  );
}

import "./DarkModeSwitch.css";

export default function DarkModeSwitch() {
  function setDarkMode() {
    document.querySelector("body").setAttribute("data-theme", "dark");
  }
  function setLightMode() {
    document.querySelector("body").setAttribute("data-theme", "light");
  }

  function toggleTheme(e) {
    if (e.target.checked) {
      setLightMode();
    } else {
      setDarkMode();
    }
  }

  setDarkMode();
  
  return (
    <div>
      <label id="switch" class="switch">
        <input type="checkbox" onChange={toggleTheme} id="slider" />
        <span class="slider round"></span>
      </label>
    </div>
  );
}

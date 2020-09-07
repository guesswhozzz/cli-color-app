import React, { useState } from "react";
import "./rightmenu.scss";
const Menu = () => {
  return (
    <>
      <section class="terminal-options">
        <div class="terminal-select">init</div>
        <div class="terminal-shell">
          <span class="terminal-shell__title">Shell:</span>
          <span class="terminal-shell__name">bash</span>
        </div>
        <div class="terminal-color">
          <div class="term-color-line">
            <div class="term-color-line-dark">
              <div id="black" class="term-color-line__item-d"></div>
              <div id="red" class="term-color-line__item-d"></div>
              <div id="green" class="term-color-line__item-d"></div>
              <div id="yellow" class="term-color-line__item-d"></div>
              <div id="blue" class="term-color-line__item-d"></div>
              <div id="magenta" class="term-color-line__item-d"></div>
              <div id="cyan" class="term-color-line__item-d"></div>
              <div id="white" class="term-color-line__item-d"></div>
            </div>
            <div class="term-color-line-light">
              <div id="black" class="term-color-line__item-l"></div>
              <div id="red" class="term-color-line__item-l"></div>
              <div id="green" class="term-color-line__item-l"></div>
              <div id="yellow" class="term-color-line__item-l"></div>
              <div id="blue" class="term-color-line__item-l"></div>
              <div id="magenta" class="term-color-line__item-l"></div>
              <div id="cyan" class="term-color-line__item-l"></div>
              <div id="white" class="term-color-line__item-l"></div>
            </div>
          </div>
        </div>
        <div class="terminal-font">
          <div class="font--container">
            <div class="terminal-font__name">init</div>
            <div class="terminal-font__typeface">init</div>
            <div class="terminal-font__size">init</div>
          </div>
          <span class="font--select">[]</span>
        </div>
        <div class="terminal-options-disclaimer">
          <div class="terminal-options-disclaimer__title">
            <span>Disclaimer!</span>
            <span class="disclaimer--close">[x]</span>
          </div>
          <div class="terminal-options-disclaimer__text">
            All settings presented in this menu are decoration. For
            customization background, fonts, etc, open terminal application
            settings on your computer.
          </div>
        </div>
      </section>
    </>
  );
};

const RightNavMenu = () => {
  const [isOpen, openMenu] = useState(false);
  return (
    <div className="right-menu--relative">
      <nav className="right--menu">
        <div className="options-btn">
          <span
            onClick={() => {
              isOpen ? openMenu(false) : openMenu(true);
            }}
            className="options-btn__controll"
          >
            [i]
          </span>
          {isOpen && <Menu />}
        </div>
      </nav>
    </div>
  );
};

export default RightNavMenu;
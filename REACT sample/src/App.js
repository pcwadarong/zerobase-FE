"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./assets/css/tailwind.css");
var react_router_dom_1 = require("react-router-dom");
var Drawer_1 = require("./components/common/Drawer");
var router_1 = require("./router/router");
var App = function () {
    console.log("hello");
    return (<react_router_dom_1.BrowserRouter>
      <input type="checkbox" id="side-menu" className="drawer-toggle"/>
      <section className="drawer-content">
        {/* Nav를 렌더링 하세요 */}
        <section className="main pt-16">
          <router_1.default />
        </section>
        {/* Footer를 렌더링 하세요 */}
      </section>
      <Drawer_1.default />
    </react_router_dom_1.BrowserRouter>);
};
exports.default = App;

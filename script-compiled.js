"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function App() {
    return React.createElement(
        "div",
        null,
        React.createElement(AppHeader, null),
        React.createElement(
            "main",
            { className: "ui main text container" },
            React.createElement(ContactsList, null)
        )
    );
}

function AppHeader() {
    return React.createElement(
        "div",
        null,
        React.createElement(
            "header",
            { className: "ui menu" },
            React.createElement(
                "nav",
                { className: "ui container" },
                React.createElement(
                    "a",
                    { href: "#", className: "header item" },
                    React.createElement("img", { className: "logo", src: "https://typeofweb.com/wp-content/uploads/2017/08/cropped-typeofweb_logo-04-white-smaller-1-e1504359870362.png" }),
                    "Lista kontakt\xF3w"
                ),
                React.createElement(
                    "div",
                    { className: "header item" },
                    React.createElement(
                        "button",
                        { className: "ui button" },
                        "Dodaj"
                    )
                )
            )
        )
    );
}

function ContactsList() {
    return React.createElement(
        "ul",
        { className: "ui relaxed divided list selection" },
        React.createElement(ContactItem, {
            login: "typeofweb1",
            name: "Lena",
            department: "JavaScript Developer"
        }),
        React.createElement(ContactItem, {
            login: "typeofweb2",
            name: "Brian",
            department: "Human Resources"
        }),
        React.createElement(ContactItem, {
            login: "typeofweb3",
            name: "Rick",
            department: "QA"
        })
    );
}

var ContactItem = function (_React$Component) {
    _inherits(ContactItem, _React$Component);

    function ContactItem() {
        _classCallCheck(this, ContactItem);

        return _possibleConstructorReturn(this, (ContactItem.__proto__ || Object.getPrototypeOf(ContactItem)).apply(this, arguments));
    }

    _createClass(ContactItem, [{
        key: "render",
        value: function render() {
            var _props = this.props,
                login = _props.login,
                name = _props.name,
                department = _props.department;

            var imgUrl = "https://api.adorable.io/avatars/55/" + login + ".png";
            return React.createElement(
                "li",
                { className: "item" },
                React.createElement("img", { src: imgUrl, className: "ui mini rounded image" }),
                React.createElement(
                    "div",
                    { className: "content" },
                    React.createElement(
                        "h4",
                        { className: "header" },
                        name
                    ),
                    React.createElement(
                        "div",
                        { className: "description" },
                        department
                    )
                )
            );
        }
    }]);

    return ContactItem;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));

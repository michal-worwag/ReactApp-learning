function App(){
    return (
        <div>
            <AppHeader />
            <main className="ui main text container">
                <ContactsList />
            </main>
        </div>
    )
}

function AppHeader(){
    return (
        <div>
            <header className='ui menu'>
                <nav className="ui container">
                    <a href="#" className="header item">
                        <img className="logo" src="https://typeofweb.com/wp-content/uploads/2017/08/cropped-typeofweb_logo-04-white-smaller-1-e1504359870362.png" />
                    Lista kontaktów
                    </a>
                    <div className="header item">
                        <button className="ui button">Dodaj</button>
                    </div>
                </nav>
            </header>
        </div>
    )
}

function ContactsList(){
    return (
        <ul className="ui relaxed divided list selection">
            <ContactItem
                login="typeofweb1"
                name="Lena"
                department="JavaScript Developer"
            />
            <ContactItem
                login="typeofweb2"
                name="Brian"
                department="Human Resources"
            />
            <ContactItem
                login="typeofweb3"
                name="Rick"
                department="QA"
            />
        </ul>
    )
}

class ContactItem extends React.Component {
    render() {
        const {login, name, department} = this.props
        const imgUrl = `https://api.adorable.io/avatars/55/${login}.png`;
        return (
            <li className="item">
              <img src={imgUrl} className="ui mini rounded image" />
              <div className="content">
                <h4 className="header">{name}</h4>
                <div className="description">{department}</div>
              </div>
            </li>
          );
    }
}

  ReactDOM.render(<App />, document.getElementById('app'));
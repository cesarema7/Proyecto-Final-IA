import React from 'react';
import { observer } from 'mobx-react';

// Translation
import translate from '../translate/Translate';

//Juego
//import from '';

const Home = observer(class Home extends React.Component {
  render() {
    const { store, translation } = this.props;
    const { AppStore } = store;

    return (
      <main className="page">
        <div className="panel panel--ms panel--solo">
 
  

          <h1>{translation.heading}</h1>
          <p><h4>{translation.body}</h4></p>

          <button
            type="button"
            className="btn btn--medio"
            onClick={(e) => { e.preventDefault(); AppStore.showDialog(translation.clicked) }}
          >
            {translation.button}
          </button>

          <button
            type="button"
            className="btn btn--medio"
            onClick={(e) => { e.preventDefault(); AppStore.showDialog(translation.clicked2) }}
          >
            {translation.button2}
          </button>

          {/* <iframe src="juego/juego.html" height="300" width="400"></iframe> */}


        </div>
      </main>
    )
  }
})

export default translate('Home')(Home);

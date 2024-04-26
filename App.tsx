import React from 'react'
import {
  View,
  Text
} from 'react-native'
import {WebView} from 'react-native-webview'

const App = () =>{
    return (
        <WebView
          source={{html: '<iframe width="1000px" height="2000px" src="https://my.atlist.com/map/77e0891f-670a-413b-bff8-849aa27c3993?share=true" scrolling="yes"></iframe>'}}
          style={{marginTop: 20}}
        />
    )
}

export default App;
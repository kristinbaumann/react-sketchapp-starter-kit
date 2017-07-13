import React from 'react';
import { render, Artboard, Text, View, Image } from 'react-sketchapp';

const App = () => (
    <Artboard 
        name="App" 
        style={{ 
            top: 0,
            left: 0,
            height: 568,
            width: 320,
        }}>
        <View name="App-View" style={{ backgroundColor: '#f1f1f1', width: '100%', height: 568 }}>
            React Sketchapp Starter Kit
        </View>
    </Artboard>
)

export default (context) => {
    render(<App /> , context.document.currentPage())
}   
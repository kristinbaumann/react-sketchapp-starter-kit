import React from 'react';
import { render, Artboard, View, Image } from 'react-sketchapp';

const App = () => (
    <Artboard style={{height: 142, width: 583}}>
        <View style={{ backgroundColor: '#f1f1f1', borderColor: '#333', borderWidth: 5 }}>
            <Image source="https://goo.gl/uTKYht" style={{ height: 132 }}></Image>
        </View>
    </Artboard>
)

export default (context) => render(<App /> , context.document.currentPage())

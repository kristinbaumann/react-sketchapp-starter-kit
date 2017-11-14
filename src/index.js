import React from 'react';
import { render, Artboard, View, Image } from 'react-sketchapp';

const App = () => (
    <Artboard>
        <View style={{ backgroundColor: '#f1f1f1', borderColor: '#333', borderWidth: 5 }}>
            <Image source="https://goo.gl/uTKYht" style={{ height: 132, width: 580 }} />
        </View>
    </Artboard>
)

export default (context) => render(<App /> , context.document.currentPage())


import React from 'react'
import { PaperProvider } from 'react-native-paper';
import Cad from './src/page/Cad/Cad'

export default function App() {
  return (
    <PaperProvider>
      <Cad/>
    </PaperProvider>
  )
}
import { useState } from 'react';
import Model from '../Components/Model';
import MyModel from '../assets/heart.glb';

export default function ModelPage() {
  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      <Model
        url={MyModel}
        width="100vw"
        height="100vh"
        autoFrame={true}
      />

    </div>
  );
}
"use client"
import React from 'react';
import { APIProvider, Map } from '@vis.gl/react-google-maps';
import MyMap from "@/app/components/MyMap"
import events from "@/app/components/Events"


export default function Home() {
  return ( 
  <div style={{ width: '100vw', height: '100vh' }}>
      <MyMap events={events}/>
    </div>
  );
}

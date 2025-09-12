import React from 'react'
import Hero from '../sections/Hero'
import PracticePreview from '../sections/PracticePreview'
import PeoplePreview from '../sections/PeoplePreview'
import ResourcesPreview from '../sections/ResourcesPreview'
import ImpactPreview from '../sections/ImpactPreview'
import Navbar from '../components/Navbar'

export default function Home(){
  return (
    <div className="">
        <Navbar />
      <Hero />
   {/*    <PracticePreview />
      <PeoplePreview />
      <ImpactPreview />
      <ResourcesPreview /> */}
    </div>
  )
}

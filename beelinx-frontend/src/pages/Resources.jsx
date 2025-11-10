import React from 'react'
import ResourceHero from '../components/resources/ResourceHero'
import NewsletterSection from '../components/resources/NewsletterSection'
import ResourceFinalCTA from '../components/resources/ResourceFinalCTA'
import ResourceHub from '../components/resources/ResourceCategory'


const Resources = () => {
  return (
    <div className='flex flex-col '>

        <ResourceHero />
        <ResourceHub/>
        <NewsletterSection/>
        <ResourceFinalCTA/>



    </div>
  )
}

export default Resources
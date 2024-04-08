import PersonalInfo from '../molecules/PersonalInfo'
import SocialOptions from '../molecules/SocialOptions'

export default function PresentationCard() {
  return (
    <main className='card-container'>
        <article className='card'>
          <PersonalInfo />
          <SocialOptions />
        </article>
    </main>
  )
}

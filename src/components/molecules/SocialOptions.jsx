import ButtonLikeListElem from '../atoms/ButtonLikeListElem'
import Link from '../atoms/Link'

const socialMedia = [
  {
    id: 0,
    link: 'https://github.com/',
    name: 'github'
  },
  {
    id: 1,
    link: '://www.frontendmentor.io/',
    name: 'frontendmentor'
  },
  {
    id: 2,
    link: 'https://github.com/',
    name: 'LinkedIn'
  },
  {
    id: 3,
    link: '://www.frontendmentor.io/',
    name: 'Twitter'
  },
  {
    id: 4,
    link: '://www.frontendmentor.io/',
    name: 'Instagram'
  },
]

export default function SocialOptions() {
  return (
    <ul className='social-container'>
      {socialMedia.map((social) => (
        <Link key={social.id} href={social.link}>
          <ButtonLikeListElem>
            {social.name}
          </ButtonLikeListElem>
        </Link>
      ))}
    </ul>
  )
}

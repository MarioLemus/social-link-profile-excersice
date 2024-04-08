import ImgRounded from '../atoms/ImgRounded'
import TitleH1 from '../atoms/TitleH1'
import Text from '../atoms/Text'
import avatar from '../../assets/assets/images/avatar-jessica.jpeg'

export default function PersonalInfo() {
  return (
    <section className='personal-info-container'>
      <picture>
        <ImgRounded size={'medium'} src={avatar}/>
      </picture>
      <div>
        <TitleH1 align="center">Jessica Randal</TitleH1>
        <Text color="green" align="center" type="semibold">London, United Kingdom</Text>
        <Text align="center">&quot;Front-end developers and avid reader&quot;</Text>
      </div>
    </section>
  )
}

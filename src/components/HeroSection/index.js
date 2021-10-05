import Video from '../../assets/vid/wave.mp4';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
} from './HeroElements';

const index = () => {
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoplay loop muted src={Video} type="video/mp4" />
      </HeroBg>
    </HeroContainer>
  );
};

export default index;

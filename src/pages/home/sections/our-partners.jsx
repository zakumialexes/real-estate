import { Stack, useMediaQuery} from '@mui/material'
import Wrapper from './wrapper'
import partner1 from '../../../assets/partners/1.png'
import partner2 from '../../../assets/partners/2.png'
import partner3 from '../../../assets/partners/3.png'
import partner4 from '../../../assets/partners/4.png'
import partner5 from '../../../assets/partners/5.png'
const Partner = () => {
    const title = "Our Partners"
    const content = "We only work with the best company around the world"
    const partners = [partner1, partner2, partner3, partner4, partner5]
    const smallScreen = useMediaQuery("(max-width: 450px)")
    return (
      <Wrapper title={title} content={content}>
            <Stack direction={smallScreen ? "column": "row"} gap={{xs: 5, md: 10, lg: 19 }} flexWrap="wrap" justifyContent="center" alignItems="center">
                {partners.map((partner, index) => <img src={partner} key={index} />)}
            </Stack>
      </Wrapper>
  )
}

export default Partner
import React from 'react'
import { Text, Wrapper } from '../../styled/StyledElements'
import { Button } from '../../styled/StyledElements'
import styled from 'styled-components'

const ButtonStyled = styled(Button)`
  margin-left: auto;
`
function CardHashtagsAndButton({ hashtags, price }) {
  return (
    <Wrapper justify="space-between" align="center" gap="15">
      <Text size="15">
        {hashtags.map((hashtag) => '#' + hashtag).join(' ')}
      </Text>
      <ButtonStyled padY="5" padX="15" size="20px">
        {price}
      </ButtonStyled>
    </Wrapper>
  )
}

export default CardHashtagsAndButton

import styled from "styled-components"

const Container = styled.div`
height: 30px;
background-color: teal;
color: white;
display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
    `

const Anouncement = () => {
  return (
    <Container>
        Kamu Belanja disini dijamin 90% ingin mengulanginya lagi
    </Container>
  )
}

export default Anouncement
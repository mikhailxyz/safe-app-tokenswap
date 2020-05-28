import * as React from "react"
import styled, { css } from "styled-components"
import Layout from "components/Layout"
import { appsSdk } from "gnosisAppsSdk"

const centerCSS = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const SAppContainer = styled.div<{ center: boolean }>`
  ${(p) => p.center && centerCSS}
`

const IndexPage = () => {
  const [safeInfo, setSafeInfo] = React.useState({})

  React.useEffect(() => {
    appsSdk.addListeners({ onSafeInfo: setSafeInfo })

    return () => {
      appsSdk.removeListeners()
    }
  })

  return (
    <Layout title="Uniswap Gnosis Safe App">
      <SAppContainer center={process.env.NODE_ENV === "development"}>
        <h1>Exchange</h1>
        <p>{JSON.stringify(safeInfo, null, 2)}</p>
      </SAppContainer>
    </Layout>
  )
}

export default IndexPage

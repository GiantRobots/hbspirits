import React from 'react'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`hbspirits`, `wine`, `vodka`, 'liquor', 'spirits']}
    />
    <h1
      style={{
        margin: 'auto',
        textAlign: 'center',
        marginTop: '15vh',
        fontSize: 60,
      }}
    >
      HB Spirits
    </h1>
    <Image />
  </Layout>
)

export default IndexPage

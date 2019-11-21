import React from 'react'

import Layout from '../components/layout'
import Image from '../components/image'

import SEO from '../components/seo'
import Logo from '../components/logo'

const monthDiff = (d1, d2) => {
  let months
  months = (d2.getFullYear() - d1.getFullYear()) * 12
  months -= d1.getMonth() + 1
  months += d2.getMonth()
  return months <= 0 ? 0 : months
}

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
      <Logo />
      HB Spirits
    </h1>
    <div
      style={{
        width: '60vw',
        padding: '7vw',
        margin: 'auto',
        textAlign: 'center',
        marginTop: 70,
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        fontFamily: 'helvetica',
        fontSize: 24,
      }}
    >
      Don't do business with us we won't pay you. <br />
      <br />
      We are currently over {monthDiff(new Date('01-01-2019'), new Date())}{' '}
      months overdue on a <strong>€40,000</strong> payment.
    </div>
    <Image />
  </Layout>
)

export default IndexPage

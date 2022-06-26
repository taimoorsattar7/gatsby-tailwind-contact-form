import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <div className="mb-6">
      <label htmlFor="email" className="block mb-2 text-sm text-gray-600">
        Email Address
      </label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="you@email.com"
        className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300"
      />
    </div>
  </Layout>
)

export default IndexPage

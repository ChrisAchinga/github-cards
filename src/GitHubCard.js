import React, { Component } from 'react'
import CardDetails from './CardDetails'

export default class GitHubCard extends Component {
  render() {
    const testData = [
      {
        name: 'Dan Abramov',
        avatar_url: 'https://avatars0.githubusercontent.com/u/810438?v=4',
        company: '@facebook',
      },
      {
        name: 'Sophie Alpert',
        avatar_url: 'https://avatars2.githubusercontent.com/u/6820?v=4',
        company: 'Humu',
      },
      {
        name: 'Sebastian Markbåge',
        avatar_url: 'https://avatars2.githubusercontent.com/u/63648?v=4',
        company: 'Facebook',
      },
    ]

    const profile = testData[0]
    return (
      <>
        {testData.map((profile) => {
          return <CardDetails avatar={profile.avatar_url} name={profile.name} company={profile.company} />
        })}
      </>
    )
  }
}

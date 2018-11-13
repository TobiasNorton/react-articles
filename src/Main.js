import React, { Component } from 'react'

import Article from './Article'
class Main extends Component {
  render() {
    let titles = [
      'We Are Hungry',
      'I Like Tacos',
      'Pigs Are Tasty',
      'Bacon is King',
      'La Primavera is the Best',
      'Feed Me',
      'Bacon Ipsum is Cool',
      'This is a Test',
      'React is Awesome'
    ]
    return (
      <main>
        {titles.map(string => (
          <Article title={string} />
        ))}

        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
      </main>
    )
  }
}

export default Main

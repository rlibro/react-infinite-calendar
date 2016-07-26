import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import moment from 'moment'
import InfiniteCalendar from './src/index'

var data = {
  '20160722': {
    photo: [{
      id: 'dslkjf',
      url: 'http://res.cloudinary.com/demo/image/upload/c_fill,h_50,w_50/sample.jpg',
      meta:{
        geo: {}
      }
    }],
    note: [{}]
  },
  '20160622': {
    photo: [{
      id: 'dslkjf',
      url: 'http://res.cloudinary.com/demo/image/upload/c_fill,h_50,w_50/sample.jpg',
      meta:{
        geo: {}
      }
    }],
    note: []
  }
}


render(<InfiniteCalendar
  width={(window.innerWidth <= 800) ? window.innerWidth : 800}
  height={window.innerHeight - 250 + 54}
  keyboardSupport
  min={moment('2010-01-01', 'YYYY-MM-DD')}
  minDate={moment('2010-01-01', 'YYYY-MM-DD')}
  max={new Date()}
  maxDate={new Date()}
  rowHeight={(window.innerWidth <= 500) ? 54:114}
  data={data}
  theme={{
    //selectionColor: 'rgb(146, 118, 255)',
    textColor: {
       default: '#333',
       active: '#fff'
    },
    //weekdayColor: 'rgb(146, 118, 255)',
    //headerColor: 'rgb(255, 255, 255)',
    // floatingNav: {
    //    background: 'rgba(81, 67, 138, 0.96)',
    //    color: '#FFF',
    //    chevron: '#FFA726'
    // }
  }}
 />,
  document.getElementById('root')
)

import React from 'react'

export default function OurTeam() {
  return (
    <div className='container'>
        <center>
            <p className='font40 extraBold ' style={{ paddingTop: 50 }}>OurTeam</p>
        </center>
        <div className='flexSpaceNull'>
          {ourTeam.map((item, id)=> (
            <div key={id}>
                <div className='card'>
                  <img 
                    src={item.img} 
                    alt= 'Ahmad_kabir' 
                    className= 'border'
                    style={{
                      width:230,
                      height: 220
                    }}
                  />
                  <div>
                    <p style={{textAlign: 'center'}} className='semiBold font18'> {item.name} </p>
                    <p style={{textAlign: 'center'}} className='font18'>{item.Details}</p>
                  </div>
                </div>
            </div>
          ))}
        </div>
    </div>
  )
}

const ourTeam = [
  {
    img: require('../../images/WhatsApp Image 2022-08-11 at 5.38.12 PM.jpeg').default,
    name: 'Ahmad Kabir',
    Details: 'Details'
  },{
    img: require('../../images/IMG-20221019-WA0044.jpg').default,
    name: 'Khalipha Kabir',
    Details: 'Details'
  },{
    img: require('../../images/IMG-20221019-WA0057.jpg').default,
    name: 'Halipha Nagudu',
    Details: 'Details'
  },{
    img: require('../../images/WhatsApp Image 2022-08-11 at 5.38.12 PM.jpeg').default,
    name: 'Abdussalam Kabir',
    Details: 'Details'
  },
]
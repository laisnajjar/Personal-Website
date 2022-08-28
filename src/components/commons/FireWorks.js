import { Fireworks } from '@fireworks-js/react'

export default function FireWorks() {
    
    return (
        <Fireworks
          options={{
            rocketsPoint: {
              min: 0,
              max: 100
            }
          }}
          style={{
            top: 100,
            left: -100,
            width: '100%',
            height: '10%',
            position: 'relative',
            background: 'white',
            hue: {
                min: 0,
                max: 1000
              },
              delay: {
                min: 15,
                max: 30
              },
              rocketsPoint: {
                min: 50,
                max: 50
              },
              lineWidth: {
                explosion: {
                  min: 1,
                  max: 10
                },
                trace: {
                  min: 1,
                  max: 2
                }
              },
              brightness: {
                min: 10,
                max: 10
              },
              decay: {
                min: 0.015,
                max: 0.03
              },
              mouse: {
                click: false,
                move: false,
                max: 1
              }
          }}

        />
      )
}

import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
    return (
        <Link to='/' className="logo">
            <svg height="50px" xmlns='http://www.w3.org/2000/svg' viewBox='0 0 192.319 183.533'>
                <defs>
                <linearGradient id='a' x1='90.851' y1='187.028' x2='187.103' y2='101.197'
                    gradientTransform='rotate(27.983 150.408 146.869)' gradientUnits='userSpaceOnUse'>
                    <stop offset='0' stopColor='#905e39' />
                    <stop offset='1' stopColor='#a0642f' />
                </linearGradient>
            </defs>
            <path d='M92.157,57.244C48.079,84.224,34.687,142.6,62.246,187.622s85.633,59.656,129.712,32.677'
                transform='translate(-47.918 -50.296)' fill='#bd8844' />
            <ellipse cx='141.608' cy='139.072' rx='62.458' ry='91.721' transform='rotate(-31.47 28.39 198.96)'
                stroke='#f4c996' strokeMiterlimit='10' strokeWidth='8' fill='url(#a)' />
            <path d='M196,57.244c44.079,26.979,57.47,85.351,29.911,130.378S140.275,247.278,96.2,220.3'
                transform='translate(-47.918 -50.296)' fill='#c8913f' />
            <ellipse cx='146.547' cy='139.072' rx='91.721' ry='62.458' transform='rotate(-58.53 77.704 156.664)'
                fill='#ce9c53' stroke='#ce9c53' strokeMiterlimit='10' strokeWidth='8' />
            </svg>
        </Link>
    )
}

export default Logo
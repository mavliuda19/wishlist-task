import React from 'react'
import styled from 'styled-components'
import { ReactComponent as HomeIcon } from '../../assets/icons/Home.svg'
import { ReactComponent as PlayIcon } from '../../assets/icons/play.svg'

const Header = () => {
	return (
		<Container>
			<StyledIcons>
				<HomeIcon className='home-icon' />
				<PlayIcon className='play-icon' />
				<p>Wishlist</p>
			</StyledIcons>
			<Title>Wishlist</Title>
			<p>158 products</p>
		</Container>
	)
}

export default Header

const Container = styled.div`
	width: 100%;
	> p {
		color: #999999;
	}
`
const StyledIcons = styled.div`
	display: flex;
	align-items: center;
	padding: 4px 0;
	.play-icon {
		margin: 0 8px 0 14px;
	}
	p {
		color: #999999;
	}
`
const Title = styled.h1`
	margin: 10px 0;
	font-weight: 700;
	font-size: 24px;
	line-height: 100%;
	color: #303031;
`

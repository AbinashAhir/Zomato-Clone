import React from 'react'
import Footer from '../components/Footer'
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                    <Footer.Column>
                        <Footer.Title>Company</Footer.Title>
                        <Footer.Link href="#">Who we are</Footer.Link>
                        <Footer.Link href="#">Blog</Footer.Link>
                        <Footer.Link href="#">Careers</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>For foodies</Footer.Title>
                        <Footer.Link href="#">Community</Footer.Link>
                        <Footer.Link href="#">Blogger</Footer.Link>
                        <Footer.Link href="#">Help</Footer.Link>
                        <Footer.Link href="#">Mobile apps</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>For resturant</Footer.Title>
                        <Footer.Link href="#">Add resturant</Footer.Link>
                        <Footer.Link href="#">Bussiness app</Footer.Link>
                        <Footer.Link href="#">Widgets</Footer.Link>
                        <Footer.Link href="#">Resturant</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>For you</Footer.Title>
                        <Footer.Link href="#">Privacy</Footer.Link>
                        <Footer.Link href="#">Term</Footer.Link>
                        <Footer.Link href="#">Security</Footer.Link>
                        <Footer.Link href="#">Sitemap</Footer.Link>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.Title>Social link</Footer.Title>
                        <Footer.Link href="#"><FacebookIcon /></Footer.Link>
                        <Footer.Link href="#"><YouTubeIcon /></Footer.Link>
                        <Footer.Link href="#"><InstagramIcon /></Footer.Link>
                        <Footer.Link href="#"><TwitterIcon /></Footer.Link>
                    </Footer.Column>
                </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}
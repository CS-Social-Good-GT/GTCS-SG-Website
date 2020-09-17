import styled from 'styled-components'
import React from "react"

const Styles = styled.section`
    background-color: white;
    margin: auto;
    -webkit-tap-highlight-color: transparent;
    font-size: 0.9rem;
    font-weight: 300;
    line-height: 1.8;
    color: #868e96;
    font-family: "Montserrat", Arial, sans-serif;
    color: black;
    box-sizing: inherit;
    position: relative;
    margin: auto;
    text-align: center;
    .hidden {
        display: none;
    }
    .container {
        margin-right: auto;
        margin-left: auto;
        padding-right: 10%;
        padding-left: 10%;
        padding-top: 7%;
        padding-bottom: 7%;
        max-width: 100vw;
    }

    .heading-border-top {
        font-weight: 300;
        position: relative;
        padding-top: 30px;
    }

    .heading-border-top:before {
        position: absolute;
        top: 0;
        height: 2px;
        width: 70px;
        content: "";
        background: #00e6e6;
        left: 47%;
    }
    .description {
        color: #adb5bd;
        padding-left: 25%;
        padding-right: 25%;
    }
    .row {
        display: flex;
    }
    .col-md-3 {
        @media (min-width: 760px) {
            -webkit-box-flex: 0;
            -webkit-flex: 0 0 25%;
            -ms-flex: 0 0 25%;
            flex: 0 0 25%;
            max-width: 25%;
        }
    }
    li {
        list-style: none;
    }
    .text-uppercase {
        color: #adb5bd;
    }
    a {
        color: #00e6e6;
        -webkit-transition: .3s all ease;
        -o-transition: .3s all ease;
        transition: .3s all ease;
        text-decoration: none;
    }
    a:hover {
        color: #008081;
    }
    .form-control {
        display: block;
        width: 100%;
        margin-top: 15px;
        margin-bottom: 15px;
        font-size: 1rem;
        line-height: 1.25;
        height: 50px;
        background-color: #fff;
        background-image: none;
        background-clip: padding-box;
        border: 1px solid rgba(0, 0, 0, 0.15);
        -webkit-transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;
        transition: border-color ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s;
        -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
        transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
        transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s, -webkit-box-shadow ease-in-out 0.15s
    }
    input {
        padding: 10p;
    }
    .form-control:focus {
        outline: 1px solid #00e6e6;
        border-radius: none;
    }
    .btn {
        display: inline-block;
        font-weight: 280;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        padding: 15px 20px;
        font-size: 13px;
        line-height: 1.25;
        -webkit-transition: all 0.15s ease-in-out;
        -o-transition: all 0.15s ease-in-out;
        transition: all 0.15s ease-in-out;
        margin-bottom: 10%;
        background-color: white;
        border: 1px solid rgba(0, 0, 0, 0.2)    
    }
    .btn:hover {
        color: white;
        background-color: black;
    }
    footer {
        background-color: #f8f9fa !important;
        text-align: center;
        color: #868e96;
        padding-top: 3%;
        padding-bottom: 3%;
    }
    .pb_font-14 {
        font-size: 14px;
    }
    .pb_font-8 {
        font-size: 12px;
    }
`;

const Footer = () => (
    <section id='section-contact'>
 <Styles>
    <div className='contactUs container'>
        <div>
            <h2 className="heading-border-top">Get In Touch</h2>
            <p className='description'>Contact us to sponsor us and the work that we do.<br></br> <br></br>If you are a student interested in participating in our events, reach out via our Facebook page or through email!</p>
        </div>

        <div className="row">
            <div className="col-md-3 text-center">
            <ul className="pb_contact_details_v1 text-center">
            <li>
                <span className="text-uppercase">EMAIL</span> <br></br>
                <a href="mailto:gtcssocialgood@gmail.com"> gtcssocialgood [at] gmail [dot] com </a>
            </li>
            </ul>
            </div>
            <div className="col-md-3 text-center">
                <ul className="pb_contact_details_v1 text-center">
                <li>
                    <span className="text-uppercase">BLOG</span><br></br>
                    <a href="http://www.medium.com/@gtcssocialgood" target="blank">Medium</a>
                </li>
                </ul>
            </div>
            <div className="col-md-3 text-center">
                <ul className="pb_contact_details_v1 text-center">
                <li>
                    <span className="text-uppercase">FACEBOOK</span><br></br>
                    <a href="https://www.facebook.com/gtcssg/" target="blank">Facebook</a>
                </li>
                </ul>
            </div>
            <div className="col-md-3 text-center">
                <ul className="pb_contact_details_v1 text-center">
                <li> 
                    <span className="text-uppercase">JOIN OUR MAILING LIST</span><br></br>
                    <label for="email">Email</label>
                        <form action="https://facebook.us7.list-manage.com/subscribe/post?u=fe81bf8d49e834c79b16a334c&amp;id=e9abbb77ec" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate="">
                            <div className="form-group">
                                <input type="email" name="EMAIL" className="form-control" required=""></input>
                            </div>
                            <div className='hidden' aria-hidden="true"><input type="text" name="b_fe81bf8d49e834c79b16a334c_e9abbb77ec" tabindex="-1" value=""></input></div>
                            <div className="form-group">
                                <div className="clear"><input type="submit" value="SUBSCRIBE" name="subscribe" className="btn"></input></div>
                            </div>
                        </form>
                </li>
                </ul>
            </div>
        </div>
    </div>  
    <footer>
        <p className="pb_font-14">Georgia Tech CS + Social Good</p>
        <p className="pb_font-8">Design credits to uiCookies &copy; 2017 <a href="https://uicookies.com/">Law</a>. <br></br>© {new Date().getFullYear()}, Built with {` `}<a href="https://www.gatsbyjs.org">Gatsby</a> and <a href="https://www.sanity.io">Sanity</a></p>
    </footer>
 </Styles>
 </section>
)

export default Footer 